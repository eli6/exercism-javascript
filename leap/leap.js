
/**
 * Determines if a year is a leap year or not.
 * @param {number} year
 * @returns {boolean} True if year is leap year, false if not.
 */

export function isLeap(year) {

    //Year could be a leap year if it's evenly divisible by four.
    //Should it also be divisible by 100 it's only a leap year if it isn't also divisible by 400.
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);

}
