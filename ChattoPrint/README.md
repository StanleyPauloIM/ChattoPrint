# ChattoPrint

Plataforma para integrar mensagens (p.ex., WhatsApp) com um serviço de impressão.

## Estrutura

```
ChattoPrint/
 ├─ src/
 │   ├─ server.js        # Ponto de entrada do backend
 │   ├─ routes/          # Rotas da API
 │   ├─ services/        # Lógica de análise e impressão
 │   ├─ utils/           # Funções auxiliares (ex.: detetar cores, OCR)
 │   └─ config/          # Configurações (WhatsApp API, impressoras, etc.)
 ├─ public/              # Interface web (para empresas)
 ├─ package.json
 └─ README.md
```

## Como executar

1. Instale dependências: `npm install`
2. Inicie o servidor: `npm start`

Por padrão, o servidor corre em `http://localhost:3000`.

