import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import "dotenv/config";

// creating mcp server
const server = new McpServer({
    name : "Currency Convertor MCP Server",
    version : "1.0.0"
})

server.tool(
    "convertCurrency",
    "Convert amount from one currency to another",
    {
        amount: z.number().describe("Amount to convert for e.g. 100"),
        from: z.string().describe("Base currency code, e.g USD"),
        to: z.string().describe("Target currency code, e.g INR"),
    },
    async ({amount , from , to}) => {
        try {
            const res = await fetch(`${process.env.API_KEY}${from.toUpperCase()}`)
            const data = await res.json();
            const rate = data.rates[to.toUpperCase()];
            const converted = (amount * rate).toFixed(2);
            const result = `${amount} ${from.toUpperCase()} = ${converted} ${to.toUpperCase()}`
            return {
                content : [
                    {
                        type : "text",
                        text : result
                    }
                ]
            }
        } catch(err) {
            content : [
                {
                    type : "text",
                    text : `Error: ${err.message}`
                }
            ]
        }
    }
)

// start server
async function startServer(params) {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error("MCP server started...")
}

startServer().catch((err) => {
    console.error("Failed to start MCP server: ",err);
    process.exit(1);
});
