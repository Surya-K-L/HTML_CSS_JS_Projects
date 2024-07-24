const inputBox= document.getElementById("input-box");
const listContainer= document.getElementById("list-container");

function addTask(){
    if(inputBox.value==='')
    {
        alert("You must enter a task!!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveDetail();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveDetail();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveDetail();
    }
},false);

function saveDetail(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function displayTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
displayTask();