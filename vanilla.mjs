import { EasyAccessor } from './mod/ea/EasyAccessor.mjs'



class Selection
{
    constructor(value='null', textContent='Make a selection')
    {
        this.value = value
        this.textContent = textContent
    }

}

class StyleSheet
{
    constructor(rules=[])
    {
        const sheet = new CSSStyleSheet()
        this.element = sheet
        rules.forEach(rule => sheet.insertRule(rule))
        return this.element
    }

    // properties()
    // {
    //     return [
    //         'list : cssRules',
    //         'string : ownerRule',
    //         'boolean : disabled',
    //         'string : href',
    //         'MediaList : media',
    //         'Node : ownerNode',
    //         'StyleSheet : parentStyleSheet',
    //         'string : title',
    //         'string : type'
    //     ]
    // }
}

class Listener
{
    constructor(selector, event, func)
    {
        const listener = document.querySelector(selector).addEventListener(event, func)
        this.element = listener
        return this.element
    }
}

class ListenerOnLoad extends Listener
{
    constructor(selector, func)
    {
        super(selector, event.page.load, func)
        return this.element
    }

}

class Classable
{
    constructor(element, classList=[], id=null)
    {
        this.element = element
    }

    addToClassList(classList)
    {
        classList.forEach(clss => this.element.classList.add(clss))
    }

    removeFromClassList(classList)
    {
        classList.forEach(clss => this.element.classList.remove(clss))
    }

    addID(id)
    {
        if(id) this.element.id = id
    }

    innerHTML(innerHTML)
    {
        this.element.innerHTML += innerHTML
    }
}

class Img extends Classable
{
    constructor(imgPath, alt='image', classList=[], id=null)
    {
        super(document.createElement('img'), classList, id)
        this.element.src = imgPath
        this.element.alt = alt
        this.addToClassList(classList)
        this.addID(id)
        return this.element
    }
}

class Div extends Classable
{
    constructor(classList=[], id=null)
    {
        super(document.createElement('div'), classList, id)
        this.addToClassList(classList)
        this.addID(id)
        return this.element
    }
}

class FlexBox extends Div
{
    constructor(classList=[], id=null)
    {
        classList ? classList.push(flex.c) : classList = [flex.c]
        super(classList, id)
        return this.element
    }
}

class Figure extends Classable
{
    constructor(imgPath, captionTextContent='str', classList=[], id=null)
    {
        super(document.createElement('figure'), classList, id)
        const imgClasses = ['img']
        classList.forEach(clss => imgClasses.push(clss))
        this.img = new Img(imgPath, captionTextContent, classList, id+'-fig-img')

        const captionClasses = ['caption']
        classList.forEach(clss => captionClasses.push(clss))
        this.figcapture = new Figcaption(captionTextContent, classList, id+'-fig-caption')

        this.addToClassList(classList)
        this.addID(id)
        this.element.appendChild(this.img)
        this.element.appendChild(this.figcapture)
        return this.element
    }
}

class Form extends Classable
{
    constructor(nameStr='form', classList=[], id=null)
    {
        super(document.createElement('form', classList, id))
        this.addToClassList(classList)
        this.addID(id)
        this.element.name = nameStr
        this.element.appendChild(new Label(nameStr))
        return this.element
    }
}

class Button extends Classable
{
    constructor(textContent="click me", formName=null, classList=[], id=null)
    {
        super(classList, id)
        const button = document.createElement('button')
        this.element = button
        this.addToClassList(classList)
        this.addID(id)
        button.for = formName
        button.textContent = textContent
        return this.element
    }
}

class Input extends Classable
{
    constructor(typeStr, placeholder, forStr=null, classList=[], id=null)
    {
        super(classList, id)
        const input = document.createElement('input')
        this.element = input
        this.addToClassList(classList)
        this.addID(id)
        input.type = typeStr
        input.placeholder = placeholder
        return this.element
    }
}

class Select extends Classable
{
    constructor(forStr='a form', selectionArray=[], classList=[], id=null)
    {
        super(classList, id)
        const select = document.createElement('select')
        const selections = [new Selection()]
        this.element = select
        this.addToClassList(classList)
        this.addID(id)
        selections.concat(selectionArray)
        selections.forEach(selection => {
            const option = new Option(selection.value, selection.textContent)
            select.appendChild(option)
        })
        return this.element
    }
}

class Link extends Classable {
    constructor(href, rel, classList=[], id=null)
    {
        super(classList, id)
        const link = document.createElement('link')
        this.element = link
        this.addToClassList(classList)
        this.addID(id)
        link.href = href
        link.rel = rel
        return this.element
    }
}

