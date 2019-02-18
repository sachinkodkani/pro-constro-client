import * as React from "react";
import {
  widthPercentageToDP,
  heightPercentageToDP
} from "react-native-responsive-screen";
import { connect } from 'react-redux';
import styled, { ThemeProvider } from "styled-components/native";

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: ${props => props.theme.background.PRIMARY_BACKGROUND_COLOR};
`;

