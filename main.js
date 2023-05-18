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
    const res = await fetch('/api');
    const data = await res.json();
    if(userGuessResponse === data.result){
        document.querySelector('h1').innerText = `You Win guessed ${userGuessResponse} and the result was ${data.result}`         
    } else{
        document.querySelector('h1').innerText = `YOU LOSE!!!! Your answer was ${userGuessResponse} and the response was ${data.result}.`
    }
    console.log('flip');
}


// fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data.title)
//         if(!localStorage.getItem('books')){
//           localStorage.setItem('books', data.title)
//         }else {
//            let books = localStorage.getItem('books') + " : " + data.title
//             localStorage.setItem('books', books)
//         }
//         //put title into localStorage
//       //   let books = localStorage.getItem('books') + " : " + data.title
//       //   localStorage.setItem('books', books)
//       document.querySelector('h2').innerText = localStorage.getItem('books')
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });