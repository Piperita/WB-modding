// ==UserScript==
// @name        Wolfs-blog
// @namespace   Pip
// @include     http://www.wolfs-blog.de/201*
// @version     1
// @grant       none
// ==/UserScript==

//Load JQuery
document.head.appendChild(document.createElement("script")).src="http://code.jquery.com/jquery-2.1.4.js"

/***************************************************
************        Functions	        ************
****************************************************/
function launchAll(){
	var sidebarToggle = 0;

	//Reply-buttons
	function collexRep(ver){
		displayLength=ver.parentElement.parentElement.parentElement.children[1].children.length
		if(ver.innerHTML.contains('Show')){		
			ver.parentElement.parentElement.parentElement.children[1].style.display = "block"
			ver.innerHTML = "Collapse "+displayLength+" Comments"
		} else if(ver.innerHTML.contains('Collapse')){
			ver.parentElement.parentElement.parentElement.children[1].style.display = "none"
			ver.innerHTML = "Show "+displayLength+" Comments"
		}
	}

	//Sidebar 
	function toggleSidebar(){
		if(sidebarToggle == 0){
			$('#related_posts').hide()
			$('#sidebar').hide()	
			$('.content').css("width","100%")
			sidebarToggle = 1
			$('#toggleSidebar').text("Sidebar")
		} else if(sidebarToggle == 1){
			$('#related_posts').show()
			$('#sidebar').show()	
			$('.content').css("width","660px")
			sidebarToggle = 0
			$('#toggleSidebar').text("Full")
		}
	}

	//Launchpad
	function clickAll(){
	  var v = $('#mb_top_btn')
	  v.after("<div id='container'></div>")
	  v = $('#container')
	  v.append("<div id='sc1' class='subContainer'></div>");
	  v.append("<div id='sc2' class='subContainer'></div>");
	  v.append("<div id='sc3' style='display: block;'></div>");
	  v = $('#sc1')
	  v.append("<div id='showButtonAll'  class='buttonAll'>+</div>");
	  v = $('#sc2')
	  v.append("<div id='hideButtonAll'  class='buttonAll'>-</div>");
	  v = $('#sc3')
	  v.append("<div id='toggleSidebar'  class='buttonAll'>Full</div>");
	  v = $('#mb_top_btn').parents()[0]
	  v.style.top = "87.5%"

	  //manage css of nav-elements
	  $('.subContainer').css(
	  {
		 	"display":'inline',
	  })

	  $('#container').css(
		{
			"display":'block',
		   	"color": "white",
			"width":"50px", 
			//"height":"20px", 
			/*"border":"solid #999 thin",*/
			"text-align":"center",
			"margin-top":"2px",			
			//"padding-top":"4px",
		})

	  $('#showButtonAll').css(
		{
			"display":'inline-block',
			"width":"24px",
			"margin-right":"1px",
			"text-align":"center",
			"cursor":"pointer",
			"background-color":"#69C",
		})

	  $('#hideButtonAll').css(
		{
			"display":'inline-block',
			"width":"24px",
			"margin-left":"1px",	
			"text-align":"center",
			"cursor":"pointer",
			"background-color":"#69C",
		})

	  $('#toggleSidebar').css(
		{
			"display":'block',
			"width":"49px",
			"margin-left":"1px",	
			"margin-top":"1px",	
			"text-align":"center",
			"cursor":"pointer",
			"background-color":"#69C",
		})
	}

	//Expands all threads
	function clickShowButtonAll(){
	  $('.collexButton').filter(function() {
		    var match = 'Show'; 
		    return ( $(this).text().contains(match) );
	  }).click();
	}

	//hides all threads
	function clickHideButtonAll(){
	  $('.collexButton').filter(function() {
		    var match = 'Collapse';
		    return ( $(this).text().contains(match) );
	  }).click();
	}

	//create buttons for replies
	function manageReplies(){
	  $('.comment-reply-link').after("<button class='collexButton repl'></button>");
	  //make buttons invisible if there are no replies, otherwise show nmber of replies
	  a=$('button.repl')
	  a.each( function(i,e) {
	    if (this.parentElement.parentElement.parentElement.children.length==1){
	      this.style.display = 'none';	      
	    } else{
	      this.innerHTML = "Collapse "+this.parentElement.parentElement.parentElement.children[1].children.length+" Comments"
	    }
	  });

	  sel=$('Button.repl'); 
	  sel.css('color','#154A7F').css('backgroundColor','#FCED6A').css('font-weight','700').css('fontSize','9px')
	}

	//links functions to buttons
	function linkFunction(){
		var timer0 = setTimeout(function(){
			document.getElementById("toggleSidebar").onclick = toggleSidebar
			document.getElementById("showButtonAll").onclick = clickShowButtonAll
			document.getElementById("hideButtonAll").onclick = clickHideButtonAll
			lll=$('.collexButton').length
			for (i=0;i<lll;i++){
				document.getElementsByClassName("collexButton")[i].onclick = function(){
					collexRep(this)
				}	
			}
		},500)
	}

/***************************************************
************	Activates functions	************
****************************************************/
	var timer = setTimeout(function(){
		clickAll();		//Launchpad
		manageReplies()		//Reply-buttons
		linkFunction();		//Functions to buttons
	},2000)
}

//start function
launchAll()
