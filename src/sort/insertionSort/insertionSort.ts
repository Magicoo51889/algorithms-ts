import { SortAlgorithm } from "../common";
import swap from "../swap";

const insertionSort: SortAlgorithm<any> = <T>(items: T[]): T[] => {

    let output_list = items
    for (let i = 0; i < items.length; i++) {
        let item_to_place = output_list[i]
        let item_place: number = i

        while (item_place > 0){
            let lower: number = item_place - 1;
            let upper: number = item_place;
 // Returns -1 if the first item is higher than the second
            if (output_list[lower] > item_to_place){
                swap(output_list, lower, upper)
            } else { // Checks if item can be placed early 
                item_place = upper
                break
            } item_place -= 1
        }
        output_list[item_place] = item_to_place
    }
    return output_list;
}

export default insertionSort;