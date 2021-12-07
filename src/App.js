
import './App.css';
import { AppBar, Button, Checkbox, IconButton, Input, MenuItem, Toolbar } from '@material-ui/core';
import {makeStyles,ThemeProvider,createTheme} from '@material-ui/core/styles';
import {green, orange} from '@material-ui/core/colors';
import 'fontsource-roboto';
import { Typography } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { Grid } from '@material-ui/core';



const useStyles = makeStyles({
  root:{
    background: 'linear-gradient(45deg, #fe6b8b, #ff8e53)',
    border: 0,
    borderRadius: 15,
    color: 'white',
    padding: '0 30px',

  }
})

const theme = createTheme({
  palette:{
    primary:{
      main: orange[400]
    },
       secondary:{
        main: green [400]
     }
    } 
  }
)

function ButtonStyled(){
  const classes = useStyles();
  return <Button className ={classes.root}>Test Style Buttons</Button>
}
 
function App() {
  return (
    <div className="App"style={{margin:250}}>
    <ThemeProvider  >
      <AppBar>
        <Toolbar >
          <IconButton>
            <MenuItem>
            <Typography>Brend</Typography>
            </MenuItem>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
     <Typography variant='h2'>Welcome to time schedule</Typography>

    
    <ButtonStyled/>
      <Button variant="contained" color="primary">Primary</Button>
      <Button variant="contained" color="secondary">Secondary</Button>
          
      <Grid container>
        <Grid item>
         <Paper style={{height:50, width:250}}>{Input.value}</Paper>
       </Grid>
       </Grid>
       <Typography variant='h6'>Pick your time</Typography>
      <Input type= "time" variant="contained" color="primary"/>
      <Checkbox variant="contained" color="primary"/>
  
    
    </Container>
    </ThemeProvider>
    </div>
  );
}

export default App;
