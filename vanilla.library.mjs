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
} from './vanilla.mjs'
const page = document.querySelector('#page')
const card = new Div(display.block,['card'],'card-id-001')

page.appendChild(card)