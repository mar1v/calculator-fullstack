const http = require("http");

const server = http.createServer((req, res) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  };

  if (req.method === "OPTIONS") {
    res.writeHead(204, headers);
    res.end();
    return;
  }

  if (req.method === "POST" && req.url === "/calculate") {
    let body = "";
    req.on("data", chunk => { body += chunk.toString(); });
    req.on("end", () => {
      try {
        const { num1, num2, operation } = JSON.parse(body);
        const a = parseFloat(num1);
        const b = parseFloat(num2);

        let result;
        switch (operation) {
          case "+": result = a + b; break;
          case "-": result = a - b; break;
          case "*": result = a * b; break;
          case "/": result = b !== 0 ? a / b : "Error: Division by zero"; break;
          default: result = "Invalid operation";
        }

        res.writeHead(200, { ...headers, "Content-Type": "application/json" });
        res.end(JSON.stringify({ result }));
      } catch (err) {
        res.writeHead(400, { ...headers, "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Invalid request" }));
      }
    });
  } else {
    res.writeHead(404, headers);
    res.end();
  }
});

server.listen(5000, () => console.log("✅ Server running at http://localhost:5000"));
