
class Zipper {

    constructor(tree, crumbs, root){
        this.tree = tree;
        this.root = root;
        this.crumbs =[];
        this.crumbs = crumbs;
        //todo perhaps push last parent before creating new zipper instead?
    }

    static fromTree(tree) {
        let history = [];
        history.push(tree);
       return new Zipper(tree, history, tree);
    }

    toTree() {
       // return this.tree;
       return this.root;
    }

   //var =  bt( 1, bt(2, null, leaf(3)), leaf(4) );

    left(){
        let parent = this.tree;
        this.crumbs.push(parent); //add this one to history.
        //refactor to clear up...
        let zipper = new Zipper(this.tree[Object.keys(this.tree)[1]], this.crumbs, this.root);
        return zipper["tree"] == null ? null : zipper;
    }

    right() {
        let parent = this.tree;
        this.crumbs.push(parent); //add this one to history.
        let zipper = new Zipper(this.tree[Object.keys(this.tree)[2]], this.crumbs, this.root);
        return zipper["tree"] == null ? null : zipper;

    }

    value(){ // ja?
        //get first parameter
        return this.tree[Object.keys(this.tree)[0]];
    }

    up(){
        if(this.crumbs.length > 1){
            return new Zipper(this.crumbs[this.crumbs.length-1], this.crumbs.splice(-1,1), this.root);
        } else {
            return null; //otherwise we dont have any higher level, we're at the top.
        }

    }
}


export default Zipper;


