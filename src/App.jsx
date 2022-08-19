import logo from './logo.png';
import './App.css';
import { Note } from './Notes'
import { data } from './data'
import { AppBar, Box, Paper, Toolbar } from '@mui/material';
import Masonry from '@mui/lab/Masonry'




const App = () => {
  return ( data ? (
    <Box className="App">
      <AppBar className="App-header" position="static" sx={{ backgroundColor: "black"}}>
        <Toolbar sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <img src={logo} className="App-logo" alt="logo" />
        </Toolbar>
      </AppBar>
        <Box  className="AppNoteContainer" sx={{ mt: 2, display: 'flex', justifyContent: 'center'}}>
        <Masonry columns={3} spacing={3}>
  {data.map((note, index) => (
    <Paper key={index}>
         <Note title={note.title} text={note.text}/>
    </Paper>
  ))}
</Masonry>
        </Box>    
    </Box>
  ) : ( null)
  );
}

export default App;
