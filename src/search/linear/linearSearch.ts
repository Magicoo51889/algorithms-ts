import { NO_MATCH } from "../common";

const linearSearch = (items: any[], item: any): number => {
    let found:boolean = false
    let index:number = 0

    for(let i=0; i<items.length; i++){
        if (items[i] === item) {
            let found:boolean = true
            let index:number = i
            console.log(found + " " + index)
            return i;
        }
    }

    return NO_MATCH;
}

export default linearSearch;