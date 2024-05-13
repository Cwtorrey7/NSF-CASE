/* 
  This is a simple python script for generating a moduleX.css file, based on the previously completed module1-6.css files
  This will be treated like a function abstraction with the changes between each module being imputs to the generation function
*/

const fs = require('fs')
const path = require('path')

/*
    Function: moduleCSSGeneration

    Description:
    This function generates a CSS file for a module based on the provided module number. It creates a new CSS file named module{modNum}.css in the specified directory. The function relies on a helper function generateCSS() to generate the CSS content.

    Parameters:
    - modNum: Number of the module for which CSS is being generated.

    Dependencies:
    - fs module for file system operations.
    - path module for working with file paths.

    Returns:
    This function does not return anything. It writes the generated CSS content to a file asynchronously.

    Note:
    Ensure that the appropriate directory structure is in place for the CSS file to be created.

    Example Usage:
    moduleCSSGeneration(1);
*/
function moduleCSSGeneration (modNum) {
    // get the absolute path from where the file is executed
    const cwd = process.cwd()

    // paths for the folder we're working with
    const relativePath = 'src/modgen/'
    const filepath = path.join(cwd, relativePath)

    // open new file using helper function generateHTML()
    fs.writeFile(`${filepath}module${modNum}.css`, generateCSS(), (err) => {
        if (err) {
            console.error('Error writing to css file: ', err)
            return
        }
    })
}

