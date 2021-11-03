/// <reference types="cypress" />

import Ajv from "ajv"
const ajv = new Ajv({allErrors: true, verbose: true, strict: false})

Cypress.Commands.add("logar", usuario => {
    return cy.request({
        method: "POST",
        url: `${Cypress.env("base_url")}/login`,
        failOnStatusCode: false,
        body: usuario
    })
})
