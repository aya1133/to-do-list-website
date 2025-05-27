let inputAdd = document.getElementById("input-add");
let buttonAdd = document.getElementById("button-add");
let ulEl = document.getElementById("ul-el");

buttonAdd.addEventListener("click", function(){
    let taskText = inputAdd.value ;
    if (taskText.trim() !== "") {
     let li = document.createElement("li");
     let span = document.createElement("span");
     span.textContent = taskText;
     let deletBtn = document.createElement("button");
     deletBtn.textContent = "X";
     deletBtn.className ="delet";
     li.appendChild(span);
     li.appendChild(deletBtn);
     ulEl.appendChild(li);
     deletBtn.addEventListener("click" , function(){
        li.remove();
     });
     inputAdd.value = "";
     span.addEventListener("click" , function(){
        li.classList.toggle("done");
     });
    }
})