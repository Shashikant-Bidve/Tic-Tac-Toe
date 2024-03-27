import { Button, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

const Input = ({start,setStart}) => {
  return (
    <div>
        <Typography variant="h3" color="initial" sx={{textAlign:'center',paddingTop:"1rem",paddingBottom:"2rem"}}>Tic-Tac-Toe</Typography>
      <Stack direction={"row"} spacing={"1rem"} justifyContent={"center"}>
      <TextField id="outlined-basic" label="X will be:" variant="outlined" sx={{
        // Root class for the input field
        "& .MuiOutlinedInput-root": {
          color: "white",
          fontFamily: "Arial",
          fontWeight: "bold",
          // Class for the border around the input field
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
          },
        },
        // Class for the label of the input field
        "& .MuiInputLabel-outlined": {
          color: "white",
        },
      }}/>
      <TextField id="outlined-basic" label="O will be:" variant="outlined" sx={{
        // Root class for the input field
        "& .MuiOutlinedInput-root": {
          color: "white",
          fontFamily: "Arial",
          fontWeight: "bold",
          // Class for the border around the input field
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
          },
        },
        // Class for the label of the input field
        "& .MuiInputLabel-outlined": {
          color: "white",
        },
      }}/>
      <Button variant="outlined" onClick={(e)=>{
        setStart((v)=> !v);
      }}>
        {start && "End Game"}
        {!start && "New Game"}
      </Button>
      </Stack>
    </div>
  )
}

export default Input;