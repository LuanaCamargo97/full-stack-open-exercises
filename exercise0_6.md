```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: JavaScript intercepts the submit event, prevents default reload, and immediately updates the UI with the new note
    
    browser->>server: POST [https://studies.cs.helsinki.fi/exampleapp/new_note_spa](https://studies.cs.helsinki.fi/exampleapp/new_note_spa)
    activate server
    Note over browser, server: Payload: { "content": "test", "date": "2026-06-26..." }
    server-->>browser: HTTP 201 Created (Response: {"message":"note created"})
    deactivate server

    Note right of browser: The server confirms creation, and the browser handles it silently in the background