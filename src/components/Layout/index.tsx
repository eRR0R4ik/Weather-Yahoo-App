import * as React from 'react';
import { connect } from 'react-redux';
import { getLocation } from '../../actions';
import { Header, Loader } from '..';
import CustomizedSnackbars from '../SnackBar';

interface LayoutProps {
  getLocation?: any;
  fetching: boolean;
  error?: boolean;
  msg?: string;
}

interface LayoutState {}

class Layout extends React.Component<LayoutProps, LayoutState> {
  componentDidMount() {
    this.props.getLocation();
  }

  render() {
    const { fetching, error, msg } = this.props;

    return (
      <React.Fragment>
        {fetching ? (
          <Loader />
        ) : (
          <div className="wrapper">
            <Header />
            {this.props.children}
          </div>
        )}
        <CustomizedSnackbars message={msg} error={error} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({
  geolocation,
  weather
}: {
  geolocation: any;
  weather: any;
}) => {
  return {
    fetching: geolocation.fetching,
    error: geolocation.error || weather.error,
    msg: geolocation.msg || weather.msg
  };
};

export default connect(
  mapStateToProps,
  { getLocation }
)(Layout);
