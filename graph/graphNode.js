export default class Node {
    links = [];

//-------------------------------------------------

    constructor(data) {
        this.id = getID();
        this.data = data
    }

//-------------------------------------------------

    addLinks(...links) {
        for (let i=0; i<links.length; i++) {
            this.links.push(links[i]);
        }
    }
}

//-------------------------------------------------

const getID = getIDCreate(0);

function getIDCreate(n) {
    let id = 0;
    return function() {
        return id++;
    };
}
