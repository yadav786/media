import React from 'react';
// import Loader from 'Views/shared/loader';

const asyncComponent = importComponent => {
  class AsyncComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        component: null,
      };
    }

    async componentDidMount() {
      const { default: component } = await importComponent();
      this.setState({ component });
    }

    render() {
      const C = this.state.component;
      return C ? <C {...this.props} /> : <div> loading</div>;
    }
  }
  return AsyncComponent;
};

export default asyncComponent;
