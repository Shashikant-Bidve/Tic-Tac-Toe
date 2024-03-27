import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'



const Result = ({winner}) => {
  let obj = {
    'X' : "O",
    'O' : "X"
  }
  const [open,setOpen] = useState(true);
  return (
    <div>
        <Dialog open={open} onClose={()=>{setOpen(false)}} >
          <DialogTitle>
                Game Over!
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              {winner === 'Draw' && 'Game is DRAW'}
              {winner !==  'Draw' && `${obj[winner]} has won the game!`}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button>New Game</Button>
          </DialogActions>
        </Dialog>
    </div>
  )
}

export default Result