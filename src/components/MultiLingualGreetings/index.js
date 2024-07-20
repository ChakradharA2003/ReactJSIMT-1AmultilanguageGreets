import './index.css'

const MultiLingualGreetings = props => {
  const {isActive, language, changeLanguage} = props
  const onClickedLanguage = () => {
    changeLanguage(language)
  }
  const buttonStyle = isActive ? 'active-button' : 'inactive-button'
  return (
    <li>
      <button type="button" className={buttonStyle} onClick={onClickedLanguage}>
        {language}
      </button>
    </li>
  )
}
export default MultiLingualGreetings
