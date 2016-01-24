/**
  * WordPress Hashtags Script file
  * Author: Samuel Elh
  */

function wpht_change() {
	wpht_filters();
	link_settings();
}

function wpht_filters() {
	var inputs = document.getElementsByClassName('wpht_filters');
	var snippet = '';
	for (var i=0;i<inputs.length;i++){
		var ID = inputs[i].getAttribute('id');
		if( inputs[i].checked ) {
			snippet += ID + ',';
		} else {
			snippet += ',';
		}
	};
	document.getElementById('wpht_filtered').value = snippet;
}
function wpht_targetArea() {
	var element = document.getElementById('ignore-hashtags');
	return null !== element ? element : false;
}
window.addEventListener('load', function() {
	var arr = wpht_targetArea() ? wpht_targetArea().value.split(',') : false;
	for(var i=0; i<arr.length; ++i){
		if(arr[i] !== '' && null !== arr[i]) {
			var div = document.createElement('div');
    		div.setAttribute('id', arr[i].replace(/[^a-zA-Z0-9]/g, '-'));
			div.innerHTML = '<span class="cont" onclick="wpht_editHT(this,\''+arr[i]+'\');"  title="edit">'+arr[i]+'</span><span class="del" onclick="wpht_removeHT(\''+arr[i]+'\')" title="remove"></span>';
			document.getElementById("ignored-hashtags").appendChild(div);
		}
	};
	wpht_targetArea().style.display = 'none';
}, false);

function wpht_addHT() {
	var word = window.prompt('Type a hashtag you wish to ignore:');
	if(word == 0 || word === null) {
        if(word !== null)
            alert('Please type something');
        return false;
	}
	word = word.replace(/"/g, '');
	word = word.replace(/'/g, '');
	var eles = wpht_targetArea().value.split(',');
	var count = 0;
	for(var i=0; i<eles.length; ++i){
		if(eles[i] !== word) {
			count += 0;
		} else {
			count += 1;
		}
	};
	if( count > 0 ) {
		alert('Hashtag "'+word+'" already added');
	} else {
		wpht_targetArea().value += word+',';
		var div = document.createElement('div');
		div.setAttribute('id', word.replace(/[^a-zA-Z0-9]/g, '-'));
		div.innerHTML = '<span class="cont" onclick="wpht_editHT(this,\''+word.replace(/'/g, "\\'").replace(/"/g, '')+'\');" title="edit">'+word+'</span><span class="del" onclick="wpht_removeHT(\''+word.replace(/'/g, "\\'").replace(/"/g, '')+'\')" title="remove"></span>';
		document.getElementById("ignored-hashtags").appendChild(div);
	}
	//~wpht_targetArea().onchange();
}
function wpht_removeHT(word) {
	document.getElementById(word.replace(/[^a-zA-Z0-9]/g, '-')).remove();
	var eles = wpht_targetArea().value.split(',');
	wpht_targetArea().value = '';
	for(var i=0; i<eles.length; ++i){
		if(eles[i] !== word) {
			wpht_targetArea().value += eles[i]+',';
		}
	};
	//~wpht_targetArea().onchange();
}
function wpht_editHT(selector, word) {
	var edit = window.prompt('Edit hashtag:', word);
	if(edit == 0 || edit === null) {
        if(edit !== null)
            alert('Please enter something');
        return false;
	}
	edit = edit.replace(/"/g, '');
	var eles = wpht_targetArea().value.split(',');
	var count = 0;
	for(var i=0; i<eles.length; ++i){
		if(eles[i] !== edit) {
			count += 0;
		} else {
			count += 1;
		}
	};
	if(count > 0) {
		if( word !== edit )
			alert('This hashtag is already added.');
		return false;
	} else {
		wpht_targetArea().value = '';
		for(var i=0; i<eles.length; ++i){
			if(eles[i] == word) {
				wpht_targetArea().value += edit+',';
			} else {
				wpht_targetArea().value += eles[i] == 0 || null == eles[i] ? '' : eles[i]+',';			
			}
		};
	}
	selector.innerHTML = edit;
	selector.setAttribute('onclick', 'wpht_editHT(this, \''+edit.replace(/'/g, "\\'").replace(/"/g, '')+'\');');
	selector.parentElement.setAttribute('id', edit.replace(/[^a-zA-Z0-9]/g, '-'));
	document.querySelector( '#'+selector.parentElement.getAttribute('id')+' .del' ).setAttribute('onclick', 'wpht_removeHT(\''+edit.replace(/'/g, "\\'").replace(/"/g, '')+'\');');
	//~wpht_targetArea().onchange();

}

function link_settings() {

	var object = '';

	var Blank 		= document.getElementById('_new-tab').checked ? '1' : '';
	var Nofollow 	= document.getElementById('_no-follow').checked ? '1' : ''; 
	var Title 		= document.getElementById('_link-title').value;
	Title = Title.replace(/'/g, '{apos}');
	Title = Title.replace(/"/g, '');
	var Class 		= document.getElementById('_link-class').value;
	Class = Class.replace(/"/g, '');
	Class = Class.replace(/'/g, '');
	var Css 		= document.getElementById('_link-css').value;
	Css = Css.replace(/'/g, '');
	Css = Css.replace(/"/g, '');

	object = "{'_blank': '"+Blank+"', 'nofollow': '"+Nofollow+"', 'title' : '"+Title+"', 'class': '"+Class+"', 'css': '"+Css+"' }";

	document.getElementById('wpht_lsettings').value = object;

}