class StyleSheetLink extends Link {
    constructor(href, classList=[], id=null)
    {
        super(href, 'stylesheet', classList, id)
        return this.element
    }

}

class Br extends Classable
{
    constructor()
    {
        super(document.createElement('br'))
        return this.element
    }
}

class TextElement extends Classable 
{
    constructor(element, classList=[], id=null)
    {
        super(element, classList, id)
    }

    addContent(content)
    {
        if(typeof content === 'string')
        {
            this.element.textContent = content
        }
        else if (Array.isArray(content))
        {
            this.addContentFromArray(content)
        }
    }

    addContentFromArray(content=[])
    {
        content.forEach(item => {
            if(typeof item === 'string'){
                this.textContent += item
            } else {
                this.element.appendChild(item)
            }
        })
    }

    textContent(textContent)
    {
        this.element.textContent = textContent
    }
}

class H1 extends TextElement
{
    constructor(textContent, classList=[], id=null)
    {
        super(document.createElement('h1'), classList, id)
        this.textContent(textContent)
        this.addToClassList(classList)
        this.addID(id)
        return this.element
    }
}

class H2 extends TextElement
{
    constructor(textContent, classList=[], id=null)
    {
        super(document.createElement('h2'), classList, id)
        this.textContent(textContent)
        this.addToClassList(classList)
        this.addID(id)
        return this.element
    }
}

class H3 extends TextElement
{
    constructor(textContent, classList=[], id=null)
    {
        super(document.createElement('h3'), classList, id)
        this.textContent(textContent)
        this.addToClassList(classList)
        this.addID(id)
        return this.element
    }

}

class H4 extends TextElement
{
    constructor(textContent, classList=[], id=null)
    {
        super(document.createElement('h4'), classList, id)
        this.textContent(textContent)
        this.addToClassList(classList)
        this.addID(id)
        return this.element
    }

}

class H5 extends TextElement
{
    constructor(textContent, classList=[], id=null)
    {
        super(document.createElement('h5'), classList, id)
        this.textContent(textContent)
        this.addToClassList(classList)
        this.addID(id)
        return this.element
    }

}

class H6 extends TextElement
{
    constructor(textContent, classList=[], id=null)
    {
        super(document.createElement('h6'), classList, id)
        this.textContent(textContent)
        this.addToClassList(classList)
        this.addID(id)
        return this.element
    }

}

class P extends TextElement
{
    constructor(content=null, classList=[], id=null)
    {
        super(document.createElement('p'), classList, id)
        this.addToClassList(classList)
        this.addID(id)
        this.addContent(content)
        return this.element
    }
}

class Figcaption extends TextElement
{
    constructor(textContent=null, classList=[], id=null)
    {
        super(document.createElement('figcaption'), classList, id)
        this.textContent(textContent)
        this.addToClassList(classList)
        this.addID(id)
        return this.element
    }
}

class Label extends TextElement
{
    constructor(forStr, textContent=null, classList=[], id=null)
    {
        super(document.createElement('label'), textContent, classList, id)
        this.textContent(textContent)
        this.element.appendChild(new Br())
        this.addToClassList(classList)
        this.addID(id)
        this.element.for = forStr
        return this.element
    }
}

class A extends TextElement
{
    constructor(textContent='str', href='#', classList=[], id=null)
    {
        super(document.createElement('a'), classList, id)
        this.textContent(textContent)
        this.element.href = href
        return this.element
    }
}

class B extends TextElement
{
    constructor(innerHTML='str', classList=[], id=null)
    {
        super(document.createElement('b'), classList, id)
        this.innerHTML(innerHTML)
        this.addToClassList(classList)
        this.addID(id)
        return this.element
    }
}

class Strong extends TextElement
{
    constructor(innerHTML='str', classList=[], id=null)
    {
        super(document.createElement('strong'), classList, id)
        this.innerHTML(innerHTML)
        this.addToClassList(classList)
        this.addID(id)
        return this.element
    }
}

class I extends TextElement
{
    constructor(innerHTML='str', classList=[], id=null)
    {
        super(document.createElement('i'), classList, id)
        this.innerHTML(innerHTML)
        this.addToClassList(classList)
        this.addID(id)
        return this.element
    }
}

class S extends TextElement
{
    constructor(innerHTML='str', classList=[], id=null)
    {
        super(document.createElement('s'), classList, id)
        this.innerHTML(innerHTML)
        this.addToClassList(classList)
        this.addID(id)
        return this.element
    }
}

