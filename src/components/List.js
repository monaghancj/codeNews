const h = require('react-hyperscript')
const React = require('react')
const ListItem = require('./listItem')

const List = props => h('section.list', [
    h('ul', props.items.map(item =>
      h(ListItem, { item, onScoreChange: props.onScoreChange })
    ))
])

module.exports = List

// const h = require('react-hyperscript')
// const React = require('react')
//
// const List = React.createClass({
//   getInitialState: function () {
//     return {score: 0}
//   },
//   onUp: function () {
//     this.setState({score: this.state.score + 1})
//   },
//   onDown: function () {
//     this.setState({score: this.state.score - 1})
//   },
//   render () {
//     return h('section.list', [
//             h('ul', this.props.items.map(item => h('li', [
//                 h('a', {
//                     href: item.link
//                 }, item.title),
//                 h('button', {onClick: this.onUp},'Up'),
//                 h('button', {onClick: this.onDown}, 'Down'),
//                 h('span', this.state.score)
//             ])))
//
//         ])
//   }
// })
//
// module.exports = List
