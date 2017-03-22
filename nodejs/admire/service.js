var service = angular.module('Service',[]);
service.service('opLog',[function(){
	function adapter(target,attribute,type){
		if(type == 'divide'){
			var rel = target[attribute].split(' ');
			target.aduiter = rel[0];
			target.time = rel[2].replace(/_/g,':')+' '+rel[3];
		}				
		if(false){
			var rel = target[attribute].split(' ');
				target.record ={};
				target.record.auditResult =  rel[4];
				target.record.aduiter =  rel[2];
				target.record.time = rel[0].replace(/_/g,':') +" "+rel[1];
		}
	}
	return {
		adapter: adapter
	}
}])
service.service('showPicture', ['$rootScope','$templateCache','$compile',function($rootScope,$templateCache,$compile){
	function showPicture(src){
		if($.trim(src) == '') return ;
		var tpl = $templateCache.get('showPicture.html');      
		var element =  angular.element(tpl);
		var img = element.find('img');
		img.attr('src',src);			
		var scope = $rootScope.$new(true);	
		scope.close = function(){
			scope.$destroy();
			element.remove();
		}		
        $compile(element)(scope);         
        $('body').append(element);	  		
	}
	return {
		showPicture: showPicture
	}
}])
service.service('dialogFtl', [
    '$document',
    '$compile',
    '$rootScope',
    '$controller',
    '$templateCache',
    "$sce",
    function($document, $compile, $rootScope, $controller,$templateCache,$sce){
        return function(args,param){
            //传入参数 dom  模态框id 内容容器节点 控制器名称        	
        	function getDom(dom){
        	    return  $("#"+dom+"")
        	}
            var tpl = $templateCache.get(args.template);        	
        	 //获取父作用域
            var dialog = getDom(args.dom);
            var curscope = angular.element(dialog).scope();
             //tpl = $sce.trustAsHtml(tpl);
            var container =dialog.find('#model-content');
            if(container.is(":empty")){	            
	        	 container.append(tpl);
            }else{
            	container.empty();
            	container.append(tpl);
            }
            //创建子作用域
            var scope =curscope.$new(true);
            //子作用域 controller的作用范围
            var content =args.content
            // 控制器的名称
            var type = args.type;
            //注册 父作用域在子作用域的 挂载点
            scope.dialog=dialog;
            scope.parentScope = curscope;
            //如果有参数 接受参数的 命名
            if(param){
            	scope.param = $.extend({},param);
            }           
            var show =function () {
               var element = dialog.find(content);
                $(this).find('.modal-content').draggable({
                    handle: ".modal-header"
                });
                $(this).find('.modal-content').css("overflow", "hidden");
                
                var locals = {'$scope':scope};
                scope.$on('$destroy', function(){
					if(scope.inter>=0){
						 window.clearInterval(scope.inter); 
					}
                	element.removeData('$ngControllerController');
                });
                //编译 dom 和 model的关联
                element.data('$ngControllerController', $controller(type, locals));               
                $compile(element)(scope);
                scope.$apply();
                 
                dialog.unbind('shown.bs.modal',show);
            }
            
            var hide =function() {
            	$(this).find('.modal-content').removeAttr('style');
            	dialog.removeData("bs.modal");
            	dialog.unbind('hidden.bs.modal',hide);
            	if(scope.onbeforeclose)
            		scope.onbeforeclose();
            	dialog.find("#model-content").empty();
                scope.$destroy();                              
            }
            
            dialog.on('shown.bs.modal', show).on("hidden.bs.modal",hide);
        }

    }])



service.service('dialog', [
    '$document',
    '$compile',
    '$rootScope',
    '$controller',
    function($document, $compile, $rootScope, $controller){
        return function(args,param){
            //传入参数
            //dom 模态框id
            //内容容器节点
            //控制器名称
        	function getDom(dom){
        	    return  $("#"+dom+"")
        	}
            
            var dialog = getDom(args.dom);
            var curscope = angular.element(dialog).scope();
            var scope =curscope.$new(true);
            var content =args.content
            var type = args.type;
            scope.dialog=dialog;
            if(param){
            	scope.param = $.extend({},param);
            }
            var show =function () {
               var element = getDom(content);
               	
               
               
                $(this).find('.modal-content').draggable({
                    handle: ".modal-header"
                });
                $(this).find('.modal-content').css("overflow", "hidden");
                
                var locals = {'$scope':scope};
                scope.$on('$destroy', function(){
					if(scope.inter>=0){
						 window.clearInterval(scope.inter); 
					}
                	element.removeData('$ngControllerController');
                });
                element.data('$ngControllerController', $controller(type, locals));
               
                $compile(element)(scope);
                scope.$apply();
                 
                 dialog.unbind('shown.bs.modal',show);
            }
            
            var hide =function() {
            	$(this).find('.modal-content').removeAttr('style');
            	dialog.removeData("bs.modal");
            	dialog.unbind('hidden.bs.modal',hide);
            	if(scope.onbeforeclose)
            		scope.onbeforeclose();
                scope.$destroy();                              
            }
            
            dialog.on('shown.bs.modal', show).on("hidden.bs.modal",hide);
        }

    }])
