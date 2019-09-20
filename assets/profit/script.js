$(document).ready(function() {

	$('.box-modal#authorize input#no_pass').change(function() {
		if ($('.box-modal input#no_pass').is(':checked')) {
			$('.box-modal .button-wrapper.auth').hide();
			$('.box-modal .button-wrapper.register').show();
            $('input[name=USER_PASSWORD]').val('').attr('disabled','disabled');
		} 
	});
	$('.box-modal#authorize input#yes_pass').change(function() {
		if ($('.box-modal input#yes_pass').is(':checked')) {
			$('.box-modal .button-wrapper.register').hide();
			$('.box-modal .button-wrapper.auth').show();
            $('input[name=USER_PASSWORD]').removeAttr('disabled');
		} 
	});
	$('.box-modal#authorize input[type="text"], .auth-form-page input[type="password"]').keyup(function() {
		$(this).parent().removeClass('err');
		$(this).parent().children('.errortext').hide();
	});
	
});

function submit_auth(el,param){
    var valid = true;
    el.parents('form').find('.auth-input').removeClass('err');
    el.parents('form').find('.button.green input').parent().removeClass('notactive');
    el.parents('form').find('.errortext').hide();
    el.parents('form').find('.auth-error').hide();
    if (param=='auth'){
        el.parents('form').find('.auth-input input[type=text],.auth-input input[type=password]').each(function(indx, element){
            if (($(element).attr('name')=='USER_LOGIN')&&(!checkmail($(element).val()))){
    			$(element).parent().addClass('err');
    			$(element).parents('form').find('.button.green input').parent().addClass('notactive');
    			$(element).parents('.auth-input').find('div.errortext').show();
                valid = false;
    		}
    		if ($(element).val()==''){
                $(element).parent().addClass('err');
    			$(element).parents('form').find('.button.green input').parent().addClass('notactive');
    			$(element).parent().find('div.errortext').show();
                valid = false;
            }
        });        
    }
    if (param=='register'){
        var element = el.parents('form').find('.auth-input input[name=USER_LOGIN]');
        if ((!checkmail(element.val()))){            
			element.parent().addClass('err');
			element.parents('.auth-input').find('div.errortext').show();
            valid = false;
		} 
                  
    }
    
       
	if (valid) {
		el.parents('form').attr('action',el.parents('form').attr('action')+'#submit');
        var Objelement = new Object();        
    	el.parents('form').find('input').each(function(indx, element){
    		Objelement[$(element).attr('name')] = $(element).val();
    	});        
        
        
        jQuery.post("/ru/ajax.php",{param_auth:param, "item":Objelement},function(data){                
                data = jQuery.parseJSON(data);
                if (data==200){
                    $('.auth-error').hide();
                    if (param=='auth'){
                        //location.reload();
                        document.location.href = url_profile;
                    }
                    if (param=='register'){
                        //document.location.href = url_registr+"&mail="+Objelement['USER_LOGIN'];
                                                
                    }
                }else{
                    $('.auth-error').html(messages[data['error']]).show();
                }
                //console.log(data);         
        },"html");         
	}
}
