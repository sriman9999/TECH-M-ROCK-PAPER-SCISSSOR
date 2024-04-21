import React from 'react';
import { Appbar } from 'react-native-paper';
import { SafeAreaView } from 'react-native';

const Header = ({ title }) => {
  return (
    <SafeAreaView>
      <Appbar.Header style={{ backgroundColor: '#acaeb0' }}>
        <Appbar.Content
          title ={"Rock Paper Scissor"}
          style={{ alignItems: 'center', transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
        />
      </Appbar.Header>
    </SafeAreaView>
  );
};

export default Header;
