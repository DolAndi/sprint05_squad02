/// <reference types="cypress" />

import Factory from "../dynamics/factory.js"

var bearer
var idProduto

describe("Testes da rota /produtos", () => {
    describe("Deve efetuar os testes positivos da rota", () => {
        it("Deve cadastrar produto corretamente possuindo status code 201 e exibir propriedade message", () => {

            let produto = Factory.gerarProduto()
    
            cy.cadastrarProduto(bearer, produto).then(res => {
                expect(res.status).to.be.equal(201);
                expect(res.body).has.property("message").equal("Cadastro realizado com sucesso")
            })
        })
        it("Deve buscar produto por id e verificar status code 200", () =>{
            cy.buscarProdutoPorId(idProduto).then(res => {
                expect(res.status).to.be.equal(200);
            })
        })
    })
    describe("Deve efetuar os testes negativos da rota", () => {
        it("Deve falhar o cadastro do produto por ser existente, possuindo propriedade message e status code 400", () => {
            let produtoExistente = Factory.produtoExistente(); 
            cy.cadastrarProduto(bearer, produtoExistente).then(res =>{
                expect(res.status).to.be.equal(400);
                expect(res.body).has.property("message").equal("Já existe produto com esse nome")
            })
        })
        it("Deve falhar o cadastro do produto por não possuir nome, possuindo propriedade message e status code 400", () => {
            let produtoSemNome = Factory.produtoNomeBranco()
            cy.cadastrarProduto(bearer, produtoSemNome).then(res =>{
                expect(res.status).to.be.equal(400);
                expect(res.body).has.property("nome").equal("nome não pode ficar em branco")
            })
        })
        it("Deve falhar o cadastro do produto por não possuir descrição, possuindo propriedade message e status code 400", () => {
            let produtoSemDescricao = Factory.produtoSemDescricao();
            cy.cadastrarProduto(bearer, produtoSemDescricao).then(res =>{
                expect(res.status).to.be.equal(400);
                expect(res.body).has.property("descricao").equal("descricao não pode ficar em branco")
            })
        })
        it("Deve falhar o cadastro do produto por não possuir nome, possuindo propriedade message e status code 400", () => {
            let produtoSemNome = Factory.produtoSemNome()
            cy.cadastrarProduto(bearer, produtoSemNome).then(res =>{
                expect(res.status).to.be.equal(400);
                expect(res.body).has.property("nome").equal("nome é obrigatório")
            })
        })
    })
})