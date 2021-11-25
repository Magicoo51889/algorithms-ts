import { NO_MATCH } from "../common"

const binarySearch = (items: any[], item: any): number => {
    var lowestIndex:number = 0;
    var highestIndex:number = items.length - 1;
    var completed:boolean = false


    while (lowestIndex <= highestIndex){
        var middleIndex = Math.floor((highestIndex + lowestIndex)/2);
    }

    return NO_MATCH;
}

export default binarySearch;