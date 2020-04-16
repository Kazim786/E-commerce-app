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
          imageUrl: 'data:image/jpeg;base64,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',
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