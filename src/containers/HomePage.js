import { connect } from 'react-redux'

import Home from 'components/Home'
import { fetchStock } from 'actions/stock'

const HomePage = connect(
  (state) => ({}), // state to props
  { onSearch: fetchStock } // props to dispatch
)(Home)

export default HomePage
