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


/**************************************************************/
// EXPORT FUNCTIONS
// List all the functions called by code or html outside of this module
/**************************************************************/
export { 
    fb_initialise, fb_authenticate, fb_detectLoginChange, fb_logout, fb_writeRecord, fb_readRecord, fb_readAll, fb_updateRecord, fb_sortedRead };

    import { initialiseApp } 
    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
   import { getDatabase} 
    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

/***********************************/
// fb_initialise()
// Called by initialise firebase Button
// Firebase - using CDN
// Input: n/a
// Return: n/a
/***********************************/
function fb_initialise() {
    console.log('%c fb_initialise(): ', 
        'color: ' + COL_C + '; background-color: red'
    );

    
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
        'color: ' + COL_C + '; background-color: black'
    );
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
}


/**************************************************************/
// END OF CODE
/**************************************************************/