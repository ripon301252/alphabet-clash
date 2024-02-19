/*----------------------------------------------------------------------
function play(){
     //step-1 hide the home screen. to hide the screen add the class hidden to the home section.
    const homeSection = document.getElementById('home-screen');
    homeSection.classList.add('hidden')

    // show the playground
    const playgroundSection = document.getElementById('play-ground');
    playgroundSection.classList.remove('hidden');
}   
*/ //--------------------------------------------------------------



//---------------- for keyboard ---------------------------------------
function continueGame(){
    // step-1 generate a random alphabet
   const alphabet = getARandomAlphabet();
   //console.log('your random alphabet', alphabet);


   // set randomly generated alphabet to the screen (display it)
   const currentAlphabetElement = document.getElementById('current-alphabet');
   currentAlphabetElement.innerText = alphabet;


   // set background color
   setBackgroundColorById(alphabet);
}

//--------------------------------------------------------


function play(){
    // hide everything show only the playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');


    // reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0)


    continueGame()
}


function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');

    // update last score
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('last-score', lastScore);

    // clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);

}