const view1=document.getElementById("view1");
console.log(view1);
const view2=document.querySelector("#view2");
console.log(view2);

view1.style.display="flex";
view2.style.display="none";

const view=document.getElementsByClassName("view")
console.log(view);
const sview=document.querySelectorAll(".view");
console.log(sview);

const divs=view1.querySelectorAll("div");
console.log(divs);
const tagDivs=view1.getElementsByTagName("div");
console.log(tagDivs);

const evenDivs=view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);

evenDivs[3].style.backgroundColor="purple";

for(let i=0;i<evenDivs.length;i++)
{
    evenDivs[i].style.backgroundColor="green";
    evenDivs[i].style.width="150px";
}

const navTag=document.querySelector("nav h1");
console.log(navTag);
navTag.textContent="OUR Page";
const navBar=document.querySelector("nav");
navBar.innerHTML='<h1>maha</h1> <p>I am who?</p>'
console.log(navBar);
navBar.style.justifyContent="space-evenly";

view1.style.display="none";
view2.style.display="flex";
view2.style.flexDirection="row";
view2.style.flexWrap="wrap";
view2.style.margin="20px";

console.log(view2.lastChild);
console.log(view2.lastElementChild);
// view2.lastElementChild.remove();

while(view2.lastChild){
    view2.lastChild.remove();
}

const createDiv=(parent,iter) =>{
const newDiv=document.createElement("div");
newDiv.textContent=iter;
newDiv.style.width="100px";
newDiv.style.height="100px";
newDiv.style.backgroundColor="black";
newDiv.style.display="flex";
newDiv.style.justifyContent="center";
newDiv.style.alignItems ="center";
parent.append(newDiv);
}

for(let i=1;i<=12;i++)
{
    createDiv(view2,i);
}















