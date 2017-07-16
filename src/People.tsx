import * as React from 'react';
import injectSheet from 'react-jss';

const imgAvatar = require('./images/avatar.png');
const imgSocial = require('./images/social.png');

const styles = {
  people: {
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
    marginBottom: '20px',
    textAlign: 'justify'
  },
  details: {
  },
  avatar: {
    float: 'left',
    marginRight: '20px'
  },
  name: {
    marginBottom: '8px'
  },
  socialItem: {
    display: 'inline',
    marginRight: '10px'
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
      <div className={classes.people}>
        <div className={classes.title}>
          Man behind this page
        </div>
        <div className={classes.desc}>
          We are a small team now , there is just 1 person behind this page. Maybe he is sketchings now, or buzzing something.
        </div>
        <div className={classes.details}>
          <img className={classes.avatar} src={imgAvatar} />
          <div className={classes.name}>sheldonrrr</div>
          <ul>
            <li className={classes.socialItem}><img src={imgSocial} /></li>
            <li className={classes.socialItem}><img src={imgSocial} /></li>
            <li className={classes.socialItem}><img src={imgSocial} /></li>
            <li className={classes.socialItem}><img src={imgSocial} /></li>
            <li className={classes.socialItem}><img src={imgSocial} /></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Tools;
