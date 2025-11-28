# FancyDocs

Official documentation for all plugins and web services developed by FancyInnovations.

# Getting Started

To start the docs locally, clone the repository and run:

```bash
npm install
npm run dev
```

Then open your browser and navigate to `http://localhost:3001`.

The markdown files are located in the `content/docs/` directory. You can edit these files to update the documentation.

# Migration from old docs

Things to consider when migrating from the old docs to the new docs:
- Change file extensions from `.md` to `.mdx`
- Remove first heading and put title in the [frontmatter](https://fumadocs.dev/docs/ui/page-conventions#file)
- Change link of every image from `../static/{path}` to `/{path}`
- Replace callouts with `!!!` syntax to the [new syntax](https://fumadocs.dev/docs/ui/markdown#callouts)