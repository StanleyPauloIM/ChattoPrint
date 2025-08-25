const fs = require('fs');
const pdf = require('pdf-parse');

async function analyzePDF(filePath) {
    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdf(dataBuffer);

    // Exemplo simples: contar páginas
    return {
        numPages: data.numpages,
        hasText: data.text.length > 0
    };
}

module.exports = { analyzePDF };

