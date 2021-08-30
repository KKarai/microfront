import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

type State = {
  hasError: boolean;
};

type Props = RouteComponentProps;

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  componentDidMount() {
    this.props.history.listen(() => {
      if (this.state.hasError) {
        this.setState({
          hasError: false,
        });
      }
    });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Что-то пошло не так.</h1>;
    }
    return this.props.children;
  }
}

export default withRouter(ErrorBoundary);
