let menu = new Map();

let salads = new Map();

let mainDishes = new Map();

let desserts = new Map();

let drinks = new Map();

salads.set('Greek Salad', 5.99)
      .set('Caesar Salad', 7.99);

mainDishes.set('Margherita Pizza', 12.50)
          .set('Tomato Soup', 6.99)
          .set('Burger', 10.00);

desserts.set('Cheescake', 4.99)
        .set('Chocolate Ice-Cream', 2.50)
        .set('Fruit Salad', 3.99);

drinks.set('Lemonate', 3.20)
      .set('Green Tea', 1.50)
      .set('Coffe', 1.99);

menu.set('Salads', salads)
    .set('Main Dishes', mainDishes)
    .set('Desserts', desserts)
    .set('Drinks', drinks);



    

const menuContent = document.querySelector('.menu-inner');

drawMenu()

function drawMenu(){
    for (const item of menu) {
        menuContent.insertAdjacentHTML('afterbegin', `
            <div class='header'>
                <h1 class='headness'>${item[0]}</h1>
                <span></span>
                <div class='prod' id='${item[0]}'></div>
            </div>
        `)
    }

    let sal = document.getElementById('Salads')
    let dess = document.getElementById('Desserts')
    let main = document.getElementById('Main Dishes')
    let drink = document.getElementById('Drinks')
    let header = document.querySelectorAll('.headness');


    for(let item of menu.get('Salads')){
        sal.insertAdjacentHTML('beforeend', `<div id='price'><p>${item[0]}</p><p>$${item[1]}</p></div>`)
    }

    for(let item of menu.get('Main Dishes')){
        main.insertAdjacentHTML('beforeend', `<div id='price'><p>${item[0]}</p><p>$${item[1]}</p></div>`)
    }

    for(let item of menu.get('Desserts')){
        dess.insertAdjacentHTML('beforeend', `<div id='price'><p>${item[0]}</p><p>$${item[1]}</p></div>`)
    }

    for(let item of menu.get('Drinks')){
        drink.insertAdjacentHTML('beforeend', `<div id='price'><p>${item[0]}</p><p>$${item[1]}</p></div>`)
    }
    
}