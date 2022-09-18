import React, { Component } from 'react';
import Footer, { FooterFC } from '../Footer';
import Header, { HeaderFC } from '../Header';

interface IContainerState {
  showFooter: boolean;
}

export const ContainerFC: React.FC = () => {
  let footerText = "I'm the Footer!";
  let timeOutID: NodeJS.Timeout;

  const [state, setState] = React.useState<IContainerState>({
    showFooter: false,
  });

  React.useEffect(() => {
    timeOutID = setTimeout(() => {
      //console.log('trying to update footerText');

      footerText = 'Hello!! I have just changed the my message';
    }, 7000);

    return () => {
      clearTimeout(timeOutID);
    };
  }, []);

  const toggleFooter = () => {
    setState((prevState) => ({ showFooter: !prevState?.showFooter }));
  };

  return (
    <div>
      <HeaderFC toggleFooter={toggleFooter}></HeaderFC>
      {state.showFooter && <FooterFC footerText={footerText}></FooterFC>}
    </div>
  );
};

export default class Container extends Component<{}, IContainerState> {
  footerText = "I'm the Footer!";
  timeOutID: NodeJS.Timeout | undefined = undefined;

  constructor(props: any) {
    super(props);

    this.state = {
      showFooter: false,
    };

    this.timeOutID = setTimeout(() => {
      //console.log('updating footerText');

      this.footerText = 'Hello!! I have just changed the my message';
    }, 7000);

    //this.toggleFooter = this.toggleFooter.bind(this);
  }

  //   toggleFooter() {
  //     this.setState((prevState) => ({ showFooter: !prevState.showFooter }));
  //   }

  toggleFooter = () => {
    this.setState((prevState) => ({ showFooter: !prevState.showFooter }));
  };

  componentWillUnmount() {
    clearTimeout(this.timeOutID);
  }

  render() {
    return (
      <div>
        <Header toggleFooter={this.toggleFooter}></Header>
        {this.state.showFooter && (
          <Footer footerText={this.footerText}></Footer>
        )}
      </div>
    );
  }
}
