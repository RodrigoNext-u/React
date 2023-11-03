import React, { useState, useEffect } from 'react';
import { Post } from './models/Post';
import styled from '@emotion/styled'
import { createFakePost } from './services/createFakePoste';
import ListPost from './components/ListPost'

function App() {
    const [posts, setpots] = useState<Post[]>([]);
    const createPost = () => {
        const nextPost = createFakePost(1);
        // choix 1
        setpots([...posts, ...nextPost]);
        console.log("New Posts chala")

        //choix 2
        //setUsers((prev) => [...prev]);

    };
    const deletePost = (id: number) => {
        const nextPost = posts.filter((post) => post.id !== id);
        setpots(nextPost);
    };

    return (
        <div className="App">
            <Button onClick={createPost}>Create Post</Button>
            <h1>Liste de Posts</h1>
            <ListContainer>
                {posts.map(({ id, titre, photo, contenue }) => (
                    <ListPost key={id} titre={titre} photo={photo} contenue={contenue} onClick={() => deletePost(id)} />
                ))}
            </ListContainer>
            {/* <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h2>{post.titre}</h2>
                        <p>{post.photo}</p>
                        <p>{post.contenue}</p>
                    </li>
                ))}
            </ul> */}
        </div>
    );
}
const Button = styled.button < { isDisabeled?: boolean }>`
  border: 0;
  outline: inherit;
  padding: 0.5rem;`
const ListContainer = styled.div`
display: flex;
flex-direction: column;
gap: 0.5rem;
`

export default App;
