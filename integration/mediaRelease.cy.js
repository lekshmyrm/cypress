/// <reference types="cypress" />
import MediaPage from "../support/mediaPage"
const mediapage = new MediaPage()
describe('NSW Media Releases Page', () => {
    before(() => {
      cy.visit(Cypress.env('login_url')+'/media-releases')
      })
  
    it('Select The Premier and Search', () => {

      mediapage.selectOption('Filter by Minister')
      mediapage.clickElement()
      mediapage.clickButton('Search')
          
    })

    it('Verify Grid is populated', () =>{
      mediapage.gridVisible()
      mediapage.shouldListCardItems()      
    })

    it('Reset link should be visible',() => {
      mediapage.resetLinkVisible()  
    })

    it('Click Reset button',() =>{
      mediapage.resetLinkClick()
    })


})
  
