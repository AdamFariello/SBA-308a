const express = require('express');
const httpProxy = require('http-proxy');
const app = express();
const PORT = 3000; // Port for the proxy server
//const API_SERVICE_URL = "https://example.com/api"; // Target API
const API_SERVICE_URL = "https://pastebin.com/api/api_post.php"


const proxy = httpProxy.createProxyServer({});

app.use('/api', (req, res) => {
  // Append /api to the target URL
  req.url = API_SERVICE_URL + req.url;
  proxy.web(req, res, { target: API_SERVICE_URL });
});

app.listen(PORT, () => console.log(`Proxy server running on port ${PORT}`));
