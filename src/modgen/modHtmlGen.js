/*
  This is a simple javascript program for generating a moduleX.html file, based on the previously completed module1-6.html files
  This will be treated like a function abstraction with the changes between each module being imputs to the generation function
  The inputs of the function modgen() are:
    - modTitle # The acutal modNumber and module title together. (Ex. "Module 1: WannaCry")
    - modNum # This is the number for which module this is. (Ex. 1, 2, 3, ...) [Will be written code like: f".../stylesheets/module{modNumber}.css>"]
    - modIntroVideoLink # This is the actual youtube link tied to the given module. (Ex. "https://www.youtube.com/embed/qPzOg0MqrJE")
    - modOverviewFile # This is the text file name that holds the module's overview text. 
                            This file is to be found in ".../NSF_CASE/src/modgen/modInfo/". 
                            (EX. "moduleXOverview.txt") [Will be written in code like: f".../modgen/modInfo/{modOverviewFile}"]
    - modVulnerabilityFile # This is the text file name that holds the module's vulnerability text.
    - modTermDescFile # This is the text (or html) file name that holds the module's terminal description.
                            Unlike the previous files, this file can have html elements such as "<code>EXAMPLE_TEXT</code>"
    - modQuestionsFile # This is a text file name that holds the modules questions and possible answers.
                            Thre formatting of this text file is described in the README within .../modgen/modInfo/
*/

// required libraries
const fs = require('fs')
const path = require('path')

function modgen (modTitle, modNum, modIntroVideoLink, modOverviewFile, modVulnerabilityFile, modTermDescFile, modQuestionsFile) {

    // get the absolute path 
    const directory = process.cwd()

    // paths for the folder we're working with
    const relativePath = '\\src\\modgen\\'
    const filepath = path.join(directory, relativePath)

    // open new file using helper function generateHTML()
    fs.writeFile(`${filepath}module${modNum}.html`, generateHTML(modTitle, modNum, modIntroVideoLink, modOverviewFile, modVulnerabilityFile, modTermDescFile, modQuestionsFile), (err) => {
        if (err) {
            console.error('Error writing to file: ', err)
            return
        }
    })
}

function readLineByLine(filepath) {
    let lines = []
    try {
        const data = fs.readFileSync(filepath,'utf8')
        lines.push(...data.split('\n'))
        return lines
    } catch (err) {
        throw err
    }
}

function printAnswerHelper(questionNum, answerLetter, questionAnswer) {
    let string = ''
    string += '\t\t\t\t\t\t<div>\n'
    string += `\t\t\t\t\t\t\t<input type=\"radio\" id=\"Q${questionNum}${answerLetter}\" name=\"singleChoiceAnswer${questionNum}\" value=\"${questionAnswer}\" style=\"display: none;\">\n`
    string += `\t\t\t\t\t\t\t<label class=\"radio-label\" for=\"Q${questionNum}${answerLetter}\">${questionAnswer}</label>\n`
    string += '\t\t\t\t\t\t</div>\n'
    return string
}


