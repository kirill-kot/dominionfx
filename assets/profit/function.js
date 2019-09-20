function checkmail(val) {
    reg = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]{2,})+$/i;
    if (reg.test(val)) {
        return true;
    }else{
        return false;
    }    
}
function checknumber(val){
    reg = /^([0-9]+)$/i;
    if ((reg.test(val))) {
        return true;        
    }else{
        return false;                
    }    
}
function checkname(val){
    if (regname.test(val)) {
        return true;        
    }else{
        return false;                
    }    
}

function isDate(dd, mm, yyyy) {
   xDate = new Date(yyyy, mm - 1, dd);
   if(xDate.getDate() != dd || xDate.getMonth() + 1 != mm || xDate.getFullYear() != yyyy) {
      return false;
	} else {
      return true;
	}
}

function addObj(element){
		var r = new Object();
		var r = {
				'name' : $(element).attr('name'),
				'value' : $(element).val()
			
		};
		
		return r;
}
function next(){
    var x = $("#slider ul.slide li:visible").index();
    var y = $("#slider ul.slide li").size()-1;
	var z = $(".pagination ul li a.active").parents('ul').children('li').index();
	$(".pagination ul li a").removeClass('active');
	if(x >= y){
        $("#slider ul.slide li").animate({left:'-600px',opacity:'hide'},function() {
			$("#slider ul.slide li").css('left','0px');
		});
        $("#slider ul.slide li").eq(0).fadeIn(700);
		$(".pagination ul li").eq(0).children().addClass('active');
    } else {
        $("#slider ul.slide li").animate({left:'-600px',opacity:'hide'},function() {
			$("#slider ul.slide li").css('left','0px');
		});
        $("#slider ul.slide li").eq(x+1).fadeIn(700);
		$(".pagination ul li").eq(x+1).children().addClass('active');
    }
}

function chgImg(id){
    clearInterval(timer);
    var x = $("#slider ul.slide li:visible").index();
    var y = $("#slider ul.slide li").size()-1;

    if (id=='next'){
        next();
    }else{
        if (x<=0){
			$("#slider ul.slide li").animate({left:'-600px',opacity:'hide'},function() {
				$("#slider ul.slide li").css('left','0px');
			});
            $("#slider ul.slide li").eq(y).fadeIn(700);
        }else{
			$("#slider ul.slide li").animate({left:'-600px',opacity:'hide'},function() {
				$("#slider ul.slide li").css('left','0px');
			});
            $("#slider ul.slide li").eq(x-1).fadeIn(700);
        }
    }
    timer = startTimer();
}

function startTimer(){
    return setInterval(function(){
        next();
    },4000);
}

timer = startTimer();
function liclick(el){
		var input = el.parents('.input-form').find('input[type="text"]');
		el.parents('ul').children('li').removeClass('active');		
		el.addClass('active');
		dataValue = el.data('value');     
		inputText = el.text();
		codeAttr = el.attr('code');
		el.parents('.input-form').find('input[type="hidden"]').val(dataValue);
		el.parents('.input-form').find('input[type="text"]').val(inputText);
		inputCode = $('input[name=PHONE_CODE]');
		inputCode.val(codeAttr);
		var elementObj = new Object();
		elementObj[0] = addObj(input);
		elementObj[1] = addObj(inputCode);
		if(validen(elementObj,input)){
			stepFirstObj[input.attr('name')] = input.val();
			stepFirstObj[input.attr('name')] = inputCode.val();
			stepFirstObj[el.parents('.input-form').find('input[type="hidden"]').attr('name')] = el.parents('.input-form').find('input[type="hidden"]').val();
		};
        
        dataLogin = el.data('login');
        el.parents('.input-form-wrapper').find('input[name="ID_LOGIN"]').val(dataLogin);           

        
}

function dmy(el){
	dataValue = el.data('value');
	inputText = el.text();

	dataValue = el.data('value');
	inputText = el.text();
	el.parents('.input-form').find('input[type="hidden"]').val(dataValue);
	el.parents('.input-form').find('input[type="text"]').val(inputText);

	
	var input = el.parents('.input-form').find('input[type="hidden"]');
	
	var inputD = el.parents('.input-form-wrapper').find('input[name="DAY"]');
	var inputM = el.parents('.input-form-wrapper').find('input[name="MOUNTH"]');
	var inputY = el.parents('.input-form-wrapper').find('input[name="YEAR"]');
	
	var elementObj = new Object();
	elementObj[0] = addObj(inputD);
	elementObj[1] = addObj(inputM);
	elementObj[2] = addObj(inputY);
	if(validen(elementObj,input)){
		stepFirstObj[inputD.attr('name')] = inputD.val();	
		stepFirstObj[inputM.attr('name')] = inputM.val();
		stepFirstObj[inputY.attr('name')] = inputY.val();		
		//stepFirstObj[el.parents('.input-form').find('input[type="hidden"]').attr('name')] = el.parents('.input-form').find('input[type="hidden"]').val();		
	}
	
}

