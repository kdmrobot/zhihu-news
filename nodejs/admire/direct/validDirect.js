'use strict'; 
var valid = angular.module('Valid',[]) ;
valid.directive('validEmail', ['$compile',function ($compile) { 
	 return {
        restrict: 'A',
        scope:{
            title:'@'
        },
        require: 'ngModel', 
        link: function(scope, element, attr, ngModel) {
            var subScope = scope.$new(true);
			var errorElement;
            var  container ;
            if(!scope.$parent.valid){
            	scope.$parent.valid =[];
            }
			scope.$on("$destroy", function() {
		       if(container)container.remove();
			});	
            subScope.errorsText={
                validEmail:"请输入正确的邮箱"
            }            
            var parenNode = element.parent();
            parenNode.addClass("has-feedback");
		
            subScope.hasError=function(){
            	var re = ngModel.$dirty&&ngModel.$error['validEmail'];
            	
				if(re){
				    parenNode.addClass("has-error");
				}else{
				    parenNode.removeClass("has-error");
				}
				return re;
			}
			ngModel.$parsers.push(function(value){
				var re =/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
				var index = _.indexOf(scope.$parent.valid,attr.ngModel);
            	if(re){
            		element.data('valid','true');
            		ngModel.$setValidity('validEmail',true);//验证通过
            		if(container)container.remove();          		
            		if(index>=0) scope.$parent.valid.splice(index,1);
            	}else{
            		element.data('valid','false');
            		if(index<0){
            			scope.$parent.valid.push(attr.ngModel);
            		}
            		ngModel.$setValidity('validEmail',false);
            		if(errorElement){
				    	container.empty();
				    }
				    if(!container)container = $(document.createElement('div'));
            		var left = element.offset().left// + element.outerWidth()/2 ;
					var top = element.offset().top + element.outerHeight();
	            	errorElement = $compile(
	                ''+
	                '<ul class="help-block" ng-if="hasError()" style="position: absolute;z-index: 9999;background-color: #fff7f7;border: 1px solid #e62c2c;'+
	    			'padding: 1px 4px;list-style: none;' +'left:'+left+'px;top:'+top+'px;">'+'<li ng-repeat="(error,wrong) in errors()" ng-bind="errorsText[error]">'+
	                '</ul>'
	                )(subScope);
	                $('body').append(container); 
	             	$(container).append(errorElement);
            	}	
            	return value;
			});						
			subScope.errors=function(){
			    return ngModel.$error;
			}
        }
    };
}])

valid.directive('validPhoneNumber', ['$compile',function ($compile) { 
	 return {
        restrict: 'A',
        scope:{
            title:'@'
        },
        require: 'ngModel', 
        link: function(scope, element, attr, ngModel) {
            var subScope = scope.$new(true);
			var errorElement;
            var  container ;
            if(!scope.$parent.valid){
            	scope.$parent.valid =[];
            }
			scope.$on("$destroy", function() {
		       if(container)container.remove();
			});	
            subScope.errorsText={
                validPhoneNumber:"输入11位的数字"
            }
            
            var parenNode = element.parent();
            parenNode.addClass("has-feedback");
		
            subScope.hasError=function(){
            	var re = ngModel.$dirty&&ngModel.$error['validPhoneNumber'];
            	
				if(re){
				    parenNode.addClass("has-error");
				}else{
				    parenNode.removeClass("has-error");
				}
				return re;
			}
			ngModel.$parsers.push(function(value){
				//  /^1(3[0-9]|4[57]|5[0-35-9]|7[0135678]|8[0-9])\d{8}$/
				var re = /^\d{11}$/.test(value)||$.trim(value)=="";
				var index = _.indexOf(scope.$parent.valid,attr.ngModel);
            	if(re){
            		element.data('valid','true');
            		ngModel.$setValidity('validPhoneNumber',true);//验证通过
            		if(container)container.remove();          		
            		if(index>=0) scope.$parent.valid.splice(index,1);
            	}else{
            		element.data('valid','false');
            		if(index<0){
            			scope.$parent.valid.push(attr.ngModel);
            		}
            		ngModel.$setValidity('validPhoneNumber',false);
            		if(errorElement){
				    	container.empty();
				    }
				    if(!container)container = $(document.createElement('div'));
            		var left = element.offset().left// + element.outerWidth()/2 ;
					var top = element.offset().top + element.outerHeight();
	            	errorElement = $compile(
	                ''+
	                '<ul class="help-block" ng-if="hasError()" style="position: absolute;z-index: 9999;background-color: #fff7f7;border: 1px solid #e62c2c;'+
	    			'padding: 1px 4px;list-style: none;' +'left:'+left+'px;top:'+top+'px;">'+'<li ng-repeat="(error,wrong) in errors()" ng-bind="errorsText[error]">'+
	                '</ul>'
	                )(subScope);
	                $('body').append(container); 
	             	$(container).append(errorElement);
            	}	
            	return value;
			});						
			subScope.errors=function(){
			    return ngModel.$error;
			}
        }
    };
}])

