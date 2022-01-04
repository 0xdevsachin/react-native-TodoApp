import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

Header.defaultProps = {
  title: 'Add Task',
};

const styles = StyleSheet.create({
  header: {
    marginTop: 0,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },
});

export default Header;
