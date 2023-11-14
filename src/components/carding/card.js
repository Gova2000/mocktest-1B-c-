import './card.css'

const Card = props => {
  const {each} = props

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
