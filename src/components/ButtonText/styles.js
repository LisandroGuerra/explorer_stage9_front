import styled from 'styled-components'


export const Container = styled.button`
    background: none;
    border: none;
    font-size: 16px;

    color: ${({ theme, isActive }) => isActive ? theme.COLORS.ROSE : theme.COLORS.GRAY_100};
`