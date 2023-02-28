import questoes from '../banco/questoesDb'
import { random } from '../../../functions/arrays'

export default(req, res) => {
    const ids = questoes.map(questoes => questoes.id)
    res.status(200).json(random(ids))
}