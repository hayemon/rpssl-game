import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Copyright from '../Copyright'

describe('Copyright', () => {
  it('renders', () => {
    const { asFragment } = render(<Copyright />)
    expect(asFragment()).toMatchSnapshot()
  })
})
