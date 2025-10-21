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
function billCalculations(orderArray, iTax, iTip) {
    let subtotal = 0;

    for (let i = 0; i < orderArray.length; i++) {
        subtotal += orderArray[i].dishAmount;
    }

    const taxAmount = subtotal * (iTax / 100);
    const tipAmount = subtotal * (iTip / 100);
    const total = subtotal + taxAmount + tipAmount;

    return {
        subtotal: subtotal,
        taxAmount: taxAmount,
        tipAmount: tipAmount,
        total: total
    };
}

/* create function that outputs a single order item */
function outputOrderItem(order) {
  document.write(`
    <div class="order-item">
      <span class="dish-name">${order.dishName}</span>
      <span class="dish-price">$${order.dishAmount.toFixed(2)}</span>
    </div>
  `);
}

/* create function that outputs all the order items */
function outputOrders(orderArray) {
    for (let i = 0; i < orderArray.length; i++) {
        outputOrderItem(orderArray[i]);
    }
}

/* create function that outputs a bill row */
function outputBillRow(label, value, cssClass = "") {
    document.write(`
        <div class="bill-row ${cssClass}">
        <span class="bill-label">${label}</span>
        <span class="bill-value">${value}</span>
        </div>
    `);
}

function outputBill(orderArray, billObj, iTax, iTip) {
    outputBillRow(`Items Ordered:`, `${orderArray.length} dishes`);
    outputBillRow(`Subtotal:`, `$${billObj.subtotal.toFixed(2)}`);
    outputBillRow(`Tax (${iTax}%):`, `$${billObj.taxAmount.toFixed(2)}`);
    outputBillRow(`Tip (${iTip}%):`, `$${billObj.tipAmount.toFixed(2)}`);
    outputBillRow(`Total:`, `$${billObj.total.toFixed(2)}`, "total");
}
/* create function that outputs all the bill rows */



const results = billCalculations(orderItems, iTax, iTip);
console.log(results);