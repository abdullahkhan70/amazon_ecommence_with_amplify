import { AnyAction } from "@reduxjs/toolkit";
import { KeyboardTypeOptions } from "react-native";

export type userInfoTypes = {
    handleCountryPickerModal?: () => void;
    countryName?: string;
}

export type userInputField = {
    title?: string | undefined;
    // inputFiled?: (action: any) => AnyAction;
    value?: string | undefined;
    marginTops?: number | undefined;
    inputTextAreaMarginTop?: number | undefined;
    placeHolder?: string;
    inputType?: KeyboardTypeOptions;
    props?: any,
    valueChange?: string,
    defaultValue?: any;
    errorText?: string;
    touched?: Boolean;
}

export type userStateZipCode = {
    stateTitle: string;
    zipCodeTitle: string;
    props: any,
}

export type userMarkAsDefault = {
    checkBoxChangeValue: (value: Boolean) => AnyAction;
    title: string;
    checkBoxValue: Boolean;
}