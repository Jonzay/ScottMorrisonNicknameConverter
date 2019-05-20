var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/sco mo/gi, 'Scott Morrison');
            var replacedText2 = text.replace(/scomo/gi, 'Scott Morrison');
            var replacedText3 = text.replace(/Sco-Mo/gi, 'Scott Morrison');
            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
            if (replacedText2 !== text) {
                element.replaceChild(document.createTextNode(replacedText2), node);
		}
            if (replacedText3 !== text) {
                element.replaceChild(document.createTextNode(replacedText3), node);
            }
        }
    }
}