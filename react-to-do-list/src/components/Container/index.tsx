import * as React from 'react';
import { FooterFC } from '../Footer';
import { HeaderFC } from '../Header';
import { ToDoList } from '../ToDoList';

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

      footerText = 'Hello!! I have just changed my message';
    }, 10000);

    return () => {
      clearTimeout(timeOutID);
    };
  }, []);

  const toggleFooter = () => {
    setState((prevState) => ({ showFooter: !prevState?.showFooter }));
  };

  return (
    <div>
      <HeaderFC toggleFooter={toggleFooter} />
      <ToDoList />
      {state.showFooter && <FooterFC footerText={footerText} />}
    </div>
  );
};
