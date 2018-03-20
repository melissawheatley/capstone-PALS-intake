"use strict";
console.log('caseInfo is compiling');

// REQUIRES
let $ = require('jquery'),
    config = require('./config'),
    build = require('./DOMbuilder'),
    objects = require('./objectBuilder');


function addCaseInfo(caseObj) {
	// console.log("add case to firebase", caseInfo);
	return $.ajax({
      url: `${config.getFBsettings().databaseURL}/caseInfo.json`,
      type: 'POST',
      data: JSON.stringify(caseObj),
      dataType: 'json'
   }).done((caseID) => {
    build.displayLeadResults(caseID);
    return caseID;
   });
}

module.exports = {addCaseInfo};
