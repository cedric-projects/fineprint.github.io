// function([string1, string2],target id,[color1,color2])    
consoleText([' FINE PRINT'], 'title');

function consoleText(words, id) {
    // if (colors === undefined) colors = ['#fff'];
    var visible = true;
    var con = document.getElementById('console');
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById(id)

    window.setInterval(function () {
        console.log("x:", x, "letter count: ", letterCount)

        if (letterCount === 0 && waiting === false) {
            waiting = true;
            target.innerHTML = words[0].substring(0, letterCount)
            window.setTimeout(function () {
                var usedWord = words.shift();
                words.push(usedWord);
                x = 1;
                letterCount += x;
                waiting = false;
            }, 1000)
        }
        
        // if we have reached the end of the word
        else if (letterCount === words[0].length + 1 && waiting === false) {
            // waiting = true;
            // window.setTimeout(function () {
            //     x = -1;
            //     letterCount += x;
            //     waiting = false;
            // }, 1000)
            visible = true
        }
        else if (waiting === false) {
            target.innerHTML = words[0].substring(0, letterCount)
            letterCount += x;
        }
    }, 120)
    window.setInterval(function () {
        if (visible === true) {
            con.className = 'console-underscore hidden'
            visible = false;

        } else {
            con.className = 'console-underscore'

            visible = true;
        }
    }, 400)
}