import React from 'react'
import ReactDOM, { render } from 'react-dom'
import PropTypes from 'prop-types'
import Vessel_list from '../components/vessel_list'

const Hello = props => (
  <div>Hello {props.name}!</div>
)

Hello.defaultProps = {
  name: 'David'
}

Hello.propTypes = {
  name: PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello name="React" />,
    document.body.appendChild(document.createElement('div')),
  )
})

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Vessel_list />,
    document.body.appendChild(document.createElement('div')),
  )
})

