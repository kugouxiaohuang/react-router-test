import React from 'react'
import {IndexLink} from 'react-router'
import NavLink from './NavLink'
import Home from './Home'


export default React.createClass({
  render() {
    return (<div>
        <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
        <h1>hey</h1>
        <ul role='nav'>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/repos'>Repos</NavLink></li>
        </ul>
         {this.props.children || <Home/>}
    </div>)
  }
})
