"use strict";

// REQUIRES
let $ = require('jquery'),
    config = require('./config'),
    build = require('./DOMbuilder'),
    objects = require('./objectBuilder'),
    response = require('./responseType');

let curUserCaseID;


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

function setCase(caseID){
	curUserCaseID = caseID.name;
}

function getCase(){
    return curUserCaseID;
}

function addCaseInfo(curUserCaseID, caseObj2) {
	return $.ajax({
      url: `${config.getFBsettings().databaseURL}/caseInfo/${curUserCaseID}.json`,
      type: 'PATCH',
      data: JSON.stringify(caseObj2),
      dataType: 'json'
   }).done((caseID) => {
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

function deleteProfile(caseID) {
return $.ajax({
    url: `${config.getFBsettings().databaseURL}/caseInfo/${caseID}.json`,
    method: 'DELETE'
}).done((data) =>{
    return data;
});
}

module.exports = {createCaseInfo, addCaseInfo, getProfile, deleteProfile, setCase, getCase};
