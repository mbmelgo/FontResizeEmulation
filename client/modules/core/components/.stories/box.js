import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Box from '../box.jsx';

storiesOf('core.Box', module)
  .add('default view', () => {
    return (
      <Box />
    );
  })
