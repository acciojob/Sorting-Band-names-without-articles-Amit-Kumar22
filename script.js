//your code here
let bands = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
function strip (word) {
    let regex = new RegExp('^(a |the |an )', 'i')
    return word.replace(regex, '').trim()
}

const sortedBands = bands.sort((a, b) => (strip(a) > strip(b)) ? 1 : -1)
document.write(sortedBands);

/** 
 * add ul list in HTML
 **/
document.querySelector('#band').innerHTML = 
    sortedBands.map(item => `<li>${item}</li>`).join('')
