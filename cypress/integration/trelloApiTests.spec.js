const trelloAuthConfig = require('../support/config/trello-auth.json')

describe('Trello api tests', () => {
    it('check user information', () => {
        let key  = trelloAuthConfig.key
        let token = trelloAuthConfig.token
        cy.request({
            method: 'GET',
            url: 'https://api.trello.com/1/members/me',
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