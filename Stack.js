
//Functions on Push, Pop, peek ,length --> Check words are pallandrome
function Pallandrom() {
    var letters = []
    var word = "racecar"
    var r_word = ""

    // Put all the letters of word in to stack
    for (var item = 0; item < word.length; item++) {
        letters.push(word[item])
    }

    // Pop off the stack in reverse order
    for (var item = 0; item < word.length; item++) {
        r_word += letters.pop();
    }

    //check pallandrome 
    if (r_word === word) {
        console.log(word + " : is a pallandrome ... ");
    }
}

// Call the functions
// Pallandrom()