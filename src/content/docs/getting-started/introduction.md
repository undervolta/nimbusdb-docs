---
title: Introduction
description: Learn about NimbusDB, its features, and how it can help you manage your data effectively.
---


## What's NimbusDB?

**NimbusDB** is a powerful, modular, and super-fast in-memory DBMS, ORM, and reactive query engine for GameMaker 2.3+. Bringing TypeScript/Node-level database abstractions to GML with support for relations, migrations, pipelines, and reactive bindings.


## Why NimbusDB?

**NimbusDB** is designed to provide a comprehensive and efficient solution for managing data in GameMaker projects. It offers a wide range of features that allow developers to easily create, manage, and query their data, while also providing powerful tools for handling complex relationships and ensuring data integrity. Whether you're building a simple game or a complex one, **NimbusDB** can help you manage your data effectively and efficiently.


## Key Features

- **Models**: Fast, schema-backed data storage featuring comprehensive CRUD operations and robust querying capabilities.

- **Catalogs**: Collection of models, designed to efficiently manage multiple models in a single database.

- **Relations & Joins**: Connect your data seamlessly using directional or mutual relations, with full support for advanced joins (`INNER`, `LEFT`, `RIGHT`, `FULL`, `CROSS`).

- **Reactivity**: Keep your UI and game states perfectly synchronized using `Computed`, `Watcher`, and `Derived` bindings.

- **Pipelines**: Chainable, lazy data transformation pipelines (`filter`, `map`, `reduce`, `group`, etc.) for streamlined data processing.

- **Transactions**: Isolated transaction contexts ensuring data integrity with complete commit and rollback capabilities.

- **Import / Export** : Seamless data migration, with built-in export/import support for `CSV`, `JSON`, `JSONL`, and `NDBIN` formats.


## How it Works?

**NimbusDB** operates as an in-memory database management system, allowing you to create and manage your data using models and catalogs. With a combination of relational database principles, object relational mapping, and reactive programming, **NimbusDB** provides a powerful and flexible way to handle your data.

You can define your data structures using models, establish relationships between them, and perform complex queries with ease. Additionally, the reactive features ensure that your game state and UI remain in sync with your data, providing a seamless experience for both developers and players.


## Limitations

1. **Client-Side Only** 

    **NimbusDB** is designed to run entirely on the client side, which means it does not support server-side operations (yet). Primarily, all data is stored in memory and will be lost when the game is closed, though it can be exported and imported using various formats.

2. **Safety**

    **NimbusDB** currenly only uses basic safety measures, such as input validation, error handling, and simple encryption. It does not implement advanced security features like authentication or access control, so it is not recommended for storing sensitive data, such as player information or game progress. Always ensure that you have proper backups of your data and consider using additional security measures if necessary.

3. **No Test For GameMaker <2.3**

    **NimbusDB** is built specifically for GameMaker 2.3 and later versions, and it may not be compatible with older versions of GameMaker.


## Extras

### Questions & Feedback

If you have any questions or feedback, feel free to join the [Discord server](https://discord.gg/pBrRGSXU96) or open an issue on the [GitHub repository](https://github.com/undervolta/NimbusDB).

### License

**NimbusDB** is licensed under the [MIT License](https://github.com/undervolta/NimbusDB/blob/main/LICENSE).

### Contributing

Contributions are welcome! Please see the [Contributing guide](https://github.com/undervolta/NimbusDB/blob/main/CONTRIBUTING.md) for more information.

### Support

If **NimbusDB** is useful to you, please consider sponsoring or supporting this project through [Ko-Fi](https://ko-fi.com/undervolta) or [Trakteer](https://trakteer.id/undervolta). Your support helps keep the project alive and thriving!
