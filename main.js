document.querySelector('#heads').addEventListener('click', headsClicked);

document.querySelector('#tails').addEventListener('click', tailsClicked);

document.querySelector('#flip').addEventListener('click', flipClicked);

let userGuessResponse;

function headsClicked(){
    userGuessResponse = "heads";
    console.log(userGuessResponse);
}

function tailsClicked(){
    userGuessResponse = "tails";
    console.log(userGuessResponse);
}

async function flipClicked(){
    const res = await fetch('https://cfg-deploy.onrender.com/api');
    const data = await res.json();
    if(userGuessResponse === data.result){
        document.querySelector('h1').innerText = `You Win guessed ${userGuessResponse} and the result was ${data.result}`         
    } else{
        document.querySelector('h1').innerText = `YOU LOSE!!!! Your answer was ${userGuessResponse} and the response was ${data.result}.`
    }
    console.log('flip');
}
