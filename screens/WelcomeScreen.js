import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: 'Welcome to Jobs Hanto', color: '#03A9F4' },
  { text: 'Use this to find a job', color: '#009688' },
  { text: 'Set your location, then swipe away', color: '#03A9F4' },
];

class WelcomeScreen extends Component {
  onSlidesComplete = () => {
    this.props.navigation.navigate('auth');
  }

  render() {
    return (
      <Slides
        onComplete={this.onSlidesComplete}
        data={SLIDE_DATA}
      />
    );
  }
}

export default WelcomeScreen;
