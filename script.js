function generate(){
    let quotes = {
       "- Betty White" : '“My mother always used to say: The older you get, the better you get, unless you’re a banana.”',
       "- Jack Handey" : '“Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.”',
       "- Oscar Wilde" : '“Be yourself; everyone else is already taken.”',
       "- Marilyn Monroe" : '“I am selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you cannot handle me at my worst, then you sure as hell do not deserve me at my best.”'
    }
    let authors = Object.keys(quotes);

    let author = authors[Math.floor(Math.random()* authors.length)];

    let quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
};