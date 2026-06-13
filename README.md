# NimbusDB Docs

This repository contains the documentation site for **NimbusDB**, a next-generation in-memory ORM and reactive query engine for GameMaker.

Built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build).

**Live docs:** [NimbusDB Docs](https://nimbusdb.lefinitas.com)
**Main library:** [NimbusDB](https://github.com/undervolta/NimbusDB)


## Project Structure

```
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   └── docs/
│   │       ├── getting-started/
│   │       ├── concepts/
│   │       ├── core/
│   │       ├── pipeline/
│   │       ├── joins/
│   │       ├── reactivity/
│   │       ├── io/
│   │       ├── migration/
│   │       ├── api-reference/
│   │       └── guides/
│   └── content.config.ts
├── astro.config.mjs
└── package.json
```

Each `.md`/`.mdx` file in `src/content/docs/` corresponds to a page on the docs site, routed based on its folder structure. Sidebar navigation is configured in `astro.config.mjs`.


## Development

Install dependencies:

```sh
pnpm install
```

Start the local dev server:

```sh
pnpm dev
```

This starts a local server at `localhost:4321`.

Build for production:

```sh
pnpm build
```

Preview the production build:

```sh
pnpm preview
```

## Contributing

Found a typo, unclear explanation, or missing docs? Contributions are welcome!

1. Fork this repository
2. Make your changes
3. Open a pull request with a brief description of what you changed and why

For larger changes (new sections, restructuring), consider opening a [discussion](https://github.com/undervolta/NimbusDB/discussions) or issue first to align on direction.


## Community

- [GitHub Discussions](https://github.com/undervolta/NimbusDB/discussions), questions, suggestions, feedback
- [GitHub Issues](https://github.com/undervolta/NimbusDB/issues), bug reports and feature requests
- [Discord](https://discord.gg/UsqbHSN23h), chat with the community

## Support

NimbusDB is free and open source, maintained in my spare time. If it's useful to you, consider supporting development:

- [Ko-fi](https://ko-fi.com/undervolta)
- [Trakteer](https://trakteer.id/undervolta)

Every bit helps keep the project going!

## License

This documentation is licensed under [MIT License](LICENSE), same as the main NimbusDB project.
