export function solve(x, y) {

    if(isNaN(x) || isNaN(y)){
        return null;
    }

    const Outerradius = 10;
    const Middleradius = 5;
    const InnerRadius = 1;

    //if we are outside of the target, return 0
    if(x <= Outerradius || y <= Outerradius ){
        if( x <= Middleradius && y <= Middleradius ){
            return (x <= InnerRadius && y <= InnerRadius) ? 10 : 5;
        }
        return 1;
    }
    return 0;
}