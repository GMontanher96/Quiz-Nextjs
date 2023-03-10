import { random } from "@/functions/arrays"

export default class QuestaoModel {
    #id: number
    #enunciado: string
    #respostas: any[]
    #acertou: boolean 
    //#respondida: boolean

    constructor(id: number, enunciado: string, respostas: any[], acertou = false) {
        this.#id = id
        this.#enunciado = enunciado 
        this.#respostas = respostas
        this.#acertou = acertou
    }

    get id() {
        return this.#id
    }
    get enunciado() {
        return this.#enunciado
    }
    get respostas() {
        return this.#respostas
    }
    get acertou() {
        return this.#acertou
    }

    get respondida() {
        // FIXME: implementar esse método. 
        for(let resposta of this.#respostas) {
            if(resposta.revelada) return true
        }
        return false
    }

    responderCom(indice: number): QuestaoModel {
        const acertou = this.#respostas[indice]?.certa
        const respostas = this.#respostas.map((resposta, i) => {
            const respostaSelecionada = indice === i
            const deveRevelar = respostaSelecionada || resposta.certa
            return deveRevelar ? resposta.revelar() : resposta
        })
        return new QuestaoModel(this.id, this.enunciado, respostas, acertou)
    }

    respostasRandom(): QuestaoModel {
        let randomRespostas = random(this.#respostas)
        return new QuestaoModel(this.#id, this.#enunciado, randomRespostas, this.#acertou)
    }

    converterParaObjeto() {
        return {
            id: this.#id,
            enunciado: this.#enunciado, 
            respondida: this.respondida,
            acertou: this.#acertou,
            respostas: this.#respostas.map(resp => resp.converterParaObjeto()),
        }
    }

 
}