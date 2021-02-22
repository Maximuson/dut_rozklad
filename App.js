import React, { useState } from "react";

import AppLoading from "expo-app-loading";
import { bootstrap } from "./src/bootstrap";

import { Provider } from "react-redux";
import store from "./src/store";

import { AppNavigation } from "./src/navigation/AppNavigation";

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <Provider store={store}>
        <AppLoading
          startAsync={bootstrap}
          onFinish={() => setIsReady(true)}
          onError={(err) => {
            console.log(err);
          }}
        />
      </Provider>
    );
  }

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}
