const categories = [{name: "all"}, {name: "clothes"}, {name: "tech"}]

const attributes = [
    [
        {
              id: "Size",
              name: "Size",
              type: "text",
              items: [{ value: 40 }, { value: 41 }, { value: 42 }, { value: 43 }]
        }
    ],
    [
        {
            id: "Size",
            name: "Size",
            type: "text",
            items: [{ value: "S" }, { value: "M" }, { value: "L" }, { value: "XL" }]
        }
    ],
    [
        {
            id: "Color",
            name: "Color",
            type: "swatch",
            items: [
                {
                    value: "#44FF03",
                    id: "Green"
                },
                {
                    value: "#03FFF7",
                    id: "Cyan"
                },
                {
                    value: "#030BFF",
                    id: "Blue"
                },
                {
                    value: "#000000",
                    id: "Black"
                },
                {
                    value: "#FFFFFF",
                    id: "White"
                }
            ]
        },
        {
            id: "Capacity",
            name: "Capacity",
            type: "text",
            items: [{ value: "512GB" }, { value: "1TB" }]
        }
    ],
    [
        {
            id: "Color",
            name: "Color",
            type: "swatch",
            items: [
                {
                    value: "#44FF03",
                    id: "Green"
                },
                {
                    value: "#03FFF7",
                    id: "Cyan"
                },
                {
                    value: "#030BFF",
                    id: "Blue"
                },
                {
                    value: "#000000",
                    id: "Black"
                },
                {
                    value: "#FFFFFF",
                    id: "White"
                }
            ]
        },
        {
            id: "Capacity",
            name: "Capacity",
            type: "text",
            items: [{ value: "512GB" }, { value: "1TB" }]
        }
    ],
    [
        {
            id: "Capacity",
            name: "Capacity",
            type: "text",
            items: [{ value: "256GB" }, { value: "512GB" }]
        },
        {
            id: "With USB 3 ports",
            name: "With USB 3 ports",
            type: "text",
            items: [{ value: "Yes" }, { value: "No" }]
        },
        {
            id: "Touch ID in keyboard",
            name: "Touch ID in keyboard",
            type: "text",
            items: [{ value:"Yes" }, { value: "No" }]
        }
    ],
    [
        {
            id: "Capacity",
            name: "Capacity",
            type: "text",
            items: [{ value: "512GB" }, { value: "1TB" }]
        },
        {
            id: "Color",
            name: "Color",
            type: "swatch",
            items: [
                {
                    value: "#44FF03",
                    id: "Green"
                },
                {
                    value: "#03FFF7",
                    id: "Cyan"
                },
                {
                    value: "#030BFF",
                    id: "Blue"
                },
                {
                    value: "#000000",
                    id: "Black"
                },
                {
                    value: "#FFFFFF",
                    id: "White"
                }
            ]
        }
    ]
];

const galleries = [
    [
        "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087",
        "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_1_720x.jpg?v=1612816087",
        "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_3_720x.jpg?v=1612816087",
        "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_5_720x.jpg?v=1612816087",
        "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_4_720x.jpg?v=1612816087"
    ],
    [
        "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016105/product-image/2409L_61.jpg",
        "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016107/product-image/2409L_61_a.jpg",
        "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016108/product-image/2409L_61_b.jpg",
        "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016109/product-image/2409L_61_c.jpg",
        "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016110/product-image/2409L_61_d.jpg",
        "https://images.canadagoose.com/image/upload/w_1333,c_scale,f_auto,q_auto:best/v1634058169/product-image/2409L_61_o.png",
        "https://images.canadagoose.com/image/upload/w_1333,c_scale,f_auto,q_auto:best/v1634058159/product-image/2409L_61_p.png"
    ],
    [
        "https://images-na.ssl-images-amazon.com/images/I/510VSJ9mWDL._SL1262_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/610%2B69ZsKCL._SL1500_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/51iPoFwQT3L._SL1230_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/61qbqFcvoNL._SL1500_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/51HCjA3rqYL._SL1230_.jpg"
    ],
    [
        "https://images-na.ssl-images-amazon.com/images/I/71vPCX0bS-L._SL1500_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/71q7JTbRTpL._SL1500_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/71iQ4HGHtsL._SL1500_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/61IYrCrBzxL._SL1500_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/61RnXmpAmIL._SL1500_.jpg"
    ],
    [
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-blue-selection-hero-202104?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1617492405000"
    ],
    [
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;.v=1604021663000"
    ],
    [
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1591634795000"
    ],
    [
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airtag-double-select-202104?wid=445&hei=370&fmt=jpeg&qlt=95&.v=1617761672000"
    ]
];

