import React, { Component } from "react";
import form_css from "./ReactForm.module.css";

class ReactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usrName: "",
      usrComment: "",
      usrAtt: "",
    };
  }

  submitFunction = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  submitName = (event) => {
    this.setState({ usrName: event.target.value });
  };

  submitComment = (event) => {
    this.setState({ usrComment: event.target.value });
  };

  submitAtt = (event) => {
    this.setState({ usrAtt: event.target.value });
  };

  render() {
    return (
      <div>
        <form
          className={form_css.form_content}
          id="formDef"
          onSubmit={this.submitFunction}
        >
          <div>
            <label htmlFor={"textWindow"} className={form_css.user_input_label}>
              User Name:{" "}
            </label>
            <input
              type="text"
              id="textWindow"
              defaultValue={this.state.text}
              onChange={this.submitName}
            />
          </div>
          <div className={form_css.user_comment}>
            <label
              htmlFor={"commentWindow"}
              className={form_css.user_comment_label}
            >
              User Comment:{" "}
            </label>
            <textarea
              id="commentWindow"
              rows="5"
              cols="50"
              onChange={this.submitComment}
            ></textarea>
          </div>
          <div className="sementic_comment">
            <label
              htmlFor={"SemanticComment"}
              className={form_css.user_semantic_label}
            >
              {" "}
              Sementic Comment
            </label>
            <select defaultValue="negative" onChange={this.submitAtt}>
              <option value="positive"> Positives </option>
              <option value="negative"> Negative </option>
            </select>
          </div>
          <button type="submit" className={form_css.button_style}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default ReactForm;
