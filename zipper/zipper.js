
let iteration = 0;

class Zipper {

    constructor(tree){
        this.tree = this.root = tree;
        iteration += 1;
        this.parentNodes = [];
    }

    static fromTree(tree) {
       return new Zipper(tree, tree);
    }

    toTree() {
       // return this.tree;
       return this.root;
    }

   //var =  bt( 1, bt(2, null, leaf(3)), leaf(4) );

    left(){
        this.parentNodes.push(this.tree); //add this one to history.
        this.tree = this.tree.left;
        return this.tree === null ? null : this;

    }

    right() {
        this.parentNodes.push(this.tree); //add this one to history.
        this.tree = this.tree.right;
        return this.tree === null ? null : this;
    }

    value(){
        return this.tree.value;
    }

    up(){
        if(this.parentNodes.length > 0){
            let currentTree = this.parentNodes.pop();
            this.tree = currentTree;
            return this;
        } else {
            return null; //otherwise we dont have any higher level, we're at the top.
        }

    }

    //todo changes original
    setValue(newValue){ //todo null check?
        this.tree.value = newValue;
        return this;
    }


    setLeft(branch){
        this.tree.left = branch;
        return this;
    }

    setRight(branch){
        this.tree.right = branch;
        return this;
    }
}


export default Zipper;


