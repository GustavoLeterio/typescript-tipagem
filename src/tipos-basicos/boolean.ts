let bool: boolean;
bool = true;    /* Certo */
// bool = 5;    /* Errado */

function handleBool(condition:boolean):boolean{
    // return 5;  /* Errado */

    if(condition === true) return true; /* Certo */
    else return false; /* Certo */
}

console.log(handleBool(bool));       /* Certo */
// console.log(handleBool("bool"));  /* Errado */


