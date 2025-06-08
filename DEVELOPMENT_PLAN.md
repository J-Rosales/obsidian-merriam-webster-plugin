# Merriam-Webster Plugin Development Plan

This document outlines a step-by-step approach for building the plugin described in `AGENTS.md`.

## 1. Initial Setup
1. Install Node.js v16 or higher and run `npm install` in the repository root.
2. Use `npm run dev` during development for automatic compilation.
3. Run `npm run build` before committing to ensure type checks and a production bundle.

## 2. Project Structure
1. Keep main plugin logic in `main.ts` or additional files within a `src/` folder if needed.
2. Keep styles in `styles.css`.
3. Do not modify anything within `obsidian-developer-docs/` or `merriam-webster-docs/` directories.

## 3. Implement Settings Storage
1. Extend the existing settings interface to include two fields: `dictionaryApiKey` and `thesaurusApiKey`.
2. Add corresponding text fields in the settings tab so users can enter their keys.
3. Persist these keys using `loadData` and `saveData`.

## 4. API Integration Modules
1. Create helper modules or functions that call the Merriam‑Webster Dictionary and Thesaurus endpoints using the stored API keys.
2. Implement error handling for failed requests and missing API keys.
3. Ensure responses are parsed to extract definitions and synonyms.

## 5. Context Menu Integration
1. Register an editor context menu callback that triggers only when a single word is selected.
2. Add a `Define` menu item that opens a `Definitions View` side panel.
3. Add a `Synonyms` submenu listing synonyms alphabetically; selecting a synonym replaces the selected text.

## 6. Definitions View
1. Implement a dedicated view (e.g., extending `ItemView`) named `Definitions View`.
2. Include a search input inside the view to look up new words.
3. When a word is looked up again, replace the panel contents with the new results.
4. Display dictionary definitions first, followed by a list of synonyms.

## 7. Styling
1. Update `styles.css` to style context menus and the `Definitions View` pane.
2. Ensure styles integrate smoothly with Obsidian's dark and light themes.

## 8. Testing and Validation
1. Regularly run `npm run build` to catch TypeScript errors early.
2. Test the plugin within an Obsidian vault to verify context menu integration, side panel behavior, and word replacement.
3. Confirm that settings persist across Obsidian restarts.

## 9. Documentation
1. Write a how-to guide in the `README.md` describing setup, usage, and where to place API keys.
2. Mention known limitations and troubleshooting steps.

## 10. Finalization
1. Ensure the plugin works without errors and meets all project goals described in `AGENTS.md`.
2. Update version numbers, create a release, and publish according to the guidelines in `README.md`.

---
**Plan location:** This plan is stored at `./DEVELOPMENT_PLAN.md` in the repository root for easy reference during development.
