//****IMMEDIATELY INVOKED FUNCTION EXPRESSIONS *********

// An immediately invoked function expression, or IIFE (pronounced iffy), is a function that is called immediately after it is defined. 

/*
 We use IIFE to AVOID POLLUTING THE GLOBAL NAMESPACE :- 
 Because our application could include many functions and global variables from different source files, it's important to limit the number of global variables. If we have some initiation code that we don't need to use again, we could use the IIFE pattern.

 */

(function chai(){
    console.log("CHAI AUR CODE")
})();

((name)=>{
    console.log(`Welcome ${name} !!`)
})('Utkarsh');