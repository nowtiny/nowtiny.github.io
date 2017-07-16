import * as React from 'react';
import injectSheet from 'react-jss';

const logo = require('./images/logo.png');

const styles = {
  header: {
    overflow: 'hidden',
    marginBottom: '68px'
  },
  logo: {
    display: 'inline',
    verticalAlign: 'text-bottom',
    marginRight: '5px'
  },
  title: {
    fontFamily: '"Lato Bold", sans-serif',
    fontSize: '26px',
    display: 'inline',
    marginRight: '12px'
  },
  subtitle: {
    fontFamily: '"Lato", sans-serif',
    fontSize: '20px',
    color: '#999999',
    display: 'inline'
  },
  meta_block: {
    float: 'left'
  },
  menu: {
    marginTop: '15px',
    float: 'right'
  },
  menuItem: {
    display: 'inline',
    fontSize: '16px',
    marginLeft: '40px'
  }
};

interface Props {
  classes?: { [name: string]: string; };
}

@injectSheet(styles)
class Header extends React.Component<Props, {}> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.header}>
        <div className={classes.meta_block}>
          <img className={classes.logo} src={logo} />
          <div className={classes.title}>NowTiny</div>
          <div className={classes.subtitle}>design stuff with you</div>
        </div>
        <ul className={classes.menu}>
          <li className={classes.menuItem}>Tel-me</li>
          <li className={classes.menuItem}>Design Tours</li>
          <li className={classes.menuItem}>Resources</li>
        </ul>
      </div>
    );
  }
}

export default Header;
