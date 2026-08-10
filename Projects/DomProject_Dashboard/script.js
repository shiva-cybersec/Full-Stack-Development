function openFeatures() {
    // Select all dashboard cards
    let allElems = document.querySelectorAll(".elem")

    // Select all full pages
    let fullElemPage = document.querySelectorAll(".fullElem")

    // Select all Close buttons
    let fullElemPageBackBtn = document.querySelectorAll(".fullElem .back")


    // Open page when card is clicked
    allElems.forEach(function (elem) {
        elem.addEventListener("click", function () {
            fullElemPage[elem.id].style.display = "block"
        })
    })

    // Close page when Close button is clicked
    fullElemPageBackBtn.forEach(function (back) {
        back.addEventListener("click", function () {
            fullElemPage[back.id].style.display = "none"
        })
    })
}
openFeatures()

function todoList() {
    let currentTask = []

    // Get old tasks from localStorage
    if (localStorage.getItem("currentTask")) {
        currentTask = JSON.parse(
            localStorage.getItem("currentTask")
        )

    }
    else {
        console.log("Task list is empty")

    }


    // renderTask() does two things:
    // 1) Shows tasks on the screen
    // 2) Saves currentTask in localStorage

    function renderTask() {
        let allTask = document.querySelector(".allTask")
        let sum = ""
        currentTask.forEach(function (elem, idx) {

            sum += `
            <div class="task">
                <h5>
                    ${elem.task}
                    <span class=${elem.imp}>imp</span>
                </h5>

                <button id=${idx}> Mark as completed </button>
            </div>
        `

        })
        allTask.innerHTML = sum

        // Save currentTask in localStorage
        localStorage.setItem("currentTask", JSON.stringify(currentTask))


        // REMOVE / Complete task
        document.querySelectorAll(".task button").forEach(function (btn) {
            btn.addEventListener("click", function () {
                currentTask.splice(btn.id, 1)


                // Update screen
                // and update localStorage
                renderTask()

                location.reload()
            })
        })
    }
    renderTask()



    // *******************************************************************
    // 4) ADD NEW TASK
    // *******************************************************************

    let form = document.querySelector(".addTask form")
    let taskInput =
        document.querySelector(".addTask form #task-input")
    let taskDetailsInput =
        document.querySelector(".addTask form textarea")
    let taskCheckBox =
        document.querySelector(".addTask form #check")


    // When user clicks Add Task
    form.addEventListener("submit", function (e) {
        e.preventDefault()


        // Create a new task object
        // and add it to currentTask
        currentTask.push({

            task: taskInput.value,
            details: taskDetailsInput.value,
            imp: taskCheckBox.checked
        })

        // Show new task
        // and save it in localStorage
        renderTask()

        taskCheckBox.checked = false
        taskInput.value = ""
        taskDetailsInput.value = ""
    })
}
todoList()

function dailyPlanner() {
    let dayPlanData = JSON.parse(localStorage.getItem("dayPlanData")) || {}
    let dayPlanner = document.querySelector(".day-planner")

    let hours = Array.from({ length: 18 }, (_, idx) => `${6 + idx}:00 - ${7 + idx}:00`
    )
    let wholeDaySum = ""
    hours.forEach(function (elem, idx) {
        let savedData = dayPlanData[idx] || ""
        wholeDaySum += ` <div class="day-planner-timer">
                    <p>${elem}</p>
                    <input id=${idx} type="text" placeholder="..." value=${savedData}>
                </div>`
    })

    dayPlanner.innerHTML = wholeDaySum

    let dayPlannerInput = document.querySelectorAll(".day-planner input")

    dayPlannerInput.forEach(function (elem) {
        elem.addEventListener("input", function () {
            dayPlanData[elem.id] = elem.value

            localStorage.setItem("dayPlanData", JSON.stringify(dayPlanData))
        })
    })
}
dailyPlanner()


function motivationalQuote() {
    let motivationQuoteContent = document.querySelector(".motivation-2 h1")
    let motivationAuthor = document.querySelector(".motivation-3 h2")

    async function fetchQuote() {
        let response = await fetch('https://api.quotable.io/random')
        let data = await response.json()

        motivationQuoteContent.innerHTML = data.content
        motivationAuthor.innerHTML = "- " + data.author
    }
    fetchQuote()
}
motivationalQuote()


