import { Component } from "react";
import "./ErrorBoundary.css";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <div className="error-boundary-card">
            <div className="error-boundary-icon">!</div>
            <h1>Something went wrong</h1>
            <p>An unexpected error occurred. Please try again.</p>
            <button onClick={this.handleReset}>Try Again</button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
