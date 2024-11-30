import React, { useState } from 'react'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import mLink from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Avatar } from '@mui/material';
import lock from '../../assets/SVG/resgister/gif/lock.gif'
import { useResgiterMutation } from '../../features/services/resgiterAuth';
import { Link, useNavigate } from 'react-router-dom';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <mLink color="inherit" href="https://mui.com/">
        J-chaw
      </mLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();
const Reg_child = () => {
  const [btnLoader, setBtnLoader] = useState(false);
  const [resgiter] = useResgiterMutation()
  const nav = useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setBtnLoader(true)
      const valueData = new FormData(event.currentTarget);
      const user = { name: valueData.get('name'), email: valueData.get('email'), password: valueData.get('password'), password_confirmation: valueData.get('password_confirmation') }
      const { data } = await resgiter(user)
      console.log(data)
      if (data?.status == "success") {
        setBtnLoader(false)
        window.alert(" sign up successfully");
        nav(`/login`)
      } else {
        window.alert("something error ? sign up again");
        setBtnLoader(false)
      }
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <div>
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
              <img src={lock} alt="" />
            </Avatar>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="name"
                    label="username"
                    name="name"
                    autoComplete="family-name"
                  />
                </Grid>
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
                  <TextField
                    required
                    fullWidth
                    name="password_confirmation"
                    label="Confirm Password"
                    type="password"
                    id="password_confirmation"
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
                  "Sign Up"
                }
              </Button>

              <Grid container justifyContent="flex-end">
                <Link to={`/login`} >
                  <Grid className=' cursor-pointer' item>
                    <mLink color={"#2C2825"}>
                      Already have an account? Sign in
                    </mLink>
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

export default Reg_child
