import { NO_MATCH } from "../common"

const alphabet =["abcdefghijklmnopqrstuvwxyz"]

const binarySearch = (items: any[], item: any) => {
    let lowestIndex:number = 0;
    let highestIndex:number = items.length - 1;
    let completed:boolean = false

    if (typeof(item) === "number"){
        while ((lowestIndex <= highestIndex) && completed){ // Infinite loop
            let middleIndex = lowestIndex + Math.floor((highestIndex - lowestIndex)/2);
            let guess = items[middleIndex];
            if (guess === item) {
                completed = true
                return middleIndex;
            } else if (items[middleIndex] < item){
                lowestIndex = middleIndex + 1;
            } else {
                lowestIndex = middleIndex - 1;
            }
        } return NO_MATCH;
    }
}

export default binarySearch;