function currency_click(el){
    el.parents('.input-form').find('li').removeClass('active');
	el.addClass('active');
	dataValue = el.data('value');
	inputText = el.text();
	el.parents('.input-form').find('input[type="hidden"]').val(dataValue);
	el.parents('.input-form').find('input[type="text"]').val(inputText);    
}

$(document).ready(function() {
	//Slider
	$("#slider .pagination").append('<ul></ul>');
	
	$("#slider ul.slide li").each(function() {
		$("#slider .pagination ul").append('<li><a href="javascript:void(0)"></a></li>');
        
	});
	
	$('#slider .pagination ul li').first().children().addClass('active');
	
    $("#slider ul.slide li,#slider .pagination ul").mouseenter(function() {
        clearInterval(timer);
    });

    $("#slider ul.slide li,#slider .pagination ul").mouseleave(function() {
        if ($('#slider ul.slide li').size()>1){
            timer = startTimer();
        }
    });

	$("#slider .pagination ul li a").click(function() {
		if(!$(this).is('.active')) {
			$("#slider .pagination ul li a").removeClass('active');
			$(this).addClass('active');
			$("#slider ul.slide li").animate({left:'-600px',opacity:'hide'},function() {
				$("#slider ul.slide li").css('left','0px');
			});
			$("#slider ul.slide li").eq($(this).parent().index()).fadeIn(700);
		}
	});
	
	//Main-benefits
	$(".main-benefit .wrapper .parent .item").on('click',function() {
		itemNumber = $(this).index();
        
        $('.main-benefit .item.select').removeClass('select');
        $(this).addClass('select');
        
		$('.main-benefit .description .parent .item').hide();
		$('.main-benefit .wrapper .parent .item span.before').hide();
		//$(this).children('span.before').show();
		$('.main-benefit .description .parent .item').eq(itemNumber).show();
        
	});
	
	$(".ait-group .parent .item").on('click',function() {
		itemNumber = $(this).index();
		$('.ait-group .description .item').hide();
		$('.ait-group .parent .item span.before').hide();
		$(this).children('span.before').show();
		$('.ait-group .description .item').eq(itemNumber).show();
	});
	$('header .auth-login').on('click',function() {
		//$('#authorize').arcticmodal();
	});
	$('.metals-table table tbody tr').on('click',function() {
		$('#spot-metals').arcticmodal();
	});

    $('.forex-table tbody tr').on('click',function() {
        var item = $(this).find('.item').html();
        $('#forex-detail').find('.item').html(item).parents('#forex-detail').arcticmodal();
    });
    
	//Funding/Withdrawal table-buttons
	$('.top-withdrawal-deposit .item.withdrawal-button').on('click',function() {
		$('.top-withdrawal-deposit .item a').removeClass('active');
		$(this).children().addClass('active');
        $('.wrapper_deposit').hide();
        $('.wrapper_withdrawal').show();
		$(this).parents('.withdrawal-deposit-variant').find('.deposit-terms').hide();
		$(this).parents('.withdrawal-deposit-variant').find('.withdraw-terms').show();
	});
	$('.top-withdrawal-deposit .item.deposit-button').on('click',function() {
		$('.top-withdrawal-deposit .item a').removeClass('active');
		$(this).children().addClass('active');
        $('.wrapper_deposit').show();
        $('.wrapper_withdrawal').hide();        
		$(this).parents('.withdrawal-deposit-variant').find('.withdraw-terms').hide();
		$(this).parents('.withdrawal-deposit-variant').find('.deposit-terms').show();
	});

    
	$('body').on('click', function() {
		$('.input-form ul').hide();
	});    
    
    

	

	$('.registration .registration-form .input-form ul li').on('click', function() {
		//$('.registration .registration-form .input-form ul li').removeClass('active');
        $(this).parents('.input-form').find('li').removeClass('active');
		$(this).addClass('active');
		dataValue = $(this).data('value');
		inputText = $(this).text();
		$(this).parents('.input-form').find('input[type="hidden"]').val(dataValue);
		$(this).parents('.input-form').find('input[type="text"]').val(inputText);

	});
    
	$('.input-form .select').on('click', function(event) {
		event.stopPropagation();
		$('.input-form ul').hide();
		$(this).parents('.input-form').find('ul').show();
		
	});

	$('input[name=NATIONALITY]').on('keyup',function(){
		var input = $(this).val();
		var reg = new RegExp("^"+input+"","i");
		var stringul = '';
		for (var i = 0; i < government.length; i++)
		  {
			var vStr = government[i]['name']; 

			if (reg.test(government[i]['name'])) {				
				stringul += "<li onclick='liclick($(this))' data-value='"+government[i]['id']+"' id-value='' code='+"+government[i]['code']+"'>"+government[i]['name']+"</li>";
			}  			
		  };
        if (stringul!=""){  
		  $('ul#nationality_ul').css('display','block').html(stringul);
        }else{
          $('ul#nationality_ul').css('display','none').html(stringul);  
        }
	});
	
	
	$('form[name=open_account] input[type=text]').keyup(function(){
		var elementObj = new Object();
		elementObj[0] = addObj($(this));
		if(validen(elementObj,$(this))){
			stepFirstObj[$(this).attr('name')] = $(this).val();
		};
	});	
	//Select text input onfocus
	$('.referal-links .input-form input').on('click',function() {
		$(this).select();
	});
});


