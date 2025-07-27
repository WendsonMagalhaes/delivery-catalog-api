
# 📦 Delivery Catalog API - Uso via Railway

Esta API disponibiliza um catálogo público de produtos do **Zé Delivery** e **iFood**, com dados atualizados e imagens hospedadas.

Você pode usar essa API diretamente pela URL pública, sem precisar rodar nada localmente.

---

## 🌐 URL Base (Produção)

```
https://delivery-catalog-api-production.up.railway.app
```

---

## 🔥 Endpoints Públicos

### Produtos Zé Delivery

| Método | Endpoint                            | Descrição                    |
| ------ | ----------------------------------- | ---------------------------- |
| GET    | `/ze-delivery`                      | Lista todos os produtos      |
| GET    | `/ze-delivery/:id`                  | Retorna produto pelo ID      |
| GET    | `/ze-delivery/nome/:nome`           | Busca produtos pelo nome     |
| GET    | `/ze-delivery/categoria/:categoria` | Busca produtos por categoria |

### Produtos iFood

| Método | Endpoint                      | Descrição                    |
| ------ | ----------------------------- | ---------------------------- |
| GET    | `/ifood`                      | Lista todos os produtos      |
| GET    | `/ifood/:id`                  | Retorna produto pelo ID      |
| GET    | `/ifood/nome/:nome`           | Busca produtos pelo nome     |
| GET    | `/ifood/categoria/:categoria` | Busca produtos por categoria |

---

## 💻 Como Consumir

Você pode usar ferramentas como **Postman**, **curl** ou diretamente no código para fazer chamadas HTTP.

### Exemplo com `curl`:

```bash
curl https://delivery-catalog-api-production.up.railway.app/ze-delivery
```

```bash
curl https://delivery-catalog-api-production.up.railway.app/ifood/nome/cerveja
```

---


## 📘 Documentação Swagger

Para documentação interativa, acesse:

```
https://delivery-catalog-api-production.up.railway.app/docs
```

---

## 🤔 Suporte e Contribuições

Para dúvidas ou sugestões, abra uma issue no GitHub:  
[https://github.com/WendsonMagalhaes/delivery-catalog-api/issues](https://github.com/WendsonMagalhaes/delivery-catalog-api/issues)

Contribuições são sempre bem-vindas!  

---

Desenvolvido por [Wendson Magalhães](https://github.com/WendsonMagalhaes)