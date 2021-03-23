import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 10vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

export const OptionBall = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 120px;
    height: 120px;
    background: url('${props => props.bgImage}');
    background-position: center;
    background-size: 90%;
    background-repeat: no-repeat;
    background-color: ${props => props.bgColor};
    border: 3px solid white;
    border-radius: 50%;
    cursor: pointer;
    outline: none;
    transition: transform .5s;
    padding: 25px;

    &:hover {
        transform: rotate(-40deg);
    }
`;