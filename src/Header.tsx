import * as React from 'react';
import injectSheet from 'react-jss';

const imgLogo = require('./images/logo.png');
const imgLogo2x = require('./images/logo_2x.png');
const imgLogoGull = require('./images/logo_gull.png');
const imgLogoGull2x = require('./images/logo_gull_2x.png');

const styles = {
  header: {
    overflow: 'hidden',
    paddingTop: '50px',
    marginBottom: '68px'
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
  metaBlock: {
    overflow: 'visible',
    float: 'left',
    position: 'relative',
    '&:hover $logoGull': {
      visibility: 'visible'
    }
  },
  logo: {
    display: 'inline-block',
    verticalAlign: 'text-bottom',
    marginRight: '5px',
    width: '26px',
    height: '26px',
    backgroundSize: '26px 26px',
    backgroundImage: `url(${imgLogo})`
  },
  logoGull: {
    visibility: 'hidden',
    position: 'absolute',
    display: 'block',
    top: '-19px',
    left: '24px',
    width: '26px',
    height: '26px',
    transform: 'rotate(5deg)',
    backgroundSize: '26px 26px',
    backgroundImage: `url(${imgLogoGull})`
  },
  menu: {
    marginTop: '15px',
    float: 'right'
  },
  menuItem: {
    display: 'inline',
    fontSize: '16px',
    marginLeft: '40px'
  },
  '@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)': {
    logo: {
      backgroundImage: `url(${imgLogo2x})`
    },
    logoGull: {
      backgroundImage: `url(${imgLogoGull2x})`
    }
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
        <div className={classes.metaBlock}>
          <div className={classes.logo} />
          <div className={classes.logoGull} />
          <div className={classes.title}>NowTiny</div>
          <div className={classes.subtitle}>design stuff with you</div>
        </div>
        <ul className={classes.menu}>
          <li className={classes.menuItem}>Resources</li>
        </ul>
      </div>
    );
  }
}

export default Header;
