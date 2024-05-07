"""
  This is a simple python script for generating a moduleX.html file, based on the previously completed module1-6.html files
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
"""
import os

def modgen(modTitle, modNum, modIntroVideoLink, modOverviewFile, modVulnerabilityFile, modTermDescFile, modQuestionsFile):
    #print(f"I recieved the modTitle value: {modTitle}")
    #print(f"I recieve the modNum value: {modNum}")
    #print(f"I recieve the modIntroVideoLink value: {modIntroVideoLink}")
    #print(f"I recieve the modOverviewFile value: {modOverviewFile}")

    # Python likes absolute paths... so this is a proxy to create a relative path for opening the moduleX.html
    cwd = os.getcwd()
    relative = "\\src\\modgen\\" # cwd should put us at simply ""...\NSF_CASE" (when the script is ran from terminal), so we need to adjust to our desired directory from there
    filePath = cwd + relative # Simply join cwd and relative to create the absolute path to the directory we want the file created in

    global f # Made global for helper methods
    f = open(f"{filePath}module{modNum}.html", "w") # Open (and create if doesn't exist) the module's html file in the directory passed from filePath
    
    # Write generic .html start
    f.write("<!DOCTYPE html>\n<html lang=\"en\">\n")

    # --- Write the module's <head> block --- #

    f.write("<head>\n")

    # Diff 1
    f.write(f"\t<title>{modTitle}</title>\n") # modTitle's first use
    
    # This below is constant in all
    f.write("\t<meta charset=\"UTF-8\">\n")
    f.write("\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n")
    f.write("\t<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css\">\n")

    # Diff 2
    f.write(f"\t<link rel=\"stylesheet\" href=\"/src/Modules/stylesheets/module{modNum}.css\">\n")

    # This below is constant in all
    f.write("\t<link rel=\"stylesheet\" href=\"/src/Modules/stylesheets/questions.css\">\n")
    f.write("\t<link rel=\"stylesheet\" href=\"/node_modules/xterm/css/xterm.css\">\n")
    f.write("\t<link href=\"https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap\" rel=\"stylesheet\">\n")
    f.write("\t<link href=\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap\" rel=\"stylesheet\">\n")
    f.write("\t<script type=\"application/javascript\" src=\"/node_modules/xterm/lib/xterm.js\"></script>\n")
    f.write("\t<script type=\"application/javascript\" src=\"/src/Modules/js/validate.js\"></script>\n")
    f.write("\n\t<!-- Terminal addon for resize -->\n\t<script type=\"application/javascript\" src=\"/src/Modules/js/fit-addon.js\"></script>\n")
    f.write("\n\t<!-- This NEEDS to be added to each page which you dont want to user to see unless signed in -->\n\t<script type=\"application/javascript\" src=\"/src/authentication/js/userAuthenticationCheck.js\"></script>\n\n")
    
    f.write("</head>\n")

    # --- End of module's <head> block --- #

    f.write("</body>\n")

    # --- Write the module's desctiption block --- #

    # This below is constant in all
    f.write("<div id=\"animated-background\"></div>\n")
    f.write("\t<div class=\"container\">\n")
    f.write("\t\t<div class=\"topContainer\">\n")
    f.write("\t\t\t<!-- Description -->\n")
    f.write("\t\t\t<div class=\"resizableContainer\" id=\"narrativeContainer\">\n")
    f.write("\t\t\t\t<div class=\"containerContent\">\n")

    # Diff 1 repeated
    f.write(f"\t\t\t\t  <h2 id=\"moduleTitle\">{modTitle}</h2>\n")

    # This below is constant in all
    f.write("\t\t\t\t  <div style=\"background-color: #444; padding: 10px; border-radius: 4px; border: 2px solid #ddd;\">\n")
    f.write("\t\t\t\t\t<div id=\"moduleSections\">\n")
    f.write("\t\t\t\t\t\t<div class=\"moduleSection\">\n")
    f.write("\t\t\t\t\t\t\t<div style=\"font-size: 18px; font-weight: normal; color: rgb(255, 215, 0); font-style: normal; text-decoration: underline;\">\n")
    f.write("\t\t\t\t\t\t\t\tIntroductory Module Video:</a>\n")
    f.write("\t\t\t\t\t\t\t</div>\n")
    f.write("\t\t\t\t\t\t\t<!-- YouTube Video Embed // Replace Video ID \"https://www.youtube.com/watch?v=ID\" -->\n")
    f.write("\t\t\t\t\t\t\t<div class=\"videoWrapper\" style=\"position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; background: #000;\">\n")
    f.write("\t\t\t\t\t\t\t\t<iframe style=\"position: absolute; top: 0; left: 0; width: 100%; height: 100%;\"\n")

    # Diff 3
    f.write(f"\t\t\t\t\t\t\t\t\t\tsrc=\"{modIntroVideoLink}\"\n")

    # This below is constant in all
    f.write("\t\t\t\t\t\t\t\t\t\tframeborder=\"0\"\n")
    f.write("\t\t\t\t\t\t\t\t\t\tallow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\"\n")
    f.write("\t\t\t\t\t\t\t\t\t\tallowfullscreen>\n")
    f.write("\t\t\t\t\t\t\t\t</iframe>\n")
    f.write("\t\t\t\t\t\t\t</div>\n")
    f.write("\t\t\t\t\t\t\t<div class=\"spacer\" style=\"height: 1em;\"></div>\n")
    f.write("\t\t\t\t\t\t\t<div style=\"font-size: 18px; font-weight: normal; color: rgb(255, 215, 0); font-style: normal; text-decoration: underline;\">\n")

    # Diff 4 (Essentially do: modTitle - "Module X:" + "Overview")
    titleSplit = modTitle.split(":") # Should create an array similar to this: ["Module X:", " ModuleTopic"]
    overview = (titleSplit[1].strip()) + " Overview:" # Remove the whitespace at the start and end of ModuleTopic and concat " Overview:"
    # print(f"I found the value of var overview to be: {overview}")
    f.write(f"\t\t\t\t\t\t\t\t{overview}</a>\n")

    # This below is constant in all
    f.write("\t\t\t\t\t\t\t</div>\n")
    f.write("\t\t\t\t\t\t</div>\n")
    f.write("\t\t\t\t\t\t<div class=\"moduleSection\">\n")
    f.write("\t\t\t\t\t\t\t<div style=\"font-size: 16px; font-weight: normal; color: white; font-style: normal; font-style: normal;\">\n")

    # Diff 5
    
    # Must find the text files location first. Will use a process very similar to
    #   how we found the locaiton to create the html file in the begining
    relative = "\\src\\modgen\\modInfo\\" # Keep in mind cwd will put as at ".../NSF-CASE/"
    filePath = cwd + relative # Simply join cwd and relative to create the absolute path to the directory we want to read the overview text from

    tempFile = open(f"{filePath}{modOverviewFile}", "r", encoding="utf8") # Open the text file specified by modOverviewFile for reading

    for line in tempFile:
        f.write(f"\t\t\t\t\t\t\t\t{line}") # Do not need to add \n here because the text file will already have the lines in them

    tempFile.close() # Always close a file when done with it

    # This below is constant in all
    f.write("\n\t\t\t\t\t\t\t</div>\n") # Adding a \n to the start as the text file does not gurantee end with a newline char
    f.write("\t\t\t\t\t\t</div>\n")
    f.write("\t\t\t\t\t\t<div class=\"spacer\" style=\"height: 1em;\"></div>\n")
    f.write("\t\t\t\t\t\t<div style=\"font-size: 18px; font-weight: normal; color: rgb(255, 215, 0); font-style: normal; text-decoration: underline;\">\n")
    f.write("\t\t\t\t\t\t\tVulnerability Details:</a>\n")
    f.write("\t\t\t\t\t\t</div>\n")
    f.write("\t\t\t\t\t\t<div class=\"moduleSection\">\n")
    f.write("\t\t\t\t\t\t\t<div style=\"font-size: 16px; font-weight: normal; color: white; font-style: normal; font-style: normal;\">\n")

    # Diff 6

    tempFile = open(f"{filePath}{modVulnerabilityFile}", "r", encoding="utf8") # Open the text file specified by modVulnerabilityFile for reading

    for line in tempFile:
        f.write(f"\t\t\t\t\t\t\t\t{str(line)}") # Do not need to add \n here, same reason as above

    tempFile.close() # Always close a file when done with it

    # This below is constant in all
    f.write("\n\t\t\t\t\t\t\t</div>\n") # Adding a \n to the start as the text file does not gurantee end with a newline char
    f.write("\t\t\t\t\t\t</div>\n")
    f.write("\t\t\t\t\t\t<div class=\"spacer\" style=\"height: 1em;\"></div>\n")
    f.write("\t\t\t\t\t\t\t<button class=\"returnButton\"><a href=\"/src/home/html/index.html\">Return to Main Page</a></button>\n")
    f.write("\t\t\t\t\t</div>\n")
    f.write("\t\t\t\t  </div>\n")
    f.write("\t\t\t\t</div>\n")
    f.write("\t\t\t  </div>\n")

    # --- End of module's desctiption block --- #

    # --- Write the module's Terminal block --- #

    f.write("\t\t\t  <!-- Terminal -->\n")
    f.write("\t\t\t  <div class=\"resizableContainer\" id=\"terminalContainer\">\n")
    f.write("\t\t\t\t<h2>Remote Terminal</h2>\n")
    f.write("\t\t\t\t<div id=\"terminalDescription\" style=\"font-size: 16px; font-weight: normal; color: white;\">\n")
    
    # Diff 7

    tempFile = open(f"{filePath}{modTermDescFile}", "r", encoding="utf8") # Open the text or html file specified by modTermDescFile for reading

    for line in tempFile:
        tempLine = line
        """
        if ("\"" in tempLine): # If the line contains at least one ", then we will replace all " with \"
            tempLine = tempLine.replace("\"", "\\\"")
        if ("\'" in tempLine): # Similar to above but with
            tempLine = tempLine.replace("\'", "\\\'")
        """
        
        f.write(f"\t\t\t\t\t{tempLine}") # Do not need to add \n here

    tempFile.close() # Always close a file when done with it

    # This below is constant in all
    f.write("\n\t\t\t\t</div>\n") # Not guranteed that termDesc will end in a newline, so we will add one to start
    f.write("\t\t\t\t<div id=\"terminal\"></div>\n")
    f.write("\t\t\t</div>\n")
    f.write("\t\t</div>\n") # This </div> is only seen in module 1 and ends the topContainer class
    
    # --- End of module's Terminal block --- #
    
    # --- Write the module's Questions block --- #

    f.write("\t\t<!-- Questions -->\n")
    f.write("\t\t<div class=\"resizableContainer\" id=\"questionFormContainer\">\n")
    f.write("\t\t\t<form class=\"containerContent\" id=\"questionForm\">\n")
    f.write("\t\t\t\t<h2>Module Questions</h2>\n")
    f.write("\t\t\t\t<div id=\"questionsContainer\">\n")

    # Diff 8

    tempFile = open(f"{filePath}{modQuestionsFile}", "r", encoding="utf8") # Open the text file specifed by modQuestionsFile for reading

    questionCount = 0 # Initialize at 0, because this is incremented at each question
    for line in tempFile:
        if ("?" in line): # If the line contains a ?, then it is a prompt
            if (questionCount > 0): # If at least one question has begun, we need to end the questions div block
                f.write("\t\t\t\t\t</div>\n")
            f.write("\t\t\t\t\t<div>\n")
            f.write(f"\t\t\t\t\t\t<label class=\"prompt\">{line.rstrip()}</label>\n")
            questionCount = questionCount + 1 # Increment the number of questions found

        if(questionCount > 0): # If no questions have begun, we shouldn't start printing answers
            if (")" in line): # Checking in case there is junk lines
                split = line.split(")") # This will result in a array looking like this: ["a)", " ANSWER"]

            if ("a)" in line): # Answer a has been found
                printAnswerHelper(questionCount, "a", split[1].strip())
            elif ("b)" in line): # Answer b has been found
                printAnswerHelper(questionCount, "b", split[1].strip())
            elif ("c)" in line): # Answer c has been found
                printAnswerHelper(questionCount, "c", split[1].strip())
            elif ("d)" in line): # Answer d has been found
                printAnswerHelper(questionCount, "d", split[1].strip())
            else: # Junk line found... simply continue?
                continue
    
    tempFile.close() # Always close a file when done with it

    # This below is constant in all
    f.write("\t\t\t\t\t</div>\n")
    f.write("\t\t\t\t</div>\n")

    # Diff 9
    f.write(f"\t\t\t\t<button class=\"submitQuestionsButton\" id=\"module{modNum}\" type=\"button\" onclick=\"checkAnswers(this)\">Check Answers</button>\n")

    # This below is constant in all
    f.write("\t\t\t\t<div id=\"resultMessage\"></div>\n")
    f.write("\t\t\t</form>\n")
    f.write("\t\t</div>\n")
    f.write("\t</div>\n")
    f.write("</div>\n")
    f.write("</div>\n")

    # --- End of module's Questions block --- #

    # --- Write the module's Animated Background block --- #

    f.write("\t<!-- Animated background element -->\n")
    f.write("\t<script type=\"application/javascript\" src=\"https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js\"></script>\n")
    f.write("\t<script type=\"application/javascript\" src=\"https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.min.js\"></script>\n")
    f.write("\t<script type=\"application/javascript\" src=\"https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.topology.min.js\"></script>\n")
    f.write("\t<script>\n")
    f.write("\t\t// Animated Background\n")
    f.write("\t\tVANTA.TOPOLOGY({\n")
    f.write("\t\t\tel: \"#animated-background\",\n")
    f.write("\t\t\tcolor: 0x888888,\n")
    f.write("\t\t\tbackgroundColor: 0x222222\n")
    f.write("\t\t})\n")
    f.write("\t</script>\n")

    # --- End of module's Animated Background block --- #

    # --- Write the module's Confetti (and custom .js) block --- #

    f.write("\n\t<!-- Confetti -->\n")
    f.write("\t<script src=\"https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.2/dist/confetti.browser.min.js\"></script>\n")
    
    # Diff 10
    f.write(f"\n\t<script src=\"/src/Modules/js/module{modNum}.js\"></script>\n")

    # This below is constant in all
    f.write("</body>\n")
    f.write("</html>")

    # --- End of module's Confetti (and custom .js) block --- #

    f.close() # Always close a file when done with it

def printAnswerHelper(questionNum, answerLetter, questionAnswer):
    f.write("\t\t\t\t\t\t<div>\n")
    f.write(f"\t\t\t\t\t\t\t<input type=\"radio\" id=\"Q{questionNum}{answerLetter}\" name=\"singleChoiceAnswer{questionNum}\" value=\"{questionAnswer}\" style=\"display: none;\">\n")
    f.write(f"\t\t\t\t\t\t\t<label class=\"radio-label\" for=\"Q{questionNum}{answerLetter}\">{questionAnswer}</label>\n")
    f.write("\t\t\t\t\t\t</div>\n")


modgen("Module 1: Wannacry", "1", "https://www.youtube.com/embed/qPzOg0MqrJE", "WannaCry_Overview.txt", "WannaCry_Vulnerability.txt", "WannaCry_TermDesc.txt", "WannaCry_Questions.txt")