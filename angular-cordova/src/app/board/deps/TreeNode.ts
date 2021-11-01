import { Info } from "./Info";

export class TreeNode {
    info: Info;
    next_nodes: TreeNode[];

    constructor() {
        this.next_nodes = [];
    }

    add(info?: number): TreeNode {
        this.next_nodes.push(new TreeNode());
        return this.next_nodes[-1];
    }
}