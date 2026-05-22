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

export default router;