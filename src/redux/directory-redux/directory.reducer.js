const INITIAL_STATE = {
    sections:
    [
        {
            title: 'hats',
            imageUrl: 'https://d36tnp772eyphs.cloudfront.net/blogs/1/2018/06/Man-wearing-kufi-hat.jpg',
            id: 1,
            linkUrl: 'shop/hats'
        },
        {
            title: 'jackets',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            id: 2,
            linkUrl: 'shop/jackets'
        },
        {
            title: 'shoes',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            id: 3,
            linkUrl: 'shop/sneakers'
        },
        {
            title: 'womens',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWnHn5k5u64xU3DBXX8r0Fp-tRSzGbjwCP0669Co_2ziaixpDx&usqp=CAU',
            size: 'large',
            id: 4,
            linkUrl: 'shop/womens'
        },
        {
            title: 'mens',
            imageUrl: 'https://i.pinimg.com/originals/89/ed/44/89ed44367afdb60772ed1adf956648a4.jpg',
            size: 'large',
            id: 5,
            linkUrl: 'shop/mens'
            }
        ]
    }

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default directoryReducer;