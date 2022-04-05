export type Results = 'win' | 'lose' | 'tie'

type PlayResult = {
  results: Results
  player: number
  computer: number
}

export default PlayResult
