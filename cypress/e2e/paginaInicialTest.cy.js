import produtos from "../fixtures/produtos.json";

describe("Página inicial", () => {
    produtos.forEach((produto) => {
        it("Deve permitir acessar detalhes do produto: " + produto.nome, () => {
            cy.visit("/");
            cy.get(".card-block")
                .contains(produto.nome + produto.preco)
                .find("a")
                .should("have.text", produto.nome)
                .click();
            cy.get(".name").should("have.text", produto.nome);
            cy.get(".price-container").then(($item) => {
                cy.wrap($item)
                    .contains(produto.preco)
                    .find("small")
                    .should("have.text", " *includes tax");
            });
            cy.get("#more-information")
                .find("strong")
                .should("have.text", "Product description");

            cy.get("#more-information")
                .find("p")
                .should("have.text", produto.descricao);
        });
    });

    // SEM USO DE FIXTURES
    // it("Deve permitir acessar detalhes do produtos", () => {
    //     cy.visit("/");
    //     cy.get(".card-block")
    //         .contains("Samsung galaxy s6$360")
    //         .find("a")
    //         .should("have.text", "Samsung galaxy s6")
    //         .click();
    //     cy.get(".name").should("have.text", "Samsung galaxy s6");
    //     cy.get(".price-container").then(($item) => {
    //         cy.wrap($item)
    //             .contains("$360")
    //             .find("small")
    //             .should("have.text", " *includes tax");
    //     });
    //     cy.get("#more-information")
    //         .find("strong")
    //         .should("have.text", "Product description");

    //     cy.get("#more-information")
    //         .find("p")
    //         .should(
    //             "have.text",
    //             "The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420\n processor and it comes with 3GB of RAM. The phone packs 32GB of \ninternal storage cannot be expanded. "
    //         );
    // });
});
