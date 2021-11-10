const container = document.querySelector(".container");
container.addEventListener("click", function() {
    const numbers=[];
    let number=0;
    for (let i=0; i<5; i++){
        do {
            number=randomNumber(100);
        } while (numbers.includes(number));
        numbers.push(number);
    }
    container.innerHTML=numbers;
    setTimeout(function () {
        container.innerHTML="che numeri c'erano?";
        const rightGuesses = [];
        for (let i = 0; i<numbers.length; i++) {
            let guess = parseInt(prompt("inserisci numero"));
                if(numbers[i]===guess) {
                    rightGuesses.push(guess);
                } 
        }
        console.log(rightGuesses)
        container.innerHTML=`hai indovinato ${rightGuesses.length} numeri: ${rightGuesses}`;
    }, 30000);
})




function randomNumber(max) {
    return Math.floor(Math.random()*max);
}