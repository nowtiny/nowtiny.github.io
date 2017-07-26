import * as React from 'react';
import injectSheet from 'react-jss';

const imgAvatar = require('./images/avatar.png');
const imgSocialTwitter = require('./images/social_twitter.png');
const imgSocialTwitterBW = require('./images/social_twitter_bw.png');
const imgSocialDribbble = require('./images/social_dribbble.png');
const imgSocialDribbbleBW = require('./images/social_dribbble_bw.png');
const imgSocialBehance = require('./images/social_behance.png');
const imgSocialBehanceBW = require('./images/social_behance_bw.png');
const imgSocialInstagram = require('./images/social_instagram.png');
const imgSocialInstagramBW = require('./images/social_instagram_bw.png');
const imgSocialBlog = require('./images/social_blog.png');
const imgSocialBlogBW = require('./images/social_blog_bw.png');

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
    borderRadius: '4px',
    marginRight: '20px'
  },
  name: {
    marginBottom: '8px'
  },
  socialItem: {
    float: 'left',
    marginRight: '10px',
    '& a': {
      width: '30px',
      height: '30px',
      borderRadius: '2px',
      display: 'inline-block'
    }
  },
  socialItemTwitter: {
    backgroundImage: `url(${imgSocialTwitterBW})`,
    '&:hover': {
      backgroundImage: `url(${imgSocialTwitter})`
    }
  },
  socialItemDribbble: {
    backgroundImage: `url(${imgSocialDribbbleBW})`,
    '&:hover': {
      backgroundImage: `url(${imgSocialDribbble})`
    }
  },
  socialItemBehance: {
    backgroundImage: `url(${imgSocialBehanceBW})`,
    '&:hover': {
      backgroundImage: `url(${imgSocialBehance})`
    }
  },
  socialItemInstagram: {
    backgroundImage: `url(${imgSocialInstagramBW})`,
    '&:hover': {
      backgroundImage: `url(${imgSocialInstagram})`
    }
  },
  socialItemBlog: {
    backgroundImage: `url(${imgSocialBlogBW})`,
    '&:hover': {
      backgroundImage: `url(${imgSocialBlog})`
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
            <li className={classes.socialItem}><a className={classes.socialItemTwitter} href="https://twitter.com/sheldonrrr" target="_blank"/></li>
            <li className={classes.socialItem}><a className={classes.socialItemDribbble} href="https://dribbble.com/sheldonrrr" target="_blank"/></li>
            <li className={classes.socialItem}><a className={classes.socialItemBehance} href="https://www.behance.net/sheldonr" target="_blank"/></li>
            <li className={classes.socialItem}><a className={classes.socialItemInstagram} href="https://www.instagram.com/sheldonrrr/" target="_blank"/></li>
            <li className={classes.socialItem}><a className={classes.socialItemBlog} href="http://www.sheldonrrr.com" target="_blank"/></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Tools;
