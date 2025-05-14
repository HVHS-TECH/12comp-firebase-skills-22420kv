//**************************************************************/
// fb_io.mjs
// Generalised firebase routines
// Written by Kyla, Term 2 2025
//
// All variables & function begin with fb_  all const with FB_
// Diagnostic code lines have a comment appended to them //DIAG
/**************************************************************/
const COL_C = 'white';	    // These two const are part of the coloured 	
const COL_B = '#CD7F32';	//  console.log for functions scheme
console.log('%c fb_io.mjs',
            'color: blue; background-color: white;');

/**************************************************************/
// Import all external constants & functions required
/**************************************************************/
// Import all the methods you want to call from the firebase modules

import { initializeApp } 
 from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase} 
 from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

import { getAuth, GoogleAuthProvider, signInWithPopup }
 from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

import { onAuthStateChanged }
 from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

import { signOut }
 from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

import { ref, set }
 from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

import { get }
 from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

import { update }
 from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

import { query, orderByChild, limitToFirst }
 from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

import { onValue }
 from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
 
/**************************************************************/
// EXPORT FUNCTIONS
// List all the functions called by code or html outside of this module
/**************************************************************/
export { 
    fb_initialise, fb_authenticate, fb_detectLoginChange, fb_logout, fb_writeRecord, fb_readRecord, fb_readAll, fb_updateRecord, fb_sortedRead, fb_wreckHavock, fb_listenForChanges };
    const FB_GAMECONFIG = {
        apiKey: "AIzaSyCn36qBrPRutqLXCYIyzkyjMQRiYyhRC2Q",
        authDomain: "comp-2025-kyla-van-weele.firebaseapp.com",
        databaseURL: "https://comp-2025-kyla-van-weele-default-rtdb.firebaseio.com",
        projectId: "comp-2025-kyla-van-weele",
        storageBucket: "comp-2025-kyla-van-weele.firebasestorage.app",
        messagingSenderId: "726085363137",
        appId: "1:726085363137:web:32da18f88b84bf19fffb40",
        measurementId: "G-RXDD9GFN2H"
      };


/***********************************/
// fb_initialise()
// Called by initialise firebase Button
// Firebase - using CDN
// Input: n/a
// Return: n/a
/***********************************/
var FB_GAMEDB;
function fb_initialise() {
    console.log('%c fb_initialise(): ', 
        'color: ' + COL_C + '; background-color: red'
    );
    
    const FB_GAMEAPP = initializeApp(FB_GAMECONFIG);
    FB_GAMEDB  = getDatabase(FB_GAMEAPP);
    console.info(FB_GAMEDB);  //DIAG
   
}

/***********************************/
// fb_authenticate()
// Called by authenticate Button
// To firebase - cia signInwIthPopup
// Input: n/a
// Return: n/a
/***********************************/
function fb_authenticate() {
    console.log('%c fb_authenticate(): ', 
        'color: ' + COL_C + '; background-color: blue'
    );

    const AUTH = getAuth();
    const PROVIDER = new GoogleAuthProvider();
    // The following makes Google ask the user to select the account
    PROVIDER.setCustomParameters({
        prompt: 'select_account'
    });

    signInWithPopup(AUTH, PROVIDER).then((result) => {
        console.log('successful login');
        //✅ Code for a successful authentication goes here
    })

    .catch((error) => {
        console.log('failed login');
        //❌ Code for an authentication error goes here
    });
}

/***********************************/
// fb_detectLoginChange()
// Called by detect login change Button 
// Changes - via onAuthStateChanged
// Input: n/a
// Return: n/a
/***********************************/
function fb_detectLoginChange() {
    console.log('%c fb_detectLoginChange(): ', 
        'color: ' + COL_C + '; background-color: purple'
    );

    const AUTH = getAuth();
    onAuthStateChanged(AUTH, (user) => {

        if (user) {
            console.log('User loggen in');
            //✅ Code for user logged in goes here
        } else {
            console.log('User logged out')
            //✅ Code for user logged out goes here
        }

    }, (error) => {
        console.log('OnAuthStateChanged error');
        //❌ Code for an onAuthStateChanged error goes here
    });
}

/***********************************/
// fb_logout()
// Called by logout Button
// via signOut
// Input: n/a
// Return: n/a
/***********************************/
function fb_logout() {
    console.log ('%c fb_logout(): ',
        'color: ' + COL_C + '; background-color: pink'
    );

    const AUTH = getAuth();
    signOut(AUTH).then(() => {
        console.log('Successful logout');
        //✅ Code for a successful logout goes here
    })

    .catch((error) => {
        console.log('Failed logout');
        //❌ Code for a logout error goes here
    });
}

