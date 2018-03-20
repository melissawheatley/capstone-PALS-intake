"use strict";

// REQUIRES
var firebase = require("firebase/app");
    require("firebase/auth");
	require("firebase/database");

let config = require("./config"),
	currentUser = null,
	$ = require('jquery');

var provider = new firebase.auth.GoogleAuthProvider();

// FUNCTIONS from Firebase
function googleLogIn() {
    return firebase.auth().signInWithPopup(provider);
}

function googleLogOut(){
    return firebase.auth().signOut();
}

function setUser(val){
	currentUser = val;
}

function getUser(){
    return currentUser;
}

firebase.auth().onAuthStateChanged(function(user){
	console.log("onAuthStateChanged", user);
	if (user){
		currentUser = user.uid;
		console.log("This user is logged in:", currentUser);
	}else{
		currentUser = null;
		console.log("User is not logged in");
	}
});


function addUser(userObj) {
	// console.log("add user to firebase", userObj);
	return $.ajax({
      url: `${config.getFBsettings().databaseURL}/userInfo.json`,
      type: 'POST',
      data: JSON.stringify(userObj),
      dataType: 'json'
   }).done((userID) => {
      return userID;
   });
}


module.exports = {googleLogIn, googleLogOut, setUser, getUser, addUser};
