import React, { Component } from 'react'
import { connect } from 'react-redux'

import Navbar from 'components/Navbar'
import { fetchStock } from 'actions/stock'

class NavbarPage extends Component {
  render() {
    let ReduxNavbar = connect(state => state.navbar, { onSearch: fetchStock })(Navbar); // TODO: consider moving this into Navbar
    return (
      <div>
        <ReduxNavbar />
        {this.props.children}
      </div>
    )
  }
}

export default NavbarPage
