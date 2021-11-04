///<reference types="cypress"/>

import Base from "./base.page";

const BTN_REGISTER_USER ="[data-testid*=cadastrar]"

const INP_NAME = "[data-testid*=nome]"
const INP_EMAIL = "[data-testid*=email]"
const INP_PASSWORD = "[data-testid*=password]"

export default class ServerestRegisterUser extends Base {
    static cadastrarUsuario() {
        super.clickOnElement(BTN_REGISTER_USER)
        super.typeValue(INP_NAME, "Constante Vieira")
        super.typeValue(INP_EMAIL, "constanteVieira@hotmail.com")
        super.typeValue(INP_PASSWORD, "Teste")
    }
}