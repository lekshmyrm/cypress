/// <reference types="cypress" />
import MediaPage from "../support/mediaPage.js"
const mediapage = new MediaPage()
describe('I visit nsw.gov.au Media releases page', () => {
    before(() => {
      cy.visit(Cypress.env('login_url')+'/media-releases')
      })
  
    it('I see an accordion named as “Filter by Minister” and inside the accordion, I select The Premier AND search', () => {

      mediapage.selectOption('Filter by Minister')
      mediapage.clickElement()
      mediapage.clickButton('Search')
          
    })

    it('verify  media release item cards should be filtered based on Minister selected', () =>{
      mediapage.gridVisible()
      mediapage.shouldListCardItems()      
    })

    it('When any filter applies, I see “Reset” button',() => {
      mediapage.resetLinkVisible()  
    })

    it('user clicks on “Reset” button',() =>{
      mediapage.resetLinkClick()
    })


})
  
