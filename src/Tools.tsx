import * as React from 'react';
import injectSheet from 'react-jss';

const imgTool = require('./images/tool.png');

const styles = {
  tools: {
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
  toolsMenu: {
  },
  toolItem: {
    float: 'left',
    display: 'block',
    marginRight: '20px',
    '& img': {
      verticalAlign: 'middle'
    }
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
      <div className={classes.tools}>
        <div className={classes.title}>
          What we used for scratch pixels
        </div>
        <div className={classes.desc}>
          <a>Sketch</a>、<a>Adobe illustrator</a> is our first choice. Also other tools maybe rised in the whole progress: <a>Adobe Photoshop</a>、<a>Zeplin</a>、<a>Prottapp</a>、<a>Marvelapp</a>、<a>Origami</a>、<a>iMessage</a>.
        </div>
        <ul className={classes.toolsMenu}>
          <li className={classes.toolItem}><img src={imgTool} /></li>
          <li className={classes.toolItem}><img src={imgTool} /></li>
          <li className={classes.toolItem}><img src={imgTool} /></li>
          <li className={classes.toolItem}><img src={imgTool} /></li>
          <li className={classes.toolItem}><img src={imgTool} /></li>
          <li className={classes.toolItem}><img src={imgTool} /></li>
        </ul>
      </div>
    );
  }
}

export default Tools;
