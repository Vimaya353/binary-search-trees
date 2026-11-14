class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(array) {
        this.root = this.#buildTree(array);
    }

    #buildTree(array) {
        const sorted = [...new Set (array)].sort((a,b) => a - b);
        return this.#buildTree(sorted,0,sorted.length - 1);
    }

    #build (arr,start,end){
        if (start > end) return null;
        const mid = Math.floor((start + end)/2);
        const node = new Node(arr[mid]);
        node.left = this.#build(arr,start,mid - 1);
        node.right = this.#build(arr,mid + 1,end);
        return node;
    }
}

import {Tree, prettyPrint} from "./tree.js";

const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
prettyPrint(tree.root);

export {Tree , prettyPrint};