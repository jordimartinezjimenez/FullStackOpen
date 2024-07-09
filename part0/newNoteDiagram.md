browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
server-->>browser: HTML document

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
server-->>browser: CSS file

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
server-->>browser: JavaScript file

Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
server-->>browser: [{ "content": "test", "2024-07-09T16:31:00.320Z" }, ... ]

Note right of browser: The client writes a note and click the save button

browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
server-->>browser: {message: "note created"}