function myfunction(){
    let quoets = {
       "-Bill Watterson" : '"You know, Hobbes, some days even my lucky rocketship underpants dont help."',
       "—J.K. Rowling" : '"It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all - in which case, you fail by default"',
       "—Oscar Wilde" : '" Life is never fair, and perhaps it is a good thing for most of us that it is not."',
       "—Ray Bradbury": '" We are cups, constantly and quietly being filled. The trick is knowing how to tip ourselves over and let the beautiful stuff out."',
       "—Stephen Chbosky":  '"Even if we dont have the power to choose where we come from, we can still choose where we go from there."',
       "- William Faulkner":'"Get it down. Take chances. It may be bad, but its the only way you can do anything really good."',
       "– Jawaharlal Nehru" :'"Life is like a game of cards. The hand you are dealt is determinism; the way you play it is free will.”', 
       "– Rabindranath Tagore": '"By plucking her petals, you do not gather the beauty of the flower.”',
       "– T. Krishnamacharya":'"No one is wise by birth, for wisdom results from one own’s efforts.”',
       "– Harivansh Rai Bacchan" :'"Remember, no one is stopping you from lighting a lamp in a dark night.”',
       "– Tulsidas": '"Devotion is that which generates knowledge; knowledge is that which fashions freedom.”',
       "– A.P.J. Abdul Kalam": '"Man needs his difficulties because they are necessary to enjoy success.”',
       "– Mahatma Gandhi": '"A coward is incapable of exhibiting love; it is the prerogative of the brave.”',
       "– Khushwant Singh": '"The doer must do only when the receiver is ready to receive. Otherwise, the act is wasted.”',
       "– Jawaharlal Nehru":'"Facts are facts and will not disappear on account of your likes.”',
      " – Mahatma Gandhi": '"I will not let anyone walk through my mind with their dirty feet.”',
      " – Chetan Bhagat": '"Dont be serious, be sincere."',
      " – Swami Vivekananda": '"Comfort is no test of truth. Truth is often far from being comfortable.”', 
       "– B.K.S. Iyengar":'"Yoga teaches us to cure what need not be endured and endure what cannot be cured.”',
      " – Kabir" : '"Wherever you are is the entry point.”', 
      "– Mahatma Gandhi": '"An ounce of practice is worth a thousand words.”', 

}
 let authers = Object.keys(quoets);
 let auther = authers[Math.floor(Math.random() * authers.length)];


  let quoet = quoets[auther];

 document.getElementById("quote").innerHTML= quoet;
 document.getElementById("author").innerHTML= auther;

 
 
}