class U extends TextElement
{
    constructor(innerHTML='str', classList=[], id=null)
    {
        super(document.createElement('u'), classList, id)
        this.innerHTML(innerHTML)
        this.addToClassList(classList)
        this.addID(id)
        return this.element
    }
}

class Abbr extends TextElement
{
    constructor(textContent='str',title=null, classList=[], id=null)
    {
        super(document.createElement('abbr'), classList, id)
        this.textContent(textContent)
        this.addToClassList(classList)
        this.addID(id)
        this.element.title = title
        return this.element
    }
}

class Blockquote extends TextElement
{
    constructor(textContent='str', classList=[], id=null)
    {
        super(document.createElement('blockquote'), classList, id)
        this.textContent(textContent)
        this.addToClassList(classList)
        this.addID(id)
        return this.element
    }
}

class Sub extends TextElement
{
    constructor(textContent='str', classList=[], id=null)
    {
        super(document.createElement('sub'), classList, id)
        this.textContent(textContent)
        this.addToClassList(classList)
        this.addID(id)
        return this.element
    }
}

class Sup extends TextElement
{
    constructor(textContent='str', classList=[], id=null)
    {
        super(document.createElement('sup'), classList, id)
        this.textContent(textContent)
        this.addToClassList(classList)
        this.addID(id)
        return this.element
    }
}

class Span extends TextElement
{
    constructor(textContent='str', classList=[], id=null)
    {
        super(document.createElement('span'), classList, id)
        this.textContent(textContent)
        this.addToClassList(classList)
        this.addID(id)
        return this.element
    }
}

class Pre extends TextElement // Preformatted Text
{
    constructor(textContent='str', classList=[], id=null)
    {
        super(document.createElement('pre'), classList, id)
        this.textContent(textContent)
        this.addToClassList(classList)
        this.addID(id)
        return this.element
    }
}

class Code extends TextElement
{
    constructor(textContent='str', classList=[], id=null)
    {
        super(document.createElement('pre'), classList, id)
        this.textContent(textContent)
        this.addToClassList(classList)
        this.addID(id)
        return this.element
    }
}

class Option extends TextElement
{
    constructor(value, textContent, classList=[], id=null)
    {
        super(classList, id)
        const option = document.createElement('option')
        this.element = option
        option.value = value
        option.textContent = textContent
        return this.element
    }
}

const display = {
    block:'block',
    inline:'inline',
    inlineBlock:'inline-block',
    flex:'flex',
    grid:'grid',
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
        input: 'input',
        submit: 'submit',
        update: 'update',
    },
    mouse: {
        click: 'click',
    }
}

const flex = {
/*
    flex classes for flexboxes
*/
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
}

const unit = {
    // absolute length units
    cm: 'cm',
    mm: 'mm',
    Q: 'Q',
    in: 'in',
    pc: 'pc',
    pt: 'pt',
    px: 'px',

    // relative length units
    em: 'em',
    rem: 'rem',
    vw: 'vw',
    vh: 'vh',
    lh: 'lh',
    rlh: 'rlh',
    percent: '%',
}

const cssRules = [
    `html {
        background-color: #333;
    }`,
    `.flex-c {
        display: flex;
        flex-flow: column nowrap;
    }`,
    `.flex-cw {
        display: flex;
        flex-flow: column wrap;
    }`,
    `.flex-cwr {
        display: flex;
        flex-flow: column wrap-reverse;
    }`,
    `.flex-cr {
        display: flex;
        flex-flow: column-reverse nowrap;
    }`,
    `.flex-crw {
        display: flex;
        flex-flow: column-reverse wrap;
    }`,
    `.flex-crwr {
        display: flex;
        flex-flow: column-reverse wrap-reverse;
    }`,
    `.flex-r {
        display: flex;
        flex-flow: row nowrap;
    }`,
    `.flex-rw {
        display: flex;
        flex-flow: row wrap;
    }`,
    `.flex-rwr {
        display: flex;
        flex-flow: row wrap-reverse;
    }`,
    `.flex-rr {
        display: flex;
        flex-flow: row-reverse nowrap;
    }`,
    `.flex-rrw {
        display: flex;
        flex-flow: row-reverse wrap;
    }`,
    `.flex-rrwr {
        display: flex;
        flex-flow: row-reverse wrap-reverse;
    }`
]

const vcss = new StyleSheet(cssRules)
console.log('vcss:', vcss)

export {
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
        StyleSheetLink,


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
    B,
    Strong,
    I,
    S,
    U,
    Abbr,
    Blockquote,
    Sub,
    Sup,
    Span,
    Code,
    Pre,

}