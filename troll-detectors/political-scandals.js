module.exports.weight = 0.3

module.exports.detect = function detect(text) {
	if (text)
		return text.toLowerCase().indexOf('benalla') > -1
}
