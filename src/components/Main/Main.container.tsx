import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getWeather } from '../../actions';
import MainComponent from './Main.component';

interface MainProps {
  getWeather?: any;
  weatherData?: any;
}

interface MainState {}

class Main extends Component<MainProps, MainState> {
  componentDidMount() {
    // this.props.getWeather();
  }
  render() {
    return <MainComponent {...this.props} />;
  }
}

const mapStateToProps = ({ weather: { weatherData, fechedAt } }: any) => ({
  weatherData: weatherData,
  fechedAt
});

export default connect(
  mapStateToProps,
  { getWeather }
)(Main);
