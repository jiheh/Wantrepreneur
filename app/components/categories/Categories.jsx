'use strict';

import React from'react';
import {Col, Row, Grid, Jumbotron} from "react-bootstrap";
import {Link} from 'react-router';
import FontIcon from 'material-ui/FontIcon';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';
import NavbarContainer from '../navbar/NavbarContainer';

export default class Categories extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {

    let iconStyles = {
      fontSize: '80px',
      color: '#fffef9'
    };

      return (
        <div>
          <NavbarContainer />
          <div className='categories-choices'>
            <Grid>

              <Row>
                <Col sm={12}>
                  <h1 className='other-heading'><span className='blue-animation'>Categories</span></h1>
                  <h3 className='description-headline'>First, let's pick a category for your dream business</h3>
                  <br/>
                </Col>
              </Row>

              <Row>
                {this.props.categories.allCategories.map(category => (
                  <Link to='/price' key={category.id}>
                    <Col sm={6} md={4} onClick={() => this.props.addCategory(category.id)}>
                      <Jumbotron className='boxes'>
                        <FontIcon className="material-icons" style={iconStyles}>{category.icon}</FontIcon>
                        <p>{category.name}</p>
                      </Jumbotron>
                    </Col>
                  </Link>
                ))}
              </Row>
            </Grid>
          </div>
        </div>
    );
  }
}
