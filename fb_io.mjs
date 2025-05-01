//**************************************************************/
// fb_io.mjs
// Generalised firebase routines
// Written by Kyla, Term 2 202?
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
    fb_initialise, fb_authenticate, fb_detectLoginChange };

function fb_initialise() {
    console.log('%c fb_initialise(): ', 
        'color: ' + COL_C + '; background-color: red'
    );


    
}


function fb_authenticate() {
    console.log('%c fb_authenticate(): ', 
        'color: ' + COL_C + '; background-color: blue'
    );
}


function fb_detectLoginChange() {
    console.log('%c fb_detectLoginChange(): ', 
        'color: ' + COL_C + '; background-color: purple'
    );
}

/**************************************************************/
// END OF CODE
/**************************************************************/