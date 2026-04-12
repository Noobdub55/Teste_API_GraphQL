const { spec } = require('pactum');

describe('Contract - Add Category', () => {

  it('Deve validar o contrato da criação de categoria', async () => {

    await spec()
      .post('http://lojaebac.ebaconline.art.br/graphql')
      .withJson({
        query: `
          mutation ($name: String) {
            addCategory(name: $name) {
              name
            }
          }
        `,
        variables: {
          name: "Categoria Teste " + Date.now()
        }
      })
      .expectStatus(200)
      .expectJsonSchema({
        type: 'object',
        properties: {
          data: {
            type: 'object',
            properties: {
              addCategory: {
                type: 'object',
                properties: {
                  name: {
                    type: ['string', 'null']
                  }
                },
                required: ['name']
              }
            },
            required: ['addCategory']
          }
        },
        required: ['data']
      });

  });

});