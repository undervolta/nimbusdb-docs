# NimbusDB Docs

This repository contains the documentation site for **NimbusDB**, a next-generation in-memory ORM and reactive query engine for GameMaker.

<p align="center">
    <a href="https://starlight.astro.build">
        <img src="https://astro.badg.es/v2/built-with-starlight/tiny.svg" alt="Built with Starlight">
    </a>
    <a href="https://pnpm.io">
        <img src="https://img.shields.io/badge/package_manager-pnpm-F69220" alt="pnpm">
    </a>
    <a href="https://opensource.org">
        <img src="https://img.shields.io/badge/license-MIT-blue" alt="MIT">
    </a>
    <a href="https://app.netlify.com/projects/nimbusdb-docs/deploys">
        <img src="https://api.netlify.com/api/v1/badges/d87d2179-ede9-494c-b9a1-15cc5b31c62b/deploy-status" alt="Netlify Status">
    </a>
    <a href="https://wakatime.com/badge/user/9b4a8591-67d0-436c-ad06-640807092852/project/c5c313b2-b8f8-4279-aac0-733c8957c4c7">
		<img src="https://wakatime.com/badge/user/9b4a8591-67d0-436c-ad06-640807092852/project/c5c313b2-b8f8-4279-aac0-733c8957c4c7.svg" alt="wakatime">
	</a>
</p>

> [!IMPORTANT]
> This project is archived due to the author no longer using GameMaker and has no plans for further development.

**Live docs:** [NimbusDB Docs](https://nimbusdb-docs.netlify.app)
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

## License

This documentation is licensed under [MIT License](LICENSE), same as the main NimbusDB project.
