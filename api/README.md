# Marvel API

## Structure

```
app
├── config.json
├── index.js
├── middlewares
├── resources
│   ├── resourceX
│   │   ├── controller.js
│   │   ├── index.js
│   │   ├── routes.js
│   │   └── validations.js
│   └── index.js
├── routes
```

## API Documentation

## **Characters**

Get all characters

- **URL**

  `api/characters`

- **Method:**

  `GET`

Get one character

- **URL**

  `api/characters/:id`

- **Method:**

  `GET`

* **URL Params**

  **Required:**

  `id=[String]`
