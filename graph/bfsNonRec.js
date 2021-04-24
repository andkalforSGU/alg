export default function bfsNonRec(startNode, cb) {
    let used = [], node = startNode, count = 0;
    used.push(node);

    while(used[count]) {
        cb(node.data);

        for (let i = 0; i < node.links.length; i++) {
            if (-1 === used.indexOf(node.links[i])) {
                used.push(node.links[i]);
            }
        }

        node = used[++count];
    }
}