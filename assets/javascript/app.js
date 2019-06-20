$(document).ready(function () {
// This will set the timer number to 30
    var number = 30;
// This will store the interval ID
    var intervalId; 
// This will start the timer when the button with the start-timer id is clicked and it will 
// begin a for loop to run through quizQuestions
    $("#start-timer").on("click", function(){
        start();
        for(i=0; i< quizQuestions.length; i++){
            $("#questions").html(question[i]+ "<br>");
        };
    }); 
// This function will store the execution to start the clock to run by seconds
    function start() {
        clearInterval(intervalId);
        intervalId = setInterval(decrease, 1000);
        
    }

    console.log(start);

//This function, when executed, will cause the clock to run backwards from 
// the set number and add text to the HTML when the clock reaches 0 
// it will also run the stop function so that timer does not keep running
    function decrease(){
        number --;
        
        $("#timer-text").html(":" + number);
        
        if(number === 0){
            stop();
            
            $("<h2>'You're Out of Time!</h2>")

        }
        
    }

// This function stops the timer by clearing the interval ID
    function stop (){
        clearInterval(intervalId);
    }
// This plugs the number into the div id #start-timer
    

// This is the object containing an array of multiple objects that the for loop will loop through
    var quizQuestions = {

        questions: [{
            question: "In what month is Harry Potter's birthday?",
            answer: "July",
            choices: ["December", "August", "July", "March"],
        },
        {
            question: "What is the name of the ghost in the bathroom at Hogwarts?",
            answer: "Moaning Myrtle",
            choices: ["Helena Ravenclaw", "The Grey Lady", "Moaning Myrtle", "Peeves"],
        },
        {
            question: "What three things make up the Deathly Hollows?",
            answer: "Elder Wand, Resurrection Stone, Invisibility Cloak",
            choices: ["Invisibility Cloak, Sorcerers Stone, Dragon's blood", "Resurrection Stone, Tom Riddle's Diary, The Pheonix", "Elder Wand, The Sorting Hat, Invisibility Cloak", "Elder Wand, Resurrection Stone, Invisibility Cloak"],
        },
        {
            question: "Who died during the Triwizard Tournament?",
            answer: "Cedric Diggory",
            choices: ["Lord Voldemort", "Cedric Diggory", "Fleur Delacour", "Harry Potter"],
        },
        {
            question: "What does the charm wingardium leviosa do?",
            answer: "Levitation",
            choices: ["Levitation", "Obliviate", "Turn on the lights", "Unlock doors"],
        },
        {
            question:"What was Ron Wheezly's fear?",
            answer: "Spiders",
            choices:["Spiders","Clowns", "Snakes","Heights"],
        },
        {
            question:"What is the name of the snake language? ",
            answer: "Parselmouth",
            choices:["Parselmouth","Parseltongue", "Slithertongue","Slithermouth"],
        },
    
    

        ]





    }

    
})

