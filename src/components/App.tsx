import { Outlet } from "react-router-dom";
import styled from "styled-components";

const App = () => (
    <div>
        <HeaderContainer>
            <a href={'/post'}>Posts</a>
            <a href={'/User'}>Users</a>
        </HeaderContainer>
        <Outlet />
    </div>
);

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem;
`;

export default App;