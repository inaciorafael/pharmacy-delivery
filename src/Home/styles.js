import styled from 'styled-components/native';

export const Container = styled.View`
    height: 677px;
    background: #fff;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
`;

export const Header = styled.View`
    height: 85px;
    flex-direction: row;
`;

export const ButtonOp = styled.TouchableOpacity`
    background: ${props => props.colorBackground};
    width: 195px;
    height: 40px;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    color: ${props => props.colorTitle};
    font-size: 14px;
    font-weight: bold;
`;

export const TitleCategory = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #21293A;
`;