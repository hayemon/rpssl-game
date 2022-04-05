import '@testing-library/jest-dom/extend-expect'
import { fireEvent, waitFor } from '@testing-library/react'
import { renderWithProviders } from 'store/test/testUtils'
import Button from '../Button'

describe('Button', () => {
  it('renders', () => {
    const { asFragment } = renderWithProviders(
      <Button choice={{ id: 1, name: 'rock' }} />
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('click button', async () => {
    const { getAllByRole, store } = renderWithProviders(
      <Button choice={{ id: 1, name: 'rock' }} />
    )

    const buttons = getAllByRole('button')

    fireEvent.click(buttons[0])

    const state = store.getState()
    expect(state.game.playerChoice).toBe(undefined)
    expect(state.game.results).toBe(undefined)
    expect(state.game.locked).toBe(true)

    await waitFor(() => {
      const state = store.getState()
      expect(state.game.playerChoice).toBe('rock')
      expect(state.game.locked).toBe(true)
    })
  })
})
