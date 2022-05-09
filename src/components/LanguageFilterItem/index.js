// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {itemDetail, isActive, onChangeTab} = props
  const {language, id} = itemDetail

  const onClickNewTab = () => {
    onChangeTab(id)
  }

  const listStyle = isActive ? 'list-style list-style-active' : 'list-style'
  return (
    <li className={listStyle} onClick={onClickNewTab}>
      <button className="button" type="button">
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
