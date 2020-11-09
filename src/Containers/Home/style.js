import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height : calc(100vh - 65px);
    box-sizing : border-box;
    overflow: hidden;
    position : relative;
`
export const RouteContainer = styled.div`
    flex: 1;
    height: 100%;
    overflow-y: scroll;
    background: #f4f6f8;
    padding: 24px 35px;
    box-sizing: border-box;
`