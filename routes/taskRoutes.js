import express from "express";
import db from "../database/db.js";

const router = express.Router();

router.post("/", (req, res) => {
    const { title, description } = req.body;

    const query = `
        INSERT INTO tasks (title, description)
        VALUES (?, ?)
    `;

    db.run(query, [title, description], function (err) {
        if (err) {
            return res.status(500).json({
                error: err.message,
            });
        }

        res.status(201).json({
            id: this.lastID,
            title,
            description,
        });
    });
});

router.get("/", (req, res) => {
    const query = `SELECT * FROM tasks`;

    db.all(query, [], (err, rows) => {
        if (err) {
            return res.status(500).json({
                error: err.message,
            });
        }

        res.status(200).json(rows);
    });
});

router.get("/:id", (req, res) => {
    const query = `SELECT * FROM tasks WHERE id = ?`;

    db.get(query, [req.params.id], (err, row) => {
        if (err) {
            return res.status(500).json({
                error: err.message,
            });
        }

        if (!row) {
            return res.status(404).json({
                message: "Task not found",
            });
        }

        res.status(200).json(row);
    });
});

export default router;