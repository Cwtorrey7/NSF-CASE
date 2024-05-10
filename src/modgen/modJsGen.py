"""
  This is a simple python script for generating a moduleX.js file, based on the previously completed module1-6.js files
  This will be treated like a function abstraction with the changes between each module being imputs to the generation function
  The inputs of the function modgen() are:
      modNum # This is the number for which module this is. This is only used when creating the file...
"""
import os

def modJsGen(modNum):
    #print(f"I recieve the modNum value: {modNum}")

    # Python likes absolute paths... so this is a proxy to create a relative path for opening the moduleX.html
    cwd = os.getcwd()
    relative = "\\src\\modgen\\" # cwd should put us at simply ""...\NSF_CASE" (when the script is ran from terminal), so we need to adjust to our desired directory from there
    filePath = cwd + relative # Simply join cwd and relative to create the absolute path to the directory we want the file created in

    global f # Made global for helper methods
    f = open(f"{filePath}module{modNum}.js", "w") # Open (and create if doesn't exist) the module's js file in the directory passed from filePath
    
    # This below is constant in all

    # Define username
    writeLn("let username = \'\\x1B[1;33mHuskyTerm@CASE\\x1B[0m:$\';")

    #Define term(inal)
    writeLn("\nvar term = new window.Terminal({") # Adding a newline to front for formatting
    writeLn("\tfontSize: 14,")
    writeLn("\tcursorBlink: true,")
    writeLn("\tconvertEol: true, // True if you want to convert newline characters to carriage return + newline")
    writeLn("\twordWrap: true,")
    writeLn("\ttheme: {")
    writeLn("\t\tbackground: '#444',  // Set the background color")
    writeLn("\t\tforeground: '#fff',  // Set the default foreground color")
    writeLn("\t\tcursor: 'rgba(255,255,255,0.5)', // Set the cursor color")
    writeLn("\t\tselection: 'rgba(255,255,255,0.3)'")
    writeLn("\t}")
    writeLn("});")

    # Instantiating FitAddon
    writeLn("\n// Instantiate the FitAddon")
    writeLn("const fitAddon = new FitAddon();")
    writeLn("term.loadAddon(fitAddon);")
    writeLn("\nterm.open(document.getElementById('terminal'));")

    writeLn("\n// Call fit to adjust the terminal's size to the container")
    writeLn("fitAddon.fit();")

    # Allow terminal resize
    writeLn("\n// Optional: Adjust terminal size on window resize")
    writeLn("window.addEventListener('resize', () => {")
    writeLn("\tfitAddon.fit();")
    writeLn("});")

    # Define custom commands (Currently this block is all commented in modules 1-6)
    writeLn("\n// const commands = {")
    writeLn("// \t'hello': 'Hello, world!',")
    writeLn("// \t'date': new Date().toString(),")
    writeLn("// \t// Add more custom commands here")
    writeLn("// };")

    writeLn("\nlet command = '';")

    # Define the initTeminal function
    writeLn("\nfunction initTerminal() {")
    writeLn("\tif (term._initialized) {")
    writeLn("\t\treturn;")
    writeLn("\t}")

    writeLn("\n\tterm._initialized = true;")
  
    writeLn("\n\tterm.prompt = () => {")
    writeLn("\t\tterm.write('\\r\\n' + username + ' '); // Display the username and prompt")
    writeLn("\t\tterm.scrollToBottom(); // Scroll to the bottom to ensure the prompt is visible")
    writeLn("\t};")
    writeLn("\tprompt(term);")

    writeLn("\n\tterm.onData(e => {")
    writeLn("\t\tswitch (e) {")

    # Case Ctrl+C
    writeLn("\t\t\tcase '\\u0003': // Ctrl+C")
    writeLn("\t\t\t\tterm.write('^C');")
    writeLn("\t\t\t\tprompt(term);")
    writeLn("\t\t\t\tbreak;")

    # Case Enter
    writeLn("\t\t\tcase '\\r': // Enter")
    writeLn("\t\t\t\t// Send command to the server")
    writeLn("\t\t\t\tsendCommandToServer(command);")
    writeLn("\t\t\t\tcommand = '';")
    writeLn("\t\t\t\tbreak;")

    # Case Backspace
    writeLn("\t\t\tcase '\\u007F': // Backspace (DEL)")
    writeLn("\t\t\t\tif (command.length > 0) {")
    writeLn("\t\t\t\t\tterm.write('\\b \\b');")
    writeLn("\t\t\t\t\tcommand = command.substr(0, command.length - 1);")
    writeLn("\t\t\t\t}")
    writeLn("\t\t\t\tbreak;")

    # Case Default
    writeLn("\t\t\tdefault:")
    writeLn("\t\t\t\tif (e >= String.fromCharCode(0x20) && e <= String.fromCharCode(0x7E) || e >= '\u00a0') {")
    writeLn("\t\t\t\t\tcommand += e;")
    writeLn("\t\t\t\t\tterm.write(e);")
    writeLn("\t\t\t\t}")

    writeLn("\t\t}")
    writeLn("\t});")
    writeLn("}")

    # Define prompt
    writeLn("\nfunction prompt(term) {")
    writeLn("\tcommand = '';")
    writeLn("\tterm.write('\\r\\n' + username + ' '); // Display the username and prompt")
    writeLn("}")

    # Define sendCommandtoServer
    writeLn("\nfunction sendCommandToServer(command) {")
    writeLn("\tfetch('http://localhost:3000/execute-command', { // Adjust the endpoint as needed")
    writeLn("\t\tmethod: 'POST',")
    writeLn("\t\theaders: {")
    writeLn("\t\t\t'Content-Type': 'application/json',")
    writeLn("\t\t},")
    writeLn("\t\tbody: JSON.stringify({ command: command }),")
    writeLn("\t})")
    writeLn("\t.then(response => response.text())")
    writeLn("\t.then(data => {")
    writeLn("\t\tterm.write('\\r\\n' + data); // Display the response from the server")
    writeLn("\t\tterm.prompt(); // Display the prompt after command execution")
    writeLn("\t\tterm.scrollToBottom(); // Ensure the prompt is visible after executing the command")
    writeLn("\t})")
    writeLn("\t.catch((error) => {")
    writeLn("\t\tconsole.error('Error:', error);")
    writeLn("\t});")
    writeLn("}")

    # Initialize the terminal
    writeLn("\ninitTerminal();")

# Helper method simply to write the given text to f and add a newline
def writeLn(text):
    f.write(f"{text}\n")

# modJsGen("X")