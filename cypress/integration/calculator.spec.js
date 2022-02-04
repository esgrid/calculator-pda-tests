describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should display the running total when number buttons are pressed', () => {
    cy.get('#number3').click();
    cy.get('#number5').click();
    cy.get('#number4').click();
    cy.get('.display').should('contain', '354');
  })

  it('arithmetic operations update the display with the running total everytime they are pressed', () => {
    cy.get('#number2').click();
    cy.get('#operator-add').click();
    cy.get('#number9').click();
    cy.get('#operator-subtract').click();
    cy.get('.display').should('contain', '11');
  })

  it('allows multiple operations to be chained together', () => {
    cy.get('#number2').click();
    cy.get('#operator-add').click();
    cy.get('#number9').click();
    cy.get('#operator-subtract').click();
    cy.get('#number1').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '10');
  })

  it('the output is the expected one for positive numbers', () => {
    cy.get('#number1').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '2');

  })

  it('the output is the expected one for negative numbers', () => {
    cy.get('#number1').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-7');
  })

  it('the output is the expected one for decimal numbers', () => {
    cy.get('#number1').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number9').click();
    cy.get('#operator-add').click();
    cy.get('#number0').click();
    cy.get('#decimal').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-6.5');
  })

  it('the output is the expected one for very large numbers', () => {
    cy.get('#number1').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number9').click();
    cy.get('#operator-add').click();
    cy.get('#number0').click();
    cy.get('#decimal').click();
    cy.get('#number5').click();
    cy.get('#operator-multiply').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();    
    cy.get('#number0').click();    
    cy.get('#number0').click();    
    cy.get('#number0').click();    
    cy.get('#number0').click(); 
    cy.get('#number0').click();    
    cy.get('#number0').click();    
    cy.get('#number0').click();        
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-6500000000');
  })

  it('says that division by cero is undefined', () => {
    cy.get('#number1').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'undefined');
  })

})