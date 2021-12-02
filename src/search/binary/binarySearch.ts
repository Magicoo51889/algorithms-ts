import { NO_MATCH } from "../common"

const binarySearch = (items: any[], item: any) => {
    let result = null
    let lowestPointer:number = 0;
    let highestPointer:number = items.length - 1;

    if (typeof(item) === "number"){
        while (lowestPointer <= highestPointer && result == null){
            let midPointer = lowestPointer + Math.floor((highestPointer - lowestPointer)/2);
            let result = items[midPointer];
            if (items[midPointer] === item) {
                result === items[midPointer]
                console.log(result)
                return result;
            } else if (items[midPointer] < item){
                if (midPointer === items.length){
                    console.log(midPointer)
                    console.log(result)
                    return NO_MATCH
                }
                lowestPointer = midPointer + 1;
            }else if (lowestPointer === highestPointer){
                console.log(lowestPointer)
                console.log(highestPointer)
                return NO_MATCH
            } else {
                if (midPointer === 0){
                    console.log(lowestPointer)
                    console.log(highestPointer)
                    console.log(midPointer)
                    return NO_MATCH
                }
                highestPointer = midPointer - 1;
            }
        } return NO_MATCH
    }
}
// returns 7 not 5

export default binarySearch;