.service('successTip', [
    '$document',
    '$compile',
    '$rootScope',
    '$controller',
    function($document, $compile, $rootScope, $controller){
        return function(arg){
            var element;
            var template;
            if(arg=="success"){
                template ='<div class="modal-dialog-center-suc dl"  ></div>';
            }
            if(arg=="fail"){
                 template ='<div class="modal-dialog-center-fail dl"  ></div>';      	
            }
            element = angular.element(template);
            $document.find('body').append(element);
            setTimeout(function(){
                element.hide();
                element.remove();
            },2200);

        }
    }])
.service('tipDialog', [
    '$document',
    '$compile',
    '$rootScope',
    '$controller',
    '$templateCache',
    function($document, $compile, $rootScope, $controller,$templateCache){
        return function(initParam){
        	var  deferred  = $.Deferred();
        	
        	//初始化  标题 宽度 内容
        	function getDom(dom){
        	    return  $("#"+dom+"")
        	}
            var $scope =$rootScope.$new(true);
           	$scope.$on('$destroy', function(){
                    // element.remove();
                	element.removeData('$ngControllerController');
            });
            var template = $templateCache.get('commonDialog.html');   
            var element = angular.element(template);
            
            $document.find('body').append(element);
             //element.data('$ngControllerController', $controller(type, locals));
             $compile(element)($scope);
             $scope.title=initParam.title;
             $scope.content=initParam.content;
             $scope.width=initParam.width;
             $scope.submit =function(type){
         	    if(type=='close'){
         		   deferred.reject("false");
         	    }else{
         	   	   deferred.resolve("true");
         	    }
         		$scope.$destroy();
                element.remove();
             }  
             return deferred.promise();
        }

    }])
 //私信模块
.service('PrivateLetter', [
    '$document',
    '$compile',
    '$rootScope',
    '$controller',
    '$templateCache',
    function($document, $compile, $rootScope, $controller,$templateCache){
        return function(initParam){
        	var  deferred = $.Deferred();
        	
        	//初始化  标题 宽度 内容
        	function getDom(dom){
        	    return  $("#"+dom+"")
        	}
        
            var $scope =$rootScope.$new(true);
             $scope.isActive = true;
             $scope.title=initParam.title||"标题";
             $scope.content=initParam.content||null;
             $scope.actionButton=initParam.actionButton||'确定并发送';
             $scope.width=initParam.width||'200';
             $scope.tempAddress=initParam.tempAddress||'privateLetter.html';
             $scope.readonly=initParam.readonly||false;
             $scope.placeHolder=initParam.placeHolder||'';
            
             if(initParam.required == true){
             	 $scope.isActive = false;
             	 /*$scope.$watch('content',function(newValue , oldValue){
					if(oldValue!=newValue){
						if(newValue&&newValue!=''){	
							$scope.isActive = true;
						}else{
							$scope.isActive =false;
						}	
					}				
				})*/
				$scope.contentchange = function(e){	
					if($.trim($("#dialogcontent").val())&&$.trim($("#dialogcontent").val()!='')){
						$scope.isActive = true;
					}else{
						$scope.isActive =false;
					}
				}				
             }
             if($scope.content&&$scope.content!==''){
             	$scope.isActive = true;
             }
             
             
             if(initParam.hasOwnProperty('showActionButton')){
             	$scope.showActionButton=initParam.showActionButton
             }else{
             	$scope.showActionButton=true;
             }
           	$scope.$on('$destroy', function(){
                    // element.remove();
                	element.removeData('$ngControllerController');
            });
            var template = $templateCache.get($scope.tempAddress);
            
            var element = angular.element(template);
             $(element).find('.modal-content').draggable({
                    handle: ".modal-header"
                });
            $(element).find('.modal-content').css("overflow", "hidden");
            
            $document.find('body').append(element);
             //element.data('$ngControllerController', $controller(type, locals));
             $compile(element)($scope);
             $scope.submit =function(data){
             	if(data=='submit'){
             		deferred.resolve("true",{
             			content:$scope.content,
             			scope:$scope
             		});
             	}else{
             		deferred.reject("true");
             	}
         		$scope.$destroy();
                element.remove();
             }  
             return deferred.promise();
        }

    }])     
.service('timeUtil',[function(){
	
	function getNowFormatDate(_date) {
		
	    var date = _date?new Date(_date):new Date();
	    var seperator1 = "-";
	    var seperator2 = ":";
	    var month = date.getMonth() + 1;
	    var strDate = date.getDate();
	    if (month >= 1 && month <= 9) {
	        month = "0" + month;
	    }
	    if (strDate >= 0 && strDate <= 9) {
	        strDate = "0" + strDate;
	    }
	    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
	            + " " + date.getHours() + seperator2 + date.getMinutes()
	            + seperator2 + date.getSeconds();
	    return currentdate;
	}
	
	
	return  {
		formatDate  : getNowFormatDate
	}
	
}])    
    
    
    