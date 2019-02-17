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

const Header = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: ${heightPercentageToDP('8%')};
  background-color: ${props => props.theme.colorOption.PRIMARY_COLOR};
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

const UserSelectionButton = styled.TouchableOpacity`
  margin-top: 5;
  margin-bottom: 5;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  elevation: 3;
  border-radius: 20;
  border-color: ${props => props.theme.colorOption.PRIMARY_COLOR};
  height: ${heightPercentageToDP('25%')};
  width: ${widthPercentageToDP('60%')};
`;

const UserSelectionButtonSegment = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const UserIcon = styled.Image`
  margin-top: 5;
  width : ${widthPercentageToDP('35%')};
  height : ${heightPercentageToDP('20%')};
`;

const UserIconText = styled.Text`
  font-size: ${props => props.theme.base.FONT_SIZE_EXTRA_LARGE};
  color: ${props => props.theme.background.PRIMARY_TEXT_COLOR};
  font-family: ${props => props.theme.base.PRIMARY_FONT_FAMILY};
  font-weight: ${props => props.theme.base.FONT_WEIGHT_MEDIUM};
  text-align: left;
`;

const Footer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: ${heightPercentageToDP('8%')};
  background-color: ${props => props.theme.background.PRIMARY_BACKGROUND_COLOR};
`;

const RegisterButton = styled.TouchableOpacity`
  height:${heightPercentageToDP('6%')};
  width: ${widthPercentageToDP('60%')};
  margin-bottom: 20;
  flex-direction: column;
  justify-content: center;
  elevation: 3;
  border-radius: 50;
  background-color:${props => props.theme.colorOption.PRIMARY_COLOR};
`;

const RegisterButtonText = styled.Text`
  text-align: center;
  color: ${props => props.theme.colorOption.PRIMARY_FOREGROUND_COLOR};
  font-family: ${props => props.theme.base.PRIMARY_FONT_FAMILY};
  font-size: ${props => props.theme.base.FONT_SIZE_EXTRA_LARGE};
`;

class LoginTypeSelectionScreen extends React.Component {
  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        <Container>

          <Header>
            <HeaderText>Choose Your Role !</HeaderText>
          </Header>

          <Body>

            <UserSelectionButton>
              <UserSelectionButtonSegment>
                <UserIcon source={require('../../res/images/admin.png')} />
              </UserSelectionButtonSegment>
              <UserSelectionButtonSegment>
                <UserIconText>Admin</UserIconText>
              </UserSelectionButtonSegment>
            </UserSelectionButton>

            <UserSelectionButton>
              <UserSelectionButtonSegment>
                <UserIcon source={require('../../res/images/employee.png')} />
              </UserSelectionButtonSegment>
              <UserSelectionButtonSegment>
                <UserIconText>Employee</UserIconText>
              </UserSelectionButtonSegment>
            </UserSelectionButton>

            <UserSelectionButton>
              <UserSelectionButtonSegment>
                <UserIcon source={require('../../res/images/client.png')} resizeMode="contain" />
              </UserSelectionButtonSegment>
              <UserSelectionButtonSegment>
                <UserIconText>Client</UserIconText>
              </UserSelectionButtonSegment>
            </UserSelectionButton>

          </Body>

          <Footer>

            <RegisterButton>
              <RegisterButtonText>Register</RegisterButtonText>
            </RegisterButton>

          </Footer>
        </Container>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = state => ({
  theme: state.themeReducer.theme
});

export default connect(mapStateToProps)(LoginTypeSelectionScreen);



