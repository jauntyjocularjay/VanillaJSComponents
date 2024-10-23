
import {
    JSONCSS,
    UnsupportedJSONCSSError,
    PercentageOutOfRangeError
} from './JSONCSS.mjs'



// Pre-defined property strings
const display =
{
    block: 'block',
    inline: 'inline',
    inlineBlock: 'inline-block',
    flex: 'flex',
    grid: 'grid',
}

const event =
{
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
    }
}

const unit =
{
    /* No units */
    none: '',

    /* absolute length units */
    cm: 'cm',
    mm: 'mm',
    Q: 'Q',
    in: 'in',
    pc: 'pc',
    pt: 'pt',
    px: 'px',

    /* relative length units */
    em: 'em',
    rem: 'rem',
    vw: 'vw',
    vh: 'vh',
    lh: 'lh',
    rlh: 'rlh',
    percent: '%',
}

const flex =
{
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
        default: 'flex-default'
    }
}

const tag =
{
    html: 'html',
    div: 'div',
    ul: 'ul',
    ol: 'ol',
    li: 'li',
    a: 'a',
    img: 'img',
    figure: 'figure',
    figcaption: 'figcaption',
    p: 'p',
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    span: 'span',
    strong: 'strong',
    abbr: 'abbr',
    blockquote: 'blockquote',
    sub: 'sub',
    sup: 'sup',
    code: 'code',
    pre: 'pre',
    br: 'br',
    form: 'form',
    input: 'input',
    button: 'button',
    select: 'select',
    option: 'option',
    label: 'label',
    style: 'style',
    link: 'link',
    textarea: 'textarea',

    // Sectioning Content
    article: 'article',
    section: 'section',
    aside: 'aside',
    header: 'header',
    footer: 'footer',
    nav: 'nav',
}

class StyleSheet extends JSONCSS
{
    /**
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
        console.log('Object.keys(CSSSTyleSheet) =>',
            [
                'list : cssRules [Read only]',
                'string : ownerRule [Read only]',
                'CSSRule : ownerRule [Read only]',
                'boolean : disabled',
                'string : href [Read only]',
                'MediaList : media [Read only]',
                'Node : ownerNode [Read only]',
                'StyleSheet : parentStyleSheet [Read only]',
                'string : title [Read only]',
                'string : type [Read only]'
            ]
        )
    }
}

class Listener
{
    constructor(event, func) {
        this.event = event
        this.func = func
    }
}

class ListenerOnLoad extends Listener
{
    constructor(func) {
        super(event.page.load, func)
    }
}

class Classable
{
    constructor(element, classList=[], id=null) {
        this.element = element
        this.listeners = []
        this.addToClassList(classList)
        this.addID(id)
    }

    addToClassList(classList) {
        classList.forEach(clss => this.element.classList.add(clss))
    }

    removeFromClassList(classList) {
        classList.forEach(clss => this.element.classList.remove(clss))
    }

    addID(id) {
        if (id) this.element.id = id
    }

    pushEventListener(event=event.element.click, func = () => { }) {
        this.listeners.push(this.element.addEventListener(event, func))
    }

    /**
     * @todo debug this method
     * @param {Listener} listener 
     */
    pushEventListenerObj(listener={ event: null, func: () => { } }) {
        this.listeners.push(this.element.addEventListener(listener.event, listener.func))
    }

    innerHTML(innerHTML) {
        this.element.innerHTML += innerHTML
    }
}

class Container extends Classable
{
    constructor(element, classList=[], id=null){
        super(element, classList, id)
    }

    addContents(nodes=[]){
        nodes.forEach(node => {
            this.element.appendChild(node)
        })
    }
}

class TextElement extends Classable {
    constructor(element, classList=[], id=null) {
        super(element, classList, id)
    }

