/// <reference types="cypress" />

describe('Teste inclusão de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve incluir contato', () => {
        cy.get('input[placeholder="Nome"]').type('João')
        cy.get('input[placeholder="E-mail"]').type('joao@gmail.com')
        cy.get('input[placeholder="Telefone"]').type('77777777777')
        cy.get('.adicionar').click()
    })

    it('Deve Editar contato', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .edit').click()
        cy.get('input[placeholder="Nome"]').clear().type('Rodrigo')
        cy.get('input[placeholder="E-mail"]').clear().type('rodrigo@gmail.com')
        cy.get('input[placeholder="Telefone"]').clear().type('99999999999')
        cy.get('.alterar').click()
    })


    it('Deve Excluir contato', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .delete').click()
    })
})