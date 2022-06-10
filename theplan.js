
// x$_dice = document.getElementById('hl_dice')// dice area
// ; 
// x$_points = ''
// ;x$_points= document.getElementById('hl_points')// points area
// ;
// x$_quetions = document.getElementById('hl_questions')// question area
// ;x$_controls = document.getElementById('hl_controls')// controls area
// ;x$_input = document.getElementById('hl_input')// answer choice area
// ;x$_help = document.getElementById('hl_help')// help area
// ;x$_play = document.getElementById('hl_play')// play button
// ;x$_timer = document.getElementsByClassName('hl_timer')// timer
// // document.getElementsByClassName('hl_timer')//
// ;
// x$_points.textContent="test";
// $_play.setAttribute('color','red');

// x$_timer.setAttribute('name','hl_timer')// timer
// x$_dice.setAttribute('name','hl_dice')// dice area
// x$_points.setAttribute('name','hl_points')// points area
// x$_quetions.setAttribute('name','hl_questions')// question area
// x$_controls.setAttribute('name','hl_controls')// controls area
// x$_input.setAttribute('name','hl_input')// answer choice area
// x$_help.setAttribute('name','hl_help')// help area
// x$_play.setAttribute('name','hl_play')// play button


var x$es =[ 
    x$_dice = document.getElementById('hl_dice')// dice area
    ,x$_points = document.getElementById('hl_points')// points area
    ,x$_quetions = document.getElementById('hl_questions')// question area
    ,x$_controls = document.getElementById('hl_controls')// controls area
    ,x$_input = document.getElementById('hl_input')// answer choice area
    ,x$_help = document.getElementById('hl_help')// help area
    ,x$_play = document.getElementById('hl_play')// play button
    ,x$_timer = document.getElementsByClassName('hl_timer')// timer
    // document.getElementsByClassName('hl_timer')//
    ,
    x$_dice.setAttribute('name','hl_dice')// dice area
    ,x$_points.setAttribute('name','hl_points')// points area
    ,x$_quetions.setAttribute('name','hl_questions')// question area
    ,x$_controls.setAttribute('name','hl_controls')// controls area
    ,x$_input.setAttribute('name','hl_input')// answer choice area
    ,x$_help.setAttribute('name','hl_help')// help area
    ,x$_play.setAttribute('name','hl_play')// play button
    ,x$_timer.setAttribute('name','hl_timer')// timer
    // x$_dice
    ,x$_points="test"
]

function instructions() {


toggle_visibility('body2');

x$es =[ 
    x$_dice = document.getElementById('hl_dice')// dice area
    ,x$_points = document.getElementById('hl_points')// points area
    ,x$_quetions = document.getElementById('hl_questions')// question area
    ,x$_controls = document.getElementById('hl_controls')// controls area
    ,x$_input = document.getElementById('hl_input')// answer choice area
    ,x$_help = document.getElementById('hl_help')// help area
    ,x$_play = document.getElementById('hl_play')// play button
    ,x$_timer = document.getElementsByClassName('hl_timer')// timer
    // document.getElementsByClassName('hl_timer')//
    ,
    x$_dice.setAttribute('name','hl_dice')// dice area
    ,x$_points.setAttribute('name','hl_points')// points area
    ,x$_quetions.setAttribute('name','hl_questions')// question area
    ,x$_controls.setAttribute('name','hl_controls')// controls area
    ,x$_input.setAttribute('name','hl_input')// answer choice area
    ,x$_help.setAttribute('name','hl_help')// help area
    ,x$_play.setAttribute('name','hl_play')// play button
    ,x$_timer.setAttribute('name','hl_timer')// timer
    // x$_dice
    ,x$_points.textContent="test"
]

return x$es;
}




function toggle_visibility(id) {
                var e = document.getElementById(id);
                if(e.style.opacity == 0)
                    {e.style.opacity = .7;
                    // startTimer()
                    }
                else
                    e.style.opacity = 0;
}
function align_right(id) {
                var e = document.getElementById(id);
                if(e.style.color == 'red')
                    e.style.color = 'blue';
                else
                    e.style.color = 'red';
                    e.style.content
}
// countdown = setInterval(startTimer,1000);  
function startTimer() {
                var e = document.querySelector('h2','span');
                if(e.style.display == 'none')
                    e.style.display = 'inline-block';           
                else if(e.style.display == 'inline-block')
                    e.style.display = 'none';
            }  
// if (document.querySelector('h2 span').innerText ==':50 ')
// {specialmessage or action}
function pause(id) {
                var e = document.getElementById(id);
                if(e.innerHTML == 'TIMER IS OFF')        
                    e.innerHTML = 'TIMER IS ON';
                else
                    e.innerHTML = 'TIMER IS OFF';
            }    

