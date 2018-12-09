/**
 * Reverses a string.
 * @param startString
 * @returns {string} The reversed String.
 */
export function reverseString(startString){

    //String to store result in
    let endString = "";

    //loop through string from end to start
    for(let i = startString.length-1; i > -1; i--){
        //add each character to the new string
        endString += startString[i];
    }

    return endString;
}