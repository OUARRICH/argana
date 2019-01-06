//Create Collections

/**
 * products collection
 */
db.createCollection("products", {
    validator: {
       $jsonSchema: {
          bsonType: "object",
          required: [ "name", "categoryId", "quantityPerUnit", "price", "inStock"],
          properties: {
             name: {
                bsonType: "string",
                description: "must be a string and is required"
             },
             categoryId: {
                bsonType: "string",
                description: "must be an string and is required"
             },
             quantityPerUnit: {
                bsonType: "string",
                description: "must be a string and is required"
             },
             price: {
                bsonType: "double",
                description: "must be a double and is required"
             },
             inStock: {
                bsonType: "int",
                minimum: 0,
                description: "must be an int and is not required"
             },
             onOrder : {
                bsonType: "int",
                description: "must be an int and is not required"
             }
          }
       }
    }
})

/**
 * Insert Products
 */
db.products.insertMany([
    {
        name: "Huile d'argan cosmétique 60 ml",
        categoryId: "5c30f71c0cd36de101f0c39e",
        quantityPerUnit: "60 ml",
        price: 12.00,
        inStock: 7,
        onOrder: 0
    },
    {
        name: "Huile d'argan 500 ml",
        categoryId: "5c30f9630cd36de101f0c3a0",
        quantityPerUnit: "500 ml",
        price: 20.00,
        inStock: 5,
        onOrder: 2
    },
    {
        name: "Huile d'argan 1000 ml",
        categoryId: "5c30f9630cd36de101f0c3a0",
        quantityPerUnit: "1000 ml",
        price: 39.00,
        inStock: 0,
        onOrder: 0
    }
])
