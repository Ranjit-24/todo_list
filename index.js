const ul = document.querySelector("ul");
let count;
addEventListener("DOMContentLoaded",()=>{
    let data = JSON.parse(localStorage.getItem("data"));
    console.log(data)
    let predata="";
    if(data!==null){
    data.forEach(element => {
        console.log(predata)
        predata+=element.data;
    });
    ul.innerHTML= predata;
}
})
class obj{
    constructor(id,data){
        this.id=id;
        this.data=data;
    }
};
document.getElementById("add_button").addEventListener("click",()=>{
    count=localStorage.getItem("count");
    count++;
    let data = document.getElementById("input").value;
    let todo=document.createElement("div");
    todo.innerHTML=`<div id="${count}div">
    <input type ="checkbox" onclick="done_list(this,'${count}p')">
    <p id='${count}p'>${data}</p>
    <button onclick="delete_list('${count}div')">delete</button>
    </div>`;    
    ul.appendChild(todo);
    let todo_obj=new obj(count,todo.innerHTML);
    let todo_arrray=[];
    if(localStorage.getItem("data")!==null){
        todo_arrray=JSON.parse(localStorage.getItem("data"));
    }
    todo_arrray.push(todo_obj);
    console.log(todo_obj);
    console.log(todo_arrray);
    let todo_data=JSON.stringify(todo_arrray);
    localStorage.setItem("data",`${todo_data}`);
    localStorage.setItem("count",`${count}`);
});
document.getElementById("clear").addEventListener("click",()=>{
    localStorage.clear()
});
let delete_list=(loc)=>{
    console.log(loc);
    document.getElementById(loc).style.display="none";
}
function done_list(loc,p){
    console.log("dskf")
    let para=document.getElementById(p)
    if(loc.checked){
        para.style.textDecoration="line-through";
    }
    else{
        para.style.textDecoration="none";

    }
}