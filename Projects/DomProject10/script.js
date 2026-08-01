let users = [
    {
        fullName: "Lionel Messi",
        image:  "../../photos/model8.jpg",
        profession: "Football Player",
        description: "Argentine legend and one of the greatest footballers of all time.",
        tags: ["Football", "Argentina", "GOAT", "Captain"]
    },
    {
        fullName: "Cristiano Ronaldo",
        image:  "../../photos/model6.jpg",
        profession: "Football Player",
        description: "Portuguese superstar known for his incredible goal-scoring ability.",
        tags: ["Football", "Portugal", "Striker", "Legend"]
    },
    {
        fullName: "Elon Musk",
        image:  "../../photos/model4.jpg",
        profession: "Entrepreneur",
        description: "CEO of Tesla and SpaceX, focused on innovation and technology.",
        tags: ["Tesla", "SpaceX", "Technology", "Business"]
    },
    {
        fullName: "Taylor Swift",
        image:  "../../photos/model3.jpg",
        profession: "Singer",
        description: "Award-winning singer-songwriter with a global fanbase.",
        tags: ["Music", "Pop", "Singer", "Grammy"]
    }
];

let sum = ""
users.forEach(function(elem){
    sum = sum + ` <div class="card">
        <img src=${elem.image} alt="">
        <h3>${elem.fullName}</h3>
        <h4>${elem.profession}</h4>
        <p>${elem.description}</p>
    </div> `
})

let main = document.querySelector("main")
main.innerHTML = sum