import React, { Component } from 'react';
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    Row,
    Col
  } from 'reactstrap'
class Article extends Component {
    render() {
      return (
        <div>
        <Row className="mt-3">
          <Col>
            <Card>
              <CardImg
                top
                width="100%"
                src={this.props.article.img}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>{this.props.article.title}</CardTitle>
              </CardBody>
            </Card>
          </Col>
        </Row>
        </div>
          )
    }

}

export default Article

