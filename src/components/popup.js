import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import EmailInput from './email-input'

class Popup extends Component {
  constructor(props) {
    super(props)
    this.state = {
        email: '',
    }
    this.emailInput = React.createRef()
  }
  validate = () => {
    let valid = true
    if (this.emailInput && this.emailInput.current && !this.emailInput.current.validate()) {
        valid = false
    }
    return valid
  }
  submit = () => {
    if (!this.validate()) return false
    /*
    store.dispatch({
        type: AUTHENTICATE,
        email: this.state.email,
        password: this.state.password
    })
    */
    return true
  }
  render() {
    let emailValid = true
    let errorMessage = ''
    return (
      <Grid container justify="center" alignItems="center" id="single-form-layout">
        <Grid item xl={2} lg={3} md={4} sm={6} xs={11}>
            <Card className="form">
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                1232ewqeqwe
                </Typography>
                <EmailInput
                        errorMessage={errorMessage}
                        valid={emailValid}
                        email={this.state.email}
                        onChangeEmail={this.onChangeEmail}
                        ref={this.emailInput}
                    />

              </CardContent>
              <CardActions className="actions">
                <Button color="default" >
                  Skip
                </Button>
                <Button variant="contained" color="primary"  onClick={this.submit}>
                  Submit
                </Button>
              </CardActions>
            </Card>
        </Grid>
      </Grid>
    ) 
    /*


      <div role="dialog" className="MuiModal-root-15 MuiDialog-root-1" aria-labelledby="simple-dialog-title">
        <div className="MuiBackdrop-root-17" aria-hidden="true" >
        </div>
        <div className="MuiDialog-container-4 MuiDialog-scrollPaper-2" role="document" tabindex="-1" >
          <div className="MuiPaper-root-19 MuiPaper-elevation24-45 MuiPaper-rounded-20 MuiDialog-paper-5 MuiDialog-paperScrollPaper-6 MuiDialog-paperWidthSm-9">
            <div className="MuiDialogTitle-root-46" id="simple-dialog-title">
              <h2 className="MuiTypography-root-47 MuiTypography-title-53">Set backup account</h2>
            </div>
            <div className="buttons-container">
                <div>
                  <Button color="default" >
                    Skip
                  </Button>
                </div>
                <div>
                  <Button variant="contained" color="primary" >
                    Submit
                  </Button>
                </div>
            </div>
          </div>
        </div>
      </div>

      <Dialog aria-labelledby="simple-dialog-title" open={true}>
        <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
          <div className="buttons-container">
              <div>
                <Button color="default" >
                  Skip
                </Button>
              </div>
              <div>
                <Button variant="contained" color="primary" >
                  Submit
                </Button>
              </div>
          </div>
      </Dialog>
    */
  }
}

export default Popup
