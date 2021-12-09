import { SortAlgorithm } from "../common";
import swap from "../swap";

const bubbleSort: SortAlgorithm<any> = <T>(items: T[]): T[] => {
    let output_list = items.slice()
// The current position for the pointer to evaluate in this iteration
    for (let t = 0; t < items.length; t++) {
        var swap_made: boolean = false
        for (let c = 0; c < items.length; c++) {
            if (output_list[c] > output_list[c + 1]){
                swap_made = true
                let swap = output_list[c]
                output_list[c] = output_list[c+1];
                output_list[c+1] = swap
            }
        }if (true != swap_made){ // Early exit to prevent overwrites
            break
        } 
    }return output_list;
}

export default bubbleSort;