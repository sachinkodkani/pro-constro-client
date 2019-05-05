import * as React from "react";
import {
  widthPercentageToDP,
  heightPercentageToDP
} from "react-native-responsive-screen";
import { connect } from "react-redux";
import styled, { ThemeProvider } from "styled-components/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: ${props => props.theme.background.PRIMARY_BACKGROUND_COLOR};
`;

const KeyboardAwareScrollViewContainer = styled(KeyboardAwareScrollView)`
  flex: 1;
  flex-direction: column;
  background-color: ${props => props.theme.background.PRIMARY_BACKGROUND_COLOR};
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: ${heightPercentageToDP("8%")};
  background-color: ${props => props.theme.colorOption.PRIMARY_COLOR};
`;

const Title = styled.Text`
  font-size: ${props => props.theme.base.FONT_SIZE_MASSIVE};
  color: ${props => props.theme.colorOption.PRIMARY_FOREGROUND_COLOR};
  font-family: ${props => props.theme.base.PRIMARY_FONT_FAMILY};
`;

const Body = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  background-color: ${props => props.theme.background.PRIMARY_BACKGROUND_COLOR};
`;

const Segment = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  margin-top: 10;
  margin-bottom: 10;
  margin-left: 20;
  margin-right: 10;
`;

const LoginIcon = styled.Image`
  margin-left: -20;
  width: 120;
  height: 120;
`;

const LoginTitle = styled(Title)`
  color: ${props => props.theme.background.PRIMARY_TEXT_COLOR};
`;

const Description = styled.Text`
  font-size: ${props => props.theme.base.FONT_SIZE_LARGE};
  color: ${props => props.theme.background.PRIMARY_TEXT_COLOR};
  font-family: ${props => props.theme.base.PRIMARY_FONT_FAMILY};
`;

const TextInputContainer = styled.View`
  height: ${heightPercentageToDP("6%")};
  width: ${widthPercentageToDP("90%")};
  margin-top: 10;
  margin-bottom: 10;
  border-bottom-width: 2;
  border-bottom-color: #e0e0e0;
`;

const UserTextInput = styled.TextInput`
  color: ${props => props.theme.background.PRIMARY_TEXT_COLOR};
  font-size: ${props => props.theme.base.FONT_SIZE_LARGE};
  font-family: ${props => props.theme.base.PRIMARY_FONT_FAMILY};
`;

const ForgotPasswordButton = styled.TouchableOpacity`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.background.PRIMARY_BACKGROUND_COLOR};
`;

const ForgotPasswordText = styled.Text`
  font-size: ${props => props.theme.base.FONT_SIZE_LARGE};
  color: ${props => props.theme.colorOption.PRIMARY_COLOR};
  font-family: ${props => props.theme.base.PRIMARY_FONT_FAMILY};
`;

const LoginButton = styled.TouchableOpacity`
  margin-top: 10;
  height: ${heightPercentageToDP("6%")};
  width: ${widthPercentageToDP("90%")};
  flex-direction: column;
  justify-content: center;
  elevation: 2;
  border-radius: 50;
  background-color: ${props => props.theme.colorOption.PRIMARY_COLOR};
`;

const LoginButtonText = styled.Text`
  text-align: center;
  color: ${props => props.theme.colorOption.PRIMARY_FOREGROUND_COLOR};
  font-family: ${props => props.theme.base.PRIMARY_FONT_FAMILY};
  font-size: ${props => props.theme.base.FONT_SIZE_EXTRA_LARGE};
`;

const Footer = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${heightPercentageToDP("8%")};
  background-color: ${props => props.theme.background.PRIMARY_BACKGROUND_COLOR};
`;

class LoginScreen extends React.Component {
  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        <Container>
          <Header>
            <Title>Login</Title>
          </Header>

          <KeyboardAwareScrollViewContainer
            enableOnAndroid={true}
            contentContainerStyle={{ flexGrow: 1 }}
            resetScrollToCoords={{ x: 0, y: 0 }}
            scrollEnabled={true}
          >
            <Body>
              <Segment>
                <LoginIcon source={require("../../res/icons/unlock.png")} />
              </Segment>

              <Segment>
                <LoginTitle>Login</LoginTitle>
                <Description>
                  Please enter your username and password to continue
                </Description>
              </Segment>

              <Segment>
                <TextInputContainer>
                  <UserTextInput placeholder={"Username"} />
                </TextInputContainer>

                <TextInputContainer>
                  <UserTextInput
                    secureTextEntry={true}
                    placeholder={"Password"}
                  />
                </TextInputContainer>
              </Segment>

              <Segment>
                <ForgotPasswordButton>
                  <ForgotPasswordText>Forgot password ?</ForgotPasswordText>
                </ForgotPasswordButton>
              </Segment>

              <Segment>
                <LoginButton>
                  <LoginButtonText>Login</LoginButtonText>
                </LoginButton>
              </Segment>
            </Body>
          </KeyboardAwareScrollViewContainer>
          <Footer />
        </Container>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = state => ({
  theme: state.themeReducer.theme
});

export default connect(mapStateToProps)(LoginScreen);
