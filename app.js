const iceCream = [{
  name: 'Cookie Dough',
  image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
  price: 1,
  quantity: 0
}, {
  name: 'Vanilla',
  image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
  price: 1,
  quantity: 0
}, {
  name: 'Strawberry',
  image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
  price: 2,
  quantity: 0
}];

const toppings = [{
  name: 'Sprinkles',
  image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
  price: 1,
  quantity: 0
}, {
  name: 'Chocolate Chips',
  image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
  price: 2,
  quantity: 0
}];

const containers = [{
  name: 'Waffle Cone',
  image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
  price: 2,
  quantity: 0
}, {
  name: 'Waffle Bowl',
  image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
  price: 4,
  quantity: 0
}]

// Elements by ID
// #region

// let cNameElem = document.getElementById("container-name")
// let cQtyElem = document.getElementById("container-quantity")
// let cUnitPriceElem = document.getElementById("container-price")
// let cTotalPriceElem = document.getElementById("container-total-price")

// let iNameElem = document.getElementById("ice-cream-name")
// let iQtyElem = document.getElementById("ice-cream-quantity")
// let iUnitPriceElem = document.getElementById("ice-cream-price")
// let iTotalPriceElem = document.getElementById("ice-cream-total-price")

// let tNameElem = document.getElementById("topping-name")
// let tQtyElem = document.getElementById("topping-quantity")
// let tUnitPriceElem = document.getElementById("topping-price")
// let tTotalPriceElem = document.getElementById("topping-total-price")

// #endregion

let cartTotal = 0
let cartItems = []
let cartTotalElem = document.getElementById("cart-total")
let cartElem = document.getElementById("insert-cart-here")


// TODO need to fix drawCart function. The items still duplicate. Look at Mick's addBurger and drawCart functions for reference.

// REVIEW Preventing the cart from duplicating existing items happened in the addItem function. Prevented that item from being added to the cartItems array to begin with, just a quantity and total price update.
function drawCart() {
  let template = ``
  cartItems.forEach(item => {
    template += `
      <div class="col-5">
            ${item.name}
            </div>
            <div class="col-2">
            ${item.quantity}
            </div>
            <div class="col-2">
            $${(item.price).toFixed(2)}
            </div>
            <div class="col-3">
            $${(item.price * item.quantity).toFixed(2)}
            </div>
            `

    console.log(template, "template");
    cartElem.innerHTML = template
    cartTotalElem.innerHTML = `<p>Cart Total: $${cartTotal}</p>`

  })
}

function addItem(list, name) {
  console.log(list, name, "addItem function");

  if (list === containers) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].quantity > 0) {
        window.alert("Oops! Only one container per creation, please.")
        return;
      }
    }
  }

  let chosenItem = list.find(i => i.name === name)
  chosenItem.quantity++
  cartTotal += chosenItem.price
  console.log(chosenItem);

  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].name === name) {
      drawCart()
      return
    }
  }
  // find chosenItem name in cartItems array
  // if there, drawCart and return since we don't need to push the full object into array again)
  // if not there, push the full item onto the array 
  cartItems.push(chosenItem)

  drawCart()
}

function checkout() {
  if (window.confirm("Are you ready to empty your cart and check out?")) {
    cartTotal = 0
    cartItems.forEach(i => i.quantity = 0)
    cartItems = []
    cartElem.innerHTML = ''
    cartTotalElem.innerHTML = `<p>Cart Total: $${cartTotal}</p>`
    window.alert("Thanks for stopping by!")
  }
}

    // old drawCart function for reference
    // #region
    // cNameElem.innerHTML = ''
    // cQtyElem.innerHTML = ''
    // cUnitPriceElem.innerHTML = ''
    // cTotalPriceElem.innerHTML = ''
    // iNameElem.innerHTML = ''
    // iQtyElem.innerHTML = ''
    // iUnitPriceElem.innerHTML = ''
    // iTotalPriceElem.innerHTML = ''
    // tNameElem.innerHTML = ''
    // tQtyElem.innerHTML = ''
    // tUnitPriceElem.innerHTML = ''
    // tTotalPriceElem.innerHTML = ''
    // let cTotal = 0
    // let iCTotal = 0
    // let tTotal = 0

    // containers.forEach(c => {
    //   if (c.quantity) {
    //     cTotal = (c.price * c.quantity)
    //     cNameElem.innerHTML += `<p>${c.name}</p>`
    //     cQtyElem.innerHTML += `<p>${c.quantity}</p>`
    //     cUnitPriceElem.innerHTML += `<p>$${c.price}</p>`
    //     cTotalPriceElem.innerHTML += `<p> $${(c.price * c.quantity).toFixed(2)}</p>`
    //   }
    // })

    // iceCream.forEach(i => {
    //   if (i.quantity) {
    //     iCTotal += (i.price * i.quantity)
    //     iNameElem.innerHTML += `<p>${i.name}</p>`
    //     iQtyElem.innerHTML += `<p>$${i.quantity}</p>`
    //     iUnitPriceElem.innerHTML += `<p>$${i.price}</p>`
    //     iTotalPriceElem.innerHTML += `<p> $${(i.price * i.quantity).toFixed(2)}</p>`
    //   }
    // })
    // toppings.forEach(t => {
    //   if (t.quantity) {
    //     tTotal += (t.price * t.quantity)
    //     tNameElem.innerHTML += `<p>${t.name}</p>`
    //     tQtyElem.innerHTML += `<p>${t.quantity}</p>`
    //     tUnitPriceElem.innerHTML += `<p>$${t.price}</p>`
    //     tTotalPriceElem.innerHTML += `<p> $${(t.price * t.quantity).toFixed(2)}</p>`
    //   }
    // })
    // cartTotalElem.innerHTML = `<p>Cart Total: $${cartTotal}</p>`
    // #endregion



    // function addContainer(name) {
    //   console.log(name, "has been added to your cart");
    //   let chosenItem = containers.find(c => c.name === name)
    //   chosenItem.quantity++
    //   cartTotal += chosenItem.price
    //   console.log(chosenItem);

    //   drawCart()
    // }

    // function addIceCream(name) {
    //   console.log(name, "has been added to your cart");
    //   let chosenItem = iceCream.find(i => i.name === name)
    //   chosenItem.quantity++
    //   cartTotal += chosenItem.price
    //   console.log(chosenItem)

    //   drawCart()
    // }

    // function addTopping(name) {
    //   console.log(name, "has been added to your cart");
    //   let chosenItem = toppings.find(t => t.name === name)
    //   chosenItem.quantity++
    //   cartTotal += chosenItem.price
    //   console.log(chosenItem);

    //   drawCart()
    // }


    // cNameElem.innerHTML = ''
    // cQtyElem.innerHTML = ''
    // cUnitPriceElem.innerHTML = ''
    // cTotalPriceElem.innerHTML = ''
    // iNameElem.innerHTML = ''
    // iQtyElem.innerHTML = ''
    // iUnitPriceElem.innerHTML = ''
    // iTotalPriceElem.innerHTML = ''
    // tNameElem.innerHTML = ''
    // tQtyElem.innerHTML = ''
    // tUnitPriceElem.innerHTML = ''
    // tTotalPriceElem.innerHTML = ''
