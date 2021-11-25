import { NO_MATCH } from "../common"

const binarySearch = (items: any[], item: any): number => {
    var lowestIndex:number = 0;
    var highestIndex:number = items.length - 1;
    var completed:boolean = false


    while (lowestIndex <= highestIndex){
        var middleIndex = Math.floor((highestIndex + lowestIndex)/2);
        if (items[middleIndex] == item) {
            console.log("Lowest: " + lowestIndex)
            console.log("Highest: " + highestIndex)
            console.log("Mid: " + middleIndex)
            completed = true
            return middleIndex;
        } else if (items[middleIndex] < item){
            lowestIndex = middleIndex + 1;
            console.log("Lowest: " + lowestIndex)
            console.log("Highest: " + highestIndex)
            console.log("Mid: " + middleIndex)
        } else {
            lowestIndex = middleIndex - 1;
            console.log("Lowest: " + lowestIndex)
            console.log("Highest: " + highestIndex)
            console.log("Mid: " + middleIndex)
        }
    } return NO_MATCH;
    
    
}

export default binarySearch;