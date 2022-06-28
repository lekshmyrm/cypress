/// <refernce types="Cypress"/>
describe('Sample1', function()
{

    it('TC1', function()
    {
        cy.visit("https://www.inquisitive.com/about")
       // cy.wait(1000)
     cy.contains('Inquisitive Differentiation')
          cy.log("Found the word")
        
              
    }

    
    
    )
}

)
