
class Zipper {

    constructor(tree){
        this.tree = this.root = Zipper.deepCopyOf(tree);
        this.parentNodes = [];
    }

    static deepCopyOf(object){
        return JSON.parse(JSON.stringify(object));
    }

    static fromTree(tree) {
       return new Zipper(tree);
    }

    toTree() {
       return this.root;
    }

    left(){
        this.makeCurrentTreeNodeAParent();
        return this.getTreeOneStepDownToTheLeft();
    }


    right() {
        this.makeCurrentTreeNodeAParent();
        return this.getTreeOneStepDownToTheRight();
    }


    getTreeOneStepDownToTheLeft(){
        if(Zipper.treeExists(this.tree.left)){
            this.tree = this.tree.left;
            return this;
        }
        return null;
    }

    getTreeOneStepDownToTheRight(){
        if(Zipper.treeExists(this.tree.right)){
            this.tree = this.tree.right;
            return this;
        }
        return null;
    }

    static treeExists(tree){
        return tree !== null;
    }

    makeCurrentTreeNodeAParent(){
        this.parentNodes.push(this.tree);
    }

    value(){
        return this.tree.value;
    }

    up(){
        if(!this.thereIsAParent()){
            return null;
        }
        this.tree = this.parentNodes.pop();
        return this;
    }

    thereIsAParent(){
        return this.parentNodes.length > 0
    }

    setValue(newValue){
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