valid.directive('validNumber', ['$compile',function ($compile) { 
	 return {
        restrict: 'A',
        scope:{
            title:'@'
        },
        require: 'ngModel', 
        link: function(scope, element, attr, ngModel) {
            var subScope = scope.$new(true);
			var errorElement;
            var  container ;
			scope.$on("$destroy", function() {
		       if(container)container.remove();
			});	
            subScope.errorsText={
                validnumber:"输入必须为数字"
            }
            
            var parenNode = element.parent();
            parenNode.addClass("has-feedback");
		
            subScope.hasError=function(){
            	var re = ngModel.$dirty&&ngModel.$error['validnumber'];
            	
				if(re){
				    parenNode.addClass("has-error");
				}else{
				    parenNode.removeClass("has-error");
				}
				return re;
			}
			ngModel.$parsers.push(function(value){
				var re = /^[0-9]+$/.test(value)||$.trim(value)=="";
            	if(re){
            		element.data('valid','true');
            		ngModel.$setValidity('validnumber',true);//验证通过
            		if(container)container.remove();
            	}else{
            		element.data('valid','false');
            		ngModel.$setValidity('validnumber',false);
            		container = $(document.createElement('div'));
            		var left = element.offset().left// + element.outerWidth()/2 ;
					var top = element.offset().top + element.outerHeight();
				    if(errorElement){
				    	container.remove();
				    }
				    
	            	errorElement = $compile(
	                ''+
	                '<ul class="help-block" ng-if="hasError()" style="position: absolute;z-index: 9999;background-color: #fff7f7;border: 1px solid #e62c2c;'+
	    			'padding: 1px 4px;list-style: none;' +'left:'+left+'px;top:'+top+'px;">'+'<li ng-repeat="(error,wrong) in errors()" ng-bind="errorsText[error]">'+
	                '</ul>'
	                )(subScope);
	                $('body').append(container); 
	             	$(container).append(errorElement);
            	}	
            	return value;
			});	
			
			subScope.errors=function(){
			    return ngModel.$error;
			}
        }
    };
}])
valid.directive('rateLength', ['$compile',function ($compile) { 
	 return {
        restrict: 'A',
        scope:{
            title:'@'
        },
        require: 'ngModel', 
        link: function(scope, element, attr, ngModel) {
            var subScope = scope.$new(true);
			var errorElement;
            var  container ;
			scope.$on("$destroy", function() {
		       if(container)container.remove();
			});
            subScope.errorsText={
                required:"此项为必填",
                ratelength:"输入范围为0到100"
            }
            
            var parenNode = element.parent();
            parenNode.addClass("has-feedback");
		
            subScope.hasError=function(){
            	var re = ngModel.$dirty&&ngModel.$error['ratelength']||ngModel.$error.required;
            	
				if(re){
				    parenNode.addClass("has-error");
				}else{
				    parenNode.removeClass("has-error");
				}
				return re;
			}
			ngModel.$parsers.push(function(value){
				var re = (value<=100&&value>=0);
            	if(re){
            		ngModel.$setValidity('ratelength',true);//验证通过
            		if(container)container.remove();
            	}else{
            		ngModel.$setValidity('ratelength',false);
            		 container = $(document.createElement('div'));
            		var left = element.offset().left// + element.outerWidth()/2 ;
					var top = element.offset().top + element.outerHeight();
					    if(errorElement){
					    	container.remove();
					    }
					    
		            	errorElement = $compile(
		                ''+
		                '<ul class="help-block" ng-if="hasError()" style="position: absolute;z-index: 9999;background-color: #fff7f7;border: 1px solid #e62c2c;'+
		    			'padding: 1px 4px;list-style: none;' +'left:'+left+'px;top:'+top+'px;">'+'<li ng-repeat="(error,wrong) in errors()" ng-bind="errorsText[error]">'+
		                '</ul>'
		                )(subScope);
		                $('body').append(container); 
		             	$(container).append(errorElement);
            	}	
            	return value;
			});	
			
			subScope.errors=function(){
			    return ngModel.$error;
			}        
        }
    };
}]).directive('timeValid', ['$compile',function ($compile) { 
	 return {
        restrict: 'A',
        scope:{
            title:'@'
        },
        require: 'ngModel', 
        link: function(scope, element, attr, ngModel) {
            var subScope = scope.$new(true);           
			var errorElement;
            var  container ;
			scope.$on("$destroy", function() {
		       if(container)container.remove();
			});
            subScope.errorsText={
                required:"此项为必填",
                ratelength:"格式错误  对应格式如下"
            }
            
            var parenNode = element.parent();
            parenNode.addClass("has-feedback");
		
            subScope.hasError=function(){
            	var re = ngModel.$dirty&&ngModel.$error['ratelength']||ngModel.$error.required;
            	
				if(re){
				    parenNode.addClass("has-error");
				}else{
				    parenNode.removeClass("has-error");
				}
				return re;
			}
			ngModel.$parsers.push(function(value){
				var re ;
				try{
					var rel =new Date(value).getTime();
					if(rel){
						re =true;
					}else{
						re =false;
					}
					
				}catch(e){
					re =false;				
				}				
            	if(re){
            		ngModel.$setValidity('ratelength',true);//验证通过
            		if(container)container.remove();
            	}else{
            		ngModel.$setValidity('ratelength',false);
            		 container = $(document.createElement('div'));
            		var left = element.offset().left// + element.outerWidth()/2 ;
					var top = element.offset().top + element.outerHeight();
					    if(errorElement){
					    	container.remove();
					    }
					    
		            	errorElement = $compile(
		                ''+
		                '<ul class="help-block" ng-if="hasError()" style="position: absolute;z-index: 9999;background-color: #fff7f7;border: 1px solid #e62c2c;'+
		    			'padding: 1px 4px;list-style: none;' +'left:'+left+'px;top:'+top+'px;">'+'<li ng-repeat="(error,wrong) in errors()" ng-bind="errorsText[error]">'+
		                '</ul>'
		                )(subScope);
		                $('body').append(container); 
		             	$(container).append(errorElement);
            	}	
            	return value;
			});	
			
			subScope.errors=function(){
			    return ngModel.$error;
			}
            
            
        }
    };
}]);