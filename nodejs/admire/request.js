/**
 * Created by wb.huanghuaqing on 2016/9/20.
 */
(function (angular) {
    angular.module("Request", ["Service"])   
        .service("request", ['$http', '$location', '$q','tipDialog',function ($http, $location, $q,tipDialog) {
           var codeList =[
           		{code:-1,content:"-1"}      			
					
            	];
            return function (url, method, data, multipart) {
                if (arguments.length === 1 && angular.isObject(url)) {
                    method = url.method || 'POST';
                    data = url.data;
                    multipart = url.multipart;
                    url = url.url;
                }
                if (angular.isObject(method)) {
                    multipart = data;
                    data = method;
                    method = 'POST';
                }
                var options = {
                    method: method,
                    url: url,
                    data: data,                    
                    headers: {
                        'Content-Type': !!multipart ? undefined : 'application/x-www-form-urlencoded; charset=UTF-8'
                    },
                    transformRequest: function (data, headersGetter) {
                        //表单格式
                        if (!!multipart) {
                            var formData = new FormData();
                            angular.forEach(data, function (value, key) {
                            	//if(value)
                                formData.append(key, value);
                            });
                            var headers = headersGetter();
                            delete headers['Content-Type'];
                            return formData;
                        } else {
                            //url 
                            var str = [];
                            for (var p in data)
                                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(data[p]));
                            return str.join("&");
                        }
                    }
                };
                
                if(!data.hasOwnProperty('isLoading')){
                	data.isLoading = true;
                }
                return $http(options).then(function (data) { 
                	if(data.data&&data.data.code =='200'||data.config.url=='/api/reward/backend/download'){
                        return data.data;
                    }else {
                        throw data;
                    }
                }).catch(function (data) { 
                    if(data.data.code ==603){
                        $http({
							method :'POST',
							url:'/api/nmusician/backend/admin/openid/login',
							params : {redirecturl:'/nmusician/backend/index#/joinReview'}								
						}).then(function(data){
								window.location.href = data.data.result.turnto;
							}
						)
                    }else if(data.data.code||data.status==502){                    	
                    	var code = data.data.code;
                    	var index = _.findIndex(codeList,{code:code});
                    	if(index>=0){
                    		if($("#tipsModal").is(":visible")){
                    			//提示唯一
                    		}else{
	                    		tipDialog({
									title:"提示",
									content:codeList[index].content+(data.data.message?data.data.message:''),
									width:"526px"
								});	
                    		}
                    	}else{
                    		//alert("未知错误");
                    	}
					 	return false;                    
                    }else{
                    	console.warn(data.data.message  || "未知错误");
                    	//throw new Error(data.data.message || ErrorMessage[data.data.code] || "未知错误");
                    }
                    
                });
            };
        }]);
})(window.angular);