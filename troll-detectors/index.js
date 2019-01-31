const SOURCE_FILE = __dirname + '/../data/democratie.json'


function concatenateAnswers(contribution) {
	return contribution.responses.reduce((result, response) => result + response.value, '')
}


const detectors = [
	require('./exclamation-points'),
]

let lineReader = require('readline').createInterface({
	input: require('fs').createReadStream(SOURCE_FILE)
})

lineReader.on('line', line => {
	let contribution = JSON.parse(line)

	let answersText = concatenateAnswers(contribution)

	let trollScore = 0

	detectors.forEach(detector => {
		if (detector.detect(answersText))
			trollScore += detector.weight
	})

	if (trollScore)
		console.log(trollScore, contribution.url)
})
