/// <reference types="cypress" />

import Ajv from 'ajv'
const ajv = new Ajv({allErrors: true, verbose: true, strict: false})

//USUÁRIO
Cypress.Commands.add('cadastrarUsuario', (usuario) =>{
    return cy.request({
        method: 'POST',
        url: `${Cypress.env('base_url')}/usuarios`,
        failOnStatusCode: false,
        body: usuario
    })
})
Cypress.Commands.add('listarUsuarios', (usuario) =>{
    return cy.request({
        method: 'GET',
        url: `${Cypress.env('base_url')}/usuarios`,
        failOnStatusCode: false,
        body: usuario
    })
})
Cypress.Commands.add('buscarUsuarioId', (id) => {
    return cy.request({
        method: 'GET',
        url: `${Cypress.env('base_url')}/usuarios/${id}`,
        failOnStatusCode: false,
    })
})
Cypress.Commands.add('editarUsuario', (id) => {
    return cy.request({
        method: 'PUT',
        url: `${Cypress.env('base_url')}/usuarios/${id}`,
        failOnStatusCode: false,
    })
})