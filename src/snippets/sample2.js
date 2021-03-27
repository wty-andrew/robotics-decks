class Hello extends React.Component {
  render() {
    return React.createElement('div', null, `Hello ${this.props.toWhat}`);
    return <div>Hello {this.props.toWhat}</div>;
  }
}

ReactDOM.render(
  React.createElement(Hello, {toWhat: 'World'}, null),
  <Hello toWhat="World" />,
  document.getElementById('root')
);
