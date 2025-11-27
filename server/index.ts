import http from 'http';

const PORT = process.env.PORT || 3001;

const requestListener = (req: http.IncomingMessage, res: http.ServerResponse) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World');
};

const server = http.createServer(requestListener);
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
