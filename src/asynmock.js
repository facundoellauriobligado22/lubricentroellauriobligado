const products = [
    {
        id: '1',
        tittle: 'Aceite de motor',
        description: 'Elaion F50 5W30 Lubricante especialmente formulado para cubrir la más alta exigencia de la industria automotriz. Concebido para motores que posean sistemas de post-tratamiento de gases de escape de última tecnología, tales como los DPF (Diesel Particulate Filter) para los automóviles Diesel y los TWC (Three-Way Catalyst) para los motores nafteros.',
        price: 5000,
        category: 'aceite',
        pictureUrl: 'https://lubricentrocarlitos.com.ar/wp-content/uploads/2017/10/elaion-f50.jpg',
        stock: 4
    },
    {
        id: '2',
        tittle: 'Aceite de motor',
        description: 'Elaion F30 Lubricante especialmente formulado para cubrir la más alta exigencia de la industria automotriz. Concebido para motores que posean sistemas de post-tratamiento de gases de escape de última tecnología, tales como los DPF (Diesel Particulate Filter) para los automóviles Diesel y los TWC (Three-Way Catalyst) para los motores nafteros.',
        price: 3000,
        category: 'aceite',
        pictureUrl: 'https://lubricentrocarlitos.com.ar/wp-content/uploads/2017/08/elaion-f30.jpg',
        stock: 10
    },
    {
        id: '3',
        tittle: 'Aceite de motor',
        description: 'Elaion F10 15W-40 Lubricante especialmente formulado para cubrir la más alta exigencia de la industria automotriz. Concebido para motores que posean sistemas de post-tratamiento de gases de escape de última tecnología, tales como los DPF (Diesel Particulate Filter) para los automóviles Diesel y los TWC (Three-Way Catalyst) para los motores nafteros.',
        price: 7000,
        category: 'aceite',
        pictureUrl: 'https://lubritodo.com/wp-content/uploads/2018/03/ELAION-F10-15W40.jpg',
        stock: 15
    },
    {
        id: '4',
        tittle: 'Aceite de motor',
        description: 'Elaion moto 4T Lubricante especialmente formulado para cubrir la más alta exigencia de la industria automotriz. Concebido para motores que posean sistemas de post-tratamiento de gases de escape de última tecnología, tales como los DPF (Diesel Particulate Filter) para los automóviles Diesel y los TWC (Three-Way Catalyst) para los motores nafteros.',
        price: 4500,
        category: 'aceite',
        pictureUrl: 'http://d2r9epyceweg5n.cloudfront.net/stores/987/204/products/moto-4t-20w50-1-litro1-014b21e7d38cbdf92415983788349473-640-0.jpg',
        stock: 3
    },
    {
        id: '5',
        tittle: 'Aceite de motor',
        description: 'ELAION F50 E Lubricante especialmente formulado para cubrir la más alta exigencia de la industria automotriz. Concebido para motores que posean sistemas de post-tratamiento de gases de escape de última tecnología, tales como los DPF (Diesel Particulate Filter) para los automóviles Diesel y los TWC (Three-Way Catalyst) para los motores nafteros.',
        price: 9000,
        category: 'aceite',
        pictureUrl: 'https://www.ypfagro.com.ar/img/productos/5df792550ecc07c84328d869d.jpg',
        stock: 25
    },
    {
        id: '6',
        tittle: 'Aceite de motor',
        description: 'Elaion Competición Lubricante especialmente formulado para cubrir la más alta exigencia de la industria automotriz. Concebido para motores que posean sistemas de post-tratamiento de gases de escape de última tecnología, tales como los DPF (Diesel Particulate Filter) para los automóviles Diesel y los TWC (Three-Way Catalyst) para los motores nafteros.',
        price: 15000,
        category: 'aceite',
        pictureUrl: 'https://pldistribucion.com.ar/web/wp-content/uploads/elaion12.jpg',
        stock: 17
    },
    {
        id: '7',
        tittle: 'Aceite de motor',
        description: 'Total Quartz Lubricante especialmente formulado para cubrir la más alta exigencia de la industria automotriz. Concebido para motores que posean sistemas de post-tratamiento de gases de escape de última tecnología, tales como los DPF (Diesel Particulate Filter) para los automóviles Diesel y los TWC (Three-Way Catalyst) para los motores nafteros.',
        price: 12000,
        category: 'aceite',
        pictureUrl: 'https://media.pkwteile.de/360_photos/13626194/h-preview.jpg',
        stock: 17
    },
    {
        id: '8',
        tittle: 'Filtro',
        description: 'Filtro Aceite Honda Cbr 1000 600 R1 R6 Mahle Moto',
        price: 894,
        category: 'Filtro',
        pictureUrl: 'https://cf.shopee.com.ar/file/a9e8decb2d504aaefdda564918842e23',
        stock: 500
    },
    {
        id: '9',
        tittle: 'Filtro',
        description: 'Filtro Aceite Yamaha Grizzly 660 Yfm 350 Mahle 999 Atv',
        price: 1500,
        category: 'Filtro',
        pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_803608-MLA42953790538_072020-O.jpg',
        stock: 43
    },
    {
        id: '10',
        tittle: 'Filtro',
        description: 'Filtro Aceite Mahle Bmw F 650 700 800 R1200 1250 Gs S1000rr',
        price: 553,
        category: 'Filtro',
        pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_985843-MLA43309033476_082020-O.webp',
        stock: 33
    },

    {
        id: '11',
        tittle: 'Cambio de aceite',
        description: 'Un cambio de aceite es cuando se reemplaza el aceite de su auto. Un cambio de aceite es simplemente el proceso de retirar el aceite usado y el filtro de aceite y de colocar aceite nuevo (y un nuevo filtro) en el auto.',
        price: 'Sin cargo con la compra de aceite y filtros',
        category: 'Servicios',
        pictureUrl: 'https://www.motociclismo.es/uploads/s1/96/61/39/5/cambio-aceite-5.jpeg',
        stock: '-'
    },

]

export const getProducts = (categoryId) => {
    return new Promise (resolve =>{
        setTimeout(() => {
            resolve(categoryId ? products.filter(prod => prod.category === categoryId) : products)
        }, 200);
    })
}

export const getProductsById = (id) => {
    return new Promise (resolve =>{
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 200);
    })
}
