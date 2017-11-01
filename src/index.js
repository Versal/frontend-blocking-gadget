import React, { Component } from 'react'
import { render } from 'react-dom'
import PlayerApi from '@versal/gadget-resources/src/modules/iframe/react-player-api'
import './styles.css'

class Gadget extends Component {
  render = () => {
    return (
      <div>
        <div>
          <div>blocking: {this.props.shouldBlock ? 'yes' : 'no'}</div>
          <div>passed: {this.isBlocking() ? 'no' : 'yes'}</div>
        </div>

        {this.props.isEditable && (
          <div>
            <div>
              {!this.props.shouldBlock && (
                <button onClick={this.block}>block next lesson</button>
              )}
            </div>
            <div>
              {this.props.shouldBlock && (
                <button onClick={this.unblock}>unblock next lesson</button>
              )}
            </div>
          </div>
        )}

        {!this.props.isEditable && (
          <div>
            <div>
              {!this.props.shouldBlock && (
                <div>
                  this quiz is non-blocking
                </div>
              )}
            </div>
            <div>
              {this.props.shouldBlock && (
                <button onClick={this.pass}>pass</button>
              )}
            </div>
          </div>
        )}
      </div>
    )
  }

  block = () => {
    this.props.setAttributes({
      answerKey: { player: '1' },
      passPercentage: 100,
      shouldBlock: true
    })
  }

  unblock = () => {
    this.props.setAttributes({
      answerKey: {},
      passPercentage: 0,
      shouldBlock: false
    })
  }

  pass = () => {
    this.props.setLearnerAttribute('answers', { player: '1' })
  }

  isBlocking = () => {
    return this.props.learnerState.results &&
      this.props.learnerState.results.pass
  }
}

render(
  <PlayerApi><Gadget /></PlayerApi>,
  document.getElementById('gadget')
)
