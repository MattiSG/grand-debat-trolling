module.exports.weight = 1.2

const MINIMUM_CHARS_FOR_NOT_EMPTY = 10

module.exports.detect = function detect(text) {
	return (! text) || (text.trim().length < MINIMUM_CHARS_FOR_NOT_EMPTY)
}
