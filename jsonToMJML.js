/**
 * Source:
 * https://github.com/mjmlio/mjml
 */

const jsonToMJML = ({ tagName, attributes, children, content }) => {
    const subNode =
        children && children.length > 0
            ? children.map(jsonToMJML).join('\n')
            : content || ''

    const stringAttrs = Object.keys(attributes)
        .map(attr => `${attr}="${attributes[attr]}"`)
        .join(' ')

    return `<${tagName}${stringAttrs === ''
        ? '>'
        : ` ${stringAttrs}>`}${subNode}</${tagName}>`
}

export default jsonToMJML
