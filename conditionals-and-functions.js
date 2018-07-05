
//declaring global variables

let storeA = 2.30;
let storeB = 4.30;


//creating a function
function CompareStorePrices(storeA, storeB) {

let storeAIsLower = storeA < storeB;
if (storeAIsLower){
	console.log("Store A has lower price. ")
}
else if (storeB <storeA){
	console.log("Store B has lower price. ")
}
else {
	console.log("Their price is equal.")
}
};
// invoking the function
CompareStorePrices(3, 3);

// creating array
let ourArray = [1, 2, 3, 4, 5];
//looping through the array
for (let i = 0; i < 5; i++){
	console.log(ourArray[i]);

}

