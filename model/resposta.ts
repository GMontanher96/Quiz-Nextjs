export default class RespostaModel {
    #valor: string 
    #certa: boolean
    #revelada: boolean 

    constructor(valor: string, certa: boolean, revelada = false) {
        this.#valor = valor
        this.#certa = certa
        this.#revelada = revelada
    }

    static respostaCorreta(valor: string) {
        return new RespostaModel(valor, true)
    }
    static respostaErrada(valor: string) {
        return new RespostaModel(valor, false)
    }

    get valor() {
        return this.#valor
    }

    get certa() {
        return this.#certa
    }

    get revelada() {
        return this.#revelada
    }

    revelar() {
        return new RespostaModel(this.#valor, this.#certa, true)
    }

    // this = referencia a instancia atual

    converterParaObjeto() {
        return {
            valor: this.#valor, 
            certa: this.#certa,
            revelada: this.#revelada
        }
    }

}