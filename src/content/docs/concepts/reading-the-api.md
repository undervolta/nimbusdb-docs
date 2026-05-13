---
title: Reading the API
description: Learn how to read and understand the **NimbusDB** API documentation effectively.
---

In this section, we will discuss how to read and understand the **NimbusDB** API documentation effectively. 

:::note
**NimbusDB**'s API is not like other GML libraries, because it has **TypeScript** type annotations, which can be overwhelming for developers who are not familiar with TypeScript. 

But, understanding the API documentation is crucial for using **NimbusDB** effectively, so we'll break down how to read the API documentation and what to look for when trying to understand how a function works.
:::


## Interfaces and Types

**Interfaces** in **NimbusDB** are used to define the structure of a struct, such as `options` parameter in a function/method. They specify the properties/fields that the struct should have, along with their types and whether they are optional or required. In **NimbusDB**, we'll use **Types** instead of Interfaces.

#### Example

```ts "count: number" "inserteds: NimbusDBData[]" "skipped: number"
type NimbusDBInsertResult = {
    count: number; // The number of records that were inserted
    inserteds: NimbusDBData[]; // An array of NimbusDBData instances representing the records that were inserted
    skipped: number; // The number of records that were skipped during the insert operation (e.g., due to duplicates or validation errors)
};
```

In GML, we don't have the concept of interfaces or types, but we can still understand the structure of the data by looking at the properties and their descriptions in the documentation. Here's an example of how we can interpret the above TypeScript type definition in GML:

```ts "count" "inserteds" "skipped"
var insert_result = {
    count: 3,
    inserteds: [
        { id: 1, name: "Apple", price: 0.5, /* Additional properties/methods */ },
        { id: 2, name: "Banana", price: 0.3, /* Additional properties/methods */ },
        { id: 3, name: "Cherry", price: 0.8, /* Additional properties/methods */ }
    ],
    skipped: 0
};
```

So, when you see a type definition in the documentation, you can understand it as a description of the structure of the data that is being returned or expected by a function/method. The properties and their descriptions will give you insights into what data you can expect to work with when using that function/method.

### Union Types

In some cases, you may encounter **union types** in the API documentation. A union type is a type that can be one of several types. In TypeScript, union types are denoted using the `|` symbol.

#### Example

```ts "number | string | NimbusDBModel" "NimbusDBModel | null"
function ndb_inner_join(
	left_model: NimbusDBModel,
	right_model: number | string | NimbusDBModel,
	on_column: string,
	options?: NimbusDBJoinOptions
): NimbusDBModel | null;
```

In the above function signature, the `right_model` parameter can be of type `number`, `string`, or `NimbusDBModel`. This means that when you call the `ndb_inner_join()` function, you can pass in a number (representing the custom ID of the model), a string (representing the name of the model), or an instance of `NimbusDBModel` as the `right_model` argument, and the function will handle it accordingly based on the type of the argument provided.

### Intersection Types

In some cases, you may also encounter **intersection types** in the API documentation. An intersection type is a type that combines multiple types into one. In TypeScript, intersection types are denoted using the `&` symbol.

#### Example

```ts "& NimbusDBGetOptions"
type NimbusDBGetByIndex = {
	index: number | number[];
} & NimbusDBGetOptions;
```

In the above example, `NimbusDBGetByIndex` is an intersection type that combines the properties of the object with an `index` property (which can be a number or an array of numbers) and the properties of `NimbusDBGetOptions`. This means that when you use the `NimbusDBGetByIndex` type, you will have access to both the `index` property and all the properties defined in `NimbusDBGetOptions`, allowing you to specify both the index and additional options when performing a get operation by index.

:::tip
`undefined` = `null` = `void` in **NimbusDB** API documentation. So, when you see a return type that includes `null` or `undefined`, it means that the function/method may not return a value in certain cases, and you should handle those cases accordingly in your code.
:::


## Function Signatures

When reading the API documentation, it's important to pay attention to the function signatures. The function signature includes the function name, its parameters, and their types (if applicable). This information will help you understand how to use the function correctly.

#### Example

```ts {2-4}
function ndb_insert(
    model: NimbusDBModel,
    data: Struct | Struct[],
    options?: NimbusDBInsertOptions
): NimbusDBInsertResult;
```

In the above function signature, we can see that `ndb_insert` is a function that takes three parameters: `model`, `data`, and `options`. The `model` parameter is of type `NimbusDBModel`, the `data` parameter can be either a single struct or an array of structs, and the `options` parameter is optional and of type `NimbusDBInsertOptions`. The function returns a value of type `NimbusDBInsertResult`.

In GML, we can use the function like this:

```ts
ndb_insert(items, { name: "Orange", price: 0.6 });

ndb_insert(items, [
    { name: "Grapes", price: 0.4 },
    { name: "Watermelon", price: 1.0 }
]);

ndb_insert(items, { name: "Pineapple", price: 1.5 }, { force: true });

var insert_result = ndb_insert(items, { name: "Mango", price: 0.8 }, { no_cache: true });

var insert_result_arr = ndb_insert(items, [
    { name: "Strawberry", price: 0.5 },
    { name: "Blueberry", price: 0.7 }
], { 
    no_cache: true
});
```

All of the above examples are valid calls to the `ndb_insert()` function, demonstrating how to use the required and optional parameters effectively based on the function signature provided in the API documentation.


