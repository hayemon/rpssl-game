import '@testing-library/jest-dom/extend-expect'
import { renderWithProviders } from 'store/test/testUtils'
import MainPage from '../MainPage'

describe('MainPage', () => {
  it('renders', () => {
    const { asFragment } = renderWithProviders(<MainPage />)
    expect(asFragment()).toMatchSnapshot()
  })
})
