let box = document.querySelector("#box")
let btn1 = document.querySelector("#btn1")

btn1.addEventListener("click",function(){
    let c1 = Math.floor(Math.random() * 256)
    let c2 = Math.floor(Math.random() * 256)
    let c3 = Math.floor(Math.random() * 256)

    box.style.backgroundColor = `rgb(${c1},${c2},${c3})`
})
let arr = [
    {
        team: "Argentina",
        primary: "skyblue",
        secondary: "white",
        captain: "Lionel Messi",
        goal_keeper: "Emiliano Martinez",
        cupwon: "1978, 1986, 2022",
        midfielder: "Enzo Fernandez",
        attacker: "Julian Alvarez",
        defender: "Cristian Romero",
        coach: "Lionel Scaloni"
    },
    {
        team: "Brazil",
        primary: "yellow",
        secondary: "green",
        captain: "Marquinhos",
        goal_keeper: "Alisson Becker",
        cupwon: "1958, 1962, 1970, 1994, 2002",
        midfielder: "Bruno Guimaraes",
        attacker: "Vinicius Jr",
        defender: "Marquinhos",
        coach: "Carlo Ancelotti"
    },
    {
        team: "France",
        primary: "blue",
        secondary: "white",
        captain: "Kylian Mbappe",
        goal_keeper: "Mike Maignan",
        cupwon: "1998, 2018",
        midfielder: "Aurelien Tchouameni",
        attacker: "Kylian Mbappe",
        defender: "William Saliba",
        coach: "Didier Deschamps"
    },
    {
        team: "Germany",
        primary: "white",
        secondary: "black",
        captain: "Joshua Kimmich",
        goal_keeper: "Marc-Andre ter Stegen",
        cupwon: "1954, 1974, 1990, 2014",
        midfielder: "Joshua Kimmich",
        attacker: "Kai Havertz",
        defender: "Antonio Rudiger",
        coach: "Julian Nagelsmann"
    },
    {
        team: "Spain",
        primary: "red",
        secondary: "yellow",
        captain: "Alvaro Morata",
        goal_keeper: "Unai Simon",
        cupwon: "2010",
        midfielder: "Rodri",
        attacker: "Lamine Yamal",
        defender: "Dani Carvajal",
        coach: "Luis de la Fuente"
    },
    {
        team: "England",
        primary: "white",
        secondary: "navy",
        captain: "Harry Kane",
        goal_keeper: "Jordan Pickford",
        cupwon: "1966",
        midfielder: "Declan Rice",
        attacker: "Harry Kane",
        defender: "John Stones",
        coach: "Thomas Tuchel"
    },
    {
        team: "Portugal",
        primary: "red",
        secondary: "green",
        captain: "Cristiano Ronaldo",
        goal_keeper: "Diogo Costa",
        cupwon: "",
        midfielder: "Bruno Fernandes",
        attacker: "Rafael Leao",
        defender: "Ruben Dias",
        coach: "Roberto Martinez"
    },
    {
        team: "Netherlands",
        primary: "orange",
        secondary: "black",
        captain: "Virgil van Dijk",
        goal_keeper: "Bart Verbruggen",
        cupwon: "",
        midfielder: "Frenkie de Jong",
        attacker: "Memphis Depay",
        defender: "Virgil van Dijk",
        coach: "Ronald Koeman"
    },
    {
        team: "Italy",
        primary: "blue",
        secondary: "white",
        captain: "Gianluigi Donnarumma",
        goal_keeper: "Gianluigi Donnarumma",
        cupwon: "1934, 1938, 1982, 2006",
        midfielder: "Nicolo Barella",
        attacker: "Moise Kean",
        defender: "Alessandro Bastoni",
        coach: "Gennaro Gattuso"
    },
    {
        team: "Belgium",
        primary: "red",
        secondary: "black",
        captain: "Kevin De Bruyne",
        goal_keeper: "Koen Casteels",
        cupwon: "",
        midfielder: "Kevin De Bruyne",
        attacker: "Romelu Lukaku",
        defender: "Jan Vertonghen",
        coach: "Rudi Garcia"
    },
    {
        team: "Croatia",
        primary: "red",
        secondary: "white",
        captain: "Luka Modric",
        goal_keeper: "Dominik Livakovic",
        cupwon: "",
        midfielder: "Luka Modric",
        attacker: "Andrej Kramaric",
        defender: "Josko Gvardiol",
        coach: "Zlatko Dalic"
    },
    {
        team: "Uruguay",
        primary: "skyblue",
        secondary: "black",
        captain: "Federico Valverde",
        goal_keeper: "Sergio Rochet",
        cupwon: "1930, 1950",
        midfielder: "Federico Valverde",
        attacker: "Darwin Nunez",
        defender: "Jose Maria Gimenez",
        coach: "Marcelo Bielsa"
    },
    {
        team: "Colombia",
        primary: "yellow",
        secondary: "blue",
        captain: "James Rodriguez",
        goal_keeper: "Camilo Vargas",
        cupwon: "",
        midfielder: "James Rodriguez",
        attacker: "Luis Diaz",
        defender: "Davinson Sanchez",
        coach: "Nestor Lorenzo"
    },
    {
        team: "Mexico",
        primary: "green",
        secondary: "white",
        captain: "Edson Alvarez",
        goal_keeper: "Luis Malagon",
        cupwon: "",
        midfielder: "Edson Alvarez",
        attacker: "Santiago Gimenez",
        defender: "Johan Vasquez",
        coach: "Javier Aguirre"
    },
    {
        team: "USA",
        primary: "white",
        secondary: "blue",
        captain: "Christian Pulisic",
        goal_keeper: "Matt Turner",
        cupwon: "",
        midfielder: "Weston McKennie",
        attacker: "Christian Pulisic",
        defender: "Chris Richards",
        coach: "Mauricio Pochettino"
    },
    {
        team: "Japan",
        primary: "blue",
        secondary: "white",
        captain: "Wataru Endo",
        goal_keeper: "Zion Suzuki",
        cupwon: "",
        midfielder: "Wataru Endo",
        attacker: "Takefusa Kubo",
        defender: "Ko Itakura",
        coach: "Hajime Moriyasu"
    },
    {
        team: "Morocco",
        primary: "red",
        secondary: "green",
        captain: "Achraf Hakimi",
        goal_keeper: "Yassine Bounou",
        cupwon: "",
        midfielder: "Sofyan Amrabat",
        attacker: "Youssef En-Nesyri",
        defender: "Achraf Hakimi",
        coach: "Walid Regragui"
    },
    {
        team: "Senegal",
        primary: "green",
        secondary: "yellow",
        captain: "Kalidou Koulibaly",
        goal_keeper: "Edouard Mendy",
        cupwon: "",
        midfielder: "Idrissa Gueye",
        attacker: "Sadio Mane",
        defender: "Kalidou Koulibaly",
        coach: "Pape Thiaw"
    },
    {
        team: "Nigeria",
        primary: "green",
        secondary: "white",
        captain: "William Troost-Ekong",
        goal_keeper: "Stanley Nwabali",
        cupwon: "",
        midfielder: "Wilfred Ndidi",
        attacker: "Victor Osimhen",
        defender: "William Troost-Ekong",
        coach: "Eric Chelle"
    },
    {
        team: "South Korea",
        primary: "red",
        secondary: "blue",
        captain: "Son Heung-min",
        goal_keeper: "Jo Hyeon-woo",
        cupwon: "",
        midfielder: "Lee Kang-in",
        attacker: "Son Heung-min",
        defender: "Kim Min-jae",
        coach: "Hong Myung-bo"
    }
];
let h1 = document.querySelector("h1")
let main = document.querySelector("main")
let btn2 = document.querySelector("#btn2")
let h21 = document.querySelector("#one")
let h22 = document.querySelector("#two")
let h23 = document.querySelector("#three")
let h24 = document.querySelector("#four")
let h25 = document.querySelector("#five")
let h26 = document.querySelector("#six")
let h27 = document.querySelector("#seven")

btn2.addEventListener("click", function(){
    let winner = arr[Math.floor(Math.random()*arr.length)]
    h1.style.backgroundColor = winner.secondary
    h1.innerHTML = winner.team
    main.style.backgroundColor = winner.primary
    h1.style.color = winner.primary
    btn2.style.color = winner.primary
    btn2.style.backgroundColor = winner.secondary
    h21.innerHTML = winner.captain
    h22.innerHTML = winner.coach
    h23.innerHTML = winner.goal_keeper
    h24.innerHTML = winner.defender
    h25.innerHTML = winner.attacker
    h26.innerHTML = winner.midfielder
    h27.innerHTML = winner.cupwon


})