import React from 'react'
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function Newpost() {
  let today = new Date();

  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate();
  let timeFormat = year + "/" + month + "/" + date;

  const postSubmit = (e) => {
    e.preventDefault();
    const data = {
      title : e.target.title.value,
      content : e.target.content.value,
      writer : "no",
      write_date : timeFormat
    }

    axios.post("http://localhost:5000/post/newpost", data)
    .then(function(response){
      console.log(response);
      if(response.data.success){
        alert("게시글 등록이 성공하였습니다.");
      }
    }).catch(function(error){
      alert("게시글 등록 실패!" + error);
    });

  }

  return (
    <Box >
      <Container sx={{ width : '50%'}}>
        <Stack spacing={2}>
          <form onSubmit={postSubmit}>
            <TextField fullWidth id="title" name="title" label="제목" variant="outlined" />
            <TextField fullWidth id="content" name="content" label="내용" variant="outlined" multiline rows={4} />
            <Button type="submit">등록완료</Button>
          </form>
        </Stack>
      </Container>
    </Box>
    
  )
}
