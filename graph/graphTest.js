import Node      from './graphNode.js';
import bfs       from './bfs.js'
import bfsNonRec from './bfsNonRec.js'

let A = new Node(100);
let B = new Node(200);
let C = new Node(300);
let D = new Node(400);
let E = new Node(500);

A.addLinks(E,D);
B.addLinks(D,C);
C.addLinks(C,B);
D.addLinks(B,A);
E.addLinks(A);

bfsNonRec(A, x=>console.log(x));
bfs(A, x=>console.log(x));
