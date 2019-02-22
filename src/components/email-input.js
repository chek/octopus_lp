import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import { validateEmail } from '../helpers/validations'
import InputContainer from './input-container'

class EmailInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            valid: true,
            errorMessage: ''
        }
    }
    componentDidMount() {
        this.propsToState(this.props)
    }
    componentWillReceiveProps(nextProps) {
        this.propsToState(nextProps)
    }
    propsToState(props) {
        this.setState({
            email: props.email,
            valid: props.valid,
            errorMessage: props.errorMessage
        })
    }
    validate = () => {
        let valid = true
        if (!validateEmail(this.state.email)) {
            if (this.state.email.length === 0) {
                this.setState({ errorMessage: 'Email is required' })
            } else {
                this.setState({ errorMessage: 'Wrong email format' })
            }
            this.setState({ valid: false })
            valid = false
        }
        return valid
    }
    value = () => {
        return this.state.email
    }
    onChangeEmail = (event) => {
        this.setState({ valid: true })
        this.setState({ email: event.target.value })
        if (this.props.onChangeEmail) {
            this.props.onChangeEmail(event.target.value)
        }
    }
    render() {
        return (
            <InputContainer valid={this.state.valid} errorMessage={this.state.errorMessage}>
                <TextField
                    label={'Email'}
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    margin="normal"
                    className="form-input"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                />
            </InputContainer >
        )
    }
}

export default EmailInput



