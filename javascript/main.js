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
    

//LOGIN
$("#login").click(function(){
    // console.log("user clicked login");
    googleUser.googleLogIn()
    .then((result) => {
        console.log("User result from login: ", result.user.uid);
        googleUser.setUser(result.user.uid);
        $("#login").addClass("d-none");
        $("#userPic").removeClass("d-none").html(`${result.user.displayName}  <img src="${result.user.photoURL}" alt="${result.user.displayName} photo from Google" class="profPic rounded-circle">`);
        sendToFirebase(buildUserObj(result.user.uid, result.user.email, result.user.displayName));
        // console.log("login complete!");
    });
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
    addCase.addCaseInfo(caseObj);
});

//RENDER LONG FORM
//event listener to render long form
$(document).on("click", "#loadLongForm", render.loadLongForm);