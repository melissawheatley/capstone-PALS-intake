"use strict";

// VARIABLES
let $ = require('jquery'),
    response = require('./responseType');

// FUNCTIONS
//this function re-renders the primary container upon submission
function displayLeadResults(){
    let leadResults = `<div class="row">
        <div id="responseText" class="col-md-6">    
            <h1>Thank you for getting in touch with PALS!</h1>
            <h2>Your download is ready</h2>
            <p>Sit in window and stare oooh, a bird, yum destroy the blinds, and hit you unexpectedly for put toy mouse in food bowl run out of litter box at full speed , but chase ball of string yet destroy couch as revenge. </p>
            <a href="https://gbod-assets.s3.amazonaws.com/legacy/kintera-files/worship/Worship_2018-RevisedCommonLectionary-SundaysSpecial-YearB.pdf"><button type="button" id="bookDownload" class="btn btn-lg btn-danger mb-4">Download</button></a>
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

function loadLongForm(){
    // console.log('get started button clicked to load long form');
    $('#primaryContainer').html(`<h1>Complete Your Profile</h1>
    <p>Please tell us more about your child's situation. We'll review the information you've shared and schedule a phone call to follow up within 72 hours.</p>
    <div id="longFormContainer" class="blueBG">
    <h3>Second Form Heading H3</h3>
    <form id="secondaryForm">
        <h4>More About Your Child</h4>
        <div class="form-group">
            <div class="form-row">
                <div class="col-sm-6 mb-4">
                    <label for="adoptionDate">Date of Adoption</label>
                    <input type="date" class="form-control mb-2" id="adoptionDate">
                </div>
                <div class="col-sm-6 mb-4">
                    <label for="counseling">Is your child currently receiving trauma counseling?</label>
                    <select class="form-control form-control-lg mb-4" id="counseling">
                    <option>Yes</option>
                    <option>No</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="form-group">
            <label for="diagnoses">Please list your child's diagnoses.</label>
            <textarea class="form-control mb-4" id="diagnoses" rows="2"></textarea>
        </div>

    <div class="form-group">
        <h4>Second Parent/Guardian (if applicable)</h4>
            <div class="form-row">
                <div class="col-sm-6 mb-4">
                    <label for="firstName-parent2">First Name</label>
                    <input type="text" id="firstName-parent2" class="form-control" placeholder="First name">
                </div>
                <div class="col-sm-6 mb-4">
                    <label for="lastName-parent2">Last Name</label>
                    <input type="text" class="form-control" placeholder="(only if different)" id="lastName-parent2">
                </div>
            </div>
        </div>
    
    <button type="button" id="submitLongForm" class="btn btn-danger btn-lg">Submit</button>
    </form>
</div>`);
}

// This function renders the entire node back to the DOM for read functionality and to prepare for update functionality.
function buildUserProfile(profileData) {
        console.log("getting ready to get ready to render");
        for(var item in profileData){
        let currentProfile = profileData[item];
        let profileDisplay =
        `<h1>${currentProfile.childName}'s Profile</h1>
        <div class="row">
                <div id="profileGlance" class="col col-md-4 blueBG">
                    <p><strong>Child's Name:</strong> ${currentProfile.childName} ${currentProfile.lastName}</p>
                    <p><strong>DOB:</strong> ${currentProfile.childDOB}</p>
                    <p><strong>Description:</strong> ${currentProfile.childDescription}</p>
                    <p><strong>Parent Name(s)</strong> ${currentProfile.parentName1}, ${currentProfile.parentName2}</p>
                    <button type="button" id="editProfile" class="btn btn-danger btn-lg">Edit</button>
                    <button type="button" id="deleteProfile" class="btn btn-dark btn-lg">Delete</button>
                    </div>
                <div id="profileDeep" class="col col-md-8">
                    <p><strong>School Situation:</strong>&nbsp;${currentProfile.eduInfo}</p>
                    <p><strong>Diagnosed Special Needs:</strong>&nbsp;${currentProfile.diagnoses}</p>
                    <p><strong>Currently in Counseling:</strong>&nbsp;${currentProfile.counseling}</p>
                </div>
        </div>`;
        $("#primaryContainer").html(profileDisplay);
        }
      }

function renderHomeMain(){
    $('main').html(`<div id="primaryContainer" class="container">
        <div class="row">
            <div id="mainText" class="col-md-6">
                <h1>Page Heading H1</h1>
                <h2>Column Heading h2</h2>
                <p>Cat ipsum dolor sit amet, fight an alligator and win yet always ensure to lay down in such a manner that tail can lightly brush human's nose so shove bum in owner's face like camera lens, or purr when being pet. Leave dead animals as gifts. Meow loudly just to annoy owners jump off balcony, onto stranger's head but eat owner's food if it smells like fish eat as much as you wish missing until dinner time, and hide when guests come over. </p>
                <p>Sit in window and stare oooh, a bird, yum destroy the blinds, and hit you unexpectedly for put toy mouse in food bowl run out of litter box at full speed , but chase ball of string yet destroy couch as revenge. </p>
                <blockquote>Sniff all the things intently stare at the same spot, yet spend all night ensuring people don't sleep sleep all day for annoy owner until he gives you food say meow repeatedly until belly rubs, feels good under the bed.</blockquote>
                <p>Lie in the sink all day give me some of your food give me some of your food give me some of your food meh, i don't want it, for howl uncontrollably for no reason. Nap all day who's the baby poop in litter box, scratch the walls for with tail in the air ears back wide eyed.</p>
            </div>
            <div id="mainForm" class="col-md-6 blueBG">
                <h3>H3 Form Heading</h3>
                <form id="leadGen">
                    <div class="form-group">
                        <div class="form-row">
                            <div class="col-sm-6 mb-4">
                                <label for="firstName-parent1">First Name</label>
                                <input type="text" id="firstName-parent1" class="form-control" placeholder="Parent/Guardian first name">
                            </div>
                            <div class="col-sm-6 mb-4">
                                <label for="lastName">Last Name</label>
                                <input type="text" class="form-control" placeholder="Last name" id="lastName">
                            </div>
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
                                <input type="text" id="birthCountry" class="form-control mb-2" placeholder="Country">
                            </div>
                        </div>
                    </div>
            
                    <div class="form-group">
                        <label for="childDescription">Please share a few sentences about your child.</label>
                        <textarea class="form-control mb-4" id="childDescription" rows="3"></textarea>
                    </div>
            
                    <div class="form-group">
                        <label for="planType">Educational Plan Type</label>
                        <select class="form-control form-control-lg mb-4" id="planType">
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
                
                <button type="button" id="submitLeadGen" class="btn btn-danger btn-lg">Submit</button>
                </form>
            </div>
        </div> 
    </div>`);
}
renderHomeMain();

module.exports = {
  buildUserProfile,
  displayLeadResults, 
  loadLongForm,
  renderHomeMain
};
