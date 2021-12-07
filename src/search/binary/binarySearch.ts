import { NO_MATCH } from "../common"

const binarySearch = (items: any[], item: any) => {
    let lowestPointer:number = 0;
    let highestPointer:number = items.length;

    while (lowestPointer < highestPointer){
        let midPointer = Math.floor((highestPointer + lowestPointer)/2);
        if (items[midPointer] === item) return midPointer;
        if (items[midPointer] < item) lowestPointer = midPointer + 1;
        if (items[midPointer] > item) highestPointer = midPointer;
        if (lowestPointer === highestPointer) return NO_MATCH;
        if (midPointer === 0) return NO_MATCH;
    } return NO_MATCH
}
export default binarySearch;

