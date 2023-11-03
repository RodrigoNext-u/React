import { useEffect, useState } from "react";
import { User } from "../models/User";
import { fetchUsers } from "../services/pokemon/api";
import { transformUser } from "../services/pokemon/utils";

export const useUsers = () => {
    const [users, setUser] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleFetchUsers = async () => {
            const result = await fetchUsers();
            const transformed = result.users.map(transformUser);
            setUser(transformed);
            setLoading(false);
        }

        handleFetchUsers();
    }, [])

    const deleteUser = (id: number) => {
        const nextUsers = users.filter((user) => user.id !== id)
        setUsers(nextUsers)
    }

    return { users, loading, setUser, deleteUser }
}