import * as React from 'react';
import injectSheet from 'react-jss';

import jss from 'jss';
import nested from 'jss-nested';
import camelCase from 'jss-camel-case';
import compose from 'jss-compose';

jss.use(nested());
jss.use(camelCase());
jss.use(compose());

import Header from './Header';
import Intro from './Intro';
import Designs from './Designs';

const latoRegular = require('./fonts/Lato-Regular.woff');
const latoBold = require('./fonts/Lato-Bold.woff');

const styles = {
  '@font-face': [{
    fontFamily: 'Lato',
    src: `url(${latoRegular})`
  }, {
    fontFamily: 'Lato Bold',
    src: `url(${latoBold})`
  }],
  app: {
    'font-family': '"Lato", sans-serif',
    'font-size': '18px',
    'padding': '50px 80px'
  }
};

export interface Props {
  // TODO: fix to works with strictNullChecks
  classes?: { [name: string]: string; };
}

@injectSheet(styles)
class App extends React.Component<Props, {}> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.app}>
        <Header />
        <Intro />
        <Designs />
      </div>
    );
  }
}

export default App;
