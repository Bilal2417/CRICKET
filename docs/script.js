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
let userTeamName;
let compFullName;
let compTeamName;
// function turnOn(){
//     let Hello = document.getElementById("hello").value
//     localStorage.setItem("Name",Hello)
// }
let hatTrick = 0;


let overNumber = 0;
let overBall = 0;

let overNumberComp = 0;
let overBallComp = 0;

let userPartnership = 0;
let compPartnership = 0;
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
    
    const funWicket = document.querySelectorAll('.wicketsChoice')
let totalWickets;

    const funOvers = document.querySelectorAll('.overChoice')
let totalOvers;
let totalBalls;
/*********************************************** */
/*********************************************** */
/*********************************************** */
let expNumber = 0;
// let totalExp = 0;
let expRequired = 200;
let savedTotalExp = 0;
let levelUp = 1;

let totalExp = +prompt("enter totalExp: ")
// let expNumber = +prompt("enter expNumber: ")
// let levelUp = +prompt("enter levelUp: ")
// let expRequired = +prompt("enter expRequired: ")
document.getElementById("profile-exp-right").textContent = expRequired;
/*********************************************** */
/*********************************************** */


const expCalc = () =>{
    savedTotalExp += totalExp;
    setInterval(function exp(){
        if(expNumber < totalExp){
            expNumber += 1;
            document.getElementById("profile-exp-left").textContent = expNumber;
            document.getElementById("bar-length").style.width = (expNumber/levelUp) + "px";
            
            if(expNumber >= expRequired){
                while(expNumber > 0){
                    expNumber--;
                    document.getElementById("profile-exp-left").textContent = expNumber;
                    document.getElementById("bar-length").style.width = (expNumber/levelUp) + "px";
                }
                totalExp = totalExp - expRequired;
                console.log(totalExp,"hhhh");
                expRequired += 200;
                levelUp += 1;
                document.getElementById("level-number").textContent = levelUp;
                document.getElementById("profile-exp-right").textContent = expRequired;

            }
        }
      },60)

}





const selectTeam = document.querySelectorAll(".teams")

selectTeam.forEach((teams) => {
    expCalc();
    teams.addEventListener('click', () => {
        userName = event.target.textContent
        // userName = teams.getAttribute("id")
        console.log("Your team : ",userName)
        document.getElementById("selectteam").style.display = "none"
        document.getElementById("toss-content").style.display = "flex"
        document.getElementById("user-name").textContent = userName;
        if(userName == "NEW ZEALAND" || userName == "SRI LANKA"){
            userTeamName = userName[0] + userName[4]
        }
        else if(userName == "SOUTH AFRICA"){
            userTeamName = userName[0] + userName[6]
        }
        else if(userName == "WEST INDIES"){
            userTeamName = userName[0] + userName[5]
        }
        else{
            userTeamName = userName[0] + userName[1] + userName[2];
        }
        document.getElementById("userteamName").textContent = userTeamName
        console.log(userTeamName)
        genCompName(userName)
    })
})


