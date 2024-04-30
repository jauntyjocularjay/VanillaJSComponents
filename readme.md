# VJSLibrary

Welcome to VJSLibrary. This is a library of VanillaJS intended to simplify the creation of HTML elements.

## Constants

- `display` holds valid values for display properties. These are used to hard-code display options.
- `event` holds valid values for events when creating event listeners
- `unit` holds valid values for units

## Arguments / Parameters

### Universal

All elements have the following arguments:
1. `classList`: an optional array of class strings
1. `id`: an optional ID string

### Specialized
1. `textContent`: a `string` or `array` of text format elements and/or `string`s 
1. `forStr`: a `string` that corresponds to the name of the corresponding container element

## Elements

### Format elements
- `Br`: Line Break

### Text Elements

All these elements take these arguments:
1. `textContent`
1. `classList`
1. `id`

#### Headers

- `H1` 
- `H2` 
- `H3` 
- `H4`
- `H5`
- `H6`

#### Text Containers

- `P` Paragraphs:

- `Figcaption` Figure Caption

#### Text Formatting
    
- `A` Anchor
- `B` Bold
- `Strong` Strong
- `I` Italic
- `S` Strike-Through
- `U` Underline 
- `Abbr` Abbreviation
- `Blockquote` Block Quote
- `Sub` Subscript
- `Sup` Superscript
- `Span` Span of text
- `Code` Code
- `Pre` Preformatted Text

## Containers
- `Div` A divider element
- `FlexBox` A `div` with `display: flex;`
- `Form` A Form container
- `Img` an image container
- `Figure`

## Container Sub elements
- `Label` Form Label
1. `forStr`
1. `textContent`
1. `classList`
1. `id`

## Input
- `Button` button 
- `Input` 
- `Select` drop-down
- `Option` elements for Select