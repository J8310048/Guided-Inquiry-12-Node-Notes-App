console.log("utils.js")

const name = "Mike"

const add = function (a, b) {
    return a + b
}

module.exports = add;

//In node, the files have their own scopes (what's accessible). If you want your files to access other files' variables, then you use module.exports and type the variable or value you want exported. In the file importing the files' variables, you write require("./name of file.extension name")