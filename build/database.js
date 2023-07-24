"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users = [
    {
        id: 'u001',
        name: 'Fulano',
        email: 'fulano@email.com',
        password: 'fulano123',
        created_at: new Date().toISOString()
    },
    {
        id: 'u002',
        name: 'Beltrana',
        email: 'beltrana@email.com',
        password: 'beltrana00',
        created_at: new Date().toISOString()
    }
];
const products = [
    {
        id: 'prod001',
        name: 'Mouse Gamer',
        price: 250,
        description: 'Melhor mouse do mercado',
        imageUrl: 'https://picsum.photos/seed/Mouse%20gamer/400'
    },
    {
        id: 'prod002',
        name: 'Monitor',
        price: 900,
        description: 'Monitor LED Full HD 24 polegadas',
        imageUrl: 'https://picsum.photos/seed/Monitor/400'
    }
];
exports.default = { users, products };
