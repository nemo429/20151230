# Our Styles Approach

All styles will follow a Block Element Modifier variant (BEM) format for file / naming organization. This will allow for a few things:

- Modularity
- Reusability
- Structure

The chosen BEM methodology for our case will be [SUIT CSS](http://suitcss.github.io/). Naming convention and patterns will follow those specific principles.

## Naming Convention

### Files

The following styles folders structure is as follows:

```bash
styles/
  |- base
  |- components
  |- utils
```

#### Base

Normalize, Bootstrap, plus some basic default element styles (colors, typography, fonts, margins, padding). This section only for foundational setup. All component-level styling should be part of the components themselves.

#### Components

Standalone, reusable components that have no knowledge of their parent container. Their only dependencies are the app’s base styles. We can safely delete a component when it’s no longer needed without causing changes elsewhere in our CSS.

Syntax: `[<namespace>-]<ComponentName>[--modifierName|-descendentName]`

This has several benefits when reading and writing HTML and CSS:

- It helps to distinguish between the classes for the root of the component, descendent elements, and modifications.
- It keeps the specificity of selectors low.
- It helps to decouple presentation semantics from document semantics.

#### Utils

Low-level structural and positional traits. Utilities can be applied directly to any element within a component.

Syntax: `u-[sm-|md-|lg-]<utilityName>`

Certain utilities have responsive variants using the patterns: `u-sm-<name>`, `u-md-<name>`, and `u-lg-<name>` for small, medium, and large Media Query breakpoints. (TODO: Adjust these breakpoints once it's finalized)

### Block Element Modifier

For a thorough explanation on BEM naming convention we're following, review the [SUIT naming conventions documentation](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md).

## Further Reading

- [SUIT CSS naming conventions](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md)
- [About HTML Semantics Front End Architecture](http://nicolasgallagher.com/about-html-semantics-front-end-architecture/)
- [BEM Introduction](http://getbem.com/introduction/)
