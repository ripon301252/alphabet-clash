//-------------------- screen hide/unhide --------------------------------------
function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
//----------------------------------------------------------


//-------------------- for keyboard -----------------------------------------
function handlerKeyboardButtonPress(event){
    const playerPressed = event.key;
    //console.log('player Pressed' , playerPressed);


    // stop the game if pressed 'Esc'
    if(playerPressed === 'Escape'){
        gameOver();
    }



    // key player is expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
    //console.log(playerPressed, expectedAlphabet);


    //check right or wrong key pressed
    if(playerPressed === expectedAlphabet){
        //console.log('you got a point');
        //console.log('you have pressed correctly', expectedAlphabet);


        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);



/*-----------------------------------------------------------------------------
        // update score:
        // 1. get the current score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        //console.log(currentScore);
        

        // 2. increase the score by 1
        const newScore = currentScore + 1;

        // 3. show the update score
        currentScoreElement.innerText = newScore;
*/
        

        //start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
       console.log('you missed. you lost a life');
        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);
        

        if(updatedLife === 0){
            gameOver();
        }

/*------------------------------------------------------------------------
       // step-1: get the current life number
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);
       // step-2: reduce the life count
        const newLife = currentLife - 1;
        
       // step-3: display the updated life count
       currentLifeElement.innerText = newLife;
*/
    }
}
// capture keyboard key press
document.addEventListener('keyup' , handlerKeyboardButtonPress);




function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-600'); // keyboard button color
}


function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-600');
}

function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}


function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}




//                                  ------------------------------------------
function getARandomAlphabet(){
    //get or create an alphabet array.
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz'; 
    const alphabets = alphabetString.split('');
    //console.log(alphabets);


    // get a random index 0-25
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    //console.log(index, alphabet);
    return alphabet;


}
//---------------------------------------------------------------