/// <reference types="cypress" />

import ServerestLogin from "../pages/login.page"

<<<<<<< Updated upstream
var bearer



ffffffffffffffffffffffffffffffffff
=======
describe("Testes na rota login", () => {
    beforeEach(() => {
        ServerestLogin.acessarServerest()
        ServerestLogin.logar()
    })

    it("Validando URL após login", () => {
        ServerestLogin.validarUrl()
    })

    /*it("Validando Mensagem de boas vindas 'Bem Vindo'", () => {
        ServerestLogin.validarMensagensTextoInicial()
    })*/

    it("Validando se os botões do cabeçalho estão visíveis", () => {
        ServerestLogin.validarBotõesDoHeader()
    })

})
>>>>>>> Stashed changes
