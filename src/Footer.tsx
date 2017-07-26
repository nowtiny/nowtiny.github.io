import * as React from 'react';
import injectSheet from 'react-jss';

const imgNyan = require('./images/nyan.gif');

const styles = {
  footer: {
    borderTop: '1px solid #a7a9ae',
    padding: '25px 0',
    overflow: 'hidden',
  },
  copyright: {
    fontStyle: 'italic',
    color: '#a7a9ae'
  },
  fav: {
    display: 'inline',
    verticalAlign: 'middle',
    marginRight: '5px'
  }
};

interface Props {
  classes?: { [name: string]: string; };
}

@injectSheet(styles)
class Footer extends React.Component<Props, {}> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.footer}>
        <div className={classes.copyright}>
          <img className={classes.fav} src={imgNyan} />
          copyright @ NowTiny 2017
        </div>
      </div>
    );
  }
}

export default Footer;
