let cart = [];

function addToCart(name, price){
    cart.push({name, price});
    alert(name + " added to cart!");
}

function viewCart(){
    let total = 0;
    let message = "Your Cart:\n\n";

    cart.forEach(item=>{
        message += item.name + " - €" + item.price + "\n";
        total += item.price;
    });

    message += "\nTotal: €" + total;
    alert(message);
}

function searchMenu(){
    let input = document.getElementById("search").value.toLowerCase();
    let cards = document.querySelectorAll(".card");

    cards.forEach(card=>{
        let text = card.innerText.toLowerCase();
        if(text.includes(input)){
            card.style.display="block";
        } else {
            card.style.display="none";
        }
    });
}