import  {
    Tag,
    Unit
} from './Constants.mjs'
import {
    JSONCSS,
    UnsupportedJSONCSSError,
    PercentageOutOfRangeError,
    font
} from './JSONCSS.mjs'

// Library Keywords
/**
 * @constant noNodes
 * @constant noContent
 *      keywords for passing undefined instead of an empty arrays, empty strings
 */
const noNodes = undefined
const noContent = undefined

// Pre-defined property strings
const display = {
    block: 'block',
    inline: 'inline',
    inlineBlock: 'inline-block',
    flex: 'flex',
    grid: 'grid',
}

const event = {
    page: {
        load: 'load',
        resize: 'resize',
        refresh: 'refresh',
        scroll: 'scroll',
    },
    element: {
        change: 'change',
        click: 'click',
        input: 'input',
        submit: 'submit',
        update: 'update',
    },
    mouse: {
        click: 'click',
    },
}

const flex = {
    /*  pre-baked flexbox classes for vanilla.css */
    c: 'flex-c',
    cw: 'flex-cw',
    cwr: 'flex-cwr',
    cr: 'flex-cr',
    crw: 'flex-crw',
    crwr: 'flex-crwr',
    r: 'flex-r',
    rw: 'flex-rw',
    rwr: 'flex-rwr',
    rr: 'flex-rr',
    rrw: 'flex-rrw',
    rrwr: 'flex-rrwr',

    /*  flex-direction  */
    column: 'column',
    colReverse: 'column-reverse',
    row: 'row',
    rowReverse: 'row-reverse',

    /*  wrap  */
    nowrap: 'nowrap',
    wrap: 'wrap',
    wrapReverse: 'wrap-reverse',

    /*  basis  */
    auto: 'auto',

    /*  default flow  */
    flow: {
        default: 'flex-default',
    },
}

class StyleSheet extends JSONCSS {
    /**
     * @todo fix or remove stylesheet
     * @note from MDN regarding CSSRule interface
     *
     * @property cssText
     * Represents the textual representation of the rule, e.g. "h1,h2 { font-size: 16pt }" or "@import 'url'". To access or modify parts of the rule (e.g. the value of "font-size" in the example) use the properties on the specialized interface for the rule's type.
     *
     * @property cssTextparentRule Read only
     * Returns the containing rule, otherwise null. E.g. if this rule is a style rule inside an @media block, the parent rule would be that CSSMediaRule.
     *
     * @property cssTextparentStyleSheet Read only
     * Returns the CSSStyleSheet object for the style sheet that contains this rule
     *
     * @property cssTexttype Read only Deprecated
     * Returns one of the Type constants to determine which type of rule is represented.
     */
    constructor(cssRulesObj = null, keyframesObj = null) {
        super(cssRulesObj, keyframesObj)
    }

    cssRules() {
        return this.element.cssRules
    }

    ownerRule() {
        return this.element.ownerRule
    }

    diabled() {
        return this.element.disabled
    }

    href() {
        return this.element.href
    }

    media() {
        return this.element.media
    }

    ownerNode() {
        return this.element.ownerNode
    }

    parentStyleSheet() {
        return this.element.parentStyleSheet
    }

    title() {
        return this.element.title
    }

    type() {
        return this.element.type
    }

    properties() {
        console.log('Object.keys(CSSSTyleSheet) =>', [
            'list : cssRules [Read only]',
            'string : ownerRule [Read only]',
            'CSSRule : ownerRule [Read only]',
            'boolean : disabled',
            'string : href [Read only]',
            'MediaList : media [Read only]',
            'Node : ownerNode [Read only]',
            'StyleSheet : parentStyleSheet [Read only]',
            'string : title [Read only]',
            'string : type [Read only]',
        ])
    }
}

class Listener {
    constructor(event, func) {
        this.event = event
        this.func = func
    }
}

class ListenerOnLoad extends Listener {
    constructor(func) {
        super(event.page.load, func)
    }
}

class Classable {
    constructor(element, classList = [], id = '') {
        this.element = element
        this.listeners = []
        if (classList.length > 0) this.addToClassList(classList)
        if (id.length > 0) this.addID(id)
    }

    addToClassList(classList) {
        classList.forEach((clss) => this.element.classList.add(clss))
    }

    removeFromClassList(classList) {
        classList.forEach((clss) => this.element.classList.remove(clss))
    }

    addID(id) {
        if (id) this.element.id = id
    }

    pushEventListener(event = event.element.click, func = () => {}) {
        this.listeners.push(this.element.addEventListener(event, func))
    }

