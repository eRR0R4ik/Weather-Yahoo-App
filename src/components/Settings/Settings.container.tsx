import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLocation, changeUnitFormat } from '../../actions';
import SettingsComponent from './Settings.component';

interface SettingsProps {
  unitFormat?: string;
  changeUnitFormat?: any;
  getLocation?: any;
  coords?: any;
}

interface SettingsState {}

class Settings extends Component<SettingsProps, SettingsState> {
  render() {
    return <SettingsComponent {...this.props} />;
  }
}

const mapStateToProps = ({
  geolocation: { userGeolocation },
  weather: { unitFormat }
}: any) => ({
  coords: userGeolocation,
  unitFormat
});

export default connect(
  mapStateToProps,
  { changeUnitFormat, getLocation }
)(Settings);
