//Basics
console.log("Hi madam");
console.log(typeof("Dhuddu"));
console.log(typeof(1000));
console.log(1000===1000);
let variable=30;
console.log(variable*30);
variable=variable+30;
console.log(variable);

//----------------------------------Strings and its methods------------------------
const myVar="Maharajan";
console.log(myVar);

console.log(myVar.length);
console.log("subscribe to a variable".length);
console.log(myVar.charAt(4));
console.log(myVar.indexOf("ja"));
console.log(myVar.lastIndexOf("a"));
console.log(myVar.slice(4,7));
console.log(myVar.slice(4));
console.log(myVar.toUpperCase());
console.log(myVar.toLowerCase());
console.log(myVar.includes("jat"));
console.log(myVar.split("a"));

//------------------------------------Numbers and its Methods-----------------------
const myStr="500"+3; //5003
const myNum=20;
const myFloat=20.00123;

console.log(myNum);
console.log(myFloat);
console.log(myNum === myFloat);
console.log(myStr);

console.log(Number(myStr)*2);
console.log(Number("myStr")*2);
console.log(Number(true)*2);
console.log(Number(false)*2);

console.log(Number.isInteger(myNum));

const myVarr="7888.888aa";
console.log(Number.parseFloat(myVarr));
console.log(Number.parseInt(myVarr));
console.log(Number.parseFloat(myVarr).toFixed(2));
console.log(typeof myFloat.toString());
//chaining
console.log(Number.parseInt(parseFloat(myVarr).toString()));
console.log(Number.isNaN("MAha"));
console.log(isNaN("MAha"));


//-------------------------Mathematical methods and properties----------------
console.log(Math.PI);
console.log(Math.trunc(Math.PI));
console.log(Math.round(20.654));
console.log(Math.ceil(24.1));
console.log(Math.floor(49.9));
console.log(Math.pow(2,3));
console.log(Math.max(2,3,8,4,10,-1));
console.log(Math.min(2,3,8,4,10,-1));
console.log(Math.random()); //gives number between 0.00 t0 0.999 (0 to 1)
console.log(Math.floor(Math.random()*100)+1); //1 to 10

//challenge --- generate random character in a string
let myName="Maharajan";
console.log(myName.charAt(Math.floor(Math.random()*10)+1));
console.log(myName.charAt(Math.floor(Math.random()*(myName.length))+1));
console.log(myName.charAt(Math.floor(Math.random()*myName.length)));
console.log(myName.charAt(Math.floor(Math.random()*myName.length)));

//-----------------------IF STATEMENT----------------------------
let query="Maharajan is a handsome guy";
let reply;
if(query)
{
    reply=`Yes ${query}`;
}
else
{
    reply="No ${query}";
}
console.log(reply);

//-----------------------SWITCH STATEMENT----------------------------
let a=10;
switch(7)
{
    case 6:
        console.log(a+1);
        break;
    case 7:
        console.log(a-1);
        break;
    case 10:
        console.log(a*a);
        break;
    default:
        console.log("No Match");
}

//-------------------CONDITIONAL/TERNARY STATEMENT----------------------------

let b=9;
(b===9) ? console.log("true"):console.log("false");

//------------------------------USER INPUT----------------------------

// let myBool=alert("Hi you");
// console.log(myBool); 

// myBool=confirm("Hi you man");
// console.log(myBool); //ok-true && cancel-false

// myBool=prompt("Enter your name:");
// console.log(myBool);

// myBool=prompt("Enter your name:");
// console.log(myBool ?? "You didn't enter");
// ??-Null collapsing operator

// myBool=prompt("Enter your name:");
// if(myBool)
// {
//     console.log(myBool ?? "You didman't enter");
// }
// else
// {
//     console.log(" please type your name you didnmm't");
// }
// console.log(myBool.trim().length);

// let playAgain=confirm("Play Again ? ");
// playAgain ? location.reload() : alert("Ok, Thanks for playing");

//------------------------------LOOPS----------------------------

let i=2;
while(i<=5)
{
    console.log(i);
    i=i+1;
}

i=3
do{
    console.log(i);
    i=i+1;
}
while(i<=5)

for(i=11;i<=15;i++)
{
    console.log(i);
}

let name="Maharajan";
for(i=1;i<name.length;i+=2)
{
    console.log(name.charAt(i));
}

for(i=1;i<name.length;i+=2)
{
    for(let j=i+1;j<name.length;j+=2)
    {
        if(i===1 && j===3)
        continue;
        else if(i===name.length-1 && j===name.length-1)
        break;
        else
        console.log(i,j);
    }
}

//--------------------------FUNCTIONS----------------------------
a=10,b=-1;
function sum(z,j)
{
    return z+j;
}
console.log(sum(a,b));

//--------------------------SCOPE----------------------------

//var, let ,const

var x=1;
var x=2;
console.log(x);  //var is not to used by user

