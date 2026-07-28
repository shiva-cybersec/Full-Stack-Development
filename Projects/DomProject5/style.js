let arr = [
    {
        dp: "photos/model1.jpg",
        story: "photos/model2.jpg"
    },
    {
        dp: "photos/model3.jpg",
        story: "photos/model4.jpg"
    },
    {
        dp: "photos/model5.jpg",
        story: "photos/model6.jpg"
    },
    {
        dp: "photos/model7.jpg",
        story: "photos/model8.jpg"
    },
    {
        dp: "photos/model9.jpg",
        story: "photos/model10.jpg"
    },
    {
        dp: "photos/model11.jpg",
        story: "photos/model12.jpg"
    }
];

let storiyan = document.querySelector("#storiyan");
let fullScreen = document.querySelector("#full-screen");

let clutter = "";

arr.forEach(function(elem, idx){
    clutter += `
    <div class="story">
        <img data-index="${idx}" src="${elem.dp}" alt="">
    </div>`;
});

storiyan.innerHTML = clutter;


storiyan.addEventListener("click", function(dets){

    if(dets.target.tagName !== "IMG") return;

    let index = dets.target.dataset.index;

    fullScreen.style.display = "block";
    fullScreen.style.backgroundImage = `url(${arr[index].story})`;

    setTimeout(function(){
        fullScreen.style.display = "none";
    },3000);

});