/** 
 * JavaScript Object Notation CSS
 * CSS syntax as done in Javascript Obect Notation */

const CSSRulesObj = {
    CSSStyleRules: {
        html: {
            'background-color': '#333',
            color: '#fff'
        },
        
    },
    '@keyframes': {
        'name': {
            property1: 'string1',
            property2: 'string2'
        }
    }
}

class JSONCSS
{
    constructor(
        CSSSTyleRules= {
            tag: { property: 'value' }
        },
        keyframes={
            alias: {
                from: [{ 'property': 'value' }],
                to: [{ 'property': 'value' }],
            },
            percentages: {
                0: { 'property': 'value' },
                100: { 'property': 'value' },
            }
        })
    {
        this.percentageCheck(keyframes.percentages)

        this.CSSSTyleRules = CSSSTyleRules
        this.keyframes = keyframes
    }

    render()
    /**
     * @method parses value into to a css sheet
     * @todo Finish JSONCSS.render() */
    {
        const sheet = new CSSStyleSheet()

        return sheet
    }

    percentageCheck(percentages)
    {
        Object.keys(percentages).forEach( number => {
            if(typeof +number !== 'number' && number % 1 !== 0)
            {
                throw new PercentageOutOfRangeError(number)
            }
        })
    }
}

class UnsupportedJSONCSSError extends TypeError
{
    constructor(parameter)
    {
        super(`${parameter} not supported by JSONCSS`)
    }
}

class PercentageOutOfRangeError extends RangeError
{
    constructor(percentage)
    {
        super(`${percentage} must be an integer between [0-100] inclusive`)
    }
}

export {
    CSSRulesObj, // exported for testing
    JSONCSS,
    UnsupportedJSONCSSError
}