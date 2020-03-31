class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Erika'
    }
  }
  render() {
    const name = this.state.name;
    return (
      <div>
        <h1>{name}</h1>
      </div>
    );
  }
};
