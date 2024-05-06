"""
  This is a simple python script for generating a moduleX.html file, based on the previously completed module1-6.html files
  This will be treated like a function abstraction with the changes between each module being imputs to the generation function
  The inputs of the function modgen() are:
    - modTitle # The acutal modNumber and module title together. (Ex. "Module 1: WannaCry")
    - modNum # This is the number for which module this is. (Ex. 1, 2, 3, ...) [Will be written code like: f".../stylesheets/module{modNumber}.css>"]
"""
import os

def modgen(modTitle, modNum):
    #print(f"I recieved the modTitle value: {modTitle}")
    #print(f"I recieve the modNum value: {modNum}")

    # Python likes absolute paths... so this is a proxy to create a relative path for opening the moduleX.html
    cwd = os.getcwd()
    relative = "\\src\\modgen\\" # cwd should put us at simply ""...\NSF_CASE" (when the script is ran from terminal), so we need to adjust to our desired directory from there
    filePath = cwd + relative # Simply join cwd and relative to create the absolute path to the directory we want the file created in


    f = open(f"{filePath}module{modNum}.html", "w") # Open (and create if doesn't exist) the module's html file in the directory passed from filePath
    
    # Write generic .html start
    f.write("<!DOCTYPE html>\n<html lang=\"en\">\n")

    # --- Write the module <head> block --- #

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

    # --- End of module <head> block --- #





modgen("Amongus", "X")