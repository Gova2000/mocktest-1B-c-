import './card.css'

const Card = props => {
  const {each, tagsList} = props

  return (
    <li className="carddiv">
      <p>{each.text}</p>
      <button type="button" className="cardbtn">
        {each.btntext}
      </button>
    </li>
  )
}

export default Card
