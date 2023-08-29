console.log("our first function")

//tell js to make a function named makeFrozenPizza
//has no input in (), steps are in {}
function makeFrozenPizza(){
    console.log("Making pizza")
    console.log("Preheat oven 400F")
    console.log("Take pizza out of wrapper")
    console.log("Put pizza on tray")
    console.log("Put pizza tray in oven")
    console.log("Pizza is done")
}

function makeMeatloaf(){
    console.log("Making meatloaf")
    console.log("Preheat oven 450F")
    console.log("Put frozen meatloaf on tray")
    console.log("Put tray in oven")
    console.log("Meatloaf is done")
}
//printing the function prints the definition
console.log(makeFrozenPizza)
console.log(makeMeatloaf)

//invoking will use the recipe
makeFrozenPizza()
makeMeatloaf()


function makeCookies(){
    console.log("Ask grandma nicely :) ")
}
makeCookies()



///make me a function to make pb and j with 4 steps
function makePBAndJ(){
    console.log("bread")
    console.log("spread PB")
    console.log("jelly")
    console.log("combine")
}
//use my function
makePBAndJ()



//make scan clothing function
//scan clothing item
//put clothing item in bag
// debugger

function scanClothing(clothingItem){
    console.log("Scan", clothingItem)
    console.log("put", clothingItem, "in bag")
}

scanClothing("pants")
scanClothing("shirt")

//function to return guests
function getGuestList(){
    return ["John", "CJay", "Zachary", "Melanie", "Thomas","Tyler"]
}

function greetGuest(guestName){
    console.log('Welcome ', guestName)
}

// greetGuest("Zachary")

let guests = getGuestList()
//go through our list of guests
for(let i =0; i < guests.length; i++){
	greetGuest(guests[i]) 
}

//multiple inputs / ingredients
function makeSandWichV2(bread, PB, jelly, isToasted){
    console.log(bread)
    console.log(PB)
    console.log(jelly)
    if (isToasted){
        console.log("Put in toaster")
    }
}

//use that sandwhich function
makeSandWichV2("Wheat bread", "Crunchy PB", "Grape jelly", false)
makeSandWichV2("Rye bread", "Creamy PB", "Strawberry jelly", true)

debugger
//return data / output
function add(a, b){
console.log("adding", a, b)
   return a + b
}

console.log(add(add(2,4), 8))


function multiply(a, b){
    return a * b
}

console.log(multiply(7, 3))