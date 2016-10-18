const h = require('react-hyperscript')
const React = require('react')

const Form = React.createClass({
  getInitialState: _ => ({
    title: '',
    link: '',
    score: 0
  }),
  setTitle: function (e) {
    this.setState({
      title: e.target.value
    })
  },
  setLink: function (e) {
    this.setState({
      link: e.target.value
    })
  },
  submit: function (e) {
    e.preventDefault()
    console.log(this)
    this.props.addNewsItem(this.state)
    this.setState({   //Reset state - wipe old state
      score: 0,
      title: '',
      link: ''
    })
  },
  render: function() {
    return (
      h('section.form', [
        h('h3.white', 'Add News'),
        h('form', { onSubmit: this.submit }, [
          h('div.pb2', [
            h('label.mr1', 'Title'),
            h('input', {
              onChange: this.setTitle,
              value: this.state.title })
          ]),
          h('div.pb2', [
            h('label.mr1', 'Link'),
            h('input', {
              onChange: this.setLink,
              value: this.state.link })
          ]),
          h('div', [
            h('button', 'Add News')
          ])
        ])
      ])
    )
  }
})

module.exports = Form
