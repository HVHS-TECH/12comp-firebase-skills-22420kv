/**************************************************************/
// main.mjs
// Main entry for index.html
// Written by Kyla, Term 2 2025
/**************************************************************/
const COL_C = 'white';	    // These two const are part of the coloured 	
const COL_B = '#CD7F32';	//  console.log for functions scheme
console.log('%c main.mjs', 
    'color: blue; background-color: white;');

/**************************************************************/
// Import all external constants & functions required
/**************************************************************/
// Import all the constants & functions required from fb_io module
import { fb_initialise, fb_authenticate, fb_detectLoginChange, fb_logout, fb_writeRecord, fb_readRecord, fb_readAll, fb_updateRecord, fb_sortedRead, fb_wreckHavock, fb_listenForChanges }
    from './fb_io.mjs';
    window.fb_initialise   = fb_initialise;
    window.fb_authenticate   = fb_authenticate;
    window.fb_detectLoginChange = fb_detectLoginChange;
    window.fb_logout = fb_logout;
    window.fb_writeRecord = fb_writeRecord;
    window.fb_readRecord = fb_readRecord;
    window.fb_readAll = fb_readAll;
    window.fb_updateRecord = fb_updateRecord;
    window.fb_sortedRead = fb_sortedRead;
    window.fb_wreckHavock = fb_wreckHavock;
    window.fb_listenForChanges = fb_listenForChanges;

/**************************************************************/
// index.html main code
/**************************************************************/


/**************************************************************/
// preload()
/**************************************************************/


/**************************************************************/
// setup()
/**************************************************************/


/**************************************************************/
// draw()
/**************************************************************/


/**************************************************************/
//   END OF CODE
/**************************************************************/
