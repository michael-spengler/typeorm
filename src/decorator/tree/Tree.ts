import {getMetadataArgsStorage} from "../../index.ts";
import {TreeMetadataArgs} from "../../metadata-args/TreeMetadataArgs.ts";
import {TreeType} from "../../metadata/types/TreeTypes.ts";

/**
 * Marks entity to work like a tree.
 * Tree pattern that will be used for the tree entity should be specified.
 * @TreeParent decorator must be used in tree entities.
 * TreeRepository can be used to manipulate with tree entities.
 */
export function Tree(type: TreeType): Function {
    return function (target: Function) {

        getMetadataArgsStorage().trees.push({
            target: target,
            type: type
        } as TreeMetadataArgs);
    };
}
