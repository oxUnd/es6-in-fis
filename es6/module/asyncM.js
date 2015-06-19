
import {a_1, a_2} from "./_a";

export function a () {
    console.log('a');
    a_1();
}

export function b () {
    console.log('b');
    console.log(a_2);
}