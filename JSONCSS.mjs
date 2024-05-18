/** 
 * JavaScript Object Notation CSS
 * CSS syntax as done in Javascript Obect Notation */



class JSONCSS
{
    constructor(
        /** 
         * @constructor
         * @param {object} CSSSTyleRules object reference
        */
        CSSStyleRules={ selector: { property: 'value' } },
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
        this.element = new CSSStyleSheet()
        this.CSSStyleRules
        this.keyframes = null

        if(CSSStyleRules)
        {
            this.CSSStyleRules = CSSStyleRules
        } else 
        {
            this.CSSStyleRules = null
        }
        // if(obj.keyframes){
        //     this.percentageCheck(keyframes.alias.percentages)
        //     this.keyframes = keyframes
        // }

        this.adopt()
    }

    // toSheet()
    // {
    // /**
    //  * @todo Finish JSONCSS.toSheet() 
    //  * @method toSheet parses value into to a css sheet
    //  * @return {CSSStyleSheet} with the CSS built in
    //  * */
    //     const sheet = new CSSStyleSheet()
    //     this.parseRules(sheet)
    //     // this.parseKeyframes(sheet)
    //     return sheet
    // }

    parseKeyframes(sheet)
    {
    /**
     * @todo Finish JSONCSS.parseKeyframes()
     * @stub
     */
        
        /**
         * @todo may not be necessary, must test
         */
        // return sheet
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

    adopt()
    {
        if(this.CSSStyleRules) this.parseRules()
        // if(this.keyframes) this.parseKeyframes(this.keyframes)
        // console.log('css rules:', this.element.cssRules)

        document.adoptedStyleSheets.push(this.element)
    }

    parseRules()
    {
        let parsedRule = ''

        // Basic Styles

        /**
         *  @todo fix
         *  what in Hades is going on here? Why is the for loop invoking 3 times?
         */
        console.log('CSSStyleRules', this.CSSStyleRules)
        const rules = this.CSSStyleRules

        for(const [selector, styleDeclarations] of Object.entries(rules))
        {
            console.log('selector:', selector, '\n','styleDeclarations:', styleDeclarations)
            parsedRule += `${selector} { `
            for(const [property, value] of Object.entries(styleDeclarations))
            {
                // console.log('property:', property, '\n','value:', value)
                parsedRule += `${property} { `
                parsedRule += `${value}; `
            }

            parsedRule += '} '
        }
        // console.log('parsedRule:', parsedRule)
        this.element.insertRule(parsedRule)

/**
 * @reference copied from previous implementation
parseObject(cssRulesObj) {
not used:   for(const [section, selectors] of Object.entries(cssRulesObj))
            {
not used:   if(section === 'CSSStyleRules')
not used:       for(const [selector, styleDeclarations] of Object.entries(selectors))
                {
                    let parsedRule = ''
                    parsedRule += `${selector} { `

                    for(const [property, value] of Object.entries(styleDeclarations))
                    {
                        parsedRule += `${property}: ${value}; `
                    }

                    parsedRule += '} '
                    this.element.insertRule(parsedRule)
                }
            }
            else if(section === '@keyframes')
            {
                console.log(section)
            }
        }
        console.log('CSSStyleSheet:', this.element)
    }

*/
    }

    replaceSync(rule)
    {
        this.element.replaceSync(rule)
    }

    replace(rule)
    {
        this.element.replace(rule)
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
    JSONCSS,
    UnsupportedJSONCSSError,
    PercentageOutOfRangeError
}