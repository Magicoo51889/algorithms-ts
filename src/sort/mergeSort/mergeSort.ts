import { SortAlgorithm } from "../common";

const mergeSort: SortAlgorithm<any> = <T>(items: T[]): T[] => {
    if (items.length === 0){
        return items
    }
    return merge_sort_recurse(input_list, 0, input_list.length)
    
    function merge_sort_recurse<T>(input_list: StrOrInt,
                                left_pointer: number,
                                right_pointer: number) -> items {
    if (left_pointer == right_pointer){
        return input_list[left_pointer]
    }
    middle: number = floor((left_pointer + right_pointer) / 2)

    first_half: StrOrInt = merge_sort_recurse(input_list, left_pointer, middle);
    second_half: StrOrInt = merge_sort_recurse(input_list, middle + 1, right_pointer);

    output_list: StrOrInt = []
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