function pomodoroTimer() {

    let timer = document.querySelector(".pomo-timer h1")
    let startBtn = document.querySelector(".pomo-timer .start-timer")
    let pauseBtn = document.querySelector(".pomo-timer .pause-timer")
    let resetBtn = document.querySelector(".pomo-timer .reset-timer")
    let session = document.querySelector(".pomodoro-fullpage .session")
    let isWorkSession = true

    let timerInterval = null
    let totalSeconds = 25 * 60;

    function updateTimer() {
        let minutes = Math.floor(totalSeconds / 60)
        let seconds = totalSeconds % 60

        timer.innerHTML = `${String(minutes).padStart("2", 0)}:${String(seconds).padStart("2", 0)}`
    }

    function startTimer() {
        clearInterval(timerInterval)

        if (isWorkSession) {
            timerInterval = setInterval(function () {
                if (totalSeconds > 0) {
                    totalSeconds--
                    updateTimer()

                } else {
                    isWorkSession = false
                    clearInterval(timerInterval)
                    timer.innerHTML = "05:00"
                    session.innerHTML = 'Take a Break'
                    session.style.backgroundColor = 'var(--blue)'
                    totalSeconds = 5 * 60

                }
            }, 1000)
        }
        else {
            timerInterval = setInterval(function () {
                if (totalSeconds > 0) {
                    totalSeconds--
                    updateTimer()
                } else {
                    isWorkSession = true
                    clearInterval(timerInterval)
                    timer.innerHTML = "25:00"
                    session.innerHTML = 'Work Session'
                    session.style.backgroundColor = 'var(--green)'
                    totalSeconds = 25 * 60

                }
            }, 1000)
        }

    }


    function pauseTimer() {
        clearInterval(timerInterval)
    }

    function resetTimer() {
        clearInterval(timerInterval)
        totalSeconds = 25 * 60
        updateTimer()

    }

    startBtn.addEventListener("click", startTimer)
    pauseBtn.addEventListener("click", pauseTimer)
    resetBtn.addEventListener("click", resetTimer)
}
pomodoroTimer()