//global scope
var x=1;
let y=2;
const z=3;

//local scope
//-->block scope
{
    let y=4;
}
//-->function scope
function muFu()
{
    const z=5;
}
muFu()
console.log(x,y,z);

//--------------------------ARRAY----------------------------
  
const myArr=[];
//add
myArr[0]="Maha";
myArr[1]="Rajan";
myArr[2]=4;
myArr[3]=5;
myArr[4]=true;

console.log(myArr);
console.log(myArr.length);
console.log(myArr[2]);
console.log(myArr[myArr.length-1]);

myArr.push("click");
console.log(myArr);    //add last 
myArr.unshift(1);   //add 1st 
console.log(myArr);
myArr.pop(); //delete last element
console.log(myArr);
myArr.shift(); //delete 1st ele
console.log(myArr);
const fi=myArr.unshift(1); 
console.log(fi);
const li=myArr.push("click");
console.log(li);
console.log(myArr);
delete myArr[6];
console.log(myArr);

myArr.splice(6,1);
console.log(myArr);

myArr.splice(6,1,"end");
console.log(myArr);

const newArr=myArr.splice(3,6,"mr");
console.log(newArr);

const newArr2=newArr.reverse();
console.log(newArr2);

const newArr3=newArr.join();
console.log(newArr3);

const newArr4=newArr3.split(",");
console.log(newArr4);

myArrayA=["false",1,2,"aa"];
const newArray=myArr.concat(myArrayA);
console.log(newArray);
const newArray2=[...newArray,...myArrayA];
console.log(newArray2);
const newArray3=[newArray,newArray2];
console.log(newArray3);

//--------------------------OBJECT---------------------------

const myObj={name:"Maharajan"};
console.log(myObj);
console.log(myObj.name);

const anoObj={
    subscriber:true,
    no:10,
    name:"Maddy",
    content : {
        earn:"java",
        grow:"skill"
    },
    subdiv:["web","software","Android"],
    action : function(){
        return "Hello World";
    },
    action2 : function(){
        return `grow with your ${this.content.grow}`;
    }

};
console.log(anoObj);
console.log(anoObj.content.grow);
console.log(anoObj["subdiv"]);
console.log(anoObj.action());
console.log(anoObj.action2());
//inherit object
const car=Object.create(anoObj);
console.log(car.action());

console.log(Object.keys(anoObj));
console.log(Object.values(anoObj));

// for(let jo in anoObj)
// {
//     console.log(anoObj.jo);
// }
console.log(anoObj.hasOwnProperty("no"));
delete anoObj.no;
console.log(anoObj);
console.log(anoObj.hasOwnProperty("no")); 

//--------------------------CLASS---------------------------
class pizza{
    constructor(typePizza)
        {
            this.type=typePizza;
            this.buy="yes,buy";
            this.sell="yes,sell";
            this.toppings="olives";
        }

        getToppingsPizza()
        {
            return this.toppings;
        }
        setToppingsPizza(toppingsPizza)
        {
            this.toppings=toppingsPizza;
        }
        buyPizza(){
            console.log(`${this.buy} ${this.type} with ${this.toppings} from any member `);
        }
        sellPizza(){
            console.log(`${this.sell} ${this.type} with ${this.toppings} it to any member`);
        }
}
const anoPizza=new pizza("Margaritta");
console.log(anoPizza.getToppingsPizza());
console.log(anoPizza.buyPizza());
console.log(anoPizza.sellPizza());

//--------------------------JSON---------------------------

//JSON-Javascript Object Notation
// to send and receive data in many programmming languages
const anoObj2={
    subscriber:true,
    no:10,
    name:"Maddy",
    content : {
        earn:"javascript",
        grow:"skillset"
    },
    subdiv:["web","software","Android"],
    action : function(){
        return "Hello World";
    },
    action2 : function(){
        return `grow with your ${this.content.grow}`;
    }

};
console.log(anoObj2);
console.log(anoObj2.content.grow);

const sendJSON =JSON.stringify(anoObj2);
console.log(sendJSON);
console.log(typeof sendJSON);

const receiveJSON=JSON.parse(sendJSON);
console.log(receiveJSON.content);
console.log(typeof receiveJSON);

//--------------------------ERRORS AND ERROR HANDLING---------------------------

"use strict";

const variables="dhuddu";//reference error
console.log(variables);

//Object..create(); //syntax error
//variables="subs"; //type error

const makeError=()=>{
    try{
        const names2="dhuddu";
        names2="dhuddu";
    }
    catch(err)
    {
        console.log(err);
        console.error(err);
        console.warn(err);
        console.table(err);
    }
    finally{
        console.log("....finally");
    }
};
makeError();

//--------------------------DOM---------------------------
//DOM-Document Object Model
const v1=document.getElementById("view1");
console.log(v1);
const v2=document.querySelectors("")