import RespostaModel from "@/model/resposta";
import QuestaoModel from "@/model/questao";

const questoes: QuestaoModel[] = [
    new QuestaoModel(306, 'Qual inseto transmite a Doença de Chagas?', [
        RespostaModel.respostaErrada('Abelha'),
        RespostaModel.respostaErrada('Formiga lava-Pés'),
        RespostaModel.respostaErrada('Anopheles spp.'),
        RespostaModel.respostaErrada('Mosquito Palha'),
        RespostaModel.respostaErrada('Aedes Aegypti'),
        RespostaModel.respostaCorreta('Barbeiro'),
    ]),
    new QuestaoModel(202, 'Em que ano foi ao ar o episódio piloto da serie "Breaking Bad" ', [
        RespostaModel.respostaErrada('2012'),
        RespostaModel.respostaErrada('2013'),
        RespostaModel.respostaErrada('2009.'),
        RespostaModel.respostaErrada('2005'),
        RespostaModel.respostaErrada('2006'),
        RespostaModel.respostaCorreta('2008'),
    ]),
    new QuestaoModel(205, 'Quantos dragões existem na serie televisiva "Game of Thrones" ', [
        RespostaModel.respostaErrada('1'),
        RespostaModel.respostaErrada('2'),
        RespostaModel.respostaErrada('4'),
        RespostaModel.respostaErrada('10'),
        RespostaModel.respostaErrada('7'),
        RespostaModel.respostaCorreta('3'),
    ]),
    new QuestaoModel(206, 'Qual a idade do ex jogador de futebol Pelé?', [
        RespostaModel.respostaErrada('60'),
        RespostaModel.respostaErrada('77'),
        RespostaModel.respostaErrada('89'),
        RespostaModel.respostaErrada('90'),
        RespostaModel.respostaErrada('83'),
        RespostaModel.respostaCorreta('82'),
    ]),
    
]

export default questoes