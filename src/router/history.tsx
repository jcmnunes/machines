import React from 'react';
import { createBrowserHistory } from 'history';
import ReactDOM from 'react-dom';
import { Dialog } from '@binarycapsule/ui-capsules';

const UserConfirmation = (message: string, callback: (arg: boolean) => void) => {
  const container = document.createElement('div');
  container.setAttribute('custom-confirmation-navigation', '');
  document.body.appendChild(container);

  const closeModal = (callbackState: boolean) => {
    ReactDOM.unmountComponentAtNode(container);
    callback(callbackState);
  };

  ReactDOM.render(
    <Dialog
      isOpen
      onRequestClose={() => closeModal(true)}
      contentLabel="Example dialog"
      actions={[
        {
          name: 'Cancel',
          appearance: 'secondary',
          action: () => closeModal(false),
        },
        {
          name: 'Navigate away',
          appearance: 'error',
          action: () => closeModal(true),
        },
      ]}
      title="Navigate away?"
      message={message}
    />,
    container,
  );
};

export const history = createBrowserHistory({
  getUserConfirmation: (message, callback) => {
    // this is the default behavior
    UserConfirmation(message, callback);
  },
});
