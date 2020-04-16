const SHOP_DATA = {
    hats: {
      id: 1,
      title: 'Hats',
      routeName: 'hats',
      items: [
        {
          id: 1,
          name: 'Brown Brim',
          imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
          price: 25
        },
        {
          id: 2,
          name: 'Blue Beanie',
          imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
          price: 18
        },
        {
          id: 3,
          name: 'Brown Cowboy',
          imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
          price: 35
        },
        {
          id: 4,
          name: 'Grey Brim',
          imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
          price: 25
        },
        {
          id: 5,
          name: 'Green Beanie',
          imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
          price: 18
        },
        {
          id: 6,
          name: 'Palm Tree Cap',
          imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
          price: 14
        },
        {
          id: 7,
          name: 'Red Beanie',
          imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
          price: 18
        },
        {
          id: 8,
          name: 'Wolf Cap',
          imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
          price: 14
        },
        {
          id: 9,
          name: 'Blue Snapback',
          imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
          price: 16
        }
      ]
    },
    sneakers: {
      id: 2,
      title: 'Sneakers',
      routeName: 'sneakers',
      items: [
        {
          id: 1,
          name: 'Adidas NMD',
          imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
          price: 220
        },
        {
          id: 2,
          name: 'Adidas Yeezy',
          imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
          price: 280
        },
        {
          id: 3,
          name: 'Black Converse',
          imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
          price: 110
        },
        {
          id: 4,
          name: 'Nike White AirForce',
          imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
          price: 160
        },
        {
          id: 5,
          name: 'Nike Red High Tops',
          imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
          price: 160
        },
        {
          id: 6,
          name: 'Nike Brown High Tops',
          imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
          price: 160
        },
        {
          id: 7,
          name: 'Air Jordan Limited',
          imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
          price: 190
        },
        {
          id: 8,
          name: 'Timberlands',
          imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
          price: 200
        }
      ]
    },
    jackets: {
      id: 3,
      title: 'Jackets',
      routeName: 'jackets',
      items: [
        {
          id: 1,
          name: 'Black Jean Shearling',
          imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
          price: 125
        },
        {
          id: 2,
          name: 'Blue Jean Jacket',
          imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
          price: 90
        },
        {
          id: 3,
          name: 'Grey Jean Jacket',
          imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
          price: 90
        },
        {
          id: 4,
          name: 'Brown Shearling',
          imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
          price: 165
        },
        {
          id: 5,
          name: 'Tan Trench',
          imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
          price: 185
        }
      ]
    },
    womens: {
      id: 4,
      title: 'Womens',
      routeName: 'womens',
      items: [
        {
          id: 1,
          name: 'Desert Queen',
          imageUrl: 'https://us.junaidjamshed.com/pub/media/catalog/product/cache/weltpixel_hover_image/524x524/beff4985b56e3afdbeabfc89641a4582/j/p/jpwk-20-348-h.jpg',
          price: 25
        },
        {
          id: 2,
          name: 'Turquiose Dress',
          imageUrl: 'https://us.junaidjamshed.com/pub/media/catalog/product/cache/weltpixel_hover_image/524x524/beff4985b56e3afdbeabfc89641a4582/j/p/jpwk-20-419-2.jpg',
          price: 20
        },
        {
          id: 3,
          name: 'The Elegant Princess',
          imageUrl: 'https://us.junaidjamshed.com/pub/media/catalog/product/cache/weltpixel_hover_image/524x524/beff4985b56e3afdbeabfc89641a4582/j/f/jfu-19-003_2_.jpg',
          price: 80
        },
        {
          id: 4,
          name: 'The Shy Princess',
          imageUrl: 'https://us.junaidjamshed.com/pub/media/catalog/product/cache/weltpixel_hover_image/524x524/beff4985b56e3afdbeabfc89641a4582/2/0/20-076-b_4_.jpg',
          price: 80
        },
        {
          id: 5,
          name: 'Beauty Queen',
          imageUrl: 'https://us.junaidjamshed.com/pub/media/catalog/product/cache/weltpixel_hover_image/524x524/beff4985b56e3afdbeabfc89641a4582/2/0/20-031_3__1.jpg',
          price: 45
        },
        {
          id: 6,
          name: 'The Black Light',
          imageUrl: 'https://us.junaidjamshed.com/pub/media/catalog/product/cache/weltpixel_hover_image/524x524/beff4985b56e3afdbeabfc89641a4582/2/0/20-026s_3_.jpg',
          price: 135
        },
        {
          id: 7,
          name: 'White Blouse',
          imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
          price: 20
        }
      ]
    },
    mens: {
      id: 5,
      title: 'Mens',
      routeName: 'mens',
      items: [
        {
          id: 1,
          name: 'Elegant But Simple',
          imageUrl: 'https://us.junaidjamshed.com/pub/media/catalog/product/cache/weltpixel_hover_image/524x524/beff4985b56e3afdbeabfc89641a4582/3/3/33114_3_.jpg',
          price: 325
        },
        {
          id: 2,
          name: 'The Crowned Prince',
          imageUrl: 'https://us.junaidjamshed.com/pub/media/catalog/product/cache/small_image/524x524/beff4985b56e3afdbeabfc89641a4582/j/j/jjsw-486_1_.jpg',
          price: 20
        },
        {
          id: 3,
          name: 'Black Longsleeve',
          imageUrl: 'https://us.junaidjamshed.com/pub/media/catalog/product/cache/weltpixel_hover_image/524x524/beff4985b56e3afdbeabfc89641a4582/3/0/30969_3_.jpg',
          price: 25
        },
        {
          id: 4,
          name: 'Black Kurta',
          imageUrl: 'https://us.junaidjamshed.com/pub/media/catalog/product/cache/weltpixel_hover_image/524x524/beff4985b56e3afdbeabfc89641a4582/3/0/30997_3_.jpg',
          price: 25
        },
        {
          id: 5,
          name: 'Collared Gray Kurta',
          imageUrl: 'https://us.junaidjamshed.com/pub/media/catalog/product/cache/weltpixel_hover_image/524x524/beff4985b56e3afdbeabfc89641a4582/3/2/32383_2_.jpg',
          price: 40
        },
        {
          id: 6,
          name: 'Humble Prince',
          imageUrl: 'https://us.junaidjamshed.com/pub/media/catalog/product/cache/weltpixel_hover_image/524x524/beff4985b56e3afdbeabfc89641a4582/3/6/36652_2_.jpg',
          price: 25
        }
      ]
    }
}

  export default SHOP_DATA