const { spec } = require('pactum');

describe('Category - Delete', () => {

  it('Deve deletar uma categoria com sucesso', async () => {

    await spec()
      .post('http://lojaebac.ebaconline.art.br/graphql')
      .withJson({
        query: `
          mutation ($id: ID!) {
            deleteCategory(id: $id) {
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
          deleteCategory: {
            name: null
          }
        }
      });

  });

});