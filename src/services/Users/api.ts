export const fetchUsers = async () => {
    const data = await fetch("https://dummyjson.com/users");
    const json = await data.json();
    return json;
};


// methode 2
export const fetchUsers2 = fetch("https://dummyjson.com/users").then((data) => data.json(),);