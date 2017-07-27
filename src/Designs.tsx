import * as React from 'react';
import injectSheet from 'react-jss';

const imgClientMoneyWiz = require('./images/client_moneywiz.png');
const imgClientMoneyWiz2x = require('./images/client_moneywiz_2x.png');
const imgClientGpx = require('./images/client_gpx.png');
const imgClientGpx2x = require('./images/client_gpx_2x.png');
const imgClientZiroom = require('./images/client_ziroom.png');
const imgClientZiroom2x = require('./images/client_ziroom_2x.png');
const imgClientBearychat = require('./images/client_bearychat.png');
const imgClientBearychat2x = require('./images/client_bearychat_2x.png');
const imgClientUmetrip = require('./images/client_umetrip.png');
const imgClientUmetrip2x = require('./images/client_umetrip_2x.png');

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
    position: 'relative',
    borderRadius: '4px',
    margin: '0 32px 30px 0',
    background: '#eef0f5',
    width: '240px',
    height: '120px',
    backgroundSize: '240px 120px',
    '& a': {
      width: '240px',
      height: '120px',
      display: 'block'
    },
    '&:hover': {
      backgroundColor: '#e6e9ee',
      '& $workItemType': {
        color: '#ffffff'
      }
    }
  },
  workItemType: {
    position: 'absolute',
    fontSize: '10px',
    fontWeight: 'bold',
    top: '6px',
    left: '10px',
    textDecoration: 'underline',
    color: '#BEC1C5'
  },
  workItemMoneywiz: {
    extend: 'workItem',
    backgroundImage: `url(${imgClientMoneyWiz})`
  },
  workItemGpx: {
    extend: 'workItem',
    backgroundImage: `url(${imgClientGpx})`
  },
  workItemZiroom: {
    extend: 'workItem',
    backgroundImage: `url(${imgClientZiroom})`
  },
  workItemBearychat: {
    extend: 'workItem',
    backgroundImage: `url(${imgClientBearychat})`
  },
  workItemUmetrip: {
    extend: 'workItem',
    backgroundImage: `url(${imgClientUmetrip})`
  },
  '@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)': {
    workItemMoneywiz: {
      backgroundImage: `url(${imgClientMoneyWiz2x})`
    },
    workItemGpx: {
      backgroundImage: `url(${imgClientGpx2x})`
    },
    workItemZiroom: {
      backgroundImage: `url(${imgClientZiroom2x})`
    },
    workItemBearychat: {
      backgroundImage: `url(${imgClientBearychat2x})`
    },
    workItemUmetrip: {
      backgroundImage: `url(${imgClientUmetrip2x})`
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
          <li className={classes.workItemMoneywiz}>
            <a href="https://www.behance.net/gallery/54617719/MoneyWizs-redesign-a-finance-mac-app-redesign" target="_blank"/>
          </li>
          <li className={classes.workItemGpx}>
            <a href="https://www.behance.net/gallery/53057189/Mac-app-GPX-Binder-redesign" target="_blank"/>
          </li>
          <li className={classes.workItemZiroom}>
            <a href="https://marvelapp.com/2372igi" target="_blank"/>
          </li>
          <li className={classes.workItemBearychat}>
            <a href="https://bearychat.com" target="_blank"/>
          </li>
          <li className={classes.workItemUmetrip}>
            <a href="https://www.behance.net/gallery/37993017/UMETRIP-iOS-app-Redesign" target="_blank"/>
          </li>
        </ul>
      </div>
    );
  }
}

export default Designs;
