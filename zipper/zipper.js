
class Zipper {

    constructor(tree, crumbs){
        this.tree = tree;
        this.crumbs = [];
    }

    static fromTree(tree) {
       return new Zipper(tree);
    }

    toTree() {
        return this.tree;
    }

   //var =  bt( 1, bt(2, null, leaf(3)), leaf(4) );

    left(){
        let parent = this.tree;
        //refactor to clear up...
        let zipper = new Zipper(this.tree[Object.keys(this.tree)[1]], parent);
        return zipper["tree"] == null ? null : zipper;
    }

    right() {
        let parent = this.tree;
        let zipper = new Zipper(this.tree[Object.keys(this.tree)[2]], parent);
        return zipper["tree"] == null ? null : zipper;

    }

    value(){ // ja?
        //get first parameter
        return this.tree[Object.keys(this.tree)[0]];
    }
}


export default Zipper;


