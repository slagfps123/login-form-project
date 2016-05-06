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
        ButtonToolbar} from 'react-bootstrap'
     
 import validation from 'react-validation-mixin'
 import strategy from 'react-validatorjs-strategy'
 import validatorjs from 'validatorjs'       
 import classnames from 'classnames';
 
       
class Register extends React.Component{

 constructor(props){
    super(props);
    this.state={ 
    
 };
  
 
 this.validatorTypes = strategy.createSchema(
   {
     lastName: 'required',
     firstName: 'required',
     gender: 'required',
     Municipality: 'required',
     comments: 'required'
   },
   {
     "required": "The field :attribute is required!"
   },
  (validation)=>{
    validation.setAttributeNames({
      lastName: 'Last Name',
      firstName: 'First Name',
      gender: 'Gender',
      Municipality: 'Municipality',
      comments: 'Comments'
    })
  }
   
   
   
 );
 }
 getValidatorData = ()=> {
        return this.state
    };
 
getClasses = (field)=>{ 
  return null;
  
        return classnames({
            'success': this.props.isValid(field),
            'error': !this.props.isValid(field)
        });
 };
 
 
getErrorText=(field)=>{
        var error = this.props.errors[field];
        if(!error)
            return null;
        if(Array.isArray(error)){
            var message = [];
            message = error.map((item,i)=>{
                return(
                    <span key={i}>
                        {item}
                        <br/>
                    </span>
                )
            });
            return message;
        }
        else
            return  (<span>{error || ''}</span>);
    };
    onFormSubmit = (event)=>{
        event.preventDefault();
        
        this.setState({
          validated:true
        });
        this.props.validate(this.onValidate);
    };
 
onValidate=(error)=>{
        if (error) {
            //form has errors; do not submit
        } else {
           // submit to rest here
        }
    };
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
         <form onSubmit={this.onFormSubmit}>
         <FormGroup validationState={this.getClasses('firstName')}>
         <ControlLabel>Enter Firstname</ControlLabel>
         <FormControl
                       type="text" name="firstName"
                       placeholder="Enter your Firstname"
                       value={this.state.firstName || '' }
                       onBlur={()=>{
                         this.setState({
                         
                         });
                         this.props.validate('firstName');
                      }
                    }
                       onChange={
                       (e) => this.setState
                       ({
                       firstName:e.target.value
                       })
                       }/>
         <FormControl.Feedback/>
         <HelpBlock>{this.getErrorText('firstName')}</HelpBlock>
         </FormGroup>
         
         
          <FormGroup validationState={this.getClasses('lastName')}>
         <ControlLabel>Last Name: </ControlLabel>
         <FormControl type="text" name="lastName"
                       placeholder="Enter your Lastname"
                       value={this.state.lastName || '' }
                       onBlur={()=>{
                         this.setState({
                        
                         });
                         this.props.validate('lastName');
                      }
                    }
                       onChange={
                       (e) => this.setState
                       ({
                       lastName:e.target.value
                       })
                       }/>
         <FormControl.Feedback/>
         <HelpBlock>{this.getErrorText('firstName')}</HelpBlock>
         </FormGroup>
     
     
         <FormGroup validationState={this.getClasses('gender')}>
         <ControlLabel>Gender: </ControlLabel>
         
          <Radio name='gender' style={rbutton} inline value="Male"
           onBlur={()=>{
                         this.setState({
                         
                         });
                         this.props.validate('gender');
                      }
                    } 
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
          <HelpBlock>{this.getErrorText('gender')}</HelpBlock>
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
       
       
       <FormGroup controlId="formControlsSelect" validationState={this.getClasses('Municipality')}>
      <ControlLabel>Municipality: </ControlLabel>
      <FormControl componentClass="select" placeholder="select" name="Municipality" value={this.state.Municipality || ''}
                      onBlur={()=>{
                         this.setState({
                        
                         });
                         this.props.validate('lastName');
                      }
                    }
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
      <HelpBlock>{this.getErrorText('Municipality')}</HelpBlock>
      </FormGroup>
     
     
      <FormGroup controlId="formControlsTextarea" name="comments" validationState={this.getClasses('comments')}>
      <ControlLabel>Comment</ControlLabel>
      <FormControl componentClass="textarea" placeholder="Comments & Suggestions" onChange={()=>{
                         this.setState({
                         
                         });
                         this.props.validate('comments');
                      }
                    }/>
      <HelpBlock>{this.getErrorText('comments')}</HelpBlock>
    </FormGroup>
     
     
      <ButtonToolbar>
       <ButtonGroup style={btcontainer}>
       
         <Button bsStyle="success" type="submit">Sumbit</Button>
         <Button bsStyle="warning" type="reset">Reset</Button>
        </ButtonGroup>
       </ButtonToolbar>  
      </form>
          </Well>
         </div>
       );
  }
  
  
 }
 
 export default validation(strategy)(Register);