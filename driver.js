import { Tree, prettyPrint } from "./tree.js";

const randomArray = (size = 15) =>
  Array.from({ length: size }, () => Math.floor(Math.random() * 100));

const printAll = (tree) => {
  const collect = (method) => {
    const out = [];
    tree[method]((v) => out.push(v));
    return out.join(", ");
  };
  console.log("Level order:", collect("levelOrderForEach"));
  console.log("Pre order:  ", collect("preOrderForEach"));
  console.log("Post order: ", collect("postOrderForEach"));
  console.log("In order:   ", collect("inOrderForEach"));
};

const tree = new Tree(randomArray());
prettyPrint(tree.root);

console.log("Balanced?", tree.isBalanced());

printAll(tree);

[101, 150, 200, 250, 300].forEach((n) => tree.insert(n));
prettyPrint(tree.root);

console.log("Balanced?", tree.isBalanced());

tree.rebalance();

console.log("Balanced?", tree.isBalanced());
prettyPrint(tree.root);


printAll(tree);