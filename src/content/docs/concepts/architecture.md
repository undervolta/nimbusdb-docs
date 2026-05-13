---
title: Architecture
description: A mental model of how NimbusDB's architecture is designed to work.
---

In this section, we'll explore the architecture of **NimbusDB** and how its various components interact with each other to provide a powerful and efficient database solution for GameMaker.

## Models

At the core of **NimbusDB** are **Models**, which represent the structure of your data. In relational database terms, you can think of models as tables, where each model defines a set of fields (columns) and their types. Models also define the relationships between different data entities, allowing you to create complex data structures with ease.

But unlike traditional tables, **NimbusDB** models are designed to be more flexible and dynamic, allowing you to define multiple data types within a single column, and even store nested data structures. This means you can easily represent complex data without having to create multiple tables or perform expensive joins.

```
┌───────┐
│ Model │
└─┬─────┘
  ├─ id
  ├─ custom_id
  ├─ name
  ├─ schema
  ├─ cache
  ├─ internals
  ├─ relations
  │ ┌────────────┐ ┌────────────┐ ┌────────────┐
  └─┤ { data 1 } ├─┤ { data 2 } ├─┤ { data 3 } ├─>
    └────────────┘ └────────────┘ └────────────┘
```

> ##### Models = Tables with superpowers

### Schema

Each model has a schema that defines the structure of the data it holds. The schema specifies the: 
- fields (columns) of the model, 
- their data types, and 
- any constraints or validations that should be applied to the data. 

This allows **NimbusDB** to enforce data integrity and provide powerful querying capabilities based on the defined schema. More over, even it's not recommended, you can go **schemaless** with **NimbusDB** if you want, allowing you to store any data without having to define a schema upfront. This flexibility allows you to iterate quickly during development and adapt your data structures as your game evolves, without having to worry about database migrations or schema changes.

```
┌───────┐
│ Model │
└─┬─────┘
  │ ┌────────┐
  └─┤ Schema │
    └─┬──────┘
      ├─ field/column name
      ├─ data type(s)
      ├─ [constraint(s)]
      ├─ [validator]
      └─ [default value]
```

> ##### Schema = Structure of a table, defining its columns and rules

### Data

The data stored in **NimbusDB** models is organized into **records** (rows), where each record represents a single structured entity. Each record contains values for the fields defined in the model's schema.

```
┌──────────┐
│ { Data } │
└─┬────────┘
  ├─ column name 1: value
  ├─ ...
  ├─ column name X: value
  ├─ internals
  ├─ operations
  └─ listeners
```

> ##### Data = The actual information stored in your models

### Queries

**NimbusDB** provides a powerful CRUD API for querying and manipulating your data. You can perform complex queries using a fluent and intuitive syntax, allowing you to filter, sort, and transform your data with ease. 

Unlike traditional databases, **NimbusDB**'s query engine is designed to be flexible and efficient, allowing you to perform complex data manipulations without having to write complex SQL queries or perform expensive joins.

> ##### Queries = Powerful API for interacting with your data

### Constraints and Validations

**NimbusDB** allows you to define constraints and validations on your models to ensure data integrity and consistency. Constraints can include things like primary keys, unique fields, and optional fields.

This helps prevent invalid or inconsistent data from being stored in your database, and allows you to enforce business rules and logic at the database level.

Unlike traditional databases, **NimbusDB**'s validations are not just limited to simple field-level checks. You can define complex validation logic with your own method/function that can access the entire record and even other records in the database, allowing you to implement sophisticated data integrity rules that go beyond what traditional databases can offer.

> ##### Constraints = Rules for your data, enforced by the database
>
> ##### Validations = Checks to ensure data integrity, can be simple or complex

### Relations

**NimbusDB** supports defining relationships between models, allowing you to connect your data in meaningful ways. You can define one-to-one, one-to-many, and many-to-many relationships between models, enabling you to represent complex data structures and associations.

With relations, you can easily query related data across models without having to perform expensive joins or complex queries. Unlike traditional databases, **NimbusDB**'s relations can be resolved lazily in data-level (not in database level), meaning that you can combine related data on the fly without using joins, allowing for more flexible and efficient data retrieval.

> ##### Relations = Connections between models, allowing you to link data together

### Indexes

Indexes in **NimbusDB** are called **Caches**, which are designed to optimize query performance by providing fast access to data based on primary keys. They're built automatically after you query a data/record for the first time, and will be used for subsequent queries to speed up data retrieval. 

Caches are optimized for primary key lookups, allowing you to quickly retrieve records based on their unique identifiers. This means that if you frequently query your data based on primary keys, you'll see significant performance improvements as the cache is built and utilized.

