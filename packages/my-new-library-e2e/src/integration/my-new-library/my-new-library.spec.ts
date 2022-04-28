describe('my-new-library: MyNewLibrary component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mynewlibrary--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to MyNewLibrary!');
    });
});
