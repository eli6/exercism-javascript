/**
 * Determines if a year is a leap year or not.
 * @param {number} year
 * @returns {boolean} True if year is leap year, false if not.
 */

export function isLeap(year) {

    //year is evenly divisible by 4, could be a leap year
    if(year%4 == 0) {

        //return false if year is evenly divisible by 100 but not by 400, in that case it's not a leap year, otherwise return true.
        return (year % 100 == 0 && year % 400 != 0) ? false : true;
    }

}