@AGENTS.md

## Brand
Brand rules, tokens and assets live in `../campaignai-brand/`, the single source of truth.
- Read `../campaignai-brand/CLAUDE.md` (three binding rules) before any visual work.
- This site keeps its own copy: colours/fonts in `src/app/globals.css` (`@theme`), logos in
  `public/assets/logos/`. Copy values from `../campaignai-brand/tokens/tokens.css`; never invent or
  hardcode a brand value in a component.
- Never change the brand here. Change it in `campaignai-brand/`, then copy it across
  (`../campaignai-brand/docs/how-brand-changes-flow.md`). If a pattern here should become brand, propose it there.
