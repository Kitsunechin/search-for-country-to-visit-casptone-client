import React from 'react'

import './VisitedPage.css'

const VisitedPage = () => 
    (
    <div className="Visited-list">
        <form>
        <label for="countries">Choose a country:</label>
            <select id="countries">
                <option value="Japan">Japan</option>
                <option value="Poland">Poland</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
            </select>
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
export default VisitedPage