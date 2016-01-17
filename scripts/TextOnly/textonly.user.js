// ==UserScript==
// @name        Wolfsblog_textOnly
// @namespace   Pip
// @include     http://www.wolfs-blog.de/*
// @version     1
// @grant       none
// ==/UserScript==
//-------------
//LOAD JQUERY |
//-------------
document.head.appendChild(document.createElement("script")).src="http://code.jquery.com/jquery-2.1.4.js"

function textOnly(){
	function deleteHighlight(){
		$('div').filter(function() {
		    var match = 'rgb(255, 240, 245)'; // match background-color: black
		    return ( $(this).css('background-color') == match );
		}).css('background-color', 'white');

		$('div').filter(function() {
		    var match = 'rgb(255, 255, 204)'; // match background-color: black                                            
		    return ( $(this).css('background-color') == match );
		}).css('background-color', 'white');

		$('.ckrating_highly_rated').removeClass('ckrating_highly_rated')
		$('.ckrating_hotly_debated').removeClass('ckrating_hotly_debated')
	}

	function deleteSM(){
		//also launch on $('#submit')
		ll=$('img')
		ll.each( function(i,e) {
		  if (this.title == 'Daumen hoch')
		    this.parentElement.style.display = 'none'; 
		});	
	}

	function deleteSmiley(){
    a=$('#comments-box')
    a=a.find('.wp-smiley')
    for each (var item in a) {
      item.outerHTML=item.alt
    }
  }
  
  deleteHighlight()
  deleteSM()
  deleteSmiley()
}
    
var timer = setTimeout(function(){  
  textOnly();
},2500)
