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

// Profile Page Interactions //
$(document).on("click", "#deleteProfile", function () {
    console.log("delete button was clicked");
    var curUserCaseID = caseFile.getCase();
    caseFile.deleteProfile(curUserCaseID)
    .then(() =>{
      render.renderHomeMain();
      let deleteMessage = `<div id="deleteSuccess" class="redBG"><h4 class="text-center" style="color: white;">Your profile has been deleted.</h4></div>`;
      $(deleteMessage).insertBefore($('main'));
    }).then(()=>{
      $('#deleteSuccess').delay( 2100 ).fadeOut( 400 );
    });
  });

module.exports = {loadProfile};