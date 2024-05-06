import {
    display,
    flex,
    event,
    unit,

    // Base Classes
    Selection,
    StyleSheet,
    Listener,
        ListenerOnLoad,

    // Classables
    // // Containers
    Img,
    Div,
        FlexBox,
    Figure,
    Form,
    Label,
    // // Input
    Button,
    Input,
    Select,
    Option,
    // // Format elements
    Br,
    //  // External Resource Links
    Link,
    Style,


    // Text Elements
    // // Headers
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    // // Body Text
    P,
    Figcaption,
    A,
    Strong,
    Abbr,
    Blockquote,
    Sub,
    Sup,
    Span,
    Code,
    Pre,

    addAdoptedStyleSheet,
} from './vanilla.mjs'

// Setup Style element
const cssRules = [
    'html { background-color: #333; }',
    'form, .card, .flexbox { background-color: #444; color: #ddd; border-radius: 16px; box-shadow: 1px 1px 4px #000, inset 1px 1px 2px #fff; width: 256px; min-height: 128px; margin: 8px 8px 8px 8px; padding: 8px 8px 16px 8px; }',
    '.box { min-width: 64px; min-height: 32px; }',
    '#box-001 { background-color: #c00; }',
    '#box-002 { background-color: #0c0; }',
    '#box-003 { background-color: #00c; }',
    'span.italic { font-style: italic; }',
    'span.bold { font-weight: bold; }',
    'span.underline { text-decoration: underline; }',
    'span.strikethrough { text-decoration: line-through; }'
]
const vlstyle = new StyleSheet(cssRules)
addAdoptedStyleSheet(vlstyle)

const listeners = {}

const page = document.querySelector('#page')
const card = new Div(['card'], 'card-id-001')
const h1 = new H1('Card H1', ['header1'])
const h2 = new H2('Card H2', ['header2'])
const h3 = new H3('Card H3', ['header3'])
const h4 = new H4('Card H4', ['header4'])
const h5 = new H5('Card H5', ['header5'])
const h6 = new H6('Card H6', ['header6'])
const cardParagraph = [
    'This is plain text. ',
    new Span('This is itlaicized, bolded, struck, and underlined text. ', ['italic', 'bold', 'strikethrough', 'underline'], 'span-text'),
    new Blockquote('This is a blockquote. ', ['blockquote'], 'blockquote-text'),
    new Pre('3====> ', ['pre'], 'pre-text'),
    new Span('This is a span. ', ['span'], 'span-text'),
    new Strong('This is strong text. ', ['strong'], 'strong-text'),
    new Sub('This is subscript text. ', ['subscript'], 'subscript-text'),
    new Sup('This is superscript text. ', ['superscript'], 'superscript-text'),
    new Abbr('abbr ', 'abbreviation', ['abbreviation'], 'abbreviation-text'),
    new A('This is a link. ', 'https://www.google.com', ['link'], 'link-text'),
    new Code('const message = "Hello, World!" ', ['code'], 'code-text'),
]
const p = new P('This is paragraph text. ', ['paragraph'], 'paragraph-demo')
const p2 = new P(cardParagraph, ['paragraph'], 'paragraph-demo-2')
const figure = new Figure('./img-100.png', 'This is a figure with an image and caption.', ['figure'], 'figure-id-001')
const form = new Form('form', ['form'], 'form-id-001')
const label = new Label('form', 'label', ['label'], 'label-id-001')
const options = [
    new Selection('option1', 'Option 1'),
    new Selection('option2', 'Option 2'),
    new Selection('option3', 'Option 3'),
    new Selection('option4', 'Option 4'),
    new Selection('option5', 'Option 5'),
]
const select = new Select('form', options, ['select'], 'select-id-001')

const input = new Input('text', 'text input', 'form', ['input'], 'input-id-001')
const formH1 = new H1('Form H1', ['header1'])

const button = new Button('Submit', 'form', ['button'], 'button-id-001')
const flexbox = new FlexBox('flexbox', [], 'flexbox-id-001')
const box1 = new Div(['box'], 'box-001')
const box2 = new Div(['box'], 'box-002')
const box3 = new Div(['box'], 'box-003')

page.appendChild(card)
card.appendChild(h1)
card.appendChild(h2)
card.appendChild(h3)
card.appendChild(h4)
card.appendChild(h5)
card.appendChild(h6)
card.appendChild(p)
card.appendChild(p2)
card.appendChild(figure)

page.appendChild(form)
form.appendChild(formH1)
form.appendChild(label)
form.appendChild(select)
form.appendChild(input)
form.appendChild(button)

page.appendChild(flexbox)
flexbox.appendChild(box1)
flexbox.appendChild(box2)
flexbox.appendChild(box3)


