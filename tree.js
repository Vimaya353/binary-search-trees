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

export {Tree};