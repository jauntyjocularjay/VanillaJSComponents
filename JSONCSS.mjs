/** 
 * JavaScript Object Notation CSS
 * CSS syntax as done in Javascript Obect Notation */

const font = {
    bold: 'bold',
    italic: 'italic',
    underline: 'underline',
    lineThrough: 'line-through'
}

class JSONCSS {
    constructor(
        /** 
         * @constructor
         * @param {object} CSSSTyleRules object reference
        */
        CSSStyleRules = { selector: { property: 'value' } },
        keyframes = {
            alias:
            {
                from: [{ 'property': 'value' }],
                0: { 'property': 'value' },
                100: { 'property': 'value' },
                to: [{ 'property': 'value' }],
            }
        }) {
        this.element = new CSSStyleSheet()
        this.CSSStyleRules = null
        this.keyframes = null

        if (CSSStyleRules) {
            this.CSSStyleRules = CSSStyleRules
        }

        if (keyframes) {
            for(const [alias, kframe] of Object.entries(keyframes)){
                this.propertyCheck(kframe)
            }

            this.keyframes = keyframes
        }

        this.adopt()
    }

    parseRules() {
        let parsedRule = ''

        for (const [selector, styleDeclarations] of Object.entries(this.CSSStyleRules)) {

            parsedRule = `${selector} { `

            for (const [property, value] of Object.entries(styleDeclarations)) {
                parsedRule += `${property}: ${value}; `
            }

            parsedRule += '} '

            this.element.insertRule(parsedRule)
        }

    }

    propertyCheck(kframe) {
        Object.keys(kframe).forEach(property => {
            if ((Number.parseInt(property) !== 'number' && Number.parseInt(property) % 1 !== 0) && property !== 'from' && property !== 'to') {
                throw new TypeError(`Keyframe[].${property} must be an integer [0-100] inclusive, "from", or "to"`)
            }
        })
    }

    parseKeyframes() {
        for(const [alias, kframe] of Object.entries(this.keyframes)){
            let parsedKeyframes = `@keyframes `
            
            parsedKeyframes += `${this.keyframes.alias} {`

            for (const [state, properties] of Object.entries(kframe)){
                if(state === 'from' || state === 'to' || typeof +state === 'number') {

                    if(typeof +state === 'number') {
                        parsedKeyframes += `${state}% {`
                    } else {
                        parsedKeyframes += `${state} {`
                    }

                    for(const [property, value] of Object.entries(properties)){
                        parsedKeyframes += `${property}: ${value}; `
                    }
                }
            }

            parsedKeyframes += `}`
            this.element.insertRule(parsedKeyframes)
        }
    }

    adopt() {
        if (this.CSSStyleRules) this.parseRules()
        if (this.keyframes) this.parseKeyframes()

        document.adoptedStyleSheets.push(this.element)
    }

    replaceSync(rule) {
        this.element.replaceSync(rule)
    }

    replace(rule) {
        this.element.replace(rule)
    }

}

class UnsupportedJSONCSSError extends TypeError {
    constructor(parameter) {
        super(`${parameter} not supported by JSONCSS`)
    }
}

class PercentageOutOfRangeError extends RangeError {
    constructor(percentage) {
        super(`${percentage} must be an integer between [0-100] inclusive`)
    }
}

export {
    JSONCSS,
    UnsupportedJSONCSSError,
    PercentageOutOfRangeError,
    font
}