    addContent(content) {
        if (typeof content === 'string') {
            throw new InvalidContentArrayError()
        } else if (Array.isArray(content)) {
            content.forEach(item => {
                if (typeof item === 'string') {
                    throw new InvalidContentArrayError()
                }
                else {
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
    constructor(nodes=[], classList=[], id=null){
        super(document.createElement('article'), classList, id)
        this.addContents(nodes)
    }
}

class Img extends Classable {
    constructor(imgPath, alt = 'image', classList=[], id=null) {
        super(document.createElement('img'), classList, id)
        this.element.src = imgPath
        this.element.alt = alt
        this.addToClassList(classList)
        this.addID(id)

    }
}

class Div extends Classable {
    constructor(classList=[], id=null) {
        super(document.createElement('div'), classList, id)
        this.addToClassList(classList)
        this.addID(id)
    }
}

class DivBtn extends Div {
    constructor(textContent="Button", classList=[], id=null) {
        classList.push('btn')
        super(classList, id)
        const DivBtn = this.element
        const span = new Span(textContent)
        DivBtn.appendChild(span.element)
    }
}

class FlexBox extends Div {
    constructor(clss = flex.c, classList=[], id=null) {
        const flexClasses = [clss]
        classList.forEach(listedClass => flexClasses.push(listedClass))
        super(flexClasses, id)
    }
}

class Figure extends Classable {
    constructor(classList=[], id=null, header=new H1(), img=new Img(), figcaption=new Figcaption()) {
        super(document.createElement('figure'), classList, id)
        const figure = this.element

        if(header) figure.appendChild(header.element)
        if(img) figure.appendChild(img.element)
        if(figcaption) figure.appendChild(figcaption.element)
    }
}

class Figcaption extends TextElement {
    constructor(textContent="Figcaption", classList=[], id=null) {
        super(document.createElement('caption'), classList, id)
        this.textContent(textContent)
        this.addToClassList(classList)
        this.addID(id)
    }
}

class Form extends Classable {
    constructor(alias='form', classList=[], id=null) {
        super(document.createElement('form'), classList, id)
        const label = new Label(alias, alias)
        const br = new Br()
        this.addToClassList(classList)
        this.addID(id)
        this.element.name = alias
        this.element.appendChild(label.element)
        this.element.appendChild(br.element)

    }
}

class Button extends Classable {
    constructor(textContent = "click me", formName = null, classList=[], id=null) {
        super(document.createElement('button'), classList, id)
        const button = this.element
        this.addToClassList(classList)
        this.addID(id)
        button.for = formName
        button.textContent = textContent
    }
}

class TextArea extends Classable {
    constructor(textContent = "text area", classList=[], id=null) {
        super(document.createElement('textarea'), classList, id)
        this.element.textContent = textContent
        this.addToClassList(classList)
        this.addID(id)

    }

}

class Input extends Classable {
    constructor(typeStr, placeholder, textContent = null, forStr = null, classList=[], id=null) {
        super(document.createElement('input'), classList, id)
        const input = this.element
        this.addToClassList(classList)
        this.addID(id)
        input.type = typeStr
        input.placeholder = placeholder
        input.textContent = textContent

    }
}

class Select extends Classable {
    constructor(forStr='a form', selectionArray=[], classList=[], id=null) {
        super(document.createElement('select'), classList, id)
        const select = this.element
        const selections = [new OptionSelection()].concat(selectionArray)
        this.addToClassList(classList)
        this.addID(id)
        selections.forEach(selection => {
            const option = new Option(selection.value, selection.textContent)
            select.appendChild(option.element)
        })

    }
}

class Link extends Classable {
    constructor(href, rel, classList=[], id=null) {
        super(classList, id)
        const link = document.createElement('link')
        this.element = link
        this.addToClassList(classList)
        this.addID(id)
        link.href = href
        link.rel = rel

    }
}

class Style extends Classable {
    constructor(cssRules=[], classList=[], id=null) {
        super(document.createElement('style'), classList, id)
        {
            const style = this.element
            addCSSRules(style, cssRules)
        }
    }
}

class Br extends Classable {
    /**
     * @class Br
     *     a line break element
     * @extends Classable
     *     so that a designer can style it with CSS with classes and IDs
     */
    constructor(classList=[], id=null) {
        super(document.createElement('br'), classList, id)

    }
}

class H1 extends TextElement {
    constructor(textContent="H1", classList=[], id=null) {
        super(document.createElement('h1'), classList, id)
        this.textContent(textContent)
        this.addToClassList(classList)
        this.addID(id)

    }
}

class H2 extends TextElement {
    constructor(textContent="H2", classList=[], id=null) {
        super(document.createElement('h2'), classList, id)
        this.textContent(textContent)
        this.addToClassList(classList)
        this.addID(id)

    }
}

class H3 extends TextElement {
    constructor(textContent="H3", classList=[], id=null) {
        super(document.createElement('h3'), classList, id)
        this.textContent(textContent)
        this.addToClassList(classList)
        this.addID(id)

    }

}

class H4 extends TextElement {
    constructor(textContent="H4", classList=[], id=null) {
        super(document.createElement('h4'), classList, id)
        this.textContent(textContent="H4")
        this.addToClassList(classList)
        this.addID(id)

    }

}

class H5 extends TextElement {
    constructor(textContent="H5", classList=[], id=null) {
        super(document.createElement('h5'), classList, id)
        this.textContent(textContent)
        this.addToClassList(classList)
        this.addID(id)

    }

}

class H6 extends TextElement {
    constructor(textContent="H6", classList=[], id=null) {
        super(document.createElement('h6'), classList, id)
        this.textContent(textContent)
        this.addToClassList(classList)
        this.addID(id)

    }

}

class P extends TextElement
/**
 * @class P - the Paragraph element
 */
{
    constructor(textElementArray=[], classList=[], id=null) {
        super(document.createElement('p'), classList, id)
        this.addToClassList(classList)
        this.addID(id)
        this.addContent(textElementArray)
    }
}

class PSpan extends P
/**
 * @class PSpan - Paragraph Span
 */
{
    constructor(textContent='', classList=[], id=null){
        const span = [new Span(textContent)]
        super(span, classList, id)
    }
}

class Label extends TextElement
/**
 * @class Label - the label element
 */
{
    constructor(alias, textContent='label', classList=[], id=null) {
        super(document.createElement('label'), classList, id)
        this.textContent(textContent)
        this.addToClassList(classList)
        this.addID(id)
        this.element.for = alias

    }
}

class A extends TextElement
/**
 * @class A - the Anchor element
 */
{
    constructor(textContent='Anchor', href='#', classList=[], id=null) {
        super(document.createElement('a'), classList, id)
        this.textContent(textContent)
        this.element.href = href

    }
}

class Abbr extends TextElement {
    constructor(textContent = 'str', title = null, classList=[], id=null) {
        super(document.createElement('abbr'), classList, id)
        this.textContent(textContent)
        this.addToClassList(classList)
        this.addID(id)
        this.element.title = title

    }
}

class Blockquote extends TextElement
/**
 * @class Blockquote - the Blockquote element
 */
{
    constructor(textContent = 'str', classList=[], id=null) {
        super(document.createElement('blockquote'), classList, id)
        this.textContent(textContent)
        this.addToClassList(classList)
        this.addID(id)

    }
}

class Strong extends TextElement
/**
 * @class Strong - the Strong element
 */
{
    constructor(textContent = 'str', classList=[], id=null) {
        super(document.createElement('strong'), classList, id)
        this.textContent(textContent)
        this.addToClassList(classList)
        this.addID(id)

    }
}

class Sub extends TextElement
/**
 * @class Sub - the Subscript element
 */
{
    constructor(textContent = 'str', classList=[], id=null) {
        super(document.createElement('sub'), classList, id)
        this.textContent(textContent)
        this.addToClassList(classList)
        this.addID(id)

    }
}

class Sup extends TextElement
/**
 * @class Sup - the Superscript element
 */
{
    constructor(textContent = 'str', classList=[], id=null) {
        super(document.createElement('sup'), classList, id)
        this.textContent(textContent)
        this.addToClassList(classList)
        this.addID(id)

    }
}

class Span extends TextElement
/**
 * @class Span - the Span element
 */
{
    constructor(textContent='str', classList=[], id=null) {
        super(document.createElement('span'), classList, id)
        this.textContent(textContent)
        this.addToClassList(classList)
        this.addID(id)
    }
}

class Text extends Span
/**
 * @class Text - the Text element
 */
{
    constructor(textContent = 'str', classList=[], id=null) {
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
    constructor(textContent = 'str', classList=[], id=null) {
        super(document.createElement('pre'), classList, id)
        this.textContent(textContent)
        this.addToClassList(classList)
        this.addID(id)

    }
}

class Code extends TextElement
/**
 * @class Code - the Code element
 */
{
    constructor(textContent = 'str', classList=[], id=null) {
        super(document.createElement('pre'), classList, id)
        this.textContent(textContent)
        this.addToClassList(classList)
        this.addID(id)

    }
}

class OptionSelection
/**
 * @class OptionSelection - the OptionSelection element
 * @summary options for each selection element
 */
{
    constructor(value = 'prompt', textContent = 'Make a selection') {
        this.value = value
        this.textContent = textContent
    }
}

class Option extends TextElement
/**
 * @class Option - the Option element
 */
{
    constructor(value, textContent, classList=[], id=null) {
        super(document.createElement('option'), classList, id)
        const option = this.element
        option.value = value
        option.textContent = textContent

    }
}

class InvalidContentArrayError extends TypeError {
    constructor() {
        super('content must be an array of NodeElements, not a string or an array containing strings')
        this.name = 'InvalidContentArray'
    }

}

function getStylesheetByFileName(filename) {
    const stylesheets = Object.values(document.styleSheets)
    let result

    stylesheets.forEach(sheet => {
        if (sheet.href.indexOf(filename) !== -1) {
            result = sheet
        }
    })

    return result
}

function addAdoptedStyleSheet(rules) {
    const stylesheet = new StyleSheet(rules)
    document.adoptedStyleSheets.push(stylesheet.element)
}

export {
    // Constants
    display,
    flex,
    event,
    unit,
    tag,

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

    // Functions
    getStylesheetByFileName,
    addAdoptedStyleSheet,

    // JSONCSS
    JSONCSS,
    UnsupportedJSONCSSError,
    PercentageOutOfRangeError
}