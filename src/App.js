import {Component} from 'react'

import MultiLingualGreetings from './components/MultiLingualGreetings'
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

// Replace your code here
class App extends Component {
  state = {
    isActiveLanguage: languageGreetingsList[0].buttonText,
  }

  onChangeLanguage = language => {
    this.setState({isActiveLanguage: language})
  }

  render() {
    const {isActiveLanguage} = this.state
    const filterForImage = languageGreetingsList.filter(
      lang => lang.buttonText === isActiveLanguage,
    )
    return (
      <div className="main-container">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="languages-list">
          {languageGreetingsList.map(lang => (
            <MultiLingualGreetings
              key={lang.id}
              /* eslint-disable react/no-unknown-property */
              isActive={isActiveLanguage === lang.buttonText}
              language={lang.buttonText}
              changeLanguage={this.onChangeLanguage}
            />
          ))}
        </ul>
        <img
          src={filterForImage[0].imageUrl}
          alt={filterForImage[0].imageAltText}
          className="image"
        />
      </div>
    )
  }
}

export default App
