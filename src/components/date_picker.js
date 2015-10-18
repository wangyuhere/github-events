import React from "react";
import Pikaday from "pikaday"

export default class DatePicker extends React.Component {

  componentDidMount() {
    let props = this.props;

    new Pikaday({
      field: document.getElementById(props.id),
      defaultDate: props.date,
      minDate: props.minDate,
      maxDate: props.maxDate,
      onSelect: props.handleDateSelected
    });
  }

  render() {
    return (
      <form className="form-inline pull-right">
        <div className="form-group">
          <label htmlFor={this.props.id}>Choose Date</label>
          <input type="text"
            id={this.props.id}
            value={this.props.date}
            className="form-control" />
        </div>
      </form>
    )
  }
}

