const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Caminho para o ficheiro da base de dados
const dbPath = path.resolve(__dirname, '../../chattoPrint.db');

// Criar/abrir a base de dados
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Erro ao conectar à base de dados:', err.message);
    } else {
        console.log('📦 Base de dados SQLite conectada com sucesso.');
    }
});

// Criar tabelas se não existirem
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            whatsapp TEXT UNIQUE
        )
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS print_history (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER,
            file_name TEXT,
            pages INTEGER,
            color BOOLEAN,
            format TEXT,
            date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY(user_id) REFERENCES users(id)
        )
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS print_patterns (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER,
            doc_type TEXT,
            default_color BOOLEAN,
            default_format TEXT,
            FOREIGN KEY(user_id) REFERENCES users(id)
        )
    `);
});

module.exports = db;

