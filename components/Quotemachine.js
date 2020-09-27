import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Quotemachine({selectedQuote, assignNewQuoteIndex}) {
    return (
        <Card>
            <CardContent>
        
            <Typography id="text">
   {selectedQuote.quote} - <span id="author">{selectedQuote.author}</span>
             </Typography>
        </CardContent>
     <CardActions>
         <Button id="new-quote"size="small" onClick={assignNewQuoteIndex}>Next Quote</Button>
     <Button
     id="tweet-quote"
     target="_blank"
     href={ `https://twitter.com/intent/tweet?text=${selectedQuote.quote}&hashtags=charlesthedev` }

     >
     <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
         
    
     </Button>
            
     </CardActions>
   
</Card>
    );
}

