describe('Write/Read Data to Json / Text File', () => {
  it('Should write data into Json', () => {
    cy.writeFile('log.json', { name: 'Mike', age: 25})
  })
  
  it('Should write data into Text File', () => {
    cy.writeFile('log.txt', 'Hello World')
  })

  it('Should read and verify data from Json', () => {
    cy.readFile('log.json').its('age').should('eq',25)
  })

  it('Should read and verify data from text file', () => {
    cy.readFile('log.txt').should('eq','Hello World')
  })
})