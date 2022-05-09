// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {filterDetail, onChangeFilter, isSelected} = props
  const {id, language} = filterDetail

  const filterClassName = isSelected ? 'selected-filter' : 'unselected-filter'

  const onClickLanguage = () => {
    onChangeFilter(id)
  }

  return (
    <button
      type="button"
      className={`${filterClassName} language-filter btn`}
      onClick={onClickLanguage}
    >
      {language}
    </button>
  )
}

export default LanguageFilterItem
