import styled from '@emotion/styled'
import Avatar from 'react-avatar'
type Props = {
    avatar: string;
    name: string;
    onClick: () => void;
}

const ListItem = ({ name, avatar }: Props) => (
    <ItemContainer>
        <Avatar src={avatar} />
        {name}
    </ItemContainer>
)

const ItemContainer = styled.div`
display: flex;
align-items: center;
gap: 0.5rem;
cursor: pointer;
padding: 1rem;
border-radius: 0.5rem;
transition: background-color 0.25s;
&:hover{
    background-color: #141414;
}
`
export default ListItem;