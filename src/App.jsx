import React from 'react'
import Patch from './route/Patch'
import Box from '@mui/material/Box';
const App = () => {
  const [open, setOpen] = React.useState(false);
  // const [token, setToken] = React.useState(false);
  // const nav = useNavigate();
  // const createHandale = () => {
  //   nav(`/resgiter`)
  //   setToken(true)
  //   setOpen(false)
  // }
  // if (token === false) {
  //   if (open === false) {
  //     console.log('rin')
  //     setInterval(() => {
  //       setOpen(true)
  //     }, 30000);
  //   }
  // }
  return (
    <div className=' relative ' >
      <div className=' fixed top-12 z-50' >
        <Box sx={{ width: '100%' }}>
          {/* <Collapse in={open}>
            <Alert
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <RxCross2 fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              Create Account Now : <span onClick={createHandale} className=' cursor-pointer text-nun text-md font-bold text-[#2C2825]' >create</span>
            </Alert>
          </Collapse> */}

        </Box>
      </div>
      <Patch />
    </div>
  )
}

export default App
