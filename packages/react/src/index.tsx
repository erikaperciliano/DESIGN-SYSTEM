import { styled } from './styles'

export const Button = styled('button', {
  fontFamily: '$default',
  background: '$ignite500',
  borderRadius: '$md',
})

export function App() {
  return <Button>Hello World</Button>
}
