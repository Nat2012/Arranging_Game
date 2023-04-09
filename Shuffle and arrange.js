function shuffle(words) {
    let array = words.split(" ")
    let shuffledarr = array.sort(() => Math.random() - 0.5);
    return shuffledarr.toString();
}
// console.log(shuffle("mix fix dig fur hug"));


function arrange(words) {
    let splittedwords = words.split(" ");
    let arrangedwords = splittedwords.sort();
    return arrangedwords.toString();
}
//console.log(arrange("fire mine yours people bomb anti gully"));
