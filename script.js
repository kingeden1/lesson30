function = [".config"]

[nix]
channel = "stable-22_11"

[languages.html]
pattern = "**/*.html"
  [languages.html.languageServer]
start = "vscode-html-language-server --stdio"
  [languages.html.languageServer.initializationOptions]
  provideFormatter = true
  [languages.html.languageServer.configuration.html]
  customData = [ ]
  autoCreateQuotes = true
  autoClosingTags = true
  mirrorCursorOnMatchingTag = false
  
    [languages.html.languageServer.configuration.html.completion]
    attributeDefaultValue = "doublequotes"
  
    [languages.html.languageServer.configuration.html.format]
    enable = true
    wrapLineLength = 120
    unformatted = "wbr"
    contentUnformatted = "pre,code,textarea"
     ""
  
    