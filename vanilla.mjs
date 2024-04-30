/*
import {
    display,
    event,
    unit,

    selections,

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
    px: 'px',
    em: 'em',
    rem: 'rem',
    vw: 'vw',
    vh: 'vh',
    percent: '%',
}

const selections =
[
//     {
//         value: null,
//         descriptor: null
//     },
//     {
//         value: null,
//         descriptor: null
//     },
//     {
//         value: null,
//         descriptor: null
//     },
]

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
    constructor(textContent='str', classList=[], id=null)
    {
        super(document.createElement('p'), classList, id)
        this.TextContent(textContent)
        this.addToClassList(classList)
        this.addID(id)
        return this.element
    }
}

/*** @todo devise a way to append element to P ***/
/*** @todo test ***/
class B extends TextElement
{
    constructor(textContent='str', classList=[], id=null)
    {
        super(document.createElement('b'), classList, id)
        this.TextContent(textContent)
        this.addToClassList(classList)
        this.addID(id)
        return this.element
    }
}

/*** @todo devise a way to append element to P ***/
/*** @todo test ***/
class Strong extends TextElement
{
    constructor(textContent='str', classList=[], id=null)
    {
        super(document.createElement('strong'), classList, id)
        this.TextContent(textContent)
        this.addToClassList(classList)
        this.addID(id)
        return this.element
    }
}

/*** @todo devise a way to append element to P ***/
/*** @todo test ***/
class I extends TextElement
{
    constructor(textContent='str', classList=[], id=null)
    {
        super(document.createElement('i'), classList, id)
        this.TextContent(textContent)
        this.addToClassList(classList)
        this.addID(id)
        return this.element
    }
}

/*** @todo devise a way to append element to P ***/
/*** @todo test ***/
class S extends TextElement
{
    constructor(textContent='str', classList=[], id=null)
    {
        super(document.createElement('s'), classList, id)
        this.TextContent(textContent)
        this.addToClassList(classList)
        this.addID(id)
        return this.element
    }
}

/*** @todo devise a way to append element to P ***/
/*** @todo test ***/
class U extends TextElement
{
    constructor(textContent='str', classList=[], id=null)
    {
        super(document.createElement('u'), classList, id)
        this.TextContent(textContent)
        this.addToClassList(classList)
        this.addID(id)
        return this.element
    }
}

/*** @todo devise a way to append element to P ***/
/*** @todo test ***/
class Abbr extends TextElement
{
    constructor(textContent='str',title=null, classList=[], id=null)
    {
        super(document.createElement('abbr'), classList, id)
        this.TextContent(textContent)
        this.addToClassList(classList)
        this.addID(id)
        this.element.title = title
        return this.element
    }
}

/*** @todo devise a way to append element to P ***/
/*** @todo test ***/
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

/*** @todo devise a way to append element to P ***/
/*** @todo test ***/
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

/*** @todo devise a way to append element to P ***/
/*** @todo test ***/
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

/*** @todo devise a way to append element to P ***/
/*** @todo test ***/
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

/*** @todo devise a way to append element to P ***/
/*** @todo test ***/
class Pre extends TextElement
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
    constructor(imgPath, textContent='str', classList=[], id=null)
    {
        super(document.createElement('figure'), classList, id)
        const imgClasses = ['img']
        classList.forEach(clss => imgClasses.push(clss))
        this.img = new Img(imgPath, textContent, classList, id+'-fig-img')

        const captionClasses = ['caption']
        classList.forEach(clss => captionClasses.push(clss))
        this.figcapture = new Figcaption(textContent, classList, id+'-fig-caption')

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
    constructor(forStr, textContent, classList=[], id=null)
    {
        super(document.createElement('label'), textContent, classList, id)
        this.TextContent(textContent)
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
    constructor(typeStr, placeholder)
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
    constructor(textStr="click me", nameStr=null, classList=[], id=null)
    {
        super(classList, id)
        const button = document.createElement('button')
        this.element = button
        this.addToClassList(classList)
        this.addID(id)
        button.for = nameStr
        button.textContent = textStr
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

    selections,

    H1,
    H2,
    H3,
    H4,
    H5,
    P,
    Pre,
    Blockquote,
    Figcaption,
    Span,
    Div,
    FlexBox,
    Form,
    Label,
    Select,
    Option,
    Input,
    Button,
    Listener,
}