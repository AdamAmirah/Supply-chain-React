export const SUPPLY_ADDRESS = "0xF4341A9e44600038Bd51030EDf4eEd9f64690A6D";

export const SUPPLY_ABI = [
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "track_id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "package_id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "owner_id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "owner_address",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timeStamp",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "location",
        type: "string",
      },
    ],
    name: "Arrived",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "track_id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "package_id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "owner_id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "owner_address",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timeStamp",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "location",
        type: "string",
      },
    ],
    name: "Delivered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "track_id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "package_id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "owner_id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "owner_address",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timeStamp",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "location",
        type: "string",
      },
    ],
    name: "Departed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "package_id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "customer_id",
        type: "uint256",
      },
    ],
    name: "cancelorder",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "package_id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "owner_id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "msg",
        type: "string",
      },
    ],
    name: "lostpackage",
    type: "event",
  },
  {
    constant: true,
    inputs: [],
    name: "package_count",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "packages",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "package_owner",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "origin_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "destination_name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "customer_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "issueTime",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "track_count",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tracks",
    outputs: [
      {
        internalType: "uint256",
        name: "track_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "package_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "owner_id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner_address",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "timeStamp",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "location",
        type: "string",
      },
      {
        internalType: "string",
        name: "status",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "user_count",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "users",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "user_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "pass_word",
        type: "string",
      },
      {
        internalType: "string",
        name: "userType",
        type: "string",
      },
      {
        internalType: "address",
        name: "user_address",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isUserLoggedIn",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_password",
        type: "string",
      },
      {
        internalType: "string",
        name: "_userType",
        type: "string",
      },
      {
        internalType: "address",
        name: "_user_address",
        type: "address",
      },
    ],
    name: "createUser",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_password",
        type: "string",
      },
    ],
    name: "login",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "checkIsUserLogged",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "logout",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "_owner_id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_origin_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_destination_name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_customer_id",
        type: "uint256",
      },
    ],
    name: "addPackage",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "_package_id",
        type: "uint256",
      },
    ],
    name: "getPackage",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "get_sensor_location",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "currentOwner_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "nextOwner_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_package_id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_location",
        type: "string",
      },
    ],
    name: "transferOwnership",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "_package_id",
        type: "uint256",
      },
    ],
    name: "getTrack_count",
    outputs: [
      {
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "_package_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_track_id",
        type: "uint256",
      },
    ],
    name: "get_track",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "_package_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_customer_id",
        type: "uint256",
      },
    ],
    name: "orderCancelation",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "_package_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_owner_id",
        type: "uint256",
      },
    ],
    name: "reportlostpackage",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];