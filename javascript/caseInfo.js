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

function getCaseByID(caseID) {
return $.ajax({
    url: `${config.getFBsettings().databaseURL}/caseInfo/${caseID}.json`
}).done((profileData) =>{
    return profileData;
}).fail((error) =>{
    return error;
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

function editProfile(caseEditObj, curUserCaseID) {
    return $.ajax({
      url: `${config.getFBsettings().databaseURL}/caseInfo/${curUserCaseID}.json`,
      type: 'PATCH',
      data: JSON.stringify(caseEditObj),
      dataType: "json"
  }).done((caseID) =>{
    return caseID;
  });
  }


module.exports = {createCaseInfo, addCaseInfo, getProfile, getCaseByID, deleteProfile, setCase, getCase, editProfile};
