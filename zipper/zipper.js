
class Zipper {

    constructor(tree){
        this.focus = this.root = Zipper.deepCopyOf(tree);
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
        this.makeCurrentFocusAParent();
        return this.moveFocusOneStepDownToTheLeft();
    }


    right() {
        this.makeCurrentFocusAParent();
        return this.moveFocusOneStepDownToTheRight();
    }

    makeCurrentFocusAParent(){
        this.parentNodes.push(this.focus);
    }


    moveFocusOneStepDownToTheLeft(){
        if(Zipper.subtreeExists(this.focus.left)){
            this.focus = this.focus.left;
            return this;
        }
        return null;
    }

    moveFocusOneStepDownToTheRight(){
        if(Zipper.subtreeExists(this.focus.right)){
            this.focus = this.focus.right;
            return this;
        }
        return null;
    }

    static subtreeExists(tree){
        return tree !== null;
    }

    value(){
        return this.focus.value;
    }

    up(){
        if(!this.thereIsAParent()){
            return null;
        }
        this.moveFocusToParent();
        return this;
    }

    moveFocusToParent(){
        this.focus = this.parentNodes.pop();
    }

    thereIsAParent(){
        return this.parentNodes.length > 0
    }

    setValue(newValue){
        this.focus.value = newValue;
        return this;
    }

    setLeft(branch){
        this.focus.left = branch;
        return this;
    }

    setRight(branch){
        this.focus.right = branch;
        return this;
    }
}


export default Zipper;


