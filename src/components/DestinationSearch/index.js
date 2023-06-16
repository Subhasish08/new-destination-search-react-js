import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  OnChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResult = destinationsList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="destination-search-container">
          <h1 className="title">Destination Search</h1>
          <div className="search-input-container">
            <input
              type="search"
              className="searchInput"
              onChange={this.OnChangeInput}
              placeholder="Search"
              value={searchInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search-icon"
              className="search-icon"
            />
          </div>
          <ul className="destination_list">
            {searchResult.map(eachDestination => (
              <DestinationItem
                key={eachDestination.id}
                destinationDetail={eachDestination}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default DestinationSearch
