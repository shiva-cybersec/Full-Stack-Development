let elem = document.querySelectorAll(".elem");

elem.forEach(function(val){
    let img = val.querySelector("img");
    val.addEventListener("mouseenter", function(){
        img.style.opacity = "1";
    });

    val.addEventListener("mouseleave", function(){
        img.style.opacity = "0";
    });

    val.addEventListener("mousemove", function(dets){
        img.style.left = dets.pageX - 50 + "px";
        img.style.top = dets.pageY - 50 + "px";
    });
});