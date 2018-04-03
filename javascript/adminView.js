"use strict";

let caseFile = require('./caseInfo'),
    render = require('./DOMbuilder'),
    $ = require('jquery');


function adminViewAll(profileData){
    console.log('profile cards coming up');
    let profileCards = `<h1>All Profiles</h1><div class="row">`;
    let keys = Object.keys(profileData); 
    keys.forEach(function(item){
        profileCards += `<div class="col-sm-4">
        <div class="card border-dark">
          <div class="card-body">
            <h2 class="card-title">${profileData[item].childName} ${profileData[item].lastName}</h2>
            <p class="card-text"><strong>Email:</strong> ${profileData[item].parentEmail}</p>
            <p class="card-text">Overview:${profileData[item].eduInfo}</p>
            <a href="#" class="btn btn-danger btn-lg cardBtn" data-edit-case="${keys}">View Profile</a>
          </div>
        </div>
      </div>`;
    });
    profileCards += `</div>`;
    console.log("profilecards ", profileCards);
    $('#primaryContainer').html(profileCards);
}

$(document).on('click', '.cardBtn', function(){
    var curCaseID = $(this).data("edit-case"); 
    caseFile.getCaseByID(curCaseID)
    .then((profileData)=>{
        render.buildUserProfile(profileData, curCaseID);
    });
});

$(document).on('click', '#viewALLdropdown', function(){
    console.log('clicked view all');
    caseFile.getALLprofiles()
    .then((profileData)=>{
      console.log('profileData from all: ', profileData);
      adminViewAll(profileData);
    });
  });

module.exports = {adminViewAll};