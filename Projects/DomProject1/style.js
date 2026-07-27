let istatus  = document.querySelector("h5")
let addFriend = document.querySelector("#add")
let flag = 0
addFriend.addEventListener('click', function(){
    if(flag === 0){
    istatus.innerHTML = "Friends"
    istatus.style.color = "green"
    addFriend.innerHTML = "Remove"
    flag++
}

    else{
        istatus.innerHTML = "Stranger"
        istatus.style.color = "red"
        addFriend.innerHTML = "Add Friend"
        flag --
    }
})

