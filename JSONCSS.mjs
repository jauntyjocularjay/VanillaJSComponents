/** 
 * JavaScript Object Notation CSS
 * CSS syntax as done in Javascript Obect Notation */



class JSONCSS
{
    constructor(
        /** 
         * @constructor
         * @param {object} CSSSTyleRules object reference
         *      CSSSTyleRules =
         *      {
         *          tags:
         *          {
         *              tag: { property: 'value' }
         *          },
         *          keyframes: 
         *          {
         *              alias:
         *              {
         *                  from: [{ 'property': 'value' }],
         *                  to: [{ 'property': 'value' }],
         *              },
         *          percentages:
         *          {
         *              0: { 'property': 'value' },
         *              100: { 'property': 'value' },
         *          }
         *      }
        */
        CSSSTyleRules={
            tag: { property: 'value' }
        },
        keyframes={
            alias: 
            {
                from: [{ 'property': 'value' }],
                to: [{ 'property': 'value' }],
                percentages: {
                    0: { 'property': 'value' },
                    100: { 'property': 'value' },
                }
            }
        })
    {
        this.percentageCheck(keyframes.alias.percentages)

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