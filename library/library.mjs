import {
    // Constants
    display,
    flex,
    event,
    unit,

    // Base Classes
    Selection,
    StyleSheet,
    Listener,
    ListenerOnLoad,
    // FlexBoxClass,

    // Classables
    // // Containers
    Img,
    Div,
    DivBtn,
    FlexBox,
    Figure,
    Form,
    Label,
    // // Input
    Button,
    Input,
    TextArea,
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
    Text,
    Code,
    Pre,

    // Functions
    getStylesheetByFileName,
    addAdoptedStyleSheet,

    // JSONCSS
    JSONCSS,
    UnsupportedJSONCSSError,
    PercentageOutOfRangeError
} from '../vanilla.mjs'

class ClassableForm {
    constructor(alias = 'classable', classList = ['form', 'emboss'], id = 'classable-form') {
        const classableForm = new Form(alias, classList, id)
        this.element = classableForm.element
        const items = ['alias', 'classList', 'id']
        items.forEach(item => {
            const input = new Input('text', [`${item}-input`], `${item}-input`)
            classableForm.element.appendChild(input.element)
        })
    }
}

const CSSStyleRules = {
    html: {
        'background-color': '#444',
        color: '#fff'
    },
    '.form': {
        'background-color': '#333'
    }
}

const keyframes = {
    'keyframe-alias1': {
        from: {margin:'64px'},
        to: {margin: '0px'}
    },
    'keyframe-alias2': {
        25: { margin: '12px'},
        50: { margin: '8px' },
    },
    'keyframe-alias3': {
        from: { margin: '16px' },
        25: { margin: '12px' },
        50: { margin: '8px' },
        75: { margin: '4px' },
        to: { margin: '0px' }
    }
}

const jsoncss = new StyleSheet(CSSStyleRules, keyframes)
const divForm = new ClassableForm('classable', ['form', 'emboss'], 'form-classable')

jsoncss.adopt()
const wrapper = document.querySelector('div#page')
wrapper.appendChild(divForm.element)


