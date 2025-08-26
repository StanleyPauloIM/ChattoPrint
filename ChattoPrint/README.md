# 🖨️ ChattoPrint

## 📌 Problema
Muitas empresas e utilizadores perdem tempo e recursos ao imprimir documentos sem configurações otimizadas.  
Isto leva a desperdício de tinta, papel e tempo, além de erros frequentes por má configuração (cores desnecessárias, formato errado, etc.).

## 💡 Solução
O **ChattoPrint** é um assistente inteligente de impressão que:
- Recebe documentos via **WhatsApp** ou **interface web**.
- Analisa automaticamente o conteúdo (cores, tipo de documento, nº de páginas, OCR para imagens).
- Sugere a melhor forma de impressão.
- Aprende com pedidos anteriores para aplicar configurações automaticamente.
- Guarda histórico e padrões no **Firebase**.
- Pode enviar ficheiros para impressão ou para outros contactos/email.

## 👨‍💻 Quem está a desenvolver
Projeto idealizado e desenvolvido por **Stanley Paulo**.

## 🛠 Tecnologias usadas
- **Node.js + Express** → Backend.
- **WhatsApp API** (`whatsapp-web.js` para dev, Business API para produção).
- **Firebase Firestore** → Base de dados na nuvem.
- **Firebase Storage** → Armazenamento de documentos.
- **GPT gratuito** (Ollama local ou Hugging Face API) → Análise e interpretação.
- **Tesseract.js** → OCR para imagens.
- **pdf-lib / pdf-parse** → Análise de PDFs.
- **HTML/CSS/JS** → Interface web.

## 📋 Procedimentos gerais
1. Configurar ambiente Node.js e instalar dependências.
2. Criar projeto no Firebase (Firestore + Storage).
3. Integrar WhatsApp para receber e enviar mensagens/documentos.
4. Implementar análise automática de documentos.
5. Integrar GPT para interpretação e sugestões.
6. Guardar histórico e padrões no Firestore.
7. Criar interface web para empresas.
8. Testar localmente e migrar para produção.

---

## 🐔 Galinha matemática
