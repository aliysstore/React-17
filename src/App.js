import React from "react";

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1 className="text-3xl font-bold underline">
          Hello {name}
        </h1>
      </>
    );
  }
}

export default App;
