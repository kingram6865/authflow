import express from 'express';
import cors from 'cors'
import { routes } from './routes';
import { initializeDbConnection } from './db';

const PORT = process.env.PORT || 8081;

const app = express();
app.use(cors());
// This allows us to access the body of POST/PUT
// requests in our route handlers (as req.body)
app.use(express.json());

// Add all the routes to our Express server
// exported from routes/index.js
routes.forEach(route => {
    // console.log(`app[${route.method}](${route.path}, ${route.handler})`)
    app[route.method](route.path, route.handler);
});

// Connect to the database, then start the server.
// This prevents us from having to create a new DB
// connection for every request.
initializeDbConnection()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`);
        });
    });