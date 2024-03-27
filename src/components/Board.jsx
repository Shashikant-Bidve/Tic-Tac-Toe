import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Result from './Result.jsx';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

function check(arr){
    for(let i = 0;i<3;i++)
    {
        let X = 0, O = 0;
        for(let j = 3*i;j<3*i + 3;j++)
        {
            X += (arr[j] === 'X');
            O += (arr[j] === 'O');
        }
        if(X === 3 || O === 3){return 'R';}
        X = 0, O = 0;
        for(let j = i;j<i+7;j+=3)
        {
            X += (arr[j] === 'X');
            O += (arr[j] === 'O');
        }
        if(X === 3 || O === 3){return 'R';}
    }
    if(arr[0]===arr[4] && arr[4]===arr[8]){return 'R';}
    if(arr[2]===arr[4] && arr[4]===arr[6]){return 'R';}
    let X = 0, O = 0;
    for(let i = 0 ;i < 9;i++){
        X += (arr[i]==='X');
        O += (arr[i]==='O');
    }
    if(X+O === 9){return 'D';}
    return 'U';
}


const Board = () => {
    // const arr = new Array(1,2,3,4,5,6,7,8,9);
    
    const [arr,setArr] = useState([1,2,3,4,5,6,7,8,9]);
    const [curr,setCurr] = useState('X');
  return (
    <div>
        {check(arr)==='D' && <Result winner="Draw"/>}
        {check(arr)==='R' && <Result winner={curr}/>}
        <Typography variant="h5" color="initial" marginBottom={"2rem"} textAlign={"center"}>
            {curr} will play
        </Typography>
        <Grid width={"250px"} container spacing={2} direction={"row"} justifyContent={"center"} alignItems={"center"}>
        {arr.map((e,ind)=> {
           return (
           <Grid item key={ind} xs = {4}>
           <Button variant="contained" size="large" sx={{padding:"1rem"}} onClick={()=>{
            if(arr[ind]=='X' || arr[ind]=='O'){
                return;
            }
            setArr(()=>{
                let newArr = [...arr];
                newArr[ind] = curr;
                if(curr === 'X'){setCurr('O');}
                else{setCurr('X');}
                return newArr;
            })
            
           }}>
            {/* {CheckBoxOutlineBlankIcon} */}
            {(e === 'X' || e==='O') && e}
            {(e !== 'X' && e!=='O') && '-'}
            </Button>
            </Grid>
            )
        })}
        </Grid>
    </div>
  )
}

export default Board