import * as React from 'react';
import injectSheet from 'react-jss';

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
        fuck
      </div>
    );
  }
}

export default App;
