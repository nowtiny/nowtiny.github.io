import * as React from 'react';
import injectSheet from 'react-jss';

/* const imgWork = require('./images/work.png');*/
const imgClientMoneyWiz = require('./images/client_moneywiz.png');
const imgClientGpx = require('./images/client_gpx.png');
const imgClientZiroom = require('./images/client_ziroom.png');
const imgClientBearychat = require('./images/client_bearychat.png');
const imgClientUmetrip = require('./images/client_umetrip.png');

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
    '& a': {
      width: '240px',
      height: '120px',
      display: 'block'
    },
    '&:hover': {
      backgroundColor: '#323b45',
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
            <div className={classes.workItemType}>client</div>
            <a href="https://www.behance.net/gallery/54617719/MoneyWizs-redesign-a-finance-mac-app-redesign" target="_blank"/>
          </li>
          <li className={classes.workItemGpx}>
            <div className={classes.workItemType}>proposal</div>
            <a href="https://www.behance.net/gallery/53057189/Mac-app-GPX-Binder-redesign" target="_blank"/>
          </li>
          <li className={classes.workItemZiroom}>
            <div className={classes.workItemType}>proposal</div>
            <a href="https://marvelapp.com/2372igi" target="_blank"/>
          </li>
          <li className={classes.workItemBearychat}>
            <div className={classes.workItemType}>designed</div>
            <a href="https://bearychat.com" target="_blank"/>
          </li>
          <li className={classes.workItemUmetrip}>
            <div className={classes.workItemType}>proposal</div>
            <a href="https://www.behance.net/gallery/37993017/UMETRIP-iOS-app-Redesign" target="_blank"/>
          </li>
        </ul>
      </div>
    );
  }
}

export default Designs;
