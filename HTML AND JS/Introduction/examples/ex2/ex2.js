const elementNode = document.createElement('p');
const textNode = document.createTextNode('Newly added text');
const attributeNode = document.createAttribute('class');
elementNode.appendChild(textNode);
attributeNode.value = 'some-class';
elementNode.setAttributeNode(attributeNode);
document.body.appendChild(elementNode)
