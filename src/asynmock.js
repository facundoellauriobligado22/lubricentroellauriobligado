const products = [
    {
        id: 1,
        tittle: 'Aceite de motor',
        description: 'Elaion F50 5W30',
        price: 5000,
        pictureUrl: 'https://lubricentrocarlitos.com.ar/wp-content/uploads/2017/10/elaion-f50.jpg'
    },
    {
        id: 2,
        tittle: 'Aceite de motor',
        description: 'Elaion F30',
        price: 3000,
        pictureUrl: 'https://lubricentrocarlitos.com.ar/wp-content/uploads/2017/08/elaion-f30.jpg'
    },
    {
        id: 3,
        tittle: 'Aceite de motor',
        description: 'Elaion F10 15W-40',
        price: 7000,
        pictureUrl: 'https://lubritodo.com/wp-content/uploads/2018/03/ELAION-F10-15W40.jpg'
    },
    {
        id: 4,
        tittle: 'Aceite de motor',
        description: 'Elaion moto 4T',
        price: 4500,
        pictureUrl: 'http://d2r9epyceweg5n.cloudfront.net/stores/987/204/products/moto-4t-20w50-1-litro1-014b21e7d38cbdf92415983788349473-640-0.jpg'
    },
    {
        id: 5,
        tittle: 'Aceite de motor',
        description: 'ELAION F50 E',
        price: 9000,
        pictureUrl: 'https://www.ypfagro.com.ar/img/productos/5df792550ecc07c84328d869d.jpg'
    },
    {
        id: 6,
        tittle: 'Aceite de motor',
        description: 'Elaion Competición',
        price: 15000,
        pictureUrl: 'https://pldistribucion.com.ar/web/wp-content/uploads/elaion12.jpg'
    },
]

export const getProducts = () => {
    return new Promise (resolve =>{
        setTimeout(() => {
            resolve(products)
        }, 2000);
    })
}

export const getProductsById = (id) => {
    return new Promise (resolve =>{
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 2000);
    })
}