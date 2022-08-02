const trelloAuthConfig = require('../support/config/trello-auth.json')
let key  = trelloAuthConfig.key
let token = trelloAuthConfig.token

describe('Trello api tests', () => {
    it('check user information', () => {
        cy.request({
            method: 'GET',
            url: `${Cypress.config('trelloApiUrl')}1/members/me`,
            qs: {
                key: `${key}`,
                token: `${token}`,
            },
            failOnStatusCode: false
        }).then(({ status, body }) => {
            expect(status).eql(200)
            expect(body.idBoards.length).eql(3)
            expect(body.username).eql('ilianamarkova5')
            expect(body.fullName).eql('Iliana Markova')
        })
    })
})