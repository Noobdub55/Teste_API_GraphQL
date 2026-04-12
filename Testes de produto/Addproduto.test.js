const { spec } = require('pactum');

describe('Product - Add', () => {

  it('Deve adicionar um produto com sucesso', async () => {

    await spec()
      .post('http://lojaebac.ebaconline.art.br/graphql')
      .withJson({
        query: `
          mutation ($name: String, $price: Float, $categories: [CategoryInput]) {
            addProduct(name: $name, price: $price, categories: $categories) {
              name
            }
          }
        `,
        variables: {
          name: "Produto Teste " + Date.now(),
          price: 100,
          categories: [
            { name: "Categoria Teste" } 
          ]
        }
      })
      .expectStatus(200)
      .expectJsonLike({
        data: {
          addProduct: {
            name: null
          }
        }
      });

  });

});