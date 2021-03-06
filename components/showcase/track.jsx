import React, { Component } from 'react'
import Radium from 'radium'
import leftpad from 'leftpad'
import { store } from '../../client.js'

@Radium
export default class Track extends Component {
  constructor () {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick () {
    window.player.playTrack(this.props.track)
  }
  render () {
    return (
      <li style={styles.li} onClick={this.handleClick}>
        <span style={styles.no}>{leftpad(this.props.track.track.no, 2)}</span>
        <span style={[styles.span, store.getState().player.track === this.props.track ? styles.current : '']}>{this.props.track.title}</span>
      </li>
    )
  }
}

const styles = {
  li: {
    display: 'block',
    margin: 0,
    padding: '.5em 1em',
    cursor: 'pointer',
    transition: 'background .25s',
    ':hover': {
      background: 'rgba(92, 67, 232, .8)'
    }
  },
  no: {
    padding: '0 .5em'
  },
  span: {
    padding: '0 .25em',
    fontWeight: 'bold'
  },
  current: {
    borderBottom: '2px solid white'
  }
}
