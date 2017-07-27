import * as React from 'react';
import injectSheet from 'react-jss';

const styles = {
  contact: {
    overflow: 'hidden',
    marginBottom: '48px'
  },
  title: {
    fontFamily: '"Lato Bold", sans-serif',
    fontSize: '46px',
    marginBottom: '20px'
  },
  desc: {
    lineHeight: '36px',
    color: '#383838',
    marginBottom: '30px',
    textAlign: 'justify'
  },
  tel: {
    marginBottom: '18px'
  }
};

interface Props {
  classes?: { [name: string]: string; };
}

@injectSheet(styles)
class Tools extends React.Component<Props, {}> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.contact}>
        <div className={classes.title}>
          Contact us
        </div>
        <div className={classes.desc}>
          We can’t control stock’s price, but we can control how those apps be used.
        </div>
        <div className={classes.tel}>Tel-us: <a href="tel:+8618513584947">(+86)18513584947</a></div>
        <div>Email-us: <a href="mailto:hey@nowtiny.com">hey@nowtiny.com</a></div>
      </div>
    );
  }
}

export default Tools;
