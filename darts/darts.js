/**
 * Function to calculate points on the target in a "Dart" game.
 * Hit in outer circle gives 10 points. Hit in the middle circle gives 5 points and hit in the inner circle, 1 point.
 * @param x X coordinate where the dart has hit.
 * @param y Y coordinate where the dart has hit.
 * @returns {?number}
 */
export function solve(x, y) {

    if(isNaN(x) || isNaN(y)){
        return null;
    }

    const Outerradius = 10;
    const Middleradius = 5;
    const InnerRadius = 1;

    //if we are inside of the target, check if we are also inside middle or inner target, otherwise return 1.
    if(x <= Outerradius || y <= Outerradius ){
        if( x <= Middleradius && y <= Middleradius ){
            //return 10 if we are in the inner circle, if we're "only" in the middle one, return 5.
            return (x <= InnerRadius && y <= InnerRadius) ? 10 : 5;
        }
        return 1;
    }
    //return 0 if we are outside of the target.
    return 0;
}