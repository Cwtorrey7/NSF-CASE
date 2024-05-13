/*
  This is a simple javascript program for generating a moduleX.js file, based on the previously completed module1-6.js files
  This will be treated like a function abstraction with the changes between each module being imputs to the generation function
*/

// required libraries
const fs = require('fs')
const path = require('path')

/*
    Function: moduleJSGeneration

    Description:
    This function generates a JavaScript file for a specific module based on the provided module number. The generated JavaScript file contains code for initializing a terminal interface, handling user input, and sending commands to a server. The generated file is saved in the 'src/modgen' directory with the name 'module<modNum>.js'.

    Parameters:
    - modNum: The module number for which the JavaScript file is generated.

    Dependencies:
    - generateJS(): This function generates the JavaScript code for the terminal interface.

    Returns:
    This function does not return anything. It writes the generated JavaScript code to a file.

    Example Usage:
    moduleJSGeneration(1);
*/
function moduleJSGeneration (modNum) {
    // get the absolute path from where the file is executed
    const cwd = process.cwd()

    // paths for the folder we're working with
    const relativePath = 'src/modgen/'
    const filepath = path.join(cwd, relativePath)

    // open new file using helper function generateHTML()
    fs.writeFile(`${filepath}module${modNum}.js`, generateJS(), (err) => {
        if (err) {
            console.error('Error writing to js file: ', err)
            return
        }
    })
}

