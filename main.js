let cards_hider = document.querySelector(".hidden");
let right_head = document.querySelector(".right_col1");
let left_head = document.querySelector(".left_head");

//left small blue button
let Sbutton = document.querySelector(".ARback");
let SbuttonUnhide = document.querySelector(".amount_hiden ");
Sbutton.addEventListener('click', function() {
    Sbutton.classList.toggle("ARdown");
    SbuttonUnhide.classList.toggle("hide");

});



// right option1
let card = document.querySelector(".card1");
let new_cards = document.querySelector(".newCard");
card.addEventListener('click', NewCard);

function NewCard() {
    cards_hider.classList.add("hide");
    right_head.innerHTML = "NEW CARD"
    left_head.innerHTML = "Enter new card"
    new_cards.classList.remove("hide");
}



// right option2
let card2 = document.querySelector(".card2");
let EMI_cards = document.querySelector(".right_EMI_cards");
card2.addEventListener('click', NewCard2);

function NewCard2() {
    cards_hider.classList.add("hide");
    right_head.innerHTML = "CREDIT CARD EMI OPTIONS"
    left_head.innerHTML = "Choose a credit card EMI option"
    EMI_cards.classList.remove("hide");
}

// right option2.1
let card2_1 = document.querySelector(".right_EMI_cards_inner");
let EmiValue = document.querySelector(".EMI_INNER");
card2_1.addEventListener('click', function() {
    EmiValue.classList.remove("hide");
    right_head.innerHTML = "EMI WITH CREDIT CARD"
    left_head.innerHTML = "Choose a card or enter new"
    EMI_cards.classList.add("hide");
});




// right option3
let card3 = document.querySelector(".card3");
let wallet_cards = document.querySelector(".wallet");
card3.addEventListener('click', NewCard3);

function NewCard3() {
    cards_hider.classList.add("hide");
    right_head.innerHTML = "WALLETS"
    left_head.innerHTML = "Choose or search for a walletn"
    wallet_cards.classList.remove("hide");
}
// right option5
let card5 = document.querySelector(".card5");
let banks_cards = document.querySelector(".banks");
card5.addEventListener('click', NewCard5);

function NewCard5() {
    cards_hider.classList.add("hide");
    right_head.innerHTML = "BANKS"
    left_head.innerHTML = "Choose or search for a bank"
    banks_cards.classList.remove("hide");
}
// right option6
let card6 = document.querySelector(".card6");
let UPI_cards = document.querySelector(".UPI");
card6.addEventListener('click', NewCard6);

function NewCard6() {
    cards_hider.classList.add("hide");
    right_head.innerHTML = "BANKS"
    left_head.innerHTML = "Choose or search for a bank"
    UPI_cards.classList.remove("hide");
}













// back button
let Back = document.querySelector(".left_col1_back");

Back.addEventListener('click', GoBack);


function GoBack() {
    cards_hider.classList.remove("hide");
    right_head.innerHTML = "PAYMENT OPTIONS"
    left_head.innerHTML = "Choose a payment option"
    new_cards.classList.add("hide");
    EMI_cards.classList.add("hide");
    wallet_cards.classList.add("hide");
    banks_cards.classList.add("hide");
    UPI_cards.classList.add("hide");
    EmiValue.classList.add("hide");
}