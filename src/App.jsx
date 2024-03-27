import { useState } from 'react'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Stack, TextField } from '@mui/material'
import Input from './components/Input'
import Board from './components/Board'




function App() {
  const [start, setStart] = useState(false);

  return (
    <>
      <Input start = {start} setStart = {setStart}></Input>
      <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} margin={"2rem"}>
      {
        start && <Board/>
      }
      </Stack>
    </>
  )
}

export default App