/***********************************/
// fb_writeRecord()
// Called by write record Button
// A record to firebase - via set
// Input: n/a
// Return: n/a
/***********************************/
function fb_writeRecord() {
    console.log('%c fb_writeRecord(): ',
        'color: ' + COL_C + '; background-color: orange'
    );
var data_to_write = {Pets: 1, Plants: 5}
    const writeRecord = ref(FB_GAMEDB, 'House/People');
    set(writeRecord, data_to_write).then(() => {  
        console.log('successfull write');
        //✅ Code for a successful write goes here
    }).catch((error) => {
        console.log(error);
        //❌ Code for a write error goes here
    });
}

/***********************************/
// fb_readRecord()
// Called by read record Button
// A speciic firebase record - via get
// Input: n/a
// Return: n/a
/***********************************/
function fb_readRecord() {
    console.log('%c fb_readRecord(): ',
        'color: ' + COL_C + '; background-color: green'
    );

    const dbReference= ref(FB_GAMEDB, 'House/People/Pets');
    get(dbReference).then((snapshot) => {
        var fb_data = snapshot.val();
        if (fb_data != null) {
            console.log(fb_data);
            //✅ Code for a successful read goes here
        } else {
            console.log('No record found');
            //✅ Code for no record found goes here
        }
    }).catch((error) => {
        console.log('failed read');
        //❌ Code for a read error goes here
    });
}

/***********************************/
// fb_readAll()
// Called by read all Button
// Records in a path - via get
// Input: n/a
// Return: n/a
/***********************************/
function fb_readAll() {
    console.log('%c fb_readAll(): ',
        'color: ' + COL_C + '; background-color: lightgrey'
    );

    const dbReference= ref(FB_GAMEDB, 'House/People');
    get(dbReference).then((snapshot) => {
        var fb_data = snapshot.val();
        if (fb_data != null) {
            console.log(fb_data);
            //✅ Code for a successful read all goes here
        } else {
            console.log('No record found');
            //✅ Code for no record found goes here
        }
    }).catch((error) => {
        console.log('failed read');
        //❌ Code for a read all error goes here

    });
}

/***********************************/
// fb_updateRecord()
// Called by update record Button
// A firebase record - via update
// Input: n/a
// Return: n/a
/***********************************/
function fb_updateRecord() {
    console.log('%c fb_updateRecord(): ',
        'color: ' + COL_C + '; background-color: grey'
    );

    var _data = {Pets: 2}
    const dbReference= ref(FB_GAMEDB, 'House/People');
    update(dbReference, _data).then(() => {
        console.log(_data);
        //✅ Code for a successful update goes here
    }).catch((error) => {
        console.log('failed upate');
        //❌ Code for a update error goes here
    });
}

/***********************************/
// fb_sortedRead()
// Called by sorted read Button
// via query + orderByChild + limitToFirst + get
// Input: n/a
// Return: n/a
/***********************************/
function fb_sortedRead() {
    console.log('%c fb_sortedRead(): ',
        'color: ' + COL_C + '; background-color: skyBlue'
    );

    var sortKey = "Objects";
    const dbReference= query(ref(FB_GAMEDB, 'House/People'), orderByChild(sortKey), limitToFirst(2));
    get(dbReference).then((snapshot) => {
        var fb_data = snapshot.val();
      if (fb_data != null) {
        console.log('successful sorted read :D');
           //✅ Code for a successful sorted read goes here
        } else {
            console.log('no record found')
           //✅ Code for no record found goes here
        }
    }).catch((error) => {
        console.log('failed sorted read');
        //❌ Code for a sorted read error goes here
    });

    get(dbReference).then((objectDataSnapshot) => {
        objectDataSnapshot.forEach(function (userObjectSnapshot) {
            var obj = userObjectSnapshot.val();
            console.log(obj);
        });
    });
}

function fb_wreckHavock() {
    console.log('%c fb_wreckHavock(): ',
        'color: ' + COL_C + '; background-color: black'
    );

    const FB_CONFIG = {
        apiKey: "AIzaSyAC9lbREKwJJ95pZUJ7Wy3hI_QfivE2a34",
        authDomain: "comp-firebaseskills.firebaseapp.com",
        databaseURL: "https://comp-firebaseskills-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "comp-firebaseskills",
        storageBucket: "comp-firebaseskills.firebasestorage.app",
        messagingSenderId: "634491601796",
        appId: "1:634491601796:web:1c48be8af741f25bd353d1"
    };    ///NOT COMPLETE
    
}

function fb_listenForChanges() {
    console.log('%c fb_listenForChanges(): ',
        'color: ' + COL_C + '; background-color: lightgreen'
    );

    const dbReference = ref(FB_GAMEDB, 'House/People');
    console.log(FB_GAMEDB);
    console.log(dbReference);
    onValue(dbReference)
    .then((snapshot) => {
        console.log("Read done")
       /* var fb_data = snapshot.val();
        if (fb_data != null) {
            console.log('successful read');
            //✅ Code for a successful read goes here
        } else {
            console.log('no record found');
            //✅ Code for no record found goes here
        }*/
    }).catch((error) => {
        console.log('failed read');
        //❌ Code for a read error goes here
    });
}


/**************************************************************/
// END OF CODE
/**************************************************************/