var stepFirstObj = new Object();

function validen(elObj,el){
    var valid = true;
	var form = el.parents('form');
	var datee = false;
    //if (all=='all'){
        //var form = el;
        //form.find('.req').removeClass('err');
        //form.find('.error').hide();
        //form.find('.req').each(function(indx, element){
		//el.each(function(indx, element){
		//console.log(elObj);
		//alert(dayValue+'.'+mounthValue+'.'+yearVal)
		//alert(dayValue+', '+mounthValue+', '+yearValue);
		for(var indx in elObj) {
			form.find('input[name='+elObj[indx]['name']+']').removeClass('err');
			form.find('input[name='+elObj[indx]['name']+']').parents('.input-form-wrapper').find('.error').hide().find('.note').hide();
            if ((elObj[indx]['value'] == '')) {
				valid = false;
				
				form.find('input[name='+elObj[indx]['name']+']').addClass('err');
			//	alert(elObj[indx]['name']);
                
				form.find('input[name='+elObj[indx]['name']+']').parents('.input-form-wrapper').find('.error').show().find('.clear_note').show();                
			}else{
    			if ((elObj[indx]['name'] == 'EMAIL') && (!checkmail(elObj[indx]['value']))) {
    				form.find('input[name='+elObj[indx]['name']+']').addClass('err'); 
    				form.find('input[name='+elObj[indx]['name']+']').parents('.input-form-wrapper').find('.error').show().find('.no_correct').show();				
    				valid = false;
    			}
    			if ((elObj[indx]['name'] == 'MOBILE_PHONE') && (!checknumber(elObj[indx]['value']))) {
    				form.find('input[name='+elObj[indx]['name']+']').addClass('err'); 
    				form.find('input[name='+elObj[indx]['name']+']').parents('.input-form-wrapper').find('.error').show().find('.no_correct').show();
    				valid = false;				
    			}
    			if ((elObj[indx]['name'] == 'FIRST_NAME') && (!checkname(elObj[indx]['value']))) {
    				form.find('input[name='+elObj[indx]['name']+']').addClass('err'); 
    				form.find('input[name='+elObj[indx]['name']+']').parents('.input-form-wrapper').find('.error').show().find('.no_correct').show();
    				valid = false;				
    			}
    			if ((elObj[indx]['name'] == 'LAST_NAME') && (!checkname(elObj[indx]['value']))) {
    				form.find('input[name='+elObj[indx]['name']+']').addClass('err'); 
    				form.find('input[name='+elObj[indx]['name']+']').parents('.input-form-wrapper').find('.error').show().find('.no_correct').show();
    				valid = false;				
    			}
			}
			if ((elObj[indx]['name'] == 'DAY')) {
				var dayValue = elObj[indx]['value'];
				datee = true;
			}
			if ((elObj[indx]['name'] == 'MOUNTH')) {
				var mounthValue = elObj[indx]['value'];
				datee = true;
			}
			if ((elObj[indx]['name'] == 'YEAR')) {
				var yearValue = elObj[indx]['value'];
				datee = true;
			}
			
			if ((el.attr('name')=='DAY')||(el.attr('name')=='MOUNTH')||(el.attr('name')=='YEAR')){
				$('input[name=DAY_VISIBLE], input[name=MOUNTH_VISIBLE], input[name=YEAR_VISIBLE]').removeClass('err');
				$('input[name=DAY_VISIBLE]').parents('.input-form-wrapper').find('.error').hide();
                //$('input[name=DAY_VISIBLE]').parents('.input-form-wrapper').find('.error').show().find('.clear_note').show();
			}
			if ($('input[name=CHECKED_LIZ]').is('.err')) {
				$('.input-check-custom').addClass('err');
			} else {
			
				$('.input-check-custom').removeClass('err');
			}
			
            
            //console.log(elObj[indx]['name'],valid);
         }

		 if ((dayValue != 'undefined' && dayValue != '') && (mounthValue != 'undefined' && mounthValue != '') && (yearValue != 'undefined' && yearValue != '')&&(datee == true) ) {
			var dates = isDate(dayValue,mounthValue,yearValue);
			if (dates == false) {
				valid = false;
				$('input[name=DAY_VISIBLE], input[name=MOUNTH_VISIBLE], input[name=YEAR_VISIBLE]').addClass('err');
				$('input[name=DAY_VISIBLE]').parents('.input-form-wrapper').find('.error').show().find('.second-wrapper').show().find('.clear_note').show();
				//el.addClass('err');                 
				//form.find('input[name='+elObj[indx]['name']+']').parents('.input-form-wrapper').find('.error').show();
			} else {
				$('input[name=DAY_VISIBLE], input[name=MOUNTH_VISIBLE], input[name=YEAR_VISIBLE]').removeClass('err');
				$('input[name=DAY_VISIBLE]').parents('.input-form-wrapper').find('.error').hide();
			}
		}	
    return valid;
}


