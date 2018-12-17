/**
 * Points for different circles in the 'Dart' game.
 * @type {{outer: number, middle: number, inner: number, none: number}}
 */
const Points = {
    outer: 1,
    middle: 5,
    inner: 10,
    none: 0
};

/**
 * Radius from Origin (0,0) of the concentric circles in the 'Dart' game.
 * @type {{outer: number, middle: number, inner: number}}
 */
const Radius = {
    outer: 10,
    middle: 5,
    inner: 1
};


/**
 * Function to calculate points on the target in a "Dart" game.
 * Hit in outer circle gives 10 points. Hit in the middle circle gives 5 points and hit in the inner circle, 1 point.
 * @param x X coordinate where the dart has hit.
 * @param y Y coordinate where the dart has hit.
 * @returns {?number} Points earned for the hit.
 */
export function solve(x, y) {

    if(isNaN(x) || isNaN(y)){
        return null;
    }

    //determine distance from center
    const dist = Math.sqrt(x**2 + y**2);

    //if we are inside of the target, check if we are also inside middle or inner target, otherwise return 1.
    if(dist <= Radius.outer ){
        if(dist <= Radius.middle ){
            //return 10 if we are in the inner circle, if we're "only" in the middle one, return 5.
            return (dist <= Radius.inner) ? Points.inner : Points.middle;
        }
        return Points.outer;
    }
    //return 0 if we are outside of the target.
    return Points.none;
}