## Classes and Methods

When reading the API documentation, you may come across **classes** and their associated **methods**. A class is a blueprint for creating objects, and methods are functions that are associated with a class and can be called on instances of that class.

#### Example

```ts
class NimbusDBData {
    constructor(/* parameters to create an instance */)
    // ... properties and methods of the NimbusDBData class
}
```

In the above example, `NimbusDBData` is a class that represents a data record in **NimbusDB**. It may have various properties and methods that allow you to interact with the data it represents.

When you see a class in the API documentation, it's important to look at the methods that are associated with that class, as they will provide you with the functionality to manipulate and interact with instances of that class. 

For example, if you see a method like `.inc()` or `.resolve()` in the documentation for the `NimbusDBData` class, you can look at the method signature and description to understand how to use it effectively in your code when working with data records in **NimbusDB**.

In GML, we can create instances of the `NimbusDBData` struct constructor and call its methods like this:

```ts
var data_record = new NimbusDBData(/* parameters to create an instance */);

var data_value = data_record.some_property; // Access a property of the data record
data_record.inc("price", 0.1); // This will increment the "price" field of the data record by 0.1
```


## Optional and Required Properties

When reading the API documentation, it's important to pay attention to which properties are optional and which are required. Optional properties are usually denoted with a `?` in TypeScript, while required properties do not have this notation.

#### Example

```ts {4}
function ndb_insert(
    model: NimbusDBModel, // required
    data: Struct | Struct[], // required
    options?: NimbusDBInsertOptions // optional
): NimbusDBInsertResult;
```

So, in the above function signature, `model` and `data` are required parameters, while `options` is an optional parameter. This means that when you call the `ndb_insert()` function, you must provide values for `model` and `data`, but you can choose to omit the `options` parameter if you don't need to specify any options for the insert operation.


### Partial Types

In some cases, you may encounter types that are defined as `Partial<T>`, where `T` is an interface or type. This means that all properties of the type `T` are optional in the context where `Partial<T>` is used.

#### Example

```ts "Partial"
export type NimbusDBInsertOptions = Partial<{
	force: boolean;				// bypass column rules, type check, and validator (default = false)
	no_cache: boolean;			// don't cache the data (default = false)
}>;
```

In the above example, `NimbusDBInsertOptions` is defined as a `Partial` type, which means that both `force` and `no_cache` properties are **optional** when using this type. So, when you create an object of type `NimbusDBInsertOptions`, you can choose to include either one of the properties, both properties, or neither property, depending on your needs for the insert operation.


## Arrow Functions

In some cases, you may encounter arrow functions in the API documentation. Arrow functions are a concise way to write functions in JavaScript and TypeScript. In GML, they can be interpreted as regular methods (function expressions) that are assigned to a variable or property.

#### Example

```ts
function ndb_find(
    model: NimbusDBModel,
    func: (
        data: Struct,
        index: number,
    ) => boolean,
    options?: NimbusDBFindOptions
): NimbusDBData | any[] | null;
```

In the above example, `func` is an arrow function that takes two parameters: `data` (a struct representing a record in the model) and `index` (the index of the record in the dataset). The arrow function returns a boolean value indicating whether the record matches the specified criteria.

In GML, we can use the `ndb_find()` function with an arrow function like this:

```ts
var result = ndb_find(items, function(data, index) {
    return data.price > 0.5;
});
```

This will return the first item in the `items` model that has a price greater than 0.5. The arrow function allows us to define the criteria for finding the item in a concise and readable way.


## Function/Method Overloading

In some cases, you may encounter function or method overloading in the API documentation. This means that a function or method can have multiple signatures, allowing it to be called with different sets of parameters.

#### Example

```ts
class NimbusDBModel {
    // ... other methods

    static find(
		primary: int | int[],
		options?: NimbusDBGetOptions
	): NimbusDBData | any[] | null;

    static find(
		func: (
			data: Struct,
			index: int
		) => boolean,
		options?: NimbusDBGetOptions
	): NimbusDBData | any[] | null;
}
```

In the above example, the `find` method of the `NimbusDBModel` class is overloaded with two different signatures. The first signature allows you to find records based on their primary key(s), while the second signature allows you to find records based on a custom function that defines the criteria for finding the records.

In GML, we can use the overloaded `find` method like this:

```ts
// Using the first signature to find by primary key
var result_by_primary = items.find(2);

// Using the second signature to find by custom function
var result_by_func = items.find(function(data, index) {
    return data.price > 0.5;
});
```

In both cases, the `find` method will return the appropriate results based on the parameters provided, demonstrating how function/method overloading allows for flexible usage of the same method name with different parameter sets.


## Conclusion

**NimbusDB**'s API documentation may seem complex at first glance, especially with the presence of TypeScript type annotations. But by understanding the key concepts such as interfaces, types, function signatures, and method overloading, you can effectively read and comprehend the API documentation.

- Don't be intimidated by the TypeScript syntax. Focus on the underlying concepts and how they translate to GML.
- Pay attention to the structure of the data and the types of parameters and return values.
- Look for optional and required properties to understand how to use functions/methods correctly.
- Understand how to interpret arrow functions and overloaded methods in the context of GML.

:::tip
GML is somehow similar to JavaScript/TypeScript. So you can still understand the structure and functionality of the API by interpreting the TypeScript annotations in the context of GML, even if you are not familiar with TypeScript. 
:::
