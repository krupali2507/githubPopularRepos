import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {
    selectedFilter: languageFiltersData[0].id,
    activeRepositoryData: [],
    isLoading: false,
  }

  componentDidMount() {
    this.getRepositoryData()
  }

  getRepositoryData = async () => {
    this.setState({isLoading: true})
    const {selectedFilter} = this.state
    console.log(selectedFilter)
    const url = `https://apis.ccbp.in/popular-repos?language=${selectedFilter}`
    const response = await fetch(url)

    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.popular_repos.map(eachRepo => ({
        id: eachRepo.id,
        name: eachRepo.name,
        issuesCount: eachRepo.issuesCount,
        avatarUrl: eachRepo.avatar_url,
        forksCount: eachRepo.forks_count,
        startsCount: eachRepo.starts_count,
      }))

      this.setState({activeRepositoryData: updatedData, isLoading: false})
    }
  }

  onChangeFilter = id => {
    this.setState({selectedFilter: id}, this.getRepositoryData)
  }

  renderLoadingView = () => (
    <div testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  render() {
    const {selectedFilter, activeRepositoryData, isLoading} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Popular</h1>
        <ul className="language-filter-container">
          {languageFiltersData.map(eachData => (
            <LanguageFilterItem
              filterDetail={eachData}
              key={eachData.id}
              onChangeFilter={this.onChangeFilter}
              isSelected={selectedFilter === eachData.id}
            />
          ))}
        </ul>
        {isLoading ? (
          this.renderLoadingView()
        ) : (
          <ul className="repository-item-container">
            {activeRepositoryData.map(eachRepo => (
              <RepositoryItem repoDetail={eachRepo} key={eachRepo.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default GithubPopularRepos
