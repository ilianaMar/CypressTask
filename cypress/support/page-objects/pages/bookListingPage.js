class BookListingPage {
    constructor() {
        this.litistingTableId = '.rt-table'
        this.listingTableBodyId = '.rt-tbody'
        this.listingTableRow = '.rt-tr-group'
    }

    getTableRow(index){
        cy.get(this.litistingTableId)
            .should('be.visible')
            .find(this.listingTableBodyId)
            .find(this.listingTableRow)
            .eq(index)
            .invoke('text')
            .then((text) => {
                expect(text).to.contain(text)
            })
    }
}

export const bookListingPage = new BookListingPage()