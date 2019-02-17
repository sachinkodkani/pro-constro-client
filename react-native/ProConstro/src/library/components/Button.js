import React from 'react';
import styled from 'styled-components';

const Button = ({
    backgroundColor,
    borderColor,
    borderRadius,
    padding,
    text,
    textColor,
    fontSize,
    width,
    height
}) => (
        <ButtonWrapper
            backgroundColor={backgroundColor}
            borderColor={borderColor}
            borderRadius={borderRadius}
            padding={padding}
            width={width}
            height={height}
        >
            <ButtonText textColor={textColor} fontSize={fontSize}>
                {text}
            </ButtonText>
        </ButtonWrapper>
    );


const ButtonWrapper = styled.TouchableOpacity`
    width: ${props => props.width};
    height: ${props => props.height};
    padding: ${props => props.padding};
    border-radius: ${props => props.borderRadius};
    background-color: ${props => props.backgroundColor};
    borderColor: ${props => props.borderColor};
`;

const ButtonText = styled.Text`
    color: ${props => props.textColor};
    font-size: ${props => props.fontSize};
    text-align: center;
`;

export default Button;