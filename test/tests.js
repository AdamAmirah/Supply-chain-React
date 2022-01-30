const supply_chain = artifacts.require("supply_chain");
const { BN, expectEvent } = require("@openzeppelin/test-helpers");
contract('supply_chain', (accounts) =>{

let supplychain; 

before(async () => {
    supplychain = await supply_chain.deployed(); 
  });
   _name = "Zafar Saleem";
   _password = "123123123";
   _userType="MANUFACTURER";
   _user_address = accounts[0];



  it ('Should create new user', async()=>{

    await supplychain.createUser(_name,_password,_userType,_user_address);
    const getuser = await supplychain.getUser(1);
    assert.equal(getuser[1],_user_address);
  });

var _owner_id = 1; 
var _customer_id = 3;
var _origin_name = "Jeddah"; 
var _destination_name = "Riyadh";
var _package_id = 1;


it ('Should add a package', async()=>{

    await supplychain.addPackage(_owner_id,_origin_name,_destination_name,_customer_id);
    const  getpackage = await supplychain.getPackage.call(1);
    assert.equal( getpackage[0],_owner_id);
    assert.equal( getpackage[1],_origin_name);
    assert.equal( getpackage[2],_destination_name);

  });


  it ('Should  let user login', async()=>{

  
    await supplychain.login(_owner_id,_password);
    const  checkUserLogged = await supplychain.checkIsUserLogged(1);
    assert.equal( checkUserLogged,_owner_id);

  });
  it ('Should  let user logout', async()=>{

     await supplychain.logout(_owner_id);
    const  checkUserLogged = await supplychain.checkIsUserLogged(1);
    assert.equal( checkUserLogged,false);

  });



  
  /*it ('Should  allow customer cancel order', async()=>{
    var cancel = await supplychain.orderCancelation(_package_id, _customer_id);
    expectEvent(cancel.receipt, "order canceled", {
        owner: this.accounts[0]
    })

  });*/

  /*it ('Should let manufacturer or carrier report lost item', async()=>{
    
     await supplychain.reportlostpackage(_package_id, _owner_id);
    const  reportlostpackage = await supplychain.reportlostpackage(1,1);
    assert.equal(reportlostpackage(1,1), 'package status is updated to loss');

  });*/
  

});

