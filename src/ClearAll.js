import React from "react";

class Footer extends React.Component {
  render() {
    let hidden;
    if (this.props.lengthOfTodo === 0) {
      hidden = "footer hidden";
    } else {
      hidden = "footer";
    }

    return (
      <footer className={hidden}>
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
