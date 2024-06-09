const fs = require("fs")
// const book = {
//     title: "Ego is the enemy",
//     author: "Ryan Holiday"
// }

//JSON.stringify turns javascript objects into JSON strings
// const bookJSON = JSON.stringify(book)
// console.log(bookJSON);
//fs.writeFileSync is used to create a new files if they don't exist, or edit current files 
// fs.writeFileSync("1-json.json", bookJSON);


//JSON.parse turns JSON strings into javascript objects
// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData.author)

//Remember that JSON.stringify and JSON.parse are two sides to the same one coin. And you'll be using that one coin when working with JSON files.

//fs.readFileSync lets us read a file and pass one argument into it. But what happens is it will return the file as binary data/bits and not an object. If you console.log dataBuffer, you'll see all the binary data the file has.
// const dataBuffer = fs.readFileSync("1-json.json")
// const dataJSON = dataBuffer.toString() //we're turning our JSON file into a string
// const data = JSON.parse(dataJSON); //And then we turn it into an object

// console.log(data.title); //we then accessed a property from our object

const dataBuffer = fs.readFileSync("1-json.json")
// const str = dataBuffer.toString()//I'm not sure if this is a Javascript string or a JSON string? Is there a difference or is it the same thing??? Does toString() turn objects into Javascript strings and JSON.stringigy() turns it into a JSON string? The outputs are different.
// console.log(str); 


const JSONparse = JSON.parse(dataBuffer)
JSONparse.name = "Joshua"
JSONparse.age = 26
const JSONString = JSON.stringify(JSONparse);
fs.writeFileSync("1-json.json", JSONString)