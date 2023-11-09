import {Div, Button} from './cardpg'

const Card = props => {
  const {each, tagsList} = props

  return (
    <Div as="li">
      <p>{each.text}</p>
      <Button type="button">{each.btntext}</Button>
    </Div>
  )
}

export default Card