/*
    Function: generateCSS

    Description:
    This function generates CSS styles for a module. The CSS content includes styles for various elements such as animated background, body, headings, paragraphs, containers, buttons, links, scrollbars, etc. The styles are consistent across all modules.

    Dependencies:
    None

    Returns:
    A string containing CSS styles for module presentation.

    Note:
    The generated CSS content assumes a certain structure and styling conventions. Adjustments may be needed based on specific requirements.
*/
function generateCSS () {
    // all of the css files are the same, so all of this is a constant

    /* ~ ~ ~ START OF module's css file ~ ~ ~ */
    let cssContents = ''

    // Creating the Animated Background Styles
    cssContents += "/* Animated Background */\n"
    cssContents += "#animated-background {\n"
    cssContents += "\tposition: fixed;\n"
    cssContents += "\ttop: 0;\n"
    cssContents += "\tleft: 0;\n" 
    cssContents += "\twidth: 100vw;\n"
    cssContents += "\theight: 100vh;\n"
    cssContents += "\tz-index: -1;\n"
    cssContents += "\toverflow: hidden;\n"
    cssContents += "}\n"

    // Creating shared html, body styles
    cssContents += "\nhtml, body {\n"
    cssContents += "\tmargin: 0;\n"
    cssContents += "\tpadding: 0;\n"
    cssContents += "\toverflow-x: hidden;\n"
    cssContents += "}\n"

    // Creating body styles
    cssContents += "\n\nbody {\n"
    cssContents += "\tfont-family: \"Open Sans\", sans-serif; /* Primary Web Font */\n"
    cssContents += "\tmargin: 0;\n"
    cssContents += "\tpadding: 0;\n"
    cssContents += "\tbackground-color: #222;\n"
    cssContents += "\tcolor: white;\n"
    cssContents += "\toverflow: auto; /* Global Scroll Bar */\n"
    cssContents += "}\n"

    // Creating shared h1, h2, ..., h6 styles
    cssContents += "\nh1, h2, h3, h4, h5, h6 {\n"
    cssContents += "\tfont-family: \"Roboto\", sans-serif; /* Primary Font Family for headlines */\n"
    cssContents += "}\n"

    // Creating the blockquote
    cssContents += "\nblockquote {\n"
    cssContents += "\tfont-family: \"Georgia\", serif; /* Secondary Print and Web Font for blockquotes */\n"
    cssContents += "}\n"

    // Creating the Paragraph Styles
    cssContents += "\n/* Paragraph styles */\n"
    cssContents += "p {\n"
    cssContents += "\tfont-family: \"Open Sans\", sans-serif; /* Ensuring body copy uses Open Sans */\n"
    cssContents += "\tcolor: #fff;\n"
    cssContents += "\tline-height: 1.6; /* Adjust line height for readability */\n"
    cssContents += "}\n"

    // Creating Header 2 Styles
    cssContents += "\n/* Header 2 Style (Current Container Headers) */\n"
    cssContents += "h2 {\n"
    cssContents += "\tfont-family: \"Roboto\", sans-serif; /* Ensuring headlines use \"Roboto\" as Avenir Next is paid */\n"
    cssContents += "\tcolor: #ffd700;\n"
    cssContents += "\tfont-size: 2em;\n"
    cssContents += "\tfont-weight: bold;\n"
    cssContents += "}\n"

    // Creating blockquote styles
    cssContents += "\n/* Example of specific blockquote styles */\n"
    cssContents += "blockquote {\n"
    cssContents += "\tfont-family: \"Georgia\", serif;\n"
    cssContents += "\tcolor: #ccc;\n"
    cssContents += "\tborder-left: 4px solid #ffd700;\n"
    cssContents += "\tpadding-left: 20px;\n"
    cssContents += "\tfont-style: italic;\n"
    cssContents += "}\n"

    // Creating the main Container styles
    cssContents += "\n/* Main Container Styling */\n"
    cssContents += ".container {\n"
    cssContents += "\tdisplay: flex;\n"
    cssContents += "\tflex-direction: column;\n"
    cssContents += "\t/* height: 100vh; */\n"
    cssContents += "\t/* overflow: auto; */\n"
    cssContents += "}\n"

    // Creating the topContainer styles
    cssContents += "\n/* Top Container Styling */\n"
    cssContents += ".topContainer {\n"
    cssContents += "\tdisplay: flex;\n"
    cssContents += "\tpadding: 10px;\n"
    cssContents += "\t/* overflow: auto; */\n"
    cssContents += "\tflex-wrap: wrap;\n"
    cssContents += "}\n"

    // Creating the resizableContatiner Styles
    cssContents += "\n/* Resizable Container Styling */\n"
    cssContents += ".resizableContainer {\n"
    cssContents += "\t/* flex: 1; */\n"
    cssContents += "\tpadding: 10px;\n"
    cssContents += "\tmargin: 0 5px;\n"
    cssContents += "\t/* min-width: 150px;\n"
    cssContents += "\tmin-height: 150px; */\n"
    cssContents += "\tborder-radius: 8px;\n"
    cssContents += "\tbox-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n"
    cssContents += "\tresize: none;\n"
    cssContents += "\t/* overflow: auto; */\n"
    cssContents += "}\n"

    // Creating containers stylings
    cssContents += "\n/* Containers Specific Styling */\n"
    cssContents += "#questionFormContainer,\n"
    cssContents += "#narrativeContainer {\n"
    cssContents += "\twidth: calc(100% - 16px);\n"
    cssContents += "\theight: auto;\n"
    cssContents += "\tbackground-color: #333;\n"
    cssContents += "\tcolor: white;\n"
    cssContents += "\torder: 2px solid #ffd700;\n"
    cssContents += "\tborder-radius: 4px;\n"
    cssContents += "\tbox-sizing: border-box;\n"
    cssContents += "\tpadding: 8px;\n"
    cssContents += "\tresize: none;\n"
    cssContents += "\t/* overflow: auto; */\n"
    cssContents += "\tmargin: 0 10px;\n"
    cssContents += "}\n"

    cssContents += "\n/* Flexbox Layout for Radio Buttons and Checkboxes */\n"
    cssContents += ".question div {\n"
    cssContents += "\tdisplay: flex;\n"
    cssContents += "\talign-items: center;\n"
    cssContents += "\tmargin-bottom: 8px;\n"
    cssContents += "}\n"

    cssContents += "\n/* Adjustments to the container to prevent horizontal scrolling */\n"
    cssContents += "#questionFormContainer {\n"
    cssContents += "\toverflow-x: hidden;\n"
    cssContents += "}\n"

    cssContents += "\n#questionsContainer {\n"
    cssContents += "\tbackground-color: #444;\n"
    cssContents += "\tpadding: 10px;\n"
    cssContents += "\tborder-radius: 4px;\n"
    cssContents += "\tborder: 2px solid #ddd;\n"
    cssContents += "\tmargin-bottom: 10px;\n"
    cssContents += "}\n"

    cssContents += "\n/* Terminal Container Styling */\n"
    cssContents += "#terminalContainer {\n"
    cssContents += "\tdisplay: flex;\n"
    cssContents += "\tflex-direction: column;\n"
    cssContents += "\tflex: 1;\n"
    cssContents += "\tborder: 2px solid #ffd700;\n"
    cssContents += "\tbackground-color: #333;\n"
    cssContents += "\tborder-radius: 4px;\n"
    cssContents += "\tbox-sizing: border-box;\n"
    cssContents += "\tpadding: 8px;\n"
    cssContents += "\tmargin: 0 10px;\n"
    cssContents += "\twhite-space: pre-wrap;\n"
    cssContents += "\tword-break: break-word;\n"
    cssContents += "\toverflow-wrap: break-word;\n"
    cssContents += "\t/* overflow: auto; */\n"
    cssContents += "}\n"

    cssContents += "\n#terminalDescription {\n"
    cssContents += "\tbackground-color: #444;\n"
    cssContents += "\tpadding: 10px;\n"
    cssContents += "\tborder-radius: 4px;\n"
    cssContents += "\tborder: 2px solid #ddd;\n"
    cssContents += "\tmargin-bottom: 10px;\n"
    cssContents += "}\n"

    cssContents += "\n#terminal {\n"
    cssContents += "\tdisplay: flex;\n"
    cssContents += "\tflex-direction: column;\n"
    cssContents += "\tflex: 1;\n"
    cssContents += "\toverflow: auto;\n"
    cssContents += "}\n"

    cssContents += "\n.xterm {\n"
    cssContents += "\tborder: 2px solid #fff;\n"
    cssContents += "\tpadding-left: 6px;\n"
    cssContents += "\tpadding-right: 6px;\n"
    cssContents += "\theight: auto;\n"
    cssContents += "\twidth: auto;\n"
    cssContents += "}\n"

    cssContents += "\n#terminal, .xterm-viewport {\n"
    cssContents += "\twhite-space: nowrap !important;\n"
    cssContents += "\toverflow-x: auto !important;\n"
    cssContents += "}\n"

    cssContents += "\n/* Container Content Styling */\n"
    cssContents += ".containerContent {\n"
    cssContents += "\t/* margin-bottom: 20px; */\n"
    cssContents += "}\n"

    cssContents += "\n/* Result Message Styling */\n"
    cssContents += "#resultMessage {\n"
    cssContents += "\tdisplay: none;\n"
    cssContents += "\tfont-size: 18px;\n"
    cssContents += "\tfont-weight: bold;\n"
    cssContents += "\tcolor: white;\n"
    cssContents += "\tborder: 2px solid transparent;\n"
    cssContents += "\tborder-radius: 4px;\n"
    cssContents += "\tpadding: 10px;\n"
    cssContents += "\ttext-align: center;\n"
    cssContents += "\tmargin-top: 20px;\n"
    cssContents += "\ttransition: background-image 0.5s ease;\n"
    cssContents += "\tanimation: none;\n"
    cssContents += "}\n"

    cssContents += "\n/* Correct Result Message Styling */\n"
    cssContents += "#resultMessage.correct {\n"
    cssContents += "\tbackground: green;\n"
    cssContents += "\ttext-shadow: 0px 5px 15px rgba(0, 0, 0, 0.5);\n"
    cssContents += "\tcolor: white;\n"
    cssContents += "\ttext-shadow: 2px 2px 4px #000;\n"
    cssContents += "}\n"

    cssContents += "\n/* Incorrect Result Message Styling */\n"
    cssContents += "#resultMessage.incorrect {\n"
    cssContents += "\tbackground: #ff5733;\n"
    cssContents += "\ttext-shadow: 0px 5px 15px rgba(0, 0, 0, 0.5);\n"
    cssContents += "\tcolor: white;\n"
    cssContents += "\ttext-shadow: 2px 2px 4px #000;\n"
    cssContents += "}\n"

    cssContents += "\n/* Link styling */\n"
    cssContents += "a {\n"
    cssContents += "\tcolor: black;\n"
    cssContents += "}\n"
    cssContents += "a:hover {\n"
    cssContents += "\tcolor: #ffd700;\n"
    cssContents += "\ttext-decoration: none;\n"
    cssContents += "}\n"
 
    cssContents += "\n.sendCommandButton,\n"
    cssContents += ".submitQuestionsButton,\n"
    cssContents += ".returnButton {\n"
    cssContents += "\tfont-family: \"Arial\", sans-serif;\n"
    cssContents += "\tfont-weight: bolder;\n"
    cssContents += "\tbackground-color: #ffd700;\n"
    cssContents += "\tcolor: black;\n"
    cssContents += "\tpadding: 8px;\n"
    cssContents += "\tcursor: pointer;\n"
    cssContents += "\tborder: none;\n"
    cssContents += "\tborder-radius: 5px;\n"
    cssContents += "\ttransition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease,\n"
    cssContents += "\tbox-shadow 0.3s ease;\n"
    cssContents += "\tbox-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);\n"
    cssContents += "}\n"
 
    cssContents += "\n.sendCommandButton:hover,\n"
    cssContents += ".submitQuestionsButton:hover,\n"
    cssContents += ".returnButton:hover {\n"
    cssContents += "\tbackground-color: #555;\n"
    cssContents += "\tcolor: #ffd700;\n"
    cssContents += "\tbox-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);\n"
    cssContents += "\ttransform: translateY(-2px);\n"
    cssContents += "}\n"
 
    cssContents += "\n/* Global Scrollbar Styling */\n"
    cssContents += "body {\n"
    cssContents += "\tscrollbar-width: thin; /* For Firefox */\n"
    cssContents += "\tscrollbar-color: #ffd700 #333; /* For Firefox */\n"
    cssContents += "}\n"

    cssContents += "\n/* For Chrome, Edge, and Safari */\n"
    cssContents += "::-webkit-scrollbar {\n"
    cssContents += "\twidth: 12px; /* Width of the scrollbar */\n"
    cssContents += "}\n"

    cssContents += "\n::-webkit-scrollbar-track {\n"
    cssContents += "\tbackground-color: #333; /* Track color */\n"
    cssContents += "}\n"
 
    cssContents += "\n::-webkit-scrollbar-thumb {\n"
    cssContents += "\tbackground-color: #ffd700; /* Thumb color */\n"
    cssContents += "\tborder-radius: 10px; /* Rounded corners for the thumb */\n"
    cssContents += "\tborder: 3px solid #333; /* Optional: Adds some space between the thumb and the track */\n"
    cssContents += "}\n"
 
    cssContents += "\n::-webkit-scrollbar-thumb:hover {\n"
    cssContents += "\tbackground-color: #555; /* Thumb color on hover */\n"
    cssContents += "}\n"

    cssContents += "\n/* Scrollbar for .resizableContainer, #terminalContainer, #terminalOutput */\n"
    cssContents += ".resizableContainer::-webkit-scrollbar,\n"
    cssContents += "#terminalContainer::-webkit-scrollbar,\n"
    cssContents += "#terminalOutput::-webkit-scrollbar {\n"
    cssContents += "\t/* No need to duplicate the 'width' property if it's the same for all */\n"
    cssContents += "}\n"
 
    cssContents += "\n.resizableContainer::-webkit-scrollbar-track,\n"
    cssContents += "#terminalContainer::-webkit-scrollbar-track,\n"
    cssContents += "#terminalOutput::-webkit-scrollbar-track {\n"
    cssContents += "\t/* No need to duplicate the 'background-color' property if it's the same for all */\n"
    cssContents += "}\n"
 
    cssContents += "\n.resizableContainer::-webkit-scrollbar-thumb,\n"
    cssContents += "#terminalContainer::-webkit-scrollbar-thumb,\n"
    cssContents += "#terminalOutput::-webkit-scrollbar-thumb {\n"
    cssContents += "\t/* No need to duplicate the 'background-color' and 'border-radius' properties if they're the same for all */\n"
    cssContents += "}\n"

    cssContents += "\n.resizableContainer::-webkit-scrollbar-thumb:hover,\n"
    cssContents += "#terminalContainer::-webkit-scrollbar-thumb:hover,\n"
    cssContents += "#terminalOutput::-webkit-scrollbar-thumb:hover {\n"
    cssContents += "\t/* No need to duplicate the 'background-color' property if it's the same for all */\n"
    cssContents += "}\n"

    cssContents += "\n/* Specific styles for xterm */\n"
    cssContents += ".xterm .xterm-viewport::-webkit-scrollbar {\n"
    cssContents += "\t/* Specific styles for xterm scrollbar if different from above */\n"
    cssContents += "}\n"

    cssContents += "\n.xterm .xterm-viewport::-webkit-scrollbar-track {\n"
    cssContents += "\t/* Specific styles for xterm scrollbar track if different from above */\n"
    cssContents += "}\n"

    cssContents += "\n.xterm .xterm-viewport::-webkit-scrollbar-thumb {\n"
    cssContents += "\t/* Specific styles for xterm scrollbar thumb if different from above */\n"
    cssContents += "}\n"

    cssContents += "\n.xterm .xterm-viewport::-webkit-scrollbar-thumb:hover {\n"
    cssContents += "\t/* Specific styles for xterm scrollbar thumb hover if different from above */\n"
    cssContents += "}\n"

    /* ~ ~ ~ START OF module's css file ~ ~ ~ */

    // return the css contents
    return cssContents
}

module.exports = {moduleCSSGeneration}
