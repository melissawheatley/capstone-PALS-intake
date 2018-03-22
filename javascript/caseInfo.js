"use strict";

// REQUIRES
let $ = require('jquery'),
    config = require('./config'),
    build = require('./DOMbuilder'),
    objects = require('./objectBuilder'),
    response = require('./responseType');


function createCaseInfo(caseObj) {
	// console.log("add case to firebase", caseInfo);
	return $.ajax({
      url: `${config.getFBsettings().databaseURL}/caseInfo.json`,
      type: 'POST',
      data: JSON.stringify(caseObj),
      dataType: 'json'
   }).done((caseID) => {
    return caseID;
   });
}

function addCaseInfo(curUserCaseID, caseObj2) {
	return $.ajax({
      url: `${config.getFBsettings().databaseURL}/caseInfo/${curUserCaseID}.json`,
      type: 'PATCH',
      data: JSON.stringify(caseObj2),
      dataType: 'json'
   }).done((caseID) => {
       console.log("case file" + caseID + "sucessfully updated");
    return caseID;
   });
}

function getProfile(currentUser){
    return $.ajax({
      url: `${config.getFBsettings().databaseURL}/caseInfo.json?orderBy="uid"&equalTo="${currentUser}"`
    }).done((profileData) => {
      return profileData;
    });
  }

module.exports = {createCaseInfo, addCaseInfo, getProfile};
