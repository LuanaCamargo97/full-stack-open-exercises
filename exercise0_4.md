```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: The user types "test" and clicks the submit button

    browser->>server: POST [https://studies.cs.helsinki.fi/exampleapp/new_note_spa](https://studies.cs.helsinki.fi/exampleapp/new_note_spa)
    activate server
    Note over browser, server: Payload: { "content": "test", "date": "2026-06-26..." }
    server-->>browser: HTTP 201 Created (Response: {"message":"note created"})
    deactivate server

    Note right of browser: The browser receives the success response and updates the UI with the new note