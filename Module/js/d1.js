//-------------Export functions---------------

// const earnMoney=()=>{
//     return "Earn money bro";
// };

// const growMoney=()=>{
//     return "Grow money bro";
// };

// const giveMoney=()=>{
//     return "Give money bro";
// };

// export default earnMoney;
// export {growMoney,giveMoney};



// export default function earnMoney(){
//     return "Earn money bro";
// };

// export const growMoney=()=>{
//     return "Grow money bro";
// };

// export const giveMoney=()=>{
//     return "Give money bro";
// };

//-------------Export functions---------------

export default class Subs{
    constructor(name){
        this._name=name;
    }

    emailme(){
        return `Hi I am $(this._name). 
        emailed to us`;
    }
}