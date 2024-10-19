// nativewind.d.ts
import "react-native";

declare module "react-native" {
  interface TextProps {
    className?: string;
  }

  interface ViewProps {
    className?: string;
  }

  // Add any other components you need to extend
}
