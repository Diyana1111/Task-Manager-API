import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./database/tasks.db", (err) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log("SQLite Connected");
    }
});

export default db;