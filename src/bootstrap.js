import * as Font from "expo-font";

export async function bootstrap() {
  await Font.loadAsync({
    "roboto-regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "roboto-black": require("../assets/fonts/Roboto-Black.ttf"),
    "roboto-thin": require("../assets/fonts/Roboto-Thin.ttf"),
  });
}
