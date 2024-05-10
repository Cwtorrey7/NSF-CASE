"""
  This is a simple python script for generating a moduleX.css file, based on the previously completed module1-6.css files
  This will be treated like a function abstraction with the changes between each module being imputs to the generation function
  The inputs of the function modgen() are:
      modNum # This is the number for which module this is. This is only used when creating the file...
"""
import os

def modCssGen(modNum):
    #print(f"I recieve the modNum value: {modNum}")

    # Python likes absolute paths... so this is a proxy to create a relative path for opening the moduleX.html
    cwd = os.getcwd()
    relative = "/src/modgen/" # cwd should put us at simply "".../NSF_CASE" (when the script is ran from terminal), so we need to adjust to our desired directory from there
    filePath = cwd + relative # Simply join cwd and relative to create the absolute path to the directory we want the file created in

    global f # Made global for helper methods
    f = open(f"{filePath}module{modNum}.css", "w") # Open (and create if doesn't exist) the module's js file in the directory passed from filePath

    # This below is constant in all

    # Creating the Animated Background Styles
    writeLn("/* Animated Background */")
    writeLn("#animated-background {")
    writeLn("\tposition: fixed;")
    writeLn("\ttop: 0;")
    writeLn("\tleft: 0;")
    writeLn("\twidth: 100vw;")
    writeLn("\theight: 100vh;")
    writeLn("\tz-index: -1;")
    writeLn("\toverflow: hidden;")
    writeLn("}")

    # Creating shared html, body styles
    writeLn("\nhtml, body {")
    writeLn("\tmargin: 0;")
    writeLn("\tpadding: 0;")
    writeLn("\toverflow-x: hidden;")
    writeLn("}")

    # Creating body styles
    writeLn("\n\nbody {")
    writeLn("\tfont-family: \"Open Sans\", sans-serif; /* Primary Web Font */")
    writeLn("\tmargin: 0;")
    writeLn("\tpadding: 0;")
    writeLn("\tbackground-color: #222;")
    writeLn("\tcolor: white;")
    writeLn("\toverflow: auto; /* Global Scroll Bar */")
    writeLn("}")

    # Creating shared h1, h2, ..., h6 styles
    writeLn("\nh1, h2, h3, h4, h5, h6 {")
    writeLn("\tfont-family: \"Roboto\", sans-serif; /* Primary Font Family for headlines */")
    writeLn("}")

    # Creating the blockquote
    writeLn("\nblockquote {")
    writeLn("\tfont-family: \"Georgia\", serif; /* Secondary Print and Web Font for blockquotes */")
    writeLn("}")

    # Creating the Paragraph Styles
    writeLn("\n/* Paragraph styles */")
    writeLn("p {")
    writeLn("\tfont-family: \"Open Sans\", sans-serif; /* Ensuring body copy uses Open Sans */")
    writeLn("\tcolor: #fff;")
    writeLn("\tline-height: 1.6; /* Adjust line height for readability */")
    writeLn("}")

    # Creating Header 2 Styles
    writeLn("\n/* Header 2 Style (Current Container Headers) */")
    writeLn("h2 {")
    writeLn("\tfont-family: \"Roboto\", sans-serif; /* Ensuring headlines use \"Roboto\" as Avenir Next is paid */")
    writeLn("\tcolor: #ffd700;")
    writeLn("\tfont-size: 2em;")
    writeLn("\tfont-weight: bold;")
    writeLn("}")

    # Creating blockquote styles
    writeLn("\n/* Example of specific blockquote styles */")
    writeLn("blockquote {")
    writeLn("\tfont-family: \"Georgia\", serif;")
    writeLn("\tcolor: #ccc;")
    writeLn("\tborder-left: 4px solid #ffd700;")
    writeLn("\tpadding-left: 20px;")
    writeLn("\tfont-style: italic;")
    writeLn("}")

    # Creating the main Container styles
    writeLn("\n/* Main Container Styling */")
    writeLn(".container {")
    writeLn("\tdisplay: flex;")
    writeLn("\tflex-direction: column;")
    writeLn("\t/* height: 100vh; */")
    writeLn("\t/* overflow: auto; */")
    writeLn("}")

    # Creating the topContainer styles
    writeLn("\n/* Top Container Styling */")
    writeLn(".topContainer {")
    writeLn("\tdisplay: flex;")
    writeLn("\tpadding: 10px;")
    writeLn("\t/* overflow: auto; */")
    writeLn("\tflex-wrap: wrap;")
    writeLn("}")

    # Creating the resizableContatiner Styles
    writeLn("\n/* Resizable Container Styling */")
    writeLn(".resizableContainer {")
    writeLn("\t/* flex: 1; */")
    writeLn("\tpadding: 10px;")
    writeLn("\tmargin: 0 5px;")
    writeLn("\t/* min-width: 150px;")
    writeLn("\tmin-height: 150px; */")
    writeLn("\tborder-radius: 8px;")
    writeLn("\tbox-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);")
    writeLn("\tresize: none;")
    writeLn("\t/* overflow: auto; */")
    writeLn("}")

    # Creating containers stylings
    writeLn("\n/* Containers Specific Styling */")
    writeLn("#questionFormContainer,")
    writeLn("#narrativeContainer {")
    writeLn("\twidth: calc(100% - 16px);")
    writeLn("\theight: auto;")
    writeLn("\tbackground-color: #333;")
    writeLn("\tcolor: white;")
    writeLn("\torder: 2px solid #ffd700;")
    writeLn("\tborder-radius: 4px;")
    writeLn("\tbox-sizing: border-box;")
    writeLn("\tpadding: 8px;")
    writeLn("\tresize: none;")
    writeLn("\t/* overflow: auto; */")
    writeLn("\tmargin: 0 10px;")
    writeLn("}")

    writeLn("\n/* Flexbox Layout for Radio Buttons and Checkboxes */")
    writeLn(".question div {")
    writeLn("\tdisplay: flex;")
    writeLn("\talign-items: center;")
    writeLn("\tmargin-bottom: 8px;")
    writeLn("}")

    writeLn("\n/* Adjustments to the container to prevent horizontal scrolling */")
    writeLn("#questionFormContainer {")
    writeLn("\toverflow-x: hidden;")
    writeLn("}")

    writeLn("\n#questionsContainer {")
    writeLn("\tbackground-color: #444;")
    writeLn("\tpadding: 10px;")
    writeLn("\tborder-radius: 4px;")
    writeLn("\tborder: 2px solid #ddd;")
    writeLn("\tmargin-bottom: 10px;")
    writeLn("}")

    writeLn("\n/* Terminal Container Styling */")
    writeLn("#terminalContainer {")
    writeLn("\tdisplay: flex;")
    writeLn("\tflex-direction: column;")
    writeLn("\tflex: 1;")
    writeLn("\tborder: 2px solid #ffd700;")
    writeLn("\tbackground-color: #333;")
    writeLn("\tborder-radius: 4px;")
    writeLn("\tbox-sizing: border-box;")
    writeLn("\tpadding: 8px;")
    writeLn("\tmargin: 0 10px;")
    writeLn("\twhite-space: pre-wrap;")
    writeLn("\tword-break: break-word;")
    writeLn("\toverflow-wrap: break-word;")
    writeLn("\t/* overflow: auto; */")
    writeLn("}")

    writeLn("\n#terminalDescription {")
    writeLn("\tbackground-color: #444;")
    writeLn("\tpadding: 10px;")
    writeLn("\tborder-radius: 4px;")
    writeLn("\tborder: 2px solid #ddd;")
    writeLn("\tmargin-bottom: 10px;")
    writeLn("}")

    writeLn("\n#terminal {")
    writeLn("\tdisplay: flex;")
    writeLn("\tflex-direction: column;")
    writeLn("\tflex: 1;")
    writeLn("\toverflow: auto;")
    writeLn("}")

    writeLn("\n.xterm {")
    writeLn("\tborder: 2px solid #fff;")
    writeLn("\tpadding-left: 6px;")
    writeLn("\tpadding-right: 6px;")
    writeLn("\theight: auto;")
    writeLn("\twidth: auto;")
    writeLn("}")

    writeLn("\n#terminal, .xterm-viewport {")
    writeLn("\twhite-space: nowrap !important;")
    writeLn("\toverflow-x: auto !important;")
    writeLn("}")


    writeLn("\n/* Container Content Styling */")
    writeLn(".containerContent {")
    writeLn("\t/* margin-bottom: 20px; */")
    writeLn("}")

    writeLn("\n/* Result Message Styling */")
    writeLn("#resultMessage {")
    writeLn("\tdisplay: none;")
    writeLn("\tfont-size: 18px;")
    writeLn("\tfont-weight: bold;")
    writeLn("\tcolor: white;")
    writeLn("\tborder: 2px solid transparent;")
    writeLn("\tborder-radius: 4px;")
    writeLn("\tpadding: 10px;")
    writeLn("\ttext-align: center;")
    writeLn("\tmargin-top: 20px;")
    writeLn("\ttransition: background-image 0.5s ease;")
    writeLn("\tanimation: none;")
    writeLn("}")

    writeLn("\n/* Correct Result Message Styling */")
    writeLn("#resultMessage.correct {")
    writeLn("\tbackground: green;")
    writeLn("\ttext-shadow: 0px 5px 15px rgba(0, 0, 0, 0.5);")
    writeLn("\tcolor: white;")
    writeLn("\ttext-shadow: 2px 2px 4px #000;")
    writeLn("}")

    writeLn("\n/* Incorrect Result Message Styling */")
    writeLn("#resultMessage.incorrect {")
    writeLn("\tbackground: #ff5733;")
    writeLn("\ttext-shadow: 0px 5px 15px rgba(0, 0, 0, 0.5);")
    writeLn("\tcolor: white;")
    writeLn("\ttext-shadow: 2px 2px 4px #000;")
    writeLn("}")

    writeLn("\n/* Link styling */")
    writeLn("a {")
    writeLn("\tcolor: black;")
    writeLn("}")
    writeLn("a:hover {")
    writeLn("\tcolor: #ffd700;")
    writeLn("\ttext-decoration: none;")
    writeLn("}")

    writeLn("\n.sendCommandButton,")
    writeLn(".submitQuestionsButton,")
    writeLn(".returnButton {")
    writeLn("\tfont-family: \"Arial\", sans-serif;")
    writeLn("\tfont-weight: bolder;")
    writeLn("\tbackground-color: #ffd700;")
    writeLn("\tcolor: black;")
    writeLn("\tpadding: 8px;")
    writeLn("\tcursor: pointer;")
    writeLn("\tborder: none;")
    writeLn("\tborder-radius: 5px;")
    writeLn("\ttransition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease,")
    writeLn("\tbox-shadow 0.3s ease;")
    writeLn("\tbox-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);")
    writeLn("}")

    writeLn("\n.sendCommandButton:hover,")
    writeLn(".submitQuestionsButton:hover,")
    writeLn(".returnButton:hover {")
    writeLn("\tbackground-color: #555;")
    writeLn("\tcolor: #ffd700;")
    writeLn("\tbox-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);")
    writeLn("\ttransform: translateY(-2px);")
    writeLn("}")

    writeLn("\n/* Global Scrollbar Styling */")
    writeLn("body {")
    writeLn("\tscrollbar-width: thin; /* For Firefox */")
    writeLn("\tscrollbar-color: #ffd700 #333; /* For Firefox */")
    writeLn("}")

    writeLn("\n/* For Chrome, Edge, and Safari */")
    writeLn("::-webkit-scrollbar {")
    writeLn("\twidth: 12px; /* Width of the scrollbar */")
    writeLn("}")

    writeLn("\n::-webkit-scrollbar-track {")
    writeLn("\tbackground-color: #333; /* Track color */")
    writeLn("}")

    writeLn("\n::-webkit-scrollbar-thumb {")
    writeLn("\tbackground-color: #ffd700; /* Thumb color */")
    writeLn("\tborder-radius: 10px; /* Rounded corners for the thumb */")
    writeLn("\tborder: 3px solid #333; /* Optional: Adds some space between the thumb and the track */")
    writeLn("}")

    writeLn("\n::-webkit-scrollbar-thumb:hover {")
    writeLn("\tbackground-color: #555; /* Thumb color on hover */")
    writeLn("}")

    writeLn("\n/* Scrollbar for .resizableContainer, #terminalContainer, #terminalOutput */")
    writeLn(".resizableContainer::-webkit-scrollbar,")
    writeLn("#terminalContainer::-webkit-scrollbar,")
    writeLn("#terminalOutput::-webkit-scrollbar {")
    writeLn("\t/* No need to duplicate the 'width' property if it's the same for all */")
    writeLn("}")

    writeLn("\n.resizableContainer::-webkit-scrollbar-track,")
    writeLn("#terminalContainer::-webkit-scrollbar-track,")
    writeLn("#terminalOutput::-webkit-scrollbar-track {")
    writeLn("\t/* No need to duplicate the 'background-color' property if it's the same for all */")
    writeLn("}")

    writeLn("\n.resizableContainer::-webkit-scrollbar-thumb,")
    writeLn("#terminalContainer::-webkit-scrollbar-thumb,")
    writeLn("#terminalOutput::-webkit-scrollbar-thumb {")
    writeLn("\t/* No need to duplicate the 'background-color' and 'border-radius' properties if they're the same for all */")
    writeLn("}")

    writeLn("\n.resizableContainer::-webkit-scrollbar-thumb:hover,")
    writeLn("#terminalContainer::-webkit-scrollbar-thumb:hover,")
    writeLn("#terminalOutput::-webkit-scrollbar-thumb:hover {")
    writeLn("\t/* No need to duplicate the 'background-color' property if it's the same for all */")
    writeLn("}")

    writeLn("\n/* Specific styles for xterm */")
    writeLn(".xterm .xterm-viewport::-webkit-scrollbar {")
    writeLn("\t/* Specific styles for xterm scrollbar if different from above */")
    writeLn("}")

    writeLn("\n.xterm .xterm-viewport::-webkit-scrollbar-track {")
    writeLn("\t/* Specific styles for xterm scrollbar track if different from above */")
    writeLn("}")

    writeLn("\n.xterm .xterm-viewport::-webkit-scrollbar-thumb {")
    writeLn("\t/* Specific styles for xterm scrollbar thumb if different from above */")
    writeLn("}")

    writeLn("\n.xterm .xterm-viewport::-webkit-scrollbar-thumb:hover {")
    writeLn("\t/* Specific styles for xterm scrollbar thumb hover if different from above */")
    writeLn("}")

# Helper method simply to write the given text to f and add a newline
def writeLn(text):
    f.write(f"{text}\n")


# modCssGen("X")
