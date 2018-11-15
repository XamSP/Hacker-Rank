function bonAppetit(bill, k, b) {
    let totalBill = 0;
    let undesiredPlateCost = 0;
    
    for (let i = 0; i < bill.length; i++) {
        if(i === k){
            undesiredPlateCost = bill[i];
        } else {
            totalBill +=bill[i]
        }
    }
    
    if (b === totalBill /2) {
        console.log("Bon Appetit")
    } else {
        console.log(b - totalBill /2)
    }
    
}

bonAppetit([ 3, 10, 2, 9 ], 1, 12)