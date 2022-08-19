import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export const Note = ({ title, text}) => {
   return  (
          <Accordion sx={[{ minHeight: (text.length/5), borderRadius: 2, }, 
        {
            '&:hover': {
              color: 'white',
              backgroundColor: 'black',
            },
          }]} >
        <AccordionSummary expandIcon={<ExpandMoreIcon color="error"/>}>
            {title}
        </AccordionSummary>
    <AccordionDetails>{text}</AccordionDetails>
    </Accordion>
    )
}