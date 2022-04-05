import '@testing-library/jest-dom/extend-expect'
import { renderWithProviders } from 'store/test/testUtils'
import Result from '../Result'

describe('Result', () => {
  it('renders', () => {
    const { asFragment } = renderWithProviders(<Result />)
    expect(asFragment()).toMatchSnapshot()
  })
})