> ##### Caches = Indexes optimized for primary key lookups, built automatically after first query, updated automatically on data changes

### Reactive Bindings

One of the standout features of **NimbusDB** is its support for reactive bindings, which allow you to create dynamic and responsive data-flow in your game. With reactive bindings, you can create computed properties that automatically update when their dependencies change, allowing you to keep your UI and game state perfectly synchronized with your data.

> ##### Reactive Bindings = Data-level reactivity system to automate data synchronization and create dynamic data flows in your game

### Transactions

**NimbusDB** supports transactions, which allow you to group multiple database operations into a single unit of work. Transactions ensure that either all operations succeed or none of them are applied, providing atomicity and consistency to your database operations.

This is particularly useful when you need to perform multiple related operations that must either all succeed or all fail, such as updating multiple records or performing complex data manipulations. With transactions, you can ensure that your database remains in a consistent state even in the face of errors or failures.

> ##### Transactions = Grouping multiple operations into a single unit of work, ensuring atomicity and consistency

### Import/Export

**NimbusDB** provides built-in support for importing and exporting data (or even the model itself) in various formats, including CSV, JSON, JSONL, and NDBIN. This allows you to easily migrate data in and out of your database, whether you're moving data between different environments or integrating with external systems. 

The import/export functionality is designed to be flexible and efficient, allowing you to handle large datasets with ease. You can choose to import/export entire models, specific records, or even just a subset of fields, giving you full control over your data migration process.

> ##### Import/Export = Built-in support for migrating data in and out of your database in various formats


## Catalogs

In addition to models, **NimbusDB** also introduces the concept of **Catalogs**, which are collections of models that are designed to work together. Catalogs provide a way to organize and manage multiple models within a single database, allowing you to group related data together and define relationships between models across different catalogs.

In relational database terms, you can think of catalogs as databases, where each catalog contains multiple tables (models) that are related to each other. Catalogs allow you to create a more modular and organized database structure, making it easier to manage and maintain your data as your game grows in complexity.

```
┌─────────┐
│ Catalog │
└─┬───────┘
  ├─ name
  ├─ internals
  │ ┌─────────┐ ┌─────────┐ ┌─────────┐
  └─┤ Model 1 ├─┤ Model 2 ├─┤ Model 3 ├─>
    └─────────┘ └─────────┘ └─────────┘
```

> ##### Catalogs = Collections of models that are designed to work together, providing a way to organize and manage multiple models within a single database

### Model Relations

Unlike relations in models, which are actually "blind" relations, relations in catalogs are aware of each other, meaning that they can define a mutual relationship between two models in the same catalog.

```
┌─────────┐                         ┌─────────┐
│ Model 1 │ <── id ───────── id ──> │ Model 2 │
└─────────┘                         └─────────┘
```

> ##### Model Relations = Relationships between models that are aware of each other, allowing for more sophisticated data modeling

### Backup and Restore

Catalogs also provide built-in support for backing up and restoring your data, allowing you to easily create snapshots of your database and restore them when needed. This is particularly useful for managing different versions of your data during development, or for creating backups before making significant changes to your database.

With the backup and restore functionality, you can ensure that your data is safe and can be easily recovered in case of errors or data loss, giving you peace of mind as you work on your game.

> ##### Backup and Restore = Built-in support for creating snapshots of your database and restoring them when needed, ensuring data safety and recoverability


## Pipelines

Pipelines in **NimbusDB** are a powerful feature that allows you to perform complex data transformations and manipulations in a fluent and intuitive way. With pipelines, you can chain together multiple operations such as filtering, mapping, reducing, grouping, and more, to create sophisticated data processing workflows.

```
┌─────────┐        ┌────────────┐
│ Model 1 │<───────┤ Pipeline 1 │
└─────────┘        └─┬──────────┘
                     ├─ id
                     ├─ cursor
                     ├─ cache
                     ├─ operations
                     └─ internals
```

> ##### Pipelines = Chainable, lazy data transformation workflows for complex data processing tasks


## Relationship between Components

1. Models (tables) are the core building blocks of your database (catalogs).
2. Each model has a schema that defines its structure and constraints, and holds the actual data (records).
3. Records (rows) in models always defined as an object (struct) with field/column names as keys, even if the model is schemaless.
4. Models are placed within catalogs, which are collections of related models.
5. Catalogs can't have relationships with other catalogs, but models within the same catalog can have relations with each other.
6. You can perform simple queries on models. But for more complex data manipulations, you should use pipelines instead.
7. Pipelines are tied to models, not catalogs. You can create multiple pipelines for a single model, but pipelines can't span across multiple models.
8. There's no limit how many models you can have in a catalog, and how many records you can have in a model.
9. Also, there's no limit on how many catalog you can have in your game.