var element;
const genCompName = (userName) => {
    let compName = ["AUSTRALIA" , "ENGLAND" , "NEW ZEALAND" , "SOUTH AFRICA" , "SRI LANKA" , "INDIA" , "PAKISTAN" , "USA" ,"NETHERLANDS", "BANGLADESH" , "WEST INDIES" , "AFGHANISTAN"]
    var randNameChoose = Math.floor(Math.random()*12)
    compFullName = compName[randNameChoose]
    console.log("Comp team : ",compFullName)
    if(compFullName == "NEW ZEALAND" || compFullName == "SRI LANKA"){
        compTeamName = compFullName[0] + compFullName[4]
    }
    else if(compFullName == "SOUTH AFRICA"){
        compTeamName = compFullName[0] + compFullName[6]
    }
    else if(compFullName == "WEST INDIES"){
        compTeamName = compFullName[0] + compFullName[5]
    }
    else{
        compTeamName = compFullName[0] + compFullName[1] + compFullName[2];
    }
    document.getElementById("compteamName").textContent = compTeamName;
    console.log(compTeamName)
    document.getElementById("comp-name").textContent = compFullName;
    if(userName === compFullName){
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
    userPartnership +=userScore;
    document.getElementById("PartnershipRuns").textContent = userPartnership + " " + "RUNS"
    
    overBall++;
    
    if(overBall > 5){
        overBall = 0;
        overNumber++;
        document.getElementById('ballnumber').textContent = overBall;
        document.getElementById('overnumber').textContent = overNumber;
    }
    else{
        document.getElementById('ballnumber').textContent = overBall;
    }

if(overNumber == totalOvers){
    // document.getElementById("user-slash").style.display = "none"
    // document.getElementById("user-wicket").style.display = "none"
    document.getElementById("optionShow").style.display = "none"
    document.getElementById("innings-over").style.display = "block"
    document.getElementById("target-block").style.display = 'flex'
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
    return element;
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
userPartnership = 0;
document.getElementById("PartnershipRuns").textContent = userPartnership + " " + "RUNS"
 
overBall++;
    
    if(overBall > 5){
        overBall = 0;
        overNumber++;
        document.getElementById('ballnumber').textContent = overBall;
        document.getElementById('overnumber').textContent = overNumber;
    }
    else{
        document.getElementById('ballnumber').textContent = overBall;
    }

    if(overNumber == totalOvers){
        // document.getElementById("user-slash").style.display = "none"
        // document.getElementById("user-wicket").style.display = "none"
        document.getElementById("optionShow").style.display = "none"
        document.getElementById("innings-over").style.display = "block"
        document.getElementById("target-block").style.display = 'flex'
    }
    
}

const userScoringSecond =(userChoice) => {
    // document.getElementById("requiredruns").style.display = "none"
    //         document.getElementById("optionShow").style.display = "none"
    //         document.getElementById("matchResult").style.display = "block"
    //         document.getElementById("play-again").style.display = "block"
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
    userPartnership +=userScore;
    document.getElementById("PartnershipRuns").textContent = userPartnership + " " + "RUNS";

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
    
    /************************************************ */
    /*************RUNS   REQUIRED************* */
    /************************************************ */
    document.getElementById("user-score").textContent = userTotalScore;

    totalBalls--;
    if(overNumber != totalOvers){
    document.getElementById("requiredruns").style.display = "block"
    document.getElementById("requiredruns").textContent =  userName + " " + " need " +((compTotalScore - userTotalScore) +1 ) + " "  +"runs in" +" " + totalBalls + " " + "balls" + " " + "to win";
    }
    /********************************************* */
    if(userTotalScore >=  firstTarget && overNumber != totalOvers){
          if((totalWickets - userWicket) >= 5 ){
            totalExp += 10 ;
          }

        totalExp += 25;
        expCalc();

        
        if((totalWickets-userWicket) ==1){
            matchResult = userName + " " +" WON BY " + (totalWickets-userWicket) + " Wicket"
        }
        else {
                matchResult =  userName + " " +" WON BY " + (totalWickets-userWicket) + " Wickets"
                }
                document.getElementById("matchResult").textContent = matchResult;
                document.getElementById("requiredruns").style.display = "none"
                document.getElementById("optionShow").style.display = "none"
                document.getElementById("matchResult").style.display = "block"
                document.getElementById("play-again").style.display = "block"
                /********************************************** */
                /********************************************** */
    
                /********************************************** */
                /********************************************** */
            }
            // else if(userTotalScore == (firstTarget - 1)){
            //     matchResult = "MATCH DRAWN"
                // document.getElementById("matchResult").textContent = matchResult;
                // document.getElementById("requiredruns").style.display = "none"
                // document.getElementById("optionShow").style.display = "none"
                // document.getElementById("matchResult").style.display = "block"
                // document.getElementById("play-again").style.display = "block"
            // }
            console.log(userTotalScore)

/******************************************** */
/*****************OVERS******************* */
/******************************************** */

   overBall++;
    
   if(overBall > 5){
       overBall = 0;
       overNumber++;
       document.getElementById('ballnumber').textContent = overBall;
       document.getElementById('overnumber').textContent = overNumber;
   }
   else{
       document.getElementById('ballnumber').textContent = overBall;
   }

if(overNumber == totalOvers){
    if(userTotalScore < compTotalScore){

    if((compTotalScore - userTotalScore) == 1){
        matchResult = compFullName + " "+ " WON BY " + (compTotalScore - userTotalScore) + " Run";
    }
    else {
        matchResult = compFullName + " "+ "WON BY " + (compTotalScore - userTotalScore) + " Runs";
    }
     document.getElementById("play-again").style.display = "block"
}

else if (userTotalScore > compTotalScore){
    // document.getElementById("requiredruns").style.display = "none"
    // document.getElementById("optionShow").style.display = "none"
    // document.getElementById("matchResult").style.display = "block"

    if((totalWickets-userWicket) ==1){
        matchResult = userName + " " +" WON BY " + (totalWickets-userWicket) + " Wicket"
    }
    else {
    matchResult =  userName + " " +" WON BY " + (totalWickets-userWicket) + " Wickets"
    }
    // document.getElementById("matchResult").textContent = matchResult;
    /********************************************************** */
    /********************************************************** */

    totalExp += 25;
    expCalc();
    /********************************************************** */
    /********************************************************** */
     document.getElementById("play-again").style.display = "block"
}

else if(userTotalScore == (firstTarget - 1)){
    matchResult = "MATCH DRAWN"
    // document.getElementById("matchResult").textContent = matchResult;
         document.getElementById("play-again").style.display = "block"

         /********************************************** */
         /********************************************** */
         /********************************************** */
         totalExp += 5;
         expCalc();
            /************************************************** */
            /************************************************** */
            /************************************************** */
}
console.log(userTotalScore)
document.getElementById("matchResult").textContent = matchResult;
document.getElementById("matchResult").style.display = "block"
document.getElementById("requiredruns").style.display = "none"
document.getElementById("optionShow").style.display = "none"
document.getElementById("play-again").style.display = "block"
}

}

// }

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


    if(userWicket == totalWickets && userTotalScore < compTotalScore){
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
                        document.getElementById("play-again").style.display = "block"
         document.getElementById("requiredruns").style.display = "none"
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

    userPartnership = 0;
document.getElementById("PartnershipRuns").textContent = userPartnership + " " + "RUNS"
 

        /***********************************************/
    /*************RUNS   REQUIRED************* */
    /************************************************ */


    totalBalls--;
    if(userWicket != totalWickets){
        document.getElementById("requiredruns").style.display = "block"
        document.getElementById("requiredruns").textContent =  userName + " " + " need " +((compTotalScore - userTotalScore) +1 ) + " " +"runs in" +" " + totalBalls + " " + "balls" + " " + "to win";
    }

    /********************************************* */

    overBall++;
    
    if(overBall > 5){
        overBall = 0;
        overNumber++;
        document.getElementById('ballnumber').textContent = overBall;
        document.getElementById('overnumber').textContent = overNumber;
    }
    else{
        document.getElementById('ballnumber').textContent = overBall;
    }

if(overNumber == totalOvers){
    if(userTotalScore < compTotalScore){

    if((compTotalScore - userTotalScore) == 1){
        matchResult = compFullName + " "+ " WON BY " + (compTotalScore - userTotalScore) + " Run";
    }
    else {
        matchResult = compFullName + " "+ "WON BY " + (compTotalScore - userTotalScore) + " Runs";
    }

}

else if (userTotalScore > compTotalScore){

    // document.getElementById("requiredruns").style.display = "none"
    // document.getElementById("optionShow").style.display = "none"
    // document.getElementById("matchResult").style.display = "block"

    if((totalWickets-userWicket) ==1){
        matchResult = userName + " " +" WON BY " + (totalWickets-userWicket) + " Wicket"
    }
    else {
    matchResult =  userName + " " +" WON BY " + (totalWickets-userWicket) + " Wickets"
    }
    // document.getElementById("matchResult").textContent = matchResult;
    totalExp += 25;
    expCalc();
}

else if(userTotalScore == (firstTarget - 1)){
    matchResult = "MATCH DRAWN"
             document.getElementById("play-again").style.display = "block"
    // document.getElementById("matchResult").textContent = matchResult;
    /******************************************* */
    /******************************************* */
    /******************************************* */
    totalExp += 5;
    expCalc();
       /************************************************** */
       /************************************************** */
       /************************************************** */
}
console.log(userTotalScore)
document.getElementById("matchResult").textContent = matchResult;
// document.getElementById("user-slash").style.display = "none"
// document.getElementById("user-wicket").style.display = "none"
document.getElementById("optionShow").style.display = "none"
document.getElementById("matchResult").style.display = "block"
                document.getElementById("play-again").style.display = "block"
 document.getElementById("requiredruns").style.display = "none"
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
    document.getElementById("blockuser").style.display = 'none';
    document.getElementById("blockcomp").style.display = 'flex';
    document.getElementById("comp-score-content").style.display = 'flex';
    document.getElementById("optionShowCpu").style.display = 'flex';
    document.getElementById("innings-over").style.display = 'none';
    document.getElementById("comp-yet").style.display = 'none';
    document.getElementById("userMini").textContent =''

    document.getElementById("comp-score").style.display = "block"
    document.getElementById("comp-slash").style.display = "block"
    document.getElementById("comp-wicket").style.display = "block"

            // document.getElementById("requiredruns").style.display = "block"

            hatTrick = 0;
            document.getElementById("hat-trick").style.display = "none"
            document.getElementById("on-hat-trick").style.display = "none"
            document.getElementById("hattrick").style.display = "none"
        })
        
        let inningShowUser = document.getElementById("innings-show")
        inningShowUser.addEventListener('click', () => {
            document.getElementById("blockuser").style.display = 'flex';
            document.getElementById("blockcomp").style.display = 'none';
            document.getElementById("user-score-content").style.display = 'flex';
            document.getElementById("optionShow").style.display = 'flex';
            document.getElementById("optionShowCpu").style.display = 'none';
            document.getElementById("innings-show").style.display = 'none';
            document.getElementById("user-yet").style.display = 'none';
            document.getElementById("compMini").textContent = '';

            document.getElementById("user-score").style.display = "block"
            document.getElementById("user-slash").style.display = "block"
            document.getElementById("user-wicket").style.display = "block"

            // document.getElementById("requiredruns").style.display = "block"

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

    compPartnership += compScoreCpu;
    document.getElementById("PartnershipRunsComp").textContent = compPartnership + " " + "RUNS"

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

    /************************************************ */
    /*************RUNS   REQUIRED************* */
    /************************************************ */
totalBalls--;
if(overNumberComp != totalOvers){
    document.getElementById("requiredruns").style.display = "block"
    document.getElementById("requiredruns").textContent = compFullName + " " + " need " + " " +((userTotalScore - compTotalScore) +1 ) + " " + "runs in" +" "+ totalBalls + " " + "balls" +" " + "to win";
}
    

    /************************************************ */

    if(compTotalScore >= firstTarget){
                document.getElementById("requiredruns").style.display = "none"
                document.getElementById("optionShowCpu").style.display = "none"
                document.getElementById("matchResult").style.display = "block"
                document.getElementById("play-again").style.display = "block"

                if((totalWickets-compWicket) ==1){
                    matchResult = compFullName + " " + "WON BY " + (totalWickets-compWicket) + " Wicket"
                }

                else {
                matchResult = compFullName + " " + "WON BY " + (totalWickets-compWicket) + " Wickets"
                }
                document.getElementById("matchResult").textContent = matchResult;
            }

            // else if(compTotalScore == (firstTarget - 1)){
            //     matchResult = "MATCH DRAWN"
            //     document.getElementById("matchResult").textContent = matchResult;
            // }
            console.log(compTotalScore)


            overBallComp++;
    
            if(overBallComp > 5){
                overBallComp = 0;
                overNumberComp++;
                document.getElementById('ballnumberComp').textContent = overBallComp;
                document.getElementById('overnumberComp').textContent = overNumberComp;
            }
            else{
                document.getElementById('ballnumberComp').textContent = overBallComp;
            }
         
            /*****OVERS********* */
         if(overNumberComp == totalOvers){

            if(compTotalScore >= firstTarget){
                document.getElementById("requiredruns").style.display = "none"
                // document.getElementById("optionShowCpu").style.display = "none"
                // document.getElementById("matchResult").style.display = "block"
                if((totalWickets-compWicket) ==1){
                    matchResult = compFullName + " " + "WON BY " + (totalWickets-compWicket) + " Wicket"
                }
                else {
                matchResult = compFullName + " " + "WON BY " + (totalWickets-compWicket) + " Wickets"
                }
                document.getElementById("play-again").style.display = "block"
            }


            else if(compTotalScore == (firstTarget - 1)){
                matchResult = "MATCH DRAWN"
                    document.getElementById("requiredruns").style.display = "none"
                document.getElementById("matchResult").textContent = matchResult;
                     document.getElementById("play-again").style.display = "block"
                     /****************************************** */
                     /****************************************** */
                     /****************************************** */
                     totalExp += 5;
                     expCalc();
                        /************************************************** */
                        /************************************************** */
                        /************************************************** */
                    }
                    
                    else if(compTotalScore < userTotalScore){
                        if((userTotalScore - compTotalScore) == 1){
                            matchResult =  userName + " " +" WON BY " + (userTotalScore - compTotalScore) + " Run";
             }
             else {
                 matchResult =  userName + " " +" WON BY " + (userTotalScore - compTotalScore) + " Runs";
             } 


             if((userTotalScore - compTotalScore) >= 50 ){
                totalExp += 10;
             }
                /********************************************* */
                /********************************************* */
                /********************************************* */

                totalExp += 25;
                expCalc();
            }
            
            document.getElementById("matchResult").textContent = matchResult;
            document.getElementById("requiredruns").style.display = "none"
             // document.getElementById("comp-slash").style.display = "none"
             // document.getElementById("comp-wicket").style.display = "none"
             document.getElementById("optionShowCpu").style.display = "none"
             document.getElementById("matchResult").style.display = "block"
                             document.getElementById("play-again").style.display = "block"
         
         
             }
         
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

    if(compWicket == totalWickets && overNumberComp != totalOvers ){
        if((userTotalScore - compTotalScore) == 1){
            matchResult =  userName + " " +" WON BY " + (userTotalScore - compTotalScore) + " Run";
        }
        else {
            matchResult =  userName + " " +" WON BY " + (userTotalScore - compTotalScore) + " Runs";
        }
         
                /********************************************* */
                /********************************************* */
                /********************************************* */

                totalExp += 25;
                expCalc();

                /********************************************* */
                /********************************************* */
                /********************************************* */



        document.getElementById("matchResult").textContent = matchResult;
        document.getElementById("comp-slash").style.display = "none"
        document.getElementById("comp-wicket").style.display = "none"
        document.getElementById("optionShowCpu").style.display = "none"
        document.getElementById("matchResult").style.display = "block"
       document.getElementById("play-again").style.display = "block"
       document.getElementById("requiredruns").style.display = "none"
    }
                    /********************************************* */
                /********************************************* */
                /********************************************* */
                                /********************************************* */
                /********************************************* */
                /********************************************* */
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

    compPartnership = 0;
    document.getElementById("PartnershipRunsComp").textContent = compPartnership + " " + "RUNS";
        /************************************************ */
    /*************RUNS   REQUIRED************* */
    /************************************************ */
totalBalls--;
if(compWicket != totalWickets){
    document.getElementById("requiredruns").style.display = "block"
    document.getElementById("requiredruns").textContent = compFullName + " " + " need " +((userTotalScore - compTotalScore) +1 ) + " " + "runs in" +" "+ totalBalls + " " + "balls" +" " + "to win";
}

/************************************************ */

    overBallComp++;
    
    if(overBallComp > 5){
        overBallComp = 0;
        overNumberComp++;
        document.getElementById('ballnumberComp').textContent = overBallComp;
        document.getElementById('overnumberComp').textContent = overNumberComp;
    }
    else{
        document.getElementById('ballnumberComp').textContent = overBallComp;
    }

    if(overNumberComp == totalOvers){
        if((userTotalScore - compTotalScore) == 1){
            matchResult =  userName + " " +" WON BY " + (userTotalScore - compTotalScore) + " Run";
        }
        else {
            matchResult =  userName + " " +" WON BY " + (userTotalScore - compTotalScore) + " Runs";
        }
         
                /********************************************* */
                /********************************************* */
                /********************************************* */

                totalExp += 25;
                expCalc();

                   /********************************************* */
                   /********************************************* */
                   /********************************************* */
   

        document.getElementById("matchResult").textContent = matchResult;
        // document.getElementById("comp-slash").style.display = "none"
        // document.getElementById("comp-wicket").style.display = "none"
        document.getElementById("optionShowCpu").style.display = "none"
        document.getElementById("matchResult").style.display = "block"
        document.getElementById("requiredruns").style.display = "none"
                        document.getElementById("play-again").style.display = "block"
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

compPartnership += compScore;
document.getElementById("PartnershipRunsComp").textContent = compPartnership + " " + "RUNS";

overBallComp++;
    
if(overBallComp > 5){
    overBallComp = 0;
    overNumberComp++;
    document.getElementById('ballnumberComp').textContent = overBallComp;
    document.getElementById('overnumberComp').textContent = overNumberComp;
}
else{
    document.getElementById('ballnumberComp').textContent = overBallComp;
}

if(overNumberComp == totalOvers){
    // document.getElementById("comp-slash").style.display = "none"
    // document.getElementById("comp-wicket").style.display = "none"
    document.getElementById("optionShowCpu").style.display = "none"
    document.getElementById("innings-show").style.display = "block"
        document.getElementById("target-block").style.display = 'flex'
}


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

compPartnership = 0;
document.getElementById("PartnershipRunsComp").textContent = compPartnership + " " + "RUNS";

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

overBallComp++;
    
if(overBallComp > 5){
    overBallComp = 0;
    overNumberComp++;
    document.getElementById('ballnumberComp').textContent = overBallComp;
    document.getElementById('overnumberComp').textContent = overNumberComp;
}
else{
    document.getElementById('ballnumberComp').textContent = overBallComp;
}

if(overNumberComp == totalOvers){
    // document.getElementById("comp-slash").style.display = "none"
    // document.getElementById("comp-wicket").style.display = "none"
    document.getElementById("optionShowCpu").style.display = "none"
    document.getElementById("innings-show").style.display = "block"
        document.getElementById("target-block").style.display = 'flex'
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


// const expCalc = () =>{
//     setInterval(function exp(){
//         if(expNumber < totalExp){
//             expNumber += 1;
//             document.getElementById("profile-exp-left").textContent = expNumber;
//             document.getElementById("bar-length").style.width = (expNumber/levelUp) + "px";
            
//             if(expNumber >= expRequired){
//                 while(expNumber > 0){
//                     expNumber--;
//                     document.getElementById("profile-exp-left").textContent = expNumber;
//                     document.getElementById("bar-length").style.width = (expNumber/levelUp) + "px";
//                 }
//                 totalExp = totalExp - expRequired;
//                 console.log(totalExp,"hhhh");
//                 expRequired += 200;
//                 levelUp += 1;
//                 document.getElementById("level-number").textContent = levelUp;
//                 document.getElementById("profile-exp-right").textContent = expRequired;

//             }
//         }
//       },60)

// }

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
        document.getElementById("tossResult").style.display = "block"

        startMatch.addEventListener('click', () => {


            document.getElementById("blockuser").style.display = "flex"
            document.getElementById("blockcomp").style.display = "none"

            document.getElementById("startMatch").style.display = "none"
           document.getElementById("tossBlock").style.display = "none"
            document.getElementById("tossResult").style.display = "none"
           document.getElementById("optionShow").style.display = "flex"
            document.getElementById("optionShowCpu").style.display = "none"
            document.getElementById("main-containerShow").style.display = "flex"
            document.getElementById("scoreflexreverse").style.flexDirection ="row"
            document.getElementById("comp-score-content").style.display = "none"
            document.getElementById("comp-yet").style.display = "flex"
            document.getElementById("user-yet").style.display = "none"
            document.getElementById("user-score-content").style.display = "flex"

            document.getElementById("user-score").style.display = "block"
            document.getElementById("user-slash").style.display = "block"
            document.getElementById("user-wicket").style.display = "block"
            
        })
    }
    else if (userChoiceInning == 'bowl'){
        displayTossWinnerChoice = "BOWL"
        let tossResult =  userName + " " +" Won the toss and chose to BOWL"
        document.getElementById("tossResult").textContent = tossResult
        let startMatch =  document.getElementById("startMatch");
        document.getElementById("startMatch").style.display = "block"
        document.getElementById("tossResult").style.display = "block"

        startMatch.addEventListener('click', () => {
            
             document.getElementById("blockuser").style.display = "none"
                document.getElementById("blockcomp").style.display = "flex"

            document.getElementById("startMatch").style.display = "none"
            document.getElementById("tossBlock").style.display = "none"
            document.getElementById("tossResult").style.display = "none"
            document.getElementById("main-containerShow").style.display = "flex"
            document.getElementById("optionShowCpu").style.display = "flex"
            document.getElementById("optionShow").style.display = "none"
            document.getElementById("scoreflexreverse").style.flexDirection ="row-reverse"
            document.getElementById("comp-score-content").style.display = "flex"

            document.getElementById("comp-score").style.display = "block"
            document.getElementById("comp-slash").style.display = "block"
            document.getElementById("comp-wicket").style.display = "block"

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

                document.getElementById("blockuser").style.display = "none"
                document.getElementById("blockcomp").style.display = "flex"

                document.getElementById("startMatch").style.display = "none"
                document.getElementById("tossBlock").style.display = "none"
                document.getElementById("tossResult").style.display = "none"
                document.getElementById("main-containerShow").style.display = "flex"
                document.getElementById("optionShow").style.display = "none"
                document.getElementById("optionShowCpu").style.display = "flex"
                document.getElementById("scoreflexreverse").style.flexDirection ="row-reverse"
                document.getElementById("user-yet").style.display = "flex"
                document.getElementById("comp-yet").style.display = "none"
                document.getElementById("user-score-content").style.display = "none"
                document.getElementById("comp-score-content").style.display = "flex"
                document.getElementById("comp-score").style.display = "block"
                document.getElementById("comp-slash").style.display = "block"
                document.getElementById("comp-wicket").style.display = "block"
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

                document.getElementById("blockuser").style.display = "flex"
                document.getElementById("blockcomp").style.display = "none"

                document.getElementById("startMatch").style.display = "none"
                document.getElementById("tossBlock").style.display = "none"
                document.getElementById("tossResult").style.display = "none"
                document.getElementById("main-containerShow").style.display = "flex"
                  document.getElementById("scoreflexreverse").style.flexDirection ="row"
               document.getElementById("user-yet").style.display = "none"
                document.getElementById("comp-yet").style.display = "flex"
                 document.getElementById("user-score-content").style.display = "flex"

                 document.getElementById("user-score").style.display = "block"
                 document.getElementById("user-slash").style.display = "block"
                 document.getElementById("user-wicket").style.display = "block"

                document.getElementById("comp-score-content").style.display = "none"
                document.getElementById("optionShow").style.display = "flex"
                document.getElementById("optionShowCpu").style.display = "none"
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
        document.getElementById("tossResult").style.display = "block"
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


funWicket.forEach((wicketsChoice) => {
    wicketsChoice.addEventListener("click", () => {
         totalWickets = wicketsChoice.getAttribute("id")

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

    //    if(tossDisplayer == 1){
    //        document.getElementById("toss-choice").style.display = "flex"
    //    }
    //    else{
    //        document.getElementById("startMatch").style.display = "block"
    //    }

    //    document.getElementById("tossResult").style.display = "block"
       document.getElementById('wickets-content').style.display = 'none'
       document.getElementById('overs-content').style.display = 'flex'
       document.getElementById("formatWicket").textContent = "  " + totalWickets +" "+ "WICKETS"
    //    playGameTotalWickets(totalWickets);
    })
})


funOvers.forEach((overChoice) =>{
    overChoice.addEventListener("click",() =>{
        totalOvers = overChoice.getAttribute("id")

        if(totalOvers == "three"){
            totalOvers = 3;
            totalBalls = 18;
        }
        else if(totalOvers == "five"){
            totalOvers = 5;
            totalBalls = 30;
        }
        else if(totalOvers == "ten"){
            totalOvers = 10;
            totalBalls = 60;
        }

        console.log(totalOvers)

        if(tossDisplayer == 1){
            document.getElementById("toss-choice").style.display = "flex"
        }
        else{
            document.getElementById("startMatch").style.display = "block"
            document.getElementById("tossResult").style.display = "block"
        }
 
        document.getElementById("tossResult").style.display = "block"
               document.getElementById('overs-content').style.display = 'none'
               document.getElementById("formatOver").textContent = "  " + totalOvers +" " + "OVERS"
    })
})



let PlayAgain = document.getElementById("play-again")

PlayAgain.addEventListener("click", () => {
    document.getElementById("main-containerShow").style.display = "none"
    document.getElementById("user-yet").style.display = 'none';
    document.getElementById("comp-yet").style.display = 'none';
    document.getElementById("tossBlock").style.display = "flex"
    document.getElementById("selectteam").style.display = "grid"
    document.getElementById("optionShow").style.display = 'none';
    document.getElementById("optionShowCpu").style.display = 'none';
    document.getElementById("blockuser").style.display = "none"
    document.getElementById("blockcomp").style.display = "none"


    document.getElementById("requiredruns").style.display = "none"
    document.getElementById("target-block").style.display = "none"
    document.getElementById("matchResult").style.display = "none"
    
    document.getElementById("hat-trick").style.display = "none"
    document.getElementById("on-hat-trick").style.display = "none"
    document.getElementById("hattrick").style.display = "none"


    PlayAgain.style.display = "none"
overBall = 0;
document.getElementById("ballnumber").textContent = overBall;
overBallComp = 0;
document.getElementById("ballnumberComp").textContent = overBallComp;
overNumber = 0;
document.getElementById("overnumber").textContent = overNumber;
overNumberComp = 0;
document.getElementById("overnumberComp").textContent = overNumberComp;
totalBalls = "";
totalOvers = "";

userScore = 0;
userMiniScore = 0;
userTotalScore = 0;
document.getElementById("user-score").textContent = userTotalScore;
userChoiceInning = "";

compScore = 0;
compScoreCpu = 0;
document.getElementById("comp-score").textContent = compScore;
document.getElementById("comp-score").textContent = compScoreCpu;
compMiniScore = 0;
compTotalScore = 0;

displayTossWinner = "";
displayTossWinnerChoice = ""

firstTarget = 0;
userWicket = 0;
document.getElementById("user-wicket").textContent = userWicket;
compWicket = 0;
document.getElementById("comp-wicket").textContent = compWicket;
totalWickets = "";
hatTrick = 0;
userPartnership = 0;
document.getElementById("PartnershipRuns").textContent = userPartnership;
compPartnership = 0;
document.getElementById("PartnershipRunsComp").textContent = compPartnership;
matchResult = "";
})