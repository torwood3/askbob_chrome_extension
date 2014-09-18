function goToAskBob(target){
	console.log(target);
	if( target.length >= 3 ){
		trigram = target
		chrome.tabs.create({url: "http://askbob.octo.com/users?utf8=✓&q%5Btrigram_or_first_name_or_last_name_or_tags_name_or_phone_number_cont%5D="+ trigram +"&commit=Rechercher"});
	}
};

document.getElementById('askbob').addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key == 13) { // 13 is enter
    	goToAskBob(e.target.value);
    }
});

