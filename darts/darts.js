export function solve(x, y) {

    if(isNaN(x) || isNaN(y)){
        return null;
    }

    const Outerradius = 10;
    const Middleradius = 5;
    const InnerRadius = 1;

    if(x > Outerradius || y > Outerradius ){
        return 0;
    } else if( x <= Middleradius && y <= Middleradius ){
        if(x <= InnerRadius && y <= InnerRadius){
            return 10;
        }
        return 5;
    }
    return 1;
}