// Product_Category collection
db.createCollection("Product_Category", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name"],
      properties: {
        name: {
          bsonType: "string",
          description: "Name of the product category",
        },
        description: {
          bsonType: "string",
          description: "Description of the product category",
        },
        created_at: {
          bsonType: "date",
          description: "Timestamp when the category was created",
        },
        modified_at: {
          bsonType: "date",
          description: "Timestamp of the last modification",
        },
      },
    },
  },
});

// Product collection
db.createCollection("Product", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "category_id"],
      properties: {
        name: {
          bsonType: "string",
          description: "Name of the product",
        },
        description: {
          bsonType: "string",
          description: "Description of the product",
        },
        SKU: {
          bsonType: "string",
          description: "Stock Keeping Unit",
        },
        category_id: {
          bsonType: "objectId",
          description: "Reference to the product category",
        },
        inventory_id: {
          bsonType: "int",
          description: "Identifier related to product inventory",
        },
        price: {
          bsonType: "decimal",
          description: "Price of the product",
        },
        discount_id: {
          bsonType: "objectId",
          description: "Identifier for applicable discounts",
        },
        created_at: {
          bsonType: "date",
          description: "Timestamp when the product was created",
        },
        modified_at: {
          bsonType: "date",
          description: "Timestamp of the last modification",
        },
      },
    },
  },
});
          
