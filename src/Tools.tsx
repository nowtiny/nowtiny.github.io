import * as React from 'react';
import injectSheet from 'react-jss';

const imgSketch = require('./images/tool_sketch.png');
const imgAI = require('./images/tool_ai.png');
const imgZeplin = require('./images/tool_zeplin.png');
const imgPrott = require('./images/tool_prott.png');
const imgMarvel = require('./images/tool_marvel.png');
const imgiMessage = require('./images/tool_imessage.png');

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
    borderRadius: '4px',
    backgroundColor: '#eef0f5',
    '&:hover': {
      backgroundColor: '#FBFCFD'
    },
    '& img': {
      verticalAlign: 'middle'
    },
    '& a': {
      display: 'block',
      width: '80px',
      height: '80px'
    }
  },
  toolItemSketch: {
    extend: 'toolItem',
    backgroundImage: `url(${imgSketch})`
  },
  toolItemAI: {
    extend: 'toolItem',
    backgroundImage: `url(${imgAI})`
  },
  toolItemZeplin: {
    extend: 'toolItem',
    backgroundImage: `url(${imgZeplin})`
  },
  toolItemPrott: {
    extend: 'toolItem',
    backgroundImage: `url(${imgPrott})`
  },
  toolItemMarvel: {
    extend: 'toolItem',
    backgroundImage: `url(${imgMarvel})`
  },
  toolItemiMessage: {
    extend: 'toolItem',
    backgroundImage: `url(${imgiMessage})`
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
          <li className={classes.toolItemSketch}><a href="https://sketchapp.com/" target="_blank"/></li>
          <li className={classes.toolItemAI}><a href="www.adobe.com/products/illustrator.html" target="_blank"/></li>
          <li className={classes.toolItemZeplin}><a href="https://zeplin.io/" target="_blank"/></li>
          <li className={classes.toolItemPrott}><a href="https://prottapp.com/" target="_blank"/></li>
          <li className={classes.toolItemMarvel}><a href="https://marvelapp.com/" target="_blank"/></li>
          <li className={classes.toolItemiMessage}><a /></li>
        </ul>
      </div>
    );
  }
}

export default Tools;