function weatherFunctionality(){
    
let header1Time = document.querySelector(".header1 h1")
let header1Date = document.querySelector(".header1 h2")
let header2Temp = document.querySelector(".header2 h2")
let header2Condition = document.querySelector(".header2 h4")
let precipitation = document.querySelector(".header2 .precipitation")
let humidity = document.querySelector(".header2 .humidity")
let wind = document.querySelector(".header2 .wind")



let data = null

async function weatherAPICall(city) {
    let apikey = '177cca8b5ce84c779e0122226261008'
    let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}`)
    data = await response.json()

    header2Temp.innerHTML = `${data.current.temp_c}°C`
    header2Condition.innerHTML = `${data.current.condition.text}`
    precipitation.innerHTML = `Head Index: ${data.current.headindex_c}%`
    humidity.innerHTML = `Humidity: ${data.current.humidity}%`
    wind.innerHTML =  `Wind: ${data.current.wind_kph} km/h`
}
weatherAPICall()

function timeDate() {
    let totalDaysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    let date = new Date()
    let dayOfWeek = totalDaysOfWeek[date.getDay()]
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let dateNum = date.getDate()
    let month = monthNames[date.getMonth()]
    let year = date.getFullYear()

    header1Date.innerHTML = `${dateNum} ${month}, ${year}`

    if (hours > 12) {
        header1Time.innerHTML = `${dayOfWeek}, ${String(hours - 12).padStart("2", 0)}:${String(minutes).padStart("2", 0)}:${String(seconds).padStart("2", 0)} PM`
    }
    else {
        header1Time.innerHTML = `${dayOfWeek}, ${String(hours).padStart("2", 0)}:${String(minutes).padStart("2", 0)}:${String(seconds).padStart("2", 0)} AM`
    }

}

setInterval(() => {
    timeDate()
}, 1000)
}
weatherFunctionality()

function changeTheme(){
    
let theme = document.querySelector(".theme")
let rootElement = document.documentElement
   let flag = 0

theme.addEventListener("click",function(){
    if(flag === 0){
    rootElement.style.setProperty("--pri","#40e0d0")
    rootElement.style.setProperty("--sec","#069494")
    rootElement.style.setProperty("--tri1","#7fffd4")
    rootElement.style.setProperty("--tri2","#00ffff")
    flag = 1
    }
    else if(flag === 1){
    rootElement.style.setProperty("--pri","#12172f")
    rootElement.style.setProperty("--sec","#eae4e0")
    rootElement.style.setProperty("--tri1","#f8a90f")
    rootElement.style.setProperty("--tri2","#57a6c9")
    flag = 2
    }
    else if(flag ===2){
    rootElement.style.setProperty("--pri","#FFA400")
    rootElement.style.setProperty("--sec","#009FFD")
    rootElement.style.setProperty("--tri1","#2A2A72")
    rootElement.style.setProperty("--tri2","#232528")
    flag = 0
    }
    
})

}
changeTheme()

// =========================================================
// DAILY GOALS
// =========================================================

function dailyGoals() {

    let goalForm = document.querySelector("#goal-form")
    let goalInput = document.querySelector("#goal-input")
    let goalTarget = document.querySelector("#goal-target")

    let goalList = document.querySelector(".goal-list")

    let overallProgressFill =
        document.querySelector(".overall-progress-fill")

    let overallProgressText =
        document.querySelector(".overall-progress-text")


    // -----------------------------------------------------
    // GET SAVED GOALS
    // -----------------------------------------------------

    let goals = JSON.parse(localStorage.getItem("dailyGoals")) || []


    // -----------------------------------------------------
    // RENDER GOALS
    // -----------------------------------------------------

    function renderGoals() {

        goalList.innerHTML = ""


        // No goals

        if (goals.length === 0) {

            goalList.innerHTML = `
                <div class="no-goals">
                    No goals added yet.
                </div>
            `

            updateOverallProgress()

            return
        }


        // Create every goal

        goals.forEach(function (goal, index) {

            let percentage =
                Math.min(
                    Math.round((goal.progress / goal.target) * 100),
                    100
                )


            goalList.innerHTML += `

                <div class="goal-card ${goal.completed ? "completed" : ""}">

                    <div class="goal-top">

                        <h3>
                            ${goal.name}
                        </h3>

                        <button
                            class="delete-goal"
                            data-id="${index}">
                            Delete
                        </button>

                    </div>


                    <div class="goal-count">

                        <h4>
                            ${goal.progress} / ${goal.target}
                        </h4>

                        <span>
                            ${percentage}%
                        </span>

                    </div>


                    <div class="goal-progress-bar">

                        <div
                            class="goal-progress-fill"
                            style="width: ${percentage}%">
                        </div>

                    </div>


                    <div class="goal-buttons">

                        <button
                            class="decrease-goal"
                            data-id="${index}">
                            −
                        </button>

                        <button
                            class="increase-goal"
                            data-id="${index}">
                            +
                        </button>

                        <button
                            class="complete-goal"
                            data-id="${index}">
                            ${goal.completed ? "Undo" : "Complete"}
                        </button>

                    </div>

                </div>

            `
        })


        addGoalButtonEvents()

        updateOverallProgress()

    }


    // -----------------------------------------------------
    // SAVE GOALS
    // -----------------------------------------------------

    function saveGoals() {

        localStorage.setItem(
            "dailyGoals",
            JSON.stringify(goals)
        )

    }


    // -----------------------------------------------------
    // ADD NEW GOAL
    // -----------------------------------------------------

    goalForm.addEventListener("submit", function (e) {

        e.preventDefault()


        let goalName = goalInput.value.trim()
        let target = Number(goalTarget.value)


        if (goalName === "" || target <= 0) {
            return
        }


        goals.push({

            name: goalName,

            target: target,

            progress: 0,

            completed: false

        })


        saveGoals()

        renderGoals()


        goalInput.value = ""
        goalTarget.value = ""

    })


    // -----------------------------------------------------
    // BUTTON EVENTS
    // -----------------------------------------------------

    function addGoalButtonEvents() {


        // INCREASE

        document
            .querySelectorAll(".increase-goal")
            .forEach(function (button) {

                button.addEventListener("click", function () {

                    let index = Number(button.dataset.id)

                    if (goals[index].progress < goals[index].target) {

                        goals[index].progress++

                    }


                    if (
                        goals[index].progress >=
                        goals[index].target
                    ) {

                        goals[index].progress =
                            goals[index].target

                        goals[index].completed = true

                    }


                    saveGoals()

                    renderGoals()

                })

            })


        // DECREASE

        document
            .querySelectorAll(".decrease-goal")
            .forEach(function (button) {

                button.addEventListener("click", function () {

                    let index = Number(button.dataset.id)


                    if (goals[index].progress > 0) {

                        goals[index].progress--

                    }


                    if (
                        goals[index].progress <
                        goals[index].target
                    ) {

                        goals[index].completed = false

                    }


                    saveGoals()

                    renderGoals()

                })

            })


        // COMPLETE / UNDO

        document
            .querySelectorAll(".complete-goal")
            .forEach(function (button) {

                button.addEventListener("click", function () {

                    let index = Number(button.dataset.id)


                    goals[index].completed =
                        !goals[index].completed


                    if (goals[index].completed) {

                        goals[index].progress =
                            goals[index].target

                    }
                    else {

                        goals[index].progress = 0

                    }


                    saveGoals()

                    renderGoals()

                })

            })


        // DELETE

        document
            .querySelectorAll(".delete-goal")
            .forEach(function (button) {

                button.addEventListener("click", function () {

                    let index = Number(button.dataset.id)


                    goals.splice(index, 1)


                    saveGoals()

                    renderGoals()

                })

            })

    }


    // -----------------------------------------------------
    // OVERALL PROGRESS
    // -----------------------------------------------------

    function updateOverallProgress() {

        if (goals.length === 0) {

            overallProgressFill.style.width = "0%"
            overallProgressText.innerHTML = "0%"

            return

        }


        let totalProgress = 0
        let totalTarget = 0


        goals.forEach(function (goal) {

            totalProgress += goal.progress
            totalTarget += goal.target

        })


        let overallPercentage =
            Math.round(
                (totalProgress / totalTarget) * 100
            )


        overallPercentage =
            Math.min(overallPercentage, 100)


        overallProgressFill.style.width =
            `${overallPercentage}%`

        overallProgressText.innerHTML =
            `${overallPercentage}%`

    }


    // -----------------------------------------------------
    // FIRST RENDER
    // -----------------------------------------------------

    renderGoals()

}

dailyGoals()