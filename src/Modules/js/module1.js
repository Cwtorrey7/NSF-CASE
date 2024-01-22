let username = '\x1B[1;32mHuskyTerm@CASE\x1B[0m$';

const socket = new WebSocket("ws://localhost:3000");
var term = new window.Terminal({
    cursorBlink: true
});
term.open(document.getElementById('terminal'));

const commands = {
    'hello': 'Hello, world!',
    'date': new Date().toString(),
    // Add more custom commands here
};

let command = '';

function init() {
    if (term._initialized) {
        return;
    }

    term._initialized = true;

    term.prompt = () => {
        term.write('\r\n' + username + ' '); // Display the username and prompt
    };
    prompt(term);

    term.onData(e => {
        switch (e) {
            case '\u0003': // Ctrl+C
                term.write('^C');
                prompt(term);
                break;
            case '\r': // Enter
                runCommand(term, command);
                command = '';
                break;
            case '\u007F': // Backspace (DEL)
                if (command.length > 0) {
                    term.write('\b \b');
                    command = command.substr(0, command.length - 1);
                }
                break;
            case '\u0009':
                console.log('tabbed', output, ["dd", "ls"]);
                break;
            default:
                if (e >= String.fromCharCode(0x20) && e <= String.fromCharCode(0x7E) || e >= '\u00a0') {
                    command += e;
                    term.write(e);
                }
        }
    });
}

function clearInput(command) {
    var inputLength = command.length;
    for (var i = 0; i < inputLength; i++) {
        term.write('\b \b');
    }
}

function prompt(term) {
    command = '';
    term.write('\r\n' + username + ' '); // Display the username and prompt
}

socket.onmessage = (event) => {
    term.write(event.data);
}

function runCommand(term, command) {
    if (command.length > 0) {
        term.write('\r\n'); // New line spacing for entered command
        if (commands.hasOwnProperty(command)) {
            term.write(commands[command]); // Display the output of the command
        } else {
            term.write('Unrecognized command: ' + command); // Display an unrecognized command message
        }
        
        term.prompt(); // Display the prompt after command execution
        return;
    }
}

init();