import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'

class Popup extends Component {
  render() {
    return (
        <div role="dialog" className="MuiModal-root-15 MuiDialog-root-1" aria-labelledby="simple-dialog-title">
          <div className="MuiBackdrop-root-17" aria-hidden="true" >
          </div>
          <div className="MuiDialog-container-4 MuiDialog-scrollPaper-2" role="document" tabindex="-1" >
            <div className="MuiPaper-root-19 MuiPaper-elevation24-45 MuiPaper-rounded-20 MuiDialog-paper-5 MuiDialog-paperScrollPaper-6 MuiDialog-paperWidthSm-9">
              <div className="MuiDialogTitle-root-46" id="simple-dialog-title">
                <h2 className="MuiTypography-root-47 MuiTypography-title-53">Set backup account</h2>
              </div>
            </div>
          </div>
        </div>
    )
    /*
    <Dialog aria-labelledby="simple-dialog-title" open={true}>
      <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
    </Dialog>
    */
  }
}

export default Popup
