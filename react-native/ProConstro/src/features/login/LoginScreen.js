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

const HeaderText = styled.Text`
  font-size: ${props => props.theme.base.FONT_SIZE_MASSIVE};
  color: ${props => props.theme.colorOption.PRIMARY_FOREGROUND_COLOR};
  font-family: ${props => props.theme.base.PRIMARY_FONT_FAMILY};
`;

const Body = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.background.PRIMARY_BACKGROUND_COLOR};
`;

const Footer = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${heightPercentageToDP('8%')};
  background-color: ${props => props.theme.background.PRIMARY_BACKGROUND_COLOR};
`;