import express from "express";
import db from "./database/db.js";
import taskRoutes from "./routes/taskRoutes.js";

const app = express();

app.use(express.json());

db.run(`
    CREATE TABLE IF NOT EXISTS tasks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        description TEXT,
        completed INTEGER DEFAULT 0
    )
`);

app.get("/", (req, res) => {
    res.send("API Running");
});

app.use("/api/tasks", taskRoutes);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});