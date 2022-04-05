import '@testing-library/jest-dom/extend-expect'
import { fireEvent } from '@testing-library/react'
import { renderWithProviders } from 'store/test/testUtils'
import Scoreboard from '../Scoreboard'

describe('Scoreboard', () => {
  it('renders', () => {
    const { asFragment } = renderWithProviders(<Scoreboard />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('check elements', async () => {
    const { getByTestId } = renderWithProviders(<Scoreboard />)

    expect(getByTestId('title')).toHaveTextContent('Scoreboard')
    expect(getByTestId('icon')).toBeInTheDocument()
    expect(getByTestId('divider')).toBeInTheDocument()
    expect(getByTestId('list')).toBeInTheDocument()
  })

  it('clear history', async () => {
    const { getByTestId, queryByTestId } = renderWithProviders(<Scoreboard />)

    fireEvent.click(getByTestId('icon'))
    expect(queryByTestId('list')).toBeNull()
  })
})
