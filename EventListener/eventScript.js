const view=document.querySelector("#view2");
// console.log(view);
const div=view.querySelector("div");
// console.log(div);
const h2=div.querySelector("h2");
// console.log(h2);
const h1=document.querySelector("h1");
// console.log(h1);

//syntax
// addEventListener(event,function,useCapture)

const doSomething=()=>{
    alert("doing");
}

h2.addEventListener("click",doSomething,false); 
h2.removeEventListener("click",doSomething,false);
h2.addEventListener("click", function(event){ 
    console.log(event.target);
    event.target.textContent ="My view";
});

document.addEventListener("readystatechange",(event)=>{
    if(event.target.readyState === "complete")
    {
        console.log("completed");
        initApp();
    }
});

//useCapture:false - bubbling up
//useCapture:true - bubbling down
//default:false 


const initApp = ()=>{
    const view=document.querySelector("#view2");
    // console.log(view);
    const div=view.querySelector("div");
    // console.log(div);
    const h2=div.querySelector("h2");
    // console.log(h2);

    view.addEventListener("click",(event)=>{
       view.style.backgroundColor ="purple";
    });
    div.addEventListener("click",(event)=>{
       view.style.backgroundColor ="blue";
    });
    h2.addEventListener("click",(event)=>{
       event.target.textContent ="All the best My View";
    });
    h2.addEventListener("click",(event)=>{
        //event.stopPropagation();
       event.target.textContent ="All the best My View";
    });
};


h1.addEventListener("click", function(event){ 
    console.log(event.target);
    const myText=event.target.textContent;
    myText=="My Page" ? (event.target.textContent ="All the best My View") :
    (event.target.textContent ="All the best ");
});