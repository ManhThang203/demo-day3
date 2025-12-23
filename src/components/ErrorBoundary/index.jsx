import PropTypes from "prop-types";
import React from "react";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  // getDerivedStateFromError Khi có lỗi thì sẽ văng ra 1 lỗi nào đó
  // nó giống như mình bắt trường hợp bằng try catch
  static getDerivedStateFromError(error) {
    // return sẽ set vào state và re-render component
    console.log(error);
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
ErrorBoundary.propTypes = {
  children: PropTypes.node,
};

export default ErrorBoundary;
