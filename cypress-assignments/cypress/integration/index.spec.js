

beforeEach(()=>{
     cy.visit("http://localhost:3000");
});
describe("this is a sample test suite",()=>{
     it("check if page is loaded or not",()=>{          
          cy.get("button[data-id='delete']").should("have.length",4);

     })

     it("check if the initial data is present or not ",()=>{ 
          cy.get(".todos").children().should("have.length",4)

     })

     it("check if on clicking delete the length decrease by 1",()=>{ 
          console.log(cy.get("button[data-id='delete']"));
          cy.get("button[data-id='delete']").first().click();
          cy.get(".todos").children().should("have.length",3)
          
     })
})