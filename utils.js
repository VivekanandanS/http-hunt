var moment = require('moment')
var _ = require('lodash')
exports.countActive = (products) => {
    var count = 0;
    for (let index = 0; index < products.length; index++) {
        const product = products[index];
        var startDate = moment(product['startDate'], 'YYYY-MM-DD');
        if (startDate.diff(moment(), 'day') <= 0 && (!product['endDate'] || moment(product['endDate'], 'YYYY-MM-DD').diff(moment(), 'day')) >= 0)
            count = count + 1;
    }
    return count;
}


var products = [
    {
        name: 'Asus ABTU005 10050 mAH Power Bank Gold',
        category: 'Electronics',
        price: 939,
        startDate: '2020-09-30',
        endDate: null
    },
    {
        name: 'Xiaomi Redmi 3S Prime 32GB 3GB',
        category: 'Electronics',
        price: 1737,
        startDate: '2017-01-31',
        endDate: '2020-10-27'
    },
    {
        name: 'Sennheiser CX 180 Street II In-Ear Headphone',
        category: 'Electronics',
        price: 649,
        startDate: '2015-01-31',
        endDate: '2015-09-27'
    },
    {
        name: 'Honor AP007 13000 mAH Power Bank Grey',
        category: 'Electronics',
        price: 869,
        startDate: '2015-11-01',
        endDate: '2016-11-17'
    },
    {
        name: 'Dream Decor Premium Quality Designer Cushion Cover (12x12-inch) - Set of 5',
        category: 'Furniture',
        price: 299,
        startDate: '2020-09-01',
        endDate: '2020-10-07'
    },
    {
        name: '10 feet Exporthub Beautiful Royal Silky Eyelet Very Very Long Door Curtain- 2PCS',
        category: 'Furniture',
        price: 699,
        startDate: '2015-11-01',
        endDate: '2020-10-04'
    },
    {
        name: 'NEW STAINLESS STEEL WATERMELON CORER,SERVER SLICER,CUTTER SPLITTER KITCHEN TOOL',
        category: 'Kitchen',
        price: 259,
        startDate: '2015-11-01',
        endDate: '2016-11-17'
    },
    {
        name: 'Heat Resistant Silicone spatula /Turners for your Kitchen',
        category: 'Kitchen',
        price: 599,
        startDate: '2016-11-01',
        endDate: null
    }
]
exports.countActiveByCategory = (products) => {
    var result = _.groupBy(products, "category");
    var categories = {};
    for (var key in result) {
        var count = exports.countActive(result[key])
        if (count > 0)
            categories[key] = count;
    }
    return categories;
}

exports.activePrice = (products) => {
    var cost = 0;
    for (let index = 0; index < products.length; index++) {
        const product = products[index];
        var startDate = moment(product['startDate'], 'YYYY-MM-DD');
        if (startDate.diff(moment(), 'day') <= 0 && (!product['endDate'] || moment(product['endDate'], 'YYYY-MM-DD').diff(moment(), 'day')) >= 0)
            cost = cost + product['price'];
    }
    return cost;
}

console.log(exports.countActiveByCategory(products));

