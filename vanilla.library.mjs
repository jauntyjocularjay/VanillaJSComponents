import {
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
const card = new Div(['card'],'card-id-001')
const h1 = new H1('Card H1', ['header1'])
const h2 = new H2('Card H2',['header2'])
const h3 = new H3('Card H3', ['header3'])
const h4 = new H4('Card H4', ['header4'])
const h5 = new H5('Card H5', ['header5'])
const cardParagraph = 'This is a card paragraph. This is a card paragraph. This is a card paragraph. This is a card paragraph. This is a card paragraph. This is a card paragraph. This is a card paragraph. This is a card paragraph. This is a card paragraph. This is a card paragraph. '
const p = new P(cardParagraph, ['paragraph'])
const form = new Form('form',['form'],'form-id-001')
const label = new Label('form','label',['label'],'label-id-001')
const options = [
    {value: 'option1', descriptor: 'Option 1'},
    {value: 'option2', descriptor: 'Option 2'},
    {value: 'option3', descriptor: 'Option 3'},
    {value: 'option4', descriptor: 'Option 4'},
    {value: 'option5', descriptor: 'Option 5'},
]
const select = new Select('form', options,['select'],'select-id-001')
const formH1 = new H1('Form H1', ['header1'])
const button = new Button('form', 'Submit', ['button'],'button-id-001')
const flexbox = new FlexBox(['flexbox'],'flexbox-id-001')
const box1 = new Div(['box'],'box-001')
const box2 = new Div(['box'],'box-002')
const box3 = new Div(['box'],'box-003')

page.appendChild(card)
card.appendChild(h1)
card.appendChild(h2)
card.appendChild(h3)
card.appendChild(h4)
card.appendChild(h5)
card.appendChild(p)

page.appendChild(form)
form.appendChild(formH1)
form.appendChild(label)
form.appendChild(select)
form.appendChild(button)

page.appendChild(flexbox)
flexbox.appendChild(box1)
flexbox.appendChild(box2)
flexbox.appendChild(box3)