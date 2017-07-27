import * as React from 'react';
import injectSheet from 'react-jss';

const imgTablet = require('./images/tablet.png');
const imgTablet2x = require('./images/tablet_2x.png');
const imgPhone = require('./images/phone.png');
const imgPhone2x = require('./images/phone_2x.png');
const imgDesktop = require('./images/desktop.png');
const imgDesktop2x = require('./images/desktop_2x.png');

const styles = {
  intro: {
    marginBottom: '88px'
  },
  title: {
    fontFamily: '"Lato Bold", sans-serif',
    fontSize: '46px',
    marginBottom: '20px'
  },
  desc: {
    lineHeight: '36px',
    color: '#383838',
    marginBottom: '63px',
    textAlign: 'justify'
  },
  devices: {
  },
  tablet: {
    display: 'inline-block',
    width: '153px',
    height: '136px',
    backgroundImage: `url(${imgTablet})`,
    backgroundSize: '153px 136px',
    marginRight: '60px'
  },

  phone: {
    display: 'inline-block',
    width: '50px',
    height: '100px',
    backgroundImage: `url(${imgPhone})`,
    backgroundSize: '50px 100px',
    marginRight: '60px'
  },
  desktop: {
    width: '231px',
    height: '178px',
    backgroundImage: `url(${imgDesktop})`,
    backgroundSize: '231px 178px',
    display: 'inline-block'
  },
  '@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)': {
    desktop: {
      backgroundImage: `url(${imgDesktop2x})`
    },
    tablet: {
      backgroundImage: `url(${imgTablet2x})`
    },
    phone: {
      backgroundImage: `url(${imgPhone2x})`
    }
  }
};

interface Props {
  classes?: { [name: string]: string; };
}

@injectSheet(styles)
class Intro extends React.Component<Props, {}> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.intro}>
        <div className={classes.title}>We design Apps & Brands.</div>
        <div className={classes.desc}>
          Hey, this is NowTiny. We design stuff in BeiJing. Our goal is to make people’s apps or services archive a better use experience. Design is what it looks, also is how it works. Punch us if you have wonderful things  to scratch. <a>Mail-to-us</a>, <a>Tel-us</a>.
        </div>
        <div className={classes.devices}>
          <div className={classes.tablet} />
          <div className={classes.phone} />
          <div className={classes.desktop} />
        </div>
      </div>
    );
  }
}

export default Intro;
