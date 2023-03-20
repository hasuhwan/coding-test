class Tree {
  constructor(value, Xposition) {
    this.value = value;
    this.Xposition = Xposition;
    this.leftChild = null;
    this.rightChild = null;
  }
  add(value, Xposition) {
    this.Xposition > Xposition
      ? this.left(value, Xposition)
      : this.right(value, Xposition);
  }
  left(value, Xposition) {
    this.leftChild === null
      ? (this.leftChild = new Tree(value, Xposition))
      : this.leftChild.add(value, Xposition);
  }
  right(value, Xposition) {
    this.rightChild === null
      ? (this.rightChild = new Tree(value, Xposition))
      : this.rightChild.add(value, Xposition);
  }
}
function preorder(search, arr) {
  arr.push(search.value);
  if (search.leftChild !== null) {
    preorder(search.leftChild, arr);
  }
  if (search.rightChild !== null) {
    preorder(search.rightChild, arr);
  }
}
function postorder(search, arr) {
  if (search.leftChild !== null) {
    postorder(search.leftChild, arr);
  }
  if (search.rightChild !== null) {
    postorder(search.rightChild, arr);
  }

  arr.push(search.value);
}
function solution(nodeinfo) {
  const preorderArr = [];
  const postorderArr = [];
  const nodeInfo = nodeinfo
    .map((el, idx) => [...el, idx + 1])
    .sort((a, b) => {
      if (b[1] === a[1]) {
        return a[0] - b[0];
      }
      return b[1] - a[1];
    });
  const root = new Tree(nodeInfo[0][2], nodeInfo[0][0]);
  for (let i = 1; i < nodeInfo.length; i++) {
    root.add(nodeInfo[i][2], nodeInfo[i][0]);
  }
  preorder(root, preorderArr);
  postorder(root, postorderArr);
  return [preorderArr, postorderArr];
}