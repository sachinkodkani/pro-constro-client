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

const BodySegmentVertical = styled.View`
  flex-direction: row;
  justify-content : center;
`;

const BodySegmentHorizontal = styled.View`
  flex-direction : row;
  justify-content : space-between;
`;

const UserSelectionButton = styled.TouchableOpacity`
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  margin-top: 10;
  margin-bottom: 10;
  margin-right: 10;
  margin-left: 10;
  elevation: 3;
  border-radius: 20;
  border-color: ${props => props.theme.colorOption.PRIMARY_COLOR};
  height: ${heightPercentageToDP('20%')};
  width: ${widthPercentageToDP('45')};
`;

const UserSelectionButtonSegment = styled.View`  
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const UserIcon = styled.Image`
  margin-top:3;
  width : 120;
  height : 120;
`;

const UserIconText = styled.Text`
  font-size: ${props => props.theme.base.FONT_SIZE_EXTRA_LARGE};
  color: ${props => props.theme.background.PRIMARY_TEXT_COLOR};
  font-family: ${props => props.theme.base.PRIMARY_FONT_FAMILY};
  font-weight: ${props => props.theme.base.FONT_WEIGHT_MEDIUM};
`;

const Footer = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${heightPercentageToDP('8%')};
  background-color: ${props => props.theme.background.PRIMARY_BACKGROUND_COLOR};
`;

const FooterText = styled.Text`
  margin-bottom: 5;
  font-size: ${props => props.theme.base.FONT_SIZE_LARGE};
  color: ${props => props.theme.background.PRIMARY_TEXT_COLOR};
  font-family: ${props => props.theme.base.PRIMARY_FONT_FAMILY};
`;

const RegisterButton = styled.TouchableOpacity`
  margin-bottom: 40;
  height:${heightPercentageToDP('6%')};
  width:${widthPercentageToDP('90%')};
  flex-direction: column;
  justify-content: center;
  elevation: 2;
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

            <BodySegmentHorizontal>
              <UserSelectionButton>
                <UserSelectionButtonSegment>
                  <UserIcon source={require('../../res/icons/admin.png')} />
                </UserSelectionButtonSegment>
                <UserSelectionButtonSegment>
                  <UserIconText>Admin</UserIconText>
                </UserSelectionButtonSegment>
              </UserSelectionButton>

              <UserSelectionButton>
                <UserSelectionButtonSegment>
                  <UserIcon source={require('../../res/icons/employee.png')} />
                </UserSelectionButtonSegment>
                <UserSelectionButtonSegment>
                  <UserIconText>Employee</UserIconText>
                </UserSelectionButtonSegment>
              </UserSelectionButton>
            </BodySegmentHorizontal>

            <BodySegmentVertical>
              <UserSelectionButton>
                <UserSelectionButtonSegment>
                  <UserIcon source={require('../../res/icons/client.png')} />
                </UserSelectionButtonSegment>
                <UserSelectionButtonSegment>
                  <UserIconText>Client</UserIconText>
                </UserSelectionButtonSegment>
              </UserSelectionButton>
            </BodySegmentVertical>

          </Body>

          <Footer>

            <FooterText>Not Registered ? </FooterText>

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



