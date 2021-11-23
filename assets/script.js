// First, tell us your name
let yourName = "Amanda Strong" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let total = 0 // Total Votes

let gbVote = localStorage.getItem('gbVotes');
if (gbVote === null){
    gbVote = 0;
} else {
    gbVote = parseInt(gbVote)
}
document.querySelector("#qty-gb").textContent = gbVote;


let ccVote = localStorage.getItem('ccVotes');
if (ccVote === null){
    ccVote = 0;
} else {
    ccVote = parseInt(ccVote)
}
document.querySelector("#qty-cc").textContent = ccVote;

let sugarVote = localStorage.getItem('sugarVote');
if (sugarVote === null){
    sugarVote = 0;
} else {
    sugarVote = parseInt(sugarVote)
}
document.querySelector("#qty-sugar").textContent = sugarVote;


// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`






document.getElementById('minus-gb').addEventListener('click', function() {
    gbVote = gbVote - 1;
    console.log(gbVote)
    document.querySelector("#qty-gb").textContent = gbVote;
    localStorage.setItem('gbVote', gbVote)

    document.querySelector("#qty-total").textContent = gbVote + ccVote + sugarVote;
})
document.getElementById('add-gb').addEventListener('click', function() {
    gbVote = gbVote + 1;
    console.log(gbVote)
    document.querySelector("#qty-gb").textContent = gbVote;
    localStorage.setItem('gbVote', gbVote)

    document.querySelector("#qty-total").textContent = gbVote + ccVote + sugarVote;
})



document.getElementById('minus-cc').addEventListener('click', function() {
    ccVote = ccVote - 1;
    console.log(ccVote)
    document.querySelector("#qty-cc").textContent = ccVote;
    localStorage.setItem('ccVote', ccVote)

    document.querySelector("#qty-total").textContent = gbVote + ccVote + sugarVote;
})
document.getElementById('add-cc').addEventListener('click', function() {
    ccVote = ccVote + 1;
    console.log(ccVote)
    document.querySelector("#qty-cc").textContent = ccVote;
    localStorage.setItem('ccVote', ccVote)

    document.querySelector("#qty-total").textContent = gbVote + ccVote + sugarVote;
})



document.getElementById('minus-sugar').addEventListener('click', function() {
    sugarVote = sugarVote - 1;
    console.log(sugarVote)
    document.querySelector("#qty-sugar").textContent = sugarVote;
    localStorage.setItem('sugarVote', sugarVote)

    document.querySelector("#qty-total").textContent = gbVote + ccVote + sugarVote;
})
document.getElementById('add-sugar').addEventListener('click', function() {
    sugarVote = sugarVote + 1;
    console.log(sugarVote)
    document.querySelector("#qty-sugar").textContent = sugarVote;
    localStorage.setItem('sugarVote', sugarVote)

    document.querySelector("#qty-total").textContent = gbVote + ccVote + sugarVote;
})

