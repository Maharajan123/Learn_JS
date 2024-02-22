document.addEventListener
("readystatechange", (event) => {
    if(event.target.readyState === "complete")
    {
        console.log("complete");
        initApp();
    }
})

const initApp = () =>{
    const myContent=["Earn","Grow","Give"];
    const myObject ={
        name : "Maharaj",
        myContent: ["Earn","Grow","Give"],
        logName : function() {
            console.log(this.name);
        }
    };
    //window.localStorage.setItem
    window.sessionStorage.setItem
    ("mySessionStore",JSON.stringify(myObject));

    const len=sessionStorage.length;
    console.log(len);
    const key=sessionStorage.key(0);
    console.log(key);
    const remove=sessionStorage.removeItem("mySessionStore");
    console.log(len);
    const clr=sessionStorage.clear();
    console.log(key);

    const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
    console.log(mySessionData);
    

};