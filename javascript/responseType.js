"use strict";
console.log("ready to get plan types and give info back");

let $=require('jquery'),
    config = require('./config'),
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
    console.log("plan Options: ", planOptions);
    $('#planType').html(planOptions);
    console.log("populated select!");
});
    }
    populatePlanTypes();
    

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

module.exports = {getPlanTypes};