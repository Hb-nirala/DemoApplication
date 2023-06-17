//This file is created by me 
//if i not write export here then got typeError (undefined) 
//also not import 

import { printDuplicate } from './Duplicateelements';
import { sumofArray } from './Arraysum';
import { AssendingArr } from './Assendingorder';
import { DessendingArr } from './Descendingorder';

 const floatConvert = (newText) =>{
    return parseFloat(newText).toFixed(2)
}

 const sumArray =() =>{
    return 'sum Array'
}

 const consoPrint =(name) =>{
    console.log('Hello i am ',name)
}

export {
    floatConvert,
    sumArray,
    consoPrint,
    printDuplicate,
    sumofArray,
    AssendingArr,
    DessendingArr
}
