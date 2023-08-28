//count to five
console.log("1")
console.log("2")
console.log("3")
console.log("4")
console.log("5")

console.log("First for loop")
//count to five using a for loop
for(let i = 1; i < 6; i++){
    //i 1 1< 6 -> true
    //i 2 2 < 6 -> true
    //i 3 3 < 6 -> true
    //i 4 4 < 6 -> true
    //i 5 5 < 6 -> true
    //i 6 6 < 6 -> false
    console.log(i)
}//when we hit this increment


//go through our list of groceries
// buy that grcoery at the story
let groceries = ['spagetti','oranges', 'dog food', 'apples']
//c.l (groceries[position_of_the_thing_I_want_toprint])
//index
console.log(groceries[0])//index 0
console.log(groceries[1])//index 1
console.log(groceries[2])//index 2
console.log(groceries[3])//index 3

console.log("second for loop", groceries.length)
//start at index 0, until i am at end of list, inc 1 each time
for(let index = 0; index < groceries.length; index++){
    //useful to see flow of program
    // debugger
    console.log("index", index, "buying", groceries[index])
    
}

//list of forms from customers that can have errors
let userForms = [
    {
        docFile: "CustomerForm.docx",
        errorsDetected: 5
    },
    {
        docFile: "CustomerFormsdfadf.docx",
        errorsDetected: 4
    },
    {
        docFile: "CustomerFormavee.docx",
        errorsDetected: 2
    },
    {
        docFile: "CustomerFormsdfadf.docx",
        errorsDetected: 0
    }
]

//make a for loop to process my forms if they have errors then resubmit their form
for(let index = 0; index < userForms.length; index++){
    debugger
    console.log("index", index, "processing", userForms[index])
    // if there are errors fix them and re-submit
    if(userForms[index].errorsDetected > 0){
        console.log("fixing", userForms[index])
        console.log("fixed, submitted form")
    }
}