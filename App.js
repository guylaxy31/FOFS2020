import React, { useState } from 'react';

// การโหลด Fonts
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

// [1]Navigation [2]Redux
import AppNavigation from './src/screens/AppNavigation'
import { Provider } from 'react-redux';
import store from './store/store'

const fetchFonts = () => {
  return Font.loadAsync({
    'pr-light': require('./assets/fonts/Prompt-Light.ttf'),
    'pr-reg': require('./assets/fonts/Prompt-Regular.ttf'),
    'pr-bold': require('./assets/fonts/Prompt-Bold.ttf'),
  })
}

export default function App() {
  const [fontLoaded, setFonLoaded] = useState(false);

  if (!fontLoaded) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => {
      setFonLoaded(true)
    }} />
  }
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  )
}
