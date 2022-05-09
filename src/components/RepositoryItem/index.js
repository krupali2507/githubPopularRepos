// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {itemDetail} = props
  const {avatarUrl, forksCount, issuesCount, name, starsCount} = itemDetail

  return (
    <li className="list-style list-container">
      <img className="logo-image" src={avatarUrl} alt={name} />
      <h1 className="head-name">{name}</h1>
      <div>
        <div className="detail-container">
          <img
            className="logos"
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
            alt="stars"
          />
          <p className="des-head">{starsCount} stars</p>
        </div>
        <div className="detail-container">
          <img
            className="logos"
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
            alt="forks"
          />
          <p className="des-head">{forksCount} forks</p>
        </div>
        <div className="detail-container">
          <img
            className="logos"
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
            alt="open issues"
          />
          <p className="des-head">{issuesCount} open issues</p>
        </div>
      </div>
    </li>
  )
}

export default RepositoryItem
