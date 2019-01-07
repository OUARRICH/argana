//Create Collections

/**
 * products collection
 */
db.createCollection('products', {
    validator: {
       $jsonSchema: {
          bsonType: 'object',
          required: [ 'name', 'categoryId', 'quantityPerUnit', 'price', 'inStock'],
          properties: {
             name: {
                bsonType: 'string',
                description: 'must be a string and is required'
             },
             categoryId: {
                bsonType: 'string',
                description: 'must be an string and is required'
             },
             quantityPerUnit: {
                bsonType: 'string',
                description: 'must be a string and is required'
             },
             price: {
                bsonType: 'double',
                description: 'must be a double and is required'
             },
             inStock: {
                bsonType: 'int',
                minimum: 0,
                description: 'must be an int and is not required'
             },
             onOrder : {
                bsonType: 'int',
                description: 'must be an int and is not required'
             }
          }
       }
    }
})

/**
 * ordres collection
 */
db.createCollection('orders', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['customerId', 'orderDate', 'shippedDate', 'amount'],
            properties: {
                customerId: {
                    bsonType: 'string',
                    description: 'must be a string and is required'
                },
                orderDate: {
                    bsonType: 'date',
                    description: 'must be a date and is required'
                },
                shippedDate: {
                    bsonType: 'date',
                    description: 'must be a date and is required'
                },
                amount: {
                    bsonType: 'double',
                    description: 'must be a double and is required'
                },
                delivred: {
                    bsonType: 'boolean',
                    description: 'must be a boolean and is not required'
                },
                paid: {
                    bsonType: 'boolean',
                    description: 'must be a boolean and is not required'
                }
            }
        }
    }
})

/**
 * Customers collections
 */
db.createCollection('customers', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            // required: ['name', 'title', 'address', 'city', 'postalCode', 'country', 'phone'],
            properties: {
                name: {
                    bsonType: 'string',
                    description: 'must be a string and not required'
                },
                title: {
                    bsonType: 'string',
                    description: 'must be a string and not required'
                },
                address: {
                    bsonType: 'string',
                    description: 'must be a string and not required'
                },
                city: {
                    bsonType: 'string',
                    description: 'must be a string and not required'
                },
                postalCode: {
                    bsonType: 'int',
                    description: 'must be a string and not required'
                },
                phone: {
                    bsonType: 'string',
                    description: 'must be a string and not required'
                }
            }
        }
    }
})

db.customers.insertMany([
    {
        _id: ObjectId('5c3271d90cd36de101f0c3ac'),
        name: 'Salma Metoui',
        title: 'Mme',
        address: null,
        city: null,
        postalCode: null,
        phone: '+33782626394'
    },
    {
        _id: ObjectId('5c3272bf0cd36de101f0c3ad'),
        name: 'Fouad Bougzir',
        title: 'M',
        address: null,
        city: 'Achère',
        postalCode: 78260,
        phone: '+33638542457'
    },
    {
        _id: ObjectId('5c3273220cd36de101f0c3ae'),
        name: 'Yocef Aneb',
        title: 'M',
        address: null,
        city: null,
        postalCode: null,
        phone: '+33782667131'
    },
    {
        _id: ObjectId('5c3275d70cd36de101f0c3b3'),
        name: 'Abdelghani Fakchich',
        title: 'M',
        address: null,
        city: 'Argenteuil',
        postalCode: 95100,
        phone: '+33640461550'
    }
])
/**
 * Insert Products
 */
db.products.insertMany([
    {
        name: 'Huile d\'argan cosmétique 60 ml',
        categoryId: '5c30f71c0cd36de101f0c39e',
        quantityPerUnit: '60 ml',
        price: 12.00,
        inStock: 7,
        onOrder: 0
    },
    {
        name: 'Huile d\'argan 500 ml',
        categoryId: '5c30f9630cd36de101f0c3a0',
        quantityPerUnit: '500 ml',
        price: 20.00,
        inStock: 5,
        onOrder: 2
    },
    {
        name: 'Huile d\'argan 1000 ml',
        categoryId: '5c30f9630cd36de101f0c3a0',
        quantityPerUnit: '1000 ml',
        price: 39.00,
        inStock: 0,
        onOrder: 0
    }
])

/**
 * Insert orders
 */
db.orders.insertMany([
    {
        customerId: ObjectId('5c3271d90cd36de101f0c3ac'),
        orderDate: ISODate('2018-12-07'),
        shippedDate: ISODate('2018-12-17'),
        amount: 27.00,
        delivred: true,
        paid: true
    },
    {
        customerId: ObjectId('5c3272bf0cd36de101f0c3ad'),
        orderDate: ISODate('2018-12-07'),
        shippedDate: ISODate('2018-12-17'),
        amount: 35.00,
        delivred: true,
        paid: true
    },
    {
        customerId: ObjectId('5c3273220cd36de101f0c3ae'),
        orderDate: ISODate('2018-12-07'),
        shippedDate: ISODate('2018-12-17'),
        amount: 35.00,
        delivred: true,
        paid: true
    },
    {
        customerId: ObjectId('5c3273220cd36de101f0c3ae'),
        orderDate: ISODate('2018-12-21'),
        shippedDate: ISODate('2018-12-21'),
        amount: 20.00,
        delivred: true,
        paid: true
    },
    {
        customerId: ObjectId('5c3275d70cd36de101f0c3b3'),
        orderDate: ISODate('2019-01-04'),
        shippedDate: ISODate('2019-01-07'),
        amount: 40.00,
        delivred: false,
        paid: false
    }
])
