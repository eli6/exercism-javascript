/**
 * Returns the string "One for you, one for me".
 * If a name is given, 'you' is replaced by that name.
 * @param name {string}
 * @returns {string} The complete phrase.
 */

export function twoFer(name){

    //test for strict equality between name and empty string. In that case set "you" as name.
    if(name === "") {
        name = "you";
    }

    //return resulting string
    return "One for " + name + ", one for me.";

}