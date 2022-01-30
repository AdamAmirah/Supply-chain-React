pragma solidity >=0.4.22 <0.9.0;

contract Supply_chain {
    uint256 public user_count = 0; // state variable

    struct user {
        uint256 id;
        string user_name;
        string pass_word;
        string userType;
        address user_address;
        bool isUserLoggedIn;
    }

    constructor() public {
        createUser(
            "Zafar Saleem",
            "123123123",
            "MANUFACTURER",
            0x08fcd7e7E3aBa4B12e7dEc67BB6C1c3f6d6801ff
        );
        createUser(
            "Amirah Adam",
            "2",
            "CARRIER",
            0xbb1Fb572549a4b67b639Ff59f473e93FE107Cbc6
        );
        createUser(
            "Furqan",
            "3",
            "CUSTOMER",
            0x8C28A294328B61ECC778b4091cE2AA8E35C8D170
        );
        addPackage(1, "Jeddah", "Riyadh", 3);
    }

    mapping(uint256 => user) public users;

    function createUser(
        string memory _name,
        string memory _password,
        string memory _userType,
        address _user_address
    ) public returns (uint256) {
        user_count++;
        users[user_count] = user(
            user_count,
            _name,
            _password,
            _userType,
            _user_address,
            false
        );

        return user_count;
    }

    function login(uint256 id, string memory _password) public {
        require(
            keccak256(abi.encodePacked(users[id].pass_word)) ==
                keccak256(abi.encodePacked(_password))
        );
        users[id].isUserLoggedIn = true;
    }

    // check the user logged In or not
    function checkIsUserLogged(uint256 id) public view returns (bool) {
        return (users[id].isUserLoggedIn);
    }

    // logout the user
    function logout(uint256 id) public returns (bool) {
        users[id].isUserLoggedIn = false;
        return (users[id].isUserLoggedIn);
    }

    ///////////////////////////////////////////////////////////

    uint256 public package_count = 0; // state variable

    struct package {
        uint256 id;
        uint256 package_owner;
        string origin_name;
        string destination_name;
        uint256 customer_id;
        uint256 issueTime;
    }

    mapping(uint256 => package) public packages;

    function addPackage(
        uint256 _owner_id,
        string memory _origin_name,
        string memory _destination_name,
        uint256 _customer_id
    ) public returns (uint256) {
        if (
            keccak256(abi.encodePacked(users[_owner_id].userType)) ==
            keccak256("MANUFACTURER")
        ) {
            package_count++;
            packages[package_count] = package(
                package_count,
                _owner_id,
                _origin_name,
                _destination_name,
                _customer_id,
                block.timestamp
            );
            return package_count;
        }

        return 0;
    }

    function getPackage(uint256 _package_id)
        public
        view
        returns (
            uint256,
            string memory,
            string memory
        )
    {
        return (
            packages[_package_id].package_owner,
            packages[_package_id].origin_name,
            packages[_package_id].destination_name
        );
    }

    /////////////////////////////////////////////////////////

    uint256 public track_count = 0; // state variable

    struct track_package {
        uint256 track_id;
        uint256 package_id;
        uint256 owner_id;
        address owner_address;
        uint256 timeStamp;
        string location;
        string status;
    }

    event Departed(
        uint256 track_id,
        uint256 package_id,
        uint256 owner_id,
        address owner_address,
        uint256 timeStamp,
        string location
    );
    event Arrived(
        uint256 track_id,
        uint256 package_id,
        uint256 owner_id,
        address owner_address,
        uint256 timeStamp,
        string location
    );
    event Delivered(
        uint256 track_id,
        uint256 package_id,
        uint256 owner_id,
        address owner_address,
        uint256 timeStamp,
        string location
    );

    mapping(uint256 => track_package[]) public tracks;

    function get_sensor_location() public pure returns (string memory) {
        /*check the location with package_id*/
        /* Assuming the sensor values coming from the API*/
        return "3.1390,101.6869";
    }

    modifier isOwner(uint256 _package_id, uint256 currentOwner_id) {
        if (currentOwner_id != packages[_package_id].package_owner)
            revert("Not the package owner");
        _;
    }

    function transferOwnership(
        uint256 currentOwner_id,
        uint256 nextOwner_id,
        uint256 _package_id,
        string memory _location
    ) public isOwner(_package_id, currentOwner_id) returns (bool) {
        if (_package_id > package_count && _package_id > 0)
            revert("No such package");

        user memory user1 = users[currentOwner_id];
        user memory user2 = users[nextOwner_id];
        track_count++;

        if (
            keccak256(abi.encodePacked(user1.userType)) ==
            keccak256("MANUFACTURER") &&
            keccak256(abi.encodePacked(user2.userType)) == keccak256("CARRIER")
        ) {
            packages[_package_id].package_owner = nextOwner_id;
            tracks[_package_id].push(
                track_package({
                    track_id: track_count,
                    package_id: _package_id,
                    owner_address: user2.user_address,
                    owner_id: nextOwner_id,
                    timeStamp: block.timestamp,
                    location: _location,
                    status: "Departed"
                })
            );
            emit Departed(
                track_count,
                _package_id,
                nextOwner_id,
                user2.user_address,
                block.timestamp,
                _location
            );
            return true;
        } else if (
            keccak256(abi.encodePacked(user1.userType)) ==
            keccak256("CARRIER") &&
            keccak256(abi.encodePacked(user2.userType)) == keccak256("CARRIER")
        ) {
            packages[_package_id].package_owner = nextOwner_id;

            tracks[_package_id].push(
                track_package({
                    track_id: track_count,
                    package_id: _package_id,
                    owner_address: user2.user_address,
                    owner_id: nextOwner_id,
                    timeStamp: block.timestamp,
                    location: _location,
                    status: "Arrived"
                })
            );
            emit Arrived(
                track_count,
                _package_id,
                nextOwner_id,
                user2.user_address,
                block.timestamp,
                _location
            );
            return true;
        } else if (
            keccak256(abi.encodePacked(user1.userType)) ==
            keccak256("CARRIER") &&
            keccak256(abi.encodePacked(user2.userType)) == keccak256("CUSTOMER")
        ) {
            if (
                keccak256(abi.encodePacked(get_sensor_location())) ==
                keccak256(abi.encodePacked(_location))
            ) {
                packages[_package_id].package_owner = nextOwner_id;

                tracks[_package_id].push(
                    track_package({
                        track_id: track_count,
                        package_id: _package_id,
                        owner_address: user2.user_address,
                        owner_id: nextOwner_id,
                        timeStamp: block.timestamp,
                        location: _location,
                        status: "Delivered"
                    })
                );

                emit Delivered(
                    track_count,
                    _package_id,
                    nextOwner_id,
                    user2.user_address,
                    block.timestamp,
                    _location
                );
                return true;
            }
            revert("Locations are not matched");
        }
        revert("Incorrect transaction");
    }

    function getTrack_count(uint256 _package_id)
        public
        view
        returns (uint256 count)
    {
        return tracks[_package_id].length;
    }

    function get_track(uint256 _package_id, uint256 _track_id)
        public
        view
        returns (
            uint256,
            address,
            uint256,
            uint256,
            string memory,
            string memory
        )
    {
        return (
            tracks[_package_id][_track_id].package_id,
            tracks[_package_id][_track_id].owner_address,
            tracks[_package_id][_track_id].owner_id,
            tracks[_package_id][_track_id].timeStamp,
            tracks[_package_id][_track_id].location,
            tracks[_package_id][_track_id].status
        );
    }

    /////////////////////////////////////////////////////////////////////////
    event cancelorder(uint256 package_id, uint256 customer_id);

    modifier isCustomer(uint256 _package_id, uint256 _customer_id) {
        if (_customer_id != packages[_package_id].customer_id)
            revert("This package does not belong to this user");
        _;
    }

    function orderCancelation(uint256 _package_id, uint256 _customer_id)
        public
        isCustomer(_package_id, _customer_id)
        returns (string memory)
    {
        require(
            block.timestamp >= packages[_package_id].issueTime + 10 * 1 days
        );

        emit cancelorder(_package_id, _customer_id);
        delete packages[_package_id];

        return ("order canceled");
    }

    /////////////////////////////////////////////////////////////////////////
    event lostpackage(uint256 package_id, uint256 owner_id, string msg);

    function reportlostpackage(uint256 _package_id, uint256 _owner_id)
        public
        isOwner(_package_id, _owner_id)
    {
        require(
            keccak256(abi.encodePacked(users[_owner_id].userType)) ==
                keccak256("MANUFACTURER") ||
                keccak256(abi.encodePacked(users[_owner_id].userType)) ==
                keccak256("CARRIER")
        );

        user memory user1 = users[_owner_id];
        track_count++;

        tracks[_package_id].push(
            track_package({
                track_id: track_count,
                package_id: _package_id,
                owner_address: user1.user_address,
                owner_id: _owner_id,
                timeStamp: block.timestamp,
                location: "NULL",
                status: "Lost"
            })
        );
        emit lostpackage(_package_id, _owner_id, "Package has been lost");
    }

    /////////////////////////////////////////////////////////////////////////
}
