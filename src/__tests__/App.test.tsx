import '@testing-library/jest-dom/extend-expect'
import App from '../App'
import { renderWithProviders } from '../store/test/testUtils'

describe('App', () => {
  it('renders', () => {
    const { asFragment } = renderWithProviders(<App />)
    expect(asFragment()).toMatchSnapshot()
  })
})
