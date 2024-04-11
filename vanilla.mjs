/*
import {
    event,
    selections,
    H1,
    H2,
    Form,
    Label,
    Select,
    Option,
    Ev,
    Listener,
} from 'path/to/vanilla.mjs'

*/

const event = {
    element: {
        change: 'change',
        input: 'input',
        submit: 'submit'    
    },
    mouse: {
        click: 'click',
    }
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

class H1
{
    constructor(str)
    {
        this.element = document.createElement('h1')
        const h1 = this.element
        h1.textContent = str
    }
}

class H2
{
    constructor(str)
    {
        this.element = document.createElement('h2')
        const h2 = this.element
        h2.textContent = str
    }
}

class Div
{
    constructor(display = block, classlist=null, id=null)
    {
        this.element = document.createElement('div')
        const div = this.element
        if(display) div.style.display = display
        if(classlist) classlist.forEach(clss => div.classList.add(clss))
        if(id) div.id = id
    }
}

class FlexBox
{
    constructor(direction, classList=null, id=null)
    {
        this.element = new Div('flex', classList, id)
        const div = this.element
        div.style.flexDirection = direction
    }
}

class Form
{
    constructor(nameStr)
    {
        this.element = document.createElement('form')
        const form = this.element
        form.name = nameStr
        form.appendChild(new Label(nameStr))
    }
}

class Label
{
    constructor(forStr)
    {
        this.element = document.createElement('label')
        const label = this.element
        label.for = forStr
    }
}

class Select
{
    constructor(forStr='a form', valueDescriptorArray=[{value: 'Option Value', descriptor:'description'}])
    {
        this.element = document.createElement('select')
        const select = this.element
        valueDescriptorArray.forEach(pair => {
            const option = new Option(pair.value, pair.descriptor)
            select.appendChild(option)
        })
    }
}

class Option
{
    constructor(value, descriptor)
    {
        this.element = document.createElement('option')
        const option = this.element
        option.value = value
        option.textContent = descriptor
    }
}

class Input
{
    constructor(typeStr, placeholder)
    {
        this.element = document.createElement('input')
        const input = this.element
        input.type = typeStr
        input.placeholder = placeholder
    }
}

class Button
{
    constructor(textStr="click me", nameStr=null)
    {
        this.element = document.createElement('button')
        this.behavior = ([/* args */]) => {}
        const button = this.element
        button.for = nameStr
        button.textContent = textStr
    }

}

class Listener
{
    constructor(selector, event, func)
    {
        this.element = document.querySelector(selector).addEventListener(event, func)
        const listener = this.element
    }
}

export {
    event,
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