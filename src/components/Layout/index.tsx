import * as React from 'react';
import { connect } from 'react-redux';
import { getLocation } from '../../actions';
import { Header, Loader } from '..';

interface LayoutProps {
  getLocation?: any;
  userData?: any;
  fetching: boolean;
}

interface LayoutState {}

class Layout extends React.Component<LayoutProps, LayoutState> {
  componentDidMount() {
    // this.props.getLocation();
  }

  render() {
    const { fetching } = this.props;

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
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ geolocation }: { geolocation: any }) => {
  return {
    fetching: geolocation.fetching,
    userData: geolocation.userGeolocation
  };
};

export default connect(
  mapStateToProps,
  { getLocation }
)(Layout);
