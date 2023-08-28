let groceries = ['spagetti','oranges']

//Are there apples in my list?
if(groceries.includes('apples')){
    console.log("I remembered to buy the apples")
}
//if not add them to my list
// my first if statement was false
else{
    console.log("adding apples to the list")
    groceries.push("apples")
}

let currentPage = '/asdnfoisdjoijsdoifjsdoiufjsdoifjoiusdjfoisdjfoijdfoijsf'
let isUserLoggedIn = false;
//if the user is on profile page ask them to login
if(currentPage === '/profile' && isUserLoggedIn === false) {
    console.log("Please login")
    console.log("thanks for logging in")
    console.log("Now buy something cool from our store")
}
// if the user is on cart page ask them to input credit card
else if (currentPage === '/cart'){
    console.log("Input your credit card")
}
// if the user is on any other page
else {
    console.log("We don't recognize that page try going to the homepage")
}

console.log("now using switch case")
//use a switch case to do the same thing
switch(currentPage){
    case '/profile':{
        console.log('Please login')
    }
    case '/cart':{
        console.log('Input your credit card')
    }
    //anything else doesn't match go here
    default: {
        console.log("We don't recognize that page try going to the homepage")
    }
}