// Select all keys
let whiteTabs = document.querySelectorAll(".whitetab");
let blackTabs = document.querySelectorAll(".blacktab");

// Piano sounds
let sounds = [
    new Audio("../../music/28.mp3"),
    new Audio("../../music/29.mp3"),
    new Audio("../../music/30.mp3"),
    new Audio("../../music/31.mp3"),
    new Audio("../../music/32.mp3"),
    new Audio("../../music/33.mp3"),
    new Audio("../../music/34.mp3"),
    new Audio("../../music/35.mp3"),
    new Audio("../../music/36.mp3"),
    new Audio("../../music/37.mp3"),
    new Audio("../../music/38.mp3"),
    new Audio("../../music/39.mp3"),
    new Audio("../../music/40.mp3"),
    new Audio("../../music/41.mp3"),
    new Audio("../../music/42.mp3"),
    new Audio("../../music/43.mp3"),
    new Audio("../../music/44.mp3"),
    new Audio("../../music/45.mp3"),
    new Audio("../../music/46.mp3"),
    new Audio("../../music/47.mp3"),
    new Audio("../../music/48.mp3"),
    new Audio("../../music/49.mp3"),
    new Audio("../../music/50.mp3"),
    new Audio("../../music/51.mp3"),
    new Audio("../../music/52.mp3"),
    new Audio("../../music/53.mp3"),
    new Audio("../../music/54.mp3"),
    new Audio("../../music/55.mp3"),
    new Audio("../../music/56.mp3"),
    new Audio("../../music/57.mp3"),
    new Audio("../../music/58.mp3"),
    new Audio("../../music/59.mp3"),
    new Audio("../../music/60.mp3"),
    new Audio("../../music/61.mp3"),
    new Audio("../../music/62.mp3"),
    new Audio("../../music/63.mp3")
];

document.querySelectorAll(".whitetab, .blacktab").forEach(function(key){
    key.addEventListener("mousedown", function(e){
        e.stopPropagation();

        let index = Number(key.dataset.index);
        sounds[index].pause();
        sounds[index].currentTime = 0;
        sounds[index].play();
    })
})