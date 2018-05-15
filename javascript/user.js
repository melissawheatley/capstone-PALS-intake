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

// function createUserByEmail(email, password){
// firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
//     // Handle Errors here.
//     var errorMessage = `There was an issue creating your account. Please try again.`;
//     // ...
//   });
// }

function signInWithEmailAndPassword(email, password){
    return firebase.auth().signInWithEmailAndPassword(email, password);
}

function setUser(val){
	currentUser = val;
}

function getUser(){
    return currentUser;
}

firebase.auth().onAuthStateChanged(function(user){
    console.log("onAuthStateChanged", user);
    if (user.uid == "cAmsIcIg5LacqlJpc15ZyezrIEH2"){
        $("#viewProfdropdown").addClass("d-none");
        $("#viewALLdropdown").removeClass("d-none");
        // $("#viewAdminProf").removeClass("d-none");
        $("#login").addClass("d-none");
        $('#emailLogin').addClass('d-none');
        $("#userPic").removeClass("d-none").html(user.displayName ? user.displayName : `Admin Profile`);
        console.log('welcome, admin!');
    }else if (user){
		currentUser = user.uid;
        $("#login").addClass("d-none");
        $('#emailLogin').addClass('d-none');
        $("#userPic").removeClass("d-none").html(user.displayName ? user.displayName : `User Profile`);
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
        // $("#login").addClass("d-none");
        // $("#userPic").removeClass("d-none").html(`${result.user.displayName}  <img src="${result.user.photoURL}" alt="${result.user.displayName} photo from Google" class="profPic rounded-circle">`);
        // sendToFirebase(buildUserObj(result.user.uid, result.user.email, result.user.displayName));
		// console.log("login complete!");
		console.log("UID result from login: ", currentUser.user.uid);
        return currentUser;
    });
});

$('#loginEmail').click(function(){
    var email = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log("modal sending info for auth:", email + password);
    signInWithEmailAndPassword(email, password)
    .then((result) => {
        let currentUser = result;
        console.log("UID result from login: ", result.uid);
        setUser(result.uid);
        // $("#login").addClass("d-none");
        // $("#emailLogin").addClass("d-none");
        // $("#userPic").removeClass("d-none").html(`${result.user.displayName}`);
		// console.log("login with email complete!");
        // console.log("UID result from login: ", currentUser.user.uid);
        firebase.auth();
        return currentUser;
    });
});

//LOGOUT
$(document).on("click", "#logout", function(){
	googleLogOut()
	.then(()=>{
    render.renderHomeMain();
    $("#login").removeClass("d-none");
    $("#emailLogin").removeClass("d-none");
    $("#userPic").addClass("d-none");
	});
});


module.exports = {googleLogIn, googleLogOut, signInWithEmailAndPassword, setUser, getUser, addUser};
