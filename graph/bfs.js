export default function bfs(startNode, cb) {
    let used = [];

    function bfsStart(nodeInUse) {

        used.push(nodeInUse.id);
        cb(nodeInUse.data);

        for(let i = 0; i < nodeInUse.links.length; i++) {
            if (-1 === used.indexOf(nodeInUse.links[i].id)) {
                bfsStart(nodeInUse.links[i]);
            }
        }
    }

    bfsStart(startNode);
}