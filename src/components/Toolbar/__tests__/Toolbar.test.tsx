import '@testing-library/jest-dom/extend-expect'
import { screen, within } from '@testing-library/react'
import { rest } from 'msw'
import { server } from 'store/test/server'
import { renderWithProviders } from 'store/test/testUtils'
import Toolbar from '../Toolbar'

describe('Toolbar', () => {
  it('renders', () => {
    const { asFragment } = renderWithProviders(<Toolbar />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('handles good response', async () => {
    renderWithProviders(<Toolbar />)

    const button = await screen.findByRole('button')
    const { getByRole } = within(button)
    getByRole('img')
  })

  it('handles error response', async () => {
    server.use(
      rest.get('https://codechallenge.boohma.com/choices', (req, res, ctx) => {
        return res(ctx.status(500))
      })
    )

    renderWithProviders(<Toolbar />)
    await screen.findByText('ERROR')
  })
})
