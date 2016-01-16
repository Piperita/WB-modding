//------------------------------------------------------------------------
//Loads replace-function (getSelection not working in FF for textAreas)---
//------------------------------------------------------------------------
document.head.appendChild(document.createElement("script")).src="https://cdn.rawgit.com/timdown/rangyinputs/master/rangyinputs-jquery-src.js"

function editor(){
	//-------------------------------------
	//Area for button-functions------------
	//-------------------------------------
	function test(ver){
	   function negTest(){
	     $('#dialog').hide() 
	   }
	   $('#dialog').show() 
	   $('#dialog')[0].innerHTML="<button id='hide'>Hide</button> <u><b>PREVIEW</b></u><br><br>"
	   $('#dialog')[0].innerHTML+=ver[0].value.replace(/\n/g,"<br>")
	   var eee = setTimeout(function(){
	      document.getElementById("hide").onclick = negTest	
	   },333)   
	}

	function boldWord(ver){
	  ver.surroundSelectedText("<b>","</b>")
	}

	function italizeWord(ver){
	  ver.surroundSelectedText("<i>","</i>")
	}

	function strikeWord(ver){
	  ver.surroundSelectedText("<strike>","</strike>")
	}

	function quoteWord(ver){
	  ver.surroundSelectedText("<blockquote>","</blockquote>")
	}

	function linkWord(ver){
	  link = $("#inOne")[0].value
	  var ausl = '<a href="'+link+'">'
	  ver.surroundSelectedText(ausl,'</a>')
	}

	//-----------------------
	//Creates Button-Area----
	//-----------------------
	var xyz = $("#comment")
	var cont1 =   '<div id="ButtonContainerNew"><button type="button" id="preview" title="Preview" style="">Preview</button><button type="button" id="boldWord" title="Bold"><b>Bold</b></button><button type="button" id="italizeWord" title="Italize"><i>Italized</i></button><button type="button" id="strikeWord" title="Strikethrough""><strike>Strike</strike></button><button type="button" id="quoteWord" title="Blockquote"">Quote</button><button type="button" id="linkWord" title="Hyperlink around selection (Link drawn from input-field)">Link</button><input id="inOne" title="Link for the A-tag" value="http://"></div>'
	$("#comment").before(cont1)

	//------------------------
	//Creates Preview-Area----
	//------------------------
	var xxxxxx = '<div style="position: fixed; background: white; top: 50%; height: 33%; padding: 3px; margin: 3px; border: 7px double black; overflow: scroll; display: none" id="dialog" title="Preview"><button id="hide" style="">Hide</button><u><b>PREVIEW</b></u><br><br></div>'
	$('.content').after(xxxxxx)
	$('#dialog')[0].style.width = $('.content')[0].clientWidth+'px'

	//------------------------
	//CSS for buttons---------
	//------------------------
	var eee = setTimeout(function(){
	    a=$('#ButtonContainerNew')[0].children
	    for (i=0;i<a.length-1;i++){
	      a[i].style.backgroundColor = "greenyellow"
	      a[i].style.margin = "0px 3px 2px 0px"
	      a[i].style.border = "1px solid black"
	    }  
	    document.getElementById("preview").onclick = function(){test(xyz)}
	    document.getElementById("boldWord").onclick = function(){boldWord(xyz)}
	    document.getElementById("italizeWord").onclick = function(){italizeWord(xyz)}
	    document.getElementById("strikeWord").onclick = function(){strikeWord(xyz)}
	    document.getElementById("quoteWord").onclick = function(){quoteWord(xyz)}
	    document.getElementById("linkWord").onclick = function(){linkWord(xyz)}
	    //document.getElementById("hide").onclick = negTest
	    $('#inOne')[0].style.display="inline"
	},333)
}

//var eee = setTimeout(function(){
	editor();
//	},2000)
