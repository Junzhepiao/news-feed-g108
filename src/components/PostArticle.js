import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { bindActionCreators } from 'redux';
import {addArticle} from '../redux/actions'

class PostArticle extends Component {
 state={
     title:'',
     img:''
 }
 handleSubmit =()=>{
    this.props.addArticle(this.state)
  }
  render(){
      return (
        <Row>
        <Col sm="10">
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="title-field">Title</Label>
              <Input type="text" name="title" value={this.state.title} onChange={(e)=> this.setState({title: e.target.value})}  />
            </FormGroup>
            <FormGroup>
              <Label for="body-field">img</Label>
              <Input type="text" name="img"  value={this.state.img} onChange={(e)=> this.setState({img: e.target.value})}  />
            </FormGroup>
            <Button type="submit">Submit</Button>
          </Form>
        </Col>
      </Row>
      )
  }
}

function mapDispatchToProps(dispatch){
    return {
        addArticle: bindActionCreators(addArticle,dispatch)
    }
  }
  
  export default connect (null, mapDispatchToProps)(PostArticle)
  