import { useEffect, useState, useMemo } from 'react'
import './App.css'
import styled from '@emotion/styled'
import Avatar from 'react-avatar'
import TextField from '@mui/material/TextField';
import { createFakeUsers } from './services/createFakeUsers'
import ListItem from './components/ListeItem'
import { User } from './models/User'


const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  `

function App() {
    const [users, setUsers] = useState<User[]>([]);
    const [count, setCount] = useState(0)
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [style, setStyle] = useState("light");

    const filtered = useMemo(() => {
        if (!search) return users;

        return users.filter((user) =>
            user.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
        );
    }, [users, search]);



    const changeStyle = () => {
        console.log("you just clicked");
        if (style !== "light") setStyle("light");
        else setStyle("dark");

    };
    useEffect(() => {
        console.log("No deps array");
        if (count === 5) setLoading(false);
    });
    useEffect(() => {
        console.log("Empty deps array")
    }, []);
    useEffect(() => {
        console.log("Empty deps array", { loading })
    }, [loading]);

    useEffect(() => {
        setTimeout(() => {
            const nextUsers = createFakeUsers(10);
            setUsers(nextUsers);
            setLoading(false);
        }, 750);
    }, []);

    const createUser = () => {
        const nextUsers = createFakeUsers(1);
        // choix 1
        setUsers([...users, ...nextUsers]);

        //choix 2
        //setUsers((prev) => [...prev]);

        console.log("Create User")
    };

    const deleteUser = (id: number) => {
        const nextUsers = users.filter((user) => user.id !== id);
        setUsers(nextUsers);
    };

    if (loading) return <div>loading...</div>;

    return (
        <>
            <div>

                <Button onClick={createUser}>Create User</Button>
                <Button onClick={() => setCount((count) => count + 1)} />
                <ListContainer>
                    {users.map(({ id, name, avatar }) => (
                        <ListItem key={id} name={name} avatar={avatar} onClick={() => deleteUser(id)} />
                    ))}
                </ListContainer>
                <TextField placeholder='search' onChange={(e) => setSearch(e.target.value)} />
            </div >
            <div className={style}>
                <Avatar name="R O L" size="150" textSizeRatio={5.75} round={true} src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
            </div>
            <h1>Jsp</h1>
            <div className="card">

                console.log(createFakeUsers(10));
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>

                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            <Button onClick={changeStyle}> Im not disabeled</Button>
            <Button isDisabeled> Im disabeled</Button>
        </>
    )
}
const Button = styled.button < { isDisabeled?: boolean }>`
  border: 0;
  outline: inherit;
  padding: 0.5rem;`

export default App  