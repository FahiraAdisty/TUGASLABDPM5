import React from "react";
import { View } from 'react-native';
import ParentComponent from "./src/components/ParentComponent";
import ExampleComponent from "./src/screen/ExampleComponent";

const App = () => {
    return (
      <View style={{ flex: 1 }}>
          <ParentComponent />
          <ExampleComponent />
      </View>
    );
};

export default App;