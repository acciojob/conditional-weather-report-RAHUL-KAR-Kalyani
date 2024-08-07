// cypress/integration/weather_spec.js
describe("testing conditional weather report", () => {

    const baseURL = "http://localhost:8080";

    beforeEach(() => { cy.visit(baseURL); });

    it("testing tags", () => {
        cy.get('p').should('have.length', 2);
        cy.get('span').should('have.length', 1);
    });

    it('testing temperature and color', () => {
        const red = 'rgb(255, 0, 0)';
        cy.get('p').first().contains('Temperature: 25');
        cy.get('span').should('have.css', 'color', red);
        cy.get('p').last().contains('Conditions: Sunny');
    });

});
