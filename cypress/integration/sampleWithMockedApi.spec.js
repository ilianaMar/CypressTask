import { bookListingPage } from '../../cypress/support/page-objects/pages/bookListingPage'
const bookFixturesData = require('../fixtures/books.json')

describe('Sample with mocked data', () => {
    const url = Cypress.config('demoQAUrl')
    it('sammple with get request', () => {
        const bookText = `${bookFixturesData.books[0].author} ${bookFixturesData.books[0].publisher} ${bookFixturesData.books[0].title}`
        cy.intercept(
            `${url}BookStore/v1/Books`,
            {fixture: 'books.json'}
        ).as('getBooks')

        cy.visit(`${url}books`)

        cy.wait('@getBooks').then((data) => {
            expect(data.response.statusCode).to.be.eql(200)
            expect(data.response.body.books[0].author).to.be.eql(bookFixturesData.books[0].author)
            expect(data.response.body.books[0].publisher).to.be.eql(bookFixturesData.books[0].publisher)
        })

        bookListingPage.getTableRow(0, bookText)
    })
})