//To link to a file, use require(./)
//To link to a module, use the module name require("fs")
//To link to an npm package, use the npm name require("validator")
const chalk = require("chalk");
const yargs = require("yargs")
const validator = require("validator");
const notes = require("./notes.js"); //Here I'm importing my file notes.js and all its values

//customize yargs version
yargs.version("1.1.0")

//Create add command. Command helps add a command while also giving it a name. Describe is the decription of the command. Builder let's you list the optional changes you want to make to your notes. Handler gets the values of the console you typed in with your command.
yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note Title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Note Body",
            demandOption: true,
            type: "string"
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//Create remove command
yargs.command({
    command: "remove",
    describe: "Remove an existing note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title)
    }
})

//Create list command
yargs.command({
    command: "list",
    describe: "List all notes",
    handler: function () {
        notes.listNotes()
    }
})

//Create read command
yargs.command({
    command: "read",
    describe: "Read a note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        }
    },
    handler: function (argv) {
        notes.readNote(argv.title)
    }
})

//In the notes app, users will add, remove, read, and list their notes

yargs.parse();

