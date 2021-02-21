import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


class Calendar extends React.Component {

    constructor() {
        super()
        this.state = {
            selectedDate: new Date(),
            isOpen:false
        }
        this.pickerRef = React.createRef()
    }
    SetDate = (date) => {
        this.setState({
            selectedDate: date
        })
    }
    ChangeState = () => {
        this.pickerRef.current.setOpen(!this.state.isOpen)
        this.setState({
            isOpen:!this.state.isOpen
        })
    }
    render() {
        return (
            <div>
                <div>
                    <button onClick={this.ChangeState}>{this.state.isOpen?"Close":" Open"}</button>
                </div>
                <div>
                    <DatePicker
                        selected={this.state.selectedDate}
                        onChange={this.SetDate}
                        dateFormat="yyyy/MM/dd"
                        ref={this.pickerRef}
                    />
                </div>

            </div>
        )
    }
}

export default Calendar