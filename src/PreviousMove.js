import React from 'react'
import PropTypes from 'prop-types'

class PreviousMove extends React.Component {

  constructor(props) {
    super(props)

    this._handlePreviousMove = this._handlePreviousMove.bind(this);
  }

  _handlePreviousMove() {
    const { onPreviousMove } = this.props

    if(typeof onPreviousMove !== 'function') return

    onPreviousMove()
  }

  render() {
    return (
      <div onClick={this._handlePreviousMove}>
        <i class="fa fa-angle-left"></i>
      </div>
    )
  }
}

export default PreviousMove
