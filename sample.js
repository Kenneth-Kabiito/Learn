//this would be the object shape for storing the questions  
 //you can change the questions to your own taste or even add more questions..
const questions = [
    {
        question: "A light year is a measurement of?",
        optionA: "speed",
        optionB: "velocity",
        optionC: "Time",
        optionD: "Distance",
        correctOption: "optionD"
    },

    {
        question: "If a soccer player is given a yellow card, he/she...",
        optionA: "remains in the game, but doesn't play the next match",
        optionB: "leaves the game and doesn't play the next match",
        optionC: "leaves the game but plays  the next match",
        optionD: "remains in the game and plays the next match",
        correctOption: "optionA"
    },

    {
        question: "Who was the first President of Uganda ?",
        optionA: "Katumba Oyee",
        optionB: "Kizza Besigye",
        optionC: "Sir Edward Muteesa II",
        optionD: "Yoweri Tibuhaburya Museveni",
        correctOption: "optionC"
    },

    {
        question: "If February 2020 has 29 days, the next leap year will be ?",
        optionA: "2022",
        optionB: "2024",
        optionC: "2025",
        optionD: "2023",
        correctOption: "optionB"
    },

    {
        question: "How many hours are in one week?",
        optionA: "160 hours",
        optionB: "158 hours",
        optionC: "168 hours",
        optionD: "80 hours",
        correctOption: "optionC"
    },

    {
        question: "Which is the longest river in the world ?",
        optionA: "River Nile",
        optionB: "Long River",
        optionC: "River Niger",
        optionD: "Lake Chad",
        correctOption: "optionA"
    },
     
     {
        question: "What is the largest fresh water lake in the world?",
        optionA: "Lake Chad",
        optionB: "Lake Victoria",
        optionC: "Lake Kyoga",
        optionD: "Caspian Sea",
        correctOption: "optionD"
     },

     {
        question: "What is the most populous country in the entire world?",
        optionA: "India",
        optionB: "USA",
        optionC: "Russia",
        optionD: "China",
        correctOption: "optionD"
     },

     {
        question: "How long does light take to reach the Earth from the Sun?",
        optionA: "8 minutes",
        optionB: "1 hour",
        optionC: "30 minutes",
        optionD: "5 hours",
        correctOption: "optionA"
     },

     {
        question: "Which country has the largest economy and military in the whole world?",
        optionA: "China",
        optionB: "Russia",
        optionC: "United Kingdom",
        optionD: "United Stated of America",
        correctOption: "optionD"
     },

     {
        question: "What is the most powerful currency in weight/value terms in the whole world?",
        optionA: "the USA dollar",
        optionB: "the British pound sterling",
        optionC: "Kuwaiti Dinar",
        optionD: "the Euro",
        correctOption: "optionC"
     },

    {
        question: "_____ is the coldest Continent on Earth ?",
        optionA: "Oceania",
        optionB: "Antarctica",
        optionC: "Africa",
        optionD: "North America",
        correctOption: "optionB"
    },

    {
        question: "Which country is the largest in the world ?",
        optionA: "Russia",
        optionB: "Canada",
        optionC: "Africa",
        optionD: "Egypt",
        correctOption: "optionA"
    },

    {
        question: "Which of these numbers is an prime number ?",
        optionA: "Ten",
        optionB: "Twelve",
        optionC: "Eight",
        optionD: "Two",
        correctOption: "optionD"
    },

    {
        question: `"You Can't see me" is a popular saying by`,
        optionA: "Eminem",
        optionB: "Bill Gates",
        optionC: "Chris Brown",
        optionD: "John Cena",
        correctOption: "optionD"
    },

    {
        question: "When (which year) was Barack Obama first elected as President of USA?",
        optionA: "2016",
        optionB: "2008",
        optionC: "2009",
        optionD: "2019",
        correctOption: "optionB"
    },

    {
        question: "The longest river in the United Kingdom is ?",
        optionA: "River Severn",
        optionB: "River Mersey",
        optionC: "River Trent",
        optionD: "River Tweed",
        correctOption: "optionA"
    },


    {
        question: "How many permanent teeth does a dog have ?",
        optionA: "38",
        optionB: "42",
        optionC: "40",
        optionD: "36",
        correctOption: "optionB"
    },

    {
        question: "Which national team won the football World cup in 2014 ?",
        optionA: "England",
        optionB: "Brazil",
        optionC: "Germany",
        optionD: "France",
        correctOption: "optionC"
    },

     {
        question: "Which year did the first American land on the moon?",
        optionA: "1945",
        optionB: "1969",
        optionC: "1966",
        optionD: "1972",
        correctOption: "optionB"
     },

    {
        question: "Which US state was Donald Trump Born ?",
        optionA: "New York",
        optionB: "California",
        optionC: "New Jersey",
        optionD: "Los Angeles",
        correctOption: "optionA"
    },

    {
        question: "How man states does Nigeria have ?",
        optionA: "24",
        optionB: "30",
        optionC: "36",
        optionD: "37",
        correctOption: "optionC"
    },

    {
        question: "____ is the capital of Tanzania ?",
        optionA: "Dodoma",
        optionB: "Dar-es-salaam",
        optionC: "Zanzibar",
        optionD: "Kisumu",
        correctOption: "optionA"
    },

    {
        question: "Los Angeles is also known as ?",
        optionA: "Angels City",
        optionB: "Shining city",
        optionC: "City of Angels",
        optionD: "Lost Angels",
        correctOption: "optionC"
    },

    {
        question: "What is the capital of China?",
        optionA: "Hanoi",
        optionB: "Shanghai",
        optionC: "Guangzhou",
        optionD: "Beijing",
        correctOption: "optionD"
    },

    {
        question: "How many sides does an Septagon have ?",
        optionA: "Six",
        optionB: "Seven",
        optionC: "Four",
        optionD: "Five",
        correctOption: "optionB"
    },

    {
        question: "How many planets are currently in the solar system ?",
        optionA: "Eleven",
        optionB: "Seven",
        optionC: "Nine",
        optionD: "Eight",
        correctOption: "optionD"
    },

    {
        question: "Which Planet is the hottest ?",
        optionA: "Jupitar",
        optionB: "Mercury",
        optionC: "Earth",
        optionD: "Venus",
        correctOption: "optionB"
    },

    {
        question: "where is the smallest bone in human body located?",
        optionA: "Toes",
        optionB: "Ears",
        optionC: "Fingers",
        optionD: "Nose",
        correctOption: "optionB"
    },

    {
        question: "Which of these crops takes the shortest time to mature?",
        optionA: "Sugarcane",
        optionB: "Pineapple",
        optionC: "bean",
        optionD: "Banana/Matooke",
        correctOption: "optionC"
    },

    {
        question: "How many hearts does an Octopus have ?",
        optionA: "One",
        optionB: "Two",
        optionC: "Three",
        optionD: "Four",
        correctOption: "optionC"
    },

    {
        question: "How many teeth does an adult human have ?",
        optionA: "28",
        optionB: "30",
        optionC: "32",
        optionD: "36",
        correctOption: "optionC"
    }

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 29) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 3)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 3)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 29) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 3);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 14) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 15 && playerScore < 25) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 25) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 30) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}
