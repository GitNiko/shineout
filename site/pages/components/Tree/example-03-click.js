/**
 * cn - 点击事件
 * en - Click
 */
import React, { Component } from 'react'
import immer from 'immer'
import { Tree } from 'shineout'
import tree from 'doc/data/tree'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = { active: undefined, data: tree }
    this.defaultExpanded = ['1']
  }

  handleClick = (node, id) => {
    console.log('click', id)
    this.setState({ active: id })
  }

  handleEdit = (event) => {
    const newText = event.target.value
    const path = this.state.active.split(',')
    this.setState(immer((draft) => {
      let { data } = draft
      path.forEach((id, index) => {
        data = data.find(d => d.id === id)
        if (index < path.length - 1) data = data.children
      })
      data.text = newText
      draft.active = undefined
    }))
  }

  handleKeyDown = (event) => {
    if (event.keyCode === 13) event.target.blur()
  }

  keyGenerator = (node, parentKey) => `${parentKey},${node.id}`.replace(/^,/, '')

  renderItem = (node, isExpanded, isActive) => (
    isActive
      ? (
        <input
          autoFocus
          size="small"
          onBlur={this.handleEdit}
          onKeyDown={this.handleKeyDown}
          defaultValue={node.text}
          type="text"
        />
      )
      : `node ${node.text}`
  )

  render() {
    return (
      <Tree
        active={this.state.active}
        data={this.state.data}
        keygen={this.keyGenerator}
        defaultExpanded={this.defaultExpanded}
        onClick={this.handleClick}
        onExpand={this.handleExpand}
        renderItem={this.renderItem}
      />
    )
  }
}

