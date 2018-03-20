"use strict";

let $ = require('jquery');

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
  buildLeadGen
};
