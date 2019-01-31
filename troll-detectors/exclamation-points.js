module.exports.weight = 0.1

module.exports.detect = function detect(text) {
	if (text)
		return text.indexOf('!!!!!!') > -1
}
