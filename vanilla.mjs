/*
import {
    display,
    event,
    unit,

    H1,
    H2,
    H3,
    P,
    Div,
    FlexBox,
    Form,
    Label,
    Select,
    Option,
    Input,
    Button,
    Listener,
} from 'path/to/vanilla.mjs'

*/
import { EasyAccessor } from './mod/ea/EasyAccessor.mjs'



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

/* const selections =
[
    {
        value: null,
        descriptor: null
    },
    {
        value: null,
        descriptor: null
    },
    {
        value: null,
        descriptor: null
    },
]
*/

class Classable extends EasyAccessor
{
    constructor(element, classList=[], id=null)
    {
        super()
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
}

class TextElement extends Classable 
{
    constructor(element, classList=[], id=null)
    {
        super(element, classList, id)
    }

    TextContent(textContent)
    {
        this.element.textContent = textContent
    }

    InnerHTML(innerHTML)
    {
        this.element.innerHTML += innerHTML
    }
}

class H1 extends TextElement
{
    constructor(textContent, classList=[], id=null)
    {
        super(document.createElement('h1'), classList, id)
        this.TextContent(textContent)
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
        this.TextContent(textContent)
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
        this.TextContent(textContent)
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
        this.TextContent(textContent)
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
        this.TextContent(textContent)
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
        this.TextContent(textContent)
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
        if(typeof content === 'string')
        {
            this.element.textContent = content
        }
        else if (Array.isArray(content))
        {
            this.AddContentFromArray(content)
        }
        return this.element
    }

    AddContentFromArray(content=[])
    {
        content.forEach(item => {
            if(typeof item === 'string'){
                this.textContent += item
            } else {
                this.element.appendChild(item)
            }
        })
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

class A extends TextElement
{
    constructor(textContent='str', href='#', classList=[], id=null)
    {
        super(document.createElement('a'), classList, id)
        this.TextContent(textContent)
        this.element.href = href
        return this.element
    }
}

class B extends TextElement
{
    constructor(innerHTML='str', classList=[], id=null)
    {
        super(document.createElement('b'), classList, id)
        this.InnerHTML(innerHTML)
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
        this.InnerHTML(innerHTML)
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
        this.InnerHTML(innerHTML)
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
        this.InnerHTML(innerHTML)
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
        this.InnerHTML(innerHTML)
        this.addToClassList(classList)
        this.addID(id)
        return this.element
    }
}

class Abbr extends TextElement
{
    constructor(innerHTML='str',title=null, classList=[], id=null)
    {
        super(document.createElement('abbr'), classList, id)
        this.InnerHTML(innerHTML)
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
        this.TextContent(textContent)
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
        this.TextContent(textContent)
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
        this.TextContent(textContent)
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
        this.TextContent(textContent)
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
        this.TextContent(textContent)
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
        this.TextContent(textContent)
        this.addToClassList(classList)
        this.addID(id)
        return this.element
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
        super(classList, id)
        classList ? classList.push('flexbox') : classList = ['flexbox']
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

class Figcaption extends TextElement
{
    constructor(textContent='str', classList=[], id=null)
    {
        super(document.createElement('figcaption'), classList, id)
        this.TextContent(textContent)
        this.addToClassList(classList)
        this.addID(id)
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

class Label extends TextElement
{
    constructor(forStr, textContent=null, classList=[], id=null)
    {
        super(document.createElement('label'), textContent, classList, id)
        this.TextContent(textContent)
        this.element.appendChild(new Br())
        this.addToClassList(classList)
        this.addID(id)
        this.element.for = forStr
        return this.element
    }
}

class Select extends Classable
{
    constructor(forStr='a form', valueDescriptorArray=[{value: 'Option Value', descriptor:'description'}], classList=[], id=null)
    {
        super(classList, id)
        const select = document.createElement('select')
        this.element = select
        this.addToClassList(classList)
        this.addID(id)
        valueDescriptorArray.forEach(pair => {
            const option = new Option(pair.value, pair.descriptor)
            select.appendChild(option)
        })
        return this.element
    }
}

class Option extends Classable
{
    constructor(value, descriptor, classList=[], id=null)
    {
        super()
        const option = document.createElement('option')
        this.element = option
        this.addToClassList(classList)
        this.addID(id)
        option.value = value
        option.textContent = descriptor
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

class Listener extends EasyAccessor
{
    constructor(selector, event, func)
    {
        super()
        const listener = document.querySelector(selector).addEventListener(event, func)
        this.element = listener
        return this.element
    }
}

export {
    display,
    event,
    unit,

    // Format elements
    Br,

    // Text Elements
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    P,
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

    // Containers
    Div,
    FlexBox,
    Form,
    Label,
    Img, 
    Figure, 
    Figcaption,

    // Input
    Button,
    Input,
    Select,
    Option,

    Listener,
}