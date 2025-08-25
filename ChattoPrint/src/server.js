const express = require('express');
const multer = require('multer');
const { analyzePDF } = require('./services/pdfService');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), async (req, res) => {
    try {
        const analysis = await analyzePDF(req.file.path);
        res.json({ message: 'Análise concluída', analysis });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(3000, () => console.log('ChattoPrint API a correr na porta 3000'))

