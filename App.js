import React from 'react';
import ReactFCCtest from 'react-fcctest';

import { random } from 'lodash';
import Quotemachine from './components/Quotemachine.js';
import { Grid, withStyles } from '@material-ui/core';



const styles ={
  container:{
display: 'flex',
alignItems: 'center',
height: '100vh'
  }
}

export class App extends React.Component {
  constructor(props){
    super (props);
    this.state={
      quotes:[],
      selectedQuoteIndex: null

    }
    this.assignNewQuoteIndex=this.assignNewQuoteIndex.bind(this);
    this.selectRandomIndex=this.selectRandomIndex.bind(this);
  }
  
componentDidMount(){
fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
  .then(data=>data.json())
  .then(quotes=>this.setState({quotes},this.assignNewQuoteIndex));
  }

get selectedQuote(){
  if(!this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex)){
    console.log("bho panapa");
    return undefined; 
  }
  
console.log('hooo');
    return this.state.quotes[this.state.selectedQuoteIndex];
}

  selectRandomIndex(){
 if(!this.state.quotes.length){
   console.log('kkknnnn');
   return;
 }
 console.log(this.state.selectedQuoteIndex);
 return random(0, this.state.quotes.length-1);
  }

  assignNewQuoteIndex(){
this.setState({selectedQuoteIndex:this.selectRandomIndex()})

  }

  render() {
    console.log(this.state.selectedQuoteIndex);

    return (
      
      <Grid  className={this.props.classes.container}  id='quote-box' justify="center" container>
        <Grid xs={11} lg={9} item>
        <ReactFCCtest />
          {this.selectedQuote?
        <Quotemachine assignNewQuoteIndex={this.assignNewQuoteIndex} selectedQuote={this.selectedQuote}/>:
        null}
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(App);
