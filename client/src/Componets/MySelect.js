import React from "react";
import Select from "react-select";
import "../assets/myselect.css";

export class MySelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        { value: "html", label: "HTML" },
        { value: "css", label: "CSS" },
        { value: "javascript", label: "JavaScript" },
        { value: "mysql", label: "MySQL" },
        { value: "react", label: "React" },
        { value: "express.js", label: "Express.js" },
        { value: "mongodb", label: "MongoDB" },
        { value: "node.js", label: "Node.js" },
        { value: "NoSQL", label: "NoSQL" },
        { value: "other", label: "Other" },
      ],
    };
  }

  handleChange = (value) => {
    // this is going to call setFieldValue and manually update values.topcis
    this.props.onChange(value);
  };

  handleBlur = () => {
    this.props.onChange("");
    // // this is going to call setFieldTouched and manually update touched.topcis
    // this.props.onBlur(true);
  };

  render() {
    return (
      <div style={{ margin: "1rem 0" }} className="selectBox">
        <label htmlFor="color">SELECT YOUR LANGUAGES </label>
        <Select
          className="color"
          options={this.state.options}
          isMulti
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          value={this.props.value}
        />
        {!!this.props.error && this.props.touched && (
          <div style={{ color: "red", marginTop: ".5rem" }}>
            {this.props.error}
          </div>
        )}
      </div>
    );
  }
}
