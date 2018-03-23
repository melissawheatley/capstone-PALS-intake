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

var currentUser;
var caseID;
var curUserCaseID;   

// LEAD GEN FORM 
// event listener to build user object
$('#submitLeadGen').click(function(){
    // console.log('user clicked submit on lead gen form');
    let caseObj = objects.buildInitialCase();
    caseFile.createCaseInfo(caseObj)
    .then((caseID)=>{
        console.log("caseID: ", caseID);
        // this is funky. how could i access caseID outside of this function without creating the other global variable? 
        curUserCaseID = caseID.name;
        // take this out of main and do a getter/setter 
        //or get by UID and add this to the set user
        // console.log("current case after sending first object to firebase is", curUserCaseID);
    }).then(()=>{
        render.displayLeadResults();
        let switchType = caseObj.planType;
        plans.fillTypeSwitch(switchType);
    });
});

//SECONDARY - LONG FORM
//event listener to render long form
$(document).on("click", "#loadLongForm", render.loadLongForm);

//event listener to build userObj2
$(document).on("click", "#submitLongForm", function(){
    // console.log('user clicked submit on secondary long form');
    console.log("current case after second submit clicked is", curUserCaseID);
    let caseObj2 = objects.buildSecondaryCase();
    caseFile.addCaseInfo(curUserCaseID, caseObj2)
    .then(()=>{
        console.log("case file" + curUserCaseID + "sucessfully updated");
        profile.loadProfile(curUserCaseID);
    });
});