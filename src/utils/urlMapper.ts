import ActionType from 'types/ActionType'
import lizardUrl from '../../public/images/lizard.png'
import paperUrl from '../../public/images/paper.png'
import rockUrl from '../../public/images/rock.png'
import scissorsUrl from '../../public/images/scissors.png'
import spockUrl from '../../public/images/spock.png'

const urlMapper: Record<ActionType, string> = {
  rock: rockUrl,
  paper: paperUrl,
  scissors: scissorsUrl,
  lizard: lizardUrl,
  spock: spockUrl,
}

export default urlMapper
