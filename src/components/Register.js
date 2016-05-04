import React from 'react';
import {Well,
        FormGroup,
        ControlLabel,
        FormControl,
        HelpBlock,
        Button,
        ButtonGroup,
        Checkbox,
        Radio,
        ButtonToolbar} from 'react-bootstrap';
       
export default  class Register extends React.Component{

 constructor(props){
    super(props);
    this.state={ 
 };
  this.state2={ 
 };
  }
 
  render(){
     
        const wellStyle={
         width: 400,
         height: 600,
         marginLeft: 'auto',
         marginRight: 'auto'
     };
     
     
     const btcontainer={
         float: 'right',
         marginLeft: '5px'
     };
     
     
     const rbutton={
         paddingLeft: '50px'
     };
     
         
       return (
         <div className="container">
         <Well style={wellStyle}>
          <legend>Please Login</legend>
         { JSON.stringify(this.state)}   
          <form> 
         <FormGroup>
         <ControlLabel>Enter Username</ControlLabel>
         <FormControl
                       type="text"
                       placeholder="Enter your Firstname"
                       value={this.state.firstName || '' }
                       onChange={
                       (e) => this.setState
                       ({
                       firstName:e.target.value
                       })
                       }/>
         <FormControl.Feedback/>
         <HelpBlock></HelpBlock>
         </FormGroup>
         
         
          <FormGroup>
         <ControlLabel>Last Name: </ControlLabel>
         <FormControl type="text"
                       placeholder="Enter your Lastname"
                       value={this.state.lastName || '' }
                       onChange={
                       (e) => this.setState
                       ({
                       lastName:e.target.value
                       })
                       }/>
         <FormControl.Feedback/>
         <HelpBlock></HelpBlock>
         </FormGroup>
     
     
         <FormGroup>
         <ControlLabel>Gender: </ControlLabel>
         
          <Radio name='gender' style={rbutton} inline value="Male"
          checked={this.state.gender === 'Male'}
          onClick={
          ()=>
            this.setState({'gender':'Male'})}>
             Male
          </Radio>
           {' '}
          <Radio name='gender' inline value="Female"
          checked={this.state.gender === 'Female'}
          onClick={
          ()=>
            this.setState({'gender':'Female'})}>
            Female
          </Radio>
         </FormGroup>
         
         
          <FormGroup>
          <ControlLabel>Favorite Food: </ControlLabel>
          <Checkbox style={rbutton} inline value="Pizza"
          checked={this.state.food1 === 'Pizza'}
          onClick={
          ()=>{
            if (this.state.food1 === 'Pizza')
            this.setState({'food1':''})
            else
            this.setState({'food1':'Pizza'})
            }
            }>
          Pizza
          </Checkbox>
          {' '}
          <Checkbox inline value="Burger"
          checked={this.state.food2 === 'Burger'}
          onClick={
          ()=>{
            if (this.state.food2 === 'Burger')
            this.setState({'food2':''})
            else
            this.setState({'food2':'Burger'})
            }
            }>

           
          Burger
          
          </Checkbox>
          {' '}
          <Checkbox inline value="Fries"
          checked={this.state.food3 === 'Fries'}
          onClick={
          ()=>{
          if (this.state.food3 === 'Fries')
            this.setState({'food3':''})
            else
            this.setState({'food3':'Fries'})
            }
            }>
            Fries
        </Checkbox>
 
        </FormGroup>
       
       
       <FormGroup controlId="formControlsSelect">
      <ControlLabel>Municipality: </ControlLabel>
      <FormControl componentClass="select" placeholder="select" value={this.state.Municipality || ''}
                       onChange={
                       (e) => this.setState
                       ({
                       Municipality:e.target.value
                       })
                       }>
        <option value="">- - Please Specify Your Location - -</option>
        <option value="Albur">Albur</option>
        <option value="Baclayon">Baclayon</option>
        <option value="Carmen">Carmen</option>
        <option value="Duero">Duero</option>
        <option value="Loay">Loay</option>
        <option value="Loay">Loay</option>
        <option value="Tagbilaran">Tagbilaran</option>
      </FormControl>
      </FormGroup>
     
     
      <FormGroup controlId="formControlsTextarea">
      <ControlLabel>Comment</ControlLabel>
      <FormControl componentClass="textarea" placeholder="Comments & Suggestions" />
    </FormGroup>
     
     
      <ButtonToolbar>
       <ButtonGroup style={btcontainer}>
       <Button bsStyle="warning" type="submit">Reset</Button>
         <Button bsStyle="success" type="submit">Sumbit</Button>
         </ButtonGroup>
       </ButtonToolbar>  
      </form>
          </Well>
         </div>
       );
 }
 
 
}