import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, ViewPropTypes } from 'react-native';
import { Font } from 'expo';
import fontAwsomeRegular from '../../assets/fonts/fa-regular-400.ttf';
import fontAwsomeSolid from '../../assets/fonts/fa-solid-900.ttf';

class CircleButton extends React.Component {
  state = {
    fontLoaded: false,
  };

  async componentWillMount() {
    await Font.loadAsync({
      'fa-regular': fontAwsomeRegular,
      'fa-solid': fontAwsomeSolid,
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    const { style, color } = this.props;

    console.log('style:', this.props.style);

    let bgColor = '#e31676';
    let textColor = '#fff';

    if (color === 'white') {
      bgColor = '#fff';
      textColor = '#e31676';
    }

    return (
      <View style={[styles.CircleButton, style, { backgroundColor: bgColor }]}>
        {
          this.state.fontLoaded ? (
            <Text style={[styles.CircleButtonTitle, { color: textColor }]}>
              {this.props.children}
            </Text>
          ) : null
        }
      </View>
    );
  }
}

CircleButton.propTypes = {
  children: PropTypes.string.isRequired,
  style: ViewPropTypes.style,
  color: PropTypes.string,
};

CircleButton.defaultProps = {
  style: {},
  color: '',
};

const styles = StyleSheet.create({
  CircleButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    backgroundColor: '#e31676',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  CircleButtonTitle: {
    fontFamily: 'fa-solid',
    fontSize: 24,
    lineHeight: 24,
    color: '#fff',
  },
});

export default CircleButton;
