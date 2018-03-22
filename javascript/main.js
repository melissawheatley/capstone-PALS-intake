"use strict";

console.log('main.js is connected');

// REQUIRES
let googleUser = require('./user'),
    config = require("./config"),
    objects = require('./objectBuilder'),
    render = require('./DOMbuilder'),
    addCase = require('./caseInfo'),
    plans = require('./responseType'),
    $ = require('jquery');

var currentUser;
var caseID;
var curUserCaseID;    

//LOGIN
$("#login").click(function(){
    // console.log("user clicked login");
    googleUser.googleLogIn()
    .then((result) => {
        let currentUser = result;
        // console.log("UID result from login: ", result.user.uid);
        googleUser.setUser(result.user.uid);
        $("#login").addClass("d-none");
        $("#userPic").removeClass("d-none").html(`${result.user.displayName}  <img src="${result.user.photoURL}" alt="${result.user.displayName} photo from Google" class="profPic rounded-circle">`);
        sendToFirebase(buildUserObj(result.user.uid, result.user.email, result.user.displayName));
        // console.log("login complete!");
        return currentUser;
    });
    console.log("UID result from login: ", currentUser.user.uid);
});

//BUILD USER OBJECT
function buildUserObj(uid, email, name) {
    let userObj = {
        uid: uid,
        email: email,
        fullName: name,
        userTypeID: null
  };
  console.log("userObj:", userObj);
  return userObj;
}

//SEND INFO TO FIREBASE
function sendToFirebase(userObj){
      googleUser.addUser(userObj);
}

// LEAD GEN FORM 
// event listener to build user object
$('#submitLeadGen').click(function(){
    // console.log('user clicked submit on lead gen form');
    let caseObj = objects.buildInitialCase();
    addCase.createCaseInfo(caseObj)
    .then((caseID)=>{
        console.log("caseID: ", caseID);
        // this is funky. how could i access caseID outside of this function without creating the other global variable? 
        curUserCaseID = caseID.name;
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
    // console.log("current case after second submit clicked is", curUserCaseID);
    let caseObj2 = objects.buildSecondaryCase();
    addCase.addCaseInfo(curUserCaseID, caseObj2);
});
