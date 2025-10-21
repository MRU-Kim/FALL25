// array of items that were ordered
const orderItems = [
    { dishName: "Grilled Salmon with Herbs", dishAmount: 28.50 },
    { dishName: "Caesar Salad", dishAmount: 14.75 },
    { dishName: "Mushroom Risotto", dishAmount: 22.00 },
    { dishName: "Beef Tenderloin", dishAmount: 35.00 },
    { dishName: "Garlic Bread", dishAmount: 8.50 },
    { dishName: "Chocolate Lava Cake", dishAmount: 12.25 },
    { dishName: "House Red Wine", dishAmount: 18.00 },
    { dishName: "Sparkling Water", dishAmount: 4.50 }
];

const taxRate = prompt("Enter a tax percentage number");
let iTax = Number(taxRate);
if (!iTax) iTax = 0;
const tipRate = prompt("Enter a tip percentage number");
let iTip = Number(tipRate);
if (!iTip) iTip = 0;

console.log(iTax, iTip);

/* add code below this */

/* create function that calculates the subtotal, tax amount, tip amount, and total 
   and returns an object with the four calculated values */


/* create function that outputs a single order item */


/* create function that outputs all the order items */


/* create function that outputs a bill row */


/* create function that outputs all the bill rows */

