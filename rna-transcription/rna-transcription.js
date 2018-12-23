/**
 * Generates the RNA complement of a given DNA string.
 * @param {string} dna
 * @returns {string} RNA complement of the DNA string.
 */
export function toRna(dna) {

    const RNA_Lookup = {
        "C" : "G",
        "G" : "C",
        "A" : "U",
        "T" : "A",
    };

    function dnaToRna(dnaLetter){
        if(RNA_Lookup[dnaLetter]!== undefined) {
            return RNA_Lookup[dnaLetter];
        } else {
            throw new Error('Invalid input DNA.');  //if not found, throw error.
        }
    }

    return dna.split('').map(dnaToRna).join('');
}
