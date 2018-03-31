"use strict";

// REQUIRES
let $ = require('jquery'),
    user = require('./user');

function buildInitialCase() {
    let caseObj = {
    parentName1: $("#firstName-parent1").val(),
    lastName: $("#lastName").val(),
    childName: $("#childName").val(),
    childDOB: $("#childDOB").val(),
    birthCountry: $("#birthCountry").val(),
    childDescription: $("#childDescription").val(),
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
    adoptionDate: $("#adoptionDate").val(),
    counseling: $("#counseling").val(),
    diagnoses: $("#diagnoses").val(),
    parentName2: $("#firstName-parent2").val(),
    parent2LastName: $("#lastName-parent2").val()
    };
    console.log("case object 2: ", caseObj2);
    return caseObj2;
}

function buildFullCase(){
    let caseEditObj = {
        parentName1: $("#firstName-parent1").val(),
        lastName: $("#lastName").val(),
        childName: $("#childName").val(),
        childDOB: $("#childDOB").val(),
        birthCountry: $("#birthCountry").val(),
        childDescription: $("#childDescription").val(),
        planType: $("#planType").val(),
        eduInfo: $("#eduInfo").val(),
        referralSource: $("#referralSource").val(),
        adoptionDate: $("#adoptionDate").val(),
        counseling: $("#counseling").val(),
        diagnoses: $("#diagnoses").val(),
        parentName2: $("#firstName-parent2").val(),
        parent2LastName: $("#lastName-parent2").val()
        };
        console.log("edited full case object: ", caseEditObj);
        return caseEditObj;
    }

module.exports = {buildInitialCase, buildSecondaryCase, buildFullCase};