let productArray = //JSON.parse(xhr.response)
    [
        {
            productName: 'iPad Air',
            baseImg: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-air-select-202203?wid=470&hei=556&fmt=jpeg&qlt=90&.v=1645665079887',
            basePrice: 30000,
            specArray: [ //Specification
                {
                    title: "機型",
                    key: 'model',
                    options: [
                        { data: '9吋顯示器', extraPrice: 0, description: 'Liquid Retina 顯示器', },
                        { data: '12.2吋顯示器', extraPrice: 10000, description: 'Liquid Retina XDR 顯示器', },
                    ],
                    choosed: { data: '9吋顯示器', extraPrice: 0, description: 'Liquid Retina 顯示器', },
                    changePrice: true,
                    changeImg: false,
                },
                {
                    title: "外觀",
                    key: 'color',
                    options: [
                        { data: '#777', description: '太空灰色', photo:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-air-select-wifi-spacegray-202203?wid=470&hei=556&fmt=png-alpha&.v=1645066742664'},
                        { data: '#faa', description: '粉紅色', photo:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-air-select-wifi-pink-202203?wid=470&hei=556&fmt=png-alpha&.v=1645066399526'},
                        { data: '#c18dff', description: '紫色', photo:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-air-select-wifi-purple-202203?wid=470&hei=556&fmt=png-alpha&.v=1645066730601'},
                        { data: '#7cb4ff', description: '藍色', photo:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-air-select-wifi-blue-202203?wid=470&hei=556&fmt=png-alpha&.v=1645065732688'},
                        { data: '#fff0d6', description: '星光色', photo:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-air-select-wifi-starlight-202203?wid=470&hei=556&fmt=png-alpha&.v=1645895139236'},
                    ],
                    choosed: null,
                    changePrice: false,
                    changeImg: true,
                },
                {
                    title: '儲存裝置',
                    key: 'storage',
                    options: [
                        { data: '128GB', extraPrice: 0, },
                        { data: '256GB', extraPrice: 1000, },
                        { data: '512GB', extraPrice: 2000, },
                        { data: '1TB', extraPrice: 4000, },
                    ],
                    choosed: null,
                    changePrice: true,
                    changeImg: false,
                },
                {
                    title: '連線能力',
                    key: 'network',
                    options: [
                        { data: 'Wi-Fi', extraPrice: 0, },
                        { data: 'Wi-Fi + 行動網路', extraPrice: 5000, },
                    ],
                    choosed: null,
                    changePrice: true,
                    changeImg: false,
                },
            ],
        },
        {
            productName: 'iPad mini',
            baseImg: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-mini-select-202109?wid=470&hei=556&fmt=jpeg&qlt=90&.v=1631751017000',
            basePrice: 10000,
            specArray: [ //Specification
                {
                    title: "機型",
                    key: 'model',
                    options: [
                        { data: '9吋顯示器', extraPrice: 0, description: 'Liquid Retina 顯示器', },
                        { data: '12.2吋顯示器', extraPrice: 10000, description: 'Liquid Retina XDR 顯示器', },
                    ],
                    choosed: { data: '9吋顯示器', extraPrice: 0, description: 'Liquid Retina 顯示器', },
                    changePrice: true,
                    changeImg: false,
                },
                {
                    title: "外觀",
                    key: 'color',
                    options: [
                        { data: '#777', description: '太空灰色', photo:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-mini-select-wifi-space-gray-202109?wid=470&hei=556&fmt=png-alpha&.v=1629840743000'},
                        { data: '#faa', description: '粉紅色', photo:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-mini-select-wifi-pink-202109?wid=470&hei=556&fmt=png-alpha&.v=1629840714000'},
                        { data: '#c18dff', description: '紫色', photo:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-mini-select-wifi-purple-202109?wid=470&hei=556&fmt=png-alpha&.v=1629840735000'},
                        { data: '#fff0d6', description: '星光色', photo:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-mini-select-wifi-starlight-202109?wid=470&hei=556&fmt=png-alpha&.v=1629840745000'},
                    ],
                    choosed: null,
                    changePrice: false,
                    changeImg: true,
                },
                {
                    title: '儲存裝置',
                    key: 'storage',
                    options: [
                        { data: '128GB', extraPrice: 0, },
                        { data: '256GB', extraPrice: 1000, },
                        { data: '512GB', extraPrice: 2000, },
                        { data: '1TB', extraPrice: 4000, },
                    ],
                    choosed: null,
                    changePrice: true,
                    changeImg: false,
                },
            ],
        },
    ]