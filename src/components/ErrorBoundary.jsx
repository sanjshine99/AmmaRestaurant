import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
          <h1 className="text-2xl font-bold mb-2">Something went wrong.</h1>
          <p className="mb-4">{this.state.error && this.state.error.toString()}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-[#86D276] text-black font-bold px-4 py-2 rounded hover:brightness-110 transition"
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;