import React, { Component } from 'react';
import Footer from '../Footer';
import Header from '../Header';

interface IContainerState {
  showFooter: boolean;
}

export default class Container extends Component<{}, IContainerState> {
  footerText = "I'm the Footer!";
  timeOutId: NodeJS.Timeout | undefined = undefined;

  constructor(props: any) {
    super(props);

    this.state = {
      showFooter: false,
    };

    this.timeOutId = setTimeout(() => {
      //console.log('updating footerText');

      this.footerText = 'Hello!! I have just changed my message';
    }, 15000);

    //this.toggleFooter = this.toggleFooter.bind(this);
  }

  //   toggleFooter() {
  //     this.setState((prevState) => ({ showFooter: !prevState.showFooter }));
  //   }

  toggleFooter = () => {
    this.setState((prevState) => ({ showFooter: !prevState.showFooter }));
  };

  componentWillUnmount() {
    clearTimeout(this.timeOutId);
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
