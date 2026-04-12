const { spec } = require('pactum');

describe('Contract - Edit Product', () => {

  it('Deve validar o contrato da edição de produto', async () => {

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
          id: 1,
          name: "Produto Editado " + Date.now()
        }
      })
      .expectStatus(200)
      .expectJsonSchema({
        type: 'object',
        properties: {
          data: {
            type: 'object',
            properties: {
              editProduct: {
                type: 'object',
                properties: {
                  name: {
                    type: ['string', 'null']
                  }
                },
                required: ['name']
              }
            },
            required: ['editProduct']
          }
        },
        required: ['data']
      });

  });

});