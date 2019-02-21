describe('Counter', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080')
  })

  it('should increment the counter', () => {
    cy.get('.increment').click()
    expect(cy.contains('Current count: 1')).toBeTruthy
  })

  it('should decrement the counter', () => {
    cy.get('.decrement').click()
    expect(cy.contains('Current count: -1')).toBeTruthy
  })
})