/*
    Function: generateJS

    Description:
    This function generates JavaScript code for initializing a terminal interface. The generated code includes settings for the terminal, event handling for user input, sending commands to a server, and displaying responses. The code assumes a specific terminal setup and interaction flow.

    Returns:
    A string containing JavaScript code for terminal initialization and interaction.

    Note:
    Adjustments may be needed based on specific requirements or server configurations.

*/
function generateJS() {
    // all of the js files are the same, so all of this is a constant

    /* ~ ~ ~ START OF module's js file ~ ~ ~ */

    // define username
    let jsContent = 'let username = \'\\x1B[1;33mHuskyTerm@CASE\\x1B[0m:$\';\n'

    // Define term(inal)
    jsContent += '\nvar term = new window.Terminal({\n'   // Adding a newline to front for formatting
    jsContent += '\tfontSize: 14,\n'
    jsContent += '\tcursorBlink: true,\n'
    jsContent += '\tconvertEol: true, // True if you want to convert newline characters to carriage return + newline\n'
    jsContent += '\twordWrap: true,\n'
    jsContent += '\ttheme: {\n'
    jsContent += "\t\tbackground: '#444',  // Set the background color\n"
    jsContent += "\t\tforeground: '#fff',  // Set the default foreground color\n"
    jsContent += "\t\tcursor: 'rgba(255,255,255,0.5)', // Set the cursor color\n"
    jsContent += "\t\tselection: 'rgba(255,255,255,0.3)'\n"
    jsContent += '\t}\n'
    jsContent += '});\n'

    // Instantiating FitAddon
    jsContent += "\n// Instantiate the FitAddon\n"
    jsContent += "const fitAddon = new FitAddon();\n"
    jsContent += "term.loadAddon(fitAddon);\n"
    jsContent += "\nterm.open(document.getElementById('terminal'));\n"
    
    jsContent += "\n// Call fit to adjust the terminal's size to the container\n"
    jsContent += "fitAddon.fit();\n"

    // Allow terminal resize
    jsContent += "\n// Optional: Adjust terminal size on window resize\n"
    jsContent += "window.addEventListener('resize', () => {\n"
    jsContent += "\tfitAddon.fit();\n"
    jsContent += "});\n"

    // Define custom commands (Currently this block is all commented in modules 1-6)
    jsContent += "\n// const commands = {\n"
    jsContent += "// \t'hello': 'Hello, world!',\n"
    jsContent += "// \t'date': new Date().toString(),\n"
    jsContent += "// \t// Add more custom commands here\n"
    jsContent += "// };\n"

    jsContent += "\nlet command = '';\n"

    // Define the initTeminal function
    jsContent += "\nfunction initTerminal() {\n"
    jsContent += "\tif (term._initialized) {\n"
    jsContent += "\t\treturn;\n"
    jsContent += "\t}\n"

    jsContent += "\n\tterm._initialized = true;\n"

    jsContent += "\n\tterm.prompt = () => {\n"
    jsContent += "\t\tterm.write('\\r\\n' + username + ' '); // Display the username and prompt\n"
    jsContent += "\t\tterm.scrollToBottom(); // Scroll to the bottom to ensure the prompt is visible\n"
    jsContent += "\t};\n"
    jsContent += "\tprompt(term);\n"

    jsContent += "\n\tterm.onData(e => {\n"
    jsContent += "\t\tswitch (e) {\n"

    // Case Ctrl+C
    jsContent += "\t\t\tcase '\\u0003': // Ctrl+C\n"
    jsContent += "\t\t\t\tterm.write('^C');\n"
    jsContent += "\t\t\t\tprompt(term);\n"
    jsContent += "\t\t\t\tbreak;\n"

    // Case Enter
    jsContent += "\t\t\tcase '\\r': // Enter\n"
    jsContent += "\t\t\t\t// Send command to the server\n"
    jsContent += "\t\t\t\tsendCommandToServer(command);\n"
    jsContent += "\t\t\t\tcommand = '';\n"
    jsContent += "\t\t\t\tbreak;\n"

    // Case Backspace
    jsContent += "\t\t\tcase '\\u007F': // Backspace (DEL)\n"
    jsContent += "\t\t\t\tif (command.length > 0) {\n"
    jsContent += "\t\t\t\t\tterm.write('\\b \\b');\n"
    jsContent += "\t\t\t\t\tcommand = command.substr(0, command.length - 1);\n"
    jsContent += "\t\t\t\t}\n"
    jsContent += "\t\t\t\tbreak;\n"

    // Case Default
    jsContent += "\t\t\tdefault:\n"
    jsContent += "\t\t\t\tif (e >= String.fromCharCode(0x20) && e <= String.fromCharCode(0x7E) || e >= '\u00a0') {\n"
    jsContent += "\t\t\t\t\tcommand += e;\n"
    jsContent += "\t\t\t\t\tterm.write(e);\n"
    jsContent += "\t\t\t\t}\n"

    jsContent += "\t\t}\n"
    jsContent += "\t});\n"
    jsContent += "}\n"

    // Define prompt
    jsContent += "\nfunction prompt(term) {\n"
    jsContent += "\tcommand = '';\n"
    jsContent += "\tterm.write('\\r\\n' + username + ' '); // Display the username and prompt\n"
    jsContent += "}\n"

    // Define sendCommandToServer
    jsContent += "\nfunction sendCommandToServer(command) {\n"
    jsContent += "\tfetch('http://localhost:3000/execute-command', { // Adjust the endpoint as needed\n"
    jsContent += "\t\tmethod: 'POST',\n"
    jsContent += "\t\theaders: {\n"
    jsContent += "\t\t\t'Content-Type': 'application/json',\n"
    jsContent += "\t\t},\n"
    jsContent += "\t\tbody: JSON.stringify({ command: command }),\n"
    jsContent += "\t})\n"
    jsContent += "\t.then(response => response.text())\n"
    jsContent += "\t.then(data => {\n"
    jsContent += "\t\tterm.write('\\r\\n' + data); // Display the response from the server\n"
    jsContent += "\t\tterm.prompt(); // Display the prompt after command execution\n"
    jsContent += "\t\tterm.scrollToBottom(); // Ensure the prompt is visible after executing the command\n"
    jsContent += "\t})\n"
    jsContent += "\t.catch((error) => {\n"
    jsContent += "\t\tconsole.error('Error:', error);\n"
    jsContent += "\t});\n"
    jsContent += "}\n"

    // initialize the terminal
    jsContent += "\ninitTerminal();\n"

    /* ~ ~ ~ END OF module's js file ~ ~ ~ */

    // return the js contents
    return jsContent;
}

module.exports = {moduleJSGeneration}