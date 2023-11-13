import {Component} from 'react'
import {v4 as Id} from 'uuid'
import Card from './components/carding/card'
import DIVbtns from './components/divs/div'
import './App.css'

// These are the lists used in the application. You can move them to any component needed.

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

// Replace your code here
class App extends Component {
  state = {
    input: '',
    select: tagsList[0].displayText,
    toggle: false,
    list: [],
    list1: [],
  }

  list1 = event => {
    event.preventDefault()
    const {input, select, optId} = this.state

    const data = {
      text: input,
      optId,
      id: Id(),
      btntext: select,
    }

    this.setState(prev => ({
      list: [...prev.list, data],
      list1: [...prev.list, data],
      input: '',
    }))
  }

  clicktags = (id, dis) => {
    const {list, toggle} = this.state
    const format = list.filter(each => each.btntext === dis)
    const check = toggle ? list : format
    this.setState(prev => ({toggle: !prev.toggle, list1: check, optId: id}))
  }

  input = e => {
    this.setState({input: e.target.value})
  }

  select = e => {
    this.setState({select: e.target.value})
  }

  render() {
    const {input, select, list, list1, optId, toggle} = this.state

    return (
      <div className="main">
        <form className="taskbg" onSubmit={this.list1}>
          <h1 className="taskh1">Create a task!</h1>
          <div className="margin">
            <label htmlFor="task">Task</label>
            <div className="input">
              <input
                id="task"
                onChange={this.input}
                value={input}
                placeholder="Enter the task here"
              />
            </div>
          </div>
          <div className="margin">
            <label htmlFor="select">Tags</label>
            <div className="input">
              <select id="select" value={select} onChange={this.select}>
                {tagsList.map(each => (
                  <option key={each.optionId} value={each.displayText}>
                    {each.displayText}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button type="submit" className="btn" onClick={this.list1}>
            Add Task
          </button>
        </form>
        <div className="tagbg">
          <h1>Tags</h1>

          <ul className="tags">
            {tagsList.map(each => (
              <DIVbtns
                each={each}
                click={this.clicktags}
                key={each.optionId}
                active={each.optionId === optId}
                act={toggle}
              />
            ))}
          </ul>

          <h1>Tasks</h1>

          {list1.length > 0 ? (
            <ul>
              {list1.map(each => (
                <Card each={each} key={each.id} />
              ))}
            </ul>
          ) : (
            <p className="p"> NO Tasks Added Yet</p>
          )}
        </div>
      </div>
    )
  }
}

export default App
