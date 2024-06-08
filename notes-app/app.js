//To link to a file, use require(./)
//To link to a module, use the module name require("fs")
//To link to an npm package, use the npm name require("validator")
const chalk = require("chalk");
const yargs = require("yargs")
const validator = require("validator");
const notes = require("./notes.js");

//customize yargs version
yargs.version("1.1.0")

//Create add command
yargs.command({
    command: "add",
    describe: "Add a new note",
    handler: function () {
        console.log("Adding a new note!")
    }
})

//Create remove command
yargs.command({
    command: "remove",
    describe: "Remove an existing note",
    handler: function () {
        console.log("Removing the note!")
    }
})

//Create list command
yargs.command({
    command: "list",
    describe: "List all notes",
    handler: function () {
        console.log("Listing all notes!")
    }
})

//Create read command
yargs.command({
    command: "read",
    describe: "Read a note",
    handler: function () {
        console.log("Reading this note!")
    }
})

//In the notes app, users will add, remove, read, and list their notes

console.log(yargs.argv);

