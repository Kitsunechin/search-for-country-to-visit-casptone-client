import React from 'react'
import config from './config'
import './VisitedPage.css'

//to add user at a later stage
class VisitedPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      params: {
        selectCountry: ''
      }
    };
  }

  formatQueryParams(params) {
    const queryItems = Object.keys(params)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    return queryItems.join('&')
  }

  handleSubmit = (e) => {
    e.preventDefault();
    //create an object to store the search filters
    const data = {}

    //get all the from data from the form component
    const formData = new FormData(e.target)

    //for each of the keys in form data populate it with form value
    for (let value of formData) {
      data[value[0]] = value[1]
    }
    console.log(data)
    let {
      selectCountry,
    } = data

    //assigning the object from the form data to params in the state
    this.setState({
      params: data
    })

    //check if the state is populated with the search params data
    console.log(this.state.params)

    const searchURL = `${config.API_ENDPOINT}/visited-page`

    const queryString = this.formatQueryParams(data)

    //sent all the params to the final url
    const url = searchURL + '?' + queryString

    console.log(url)

    const options = {
      method: 'GET',
      header: {
        "Authorization": "",
        "Content-Type": "application/json"
      }
    }

    //useing the url and paramters above make the api call
    fetch(url, options)

      // if the api returns data ...
      .then(res => {
        if (!res.ok) {
          throw new Error('Something went wrong, please try again later.')
        }
        // ... convert it to json
        return res.json()
      })
      // use the json api output
      .then(data => {

        //check if there is meaningfull data
        console.log(data);
        // check if there are no results
        if (data.totalItems === 0) {
          throw new Error('No user found')
        }

      })
      .catch(err => {
        this.setState({
          error: err.message
        })
      })
  }
  render() {
   return (
    <div className="Visited-list">
        <form onSubmit={this.handleSubmit}>
        <label htmlFor="countries">Choose a country:</label>
            <select name="selectCountry"id="countries" required>
                <option value="">None</option>
                <option value="Japan">Japan</option>
                <option value="Poland">Poland</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
            </select>
        <button>Search</button>
      </form>
      <section>
        <header>
            <h3>Wikipedia</h3>
            <img alt="picture of a country"/>
        </header>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      </section>
      <section>
        <img alt="picture of a map"/>
      </section>
    </div>
    )
} }
export default VisitedPage