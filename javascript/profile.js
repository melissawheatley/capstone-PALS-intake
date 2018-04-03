"use strict";

let $ = require('jquery'), 
    render = require('./DOMbuilder'),
    caseFile = require('./caseInfo'),
    responseType = require('./responseType'),
    googleUser = require('./user');

function loadProfile(curUserCaseID) {
    $('#legal').addClass("d-none");
    let currentUser = googleUser.getUser();
    console.log("current user at beginning of loadProfile", currentUser);
    caseFile.getProfile(currentUser)
    .then((profileData) =>{
      var curUserCaseID = caseFile.getCase();
      console.log("Here's the profile data ", profileData);
        render.buildUserProfile(profileData, curUserCaseID);
    });
  }

  function loadDropProfile() {
    $('#legal').addClass("d-none");
    let currentUser = googleUser.getUser();
    console.log("current user at beginning of loadProfile", currentUser);
    caseFile.getProfile(currentUser)
    .then((profileData) =>{
      let curEditProfile = Object.keys(profileData);
      curEditProfile.forEach(function(item){
        console.log("here's the key from dropdown click: ", curEditProfile);
        console.log("Here's the profile data from dropdown click: ", profileData);
        render.buildUserProfile(profileData, curEditProfile);
      });
    });
  }

// Profile Page Interactions listeners//
$(document).on("click", "#deleteProfile", function () {
    // console.log("delete button was clicked");
    let curEditProfile = $(this).data("edit-case");
    console.log("delete button was clicked with profile", curEditProfile);
    var deletePrompt = window.confirm(`Are you sure? Press ok to delete your profile.`);
    if(deletePrompt == true ){
    caseFile.deleteProfile(curEditProfile)
    .then(() =>{
      render.renderHomeMain();
      let deleteMessage = `<div id="deleteSuccess" class="redBG"><h4 class="text-center" style="color: white;">Your profile has been deleted.</h4></div>`;
      $(deleteMessage).insertBefore($('#primaryContainer'));
    }).then(()=>{
      $('#deleteSuccess').delay( 2100 ).fadeOut( 400 );
    });
  }});

// get the profiledata, then populate the form for editing.
$(document).on("click", "#editProfile", function () {
  console.log("clicked edit profile");
  var curCaseID = $(this).data("edit-case"); 
  console.log("curCaseID from editbtn click: ", curCaseID);
  caseFile.getCaseByID(curCaseID)
  .then((profileData) =>{
    // console.log("profileData after editbtn click: ", profileData);
    return render.buildEditForm(profileData, curCaseID);
  }).then((finishedForm) =>{
    // console.log('edit form coming...');
    responseType.populatePlanTypes();
    $("#primaryContainer").html(finishedForm);
  });
});

// loads profile when clicking on profilepic dropdown
$(document).on('click', '#viewProfdropdown', function () {
  console.log('view profile clicked from dropdown');
  var user = googleUser.getUser();
  loadDropProfile(user);
});

$(document).on('click', '#editCancel', function () {
  var user = googleUser.getUser();
  loadDropProfile(user);
});

$(document).on('click', '#viewALLdropdown', function(){
  console.log('clicked view all');
  caseFile.getALLprofiles()
  .then((profileData)=>{
    console.log('profileData from all: ', profileData);
    render.adminViewAll(profileData);
  });
});


module.exports = {loadProfile};