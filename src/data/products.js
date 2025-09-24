const img = (file) => `${import.meta.env.BASE_URL}img/${file}`

export default [
    {
        id: 1,
        name: 'Almohada Memory',
        price: 19990,
        offerPrice: 15990,
        description: 'Almohada Memory. Ideal para tu hogar: cómodo, práctico y de alta durabilidad.',
        image: img('almohada.jpg')
    },
    {
        id: 2,
        name: 'Lámpara LED',
        price: 14990,
        offerPrice: 11990,
        description: 'Lámpara LED. Ideal para tu hogar: cómodo, práctico y de alta durabilidad.',
        image: img('lampara.jpg')
    },
    {
        id: 3,
        name: 'Teclado Mecánico',
        price: 39990,
        offerPrice: 31990,
        description: 'Teclado Mecánico. Tecnología confiable con excelente relación precio/calidad.',
        image: img('teclado.jpg')
    },
    {
        id: 4,
        name: 'Mouse Gamer',
        price: 24990,
        offerPrice: 19990,
        description: 'Mouse Gamer. Tecnología confiable con excelente relación precio/calidad.',
        image: img('mouse.jpg')
    },
    {
        id: 5,
        name: 'Audífonos Bluetooth',
        price: 29990,
        offerPrice: 23990,
        description: 'Audífonos Bluetooth. Tecnología confiable con excelente relación precio/calidad.',
        image: img('audifonos.jpg')
    },
    {
        id: 6,
        name: 'Taza Diseño',
        price: 5990,
        offerPrice: 4790,
        description: 'Taza Diseño. Ideal para tu hogar: cómodo, práctico y de alta durabilidad.',
        image: img('taza.jpg')
    }
]