import questoes from '../banco/questoesDb'

export default (req, res) => {
  const idSelecionado = +req.query.id

  const unicaQuestaoOuNada = questoes.filter(questao => questao.id === idSelecionado)

  if(unicaQuestaoOuNada.length === 1) {
    const questaoSelecionada = unicaQuestaoOuNada[0].respostasRandom()
    res.status(200).json(questaoSelecionada.converterParaObjeto())
  } else {
    res.status(204).json(questoes[0].converterParaObjeto())
  }
}