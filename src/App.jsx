import logo from './logo.png';
import './App.css';
import { Note } from './Notes'
import { data } from './data'
import { AppBar, Box, Paper, Toolbar } from '@mui/material';
import Masonry from '@mui/lab/Masonry'
import { AddNoteButton } from './AddNoteButton';




const App = () => {
  return ( data ? (
    <Box className="App">
      <AppBar className="App-header" position="static" sx={{ backgroundColor: "black"}}>
        <Toolbar sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <img src={logo} className="App-logo" alt="logo" />
        <AddNoteButton />
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
