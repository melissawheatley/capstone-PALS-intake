"use strict";

// REQUIRES
let googleUser = require('./user'),
    config = require("./config"),
    objects = require('./objectBuilder'),
    render = require('./DOMbuilder'),
    caseFile = require('./caseInfo'),
    plans = require('./responseType'),
    profile = require('./profile'),
    $ = require('jquery');

// LEAD GEN FORM 
// event listener to build user object
$(document).on("click", "#submitLeadGen", function(){
    console.log('user clicked submit on lead gen form...');
    let caseObj = objects.buildInitialCase();
    caseFile.createCaseInfo(caseObj)
    .then((caseID)=>{
        // console.log("caseID after sending leadgen to firebase: ", caseID.name); 
        caseFile.setCase(caseID);
        render.displayLeadResults();
        let switchType = caseObj.planType;
        plans.fillTypeSwitch(switchType);
    });
});

//SECONDARY - LONG FORM
//event listener to render long form
$(document).on("click", "#loadLongForm", render.loadLongForm);

//event listener to build userObj2
$(document).on("click", "#submitLongForm", function(event){
    event.preventDefault();
    console.log('user clicked submit on secondary long form');
    let curUserCaseID = caseFile.getCase();
    let caseObj2 = objects.buildSecondaryCase();
    caseFile.addCaseInfo(curUserCaseID, caseObj2)
    .then(()=>{
        console.log("case file " + curUserCaseID + " sucessfully updated");
        profile.loadProfile(curUserCaseID);
    });
});

// listens for a click on the update profile button and puts info in firebase
$(document).on('click', '.save_edit_btn', function(event){
  event.preventDefault();
  console.log('clicked to update profile');
  var curUserCaseID = $(this).data("case-info");
  console.log("curCaseID from button click at 10:05: ", curUserCaseID);
//   let curUserCaseID = caseFile.getCase();
    let caseEditObj = objects.buildFullCase();
    caseFile.editProfile(caseEditObj, curUserCaseID)
    .then(()=>{
        console.log("sucessfully updated case via edit form");
        profile.loadProfile();
    });
});
