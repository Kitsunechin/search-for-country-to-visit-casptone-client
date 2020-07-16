import React from 'react'
import config from './config'
import Iframe from 'react-iframe'

import './BucketListPage'

//to add user at later stage
class BucketListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      params: {
        selectCountry: ''
      },
      dropDownCountries: [],
      bucketListCountriesAdded: []
    };
  }
  componentDidMount() {
    console.log('Stateful component successfully mounted.');
    //populate dropdown list with countries
    const url = `${config.API_ENDPOINT}/all`
    

    console.log(url)

    const options = {
      method: 'GET',
      headers: {
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
        this.setState({
          dropDownCountries: data
        })
      })
      .catch(err => {
        this.setState({
          error: err.message
        })
      })

      this.populateBucketListCountry()
  }

  populateBucketListCountry() {
      
    const url = `${config.API_ENDPOINT}/bucket-list`
    

    console.log(url)

    const options = {
      method: 'GET',
      headers: {
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
        this.setState({
          bucketListCountriesAdded: data
        })
      })
      .catch(err => {
        this.setState({
          error: err.message
        })
      })
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

    //get all the data from the form component and populate object with it
    const formData = new FormData(e.target)

    //for each of the keys in form data populate it with form value
    for (let value of formData) {
      data[value[0]] = value[1]
    }
    console.log(data)
    let {
      selectCountry,
    } = data
    let countryId = selectCountry.split('_')[0]
    let countryNicename = selectCountry.split('_')[1]
    console.log(countryId,countryNicename)
    //assigning the object from the form data to params in the state
    this.setState({
      params: data
    })

    //check if the state is populated with the search params data
    console.log(this.state.params)

////////////////POST REQUEST////////////////////////////

      const newCountry = {
        id: countryId,  
        nicename: countryNicename
      }
      
      console.log(newCountry)

  
      //useing the url and paramters above make the api call
      fetch(`${config.API_ENDPOINT}/bucket-list`, {
        method: 'POST',
        body: JSON.stringify(newCountry),
        headers: {
          'content-type': 'application/json'
        }
      })
  
        // if the api returns data ...
        .then(res => {
          if (!res.ok) {
            throw new Error('Something went wrong, please try again later.')
          }
          //  ...convert it to json
          return res.json()
        })
        // use the json api output and assign to a variable
        .then(data => {
          this.populateBucketListCountry()
          console.log(this.state)
        })
        .catch(err => {
          this.setState({
            error: err.message
          })
        })  
  }
  ///////////////////////////////////////////////////
  render() {
    let listOfCountries = ''
    if(this.state.dropDownCountries.length !== 0 ){
      listOfCountries = this.state.dropDownCountries.map((country, key) => {
      // console.log(country.id)
      let valueOutput = `${country.id}_${country.nicename}`
    return (
      <option key={key} name="nicename" value={valueOutput}>{country.nicename}</option>
      )
    });
    }
    let showBucketList = ''
    if (this.state.bucketListCountriesAdded.length !== 0) {
      showBucketList = this.state.bucketListCountriesAdded.map((country, key) => {
          // console.log(country.id)
          let valueOutput = `https://www.google.com/maps/embed/v1/place?key=AIzaSyDfouOPkJqw5K1AKoxQofTjm3jf3dlV4l0&q=${country.nicename}&maptype=roadmap`
          return (
              <div key={key}>
              <h3>{country.nicename}</h3>
              <Iframe url={valueOutput}
                      width="100%"
                      height="250px"
                      id={key}
                      className="myClassname"
                      display="initial"
                      position="relative"/>
              </div>
          )
      });
  }
   return (
    <div className="Visited-list">
        <form onSubmit={this.handleSubmit}>
        <label htmlFor="countries">Choose a country:</label>
            <select name="selectCountry"id="countries" required>
                <option value="">None</option>
                {listOfCountries}
            </select>
        <button>Add</button>
      </form>
      <section>
        <header>
            {showBucketList}    
        </header>
      </section>
    </div>
    )
} }
export default BucketListPage