# Cypress E2E - SauceDemo

Projeto de automação de testes End-to-End (E2E) usando **Cypress**, com foco em boas práticas:
- Organização por pastas (auth, checkout)
- Uso de **Custom Commands**
- Uso de **Fixtures**
- Testes funcionais reais

---

## 🚀 Tecnologias usadas

- Cypress
- JavaScript
- Node.js
- Git / GitHub

---

## 📁 Estrutura do projeto

cypress/
e2e/
auth/
login.cy.js
checkout/
checkout.cy.js
spec.cy.js
fixtures/
user.json
support/
commands.js
e2e.js


---

## 🧪 Cenários automatizados

### ✅ Login
- Realiza login com usuário válido

### ✅ Checkout completo
- Login
- Adicionar produto no carrinho
- Validar produto no carrinho
- Finalizar checkout
- Validar mensagem de sucesso

---

## ▶️ Como rodar o projeto

1) Instalar dependências

```bash
npm install

2) Abrir o Cypress

npx cypress open

3) Rodar no modo headless (terminal)

npx cypress run

🔑 Dados de teste

Os dados de login ficam em:

cypress/fixtures/user.json

👤 Autor

Nilcas

QA / Test Analyst - Estudos em Automação de Testes (Cypress)







