import './div.css'

const DIVbtns = props => {
  const {each, click, active, act} = props

  const tags = () => {
    click(each.optionId, each.displayText)
  }

  const btnact = active ? 'color' : 'color2'
  const get = act ? btnact : 'color2'

  return (
    <li>
      <button className={`btns ${get}`} type="button" onClick={tags}>
        {each.displayText}
      </button>
    </li>
  )
}

export default DIVbtns
