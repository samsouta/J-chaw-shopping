import React, { useState } from 'react'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Avatar } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import lock1 from '../../../assets/SVG/resgister/gif/lock1.gif'
import { useLoginMutation } from '../../../features/services/loginAuth';
import { useDispatch } from 'react-redux';
import { getUser } from '../../../features/userSlice';
import Swal from 'sweetalert2'

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <div className='' color="inherit" href="https://mui.com/">
          J-chaw
        </div>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  // TODO remove, this demo shouldn't need to reset the theme.
  const defaultTheme = createTheme();
const Login1Child = () => {
    const [btnLoader, setBtnLoader] = useState(false);
    const dispatch = useDispatch()
    const [login] = useLoginMutation();
    const nav = useNavigate()
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        setBtnLoader(true)
        const valueData = new FormData(event.currentTarget);
        const user = {  email: valueData.get('email'), password: valueData.get('password')}
        const { data } = await login(user)
        console.log(data)
        if (data?.status == "success") {
          setBtnLoader(false)
          dispatch(getUser({user: data?.user, token: data?.token}))
          Swal.fire({
            title: "sign in successfully",
            width: 600,
            padding: "3em",
            color: "#716add",
            background: "#fff url(/images/trees.png)",
            backdrop: `
              rgba(0,0,123,0.4)
              url("/images/nyan-cat.gif")
              left top
              no-repeat
            `
          });
          
          nav(`/shop`)
        } else {
          window.alert("something error ? sign in again");
          setBtnLoader(false)
        }
      } catch (error) {
        console.log(error)
      }
    };
  return (
    <div className='' >
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#fff9e8' }} >
              <img src={lock1} alt="" />
            </Avatar>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    id='checkbox'
                    name='checkbox'
                    control={<Checkbox value="true"
                      sx={{
                        color: "#009176",
                        '&.Mui-checked': {
                          color: "#009176",
                        },
                      }}

                    />}
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                // color='#3D3D3F'
                sx={{
                  bgcolor: "#3D3D3F",
                }}
                className={`${btnLoader ? "loader-cus" : ""}`}
              >
                {
                  btnLoader === false &&
                  "Login"
                }
              </Button>

              <Grid container justifyContent="flex-end">
                <Link to={`/resgiter`} >
                  <Grid className=' cursor-pointer' item>
                    <div color={"#2C2825"}>
                     if Don't have account? Create now 
                    </div>
                  </Grid>
                </Link>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>
    </div>
  )
}

export default Login1Child