    /**
     * @todo debug this method
     * @param {Listener} listener
     */
    pushEventListenerObj(listener = { event: null, func: () => {} }) {
        this.listeners.push(
            this.element.addEventListener(listener.event, listener.func)
        )
    }

    innerHTML(innerHTML) {
        this.element.innerHTML += innerHTML
    }
}

class Container extends Classable {
    /**
     * @class Container - the parent class for container elements
     */
    constructor(element, nodes = [], classList = [], id = '') {
        super(element, classList, id)
        if (nodes.length > 0) this.addNodes(nodes)
    }

    addNodes(nodes = []) {
        nodes.forEach((node) => {
            this.element.appendChild(node.element)
        })
    }
}

class TextElement extends Classable {
    /**
     * @class TextElement - the parent class for text elements
     */
    constructor(element, classList = [], id = '') {
        super(element, classList, id)
    }

    addContent(content=[document.createElement('P')]) {
        if (typeof content === 'string') {
            throw new InvalidContentArrayError()
        } else if (Array.isArray(content)) {
            content.forEach((item) => {
                if (typeof item === 'string') {
                    throw new InvalidContentArrayError()
                } else {
                    this.element.appendChild(item.element)
                }
            })
        }
    }

    textContent(textContent) {
        this.element.textContent = textContent
    }
}

class Article extends Container {
    /**
     * @class Article - Article element
     */
    constructor(nodes = [], classList = [], id = '') {
        super(document.createElement(Tag.article), nodes, classList, id)
    }
}

class Section extends Container {
    /**
     * @class Section - Section element
     */
    constructor(nodes = [], classList = [], id = '') {
        super(document.createElement(Tag.section), nodes, classList, id)
    }
}

class SectionH extends Section {
    /**
     * @todo test
     */
    constructor(headerLevel = 1, textContent = '', classList = [], id = '') {
        let header

        switch(headerLevel) {
            case 1:
                header = new H1(textContent)
                break
            case 2:
                header = new H2(textContent)
                break
            case 3:
                header = new H3(textContent)
                break
            case 4:
                header = new H4(textContent)
                break
            case 5:
                header = new H5(textContent)
                break
            case 6:
                header = new H6(textContent)
                break
            default:
                throw new Error('Invalid Argument Error: Header Level must be between 1-6')
        }

        super([header], classList, id)
    }
}

class Footer extends Container {
    /**
     * @class Footer - Footer element
     */
    constructor(nodes = [], classList = [], id = '') {
        super(document.createElement('footer'), nodes, classList, id)
        this.addNodes(nodes)
    }
}

class Aside extends Container {
    /**
     * @class Aside - Aside element
     * @stub
     */
}

class Nav extends Container {
    /**
     * @class Nav - Navigation element
     */
    constructor(nodes = [], classList = [], id = '') {
        super(document.createElement('nav'), nodes, classList, id)
        this.addNodes(nodes)
    }
}

class Img extends Classable {
    /**
     * @class Img - Image element
     */
    constructor(imgPath, alt = 'image', classList = [], id = '') {
        super(document.createElement('img'), classList, id)
        this.element.src = imgPath
        this.element.alt = alt
    }
}

class Div extends Container {
    /**
     * @class Div - Division element
     */
    constructor(nodes = [], classList = [], id = '') {
        super(document.createElement('div'), nodes, classList, id)
    }
}

class DivBtn extends Div {
    /**
     * @class DivBtn - preformatted text element
     */
    constructor(span = new Span('DivBtn'), classList = [], id = '') {
        classList.push('btn')
        super(classList, id)
        const DivBtn = this.element
        DivBtn.appendChild(span.element)
    }
}

class FlexBox extends Div {
    /**
     * @todo work out a rational system and naming convention for Flexboxes. This implementation allows for ambiguity and it confusing.
     */
    constructor(classList = [flex.r], id = '') {
        super(classList, id)
    }
}

class Figure extends Classable {
    /**
     * @class Figure - Figure element
     */
    constructor(
        classList = [],
        id = '',
        header = new H1(),
        img = new Img(),
        figcaption = new Figcaption()
    ) {
        super(document.createElement('figure'), classList, id)
        const figure = this.element

        if (header) figure.appendChild(header.element)
        if (img) figure.appendChild(img.element)
        if (figcaption) figure.appendChild(figcaption.element)
    }
}

class Figcaption extends TextElement {
    /**
     * @class Figcaption - Figcaption element
     * @extends Classable
     *     so that a designer can style it with CSS with classes and IDs
     */
    constructor(textContent = 'Figcaption', classList = [], id = '') {
        super(document.createElement('caption'), classList, id)
        this.textContent(textContent)
    }
}

