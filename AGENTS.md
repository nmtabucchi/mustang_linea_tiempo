# AGENTS.md - Mustang: Linea de Tiempo

## Constitution

Read `specs/constitution.md` at the start of every session. All code must follow its principles.

## Key Rules

1. **JavaScript only** - No TypeScript
2. **Tailwind CSS only** - No inline CSS, no other CSS frameworks
3. **Next.js App Router** - Use App Router exclusively
4. **Spec-Driven Development** - Document before implementing
5. **Componentization** - Small, reusable, single-responsibility components

## Project Structure

```
/app
  /components    # Reusable UI components
  /public        # Static assets
  /styles        # Global styles (Tailwind config)
  /lib           # Business logic and utilities
  /data          # Static data
```

## Architecture Principles

- Separate visual components from data
- Separate business logic from configuration
- Low coupling, high readability
- No unnecessary duplication
- Descriptive naming

## Responsive Breakpoints (Tailwind)

- Mobile: default
- Tablet: `md:`
- Laptop: `lg:`
- Desktop: `xl:`

## Components to Build

- Header (fixed navbar)
- Hero section
- Timeline
- TimelineCard
- Button
- SectionTitle

## Performance Rules

- Use next/image for all images
- Lazy load below-the-fold content
- Avoid unnecessary re-renders
- Smooth scroll for navigation

## Interactions

- Hover states on interactive elements
- Smooth transitions (no complex animations)
- Fixed navbar with smooth scroll to sections

## Do NOT Use

- TypeScript
- CSS frameworks other than Tailwind
- Unnecessary libraries
- Complex animations without justification
- Inline CSS (except rare cases)

## Skills Available

- `frontend-design` - Design principles and visual guidelines
- `tailwind-css-patterns` - Tailwind CSS patterns and utilities

## MCP Configuration

### Figma MCP
- Location: `.cursor/mcp.json`
- Environment Variable: `FIGMA_API_KEY` (required)
- See `.cursor/Figma-MCP-README.md` for setup instructions