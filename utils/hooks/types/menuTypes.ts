import { GestureResponderEvent } from "react-native";

export type menuType = {
    color: string;
    size: number;
    onPress: (event: GestureResponderEvent) => void;
    text: string;
    iconName: string;
    marginTopStyle?: number;
}