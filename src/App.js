import {useState} from 'react'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

const App = () => {
  const [activeId, setActiveId] = useState(languageGreetingsList[0].id)

  const getFilteredProject = () => {
    const filteredProject = languageGreetingsList.find(
      eachDetails => eachDetails.id === activeId,
    )
    return filteredProject
  }

  const handleClick = id => {
    setActiveId(id)
  }

  return (
    <div className="app-container">
      <div className="greeting-container">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="language-list">
          {languageGreetingsList.map(item => (
            <li key={item.id} className="language-item">
              <button
                type="button"
                className={`button ${
                  activeId === item.id ? 'active-button' : ''
                }`}
                onClick={() => handleClick(item.id)}
              >
                {item.buttonText}
              </button>
            </li>
          ))}
        </ul>
        <div className="image-container">
          <img
            src={getFilteredProject().imageUrl}
            alt={getFilteredProject().imageAltText}
            className="image"
          />
        </div>
      </div>
    </div>
  )
}

export default App