class Form extends Classable {
    /**
     * @class Form - Form element
     * @extends Classable
     *     so that a designer can style it with CSS with classes and IDs
     */
    constructor(alias = 'form', classList = [], id = '') {
        super(document.createElement('form'), classList, id)
        const label = new Label(alias, alias)
        const br = new Br()
        this.element.name = alias
        this.element.appendChild(label.element)
        this.element.appendChild(br.element)
    }
}

class Button extends Classable {
    /**
     * @class Button - Button element
     * @extends Classable
     *     so that a designer can style it with CSS with classes and IDs
     */
    constructor(
        textContent = 'click me',
        formName = null,
        classList = [],
        id = ''
    ) {
        super(document.createElement('button'), classList, id)
        const button = this.element
        button.for = formName
        button.textContent = textContent
    }
}

class TextArea extends Classable {
    /**
     * @class TextArea - TextArea element
     * @extends Classable
     *     so that a designer can style it with CSS with classes and IDs
     */
    constructor(textContent = 'text area', classList = [], id = '') {
        super(document.createElement('textarea'), classList, id)
        this.element.textContent = textContent
    }
}

class Input extends Classable {
    constructor(
        typeStr,
        placeholder,
        textContent = null,
        forStr = null,
        classList = [],
        id = ''
    ) {
        super(document.createElement('input'), classList, id)
        const input = this.element
        input.type = typeStr
        input.placeholder = placeholder
        input.textContent = textContent
    }
}

class Select extends Classable {
    constructor(
        forStr = 'a form',
        selectionArray = [],
        classList = [],
        id = ''
    ) {
        super(document.createElement('select'), classList, id)
        const select = this.element
        const selections = [new OptionSelection()].concat(selectionArray)
        selections.forEach((selection) => {
            const option = new Option(selection.value, selection.textContent)
            select.appendChild(option.element)
        })
    }
}

class Link extends Classable {
    constructor(href, rel, classList = [], id = '') {
        super(classList, id)
        const link = document.createElement('link')
        this.element = link
        link.href = href
        link.rel = rel
    }
}

class Style extends Classable {
    constructor(cssRules = [], classList = [], id = '') {
        super(document.createElement('style'), classList, id)
        {
            const style = this.element
            addCSSRules(style, cssRules)
        }
    }
}

class Br extends Classable {
    /**
     * @class Br - line break element
     * @extends Classable
     *     so that a designer can style it with CSS with classes and IDs
     */
    constructor(classList = [], id = '') {
        super(document.createElement('br'), classList, id)
    }
}

class H1 extends TextElement {
    /**
     * @class H1 - the Header level 1 element
     */
    constructor(textContent = 'H1', classList = [], id = '') {
        super(document.createElement('h1'), classList, id)
        this.textContent(textContent)
    }
}

class H2 extends TextElement {
    /**
     * @class H2 - the Header level 2 element
     */
    constructor(textContent = 'H2', classList = [], id = '') {
        super(document.createElement('h2'), classList, id)
        this.textContent(textContent)
    }
}

class H3 extends TextElement {
    /**
     * @class H3 - the Header level 3 element
     */
    constructor(textContent = 'H3', classList = [], id = '') {
        super(document.createElement('h3'), classList, id)
        this.textContent(textContent)
    }
}

class H4 extends TextElement {
    /**
     * @class H4 - the Header level 4 element
     */
    constructor(textContent = 'H4', classList = [], id = '') {
        super(document.createElement('h4'), classList, id)
        this.textContent(textContent)
    }
}

class H5 extends TextElement {
    /**
     * @class H5 - the Header level 5 element
     */
    constructor(textContent = 'H5', classList = [], id = '') {
        super(document.createElement('h5'), classList, id)
        this.textContent(textContent)
    }
}

class H6 extends TextElement {
    /**
     * @class H6 - the Header level 6 element
     */
    constructor(textContent = 'H6', classList = [], id = '') {
        super(document.createElement('h6'), classList, id)
        this.textContent(textContent)
    }
}

class P extends TextElement {
    /**
     * @class P - the Paragraph element
     */
    constructor(textElementArray = [], classList = [], id = '') {
        super(document.createElement('p'), classList, id)
        this.addContent(textElementArray)
    }
}

class PSpan extends P {
    /**
     * @class PSpan - Paragraph Span
     */
    constructor(textContent = '', classList = [], id = '') {
        super([new Span(textContent)], classList, id)
    }
}

class Label extends TextElement {
    /**
     * @class Label - the label element
     */
    constructor(alias, textContent = 'label', classList = [], id = '') {
        super(document.createElement('label'), classList, id)
        this.textContent(textContent)
        this.element.for = alias
    }
}

