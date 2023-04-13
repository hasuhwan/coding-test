class Node {
  constructor() {
    this.value = null;
    this.left = null;
    this.right = null;
    this.x = null;
  }
  insert(val, x) {
    if (this.value === null) {
      this.value = val;
      this.x = x;
    } else if (this.x > x) {
      if (this.left === null) {
        this.left = new Node();
      }
      this.left.insert(val, x);
    } else if (this.x < x) {
      if (this.right === null) {
        this.right = new Node();
      }
      this.right.insert(val, x);
    }
  }
}

function solution(nodeinfo) {
  var answer = [[]];
  nodeinfo = nodeinfo
    .map((el, idx) => [...el, idx + 1])
    .sort((a, b) => {
      if (b[1] === a[1]) {
        return a[0] - b[0];
      }
      return b[1] - a[1];
    });
  const node = new Node();
  for (let i = 0; i < nodeinfo.length; i++) {
    node.insert(nodeinfo[i][2], nodeinfo[i][0]);
  }
    function preorder(node,arr){
        arr.push(node.value);
        if(node.left!==null){
            preorder(node.left,arr);
        }
        if(node.right!==null){
            preorder(node.right,arr);
        }
    }
    function postorder(node,arr){
        if(node.left!==null){
            postorder(node.left,arr);
        }
        if(node.right!==null){
            postorder(node.right,arr);
        }
        arr.push(node.value);
        
    }
    const preArr=[];
    const postArr=[];
    preorder(node,preArr);
    postorder(node,postArr);
  return [preArr,postArr];
}