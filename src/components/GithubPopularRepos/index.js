import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here
class GithubPopularRepos extends Component {
  state = {activeTabId: 'ALL', listItem: [], isLoader: true, isSuccess: true}

  componentDidMount = () => {
    const {activeTabId} = this.state
    this.getUserData(activeTabId)
  }

  onChangeTab = id => {
    this.getUserData(id)
    this.setState({activeTabId: id})
  }

  getUserData = async id => {
    this.setState({isLoader: true})
    console.log(id)
    const url = `https://apis.ccbp.in/popular-repos?language=${id}`
    const responseData = await fetch(url)
    const data = await responseData.json()
    const requiredData = data.popular_repos
    const updatedData = requiredData.map(eachItem => ({
      avatarUrl: eachItem.avatar_url,
      forksCount: eachItem.forks_count,
      id: eachItem.id,
      issuesCount: eachItem.issues_count,
      name: eachItem.name,
      starsCount: eachItem.stars_count,
    }))
    console.log(updatedData)
    if (responseData.ok === true) {
      this.setState({listItem: updatedData, isLoader: false})
    } else {
      this.setState({isLoader: false, isSuccess: false})
    }
  }

  renderResult = () => {
    const {isSuccess, listItem} = this.state

    return isSuccess ? (
      <ul className="item-container">
        {listItem.map(eachItem => (
          <RepositoryItem key={eachItem.id} itemDetail={eachItem} />
        ))}
      </ul>
    ) : (
      <div className="failure-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
          alt="failure view"
        />
        <h1>Something Went Wrong</h1>
      </div>
    )
  }

  render() {
    const {activeTabId, isLoader} = this.state

    return (
      <div className="background-container">
        <h1 className="heading-popular">Popular</h1>
        <ul className="language-container">
          {languageFiltersData.map(eachItem => (
            <LanguageFilterItem
              key={eachItem.id}
              onChangeTab={this.onChangeTab}
              isActive={eachItem.id === activeTabId}
              itemDetail={eachItem}
            />
          ))}
        </ul>
        {isLoader ? (
          <div testid="loader">
            <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
          </div>
        ) : (
          this.renderResult()
        )}
      </div>
    )
  }
}

export default GithubPopularRepos
