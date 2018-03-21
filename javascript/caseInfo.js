"use strict";
console.log('caseInfo is compiling');

// REQUIRES
let $ = require('jquery'),
    config = require('./config'),
    build = require('./DOMbuilder'),
    objects = require('./objectBuilder'),
    response = require('./responseType');


function addCaseInfo(caseObj) {
	// console.log("add case to firebase", caseInfo);
	return $.ajax({
      url: `${config.getFBsettings().databaseURL}/caseInfo.json`,
      type: 'POST',
      data: JSON.stringify(caseObj),
      dataType: 'json'
   }).done((caseID) => {
    // need to call the switch here, then pass it in below
    build.displayLeadResults(caseID);
    return caseID;
   }).then(()=>{
       let switchType = caseObj.planType;
    response.fillTypeSwitch(switchType);
   });
}

module.exports = {addCaseInfo};
