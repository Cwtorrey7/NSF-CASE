/* 
  This is a simple python script for generating a moduleX. This script will call the completed modHtmlGen, modJsGen, modCssGen functions
    and create the basis for the module across 3 files: moduleX.html, moduleX.css, and moduleX.js.
  This will be treated like a function abstraction with the changes between each module being imputs to the generation function
  The inputs of the function modgen() are:
    - modName # This is the name for the module to be generated. For example: "Module 1: WannaCry"
    - modNum # This is the number for the module to be generated. For example: 1, 2, 3, ...

    Need to figure out best way to pass in the youtube video url. Feels bad to have it as a input.
*/

// required libraries
const fs = require('fs')
const path = require('path')

// import functions from other files
const { moduleCSSGeneration } = require('./modCssGen.js')
const { moduleJSGeneration } = require('./modJsGen.js')
const { moduleHTMLGeneration } = require('./modHtmlGen.js')

function moduleGeneration (modName, modNum) {
    // get the absolute path from where the file is executed
    const cwd = process.cwd()

    // paths for the folder we're working with
    const relativePath = 'src/modgen'
    const filepath = path.join(cwd, relativePath)

    // check modX_Overview
    const overview = path.join(filepath, `mod${modNum}_Overview.txt`)
    if (fs.existsSync(overview)) {
        console.error(`mod${modNum}_Overview.txt does not exist!\n`)
        return
    }

    // check modX_Vulnerability
    const vulnerability = path.join(filepath, `mod${modNum}_Vulnerability.txt`)
    if (fs.existsSync(vulnerability)) {
        console.error(`mod${modNum}_Vulnerability.txt does not exist!\n`)
        return
    }

    // check modX_TermDesc
    const termDescription = path.join(filepath, `mod${modNum}_TermDesc.txt`)
    if (fs.existsSync(termDescription)) {
        console.error(`mod${modNum}_TermDesc.txt does not exist!\n`)
        return
    }

    // check modX_Ouestions
    const questions = path.join(filepath, `mod${modNum}_Ouestions.txt`)
    if (fs.existsSync(questions)) {
        console.error(`mod${modNum}_Ouestions.txt does not exist!\n`)
        return
    }

    moduleJSGeneration(modNum)
    moduleCSSGeneration(modNum)
    moduleHTMLGeneration(modName, modNum, "https://www.youtube.com/embed/qPzOg0MqrJE", `mod${modNum}_Overview.txt`, `mod${modNum}_Vulnerability.txt`, `mod${modNum}_TermDesc.txt`, `mod${modNum}_Questions.txt`)
    
}

moduleGeneration("Module 1: WannaCry", "X")