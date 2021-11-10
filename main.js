const container = document.querySelector(".container");
container.addEventListener("click", function() {
    const numbers=[];
    for (let i=0; i<5; i++){
        numbers.push(randomNumber(100));
    }
    container.innerHTML=numbers;
    setTimeout(function (numbers) {
    
        const rightGuesses = [];
        for (let i = 0; i<numbers.length; i++) {
            let guess = prompt("inserisci numero")
            if(numbers[i].includes(guess,start)) {
                rightGuesses.push(guess);
            }
            
        }
        container.innerHTML=`hai indovinato ${rightGuesses.length} numeri: ${rightGuesses}`;
    }, 30000);
})




function randomNumber(max) {
    return Math.floor(Math.random()*max);
}