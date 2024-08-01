let userScore = 0;
let userWicket = 0;
let compScore = 0;
let userTotalScore = 0;
let userMiniScore;
let compMiniScore;

let tossStatement;
let displayTossWinner;
let displayTossWinnerChoice;
let tossDisplayer;
let userName;
let compFullName;

let hatTrick = 0;
// let userNameFull = prompt("Enter your name: ")
// let userUpper = userNameFull.toUpperCase()
// let userTrim = userUpper.substring(0,15)
// let userName = userTrim.trimStart()
// console.log(userName)


// if(userName =="COMP"){
    // let userName = "YOU"
    // document.getElementById("user-name").textContent = userName;
    // }
    let firstTarget = 0;
    const score = document.querySelectorAll(".scoreOptions");
    
    const funWicket = document.querySelectorAll('.wicketbuttons')
let totalWickets;

const selectTeam = document.querySelectorAll(".teams")

selectTeam.forEach((teams) => {
    teams.addEventListener('click', () => {
        userName = event.target.textContent
        // userName = teams.getAttribute("id")
        console.log("Your team : ",userName)
        document.getElementById("selectteam").style.display = "none"
        document.getElementById("tossBlock").style.display = "flex"
        document.getElementById("user-name").textContent = userName;
        genCompName(userName)
    })
})
var element;
const genCompName = (userName) => {
    let compName = ["AUSTRALIA" , "ENGLAND" , "NEW ZEALAND" , "SOUTH AFRICA" , "SRI LANKA" , "INDIA" , "PAKISTAN" , "USA" , "BANGLADESH" , "WEST INDIES" , "AFGHANISTAN"]
    var randNameChoose = Math.floor(Math.random()*11)
    compFullName = compName[randNameChoose]
    console.log("Comp team : ",compFullName)
    document.getElementById("comp-name").textContent = compFullName;
    if(userName == compFullName){
        again()
    }
}

function again(){
    genCompName()
}
const userScoring = (userChoice) => {
    // tossStatement = displayTossWinner + "won the toss and chose to" + displayTossWinnerChoice;
    // document.getElementById('tosswinner').textContent = tossStatement
    if(userChoice == "one"){
        userScore = 1;
    }
    else if(userChoice == "two"){
        userScore = 2;
    }
    else if(userChoice == "three"){
        userScore = 3;
    }
    else if(userChoice == "four"){
        userScore = 4;
    }
    else if(userChoice == "six"){
        userScore = 6;
    }
    userTotalScore += userScore;
    firstTarget = 1 + userTotalScore;

    userMiniScore = "+" + userScore;
    var element = document.getElementById("userMini")
    element.classList.add("user-mini-score-show")
    
    document.getElementById("userMini").style.color = "rgb(37,184,37)"
    document.getElementById("userMini").textContent = userMiniScore;
    setTimeout(function elementShow(){
         element = document.getElementById("userMini")
        element.classList.remove("user-mini-score-show")
    },850)
    hatTrick = 0;
    document.getElementById("hat-trick").style.display = "none"
    document.getElementById("on-hat-trick").style.display = "none"
    document.getElementById("hattrick").style.display = "none"

    document.getElementById("user-score").textContent = userTotalScore;
    document.getElementById("target-score").textContent = firstTarget;
    console.log(userTotalScore)
    return element
}



const userWicketSetup = () => {
    userWicket++;
    document.getElementById("user-wicket").textContent = userWicket;

    var element = document.getElementById("userMini")
    element.classList.add("user-mini-score-show")

    userMiniScore = "W"
    document.getElementById("userMini").style.color = "red"
    document.getElementById("userMini").textContent = userMiniScore;
    setTimeout(function elementShow(){
        element = document.getElementById("userMini")
       element.classList.remove("user-mini-score-show")
   },850)

   if(userWicket == totalWickets){
       document.getElementById("user-slash").style.display = "none"
       document.getElementById("user-wicket").style.display = "none"
       document.getElementById("optionShow").style.display = "none"
       document.getElementById("innings-over").style.display = "block"
       document.getElementById("target-block").style.display = 'flex'
    }
    hatTrick++;

    if(hatTrick == 2){
        document.getElementById("hat-trick").style.display = "flex"
        document.getElementById("on-hat-trick").style.display = "block"
    }
    else if(hatTrick == 3){
        document.getElementById("on-hat-trick").style.display = "none"
        document.getElementById("hattrick").style.display = "block"
    }
    else{
        document.getElementById("hat-trick").style.display = "none"
        document.getElementById("on-hat-trick").style.display = "none"
        document.getElementById("hattrick").style.display = "none"
    }
}

