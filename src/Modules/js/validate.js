let allCorrect = false; // We assume they are wrong unless proven otherwise

function updateValue(element){
    document.getElementById(element.id).value = element.value;
}

function extractResponse() {
    const numQuestions = document.getElementsByClassName("prompt").length; // We assume that all question labels are given the class "prompt"
    let answers = {}
    let questionRes = [];                                                   // Store all response per question in this var
    let ascii_letter = 97;                                                  // We assume all responses use the format Q[0..n][a...z]
    let query = "";                                                         // Use to store queries
    let queryRes = null;                                                    // We assume it is null unless proven otherwise
   
    // Outer loop retrieves all questions
    if(numQuestions != null) {
        for(let i=1; i<=numQuestions; i++){
            query = "Q" + i + String.fromCharCode(ascii_letter);
            queryRes = document.getElementById(query);

            //Inner loop retrieve all responses and appends them to an array
            while(queryRes != null){
                // Debug
                if(queryRes)
                    console.log("Query: " + query + "\n" + queryRes.value);

                // Append to answer
                if(queryRes.checked || queryRes.type === "text" || queryRes.type === "select-one")
                    questionRes.push(queryRes.value);
                
                // Get next part
                ascii_letter++;
                query = "Q" + i + String.fromCharCode(ascii_letter);
                queryRes = document.getElementById(query);                
            }
            answers[i] = questionRes;   // Store all answers for Qn
            
            // Reset for Qn+1
            questionRes = [];
            ascii_letter = 97;
        }
    }

    return answers;  
}

/* THIS NEEDS TO BE CHANGED ONCE WE GET THE SQLite3 DB SET UP */
function getAnswers(idName) {
    // try {
    //     const requestOptions = {
    //         method: "GET",
    //         mode: "no-cors",
    //         headers: { "Content-Type": "application/json" }
    //     };
    //     await fetch('http://127.0.0.1:5500/src/Modules/answers/module1.json', requestOptions);
    // } catch (error) {
    //     console.log(error);
    // } 
    const answers = {
        "Q1" :  "21",
        "Q2" : "Network scanning",
        "Q3" : ["NMAP can perform host discovery", "NMAP can be used to identify services on a network"],
        "Q4" : "FTP"
    }

    return answers;
}

function checkAnswers(element) {
    const userAnswers = Object.values(extractResponse()); // extractResponse returns and object; we just want the values
    const correctAnswers = getAnswers(element.id);        // EVENTUALLY THIS WE WILL BE RETURNED FROM A DATABASE; FOR NOW IT IS AN OBJECT
    const resultMessage = document.getElementById("resultMessage");
    let query = '';
    
    let temp = Object.values(correctAnswers);

    for(let i=1; i <= Object.values(correctAnswers).length; i++) {
        if(temp[i] == userAnswers[i])
            allCorrect = true;
        else 
            allCorrect = false;
    }

    if (allCorrect) {
        resultMessage.innerText = "Congratulations, all answers are correct! You can move on to the next module.";
        resultMessage.classList.remove("incorrect"); // Remove the incorrect class
        resultMessage.classList.add("correct"); // Add the correct class
        launchConfetti(); // Launch confetti
    } else {
        resultMessage.innerText = "Some answers are incorrect. Please review your answers and try again.";
        resultMessage.classList.remove("correct"); // Remove the correct class
        resultMessage.classList.add("incorrect"); // Add the incorrect class
    }
    resultMessage.style.display = "block";
}

// Function to check if two arrays have the same elements (disregarding order)
function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    const sortedArr1 = arr1.sort();
    const sortedArr2 = arr2.sort();
    return sortedArr1.every((element, index) => element === sortedArr2[index]);
}

// Confetti settings and function
var duration = 15 * 1000;
var animationEnd = Date.now() + duration;
var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function launchConfetti() {
    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    var interval = setInterval( function() {
    var timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
        return clearInterval(interval);
    }

    var particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
    confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
}
