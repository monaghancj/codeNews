const h = require('react-hyperscript')
const React = require('react')

const Form = React.createClass({
  render: function() {
    return h('section.form', [
      h('h3.white', 'Add News'),
      h('form', [
        h('div.pb2', [
          h('label.mr1', 'Title'),
          h('input')
        ]),
        h('div.pb2', [
          h('label.mr1', 'Link'),
          h('input')
        ]),
        h('div', [
          h('button', 'Add News')
        ])
      ])
    ])
  }
})

module.exports = Form