const userScoringSecond =(userChoice) => {
    if(userChoice == "one"){
        userScore = 1;
    }
    else if(userChoice == "two"){
        userScore = 2;
    }
    else if(userChoice == "three"){
        userScore = 3;
    }
    else if(userChoice == "four"){
        userScore = 4;
    }
    else if(userChoice == "six"){
        userScore = 6;
    }
    userTotalScore += userScore;
    
    userMiniScore = "+" + userScore;
    var element = document.getElementById("userMini")
    element.classList.add("user-mini-score-show")

    document.getElementById("userMini").style.color = "rgb(37,184,37)"
    document.getElementById("userMini").textContent = userMiniScore;
    setTimeout(function elementShow(){
        element = document.getElementById("userMini")
       element.classList.remove("user-mini-score-show")
   },850)

        hatTrick = 0;
    document.getElementById("hat-trick").style.display = "none"
    document.getElementById("on-hat-trick").style.display = "none"
    document.getElementById("hattrick").style.display = "none"
    
    document.getElementById("user-score").textContent = userTotalScore;
    document.getElementById("requiredruns").textContent =  userName +" "+" need " +((compTotalScore - userTotalScore) +1 ) +" " + "runs to win"

    if(userTotalScore >=  firstTarget){
        document.getElementById("requiredruns").style.display = "none"
                document.getElementById("optionShow").style.display = "none"
                document.getElementById("matchResult").style.display = "block"
                if((totalWickets-userWicket) ==1){
                    matchResult = userName + " " +" WON BY " + (totalWickets-userWicket) + " Wicket"
                }
                else {
                matchResult =  userName + " " +" WON BY " + (totalWickets-userWicket) + " Wickets"
                }
                document.getElementById("matchResult").textContent = matchResult;
            }
            else if(userTotalScore == (firstTarget - 1)){
                matchResult = "MATCH DRAWN"
                document.getElementById("matchResult").textContent = matchResult;
            }
            console.log(userTotalScore)
}

const userWicketSetupSecond =() => {
    userWicket++;
    document.getElementById("user-wicket").textContent = userWicket;

    var element = document.getElementById("userMini")
    element.classList.add("user-mini-score-show")

    userMiniScore = "W";
    document.getElementById("userMini").style.color = "red"
    document.getElementById("userMini").textContent = userMiniScore;
    setTimeout(function elementShow(){
        element = document.getElementById("userMini")
       element.classList.remove("user-mini-score-show")
   },850)


    if(userWicket == totalWickets){
        if((compTotalScore - userTotalScore) == 1){
            matchResult = compFullName + " "+ " WON BY " + (compTotalScore - userTotalScore) + " Run";
        }
        else {
            matchResult = compFullName + " "+ "WON BY " + (compTotalScore - userTotalScore) + " Runs";
        }
        document.getElementById("matchResult").textContent = matchResult;
        document.getElementById("user-slash").style.display = "none"
        document.getElementById("user-wicket").style.display = "none"
        document.getElementById("optionShow").style.display = "none"
        document.getElementById("matchResult").style.display = "block"
    }

    hatTrick++;

    if(hatTrick == 2){
        document.getElementById("hat-trick").style.display = "flex"
        document.getElementById("on-hat-trick").style.display = "block"
    }
    else if(hatTrick == 3){
        document.getElementById("on-hat-trick").style.display = "none"
        document.getElementById("hattrick").style.display = "block"
    }
    else{
        document.getElementById("hat-trick").style.display = "none"
        document.getElementById("on-hat-trick").style.display = "none"
        document.getElementById("hattrick").style.display = "none"
    }
}


