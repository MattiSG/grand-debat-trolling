module.exports.weight = 0.8

module.exports.detect = function detect(text, contribution) {
	return contribution.titre.toLowerCase().indexOf('http') > -1
}
