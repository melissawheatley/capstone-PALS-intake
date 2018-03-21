"use strict";

let $=require('jquery'),
    config = require('./config'),
    switchType = '',
    planOptions = `<option id ="default" value="choosePlan">Select a plan type</option>`;

//FUNCTIONS
function populatePlanTypes(){
    getPlanTypes()
.then(function(resolve){
    var keys;
    for(keys in resolve){
        var type = resolve[keys].type;
        planOptions += `<option id="${type}" value="${type}">${type}</option>`;
    }
    // console.log("plan Options: ", planOptions);
    $('#planType').html(planOptions);
    // console.log("populated select!");
});
    }

//calling the function!
    populatePlanTypes();

//this function is for filling the dynamic portion of the leadGen response text.     
function fillTypeSwitch(switchType){
    console.log("switchType: ", switchType);
    switch (switchType) {
        case 'IEP plan':
            $('#dynamicResponse').html(`<h2>Your IEP Plan Recommendations</h2>
            <p>This text is specifically for people who submitted the lead gen form with an IEP plan type selected.</p>
            <p>Helpful resources include:
                <ul>
                    <li>Resource One</li>
                    <li>Resource Two</li>
                    <li>Resource Three</li>
                </ul>
            </p>`);
          break;
        case '504 plan':
        $('#dynamicResponse').html(`<h2>Your 504 Plan Recommendations</h2>
        <p>This text is specifically for people who submitted the lead gen form with a 504 plan type selected.</p>
        <p>Helpful resources include:
            <ul>
                <li>504 Resource One</li>
                <li>504 Resource Two</li>
                <li>504 Resource Three</li>
            </ul>
        </p>`);
            break;
        case 'Both IEP and 504 plans':
        $('#dynamicResponse').html(`<h2>Your IEP & 504 Plan Recommendations</h2>
        <p>For our friends who are navigating both IEP and 504s, we recommend the following resources to get you started.</p>
        <p>Helpful resources include:
            <ul>
                <li>Combo Resource One</li>
                <li>Combo Resource Two</li>
                <li>Combo Resource Three</li>
            </ul>
        </p>`);
          break;
        default:
        $('#dynamicResponse').html(`<h2>Plan Recommendations When You're in Flux</h2>
        <p>If you're still figuring out the educational process for your child, we recommend getting started with these resources:</p>
            <ul>
                <li>Other Resource One</li>
                <li>Other Resource Two</li>
                <li>Other Resource Three</li>
            </ul>
        </p>`);
}}
    

function getPlanTypes(){
    return new Promise((resolve,reject) => {
        var loader = new XMLHttpRequest();
    loader.addEventListener('load', function(){
        var allPlans = JSON.parse(this.responseText);
        resolve(allPlans);
        // console.log(allPlans);
    });
    loader.addEventListener('error', function(){
        reject(console.log("There was a problem getting the planType information."));
    });
    loader.open("GET", `${config.getFBsettings().databaseURL}/planType.json`);
    loader.send();
    });
}

module.exports = {getPlanTypes, fillTypeSwitch};