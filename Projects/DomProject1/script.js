let statusText = document.querySelector("h5");
let button = document.querySelector("#add");
let flag = 0;

button.addEventListener("click",function(){

    if(flag===0){
        statusText.innerHTML = "Friends";
        statusText.style.color = "green";
        button.innerHTML = "Remove Friend";
        button.style.backgroundColor = "#e74c3c";
        flag = 1;
    }

    else{
        statusText.innerHTML = "Stranger";
        statusText.style.color = "red";
        button.innerHTML = "Add Friend";
        button.style.backgroundColor = "#3498db";
        flag = 0;
    }

});