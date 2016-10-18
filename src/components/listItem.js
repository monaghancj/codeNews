const h = require('react-hyperscript')
const React = require('react')

const ListItem = React.createClass({
  getInitialState: function () {
    return { updated: (new Date()).toString() }
  },
  onUp: function() {
    this.props.item.score = this.props.item.score + 1
    this.props.onScoreChange(this.props.item)
  },
  onDown: function() {
    this.props.item.score = this.props.item.score - 1
    this.props.onScoreChange(this.props.item)
  },
  render: function()  {
    const item = this.props.item
    return h('li', [
      h('a.link.light-green', {href: item.link, target: '_blank'}, item.title),
      h('button.br-100.h2.w2', { onClick: this.onUp }, [
        h('i.fa.fa-thumbs-up')
      ]),
      h('button.br-100.h2.w2', { onClick: this.onDown }, [
        h('i.fa.fa-thumbs-down')
      ]),
      h('span.light-green', item.score),
      h('span.white', this.state.updated)
    ])
  }
})

module.exports = ListItem