class A extends TextElement {
    /**
     * @class A - the Anchor element
     */
    constructor(textContent = 'Anchor', href = '#', classList = [], id = '') {
        super(document.createElement('a'), classList, id)
        this.textContent(textContent)
        this.element.href = href
    }
}

class Em extends TextElement {
    /**
     * @class Em - Emphasis Element
     */
    constructor(textContent = ''){
        super(document.createElement('em'), classList, id)
        this.textContent(textContent)
    }
}

class Abbr extends TextElement {
    /**
     * @class Abbr - the Abbreviation element
     */
    constructor(textContent = 'str', title = null, classList = [], id = '') {
        super(document.createElement('abbr'), classList, id)
        this.textContent(textContent)
        this.element.title = title
    }
}

class Blockquote extends TextElement {
    /**
     * @class Blockquote - the Blockquote element
     */
    constructor(textContent = 'str', classList = [], id = '') {
        super(document.createElement('blockquote'), classList, id)
        this.textContent(textContent)
    }
}

class Strong extends TextElement {
    /**
     * @class Strong - the Strong element
     */
    constructor(textContent = 'str', classList = [], id = '') {
        super(document.createElement('strong'), classList, id)
        this.textContent(textContent)
    }
}

class Sub extends TextElement {
    /**
     * @class Sub - the Subscript element
     */
    constructor(textContent = 'str', classList = [], id = '') {
        super(document.createElement('sub'), classList, id)
        this.textContent(textContent)
    }
}

class Sup extends TextElement {
    /**
     * @class Sup - the Superscript element
     */
    constructor(textContent = 'str', classList = [], id = '') {
        super(document.createElement('sup'), classList, id)
        this.textContent(textContent)
    }
}

class Span extends TextElement {
    /**
     * @class Span - the Span element
     */
    constructor(textContent = 'str', classList = [], id = '') {
        super(document.createElement('span'), classList, id)
        this.textContent(textContent)
    }
}

class Text extends Span {
    /**
     * @class Text - the Text element
     */
    constructor(textContent = 'str', classList = [], id = '') {
        const textClassList = ['plain-text'].concat(classList)
        super(textContent, textClassList, id)
    }
}

class Pre extends TextElement {
    /**
     * @class Pre
     *    a preformatted text element
     * @param {string} textContent
     *     textContent is the text to be displayed in the preformatted text element
     * @param {[string]} classList
     * @param {string} id
     * @returns
     *    returns the preformatted text element
     */
    constructor(textContent = 'str', classList = [], id = '') {
        super(document.createElement('pre'), classList, id)
        this.textContent(textContent)
    }
}

class Code extends TextElement {
    /**
     * @class Code - the Code format element for displaying code in fixed-width font
     */
    constructor(textContent = 'str', classList = [], id = '') {
        super(document.createElement('pre'), classList, id)
        this.textContent(textContent)
    }
}

class OptionSelection {
    /**
     * @class OptionSelection - the OptionSelection element
     * @summary options for each selection element
     */
    constructor(value = 'prompt', textContent = 'Make a selection') {
        this.value = value
        this.textContent = textContent
    }
}

class Option extends TextElement {
    /**
     * @class Option - the Option element
     */
    constructor(value, textContent, classList = [], id = '') {
        super(document.createElement('option'), classList, id)
        const option = this.element
        option.value = value
        option.textContent = textContent
    }
}

class InvalidContentArrayError extends TypeError {
    constructor() {
        super(
            'content must be an array of NodeElements, not a string or an array containing strings'
        )
        this.name = 'InvalidContentArray'
    }
}

function getStylesheetByFileName(filename) {
    /**
     * @todo fix or remove stylesheet
     */
    const stylesheets = Object.values(document.styleSheets)
    let result

    stylesheets.forEach((sheet) => {
        if (sheet.href.indexOf(filename) !== -1) {
            result = sheet
        }
    })

    return result
}

function addAdoptedStyleSheet(rules) {
    /**
     * @todo fix or remove stylesheet
     */
    const stylesheet = new StyleSheet(rules)
    document.adoptedStyleSheets.push(stylesheet.element)
}

export {
    // Library Keywords
    noContent,
    noNodes,

    // Constants
    display,
    flex,
    event,
    Tag,
    Unit,

    // Base Classes
    OptionSelection,
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
    PSpan,
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

    // Containers
    Article,
    Section,
    // Aside
    Footer,
    // Nav

    //composite
    SectionH,

    // Functions
    getStylesheetByFileName,
    addAdoptedStyleSheet,

    // JSONCSS
    JSONCSS,
    UnsupportedJSONCSSError,
    PercentageOutOfRangeError,
    font
}
