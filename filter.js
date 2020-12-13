

let itemBtn = document.querySelectorAll(".itembtn");
let itemContainer = document.querySelector(".itemcontainer");
let items = document.querySelectorAll(".imgcontainer");
let cakeItems = document.querySelectorAll(".cake_img");
let cupcakeItems = document.querySelectorAll(".cupcake_img");
let sweetItems = document.querySelectorAll(".swt_img");

let i = 0;
console.log();

let cakesBtn = document.querySelector(".cakes") ;
cakesBtn.addEventListener('click', () => {
    console.log("hey") ;
   cupcakeItems.style.display = "none";
})
