import { rest } from 'msw'

const handlers = [
  rest.get('https://codechallenge.boohma.com/choices', (req, res, ctx) => {
    const mockApiResponse = [
      {
        id: 1,
        name: 'rock',
      },
    ]
    return res(ctx.json(mockApiResponse))
  }),
]

export { handlers }
