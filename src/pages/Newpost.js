import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function Newpost() {
  
  return (
    <Box >
      <Container sx={{ width : '50%'}}>
        <Stack spacing={2}>
          <TextField fullWidth id="title" label="제목" variant="outlined" />
          <TextField fullWidth id="contents" label="내용" variant="outlined" multiline rows={4} />
          <Button>등록완료</Button>
        </Stack>
      </Container>
    </Box>
    
  )
}
