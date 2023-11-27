describe("Login", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("Deve exibir nome do usuário logado", () => {
        const login = "João Fulano";
        const senha = "teste123";

        cy.efetuarLogin(login, senha);
        cy.get("#nameofuser")
            .should("be.visible")
            .should("have.text", "Welcome " + login);
    });

    it("Deve permitir deslogar usuário", () => {
        const login = "João Fulano";
        const senha = "teste123";

        cy.efetuarLogin(login, senha);
        cy.get("#logout2").should("be.visible").click();
        cy.get("#nameofuser").should("not.visible");
    });
});
