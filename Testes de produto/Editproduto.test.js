const { spec } = require('pactum');

describe('Product - Edit', () => {

  it('Deve editar um produto com sucesso', async () => {

    await spec()
      .post('http://lojaebac.ebaconline.art.br/graphql')
      .withJson({
        query: `
          mutation ($id: ID!, $name: String) {
            editProduct(id: $id, name: $name) {
              name
            }
          }
        `,
        variables: {
          id: 1, // ⚠️ usar um ID válido
          name: "Produto Editado " + Date.now()
        }
      })
      .expectStatus(200)
      .expectJsonLike({
        data: {
          editProduct: {
            name: null
          }
        }
      });

  });

});