function regSubmit(el) {    
    if (valid(el,'.step-1')){
    	el.parents('.registration').find('.step').removeClass('active');
    	el.parents('.registration').find('.step.second').addClass('active');
    	el.parents('.registration').find('.registration-form.step-1').hide();
    	el.parents('.registration').find('.registration-form.step-2').show();
        
    }    
}

function regBack(el) {
	el.parents('.registration').find('.step').removeClass('active');
	el.parents('.registration').find('.step.first').addClass('active');
	el.parents('.registration').find('.registration-form.step-2').hide();
	el.parents('.registration').find('.registration-form.step-1').show();
}

function footerToBottom() {
	var browserHeight = $(window).height(),
	footerOuterHeight = $('footer').outerHeight(true),
	mainHeightMarginPaddingBorder = $('#cover').outerHeight(true) - $('#cover').height();
	$('#cover').css({
		'min-height': browserHeight - footerOuterHeight - mainHeightMarginPaddingBorder,
	});
};


function copyLink(el) {
	thisParent = el.parent().parent().find('input');
	textPress = el.parent().parent().find('.text-press');
	thisParent.select().focus();
	$('.referal-links .button').show();
	$('.referal-links .text-press').hide();
	el.parent().hide();
	textPress.show();
	if (navigator.userAgent.indexOf ('Mac')!= -1) {
		textPress.text('Press Cmd+C');
	} else {
		textPress.text('Press Ctrl+C');
	}
}


$(document).ready(function() {
	footerToBottom();
	$(document).on('click', function() {
		$('.referal-links .button').show();
		$('.referal-links .text-press').hide().text('');
	});
	$('.referal-links .button').on('click', function(event) {
		event.stopPropagation();
	});
	$(document).on('keyup', function(event) {
		if (event.keyCode === 13 && $(this).find('form').is(':visible')) {
			$(this).find('form input[type=button]').each(function(indx,element) {
				if(!$(element).parent().is('.small')) {
					$(element).trigger('click');
				}
			});
		}
	});
});
$(window).resize(function () {
	footerToBottom();
});
function slide_down(el) {
	el.parents('li').find('ul').slideToggle();
}

function open_close_withdraw(el){
        
    el.parents('.parent').find('.withdraw_property').toggle(500);    
}