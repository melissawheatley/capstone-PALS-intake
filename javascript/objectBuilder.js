"use strict";

// REQUIRES
let $ = require('jquery'),
    user = require('./user');

function buildInitialCase() {
    let caseObj = {
    parentName1: $("#firstName-parent1").val(),
    lastName: $("#lastName").val(),
    parentEmail: $("#parentEmail").val(),
    childName: $("#childName").val(),
    birthCountry: $("#birthCountry").val(),
    planType: $("#planType").val(),
    eduInfo: $("#eduInfo").val(),
    referralSource: $("#referralSource").val(),
    uid: user.getUser(),
  };
  console.log("case object", caseObj);
  return caseObj;
}
function buildSecondaryCase(){
    let caseObj2 = {
    childDOB: $("#childDOB").val(),
    adoptionDate: $("#adoptionDate").val(),
    childDescription: $("#childDescription").val(),
    currentGrade: $("#currentGrade").val(),
    schoolName: $("#schoolName").val(),
    currentState: $("#currentState").val(),
    diagnoses: $("#diagnoses").val(),
    counseling: $("#counseling").val(),
    needsKnown: $("#needsKnown").val(),
    parentName2: $("#firstName-parent2").val(),
    parent2LastName: $("#lastName-parent2").val(),
    phoneNumber: $("#phoneNumber").val(),
    callPreference: $("#callPreference").val()
    };
    console.log("case object 2: ", caseObj2);
    return caseObj2;
}

function buildFullCase(){
    let caseEditObj = {
    parentName1: $("#firstName-parent1").val(),
    lastName: $("#lastName").val(),
    parentEmail: $("#parentEmail").val(),
    childName: $("#childName").val(),
    birthCountry: $("#birthCountry").val(),
    planType: $("#planType").val(),
    eduInfo: $("#eduInfo").val(),
    referralSource: $("#referralSource").val(),
    childDOB: $("#childDOB").val(),
    adoptionDate: $("#adoptionDate").val(),
    childDescription: $("#childDescription").val(),
    currentGrade: $("#currentGrade").val(),
    schoolName: $("#schoolName").val(),
    currentState: $("#currentState").val(),
    diagnoses: $("#diagnoses").val(),
    counseling: $("#counseling").val(),
    needsKnown: $("#needsKnown").val(),
    parentName2: $("#firstName-parent2").val(),
    parent2LastName: $("#lastName-parent2").val(),
    phoneNumber: $("#phoneNumber").val(),
    callPreference: $("#callPreference").val()
    };
        console.log("edited full case object: ", caseEditObj);
        return caseEditObj;
    }

module.exports = {buildInitialCase, buildSecondaryCase, buildFullCase};