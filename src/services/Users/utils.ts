export const transformUser = ({
    id,
    firstName,
    lastName,
    image
}: {
    id: string
    firstName: string
    lastName: string
    image: string
}) => ({
    id,
    name: `${firstName} ${lastName}`,
    avatr: image,
});