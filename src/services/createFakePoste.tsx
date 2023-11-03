import { faker } from '@faker-js/faker';
import { Post } from '../models/Post';

export const createFakePost = (count: number): Post[] =>
    Array.from(Array(count).keys()).map((id) => ({
        id: new Date().getTime() + id,
        photo: faker.image.avatarLegacy(),
        titre: faker.company.name(),
        contenue: faker.lorem.paragraph(),
    }));