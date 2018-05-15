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
            <p class="card-text"><strong>Parents:</strong> ${profileData[item].parentName1},  ${profileData[item].parentName2}</p>
            <p class="card-text"><strong>Email:</strong> ${profileData[item].parentEmail}</p>
            <p class="card-text"><strong>Overview:</strong> ${profileData[item].eduInfo}</p>
            <a href="#" class="btn btn-danger btn-lg cardBtn" data-edit-case="${item}">View Profile</a>
          </div>
        </div>
      </div>`;
    });
    profileCards += `</div>`;
    $('#primaryContainer').html(profileCards);
    $('#legal').addClass('d-none');
}

function buildProfileForAdmin(profileData, caseID) {
  let profile =
  `<div class="row">
      <div class="col col-auto pl-0">
          <h1>${profileData.childName} ${profileData.lastName}'s Profile</h1>
      </div>
      <div class="col col-md-4 mt-2">
          <button type="button" id="editProfile" data-edit-case="${caseID}" class="btn btn-outline-danger btn-lg btn-profile"><a href="#">Edit</a></button>
          <button type="button" id="deleteProfile" data-edit-case="${caseID}" class="btn btn-outline-dark btn-lg btn-profile"><a href="#">Delete</a></button>
      </div>
  </div>
  <div class="row">
      <div id="profileGlance" class="col col-md-4 blueBG pb-4">
          <h3>At a Glance</h3>
          <p><strong>Child's Name:</strong> ${profileData.childName} ${profileData.lastName}</p>
          <p><strong>Parent Name(s)</strong> ${profileData.parentName1} <br />
          ${profileData.parentName2}</p>
          <p><strong>State:</strong> ${profileData.currentState}</p>
          <p><strong>School:</strong> ${profileData.schoolName} (Grade ${profileData.currentGrade})</p>
          <p><strong>Overview:</strong> ${profileData.eduInfo}</p>
          </div>
      <div id="profileDeep" class="col col-md-8 mt-3 pb-4">
          <h2 class="mb-2">More About ${profileData.childName}</h2>
          <p><strong>Birth Country:</strong> ${profileData.birthCountry}</p>
          <p><strong>DOB:</strong> ${profileData.childDOB}</p>
          <p><strong>Adoption Date</strong> ${profileData.adoptionDate}</p>
          <p><strong>Description:</strong>&nbsp;${profileData.childDescription}</p>
          <p><strong>Plan Type:</strong>&nbsp;${profileData.planType}</p>
          <p><strong>Diagnosed Special Needs:</strong>&nbsp;${profileData.diagnoses}</p>
          <p><strong>Special Needs Known at Time of Adoption/Placement:</strong>&nbsp;${profileData.needsKnown}</p>
          <p><strong>Current Trauma Counseling:</strong>&nbsp;${profileData.counseling}</p>
          
          <h2 class="mt-2 mb-2">${profileData.lastName} Family Information</h2>
          <p><strong>Email:</strong> ${profileData.parentEmail}</p>
          <p><strong>Primary Phone:</strong> ${profileData.phoneNumber}</p>
          <p><strong>Call Preferences:</strong>&nbsp;${profileData.callPreference}</p>
      </div>
  </div>`;
  $("#primaryContainer").html(profile);
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

  //loads profile when clicking on profile from admin view
$(document).on('click', '.cardBtn', function(){
  var caseID=$(this).data("edit-case");
  console.log('admin is loading user profile for: ', caseID);
  caseFile.getCaseByID(caseID)
  .then((profileData)=>{
    console.log('profileData and caseID requested by admin: ', profileData, caseID);
    buildProfileForAdmin(profileData, caseID);
  });
});

module.exports = {adminViewAll};