const playGame = (userChoice) => {
    // tossStatement = displayTossWinner+" " + "won the toss and chose to" +" "+ displayTossWinnerChoice;
    // document.getElementById('tosswinner').textContent = tossStatement
    console.log("user choice is : ", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice is : ", compChoice);
    if(userChoice !== compChoice){
        if(compTotalScore !== 0){
            userScoringSecond(userChoice)
        }
        else{
        userScoring(userChoice);
        }
    }

    if(userChoice == compChoice){
        if(compTotalScore !==0){
            userWicketSetupSecond();
        }
        else{
        userWicketSetup();
        }
    }
    
}

const genCompChoice = () => {
    const options = ["one" , "two" , "three" , "four" , "six"]
    var randNum = Math.floor(Math.random()*5)
 return options[randNum] 
}

score.forEach((scoreOptions) => {
    scoreOptions.addEventListener("click", () => {
        const userChoice = scoreOptions.getAttribute("id")
        playGame(userChoice)
    })
})
/**************************************************/
/**************************************************/
/**************************************************/
/**************************************************/
/**************************************************/

let inningShow = document.getElementById("innings-over")
inningShow.addEventListener('click', () => {
    document.getElementById("comp-score-content").style.display = 'block';
    document.getElementById("optionShowCpu").style.display = 'flex';
    document.getElementById("innings-over").style.display = 'none';
    document.getElementById("comp-yet").style.display = 'none';
    document.getElementById("userMini").textContent =''

            document.getElementById("requiredruns").style.display = "block"

            hatTrick = 0;
            document.getElementById("hat-trick").style.display = "none"
            document.getElementById("on-hat-trick").style.display = "none"
            document.getElementById("hattrick").style.display = "none"
        })
        
        let inningShowUser = document.getElementById("innings-show")
        inningShowUser.addEventListener('click', () => {
            document.getElementById("user-score-content").style.display = 'block';
            document.getElementById("optionShow").style.display = 'flex';
            document.getElementById("optionShowCpu").style.display = 'none';
            document.getElementById("innings-show").style.display = 'none';
            document.getElementById("user-yet").style.display = 'none';
            document.getElementById("compMini").textContent = '';

            document.getElementById("requiredruns").style.display = "block"

            hatTrick = 0;
            document.getElementById("hat-trick").style.display = "none"
            document.getElementById("on-hat-trick").style.display = "none"
            document.getElementById("hattrick").style.display = "none"
})


let userChoiceCpu;
let compChoiceCpu;
let compScoreCpu = 0;
let compTotalScore = 0;
let compWicket = 0;
let matchResult;
let scoreCpu = document.querySelectorAll(".scoreOptionsCpu")


const compScoring = (compChoiceCpu) => {
    if(compChoiceCpu == "one"){
        compScoreCpu = 1;
    }
    else if(compChoiceCpu == "two"){
        compScoreCpu = 2;
    }
    else if(compChoiceCpu == "three"){
        compScoreCpu = 3;
    }
    else if(compChoiceCpu == "four"){
        compScoreCpu = 4;
    }
    else if(compChoiceCpu == "six"){
        compScoreCpu = 6;
    }
    compTotalScore += compScoreCpu;
    
    document.getElementById("comp-score").textContent = compTotalScore;
    compMiniScore = "+" + compScoreCpu;

    var element = document.getElementById('compMini')
    element.classList.add("comp-mini-score-show")

    document.getElementById("compMini").style.color = "rgb(37,184,37)"
    document.getElementById("compMini").textContent = compMiniScore;
    setTimeout(function elementShow(){
        element = document.getElementById("compMini")
       element.classList.remove("comp-mini-score-show")
   },850)

   hatTrick = 0;
   document.getElementById("hat-trick").style.display = "none"
   document.getElementById("on-hat-trick").style.display = "none"
   document.getElementById("hattrick").style.display = "none"


    document.getElementById("requiredruns").textContent = compFullName + " " + " need " +((userTotalScore - compTotalScore) +1 ) +" " + "runs to win"


    if(compTotalScore >= firstTarget){
                document.getElementById("requiredruns").style.display = "none"
                document.getElementById("optionShowCpu").style.display = "none"
                document.getElementById("matchResult").style.display = "block"
                if((totalWickets-compWicket) ==1){
                    matchResult = compFullName + " " + "WON BY " + (totalWickets-compWicket) + " Wicket"
                }
                else {
                matchResult = compFullName + " " + "WON BY " + (totalWickets-compWicket) + " Wickets"
                }
                document.getElementById("matchResult").textContent = matchResult;
            }
            else if(compTotalScore == (firstTarget - 1)){
                matchResult = "MATCH DRAWN"
                document.getElementById("matchResult").textContent = matchResult;
            }
            console.log(compTotalScore)
        }

const compWicketSetup = () => {
    compWicket++;
    document.getElementById("comp-wicket").textContent = compWicket;

    var element = document.getElementById("compMini")
    element.classList.add("comp-mini-score-show")

    compMiniScore = "W"
    document.getElementById("compMini").style.color = "red"
    document.getElementById("compMini").textContent = compMiniScore;
    setTimeout(function elementShow(){
        element = document.getElementById("compMini")
       element.classList.remove("comp-mini-score-show")
   },850)

    if(compWicket == totalWickets){
        if((userTotalScore - compTotalScore) == 1){
            matchResult =  userName + " " +" WON BY " + (userTotalScore - compTotalScore) + " Run";
        }
        else {
            matchResult =  userName + " " +" WON BY " + (userTotalScore - compTotalScore) + " Runs";
        }
        
        document.getElementById("matchResult").textContent = matchResult;
        document.getElementById("comp-slash").style.display = "none"
        document.getElementById("comp-wicket").style.display = "none"
        document.getElementById("optionShowCpu").style.display = "none"
        document.getElementById("matchResult").style.display = "block"
    }
    
    hatTrick++;

    if(hatTrick == 2){
        document.getElementById("hat-trick").style.display = "flex"
        document.getElementById("on-hat-trick").style.display = "block"
    }
    else if(hatTrick == 3){
        document.getElementById("on-hat-trick").style.display = "none"
        document.getElementById("hattrick").style.display = "block"
    }
    else{
        document.getElementById("hat-trick").style.display = "none"
        document.getElementById("on-hat-trick").style.display = "none"
        document.getElementById("hattrick").style.display = "none"
    }
}

const compScoringFirst =(compChoiceCpu) => {
    // tossStatement = displayTossWinner + "won the toss and chose to" + displayTossWinnerChoice;
    // document.getElementById('tosswinner').textContent = tossStatement
    if(compChoiceCpu == "one"){
        compScore = 1;
    }
    else if(compChoiceCpu == "two"){
        compScore = 2;
    }
    else if(compChoiceCpu == "three"){
        compScore = 3;
    }
    else if(compChoiceCpu == "four"){
        compScore = 4;
    }
    else if(compChoiceCpu == "six"){
        compScore = 6;
    }
    compTotalScore += compScore;
    firstTarget = 1 + compTotalScore;
    document.getElementById("comp-score").textContent = compTotalScore;

    compMiniScore = "+" + compScore;

    var element = document.getElementById('compMini')
element.classList.add("comp-mini-score-show")

document.getElementById("compMini").style.color = "rgb(37,184,37)"
document.getElementById("compMini").textContent = compMiniScore;
setTimeout(function elementShow(){
    element = document.getElementById("compMini")
   element.classList.remove("comp-mini-score-show")
},850)

hatTrick = 0;
document.getElementById("hat-trick").style.display = "none"
document.getElementById("on-hat-trick").style.display = "none"
document.getElementById("hattrick").style.display = "none"


    document.getElementById("comp-score").textContent = compTotalScore;
    document.getElementById("target-score").textContent = firstTarget;
    console.log(compTotalScore)
}


const compWicketSetupFirst = () => {
    compWicket++;
    document.getElementById("comp-wicket").textContent = compWicket;

    var element = document.getElementById("compMini")
    element.classList.add("comp-mini-score-show")

    compMiniScore = "W"
    document.getElementById("compMini").style.color = "red"
    document.getElementById("compMini").textContent = compMiniScore;
    setTimeout(function elementShow(){
        element = document.getElementById("compMini")
       element.classList.remove("comp-mini-score-show")
   },850)

    if(compWicket == totalWickets){
        document.getElementById("comp-slash").style.display = "none"
        document.getElementById("comp-wicket").style.display = "none"
        document.getElementById("optionShowCpu").style.display = "none"
        document.getElementById("innings-show").style.display = "block"
            document.getElementById("target-block").style.display = 'flex'
}

hatTrick++;

if(hatTrick == 2){
    document.getElementById("hat-trick").style.display = "flex"
    document.getElementById("on-hat-trick").style.display = "block"
}
else if(hatTrick == 3){
    document.getElementById("on-hat-trick").style.display = "none"
    document.getElementById("hattrick").style.display = "block"
}
else{
    document.getElementById("hat-trick").style.display = "none"
    document.getElementById("on-hat-trick").style.display = "none"
    document.getElementById("hattrick").style.display = "none"
}

}

const playGameCpu = (userChoiceCpu) => {
    // tossStatement = displayTossWinner +" " + "won the toss and chose to" +" " + displayTossWinnerChoice;
    // document.getElementById('tosswinner').textContent = tossStatement
    console.log("user choice is : ", userChoiceCpu);
    const compChoiceCpu = genCompChoiceCpu();
    console.log("comp choice is : ", compChoiceCpu);
    if(compChoiceCpu !== userChoiceCpu){
        if(userTotalScore == 0){
            compScoringFirst(compChoiceCpu);
        }
        else{
        compScoring(compChoiceCpu);
        }
    }
    else if(compChoiceCpu == userChoiceCpu){
        if(userTotalScore == 0){
            compWicketSetupFirst();
        }
        else{
        compWicketSetup();
        }
    }
}

const genCompChoiceCpu = () => {
    const optionsCpu = ["one" , "two" , "three" , "four" , "six"]
    var randNumCpu = Math.floor(Math.random()*5)
 return optionsCpu[randNumCpu] 
}

scoreCpu.forEach((scoreOptionsCpu) => {
    scoreOptionsCpu.addEventListener("click", () => {
        const userChoiceCpu = scoreOptionsCpu.getAttribute("id")
        playGameCpu(userChoiceCpu)
    })
})

/******************************************************** */
/******************************************************** */
/******************************************************** */
/******************************************************** */
/******************************************************** */

const toss = document.querySelectorAll(".tossChoice");
const inningchoice = document.querySelectorAll(".tossSelect");



const chooseInning = (userChoiceInning) => {
    if(userChoiceInning == "bat"){
        displayTossWinnerChoice = "BAT"
        let tossResult =  userName + " " +" Won the toss and chose to BAT"
        document.getElementById("tossResult").textContent = tossResult
        let startMatch =  document.getElementById("startMatch");
        document.getElementById("startMatch").style.display = "block"
        startMatch.addEventListener('click', () => {
            document.getElementById("tossBlock").style.display = "none"
            document.getElementById("main-containerShow").style.display = "flex"
        })
    }
    else if (userChoiceInning == 'bowl'){
        displayTossWinnerChoice = "BOWL"
        let tossResult =  userName + " " +" Won the toss and chose to BOWL"
        document.getElementById("tossResult").textContent = tossResult
        let startMatch =  document.getElementById("startMatch");
        document.getElementById("startMatch").style.display = "block"
        startMatch.addEventListener('click', () => {
            document.getElementById("tossBlock").style.display = "none"
            document.getElementById("main-containerShow").style.display = "flex"
            document.getElementById("optionShowCpu").style.display = "flex"
            document.getElementById("optionShow").style.display = "none"
            document.getElementById("scoreflexreverse").style.flexDirection ="row-reverse"
            document.getElementById("comp-score-content").style.display = "flex"
            document.getElementById("comp-yet").style.display = "none"
            document.getElementById("user-yet").style.display = "flex"
            document.getElementById("user-score-content").style.display = "none"
        })
    }
    // displayTossWinner.style.fontWeight = "bold"
    // displayTossWinnerChoice.style.fontWeight = "bold"
    tossStatement = displayTossWinner +" " ;
    document.getElementById('tosswinner').textContent = tossStatement;
    document.getElementById('tosswinnerchoice').textContent = displayTossWinnerChoice;
}





const genCompInningChoice =() => {
    const optionsInnings = [" Bat" , " Bowl"]
    var randNumInnings = Math.floor(Math.random()*2)
 return optionsInnings[randNumInnings] 
}

const playGameToss = (userChoiceToss) =>{
    console.log( userName + " " +" chose : ", userChoiceToss)
    const correctChoiceToss = genCorrectChoiceToss();
    if(userChoiceToss == correctChoiceToss){
        tossDisplayer = 1;
        displayTossWinner = userName;
        let tossResult =  userName + " " +" Won the toss"
        console.log(tossResult)
        document.getElementById("tossResult").textContent = tossResult
        // document.getElementById("tossResult").style.display = "block"
        document.getElementById("toss-content").style.display = "none"
        document.getElementById("wickets-content").style.display = "flex"
        // document.getElementById("toss-choice").style.display = "flex"
        return userChoiceToss,correctChoiceToss;
    }
    else{
        tossDisplayer = 2;
        let compSelect = genCompInningChoice();
        displayTossWinner =compFullName;
        if(compSelect == " Bat"){
            displayTossWinnerChoice = "BAT"
            let tossResult = compFullName + " " + "Won the toss and chose to" + compSelect;
            document.getElementById("tossResult").textContent = tossResult
            console.log(tossResult)
            // let startMatch =  document.getElementById("startMatch");
            // document.getElementById("startMatch").style.display = "block"
            document.getElementById("wickets-content").style.display = "flex"
            startMatch.addEventListener('click', () => {
                document.getElementById("tossBlock").style.display = "none"
                document.getElementById("main-containerShow").style.display = "flex"
                document.getElementById("optionShowCpu").style.display = "flex"
                document.getElementById("optionShow").style.display = "none"
                document.getElementById("scoreflexreverse").style.flexDirection ="row-reverse"
                document.getElementById("comp-score-content").style.display = "flex"
                document.getElementById("comp-yet").style.display = "none"
                document.getElementById("user-yet").style.display = "flex"
                document.getElementById("user-score-content").style.display = "none"
            })
        }
        else if(compSelect == " Bowl"){
            displayTossWinnerChoice = "BOWL"
            let tossResult = compFullName + " " + " Won the toss and chose to" + compSelect;
            console.log(tossResult)
            document.getElementById("tossResult").textContent = tossResult
            document.getElementById("wickets-content").style.display = "flex"
            // let startMatch =  document.getElementById("startMatch");
            // document.getElementById("startMatch").style.display = "block"
            startMatch.addEventListener('click', () => {
                document.getElementById("tossBlock").style.display = "none"
                document.getElementById("main-containerShow").style.display = "flex"
            })
        }
        // displayTossWinner.style.fontWeight = "bold"
        tossStatement = displayTossWinner +" " ;
        document.getElementById('tosswinner').textContent = tossStatement;
        document.getElementById('tosswinnerchoice').textContent = displayTossWinnerChoice;
        document.getElementById("toss-content").style.display = "none"
        // document.getElementById("tossResult").style.display = "block"
    }
}


const genCorrectChoiceToss = () => {
    const optionsToss = ["heads" , "tails"]
    var randNumToss = Math.floor(Math.random()*2)
 return optionsToss[randNumToss] 
}


toss.forEach((tossChoice) => {
    tossChoice.addEventListener("click", () => {
        const userChoiceToss = tossChoice.getAttribute("id")
        playGameToss(userChoiceToss)
    })
})

inningchoice.forEach((tossSelect) => {
    tossSelect.addEventListener("click", () => {
        const userChoiceInning = tossSelect.getAttribute("id")
        document.getElementById("toss-choice").style.display = "none"
        document.getElementById("startMatch").style.display = "block"
        chooseInning(userChoiceInning)
    })
})



const playGameTotalWickets = (totalWickets,userChoiceToss) =>{
    const correctChoiceToss = genCorrectChoiceToss();
    if(userChoiceToss == correctChoiceToss){
//          document.getElementById("tossResult").style.display = "block"
// document.getElementById("toss-choice").style.display = "flex"
// document.getElementById('wickets-content').style.display = 'none'
console.log(totalWickets)
    }
}


funWicket.forEach((wicketbuttons) => {
    wicketbuttons.addEventListener("click", () => {
         totalWickets = wicketbuttons.getAttribute("id")
         if(totalWickets == "threeWickets"){
            totalWickets = 3;
         }
         else if(totalWickets == "fiveWickets"){
            totalWickets =5;
         }
         else if(totalWickets == "tenWickets"){
            totalWickets = 10;
         }
       console.log(totalWickets)
       if(tossDisplayer == 1){
           document.getElementById("toss-choice").style.display = "flex"
       }
       else{
           document.getElementById("startMatch").style.display = "block"
       }
       document.getElementById("tossResult").style.display = "block"
       document.getElementById('wickets-content').style.display = 'none'
    //    playGameTotalWickets(totalWickets);
    })
})