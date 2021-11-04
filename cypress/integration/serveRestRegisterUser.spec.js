/// <reference types="cypress" />

import ServerestLogin from "../pages/login.page"
import ServerestRegisterUser from "../pages/register_user.page"

describe("Testes na rota cadastro de usuário", () => {
    beforeEach(() => {
        ServerestLogin.acessarServerest()
    })

    it("TESTE CADASTRO USER", () => {
        ServerestRegisterUser.cadastrarUsuario()
    })

})