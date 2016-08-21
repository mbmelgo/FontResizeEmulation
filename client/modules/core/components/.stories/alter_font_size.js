import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import AlterFontSize from '../alter_font_size.jsx';

storiesOf('core.AlterFontSize', module)
  .add('default view', () => {
    return (
      <AlterFontSize />
    );
  })
