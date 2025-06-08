# Agents Guidelines for Obsidian Merriam-Webster Plugin

## Allowed and Disallowed Directories
- **Do not modify** any files under `obsidian-developer-docs/` or `merriam-webster-docs/` and their subdirectories. Those folders hold reference documentation.
- All other files may be edited or created as needed.

## Project Goals
1. Build an Obsidian plugin that integrates Merriam-Webster dictionary and thesaurus services.
2. The plugin should show contextual menu entries when a single word is selected:
   - "Define" opens a side panel called **Definitions View** populated with dictionary definitions and synonyms.
   - "Synonyms" expands to a submenu listing alphabetically sorted synonyms. Choosing a synonym replaces the selected word.
3. The Definitions View should replace its contents when a new word is looked up and include its own search field.
4. Plugin settings must allow the user to store separate API keys for the dictionary and thesaurus endpoints.
5. The plugin is complete when these features work within any Obsidian vault and a clear how‑to guide is written.

## Development Notes
- Source files use TypeScript. Compile using `npm run dev` during development and `npm run build` for production builds.
- Follow the Obsidian API guidelines available in `obsidian-developer-docs/` and the Merriam‑Webster API references in `merriam-webster-docs/`.
- When implementing, ensure context-menu integration, side panel management, and replacement of highlighted text behave as described.
- Keep styles in `styles.css` and plugin logic mainly in `main.ts` or additional `src/` files as needed.

## Validation
- Run `npm run build` to type-check and bundle the plugin. Fix any TypeScript errors before committing.

## Roadmap Reference
For detailed implementation steps and priorities, see the [development plan](./DEVELOPMENT_PLAN.md) in the repository root. Keep this roadmap in mind to avoid feature creep and maintain focus.

