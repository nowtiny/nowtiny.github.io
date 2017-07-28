import * as React from 'react';
import injectSheet from 'react-jss';

const imgSketch = require('./images/tool_sketch.png');
const imgSketch2x = require('./images/tool_sketch_2x.png');
const imgAI = require('./images/tool_ai.png');
const imgAI2x = require('./images/tool_ai_2x.png');
const imgZeplin = require('./images/tool_zeplin.png');
const imgZeplin2x = require('./images/tool_zeplin_2x.png');
const imgPrott = require('./images/tool_prott.png');
const imgPrott2x = require('./images/tool_prott_2x.png');
const imgMarvel = require('./images/tool_marvel.png');
const imgMarvel2x = require('./images/tool_marvel_2x.png');
const imgiMessage = require('./images/tool_imessage.png');
const imgiMessage2x = require('./images/tool_imessage_2x.png');

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
    backgroundSize: '80px 80px',
    '&:hover': {
      backgroundColor: '#e6e9ee'
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
  },
  '@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)': {
    toolItemSketch: {
      backgroundImage: `url(${imgSketch2x})`
    },
    toolItemAI: {
      backgroundImage: `url(${imgAI2x})`
    },
    toolItemZeplin: {
      backgroundImage: `url(${imgZeplin2x})`
    },
    toolItemPrott: {
      backgroundImage: `url(${imgPrott2x})`
    },
    toolItemMarvel: {
      backgroundImage: `url(${imgMarvel2x})`
    },
    toolItemiMessage: {
      backgroundImage: `url(${imgiMessage2x})`
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
          What we use for scratch pixels
        </div>
        <div className={classes.desc}>
          Sketch、Adobe illustrator is our first choice. Also other tools maybe rised in the whole progress: Adobe Photoshop、Zeplin、Prottapp、Marvelapp、Origami、iMessage.
        </div>
        <ul className={classes.toolsMenu}>
          <li className={classes.toolItemSketch}><a href="https://sketchapp.com/" target="_blank"/></li>
          <li className={classes.toolItemAI}><a href="https://www.adobe.com/products/illustrator.html" target="_blank"/></li>
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
