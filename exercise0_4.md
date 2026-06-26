```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: The user fills the text field and submits the HTML form
    browser->>server: POST [https://studies.cs.helsinki.fi/exampleapp/new_note_spa](https://studies.cs.helsinki.fi/exampleapp/new_note_spa)
    activate server
    Note over browser, server: Payload: { "content": "test", "date": "2026-06-26..." }
    server-->>browser: HTTP 201 Created (Response: {"message":"note created"})
    deactivate server
    
    Note right of browser: The browser processes the form submission response and updates the view