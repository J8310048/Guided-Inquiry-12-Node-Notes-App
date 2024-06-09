# Guided-Inquiry-12-Node-Notes-App

### This repository contains the Notes App that was built while watching sections 3-5.

To use the app, type these commands in the console then navigate to notes.json file to see the changes:

For adding notes:

- node app.js add --title="title name" --body="body name"

For reading notes:

- node app.js read --title="title name"

For removing notes:

- node app.js remove --title="title name"

For listing notes:

- node app.js list

If you type invalid entires, you will get error messages in the console.

(e. g. node app.js read --title="Shopping List"

Message: Note not Found!) Because the note does not exist
