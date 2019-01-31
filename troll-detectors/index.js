const SOURCE_FILE = __dirname + '/../data/ecologie.json'

const detectors = [
	require('./empty-answers'),
	require('./exclamation-points'),
	require('./http-title'),
	require('./political-scandals'),
]

let lineReader = require('readline').createInterface({
	input: require('fs').createReadStream(SOURCE_FILE)
})

lineReader.on('line', parseLine)


function concatenateAnswers(contribution) {
	return contribution.responses.reduce((result, response) => {
		let addition = response.value

		if (addition == '{"labels":[],"other":null}')  // work around a parsing bug
			addition = ''

		return result + (addition || '')
	}, '')
}

function parseLine(line) {
	let contribution = JSON.parse(line)

	let answersText = concatenateAnswers(contribution)

	let trollScore = 0

	detectors.forEach(detector => {
		if (detector.detect(answersText, contribution))
			trollScore += detector.weight
	})

	if (trollScore)
		console.log(trollScore, contribution.url)
}

