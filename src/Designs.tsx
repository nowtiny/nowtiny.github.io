import * as React from 'react';
import injectSheet from 'react-jss';

const imgWork = require('./images/work.png');

const styles = {
  designs: {
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
  works: {
  },
  workItem: {
    float: 'left',
    display: 'block',
    margin: '0 32px 30px 0',
    '& img': {
      verticalAlign: 'middle'
    }
  }
};

interface Props {
  classes?: { [name: string]: string; };
}

@injectSheet(styles)
class Designs extends React.Component<Props, {}> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.designs}>
        <div className={classes.title}>Redesign & Design tours</div>
        <div className={classes.desc}>
          Here are the great brands that we rised an proposal or connected a cooporation. There are so many great things happened everyday in different paltforms.  iOS、Mac OS、Web is the main paltforms we prefer to sacrifice . In history, we design or redesign  different apps on those paltforms.
        </div>
        <ul className={classes.works}>
          <li className={classes.workItem}><img src={imgWork} /></li>
          <li className={classes.workItem}><img src={imgWork} /></li>
          <li className={classes.workItem}><img src={imgWork} /></li>
          <li className={classes.workItem}><img src={imgWork} /></li>
          <li className={classes.workItem}><img src={imgWork} /></li>
          <li className={classes.workItem}><img src={imgWork} /></li>
          <li className={classes.workItem}><img src={imgWork} /></li>
          <li className={classes.workItem}><img src={imgWork} /></li>
        </ul>
      </div>
    );
  }
}

export default Designs;
