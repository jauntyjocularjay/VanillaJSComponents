/*
import {
    display,
    event,
    unit,

    selections,

    H1,
    H2,
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

class H1 extends EasyAccessor
{
    constructor(str)
    {
        super()
        const h1 = document.createElement('h1')
        this.element = h1
        h1.textContent = str
    }
}

class H2 extends EasyAccessor
{
    constructor(str)
    {
        super()
        const h2 = document.createElement('h2')
        this.element = h2
        h2.textContent = str
    }
}

class Div extends EasyAccessor
{
    constructor(display=display.block, classlist=null, id=null)
    {
        super()
        const div = document.createElement('div')
        this.element = div
        if(display) div.style.display = display
        if(classlist) classlist.forEach(clss => div.classList.add(clss))
        if(id) div.id = id
    }
}

class FlexBox extends Div
{
    constructor(direction, classList=null, id=null)
    {
        super()
        const div = super('flex', classList, id)
        this.element = div
        div.style.flexDirection = direction
    }
}

class Form extends EasyAccessor
{
    constructor(nameStr)
    {
        super()
        const form = document.createElement('form')
        this.element = form
        form.name = nameStr
        form.appendChild(new Label(nameStr))
    }
}

class Label extends EasyAccessor
{
    constructor(forStr)
    {
        super()
        const label = document.createElement('label')
        this.element = label
        label.for = forStr
    }
}

class Select extends EasyAccessor
{
    constructor(forStr='a form', valueDescriptorArray=[{value: 'Option Value', descriptor:'description'}])
    {
        super()
        const select = document.createElement('select')
        this.element = select
        valueDescriptorArray.forEach(pair => {
            const option = new Option(pair.value, pair.descriptor)
            select.appendChild(option)
        })
    }
}

class Option extends EasyAccessor
{
    constructor(value, descriptor)
    {
        super()
        const option = document.createElement('option')
        this.element = option
        option.value = value
        option.textContent = descriptor
    }
}

class Input extends EasyAccessor
{
    constructor(typeStr, placeholder)
    {
        super()
        const input = document.createElement('input')
        this.element = input
        input.type = typeStr
        input.placeholder = placeholder
    }
}

class Button extends EasyAccessor
{
    constructor(textStr="click me", nameStr=null)
    {
        super()
        const button = document.createElement('button')
        this.element = button
        button.for = nameStr
        button.textContent = textStr
    }

}

class Listener extends EasyAccessor
{
    constructor(selector, event, func)
    {
        super()
        const listener = document.querySelector(selector).addEventListener(event, func)
        this.element = listener
    }
}

export {
    display,
    event,
    unit,

    selections,

    H1,
    H2,
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