"use strict";

// VARIABLES
let $ = require('jquery'),
    response = require('./responseType');

// FUNCTIONS
//this function re-renders the primary container upon submission
function displayLeadResults(caseID){
    let leadResults = `<div class="row">
        <div id="responseText" class="col-md-6">    
            <h1>Thank you for getting in touch with PALS!</h1>
            <h2>Your download is ready</h2>
            <p>Sit in window and stare oooh, a bird, yum destroy the blinds, and hit you unexpectedly for put toy mouse in food bowl run out of litter box at full speed , but chase ball of string yet destroy couch as revenge. </p>
            <button type="button" id="bookDownload" class="btn btn-lg btn-danger mb-4">Download</button>
            <blockquote>Sniff all the things intently stare at the same spot, yet spend all night ensuring people don't sleep sleep all day for annoy owner until he gives you food say meow repeatedly until belly rubs, feels good under the bed.</blockquote>
            <div id="dynamicResponse"></div>
            </div><!--/col-->
        <div id="nextSteps" class="container col-md-6 steelBG">
            <div class="row" style="padding: 1rem 3rem;">
            <h3 class="mt-4 pt-4;" style="color: #a8d0db;">Next Steps</h3>
            <p>Lie in the sink all day give me some of your food give me some of your food give me some of your food meh, i don't want it, for howl uncontrollably for no reason. Nap all day who's the baby poop in litter box, scratch the walls for with tail in the air ears back wide eyed.</p>
            <button type="button" id="loadLongForm" class="btn btn-lg btn-danger">Get Started</button>
            </div>
            <div class="row" id="testimonial">
                <div class="col-12 blueBG">
                <p>A testimonial quote will go here.</p>
                </div><!--end nested col-12-->
            </div><!--/nested row-->
        </div><!--/col-->
    </div><!--/row>`;
    $('#primaryContainer').html(leadResults);  
}

// This buildLeadGen function rebuilds the original form for the edit functionality 
function buildLeadGen(family, caseInfoID) {
  return new Promise((resolve, reject) => {
    // let caseItem = {
    //   title: song ? song.title : "",
    //   artist: song ? song.artist : "",
    //   year: song ? song.year : "",
    //   album: song ? song.album : "",
    //   formTitle: song ? `Edit "${song.title}"` : "Add a new song",
    //   btnText: song ? "save changes" : "save song",
    //   btnId: song ? "save_edit_btn" : "save_new_btn"  // identify which action to take
    // },
    let form =
        `<div class="form-group">
        <div class="form-row">
            <div class="col-sm-6 mb-4">
                <label for="firstName-parent1">First Name</label>
                <input type="text" id="firstName-parent1" class="form-control" placeholder="Parent/Guardian first name">
            </div>
            <div class="col-sm-6 mb-4">
                <label for="lastName">Last Name</label>
                <input type="text" id="lastName" class="form-control" placeholder="Last name">
            </div>
        </div>

    <div class="form-group">
        <label for="childName">Child's Name</label>
        <input type="text" class="form-control mb-4" id="childName" placeholder="Preferred name">
    </div>

    <div class="form-group">
        <div class="form-row">
            <div class="col-md-6">
                <label for="childName">Child's Date of Birth</label>
                <input type="date" class="form-control mb-2" id="childDOB">
            </div>
            <div class="col-md-6">
                <label for="birthCountry">Birth&nbsp;Country</label>
                <!-- <select class="gds-cr gds-countryflag" country-data-region-id="gds-cr-three" ></select> -->
                <input type="text" class="form-control mb-2" placeholder="Country">
            </div>
        </div>
    </div>

    <div class="form-group">
        <label for="childDescription">Please share a few sentences about your child.</label>
        <textarea class="form-control mb-4" id="childDescription" rows="3"></textarea>
    </div>

    <div class="form-group">
        <label for="planType">Educational Plan Type</label>
        <select class="form-control mb-4" id="planType">
        <option>IEP</option>
        <option>504</option>
        <option>Both</option>
        <option>other</option>
        </select>
    </div>

    <div class="form-group">
        <label for="eduInfo">Briefly describe your child's education services situation.</label>
        <textarea class="form-control mb-4" id="eduInfo" rows="3"></textarea>
    </div>

    <div class="form-group">
        <label for="referralSource">How did you hear about PALS?</label>
        <input type="text" class="form-control mb-4" id="referralSource" placeholder="ex. Conference, Friend, etc.">
    <div>

<button type="button" class="btn btn-danger btn-lg">Submit</button>
`;


    //   `<h3>${caseItem.formTitle}</h3>
    //   <input type="text" id="form--firstName-parent1" placeholder="Parent First Name" value="${caseItem.firstName-parent1}"></input>
    //   <input type="text" id="form--lastName" placeholder="Last Name" value="${caseItem.lastName}"></input>
    //   <input type="text" id="form--childName" placeholder="Child's Name" value="${caseItem.childName}"></input>
    //   <input type="text" id="form--childDOB" placeholder="MM/DD/YYYY" value="${caseItem.childDOB}"></input>
    //   <button id="${songId}" class=${caseItem.btnId}>${caseItem.btnText}</button>`;
    // resolve(form);
  });
}

module.exports = {
  buildLeadGen,
  displayLeadResults
};
