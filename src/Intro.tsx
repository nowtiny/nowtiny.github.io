import * as React from 'react';
import injectSheet from 'react-jss';

const tablet = require('./images/tablet.png');
const phone = require('./images/phone.png');
const desktop = require('./images/desktop.png');

const styles = {
  intro: {
    overflow: 'hidden',
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
    marginRight: '60px'
  },
  phone: {
    marginRight: '60px'
  },
  desktop: {}
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
          <img className={classes.tablet} src={tablet}/>
          <img className={classes.phone} src={phone}/>
          <img className={classes.desktop} src={desktop}/>
        </div>
      </div>
    );
  }
}

export default Intro;
