import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state to indicate an error occurred
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Capture the error and its details
    this.setState({ error, errorInfo });

    // Optionally log the error to an external service
    console.error("Error caught in ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Render a fallback UI with error details
      return (
        <div style={{ padding: '20px', color: 'red', backgroundColor: '#ffecec' }}>
          <h1>Something went wrong.</h1>
          <p><strong>Error:</strong> {this.state.error?.toString()}</p>
          <pre>
            {this.state.errorInfo?.componentStack}
          </pre>
          <button onClick={() => window.location.reload()}>Reload Page</button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
