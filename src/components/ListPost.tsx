import styled from '@emotion/styled'
import Avatar from 'react-avatar'

type Props = {
    titre: string;
    photo: string;
    contenue: string;
    onClick: () => void;
}

const ListPost = ({ titre, photo, contenue }: Props) => (
    <ItemContainer>
        <Avatar src={photo} />
        {titre}
        {contenue}
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
export default ListPost;