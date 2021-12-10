import { SortAlgorithm } from "../common";

type StrOrInt = string | number;

const mergeSort: SortAlgorithm<any> = <T>(items: T[]): T[] => {
    if (items.length === 0){
        return items
    }
    return merge_sort_recurse(items, 0, items.length)
    
    function merge_sort_recurse<T>(items: StrOrInt,
                                left_pointer: number,
                                right_pointer: number) {
    if (left_pointer === right_pointer){
        return items[left_pointer]
    }
    let middle: number = floor((left_pointer + right_pointer) / 2)
    let first_half: StrOrInt = merge_sort_recurse(items, left_pointer, middle);
    let second_half: StrOrInt = merge_sort_recurse(items, middle + 1, right_pointer);

    let output_list: List[StrOrInt] = []
    while(((first_half.length) > 0) && ((second_half.length)>0)){
        if first_half[0] > second_half[0]{
            output_list.append(second_half.pop(0))
        } else {
            output_list.append(first_half.pop(0))
        }
    }

    output_list.extend(first_half)
    output_list.extend(second_half)
}

export default mergeSort;