const descriptions = [
    "<p>Great sneakers for everyday use!</p>",
    "<p>Awesome winter jacket</p>",
    "<p>A good gaming console. Plays games of PS4! Enjoy if you can buy it mwahahahaha</p>",
    "\n<div>\n<ul>\n<li><span>Hardware-beschleunigtes Raytracing macht dein Spiel noch realistischer</span></li>\n<li><span>Spiele Games mit bis zu 120 Bilder pro Sekunde</span></li>\n<li><span>Minimiere Ladezeiten mit einer speziell entwickelten 512GBB NVMe SSD und wechsle mit Quick Resume nahtlos zwischen mehreren Spielen.</span></li>\n<li><span>Xbox Smart Delivery stellt sicher, dass du die beste Version deines Spiels spielst, egal, auf welcher Konsole du spielst</span></li>\n<li><span>Spiele deine Xbox One-Spiele auf deiner Xbox Series S weiter. Deine Fortschritte, Erfolge und Freundesliste werden automatisch auf das neue System übertragen.</span></li>\n<li><span>Erwecke deine Spiele und Filme mit innovativem 3D Raumklang zum Leben</span></li>\n<li><span>Der brandneue Xbox Wireless Controller zeichnet sich durch höchste Präzision, eine neue Share-Taste und verbesserte Ergonomie aus</span></li>\n<li><span>Ultra-niedrige Latenz verbessert die Reaktionszeit von Controller zum Fernseher</span></li>\n<li><span>Verwende dein Xbox One-Gaming-Zubehör -einschließlich Controller, Headsets und mehr</span></li>\n<li><span>Erweitere deinen Speicher mit der Seagate 1 TB-Erweiterungskarte für Xbox Series X (separat erhältlich) und streame 4K-Videos von Disney+, Netflix, Amazon, Microsoft Movies &amp; TV und mehr</span></li>\n</ul>\n</div>",
    "The new iMac!",
    "This is iPhone 12. Nothing else to say.",
    "\n<h3>Magic like you’ve never heard</h3>\n<p>AirPods Pro have been designed to deliver Active Noise Cancellation for immersive sound, Transparency mode so you can hear your surroundings, and a customizable fit for all-day comfort. Just like AirPods, AirPods Pro connect magically to your iPhone or Apple Watch. And they’re ready to use right out of the case.\n\n<h3>Active Noise Cancellation</h3>\n<p>Incredibly light noise-cancelling headphones, AirPods Pro block out your environment so you can focus on what you’re listening to. AirPods Pro use two microphones, an outward-facing microphone and an inward-facing microphone, to create superior noise cancellation. By continuously adapting to the geometry of your ear and the fit of the ear tips, Active Noise Cancellation silences the world to keep you fully tuned in to your music, podcasts, and calls.\n\n<h3>Transparency mode</h3>\n<p>Switch to Transparency mode and AirPods Pro let the outside sound in, allowing you to hear and connect to your surroundings. Outward- and inward-facing microphones enable AirPods Pro to undo the sound-isolating effect of the silicone tips so things sound and feel natural, like when you’re talking to people around you.</p>\n\n<h3>All-new design</h3>\n<p>AirPods Pro offer a more customizable fit with three sizes of flexible silicone tips to choose from. With an internal taper, they conform to the shape of your ear, securing your AirPods Pro in place and creating an exceptional seal for superior noise cancellation.</p>\n\n<h3>Amazing audio quality</h3>\n<p>A custom-built high-excursion, low-distortion driver delivers powerful bass. A superefficient high dynamic range amplifier produces pure, incredibly clear sound while also extending battery life. And Adaptive EQ automatically tunes music to suit the shape of your ear for a rich, consistent listening experience.</p>\n\n<h3>Even more magical</h3>\n<p>The Apple-designed H1 chip delivers incredibly low audio latency. A force sensor on the stem makes it easy to control music and calls and switch between Active Noise Cancellation and Transparency mode. Announce Messages with Siri gives you the option to have Siri read your messages through your AirPods. And with Audio Sharing, you and a friend can share the same audio stream on two sets of AirPods — so you can play a game, watch a movie, or listen to a song together.</p>\n",
    "\n<h1>Lose your knack for losing things.</h1>\n<p>AirTag is an easy way to keep track of your stuff. Attach one to your keys, slip another one in your backpack. And just like that, they’re on your radar in the Find My app. AirTag has your back.</p>\n"
];

const prices = [150, 520, 850, 340, 1690, 1100, 300, 120];

const currencies = [
    {
      label: "USD",
      symbol: "$",
      conversion: 1
    },
    {
      label: "GBP",
      symbol: "£",
      conversion: 0.80081
    },
    {
      label: "AUD",
      symbol: "A$",
      conversion: 1.3916
    },
    {
      label: "JPY",
      symbol: "¥",
      conversion: 130.18
    },
    {
      label: "RUB",
      symbol: "₽",
      conversion: 67.284
    }
];

const productList = [
    {
        id: "huarache-x-stussy-le",
        name: "Nike Air Huarache Le",
        inStock: true,
        category: "clothes",
        brand: "Nike x Stussy"
    },
    {
        id: "jacket-canada-goosee",
        name: "Jacket",
        inStock: true,
        category: "clothes",
        brand: "Canada Goose"
    },
    {
        id: "ps-5",
        name: "PlayStation 5",
        inStock: false,
        category: "tech",
        brand: "Sony"
    },
    {
        id: "xbox-series-s",
        name: "Xbox Series S 512GB",
        inStock: false,
        category: "tech",
        brand: "Microsoft"
    },
    {
        id: "apple-imac-2021",
        name: "iMac 2021",
        inStock: true,
        category: "tech",
        brand: "Apple"
    },
    {
        id: "apple-iphone-12-pro",
        name: "iPhone 12 Pro",
        inStock: true,
        category: "tech",
        brand: "Apple"
    },
    {
        id: "apple-airpods-pro",
        name: "AirPods Pro",
        inStock: false,
        category: "tech",
        brand: "Apple"
    },
    {
        id: "apple-airtag",
        name: "AirTag",
        inStock: true,
        category: "tech",
        brand: "Apple"
    }
];

module.exports = { productList, currencies, prices, galleries, attributes, descriptions, categories };