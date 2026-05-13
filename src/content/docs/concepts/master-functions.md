---
title: Master Functions
description: An introduction to master functions in NimbusDB, including their purpose, characteristics, and how they differ from regular functions.
---

In this section, we will explore master functions in **NimbusDB**.


## What are Master Functions?

Master functions are special functions/methods that are act as the "end" of a function call chain. They are responsible for initiating the execution of a query and determining how the query interacts with the underlying data. Master functions are typically used to perform operations that require precise control over query execution, such as data retrieval, manipulation, and aggregation.


## Characteristics of Master Functions

- **Endpoints of Query Execution**: Master functions serve as the entry points for executing queries. They are the starting point of a function call chain that may involve multiple nested function calls.
- **Modular and Powerful**: Master functions are designed to be powerful and flexible, but they can also be easy to break if not used correctly.
- **Special Handling**: Due to their unique characteristics, master functions require special handling and consideration when used in queries. It's important to understand their behavior and implications before using them in your queries.
- **Not for Regular Use**: Master functions are not intended for regular use in everyday queries. They are typically used in advanced scenarios where precise control over query execution is necessary. For most use cases, regular functions and methods should be sufficient.


## List of Master Functions

### Model Methods

- `.get(_selector)`: The `selector` parameter let you specify which data to retrieve and how the retrieval operation should be executed.
- `.join(_selector)`: The `selector` parameter specifies which model to join, which fields to intersect, and how the join operation should be executed.
- `.remove(_selector)`: Similar to `.get()`, the `selector` parameter determine which data to remove and how the removal operation should be executed.
- `.update(_selector, _update_data)`: The `selector` parameter specify which data to update and how the update operation should be executed, while the `update_data` parameter specify what data to update.


## Example

We'll use `ndb_find()` as an example to illustrate how master functions work in practice. This function is used to retrieve data from a model based on specified criteria.

```ts "ndb_find"
var banana_name = ndb_find("items", 2, {
    destruct: true,
    pick: "name"
}); 
// This will return the name of the item with id 2, which is "Banana"
```

That's very straightforward, but it's important to understand that `ndb_find()` is a derived function that ultimately calls the `.get()` master function under the hood to perform the actual data retrieval. Here's the equivalent query using the `.get()` master function directly:

```ts "get"
var results = items.get({ 
    primary: 2,
    access: NIMBUSDB_DATA_ACCESS.LINKED,
    destruct: true,
    pick: "name"
});
```

Calling the `.get()` master function directly gives you more control over the query execution, but it also requires a deeper understanding of how the master function works and how to use it correctly. In contrast, using `ndb_find()` or `.find()` abstracts away the complexities and provides a simpler interface for common use cases.

```
┌────────────┐
│ ndb_find() │
└─────┬──────┘
      ↓
┌──────────────┐
│ Model.find() │
└─────┬────────┘
      ↓
┌─────────────────────────┐
│ Model.get_by_*_linked() │
└─────┬───────────────────┘
      ↓
┌─────────────┐
│ Model.get() │
└─────┬───────┘
      ↓
┌────────────┐
│ { Result } │
└────────────┘
```

As you can see from the diagram above, `ndb_find()` is a derived function that ultimately calls the `.get()` master function to retrieve the data. Each layer of abstraction provides a different level of control and complexity, allowing you to choose the right tool for your specific use case.


## Conclusion

- Master functions are powerful tools in **NimbusDB** that allow you to have precise control over query execution.
- You likely won't need to use master functions directly in most cases, as derived functions like `ndb_find()` provide a simpler interface for common use cases.
- However, understanding master functions and how they work can help you make informed decisions about which functions to use in your queries and how to use them effectively.
- Always be cautious when using master functions, as they can be easy to break if not used correctly. Make sure to read the documentation and understand the implications of using master functions before incorporating them into your queries.