function generateHTML (modTitle, modNum, modIntroVideoLink, modOverviewFile, modVulnerabilityFile, modTermDescFile, modQuestionsFile) {
    /* ~ ~ ~ START OF module's <html> block ~ ~ ~ */
    let htmlContent  = '<!DOCTYPE html>\n<html lang="en">\n'

    /* ~ ~ ~ START OF module's <head> block ~ ~ ~ */
    htmlContent += '<head>\n'

    // Difference #1
    htmlContent += `\t<title>${modTitle}</title>\n`

    // This block below is a constant across all modules
    htmlContent += '\t<meta charset=\"UTF-8\">\n'
    htmlContent += '\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n'
    htmlContent += '\t<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css\">\n'

    // Difference #2
    htmlContent += `\t<link rel=\"stylesheet\" href=\"/src/Modules/stylesheets/module${modNum}.css\">\n`

    // Another block of constants across all modules
    htmlContent += '\t<link rel=\"stylesheet\" href=\"/src/Modules/stylesheets/questions.css\">\n'
    htmlContent += '\t<link rel=\"stylesheet\" href=\"/node_modules/xterm/css/xterm.css\">\n'
    htmlContent += '\t<link href=\"https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap\" rel=\"stylesheet\">\n'
    htmlContent += '\t<link href=\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap\" rel=\"stylesheet\">\n'
    htmlContent += '\t<script type=\"application/javascript\" src=\"/node_modules/xterm/lib/xterm.js\"></script>\n'
    htmlContent += '\t<script type=\"application/javascript\" src=\"/src/Modules/js/validate.js\"></script>\n'
    htmlContent += '\n\t<!-- Terminal addon for resize -->\n\t<script type=\"application/javascript\" src=\"/src/Modules/js/fit-addon.js\"></script>\n'
    htmlContent += 'n\t<!-- This NEEDS to be added to each page which you dont want to user to see unless signed in -->\n\t<script type=\"application/javascript\" src=\"/src/authentication/js/userAuthenticationCheck.js\"></script>\n\n'

    htmlContent += '</head>\n'

    /* ~ ~ ~ END OF module's <head> block ~ ~ ~ */

    /* ~ ~ ~ START OF module's <body> block ~ ~ ~ */

    htmlContent += '<body>\n'

    /* ~ ~ ~ START OF module's description block ~ ~ ~ */
    // The block below is constant code through all modules
    htmlContent += '<div id=\"animated-background\"></div>\n'
    htmlContent += '\t<div class=\"container\">\n'
    htmlContent += '\t\t<div class=\"topContainer\">\n'
    htmlContent += '\t\t\t<!-- Description -->\n'
    htmlContent += '\t\t\t<div class=\"resizableContainer\" id=\"narrativeContainer\">\n'
    htmlContent += '\t\t\t\t<div class=\"containerContent\">\n'

    // Difference #1 repeated
    htmlContent += `\t\t\t\t<h2 id=\"moduleTitle\">${modTitle}</h2>\n`

    // Another constant block
    htmlContent += '\t\t\t\t  <div style=\"background-color: #444; padding: 10px; border-radius: 4px; border: 2px solid #ddd;\">\n'
    htmlContent += '\t\t\t\t\t<div id=\"moduleSections\">\n'
    htmlContent += '\t\t\t\t\t\t<div class=\"moduleSection\">\n'
    htmlContent += '\t\t\t\t\t\t\t<div style=\"font-size: 18px; font-weight: normal; color: rgb(255, 215, 0); font-style: normal; text-decoration: underline;\">\n'
    htmlContent += '\t\t\t\t\t\t\t\tIntroductory Module Video:</a>\n'
    htmlContent += '\t\t\t\t\t\t\t</div>\n'
    htmlContent += '\t\t\t\t\t\t\t<!-- YouTube Video Embed // Replace Video ID \"https://www.youtube.com/watch?v=ID\" -->\n'
    htmlContent += '\t\t\t\t\t\t\t<div class=\"videoWrapper\" style=\"position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; background: #000;\">\n'
    htmlContent += '\t\t\t\t\t\t\t\t<iframe style=\"position: absolute; top: 0; left: 0; width: 100%; height: 100%;\"\n'

    // Difference #3
    htmlContent += `\t\t\t\t\t\t\t\t\t\tsrc=\"${modIntroVideoLink}\"\n`

    // another constant block
    htmlContent += '\t\t\t\t\t\t\t\t\t\tframeborder=\"0\"\n'
    htmlContent += '\t\t\t\t\t\t\t\t\t\tallow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\"\n'
    htmlContent += '\t\t\t\t\t\t\t\t\t\tallowfullscreen>\n'
    htmlContent += '\t\t\t\t\t\t\t\t</iframe>\n'
    htmlContent += '\t\t\t\t\t\t\t</div>\n'
    htmlContent += '\t\t\t\t\t\t\t<div class=\"spacer\" style=\"height: 1em;\"></div>\n'
    htmlContent += '\t\t\t\t\t\t\t<div style=\"font-size: 18px; font-weight: normal; color: rgb(255, 215, 0); font-style: normal; text-decoration: underline;\">\n'

    // Difference #4 (modTitle - "Module X:" + "Overview")
    htmlContent += `\t\t\t\t\t\t\t\t${modTitle.split(":")[1].trimEnd()} Overview:</a>\n`

    // Another block on constants
    htmlContent += '\t\t\t\t\t\t\t</div>\n'
    htmlContent += '\t\t\t\t\t\t</div>\n'
    htmlContent += '\t\t\t\t\t\t<div class=\"moduleSection\">\n'
    htmlContent += '\t\t\t\t\t\t\t<div style=\"font-size: 16px; font-weight: normal; color: white; font-style: normal; font-style: normal;\">\n'

    // Difference #5: open modOverviewFile and get info out of there
    relativePath = '\\src\\modgen\\modInfo\\'
    filepath = process.cwd() + relativePath

    try {
        let lines = readLineByLine(path.join(filepath, modOverviewFile))
        lines.forEach((line) => {
            htmlContent += `\t\t\t\t\t\t\t\t${line}`
        })
    } catch (err) {
        console.error('Error reading file:', err)
    }

    // another constant block
    htmlContent += '\n\t\t\t\t\t\t\t</div>\n'
    htmlContent += '\t\t\t\t\t\t</div>\n'
    htmlContent += '\t\t\t\t\t\t<div class=\"spacer\" style=\"height: 1em;\"></div>\n'
    htmlContent += '\t\t\t\t\t\t<div style=\"font-size: 18px; font-weight: normal; color: rgb(255, 215, 0); font-style: normal; text-decoration: underline;\">\n'
    htmlContent += '\t\t\t\t\t\t\tVulnerability Details:</a>\n'
    htmlContent += '\t\t\t\t\t\t</div>\n'
    htmlContent += '\t\t\t\t\t\t<div class=\"moduleSection\">\n'
    htmlContent += '\t\t\t\t\t\t\t<div style=\"font-size: 16px; font-weight: normal; color: white; font-style: normal; font-style: normal;\">\n'

    // Difference #6
    try {
        let lines = readLineByLine(path.join(filepath, modVulnerabilityFile))
        lines.forEach((line) => {
            htmlContent += `\t\t\t\t\t\t\t\t${line}`
        })

    } catch (err) {
        console.error('Error reading file:', err)
    }

    // more constants across modules
    htmlContent += '\n\t\t\t\t\t\t\t</div>\n'
    htmlContent += '\t\t\t\t\t\t</div>\n'
    htmlContent += '\t\t\t\t\t\t<div class=\"spacer\" style=\"height: 1em;\"></div>\n'
    htmlContent += '\t\t\t\t\t\t\t<button class=\"returnButton\"><a href=\"/src/home/html/index.html\">Return to Main Page</a></button>\n'
    htmlContent += '\t\t\t\t\t</div>\n'
    htmlContent += '\t\t\t\t  </div>\n'
    htmlContent += '\t\t\t\t</div>\n'
    htmlContent += '\t\t\t  </div>\n'

    /* ~ ~ ~ END OF module's description block ~ ~ ~ */

    /* ~ ~ ~ START OF module's terminal block ~ ~ ~ */

    htmlContent += '\t\t\t  <!-- Terminal -->\n'
    htmlContent += '\t\t\t  <div class=\"resizableContainer\" id=\"terminalContainer\">\n'
    htmlContent += '\t\t\t\t<h2>Remote Terminal</h2>\n'
    htmlContent += '\t\t\t\t<div id=\"terminalDescription\" style=\"font-size: 16px; font-weight: normal; color: white;\">\n'

    // Difference #7
    try {
        let lines = readLineByLine(path.join(filepath, modTermDescFile))
        lines.forEach((line) => {
            if (line.includes('<li>')) {
               htmlContent += `\t\t\t\t\t\t\t\t\t${line}`
            } else {
               htmlContent += `\t\t\t\t\t\t\t\t${line}`
            }
        })
    } catch (err) {
        console.error('Error reading file:', err)
    }
    

    // more constants across modules
    htmlContent += '\n\t\t\t\t</div>\n'
    htmlContent += '\t\t\t\t<div id=\"terminal\"></div>\n'
    htmlContent += '\t\t\t</div>\n'
    htmlContent += '\t\t</div>\n'

    /* ~ ~ ~ END OF module's terminal block ~ ~ ~ */

    /* ~ ~ ~ START OF module's questions block ~ ~ ~ */

    htmlContent += '\t\t<!-- Questions -->\n'
    htmlContent += '\t\t<div class=\"resizableContainer\" id=\"questionFormContainer\">\n'
    htmlContent += '\t\t\t<form class=\"containerContent\" id=\"questionForm\">\n'
    htmlContent += '\t\t\t\t<h2>Module Questions</h2>\n'
    htmlContent += '\t\t\t\t<div id=\"questionsContainer\">\n'

    //Difference #8
    try {
        let lines = readLineByLine(path.join(filepath, modQuestionsFile));
        let questionCount = 0   // Initialize at 0, because this is incremented at each question
        lines.forEach((line) => {
            if (line.includes('?')) {   // If the line contains a ?, then it is a prompt
                if (questionCount > 0) {    // If at least one question has begun, we need to end the questions div block
                    htmlContent += '\t\t\t\t\t</div>\n'
                }
                htmlContent += '\t\t\t\t\t<div>\n'
                htmlContent += `\t\t\t\t\t\t<label class=\"prompt\">${line.trim()}</label>\n`
                questionCount++ //Increment the number of questions found
            }
            if (questionCount > 0) {    // If no questions have begun, we shouldn't start printing answers
                let split = ''
                if (line.includes(')')) {    // Checking in case there is junk lines
                    split = line.split(')')     // This will result in a array looking like this: ["a)", " ANSWER"] 
                }

                if (line.includes('a)')) {  // Answer a has been found
                    htmlContent += printAnswerHelper(questionCount.toString(), 'a', split[1].trimEnd())
                } else if (line.includes('b)')) {   //Answer b has been found
                    htmlContent += printAnswerHelper(questionCount.toString(), 'b', split[1].trimEnd())
                } else if (line.includes('c)')) {   // Answer c has been found
                    htmlContent += printAnswerHelper(questionCount.toString(), 'c', split[1].trimEnd())
                } else if (line.includes('d)')) {   //Answer d has been found
                    htmlContent += printAnswerHelper(questionCount.toString(), 'd', split[1].trimEnd())
                }
            }
        })
    } catch (err) {
        console.error('Error reading file:', err)
    }

    // more constants across modules
    htmlContent += '\t\t\t\t\t</div>\n'
    htmlContent += '\t\t\t\t</div>\n'

    // Difference #9
    htmlContent += '\t\t\t\t<button class=\"submitQuestionsButton\" id=\"module{modNum}\" type=\"button\" onclick=\"checkAnswers(this)\">Check Answers</button>\n'

    // more constants across modules
    htmlContent += '\t\t\t\t<div id=\"resultMessage\"></div>\n'
    htmlContent += '\t\t\t</form>\n'
    htmlContent += '\t\t</div>\n'
    htmlContent += '\t</div>\n'
    htmlContent += '</div>\n'
    htmlContent += '</div>\n'

    /* ~ ~ ~ END OF module's questions block ~ ~ ~ */

    /* ~ ~ ~ START OF module's animated background block ~ ~ ~ */

    htmlContent += '\t<!-- Animated background element -->\n'
    htmlContent += '\t<script type=\"application/javascript\" src=\"https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js\"></script>\n'
    htmlContent += '\t<script type=\"application/javascript\" src=\"https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.min.js\"></script>\n'
    htmlContent += '\t<script type=\"application/javascript\" src=\"https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.topology.min.js\"></script>\n'
    htmlContent += '\t<script>\n'
    htmlContent += '\t\t// Animated Background\n'
    htmlContent += '\t\tVANTA.TOPOLOGY({\n'
    htmlContent += '\t\t\tel: \"#animated-background\",\n'
    htmlContent += '\t\t\tcolor: 0x888888,\n'
    htmlContent += '\t\t\tbackgroundColor: 0x222222\n'
    htmlContent += '\t\t})\n'
    htmlContent += '\t</script>\n'

    /* ~ ~ ~ END OF module's animated background block ~ ~ ~ */

    /* ~ ~ ~ START OF module's Confetti block ~ ~ ~ */

    htmlContent += '\n\t<!-- Confetti -->\n'
    htmlContent += '\t<script src=\"https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.2/dist/confetti.browser.min.js\"></script>\n'

    // Difference #10
    htmlContent += `\n\t<script src=\"/src/Modules/js/module${modNum}.js\"></script>\n`

    /* ~ ~ ~ END OF module's Confetti block ~ ~ ~ */

    htmlContent += '</body>\n'
    /* ~ ~ ~ END OF module's <body> block ~ ~ ~ */

    htmlContent += '</html>'
    /* ~ ~ ~ END OF module's <html> block ~ ~ ~ */

    // return the html
    return htmlContent
}

modgen("Module 1: Wannacry", "1", "https://www.youtube.com/embed/qPzOg0MqrJE", "WannaCry_Overview.txt", "WannaCry_Vulnerability.txt", "WannaCry_TermDesc.txt", "WannaCry_Questions.txt")
