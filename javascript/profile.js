"use strict";

let $ = require('jquery'), 
    render = require('./DOMbuilder'),
    caseFile = require('./caseInfo'),
    googleUser = require('./user');


function loadProfile() {
    let currentUser = googleUser.getUser();
    console.log("current user at beginning of loadProfile", currentUser);
    caseFile.getProfile(currentUser)
    .then((profileData) =>{
      console.log("Here's the profile data ", profileData);
        render.buildUserProfile(profileData);
    });
  }

//Profile Page
$(document).on("click", "#deleteProfile", function () {
    console.log("delete button was clicked");
    caseFile.deleteProfile(curUserCaseID)
    .then(() =>{
      render.renderHomeMain();
      let deleteMessage = `<div class="redBG"><h4 class="text-center" style="color: white;">Your profile has been deleted.</h4></div>`;
      $('#primaryContainer').prepend(deleteMessage).delay( 800 ).fadeOut( 400 );
    });
  });

module.exports = {loadProfile};