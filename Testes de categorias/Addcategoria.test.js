const { spec } = require('pactum');

describe('Category - Add', () => {

  it('Deve adicionar uma nova categoria', async () => {
    await spec()
      .post('http://lojaebac.ebaconline.art.br/graphql')
      .withJson({
        query: `
          mutation {
            addCategory(name: "Categoria Teste") {
              name
            }
          }
        `
      })
      .expectStatus(200);
  });

});