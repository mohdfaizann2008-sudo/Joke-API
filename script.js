let btn=document.querySelector("#joke");
let para=document.querySelector("#here");
let none=document.querySelector("#lighter");

btn.addEventListener('click', async()=>{
    let response=await fetch('https://v2.jokeapi.dev/joke/Any?type=single')
    let data=await response.json();
    console.log(data);
    para.textContent=data.joke;
})

let rejectPromise=new Promise((reject,resolve)=>{
    console.log("The joke did not came");
    reject(new Error())
})
rejectPromise.catch((value)=>{
    console.log(value);
    
})
btn.addEventListener('click',()=>{
    none.textContent=""
})