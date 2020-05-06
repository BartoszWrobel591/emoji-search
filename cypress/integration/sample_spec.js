describe('Sample test', () => {
    it('Search lollipop emoji', () => {
        cy.visit('http://localhost:3000/')
        cy.get('input').type('lollipop')
        cy.get('.component-emoji-result-row').should('have.length', 1)
        cy.contains('Lollipop').should('have.class', 'title')
    })
})
