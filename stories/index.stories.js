import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';


import ActivityIcon from "../src/components/ActivityIcon";

import { Stations } from "../src/containers/Stations";



// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Activity icon', module)
  .add('true state', () => <ActivityIcon active={true} />)
  .add('false state', () => <ActivityIcon active={false} />)

const stationsDefaultProps = {
  fetchStations: () => null,
  stations: {
    error: null,
    records: []
  },
  children: <div>Children</div>
}

const stationsErrorProps = {
  ...stationsDefaultProps,
  stations: {
    ...stationsDefaultProps.stations,
    error: "Error"
  }
}

storiesOf('Stations', module)
  .add('show stations', () => <Stations {...stationsDefaultProps} />)
  .add('show error', () => <Stations {...stationsErrorProps} />)

storiesOf('Card', module)
