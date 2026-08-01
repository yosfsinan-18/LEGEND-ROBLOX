// LEGEND Roblox Mod Menu - Key System Server
// Developers: @YUSEEF_SURCHI, @Blnd_555, @ArthUr3345

const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({
        project: "LEGEND",
        status: "Active",
        maxUsers: "105M",
        validity: "6 Months",
        developers: ["@YUSEEF_SURCHI", "@Blnd_555", "@ArthUr3345"]
    }));
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`LEGEND Server running on port ${PORT}`);
});
