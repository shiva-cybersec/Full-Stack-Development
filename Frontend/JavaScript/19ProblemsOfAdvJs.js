// Scenario 1: Weather Dashboard with Error Handling

// Build a small weather dashboard that fetches current weather data from any public weather API (such as OpeanWeatherMap 2.5 api for now)
// You must make the API request asynchronously using fetch with async/await.
// If the API request fails (for example, due to an invalid city name), you must handle the error using try/catch.
// Additionally, create and throw custom erros based on weather conditions.
// For example:
// If the temperature is extremely high or extremely low, throw error and handle it properly in your code
// replace everything between 2.5/ to & 
// and add weather?q=${cityname}


// using .then .then
// function getWeather(city){
//     let apikey = `3587481731190e53a488d973ad5b3407`;

// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)
// .then(raw => raw.json())
// .then(result => {
//     console.log(result)
// })
// }
// getWeather("Bhaktapur")



// using async await
async function getWeather(city) {
    try {
        let apikey = `3587481731190e53a488d973ad5b3407`;

        let raw = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
        );

        if (!raw.ok) {
            throw new Error("City not found");
        }

        let real = await raw.json();
        if (real.main.temp < 0) {
            console.warn(`Too cold out there... ${real.main.temp}°C`)
        }
        else if (real.main.temp > 30) {
            console.warn(`Too hot out there... ${real.main.temp}°C`)

        }
        else {
            console.log(real.main.temp)

        }

    } catch (err) {
        console.log(err.message);
    }
}

getWeather("bhaktapur");


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// Concept:
// async
// Its main work is to allow the use of await inside the function.

// await
// Its main work is to wait for a Promise to finish
// (either success or error)
// and then return the result to the variable on the left side.

// fetch()
// Sends a request to the URL and immediately returns a Promise object.

// Promise
// A Promise is a JavaScript object that represents
// a result that will come later.

// Example:
// let raw = await fetch(url);

// fetch(url) returns a Promise
// await waits for that Promise to finish
// raw receives the Response object

// let realdata = await raw.json();

// .json() returns another Promise
// await waits for the JSON conversion
// realdata receives the actual JavaScript object (readable data)
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
















// Scenario 2: Bulk Email Sending Simulation with Parallel Promises and Error Handling

// Think of a scenario where you must simulate sending bulk emails to 5 users.
// Treat each email-sending operation as a promise (you may simulate it using setTimeout()).
// All emails must be sent in parallel using Promise.all
// If any email fails (for example, due to random failure condition), you must catch the error and clearly show which specific email failed
// In addition, use a finally block to display a message indicating that the "Email process is complete"
let users = [
    "john.doe@gmail.com",
    "emma.smith@yahoo.com",
    "michael.brown@outlook.com",
    "sophia.wilson@gmail.com",
    "david.johnson@hotmail.com"
];
function sendEmail(email){
    return new Promise((resolve, reject) => {
        let time = Math.floor(Math.random() * 5)
        
        setTimeout(function(){
            let probability = Math.floor(Math.random() * 10)
            if(probability <= 5) resolve("Email sent")
                else reject("Email not sent")
        },time * 1000)
    }
)}


async function sendEmails(userlist){
    let allresponse = userlist.map(function(email){
        return sendEmail(email)
        .then(function(data){
            return data
        })
        .catch(function(err){
            return err
        })
    })
    //  Promise.all(allresponse)
    // .then(function(real){
    //     console.log(real)
    // })
    // or

    let ans = await Promise.all(allresponse)
    ans.forEach((function(status){
        console.log(status)
    })   
    );
}


sendEmails(users)