# Currency Converter MCP Server

This project implements a Model Context Protocol (MCP) server that exposes a `convertCurrency` tool. This tool allows applications to programmatically convert amounts between various currencies by leveraging an external exchange rate API. It's designed for seamless integration into larger AI systems as a callable function.

<img width="1919" height="1016" alt="Image" src="https://github.com/user-attachments/assets/c5557b16-ea66-40eb-b970-29574934e711" />


## Features

*   **Currency Conversion Tool**: Exposes a `convertCurrency` tool that takes an amount, source currency, and target currency.
*   **Real-time Exchange Rates**: Fetches current exchange rates from `open.er-api.com`.
*   **MCP Compliant**: Built with the `@modelcontextprotocol/sdk` for standard tool communication.
*   **Robust Input Validation**: Uses `zod` for strong schema validation of tool arguments.
*   **Error Handling**: Provides informative error messages for API failures or invalid currency codes.

## Technologies Used

*   **Node.js**: JavaScript runtime environment.
*   **@modelcontextprotocol/sdk**: Official SDK for building and interacting with MCP servers.
*   **Zod**: TypeScript-first schema validation library for defining tool inputs.
*   **Dotenv**: Manages environment variables for secure API key handling.
*   **Fetch API**: For making HTTP requests to external services.
*   **open.er-api.com**: Free and open-source API for currency exchange rates.

## Prerequisites

Ensure you have the following installed:

*   **Node.js**: Version 18 or higher.
*   **npm**: Node Package Manager (comes with Node.js).

The `open.er-api.com` service used in this project does not require an API key for its basic endpoints.

## Project Structure
```
├── node_modules/
├── .env
├── .gitignore
├── currencyConverted.js
├── package-lock.json
└── package.json
```


## Getting Started

Follow these steps to set up and run your MCP Currency Converter server.

### Installation

1.  **Initialize a Node.js project** (if you haven't already):
    ```bash
    npm init -y
    ```
    This will create a `package.json` file.

2.  **Edit `package.json`**: Open the `package.json` file and add `"type": "module"` to enable ES module syntax. This is crucial for using `import` statements.
    ```json
    {
      "name": "mcp-currency-converter",
      "version": "1.0.0",
      "description": "A Model Context Protocol server for currency conversion.",
      "main": "currencyConverted.js",
      "type": "module",  <-- ADD THIS LINE
      "scripts": {
        "start": "node currencyConverted.js",
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "keywords": [
        "mcp",
        "modelcontextprotocol",
        "currency",
        "converter",
        "tool",
        "nodejs"
      ],
      "author": "",
      "license": "ISC"
    }
    ```

3.  **Install dependencies**:
    ```bash
    npm install @modelcontextprotocol/sdk zod dotenv
    ```

### Configuration

1.  **Create a `.env` file**: In the root directory of your project, create a file named `.env`.

2.  **Add your API base URL**: Open the `.env` file and add the base URL for the exchange rate API:
    ```env
    API_KEY="https://open.er-api.com/v6/latest/"
    ```
    Ensure there are no spaces around the `=` sign.

### Running the MCP Server

To start the MCP server, execute the main JavaScript file:

```bash
npm currencyConverted.js
```

