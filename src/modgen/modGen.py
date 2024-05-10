"""
  This is a simple python script for generating a moduleX. This script will call the completed modHtmlGen, modJsGen, modCssGen functions
    and create the basis for the module across 3 files: moduleX.html, moduleX.css, and moduleX.js.
  This will be treated like a function abstraction with the changes between each module being imputs to the generation function
  The inputs of the function modgen() are:
    - modName # This is the name for the module to be generated. For example: "Module 1: WannaCry"
    - modNum # This is the number for the module to be generated. For example: 1, 2, 3, ...

    Need to figure out best way to pass in the youtube video url. Feels bad to have it as a input.
"""
import os

from modHtmlGen import modHtmlGen
from modCssGen import modCssGen
from modJsGen import modJsGen

def modGen(modName, modNum):
    # Testing that the input files for creating the mod's html file exists

    # Python likes absolute paths... so this is a proxy to create a relative path for opening the moduleX.html
    cwd = os.getcwd()
    relative = "/src/modgen/modInfo/" # cwd should put us at simply ""...\NSF_CASE" (when the script is ran from terminal), so we need to adjust to our desired directory from there
    filePath = cwd + relative # Simply join cwd and relative to create the absolute path to the directory we want the file created in
    
    # Check mod_Overview
    filePath = filePath + f"mod{modNum}_Overview.txt"

    if (os.path.exists(filePath) != True): # If the overview text file doesn't exist, error out
        print(f"ERROR: Missing file .../src/modgen/modInfo/mod{modNum}_Overview.txt\n")
        exit()
    
    # Check mod_Vulnerability
    filePath = cwd + relative + f"mod{modNum}_Vulnerability.txt"

    if (os.path.exists(filePath) != True): # If the vulnerability text file doesn't exist, error out
        print(f"ERROR: Missing file .../src/modgen/modInfo/mod{modNum}_Vulnerability.txt\n")
        exit()

    # Check mod_TermDesc
    filePath = cwd + relative + f"mod{modNum}_TermDesc.txt"

    if (os.path.exists(filePath) != True): # If the termDesc text file doesn't exist, error out
        print(f"ERROR: Missing file .../src/modgen/modInfo/mod{modNum}_termDesc.txt\n")
        exit()

    # Check mod_Questions
    filePath = cwd + relative + f"mod{modNum}_Questions.txt"

    if (os.path.exists(filePath) != True): # If the questions text file doesn't exist, error out
        print(f"ERROR: Missing file .../src/modgen/modInfo/mod{modNum}_Questions.txt\n")
        exit()

    modJsGen(modNum)
    modCssGen(modNum)
    modHtmlGen(modName, modNum, "https://www.youtube.com/embed/qPzOg0MqrJE", f"mod{modNum}_Overview.txt", f"mod{modNum}_Vulnerability.txt", f"mod{modNum}_TermDesc.txt", f"mod{modNum}_Questions.txt")

modGen("Module 1: WannaCry", "X")