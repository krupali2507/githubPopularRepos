// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {repoDetail} = props
  const {name, avatarUrl, starsCount, forksCount, issuesCount} = repoDetail

  return (
    <li className="repository-item">
      <img src={avatarUrl} alt={name} className="avatar" />
      <h1>{name}</h1>
      <div className="repo-detail-container">
        <p className="icon-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
            alt="stars"
            className="icon"
          />
          {starsCount} stars
        </p>
        <p className="icon-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
            alt="forks"
            className="icon"
          />
          {forksCount} forks
        </p>
        <p className="icon-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
            alt="open issues"
            className="icon"
          />
          {issuesCount} open issues
        </p>
      </div>
    </li>
  )
}

export default RepositoryItem
