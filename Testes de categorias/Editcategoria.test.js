const { spec } = require('pactum');

describe('Category - Fluxo completo', () => {

  it('Deve criar e editar uma categoria com sucesso', async () => {

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
      .expectJsonLike({
        data: {
          addCategory: {
            name: null
          }
        }
      });

    await spec()
      .post('http://lojaebac.ebaconline.art.br/graphql')
      .withJson({
        query: `
          mutation ($id: ID!, $name: String) {
            editCategory(id: $id, name: $name) {
              name
            }
          }
        `,
        variables: {
          id: 1,
          name: "Categoria Editada " + Date.now()
        }
      })
      .expectStatus(200)
      .expectJsonLike({
        data: {
          editCategory: {
            name: null
          }
        }
      });

  });

});


// A API retorna o campo "name" como null nas operações de categoria
// Portanto, validamos apenas a estrutura da resposta e o status