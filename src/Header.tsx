import * as React from 'react';
import injectSheet from 'react-jss';

const logo = require('./images/logo.png');

const styles = {
  header: {
  },
  logo: {
    'display': 'inline',
    'vertical-align': 'text-bottom',
    'margin-right': '5px'
  },
  title: {
    'font-family': '"Lato Bold", sans-serif',
    'font-size': '26px',
    'display': 'inline',
    'margin-right': '12px'
  },
  subtitle: {
    'font-family': '"Lato", sans-serif',
    'font-size': '20px',
    'color': '#999999',
    'display': 'inline'
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
        <img className={classes.logo} src={logo} />
        <div className={classes.title}>NowTiny</div>
        <div className={classes.subtitle}>design stuff with you</div>
      </div>
    );
  }
}

export default Header;
