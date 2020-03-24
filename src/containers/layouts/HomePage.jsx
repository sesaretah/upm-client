import React, { Component } from 'react';
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavRight,
  Link,
  Toolbar,
  Block,
  BlockTitle,
  List,
  Card,
  Row,
  Col,
  Button, Icon, Fab, Searchbar, Subnavbar, CardFooter, CardContent, CardHeader
} from 'framework7-react';
import { dict } from '../../Dict';

export default class ProfileCreate extends Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
    this.state = {
      token: window.localStorage.getItem('token'),
    }
  }

  logout() {
    this.setState({ token: null });
    window.localStorage.removeItem('token');
    window.location.reload()
  }

  card(app, logo, link) {
    if (this.state.token) {
      return (
        <a className="external" href={link}>
          <Card>
            <CardHeader className='jc-center'>
              <div className='fw-8'>{dict[app]}</div>
            </CardHeader>
            <CardContent className='jc-center h-40'>
              <i className={"fa fa-3x fa-" + logo} aria-hidden="true"></i>
            </CardContent>
            <CardFooter className='jc-center'>
              {dict['about_' + app]}
            </CardFooter>
          </Card>
        </a>
      )
    } else {
      return (
        <a href='/login/'>
          <Card>
            <CardHeader className='jc-center'>
              <div className='fw-8'>{dict[app]}</div>
            </CardHeader>
            <CardContent className='jc-center h-40'>
              <i className={"fa fa-3x fa-" + logo} aria-hidden="true"></i>
            </CardContent>
            <CardFooter className='jc-center'>
              {dict['about_' + app]}
            </CardFooter>
          </Card>
        </a>
      )
    }
  }

  logout(){
    this.setState({token: null});
    window.localStorage.removeItem('token');
    window.location.reload()
  }

  logged_in() {
    if (this.state.token) {
      return (
        <Link href='#' className='color-brown' onClick={this.logout}>
          <i className="va fa fa-sign-out" aria-hidden="true"></i>
          <span className='fw-8 color-brown'>{dict.sign_out}</span>
        </Link>
      )
    } else {
      return (
        <Link href='/login/' className='color-brown'  >
          <i className="va fa fa-user" aria-hidden="true"></i>
          <span className='fw-8 color-brown'>{dict.login}</span>
        </Link>
      )
    }
  }


  render() {
    return (
      <Page className="no-swipe-panel">
        <Toolbar top>
          <Link></Link>
          {this.logged_in()}

        </Toolbar>
        <Block>
          <Row>
            <Col width='50' tabletWidth='33'>
              {this.card('shoa', 'umbrella', 'http://localhost:3003')}
            </Col>
            <Col width='50' tabletWidth='33'>
              {this.card('zaman', 'clock-o', 'http://localhost:3003')}
            </Col>
            <Col width='50' tabletWidth='33'>
              {this.card('kian', 'slideshare', 'http://localhost:3003')}
            </Col>
            <Col width='50' tabletWidth='33'>
              {this.card('divan', 'file-text-o', 'http://localhost:3003')}
            </Col>
            <Col width='50' tabletWidth='33'>
              {this.card('bayan', 'play-circle', 'http://localhost:3003')}
            </Col>
          </Row>
        </Block>
      </Page>
    );
  }
}

