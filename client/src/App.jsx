import React from 'react'
import { Typography, AppBar, ButtonGroup, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@mui/material'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { styled, createTheme, ThemeProvider } from '@mui/system'

// const Mycomp = styled('div')({
//     color:'darkblue',
//     backgroundColor:'aliceblue',
//     padding:8,
// })
// const useStyles = makeStyles((theme)=>({
//     container:{
//         backgroundColor:theme.palette.secondary.main
//     }
// }))
const customTheme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
            contrastText: 'white',
        },
    },
});


const MyTheme = styled('div')(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
}))

const App = () => {
    // const classes = useStyles();
    return (
        <ThemeProvider theme={customTheme}>
            <CssBaseline />
            <AppBar position='relative'>
                <Toolbar>
                    <PhotoCameraIcon />
                    <Typography variant='h6'>
                        Photo Album
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>

                <div>
                    <MyTheme>
                        <Container maxWidth="sm">
                            <Typography variant='h2' align='center' color="textPrimary" gutterBottom>
                                Photo Album
                            </Typography>
                            <Typography variant='h5' align='center' color="textSecondary" paragraph>
                                Hello everyone This is a photo album and I'm trying to make this sentence as long as possible so we can see how does it look like in the screen
                            </Typography>
                            <div>
                                <Grid container spacing={2} justifyContent="center">
                                    <Grid item>
                                        <Button variant='contained' color='primary'>
                                            See my photos
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button variant='outlined' color='primary'>
                                            Secondary action
                                        </Button>
                                    </Grid>
                                </Grid>
                            </div>
                        </Container>
                    </MyTheme>
                </div>
            </main>
        </ThemeProvider>
    );
}

export default App