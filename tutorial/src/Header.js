import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { headerText, header } = styles;
  return (
    <View style={header}>
      <Text style={headerText}>{props.title}</Text>
    </View>
  );
};

const styles = {
  header: {
    backgroundColor: '#E8EFF0',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    elevation: 2,
    position: 'relative'
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600'
  }
};

export default Header;