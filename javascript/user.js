"use strict";

// REQUIRES
var firebase = require("firebase/app");
    require("firebase/auth");
	require("firebase/database");

let config = require('./config'),
    render = require('./DOMbuilder'),
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
    if (user.uid == "2vZLU95BIbfyDkpUO5ohP1tM9jS2"){
        $("#viewALLdropdown").removeClass("d-none");
        $("#login").addClass("d-none");
        $("#userPic").removeClass("d-none").html(`${user.displayName}  <img src="${user.photoURL}" alt="${user.displayName} photo from Google" class="profPic rounded-circle">`);
        console.log('welcome, admin!');
    }else if (user){
		currentUser = user.uid;
		$("#login").addClass("d-none");
        $("#userPic").removeClass("d-none").html(`${user.displayName}  <img src="${user.photoURL}" alt="${user.displayName} photo from Google" class="profPic rounded-circle">`);
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

//BUILD USER OBJECT
function buildUserObj(uid, email, name) {
    let userObj = {
        uid: uid,
        email: email,
        fullName: name,
        userTypeID: null
  };
  console.log("userObj:", userObj);
  return userObj;
}

//SEND INFO TO FIREBASE
function sendToFirebase(userObj){
	addUser(userObj);
}

////////////////////////////////////////
///         EVENT LISTENERS        ////
///////////////////////////////////////

//LOGIN
$("#login").click(function(){
    // console.log("user clicked login");
    googleLogIn()
    .then((result) => {
        let currentUser = result;
        // console.log("UID result from login: ", result.user.uid);
        setUser(result.user.uid);
        $("#login").addClass("d-none");
        $("#userPic").removeClass("d-none").html(`${result.user.displayName}  <img src="${result.user.photoURL}" alt="${result.user.displayName} photo from Google" class="profPic rounded-circle">`);
        sendToFirebase(buildUserObj(result.user.uid, result.user.email, result.user.displayName));
		// console.log("login complete!");
		console.log("UID result from login: ", currentUser.user.uid);
        return currentUser;
    });
});

//LOGOUT
$(document).on("click", "#logout", function(){
	googleLogOut()
	.then(()=>{
    render.renderHomeMain();
	$("#login").removeClass("d-none");
    $("#userPic").addClass("d-none");
	});
});


module.exports = {googleLogIn, googleLogOut, setUser, getUser, addUser};
