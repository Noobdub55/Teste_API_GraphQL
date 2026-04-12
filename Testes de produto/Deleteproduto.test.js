const { spec } = require('pactum');

describe('Product - Delete', () => {

  it('Deve deletar um produto com sucesso', async () => {

    await spec()
      .post('http://lojaebac.ebaconline.art.br/graphql')
      .withJson({
        query: `
          mutation ($id: ID!) {
            deleteProduct(id: $id) {
              name
            }
          }
        `,
        variables: {
          id: 1 
        }
      })
      .expectStatus(200)
      .expectJsonLike({
        data: {
          deleteProduct: {
            name: null
          }
        }
      });

  });

});