# Agent Guidelines for guivinicius.github.io

This document provides context, conventions, and operational guidance for AI coding agents working on this repository.

## Repository Overview

`guivinicius.github.io` is the personal portfolio and landing website of Guilherme Vinicius Moreira, a software engineer based in Vancouver, Canada. The site is hosted on GitHub Pages with the custom domain `guivinicius.com`.

## Technology Stack

- **Markup**: Static HTML5 (`index.html`)
- **Styling**: Tailwind CSS v3 (`css/input.css` compiled to `css/application.css`)
- **Analytics**: PostHog JavaScript web snippet (`https://us.i.posthog.com`)
- **Deployment**: Static GitHub Pages via `CNAME`

## Project Structure

```
.
├── CNAME                  # Custom domain configuration (guivinicius.com)
├── css/
│   ├── application.css    # Compiled Tailwind stylesheet (committed for static hosting)
│   └── input.css          # Tailwind CSS entrypoint directives (@tailwind base, etc.)
├── index.html             # Single-page website layout, metadata, content, and scripts
├── llm.txt                # Structured site and author summary for LLM agents
├── package.json           # Node scripts and Tailwind CSS devDependency
├── package-lock.json      # Dependency lockfile
├── README.md              # Project documentation
├── robots.txt             # Search engine crawl rules and sitemap reference
├── sitemap.xml            # XML sitemap for search indexation
└── tailwind.config.js     # Tailwind content paths and theme configuration
```

## Development Commands

```bash
# Install dependencies
npm install

# Compile Tailwind CSS
npm run build

# Watch and rebuild Tailwind CSS on file changes
npm run watch
```

## Conventions and Best Practices

1. **Static and Dependency-Light**: Keep the site static without runtime JavaScript frameworks. Vanilla DOM scripts for client analytics only.
2. **Tailwind Styling**: When adding or updating utility classes in `index.html`, re-run `npm run build` to compile `css/application.css`.
3. **SEO and Social Sharing**: Maintain Open Graph, Twitter Card, and Schema.org JSON-LD structured data in `<head>` whenever site title, description, or project metadata changes.
4. **External Links**: Use `target="_blank"` and `rel="noopener noreferrer"` for external anchors. PostHog link tracking uses `event.target.closest('a')` to capture clicks.
5. **LLM Context Files**: Keep `llm.txt` synchronized with projects listed in `index.html`.
