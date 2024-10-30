class Tag {
    static html = 'html'
    static div = 'div'
    static ul = 'ul'
    static ol = 'ol'
    static li = 'li'
    static a = 'a'
    static img = 'img'
    static figure = 'figure'
    static figcaption = 'figcaption'
    static p = 'p'
    static h1 = 'h1'
    static h2 = 'h2'
    static h3 = 'h3'
    static h4 = 'h4'
    static h5 = 'h5'
    static h6 = 'h6'
    static span = 'span'
    static strong = 'strong'
    static abbr = 'abbr'
    static blockquote = 'blockquote'
    static sub = 'sub'
    static sup = 'sup'
    static code = 'code'
    static pre = 'pre'
    static br = 'br'
    static form = 'form'
    static input = 'input'
    static button = 'button'
    static select = 'select'
    static option = 'option'
    static label = 'label'
    static style = 'style'
    static link = 'link'
    static textarea = 'textarea'

    // Sectioning Content
    static article = 'article'
    static section = 'section'
    static aside = 'aside'
    static footer = 'footer'
    static nav = 'nav'
}

class Unit {
    /* No units */
    static none = ''

    /* absolute length units */
    static cm = 'cm'
    static mm = 'mm'
    static Q = 'Q'
    static in = 'in'
    static pc = 'pc'
    static pt = 'pt'
    static px = 'px'

    /* relative length units */
    static em = 'em'
    static rem = 'rem'
    static vw = 'vw'
    static vh = 'vh'
    static lh = 'lh'
    static rlh = 'rlh'
    static percent = '%'
}

export {
    Tag,
    Unit
}