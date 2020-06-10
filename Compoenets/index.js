import React from "react";
import Screen from "./Screen";

export const ProfileScreen=({navigation}) => <Screen navigation={navigation} name="Profile"/>;
export const Stocks=({navigation}) => <Screen navigation={navigation} name="Stocks"/>;
export const Cash=({navigation}) => <Screen navigation={navigation} name="Cash"/>;
export const Accounts=({navigation}) => <Screen navigation={navigation} name="Accounts"/>;
export const Ledger=({navigation}) => <Screen navigation={navigation} name="Ledger"/>;
export const Statistics=({navigation}) => <Screen navigation={navigation} name="Statistics"/>;
export const Signout=({navigation}) => <Screen navigation={navigation} name="Signout"/>;
