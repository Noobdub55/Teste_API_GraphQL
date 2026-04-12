# 🧪 Testes de API - GraphQL (EBAC)

Projeto desenvolvido para prática de testes de API utilizando **PactumJS**, **Jest** e **GraphQL**, como parte do curso de QA da EBAC.

---

## 🚀 Tecnologias utilizadas

* Node.js
* Jest
* PactumJS
* GraphQL
* jest-html-reporter

---

## 📂 Estrutura do projeto

```
Testes/
│
├── Testes de categorias/
│   ├── Addcategoria.test.js
│   ├── Editcategoria.test.js
│   ├── Deletecategoria.test.js
│   └── Contractcategoria.test.js
│
├── Testes de produto/
│   ├── Addproduto.test.js
│   ├── Editproduto.test.js
│   ├── Deleteproduto.test.js
│   └── Contractproduto.test.js
│
├── package.json
└── README.md
```

---

## 🧠 Tipos de testes implementados

### ✔ Testes Funcionais (CRUD)

* Categorias:

  * Criar categoria
  * Editar categoria
  * Deletar categoria

* Produtos:

  * Criar produto
  * Editar produto
  * Deletar produto

---

### ✔ Testes de Contrato

Validação da estrutura das respostas da API, garantindo que o contrato entre cliente e servidor seja respeitado, independentemente dos valores retornados.

---

## ▶️ Como executar o projeto

### 1. Instalar dependências

```bash
npm install
```

---

### 2. Rodar os testes

```bash
npm test
```

---

## 📊 Relatório de testes

Após a execução dos testes, será gerado um relatório HTML em:

```
/reports/report.html
```

Abra o arquivo no navegador para visualizar:

* Testes executados
* Sucessos e falhas
* Logs da execução

---

## ⚠️ Observações

* A API utilizada pode retornar valores `null` em alguns endpoints.
* Por isso, os testes de contrato foram implementados para validar a **estrutura** da resposta, e não valores específicos.
* Algumas validações foram adaptadas para evitar falsos negativos.

---

## 🎯 Objetivo do projeto

Demonstrar na prática:

* Criação de testes automatizados de API
* Validação de contratos em GraphQL
* Organização de testes em suítes
* Geração de relatórios de execução

---

## 👨‍💻 Autor

Projeto desenvolvido por **[Matheus Lima de Aquino]** durante o curso de QA da EBAC.

---
