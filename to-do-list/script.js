const valueBox = document.querySelector(".input");
const listContainer = document.querySelector(".list-container")

function addTolist(){
    if(valueBox.value=== ""){
        alert("You need to write Something")
    }else{
        let li = document.createElement("li");
        li.innerHTML = valueBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "x"
        li.appendChild(span)
        let image2 = document.createElement("img")
        image2.src = "images/check.png";
        li.appendChild(image2)
    }
}

listContainer.addEventListener("click", (e)=>{
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
    else if(e.target.tagName === "IMG"){
        e.target.parentElement.style.backgroundColor = "#89DF8D";
        e.target.parentElement.style.textDecoration = "line-through";
    }
})