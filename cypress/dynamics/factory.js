
import faker from "faker" 

export default class Factory {

    static UsuarioBody(){
        return{
            "nome": `${faker.name.firstName()} ${faker.name.lastName()}`,
            "email": `${faker.internet.email()}`,
            "password": faker.internet.password(),
            "administrador": "true"
        }
    }
    static UsuarioSemAdmin(){
        return{
            "nome": `${faker.name.firstName()} ${faker.name.lastName()}`,
            "email": `${faker.internet.email()}`,
            "password": `${faker.internet.password()}`,
            "administrador": "false"
        }
    }
    static UsuarioExistente(){
        return {
            "nome": "Fulano da Silva",
            "email": "beltrano@qa.com.br",
            "password": "teste",
            "administrador": "true"
        }
    }
    static EditarUsuario(){
        return{
            "nome": `${faker.name.firstName()} ${faker.name.lastName()}`,
            "email": `${faker.internet.email()}`,
            "password": faker.internet.password(),
            "administrador": "true"
        }
    }
}
