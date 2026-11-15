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

    include (value){
        let current = this.root;
        while (current) {
           if (value === current.data) return true;
           current = value < current.data ? current.left : current.right;
        }
        return false;

    }

    insert (value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }
        let current = this.root;
        while (true) {
            if (value === current.data) return;
            if (value < current.data) {
               if (!current.left) {current.left = newNode; return; }
               current = current.left;
            } else {
                if (!current.right) {current.right = newNode; return; }
                current = current.right;
            }
        }
    }

    deleteItem(value) {
    this.root = this.#delete(this.root, value);
    }

    #delete(node, value) {
    if (!node) return null; 
    if (value < node.data) {
        node.left = this.#delete(node.left, value);
    } else if (value > node.data) {
        node.right = this.#delete(node.right, value);
    } else {
        if (!node.left) return node.right;   
        if (!node.right) return node.left;   

        
        let successor = node.right;
        while (successor.left) successor = successor.left;
        node.data = successor.data;
        node.right = this.#delete(node.right, successor.data);
    }
    return node;
    }
}

import {Tree, prettyPrint} from "./tree.js";

const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
prettyPrint(tree.root);

export {Tree , prettyPrint};