function rollDice(){

    
    die1 = document.getElementById('die1');
    die2 = document.getElementById('die2');
    var roll1 = document.getElementById('roll1');
    var roll2 = document.getElementById('roll2');
    q = document.getElementById('question');
    d1 = Math.floor(Math.random() * 6) + 1;
    d2 = Math.floor(Math.random() * 18) + 1;
    //var diceTotal= d1 + d2;
     a ={ a : (d1 === 1) ? "H" 
            : (d1 === 2) ? "Af" 
            : (d1 === 3) ? "N" 
            : (d1 === 4) ? "As" 
            : (d1 === 5) ? "E" 
            : (d1 === 6) ? "M" 
            : 0
            };
    b ={
            b : (d2 === 1) ? "U" 
            : (d2 === 2) ? " " 
            : (d2 === 3) ? " " 
            : (d2 === 4) ? " " 
            : (d2 === 5) ? " " 
            : (d2 === 6) ? " " 
            : (d2 === 7) ? " " 
            : (d2 === 8) ? " " 
            : (d2 === 9) ? " " 
            : (d2 === 10) ? " " 
            : (d2 === 11) ? " " 
            : (d2 === 12) ? "M" 
            : (d2 === 13) ? "N" 
            : (d2 === 14) ? "G" 
            : (d2 === 15) ? "L" 
            : (d2 === 16) ? " " 
            : (d2 === 17) ? " " 
            : (d2 === 18) ? " " 
            : (d2 === 19) ? " " 
            : 0
            }  ;    
      
    // CUBE DIE #1  H	Hispanic	A	African		N	Native		A	Asian		E	European	B 	Blank
    // CUBE DIE #2  U	Underage	M	Multiplex	N	Non-Binary	G	Gay			L	Lesbian		B	Blind  
            
     c = function answer(x){
        var a = x; 
        var a = (a ==='H')?'Hispanic'
        : (a ==='Af') ? 'African'
        : (a ==='N') ? 'Native'
        : (a ==='As') ? 'Asian'
        : (a ==='E') ? 'European'
        : (a ==='M') ? 'the masses'
        : a === 0;
        var b = x; 
        var b = (b === 'U') ?'and underage'
        : (b === 'M') ? 'and multi-racial'
        : (b === 'N') ? 'and non-binary'
        : (b === 'G') ? 'and gay'
        : (b === 'L') ? 'and lesbian'
        : (b === ' ' ) ? ' '
        : 0;
    return [a,b]
    }
    
    // hack to remove f and s from Af and As respectively
    
    aa = (a.a ==='H')?'H'
        : (a.a ==='Af') ? 'A'
        : (a.a ==='N') ? 'N'
        : (a.a ==='As') ? 'A'
        : (a.a ==='E') ? 'E'
        : (a.a ==='M') ? 'M'
        :0 ;
    
    
    Hispanic = ['Hispanic','Hispanic-American','Mexican','Mexican-American','Puerto-Rican','LatinX']
    African = ['African','African-American','Black','West-Indian','Caribbean','Caribbean-American','Black-American']
    Asian = ['Asian','Asian-American','South-Asian','Chinese-American','Japanese-American','Korean-American','Philipino-American','Middle-Eastern-American']
    Native= ['Native','Native-American','Lenape','Montauk']
    European = ['European','European-American','White','White-American']
    Masses = ['on the margins','working class','working poor','middle-class','essential workers']
    ;
     longer_name = (a.a ==='H')?Hispanic[Math.floor(Math.random() * Hispanic.length)]
        : (a.a ==='Af') ? African[Math.floor(Math.random() * African.length)]
        : (a.a ==='N') ? Native[Math.floor(Math.random() * Native.length)]
        : (a.a ==='As') ? Asian[Math.floor(Math.random() * Asian.length)]
        : (a.a ==='E') ? European[Math.floor(Math.random() * European.length)]
        : (a.a ==='M') ? Masses[Math.floor(Math.random() * Masses.length)]
        :  a.a;
     
        // longer_name = (a ==='Hispanic')?Hispanic[Math.floor(Math.random() * Hispanic.length)]
        // : (a ==='African') ? African[Math.floor(Math.random() * African.length)]
        // : (a ==='Native') ? Native[Math.floor(Math.random() * Native.length)]
        // : (a ==='Asian') ? Asian[Math.floor(Math.random() * Asian.length)]
        // : (a ==='European') ? European[Math.floor(Math.random() * European.length)]
        // :  a;
    
    
      
    die1.innerHTML = aa;
    die2.innerHTML =b.b;  
    roll1.innerHTML = aa + ' as in '+c(a.a)[0];
    roll2.innerHTML = (b.b === ' ') ? ' ' 
    : b.b+ ' as in '+c(b.b)[1].slice(4);
    
    
    context = 'About a person who presents as ' + c(a.a)[0]+c(b.b)[1];
    w_ = ['when', 'where','what', 'why'];
    wtype = [Math.floor(Math.random() * 4)]
    
    
    
    
    
    // q_ = [
    // q1 = " Question 1 is about H...",
    // q2 =" Question 2 is about U...",
    // q3 =" Question 3 is about M...",
    // q4 =" Question 4 is about A...",
    // q5 =" Question 5 is about N...",
    // q6 =" Question 6 is about A...",
    // q7 =" Question 7 is about N...",
    // q8 =" Question 8 is about G...",
    // q9 =" Question 9 is about E...",
    // q10 =" Question 10 is about L...",
    // q11 =" Question 11 is about 0...",
    // q12 =" Question 12 is about 0..."
    // ];
    
    q1 = document.getElementsByClassName('hachoices');
    
    q2 = document.getElementsByTagName('li');
    
    z1 = document.querySelectorAll('input')
    
    
    
    
    _oulda = [" could", " should", " would", " wouldn't", " shouldn't"]
    oulda = _oulda[Math.floor(Math.random() * 5)]
    
    _is = [" identifies as ", " is ", " is actively against people who are ",  " supports people who are "]
    that_is = _is[Math.floor(Math.random() * 4)]
    
    
    _it = ["my crafts", "my stuff", "what I sell", "what I offer"]
    it = _it[Math.floor(Math.random() * 4)]
    
    thisperson = (c(b.b)[1] == ' ') ? longer_name+c(b.b)[1]
    : longer_name+" "+c(b.b)[1]
    
    _noun =[' person who', ' collective who', ' household that']
    noun =_noun[Math.floor(Math.random() * 3)]
    
    // when w_[0]
    // where w_[1]
    //what w_[2]
    //why w_[3]
    
    value = [
    "Tell " +w_[0] + " in the real world a"+noun+that_is+thisperson + oulda + " want " + it+".",    
    "To a "+noun+that_is+thisperson+ " tell what distinguishes "+ it+" from others.",
    "Tell "+w_[wtype]+" a"+noun+that_is+thisperson + " could benefit from using " + it+".",
    "Tell " +w_[0]+" a"+noun+that_is+thisperson + oulda + " want " + it+".",
    oulda[1].toLocaleUpperCase()+oulda.slice(2)+" you do business with a"+noun+that_is+thisperson+"?",
    w_[0][0].toLocaleUpperCase()+w_[0].slice(1)+oulda+" a"+noun+that_is+thisperson+"  use "+it+"?",
    w_[0][0].toLocaleUpperCase()+w_[1].slice(1)+oulda+" a"+noun+that_is+thisperson+" need "+it+"?",
    w_[0][0].toLocaleUpperCase()+w_[1].slice(1)+oulda+" a"+noun+that_is+thisperson+" use "+it+"?",
    "Tell " +w_[0] + " in the digital world a"+noun+that_is+thisperson + oulda + " want " + it+".",  
    "Is it assumed that a person identifying as "+thisperson +oulda+" value " + it+"? ... "+w_[0][0].toLocaleUpperCase()+w_[3].slice(1)+"?",
    "Tell the reason " +w_[3]+" a person, who identifies as "+thisperson+" , "+ _oulda[2].slice(1) + " not value " + it+".",
    w_[0][0].toLocaleUpperCase()+w_[2].slice(1)+ " about "+it+ oulda+" a"+noun+that_is+thisperson+" find interesting?",
    w_[0][0].toLocaleUpperCase()+w_[3].slice(1)+oulda+" a"+noun+that_is+thisperson+" use "+it+" instead of another?",
    w_[0][0].toLocaleUpperCase()+w_[2].slice(1)+ " about "+it+ oulda+" a"+noun+that_is+thisperson+" find useful?",
    "Would you consider a"+noun+that_is+thisperson+" as an ideal client? Why?",
    "Tell " +w_[2]+" use " + it +   oulda + "be to a person who identifies as "+thisperson +"."
    // 16
    ]       
    ;
    revenue = [
    w_[wtype][0].toLocaleUpperCase()+w_[0].slice(1)+oulda+" a"+noun+that_is+thisperson+" find "+it+" to buy?",
    "Ask yourself, \'why am I selling "+it+"?\'",
    "Ask yourself, \'why am I selling "+it +"?\'",
    "Ask yourself, \'what value do I think the average"+noun+that_is+thisperson+" places on "+it+"?\'",
    "Ask yourself, \'how much money would I expect the average"+noun+that_is+thisperson+"to pay for "+it+"?\'",
    "Business aside, what positive or negative views about a"+noun+that_is+thisperson+" do you have?",
    "Regarding your revenue, how much business do you expect to garner from a"+noun+that_is+thisperson+" ?",
    "Tell the reason " +w_[3]+" a person, who identifies as "+thisperson+" , "+ _oulda[2].slice(1) + " not pay for " + it+".",
    "Is it assumed that a person identifying as "+thisperson +oulda+" want to pay for " + it+"? ... "+w_[0][0].toLocaleUpperCase()+w_[3].slice(1)+"?",
    w_[wtype][0].toLocaleUpperCase()+w_[1].slice(1)+oulda+" a"+noun+that_is+thisperson+" buy "+it+"?",
    w_[wtype][0].toLocaleUpperCase()+w_[3].slice(1)+oulda+" a"+noun+that_is+thisperson+" buy "+it+"?"
    //11
    ]
    ;
    digest = [
    "What positive or negative words might a"+noun+that_is+thisperson+" say about "+it+"?",
    "What positive or negative views about a"+noun+that_is+thisperson+" do you have?",
    w_[0][0].toLocaleUpperCase()+w_[0].slice(1)+oulda+" a"+noun+that_is+thisperson+" like "+it+"?",
    w_[0][0].toLocaleUpperCase()+w_[1].slice(1)+oulda+" a"+noun+that_is+thisperson+" like "+it+"?",
    "Business aside, what positive or negative biases do you admit to having regarding a"+noun+that_is+thisperson+" ?",
    w_[0][0].toLocaleUpperCase()+w_[2].slice(1)+ " about "+it+ oulda+" be liked by a"+noun+that_is+thisperson+" ?",
    w_[0][0].toLocaleUpperCase()+w_[0].slice(1)+ " in the day "+oulda+" a"+noun+that_is+thisperson+" mostly use "+it+"?",
    w_[0][0].toLocaleUpperCase()+w_[1].slice(1)+ " in the world "+oulda+" a"+noun+that_is+thisperson+" use "+it+"?",
    w_[0][0].toLocaleUpperCase()+w_[2].slice(1)+ " about "+it+ oulda+" a"+noun+that_is+thisperson+" not like?",
    w_[0][0].toLocaleUpperCase()+w_[3].slice(1)+oulda+" a"+noun+that_is+thisperson+" not like to use "+it+"?",
    "How frequently "+oulda+" a"+noun+that_is+thisperson+" use "+it+"?"
    //11
    ]
    ;
 
    discover = [
    "Tell " +w_[0]+" a"+noun+that_is+thisperson + oulda + " want " + it+".",    
    w_[0][0].toLocaleUpperCase()+w_[0].slice(1)+oulda+" a curious"+noun+that_is+thisperson+" find "+it+"?",
    w_[1][0].toLocaleUpperCase()+w_[1].slice(1)+oulda+" a curious"+noun+that_is+thisperson+" find "+it+"?",
    "Business aside, what good or bad views about a"+noun+that_is+thisperson+" do you have?",
    w_[2][0].toLocaleUpperCase()+w_[2].slice(1)+oulda+" a curious"+noun+that_is+thisperson+" find interesting about "+it+"?",
    w_[3][0].toLocaleUpperCase()+w_[3].slice(1)+oulda+" a curious"+noun+that_is+thisperson+" be interested in "+it+"?",
    w_[0][0].toLocaleUpperCase()+w_[0].slice(1)+oulda+" an inspired"+noun+that_is+thisperson+" share "+it+"?",
    w_[1][0].toLocaleUpperCase()+w_[1].slice(1)+oulda+" an inspired"+noun+that_is+thisperson+" share "+it+"?",
    "An inspired"+noun+that_is+thisperson+oulda+" share "+w_[2]+" about "+it+"?",
    "Is it assumed that a person identifying as "+thisperson +oulda+" know how to find " + it+"? ... "+w_[0][0].toLocaleUpperCase()+w_[3].slice(1)+"?",
    w_[3][0].toLocaleUpperCase()+w_[3].slice(1)+oulda+" an inspired"+noun+that_is+thisperson+" review "+it +"?",
    w_[0][0].toLocaleUpperCase()+w_[0].slice(1)+oulda+" a"+noun+that_is+thisperson+" recommend "+it+"?",
    w_[1][0].toLocaleUpperCase()+w_[1].slice(1)+oulda+" a"+noun+that_is+thisperson+" recommend "+it+"?",
    w_[2][0].toLocaleUpperCase()+w_[2].slice(1)+" about "+it +oulda+" a "+noun+that_is+thisperson+" recommend?",
    w_[3][0].toLocaleUpperCase()+w_[3].slice(1)+oulda+noun+that_is+thisperson+" recommend "+it+"?"
    //15
    ]
    
    purpose = [
    "Tell " +w_[0]+" in the physical world "+oulda+ " a person who identifies as "+thisperson+ " use " +it+".",
    w_[0][0].toLocaleUpperCase()+w_[0].slice(1)+" in a scenario "+oulda+" a"+noun+that_is+thisperson+" experience "+it+" differently than you intended?",
    "Tell " +w_[1]+" in the day (or night) a person who identifies as "+thisperson + oulda + " uses " + it+".",
    "Would a"+noun+that_is+thisperson+" react to "+it+" differently than other people? How?",
    "Tell " +w_[3]+" a person who identifies as "+thisperson + oulda + " use " + it+".",
    "Tell " +w_[2]+" a person who identifies as "+thisperson + oulda + " do with " + it+".",
    "Is it assumed that a person identifying as "+thisperson +oulda+" use " + it+"? ... "+w_[0][0].toLocaleUpperCase()+w_[3].slice(1)+"?",
    "Would a"+noun+that_is+thisperson+" use "+it+" differently than other people? How?",
    "Tell the reason " +w_[3]+" a person, who identifies as "+thisperson+" , "+ _oulda[2].slice(1) + " dislike " + it+".",
    w_[0][0].toLocaleUpperCase()+w_[1].slice(1)+" in a scenario "+oulda+" a"+noun+that_is+thisperson+" experience "+it+" differently than you intended?",
    "Is it assumed that a person identifying as "+thisperson +oulda+" like " + it+"? ... "+w_[0][0].toLocaleUpperCase()+w_[3].slice(1)+"?",
    "Ask yourself, 'did I have in mind"+" a"+noun+that_is+thisperson+" when I created "+it+"?",
    "Would you consider a"+noun+that_is+thisperson+" as an ideal client? Why?",
    w_[0][0].toLocaleUpperCase()+w_[3].slice(1)+" in a scenario "+oulda+" a"+noun+that_is+thisperson+" experience "+it+" differently than you intended?"
    //14
    ]
        
        




    //!
    //"Is it assumed that a person identifying as "+thisperson +oulda+" like " + it+"? ... "+w_[0][0].toLocaleUpperCase()+w_[3].slice(1)+"?"
    //"Is it assumed that a person identifying as "+thisperson +oulda+" find" + it+" useful? ... "+w_[0][0].toLocaleUpperCase()+w_[3].slice(1)+"?"
    
    
    
    
    
    // 60 + questions * 4  * 3 * 6 
    
    // questions = (a.a === 'H') ? q_[Math.floor(Math.random() * 11) + 1]
    // : (a.a === 'U') ? q2 
    // : (a.a === 'M') ? q3
    // : (a.a === 'A') ? q4
    // : (a.a === 'N') ? q5
    // : (b.b === 'A') ? q6
    // : (b.b === 'N') ? q7
    // : (b.b === 'G') ? q8 
    // : (b.b === 'E') ? q9
    // : (b.b === 'L') ? q10
    // : (b.b === '0') ? q11 
    // : (a.a === '0') ? q12 
    // : 0;
    // q_[Math.floor(Math.random() * 11) + 1]
    
    qtypes = [
    qpurpose = purpose[Math.floor(Math.random() * 14)]
    ,
    qdigest = digest[Math.floor(Math.random() * 11) ]
    ,
    qdiscover = discover[Math.floor(Math.random() * 15)]
    ,
    qrevenue = revenue[Math.floor(Math.random() * 11)]
    ,
    qvalue = value[Math.floor(Math.random() * 16)]
    ]
    
    qtypeNumber = [Math.floor(Math.random() * qtypes.length )]
    const questions = qtypes[qtypeNumber];
    
    q.textContent =  questions;//questions;
    
    z1[19].setAttribute('value',questions);
    // a0= document.getElementById('thequestion');
    // a0.setAttribute('name', 'Query');
    // a0.setAttribute('value', questions);
    // a0.textContent = questions;
    
    
    // NEED TO FIX FROM HERE
    
    
    
    
    
    
    
    q1[0].textContent = ((q.textContent.match(/what/i) == 'what' || q.textContent.match(/what/i) == 'What') 
    && (q.textContent.match(/why/i) == 'Why' || q.textContent.match(/why/i) =='why')) ? '\"why\" and \"what\" are irrelevant'
    : ((q.textContent.match(/what/i) == 'what' || q.textContent.match(/what/i) == 'What') 
    && (q.textContent.match(/how/i) == 'how' || q.textContent.match(/how/i) =='how')) ? '\"how\" and \"what\"are irrelevant'
    : (q.textContent.match(/when/i) == 'when' || q.textContent.match(/when/i) == 'When') ?'\"when\" is irrelevant'
    : (q.textContent.match(/where/i) == 'Where' || q.textContent.match(/where/i) =='where')? '\"where\" is irrelevant'
    : (q.textContent.match(/what/i) == 'what' || q.textContent.match(/what/i) == 'What')? '\"what\" is irrelevant'
    : (q.textContent.match(/why/i) == 'Why' || q.textContent.match(/why/i) =='why') ? '\"why\" is irrelevant'
    : (q.textContent.match(/how/i) == 'How' || q.textContent.match(/how/i) =='how')? '\"how\" is irrelevant'
    : 0;   
    
    q1[1].textContent =  ((q.textContent.match(/what/i) == 'what' || q.textContent.match(/what/i) == 'What') 
    && (q.textContent.match(/why/i) == 'Why' || q.textContent.match(/why/i) =='why')) ? 'puzzled by \"why\" and \"what\"'
    : ((q.textContent.match(/what/i) == 'what' || q.textContent.match(/what/i) == 'What') 
    && (q.textContent.match(/how/i) == 'how' || q.textContent.match(/how/i) =='how')) ? 'puzzled by \"how\" and \"what\"'
    : (q.textContent.match(/when/i) == 'when' || q.textContent.match(/when/i) == 'When') ?'puzzled by use of \"when\"'
    : (q.textContent.match(/where/i) == 'Where' || q.textContent.match(/where/i) =='where')? 'puzzled by use of \"where\"'
    : (q.textContent.match(/what/i) == 'what' || q.textContent.match(/what/i) == 'What')? 'puzzled by use of \"what\"'
    : (q.textContent.match(/why/i) == 'Why' || q.textContent.match(/why/i) =='why') ? 'puzzled by use of \"why\"'
    : (q.textContent.match(/how/i) == 'How' || q.textContent.match(/how/i) =='how')? 'puzzled by use of \"how\"'
    : 0;    
    
    
    q1[2].textContent = (q.textContent.match(/when/i) == 'when' || q.textContent.match(/when/i) == 'When') ?'flag this'
    : (q.textContent.match(/where/i) == 'Where' || q.textContent.match(/where/i) =='where')? 'flag this'
    : (q.textContent.match(/what/i) == 'what' || q.textContent.match(/what/i) == 'What')? 'flag this'
    : (q.textContent.match(/why/i) == 'Why' || q.textContent.match(/why/i) =='why') ? 'flag this'
    : (q.textContent.match(/how/i) == 'How' || q.textContent.match(/how/i) =='how')? 'flag this'
    : 0;
    
    q1[3].textContent = (q.textContent.match(/when/i) == 'when' || q.textContent.match(/when/i) == 'When') ? 'i like this!'
    : (q.textContent.match(/where/i) == 'Where' || q.textContent.match(/where/i) =='where')? 'i like this!'
    : (q.textContent.match(/what/i) == 'what' || q.textContent.match(/what/i) == 'What')? 'i like this!'
    : (q.textContent.match(/why/i) == 'Why' || q.textContent.match(/why/i) =='why') ? 'i like this!'
    : (q.textContent.match(/how/i) == 'How' || q.textContent.match(/how/i) =='how')? 'i like this!'
    : 0;
    
    q1[4].textContent = (q.textContent.match(/when/i) == 'when' || q.textContent.match(/when/i) == 'When') ? 'let me type to explain...'
    : (q.textContent.match(/where/i) == 'Where' || q.textContent.match(/where/i) =='where')? 'let me type to explain...'
    : (q.textContent.match(/what/i) == 'what' || q.textContent.match(/what/i) == 'What')? 'let me type to explain...'
    : (q.textContent.match(/why/i) == 'Why' || q.textContent.match(/why/i) =='why') ? 'let me type to explain...'
    : (q.textContent.match(/how/i) == 'How' || q.textContent.match(/how/i) =='how')? 'let me type to explain...'
    : 0;
    
    q1[5].textContent = ((q.textContent.match(/what/i) == 'what' || q.textContent.match(/what/i) == 'What') 
    && (q.textContent.match(/why/i) == 'Why' || q.textContent.match(/why/i) =='why')) ? 'being '+thisperson+' is irrelevant'
    : ((q.textContent.match(/what/i) == 'what' || q.textContent.match(/what/i) == 'What') 
    && (q.textContent.match(/how/i) == 'how' || q.textContent.match(/how/i) =='how')) ? 'being '+thisperson+' is irrelevant'
    : (q.textContent.match(/when/i) == 'when' || q.textContent.match(/when/i) == 'When') ? 'being '+thisperson+' is irrelevant'
    : (q.textContent.match(/where/i) == 'Where' || q.textContent.match(/where/i) =='where')? 'being '+thisperson+' is irrelevant'
    : (q.textContent.match(/what/i) == 'what' || q.textContent.match(/what/i) == 'What')? 'being '+thisperson+' is irrelevant'
    : (q.textContent.match(/why/i) == 'Why' || q.textContent.match(/why/i) =='why') ? 'being '+thisperson+' is irrelevant'
    : (q.textContent.match(/how/i) == 'How' || q.textContent.match(/how/i) =='how')? 'being '+thisperson+' is irrelevant'
    : 0;  
    
    
    q1[6].textContent = (q.textContent.match(/when/i) == 'when' || q.textContent.match(/when/i) == 'When') ? thisperson+'s can be an issue'   
    : (q.textContent.match(/where/i) == 'Where' || q.textContent.match(/where/i) =='where')? thisperson+'s can be an issue'  
    
    : (q.textContent.match(/what/i) == 'what' || q.textContent.match(/what/i) == 'What')? thisperson+'s can be an issue'
    : (q.textContent.match(/why/i) == 'Why' || q.textContent.match(/why/i) =='why') ?  thisperson+'s can be an issue' 
    : (q.textContent.match(/how/i) == 'How' || q.textContent.match(/how/i) =='how')? thisperson+'s can be an issue'  
    : 0;
    
    // (q.textContent.match(/when/i) == 'when' || q.textContent.match(/when/i) == 'When') ?'when not feeling well'
    // : (q.textContent.match(/where/i) == 'Where' || q.textContent.match(/where/i) =='where')? 'from affiliates'
    // : (q.textContent.match(/what/i) == 'what' || q.textContent.match(/what/i) == 'What')? 'quality of '+it
    // : (q.textContent.match(/why/i) == 'Why' || q.textContent.match(/why/i) =='why') ? it+'was made for '+thisperson+ 'people too!'
    // : (q.textContent.match(/how/i) == 'How' || q.textContent.match(/how/i) =='how')? 'the '+thisperson+ 'person is my target audience'
    // : 0;
    
    // q1[6].textContent = (q.textContent.match(/when/i) == 'when' || q.textContent.match(/when/i) == 'When') ?'Daily' 
    // : (q.textContent.match(/where/i) == 'Where' || q.textContent.match(/where/i) =='where')? 'at home' 
    // : (q.textContent.match(/what/i) == 'what' || q.textContent.match(/what/i) == 'What')? 'many good things'
    // : (q.textContent.match(/why/i) == 'Why' || q.textContent.match(/why/i) =='why') ? 'It benefits them'    
    // : (q.textContent.match(/how/i) == 'How' || q.textContent.match(/how/i) =='how')? 'My ideal client'
    // : 0;
    
    
    q1[7].textContent = (q.textContent.match(/when/i) == 'when' || q.textContent.match(/when/i) == 'When') ? 'It\'s all about '+thisperson+' now'    
    : (q.textContent.match(/where/i) == 'Where' || q.textContent.match(/where/i) =='where')? 'It\'s all about '+thisperson+'s now'   
    
    : (q.textContent.match(/what/i) == 'what' || q.textContent.match(/what/i) == 'What')? 'It\'s all about '+thisperson+'s now'
    : (q.textContent.match(/why/i) == 'Why' || q.textContent.match(/why/i) =='why') ?  'It\'s '+thisperson+ '\'s time now'   
    : (q.textContent.match(/how/i) == 'How' || q.textContent.match(/how/i) =='how')? 'It\'s all about '+thisperson+' now'   
    : 0;
    
    
    q1[8].textContent = ((q.textContent.match(/what/i) == 'what' || q.textContent.match(/what/i) == 'What') 
    && (q.textContent.match(/why/i) == 'Why' || q.textContent.match(/why/i) =='why')) ? 'serving '+thisperson+' is my business'
    : ((q.textContent.match(/what/i) == 'what' || q.textContent.match(/what/i) == 'What') 
    && (q.textContent.match(/how/i) == 'how' || q.textContent.match(/how/i) =='how')) ? 'serving '+thisperson+' is my business'
    : (q.textContent.match(/when/i) == 'when' || q.textContent.match(/when/i) == 'When') ? 'serving '+thisperson+' is my business'
    : (q.textContent.match(/where/i) == 'Where' || q.textContent.match(/where/i) =='where')? 'serving '+thisperson+' is my business'
    : (q.textContent.match(/what/i) == 'what' || q.textContent.match(/what/i) == 'What')? 'serving '+thisperson+' is my business'
    : (q.textContent.match(/why/i) == 'Why' || q.textContent.match(/why/i) =='why') ? 'serving '+thisperson+' is my business'
    : (q.textContent.match(/how/i) == 'How' || q.textContent.match(/how/i) =='how')? 'serving '+thisperson+' is my business'
    : 0;  
    
    
    
    
    
    
    
    // ((q.textContent.match(/what/i) == 'what' || q.textContent.match(/what/i) == 'What') 
    // && (q.textContent.match(/why/i) == 'Why' || q.textContent.match(/why/i) =='why')) ? 'being '+thisperson+' is irrelevant'
    // : ((q.textContent.match(/what/i) == 'what' || q.textContent.match(/what/i) == 'What') 
    // && (q.textContent.match(/how/i) == 'how' || q.textContent.match(/how/i) =='how')) ? 'being '+thisperson+' is irrelevant'
    // : (q.textContent.match(/when/i) == 'when' || q.textContent.match(/when/i) == 'When') ? 'being '+thisperson+' is irrelevant'
    // : (q.textContent.match(/where/i) == 'Where' || q.textContent.match(/where/i) =='where')? 'being '+thisperson+' is irrelevant'
    // : (q.textContent.match(/what/i) == 'what' || q.textContent.match(/what/i) == 'What')? 'being '+thisperson+' is irrelevant'
    // : (q.textContent.match(/why/i) == 'Why' || q.textContent.match(/why/i) =='why') ? 'being '+thisperson+' is irrelevant'
    // : (q.textContent.match(/how/i) == 'How' || q.textContent.match(/how/i) =='how')? 'being '+thisperson+' is irrelevant'
    // : (q.textContent.match(/how/i) == 'How' || q.textContent.match(/how/i) =='how')? 'being '+thisperson+' is irrelevant'
    // : 0;  
    
    // q1[8].textContent = (q.textContent.match(/when/i) == 'when' || q.textContent.match(/when/i) == 'When') ?'when healthy'   
    // : (q.textContent.match(/where/i) == 'Where' || q.textContent.match(/where/i) =='where')? 'at school' 
    // : (q.textContent.match(/what/i) == 'what' || q.textContent.match(/what/i) == 'What')? 'I oppose this bias'
    // : (q.textContent.match(/why/i) == 'Why' || q.textContent.match(/why/i) =='why') ?  'they feel good'
    // : (q.textContent.match(/how/i) == 'How' || q.textContent.match(/how/i) =='how')? 'My ideal client'
    // : 0;
    
    // (q.textContent.match(/when/i) == 'when' || q.textContent.match(/when/i) == 'When') ? 'holidays'
    // : (q.textContent.match(/where/i) == 'Where' || q.textContent.match(/where/i) =='where')? 'in lockdown' 
    // : (q.textContent.match(/what/i) == 'what' || q.textContent.match(/what/i) == 'What')? 'its quality'
    // : (q.textContent.match(/why/i) == 'Why' || q.textContent.match(/why/i) =='why') ? 'not sure why'
    // : (q.textContent.match(/how/i) == 'How' || q.textContent.match(/how/i) =='how')? 'My ideal client'
    // : 0;
    
    q1[9].textContent = ((q.textContent.match(/what/i) == 'what' || q.textContent.match(/what/i) == 'What') 
    && (q.textContent.match(/why/i) == 'Why' || q.textContent.match(/why/i) =='why')) ?  'to anyone ' +thisperson+ it+' is irrelevant'
    : ((q.textContent.match(/what/i) == 'what' || q.textContent.match(/what/i) == 'What') 
    && (q.textContent.match(/how/i) == 'how' || q.textContent.match(/how/i) =='how')) ?    'to anyone ' +thisperson+ it+' is irrelevant'
    : (q.textContent.match(/when/i) == 'when' || q.textContent.match(/when/i) == 'When') ?   'to anyone ' +thisperson+  it+' is irrelevant'
    : (q.textContent.match(/where/i) == 'Where' || q.textContent.match(/where/i) =='where')?   'to anyone ' +thisperson+  it+' is irrelevant'
    : (q.textContent.match(/what/i) == 'what' || q.textContent.match(/what/i) == 'What')?   'to anyone ' +thisperson+  it+' is irrelevant'
    : (q.textContent.match(/why/i) == 'Why' || q.textContent.match(/why/i) =='why') ?    'to anyone ' +thisperson+ it+' is irrelevant'
    : (q.textContent.match(/how/i) == 'How' || q.textContent.match(/how/i) =='how')?   'to anyone ' +thisperson+ it+' is irrelevant'
    : 0; 
    
    // q1[9].textContent = (q.textContent.match(/when/i) == 'when' || q.textContent.match(/when/i) == 'When') ? 'soon after use'   
    // : (q.textContent.match(/where/i) == 'Where' || q.textContent.match(/where/i) =='where')?  'doesn\'t matter'  
    // : (q.textContent.match(/what/i) == 'what' || q.textContent.match(/what/i) == 'What')? it+' offers convenience'
    // : (q.textContent.match(/why/i) == 'Why' || q.textContent.match(/why/i) =='why') ? 'cost of '+it+ ' too high' 
    // : (q.textContent.match(/how/i) == 'How' || q.textContent.match(/how/i) =='how')? 'My dideal client'
    // : 0;
    
    q1[10].textContent = (q.textContent.match(/against/i) == 'against')? 'I really oppose this bias'
    : (q.textContent.match(/when/i) == 'when' || q.textContent.match(/when/i) == 'When') ?'I oppose this bias'  
    : (q.textContent.match(/where/i) == 'Where' || q.textContent.match(/where/i) =='where')? 'I oppose this bias'
    : (q.textContent.match(/what/i) == 'what' || q.textContent.match(/what/i) == 'What')? 'I oppose this bias'
    : (q.textContent.match(/why/i) == 'Why' || q.textContent.match(/why/i) =='why') ?  'I oppose this bias'
    : (q.textContent.match(/how/i) == 'How' || q.textContent.match(/how/i) =='how')? 'I oppose this bias'
    : 0;
    
    
    
    q1[11].textContent = (q.textContent.match(/when/i) == 'when' || q.textContent.match(/when/i) == 'When') ? 'during meals' 
    : (q.textContent.match(/where/i) == 'Where' || q.textContent.match(/where/i) =='where')?  'in business environments' 
    : (q.textContent.match(/what/i) == 'what' || q.textContent.match(/what/i) == 'What')? 'few dollars'
    : (q.textContent.match(/why/i) == 'Why' || q.textContent.match(/why/i) =='why') ? 'My ideal client' 
    : (q.textContent.match(/how/i) == 'How' || q.textContent.match(/how/i) =='how')? 'My ideal client'
    : 0;
    
    q1[12].textContent = (q.textContent.match(/when/i) == 'when' || q.textContent.match(/when/i) == 'When') ? 'when at home' 
    : (q.textContent.match(/where/i) == 'Where' || q.textContent.match(/where/i) =='where')? 'in academia'
    : (q.textContent.match(/what/i) == 'what' || q.textContent.match(/what/i) == 'What')? 'much money'
    : (q.textContent.match(/why/i) == 'Why' || q.textContent.match(/why/i) =='why') ?  'we have trust'
    : (q.textContent.match(/how/i) == 'How' || q.textContent.match(/how/i) =='how')? 'My ideal client'
    : 0;
    
    q1[13].textContent = (q.textContent.match(/when/i) == 'when' || q.textContent.match(/when/i) == 'When') ?'off and on'   
    : (q.textContent.match(/where/i) == 'Where' || q.textContent.match(/where/i) =='where')? 'in public spaces' 
    : (q.textContent.match(/what/i) == 'what' || q.textContent.match(/what/i) == 'What')? 'many bad things'
    : (q.textContent.match(/why/i) == 'Why' || q.textContent.match(/why/i) =='why') ?  it+' and '+thisperson+ ' match'  
    : (q.textContent.match(/how/i) == 'How' || q.textContent.match(/how/i) =='how')? 'My ideal client'
    : 0;
    
    q1[14].textContent = (q.textContent.match(/when/i) == 'when' || q.textContent.match(/when/i) == 'When') ? '24/7' 
    : (q.textContent.match(/where/i) == 'Where' || q.textContent.match(/where/i) =='where')? 'only in private' 
    : (q.textContent.match(/what/i) == 'what' || q.textContent.match(/what/i) == 'What')? 'nothing bad at all'
    : (q.textContent.match(/why/i) == 'Why' || q.textContent.match(/why/i) =='why') ? 'shared values'
    : (q.textContent.match(/how/i) == 'How' || q.textContent.match(/how/i) =='how')? +thisperson+ '\'s need special attention'
    : 0;
    
    q1[15].textContent = (q.textContent.match(/when/i) == 'when' || q.textContent.match(/when/i) == 'When') ?'when online'    
    : (q.textContent.match(/where/i) == 'Where' || q.textContent.match(/where/i) =='where')? 'limited availability'  
    : (q.textContent.match(/what/i) == 'what' || q.textContent.match(/what/i) == 'What')? 'its price tag'
    : (q.textContent.match(/why/i) == 'Why' || q.textContent.match(/why/i) =='why') ? 'I really market to them'   
    : (q.textContent.match(/how/i) == 'How' || q.textContent.match(/how/i) =='how')? 'My dideal client'
    : 0;
    
    q1[16].textContent = (q.textContent.match(/when/i) == 'when' || q.textContent.match(/when/i) == 'When') ? 'AM' 
    : (q.textContent.match(/where/i) == 'Where' || q.textContent.match(/where/i) =='where')? 'locally' 
    : (q.textContent.match(/what/i) == 'what' || q.textContent.match(/what/i) == 'What')? it+' is pro '+thisperson
    : (q.textContent.match(/why/i) == 'Why' || q.textContent.match(/why/i) =='why') ? 'they get exclusivity'
    : (q.textContent.match(/how/i) == 'How' || q.textContent.match(/how/i) =='how')? it+' is pro '+thisperson
    : 0;
    
    q1[17].textContent = (q.textContent.match(/when/i) == 'when' || q.textContent.match(/when/i) == 'When') ?'during personal time'
    : (q.textContent.match(/where/i) == 'Where' || q.textContent.match(/where/i) =='where')? 'directly from me'
    : (q.textContent.match(/what/i) == 'what' || q.textContent.match(/what/i) == 'What')? 'the idea of it'
    : (q.textContent.match(/why/i) == 'Why' || q.textContent.match(/why/i) =='why') ? 'They are VIP'
    : (q.textContent.match(/how/i) == 'How' || q.textContent.match(/how/i) =='how')? it+' is pro '+thisperson
    : 0;
    
    q1[18].textContent = (q.textContent.match(/when/i) == 'when' || q.textContent.match(/when/i) == 'When') ?'PM'
    : (q.textContent.match(/where/i) == 'Where' || q.textContent.match(/where/i) =='where')? 'everywhere'
    : (q.textContent.match(/what/i) == 'what' || q.textContent.match(/what/i) == 'What')? 'the very notion'
    : (q.textContent.match(/why/i) == 'Why' || q.textContent.match(/why/i) =='why') ? 'inexplicable'
    : (q.textContent.match(/how/i) == 'How' || q.textContent.match(/how/i) =='how')? 'My ideal client'
    : 0;    
    
    q1[19].textContent = (q.textContent.match(/when/i) == 'when' || q.textContent.match(/when/i) == 'When') ? 'at parties'
    : (q.textContent.match(/where/i) == 'Where' || q.textContent.match(/where/i) =='where')? 'wealthy areas'
    : (q.textContent.match(/what/i) == 'what' || q.textContent.match(/what/i) == 'What')? 'Nothing but perfection'
    : (q.textContent.match(/why/i) == 'Why' || q.textContent.match(/why/i) =='why') ? 'limted supply'
    : (q.textContent.match(/how/i) == 'How' || q.textContent.match(/how/i) =='how')? 'My ideal client'
    : 0;
    
    q1[20].textContent = (q.textContent.match(/when/i) == 'when' || q.textContent.match(/when/i) == 'When') ?'when stressed'
    : (q.textContent.match(/where/i) == 'Where' || q.textContent.match(/where/i) =='where')? 'only select places'
    : (q.textContent.match(/what/i) == 'what' || q.textContent.match(/what/i) == 'What')? 'it is lacking'
    : (q.textContent.match(/why/i) == 'Why' || q.textContent.match(/why/i) =='why') ? 'High Demand'
    : (q.textContent.match(/how/i) == 'How' || q.textContent.match(/how/i) =='how')? 'My dideal client'
    : 0;
    
    q1[21].textContent = (q.textContent.match(/when/i) == 'when' || q.textContent.match(/when/i) == 'When') ?'during tragedy'
    : (q.textContent.match(/where/i) == 'Where' || q.textContent.match(/where/i) =='where')? 'from their home'
    : (q.textContent.match(/what/i) == 'what' || q.textContent.match(/what/i) == 'What')? 'its country of origin'
    : (q.textContent.match(/why/i) == 'Why' || q.textContent.match(/why/i) =='why') ? 'my product was made for them'
    : (q.textContent.match(/how/i) == 'How' || q.textContent.match(/how/i) =='how')? 'a great large sum'
    : 0;
    
    
        z1[0].setAttribute('value',q1[0].textContent);
    // z1[0].setAttribute('name',q1[0].textContent);
        z1[1].setAttribute('value',q1[1].textContent);
    // z1[1].setAttribute('name',q1[1].textContent);
        z1[2].setAttribute('value',q1[2].textContent);
    // z1[2].setAttribute('name',q1[2].textContent);
        z1[3].setAttribute('value',q1[3].textContent);
    // z1[3].setAttribute('name',q1[3].textContent);
        z1[4].setAttribute('value',q1[4].textContent);
    // z1[4].setAttribute('name',q1[4].textContent);
        z1[5].setAttribute('value',q1[5].textContent);
    // z1[5].setAttribute('name',q1[5].textContent);
        z1[6].setAttribute('value',q1[6].textContent);
    // z1[6].setAttribute('name',q1[6].textContent);
        z1[7].setAttribute('value',q1[7].textContent);
    // z1[7].setAttribute('name',q1[7].textContent);
        z1[8].setAttribute('value',q1[8].textContent);
    // z1[8].setAttribute('name',q1[8].textContent);
        z1[8].setAttribute('value',q1[8].textContent);
    // z1[8].setAttribute('name',q1[8].textContent);
        z1[9].setAttribute('value',q1[9].textContent);
    // z1[9].setAttribute('name',q1[9].textContent);
        z1[10].setAttribute('value',q1[10].textContent);
    // z1[10].setAttribute('name',q1[10].textContent);
        z1[11].setAttribute('value',q1[11].textContent)
    // z1[11].setAttribute('name',q1[11].textContent);
        z1[12].setAttribute('value',q1[12].textContent);
    // z1[12].setAttribute('name',q1[12].textContent);
        z1[13].setAttribute('value',q1[13].textContent);
    // z1[13].setAttribute('name',q1[13].textContent);
        z1[14].setAttribute('value',q1[14].textContent);
    // z1[14].setAttribute('name',q1[14].textContent);
        z1[15].setAttribute('value',q1[15].textContent);
    // z1[15].setAttribute('name',q1[15].textContent);
        z1[16].setAttribute('value',q1[16].textContent);
    // z1[16].setAttribute('name',q1[16].textContent);
    z1[17].setAttribute('value',q1[17].textContent);
    // z1[17].setAttribute('name',q1[17].textContent);
    z1[18].setAttribute('value',q1[18].textContent);
    z1[19].setAttribute('value',q1[19].textContent);
    z1[20].setAttribute('value',q1[20].textContent);
    z1[21].setAttribute('value',q1[21].textContent);
    // z1[22].setAttribute('value',q1[22].textContent);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    game = document.location.search.split('+')
    game = game.join(' ')
    
    
     aha = (game == ''|| game =="?written=") ? questions : game ;

    answer = 
    {'z0' : (z1[0].checked) ? z1[0].value : ''
    ,
    'z1' : (z1[1].checked) ? z1[1].value : ''
    ,
    'z2' : (z1[2].checked) ? z1[2].value : ''
    ,
    'z3' : (z1[3].checked) ? z1[3].value : ''
    ,
    'z4' : (z1[4].checked) ? z1[4].value : ''
    ,
    'z5' : (z1[5].checked) ? z1[5].value : ''
    ,
    'z6' : (z1[6].checked) ? z1[6].value : ''
    ,
    'z7' : (z1[7].checked) ? z1[7].value : ''
    ,
    'z8' : (z1[8].checked) ? z1[8].value : ''
    ,
    'z9' : (z1[9].checked) ? z1[9].value : ''
    ,
    'z10' : (z1[10].checked) ? z1[10].value : ''
    ,
    'z11' : (z1[11].checked) ? z1[11].value : ''
    ,
    'z12' : (z1[12].checked) ? z1[12].value : ''
    ,
    'z13' : (z1[13].checked) ? z1[13].value : ''
    ,
    'z14' : (z1[14].checked) ? z1[14].value : ''
    ,
    'z15' : (z1[15].checked) ? z1[15].value : ''
    ,
    'z16' : (z1[16].checked) ? z1[16].value : ''
    ,
    'z17' : (z1[17].checked) ? z1[17].value : ''
    ,
    'z18' : (z1[18].checked) ? z1[18].value : ''
    ,
    'z19' : (z1[19].checked) ? z1[19].value : ''
    ,
    'z20' : (z1[20].checked) ? z1[20].value : ''
    ,
    'z21' : (z1[21].checked) ? z1[21].value : ''
    // TO FIX
    // ,  for text input form
    // 'z22' : (z1[22].checked) ? z1[22].value : ''
    }
    
    session = { aha , answer};
    // storeGame(session);
    
    
    
    
    // storeanswers()
    
    

    
    
    
    return session;
    }
    // end of above function
    // xc = ttt[0]["a_timestamp: "]+ttt[0]["b_question: "]+JSON.stringify(ttt[0]["c_answers: "])
    // if(!localStorage.attempts) localStorage.attempts = "[]";
    // attempts = JSON.parse(localStorage.attempts);
    // localStorage.attempts = JSON.stringify(attempts)
    // attempts.push(session)
    


    function storeGame(s){
const y= s;
x = document.lastModified;
const xy ={'a_timestamp: ':x, 'b_question: ':y.aha, 'c_answers: ':y.answer};
ttt = [];
ttt.push(xy); 
qb4 = ttt[0]["b_question: "]
qnow =z1[19].value
nxt =qb4+'__START_QUESTION2__'+qnow;
z1[20].setAttribute('value',nxt);


// d = document.location.search.concat('?'+qb4+'?'+qnow)
// _b1 = (document.location.pathname == '/Users/davidkene/Desktop/dice%20game/dice-game.html') ? qnow 
//         : (document.location.pathname == '/Users/davidkene/Desktop/dice%20game/dice-game1.html') ? qnow 
//         : (document.location.pathname == '/Users/davidkene/Desktop/dice%20game/dice-game2.html') ? qnow 
//         : qb4
const an = ttt[0]["b_question: "]
// const xc = ttt[0]["b_question: "]
// const fin = $1;
// ttt.unshift(fin); 
z1 = document.querySelectorAll('input')  
,   
(z1[0].checked) ? z1[0].checked = false : z1[0].checked = false
,
(z1[1].checked) ? z1[1].checked = false : z1[1].checked = false
,
(z1[2].checked) ? z1[2].checked = false : z1[2].checked = false
,
(z1[3].checked) ? z1[3].checked = false : z1[3].checked = false
,
(z1[4].checked) ? z1[4].checked = false : z1[4].checked = false
,
(z1[5].checked) ? z1[5].checked = false : z1[5].checked = false
,
(z1[6].checked) ? z1[6].checked = false : z1[6].checked = false
,
(z1[7].checked) ? z1[7].checked = false : z1[7].checked = false
,
(z1[8].checked) ? z1[8].checked = false : z1[8].checked = false
,
(z1[9].checked) ? z1[9].checked = false : z1[9].checked = false
,
(z1[10].checked) ? z1[10].checked = false : z1[10].checked = false
,
(z1[11].checked) ? z1[11].checked = false : z1[11].checked = false
,
(z1[12].checked) ? z1[12].checked = false : z1[12].checked = false
,
(z1[13].checked) ? z1[13].checked = false : z1[13].checked = false
,
(z1[14].checked) ? z1[14].checked = false : z1[14].checked = false
,
(z1[15].checked) ? z1[15].checked = false : z1[15].checked = false
,
(z1[16].checked) ? z1[16].checked = false : z1[16].checked = false
,
(z1[17].checked) ? z1[17].checked = false : z1[17].checked = false
,
(z1[18].checked) ? z1[18].checked = false : z1[18].checked = false


return ttt;
}

      z1 = document.querySelectorAll('input'); 
         (z1[0].checked) ?  z1[0].checked = false : z1[0].checked = false   
    ,
    (z1[1].checked) ?  z1[1].checked = false : z1[1].checked = false
    ,
    (z1[2].checked) ?  z1[2].checked = false : z1[2].checked = false
    ,
    (z1[3].checked) ?  z1[3].checked = false : z1[3].checked = false
    ,
    (z1[4].checked) ?  z1[4].checked = false : z1[4].checked = false
    ,
    (z1[5].checked) ?  z1[5].checked = false : z1[5].checked = false
    ,
    (z1[6].checked) ?  z1[6].checked = false : z1[6].checked = false
    ,
    (z1[7].checked) ?  z1[7].checked = false : z1[7].checked = false
    ,
    (z1[8].checked) ?  z1[8].checked = false : z1[8].checked = false
    ,
    (z1[9].checked) ?  z1[9].checked = false : z1[9].checked = false
    ,
    (z1[10].checked) ?  z1[10].checked = false : z1[10].checked = false
    ,
    (z1[11].checked) ?  z1[11].checked = false : z1[11].checked = false
    ,
    (z1[12].checked) ?  z1[12].checked = false : z1[12].checked = false
    ,
    (z1[13].checked) ?  z1[13].checked = false : z1[13].checked = false
    ,
    (z1[14].checked) ?  z1[14].checked = false : z1[14].checked = false
    ,
    (z1[15].checked) ?  z1[15].checked = false : z1[15].checked = false
    ,
    (z1[16].checked) ?  z1[16].checked = false : z1[16].checked = false
    ,
    (z1[17].checked) ?  z1[17].checked = false : z1[17].checked = false
    ,
    (z1[18].checked) ?  z1[18].checked = false : z1[18].checked = false
    ,
    (z1[19].checked) ?  z1[19].checked = false : z1[19].checked = false
    ,
    (z1[20].checked) ?  z1[20].checked = false : z1[20].checked = false
    ,
    (z1[21].checked) ?  z1[21].checked = false : z1[21].checked = false
    ,
    (z1[22].checked) ?  z1[22].checked = false : z1[22].checked = false;
    
    
    
    
    // z1 = document.querySelectorAll('input')  
    
    // SOURCE HELP FROM ...
    // Shortcut to document.querySelector (not jquery)
    // function storeGame(){ 
    //     vv = document.querySelector.apply(document, arguments); 
    //     return vv;
    // }
    // // If formValues doesn't exist, add it
    // if (!localStorage.formValues) localStorage.formValues = "[]";
    // // Get formValues formValues = JSON.parse(localStorage.formValues);
    // // When the form is submitted
    // storeGame('form').addEventListener('click', function(e) {
    //     e.preventDefault();
    //      aq1 = storeGame("#q1").value; //checkboxOne
    //      aq2 = storeGame("#q2").value;
    //      aq3 = storeGame("#q3").value; //checkboxOne
    //      aq4 = storeGame("#q4").value;
    //      aq5 = storeGame("#q5").value; //checkboxOne
    //      aq6 = storeGame("#q6").value;
    //      aq7 = storeGame("#q7").value; //checkboxOne
    //      aq8 = storeGame("#q8").value;
    //      aq9 = storeGame("#q9").value; //checkboxOne
    //      aq10 = storeGame("#q10").value;
    //      aq11 = storeGame("#q11").value; //checkboxOne
    //      aq12 = storeGame("#q12").value;
    //      aq13 = storeGame("#q13").value; //checkboxOne
    //      aq14 = storeGame("#q14").value;
    //      aq15 = storeGame("#q15").value; //checkboxOne
    //      aq16 = storeGame("#q16").value;
    //      aq17 = storeGame("#q17").value; //checkboxOne
    //      aq18 = storeGame("#q18").value;
    //      aq19 = storeGame("#q19").value; //checkboxOne
    //      aq20 = storeGame("#q20").value;
    //      aq21 = storeGame("#q21").value; //checkboxOne
    //      aq22 = storeGame("#q22").value;
    
    //     // Push a new object containing data
    //     formValues.push({
    //         aq1: aq1,
    //         aq2: aq2,
    //         aq3: aq3,
    //         aq4: aq4,
    //         aq5: aq5,
    //         aq6: aq6,
    //         aq7: aq7,
    //         aq8: aq8,
    //         aq9: aq9,
    //         aq10: aq10,
    //         aq11: aq11,
    //         aq12: aq12,
    //         aq13: aq13,
    //         aq14: aq14,
    //         aq15: aq15,
    //         aq16: aq16,
    //         aq16: aq16,
    //         aq17: aq17,
    //         aq18: aq18,
    //         aq19: aq19,
    //         aq20: aq20,
    //         aq21: aq21,
    //         aq22: aq22
    //     });
         
    //     // Write to localStorage
    //     localStorage.formValues = JSON.stringify(formValues);
       
    //     storeGame("#localstorage").innerHTML = localStorage.formValues;
    // }, false);
    
    
    
    
    
    
    
    // const y= s;
    // x = document.lastModified;
    // const xy ={'a_timestamp: ':x, 'b_question: ':y.aha, 'c_answers: ':y.answer};
    // ttt = [];
    // ttt.push(xy); 
    // qb4 = ttt[0]["b_question: "]
    // qnow =z1[19].value
    // nxt =qb4+'__START_QUESTION3__'+qnow;
    // z1[20].setAttribute('value',nxt);
    // d = document.location.search.concat('?'+document.location.pathname+qnow)
    // _c2 = (document.location.pathname == '/Users/davidkene/Desktop/dice%20game/dice-game.html') ? qnow 
    //         : (document.location.pathname == '/Users/davidkene/Desktop/dice%20game/dice-game1.html') ? qnow 
    //         : (document.location.pathname == '/Users/davidkene/Desktop/dice%20game/dice-game2.html') ? qnow 
    //         : qb4;
    // const an = ttt[0]["b_question: "]
    // const xc = ttt[0]["b_question: "]
    // const fin = $1;
    // ttt.unshift(fin); 
    

   


    function storeanswers(){
    xxx = []
    z1 = document.querySelectorAll('input')  
    
    ,
     (z1[0].checked) ?  xxx.push(z1[0].value) : z1[0].checked = false
    ,
    (z1[1].checked) ?  xxx.push(z1[1].value) : z1[1].checked = false
    ,
    (z1[2].checked) ?  xxx.push(z1[2].value) : z1[2].checked = false
    ,
    (z1[3].checked) ? xxx.push(z1[3].value) : z1[3].checked = false
    ,
    (z1[4].checked) ?  xxx.push(z1[4].value) : z1[4].checked = false
    ,
    (z1[5].checked) ?  xxx.push(z1[5].value) : z1[5].checked = false
    ,
    (z1[6].checked) ?  xxx.push(z1[6].value) : z1[6].checked = false
    ,
    (z1[7].checked) ?  xxx.push(z1[7].value) : z1[7].checked = false
    ,
    (z1[8].checked) ?   xxx.push(z1[8].value) : z1[8].checked = false
    ,
    (z1[9].checked) ?   xxx.push(z1[9].value) : z1[9].checked = false
    ,
    (z1[10].checked) ?   xxx.push(z1[10].value) : z1[10].checked = false
    ,
    (z1[11].checked) ?   xxx.push(z1[11].value) : z1[11].checked = false
    ,
    (z1[12].checked) ?   xxx.push(z1[12].value) : z1[12].checked = false
    ,
    (z1[13].checked) ?   xxx.push(z1[13].value) : z1[13].checked = false
    ,
    (z1[14].checked) ?   xxx.push(z1[14].value) : z1[14].checked = false
    ,
    (z1[15].checked) ?   xxx.push(z1[15].value) : z1[15].checked = false
    ,
    (z1[16].checked) ?   xxx.push(z1[16].value) : z1[16].checked = false
    ,
    (z1[17].checked) ?   xxx.push(z1[17].value) : z1[17].checked = false
    ,
    (z1[18].checked) ?   xxx.push(z1[18].value) : z1[18].checked = false
    ,
    (z1[19].checked) ?   xxx.push(z1[19].value) : z1[19].checked = false
    ,
    (z1[20].checked) ?   xxx.push(z1[20].value) : z1[20].checked = false
    ,
    (z1[21].checked) ?   xxx.push(z1[21].value) : z1[21].checked = false
    ,
    (z1[22].checked) ?   xxx.push(z1[22].value) : z1[22].checked = false;
       
    return xxx;
       }
    


    
    // storeanswers();
    // dave = Object.assign({},xxx);
    
    
    
    
    
        // var ls1 = JSON.parse(localStorage);
        // ls1.push(localStorage);
    
    //    localStorage.insight = JSON.stringify(ls1);
    
        // (!localStorage === ' ')?  insight.push(localStorage) : insight.push(localStorage) ;
    // session = document.baseURI;    
    // (!localStorage === ' ')?  insight.push(localStorage) : insight.push(localStorage) ;
    // (!localStorage === ' ')?  insight.push(localStorage) : insight.push(localStorage) ;
    
    
    // story();
    
    // function story()
    //     {
    
    // box = [ ];
    
    // ls2 = localStorage.getItem('ls1')
    // ss2 = sessionStorage.getItem('ss1')
    
    // box.push(ls2)
    // box.push(ss2)
    
    // storys()
    //    return box;
    //     }
    
    
    
    
    
    //     function storys()
    //     {
    
    // boxx = [ ];
    // ttt2;
    // // ls2 = localStorage.getItem('ls1')
    // // ss2 = sessionStorage.getItem('ss1')
    // boxy = document.children
    // boxx.push(box)
    //    return [boxx, boxy];
    //     }   
    
    
    // kene = JSON.parse(JSON.stringify(ttt)); 
    //story();
    
    
     //= Object.assign({},storeGame(session).ttt);
    
    
    
    
    
    //new function
    // function hold(session){
    // const game= session;
    // all = [];
    // // all.push(game);
    // all.unshift(game);
    // // all[0].
    // all.push(document.location.search);
    // all.push(storeGame());
    // all.push(game);
    
    // return all; 
    // }
    //end of function
    
    
    
    
    // function uncheck(){
    
    // return 
    
    // }
    // NEED TO FIX TO HERE
    
    // Math.floor(Math.random() * 4) + 1
    
    
    /*
    GAME MECHANICS
    
    //HUMAN ANGLE BY HUMAN ANGEL INC. est 2018 Human Angle: Considerations before the code.
    ## CONCEPT AND RULES: This is a game played with both dice and cards. 
    //First you roll the dice. Then you answer card questions.
    
    H	Hispanic		A	Asian
    U	Underage		N	Non-Binary
    M	Multiplex		G	Gay
    A	African			L	Lesbian
    N	Native			E	European
    B	Blind			B	Blank
    
    CUBE DIE #1  H	Hispanic	A	African		N	Native		A	Asian		E	European	B 	Blank
    CUBE DIE #2  U	Underage	M	Multiplex	N	Non-Binary	G	Gay			L	Lesbian		B	Blind
    
    DICE REPRESENTATIONS> BY PLACE + BY ETHNICITY
    H:Hispanic: Latin Diaspora		A:African: African Diaspora		N:Native: Native Peoples
    A: Asian : Asian Diaspora		E:European: European Diaspora
    
    DICE REPRESENTATIONS> BY IDENTITY + BY CULTURE
    N: Non-Binary: Transgender	G: Gay: Alt Male	L: Lesbian: ALt Female
    
    DICE REPRESENTATIONS> BY GAME INCLUSION
    U: Underage	Appropriateness 	M: Multiplex Language Translations
    B: Blind Vision Impaired		B: Blank Open
    
    # GAMEPLAY
    # PLAYERS DONT COMPETE AGAINST ANOTHER. THEY COMPETE WITH ONE ANOTHER. SAME TEAM.
    # RATHER THAN NUMBERS ON DICE, GAME USES LETTERS
    # RATHER THAN HAVE SUITES ON CARDS, GAME USES QUESTION-TYPE AND QUESTION ON CARD
    # GAME REQUIRES RECORDING DEVICE TO COLLECT ANSWERS TO QUESTION PROMPTS
    # ONLINE VERSION CAN CONNECT TO LIVEPAD AND SHARE VIA EMAIL, ETC...
    # A DEALER DEALS AN ARRAY OF PRESHUFFLED CARDS FROM (DECK OF 52 QUESTIONS)
    # 1 PLAYER = 52 CARDS 2 PLAYERS= 26 CARDS 3 PLAYERS= 17 CARDS 4 PLAYERS= 13 CARDS 
    # 5 PLAYERS+ NUMBER OF PLAYERS DIVIDE 52 CARDS WITH REMAINDER IN POT AS BONUS POINTS
    # IDENTIFY CHOICE TARGETS >> SELECT DEMOGRAPHICS (MULTI - SELECT)
    # RANK CHOICES SO THAT A HEIRARCHY IS FORMED
    # DICE ROLL > SEE 2 LETTERS
    # DICE WITH ABOVE LETTERS ON EACH FACE REPRESENTING PEOPLE FROM VARIOUS CATEGORIES
    # ANSWER ROUNDS OF QUESTIONS FOR EACH DEMOGRAPHIC (52 CARD QUESTIONS)
    # ROLL AND RECORD 2 LETTERS FACE UP
    # BASED ON LETTERS ROLLED ANSWER QUESTIONS AS RELATED TO THAT AUDIENCE GROUP
    # ANSWER QUESTIONS IN A TRIPARTITE MANNER
    # THINK IN TERMS OF MARKET RESEARCH AND CLIENT KNOWLEDGE
    # THINK IN TERMS OF ADDRESSING CONTENT
    # THINK IN TERMS OF ADDRESSING ACCESS AND ACCESSIBILITY
    # TO EACH QUESTION TELL WHAT YOU KNOW ABOUT THAT PERSON IN GENERAL
    AND WHAT YOUR CULTURAL LANGUAGE WILL BE TO THAT PERSON IN GENRAL 
    AND WHAT DEVICES AND SOFTWARE CONSIDERATIONS THAT PERSON REQUIRES IN GENERAL. HOWEVER, SPECIFICITY WINS THE GAME!
    
    ## QUESTION CARDS (x52) QUESTION CATEGORIES (x4) SUBCATEGORY QUESTIONS (x13)
    ## CATEGORIES: WHY || HOW || WHEN || WHERE	
    ## SUB CATEGORIES:	DIGEST 3 || DISCOVER 3 || PURPOSE 4 || REVENUE 1 || VALUE 2
    ## ? [WHY] [HOW] [WHEN] [WHERE] DOES THIS [DICE ROLLED] PERSON ...
    ## SUBCATEGORY QUESTIONS X13
    ## DISCOVER?#FIND YOUR PRODUCT/SERVICE?
    ## DISCOVER?#SHARE YOUR PRODUCT/SERVICE?
    ## PUPOSE RED	?#USE OR ENGAGE WITH YOUR PRODUCT/SERVICE IN PERSON?
    ## PUPOSE RED	?#USE OR ENGAGE WITH YOUR PRODUCT/SERVICE WITH OTHER PEOPLE?
    ## PUPOSE RED	?#USE OR ENGAGE WITH YOUR PRODUCT/SERVICE ONLINE?
    ## PUPOSE RED	?#USE OR ENGAGE WITH YOUR PRODUCT/SERVICE ONLINE WITH OTHER PEOPLE?
    ## REVENUE GRN	?#PAY FOR YOUR PRODUCT/SERVICE?
    ## DIGEST YLLW	?#IN TERMS OF FREQUENCY USE YOUR PRODUCT/SERVICE?
    ## VALUE BLUE	?#BENEFIT FROM USING YOUR PRODUCT/SERVICE?
    ## DISCOVER?#SEE YOUR PRODUCT/SERVICE?
    ## VALUE BLUE 	?#DISTINGUISH YOUR PRODUCT/SERVICE FROM OTHERS?
    ## DIGEST YLLW	?#LIKE YOUR PRODUCT/SERVICE?
    ## DIGEST YLLW	?#DISLIKE YOUR PRODUCT/SERVICE?
    
    ### WINNING
    ### FIRST PLAYER TO ANSWER ALL CARD QUESTIONS IN POSSESSION 'WINS'...
    ### PLAYERS THAT ANSWER ALL QUESTIONS OF A CERTAIN CATEGORY 'WIN'...{ALL WHY QUESTIONS}
    ### PLAYER THAT ANSWERS A NUMBER OF QUESTIONS WITHIN A TIME-PERIOD 'WINS'...(2 MIN GAME)
    ### 1 PLAYER = ANSWER ALL CARD QUESTIONS 'WIN'...
    ### 2 PLAYERS+ = FIRST PLAYER TO ANSWER ALL CARD QUESTIONS + EXTRA CARD QUESTIONS 'WIN'...
    
    */
    
    
            