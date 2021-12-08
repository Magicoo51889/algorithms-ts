import { SortAlgorithm } from "../common";
import swap from "../swap";

const bubbleSort: SortAlgorithm<any> = <T>(items: T[]): T[] => {
    let output_list = items

    for (let t = 0; t < items.length; t++) {
        var swap_made: boolean = false

        for (let c = t - 1; c++;) {
            if (output_list[c] > output_list[c + 1]){
                swap_made = true
                swap(output_list, c, c + 1);
            }
        } if(swap_made === false){
            break
        } 
    }
    return output_list;
}

export default bubbleSort;