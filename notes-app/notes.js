//This helps us read and write onto another file
const { default: chalk } = require("chalk")
const fs = require("fs")


const addNote = function(title, body) {
    //Here we're storing the loaded data inside a variable nested inside our addNote function
    const notes = loadNotes()
    const duplicateNote = notes.find(function (note) {
        return note.title === title
    })

    if (!duplicateNote) {
    //We're pushing the arguments into our notes array
notes.push({
    title: title,
    body: body
})

//We're calling our function saveNotes and storing our array in the JSON file below
saveNotes(notes)
console.log(chalk.green.inverse("New note added"))
    } else {
        console.log(chalk.red.inverse("Note title taken"))
    }




}

const readNote = function (title) {
    const notes = loadNotes()
    const note = notes.find(function (note) {
       return note.title === title
    })

    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse("Note not found!"))
    }
}

//Here we're defining a function to save our notes into a JSON file
const saveNotes = function (notes) {
    //We turn our data into a string
    const dataJSON = JSON.stringify(notes)
    //We append it to a file named "notes.json" with the data as the second argument
    fs.writeFileSync("notes.json", dataJSON)

}

//We're defining a function where our data will load
const loadNotes = function () {
    //Below we're saying "Hey try and run this code, and if it doesn't work, catch the error and throw up an empty array"
    try {
        const dataBuffer = fs.readFileSync("notes.json"); //This line let's us read and write to our notes.json file
        const dataJSON = dataBuffer.toString(); //This line turns our data from binary into a string. Fun fact: if you add a - operator to the equal sign here, anything you write in the console will replace what's already in your json file
        return JSON.parse(dataJSON); //Here we're parsing the data into an object
    } catch (e) {
        return []
    }


}

//This function will remove notes
const removeNote = function (title) {
    const notes = loadNotes() 
        const keepNotes = notes.filter( function (note) {
            return note.title !== title
        })

        if(notes.length > keepNotes.length) {
            console.log(chalk.green.inverse("Note removed!"))
        } else {
            console.log(chalk.red.inverse("No Note Found!"))
        }

        saveNotes(keepNotes);
    
}

const listNotes = function () {
    const notes = loadNotes()
    console.log(chalk.inverse("Your notes!"))
    notes.forEach((note) => {
        console.log(note.title)
    })
}

//Below I'm exporting the values of all my functions to the app.js file
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}