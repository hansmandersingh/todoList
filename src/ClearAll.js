import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <button
          className="clear-completed"
          onClick={() => {
            this.props.clearAll();
          }}
        >
          Clear completed
        </button>
      </footer>
    );
  }
}

export default Footer;
