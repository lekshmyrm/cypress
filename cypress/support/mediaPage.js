class MediaPage

{

    clickElement()
{
    return cy.get('[data-drupal-selector="edit-field-ministers-target-id-464"]').click({force:true})
}

clickButton(label)
{
    return  cy.get('#edit-submit-media-release').contains(label).click({timeout :6000})

}

selectOption(label)
{
  return  cy.get('.search-filter__title').contains(label).click()
}

gridVisible()
{
   return cy.get('.card-grid__cards').should('be.visible')
}

shouldListCardItems()
{
    return   cy.get('.card-grid__cards').should(($list) =>{
        expect($list).to.have.length.gte(1)
    })
}

resetLinkVisible()
{
    cy.get('[data-drupal-selector="edit-reset"]').should('be.visible')
}

resetLinkClick()
{
    cy.get('[data-drupal-selector="edit-reset"]').click()
}

}

export default MediaPage;
