(function(angular){	
	var app = angular.module("app",['Routes','ngSanitize','MyDirect','Batch',"Filter","Valid","Service","ngFileUpload"]);		
	app.service('role',[function(){
		
	}])
	app.service('needLoad',[function(){
		var list =['api/','store'] ;				
        return {
        	list:list
        }
	}])
	app.service('isLoading',['needLoad',function(needLoad){
		//对后台请求  有params的 做请求缓存   判断请求是否完全结束
		var isLoading = $("#isLoading"),
			 requestList ={};
		function showMask(){     
		        $(".floatmask").css("height",$(document).height());     
		        $(".floatmask").css("width",$(document).width());     
		        $(".floatmask").show();     
		 }  
	    //隐藏遮罩层  
	    function hideMask(){     		          
	        $(".floatmask").hide();     
	    }  		
		function show(key){
			isLoading.attr('style','display:block;');
			if(requestList[key]>=0){
				requestList[key]++;
			}else{
				requestList[key] = 1;
			}
			showMask();
		}
		function hide(key){				
			if(requestList[key]>1){					
				requestList[key]--;
			}else if(requestList[key]<0){
				console.warn(" hide error---");
			}else if(requestList[key]==1){
				isLoading.attr('style','display:none;');
				requestList[key] = 0;
				$(".floatmask").hide(); 				
			}								 
		}
		return {
				show :show,
				hide : hide,
				hideMask:hideMask,
				requestList:requestList
			};
	}])
	/**
	 * 参数 type 页面的控制器名称 
	 * 	   param  控制器 中 $scope.param 接收的传参
	 * 	   route ————》
	 * 			 {key(控制器名称):
	 * 				{dom:当前页面唤起弹窗的挂载元素（依赖bootstrap 的模态框）
	 * 				 content：控制器在模板中控制的范围
	 * 				 template：模板的id
	 * 				}
	 * 			}
	 * **/
	app.service('dialogshow',['dialogFtl',function(dialogFtl){
		function show(type,param,route){
			dialogFtl({
				dom:route[type].dom,
				content:route[type].content,
				template:route[type].template,
				type:type
				},
				param
			);
		}
		return {
			show : show		
		}
		
	}])
	app.factory("httpInterceptor", [ "$q", "$rootScope",'$location','isLoading','needLoad',function($q, $rootScope,$location,isLoading,needLoad) {
		return {
				request: function(config) {				
				// do something on request success
				//添加登录判断 如果未登录 则跳转到登录地址
				//存在于过滤列表或者带了分页的 不显示浮层
				if(((config.url.indexOf(needLoad.list[0])>-1)||(config.url.indexOf(needLoad.list[1])>-1))&&config.data&&(config.data.isLoading!=false)){
					isLoading.show(config.url);
				}
				if(config.data&&config.data.isLoading){
					delete config.data.isLoading;
				}
					
				return config || $q.when(config);
				},
			　　 	requestError: function(rejection) {
			　　　　 // do something on request error
			　　　　 return $q.reject(rejection)
			　　 },
				response: function(response) {

				// do something on response success									
					isLoading.hide(response.config.url);
				return response || $q.when(response);
				},
				responseError : function(rejection) {
					isLoading.hide(rejection.config.url);				
					// do something on response error
					//isLoading.hide();
				return $q.reject(rejection);
			}
		};
	}]);
	app.config(["$httpProvider", function($httpProvider) {
	　　 $httpProvider.interceptors.push("httpInterceptor");
	}]);
	app.controller("IndexCtrl",['$scope','$rootScope','$location',function($scope,$rootScope,$location){
		$scope.name="NavCtrl";
	}]);
	app.controller("WelcomeCtrl",['$scope','$rootScope','$location',function($scope,$rootScope,$location){
		$scope.name="NavCtrl";
		$rootScope.showSiderbar = true;
	}]);
	app.controller("LoginCtrl",['$scope','$rootScope','$location','$http','role',function($scope,$rootScope,$location,$http){
		$scope.name="LoginCtrl";
	    $rootScope.singlePage =false;
		/*$.getJSON('/api/nmusician/backend/login/admin/get')
			.success(function(data){
				if(data.code==200){
					$rootScope.useId = data.result.admin.id;
					$scope.loginname = data.result.admin.name;
					$rootScope.role = data.result.admin.role;
					$rootScope.authority =  data.result.admin.authority;
					//role.role = data.result.admin;
				}else if(data.code==603){
					redict();
				}
			});*/

		$.getJSON('/api/backend/manager')
			.success(function(data){				
				if(data.code==200){
					$rootScope.role = data.manager;
				}else{
					alert('获取登录信息失败');
				}
			});	
			
		$('#logout').click(function(){
			$.getJSON('/api/backend/manager/logout')
				.success(function(data){
					if(data.code==200){
						window.location.href = data.redirect;
					}else{
						alert('退出失败');
					}
			});
		});			
	}]);
	app.controller("LeftPanelCtrl",['$scope','$rootScope','$location','batch','role',function($scope,$rootScope,$location,batch){
		$scope.name="NavCtrl";
		//对左侧的 菜单 做处理
		function setActive(event){
			var  dom = $(".panel-sidebar-menu").find('[ng-href]');
			if(event&&!event.target.hasAttribute('ng-href')) return ;
			for(var i =0; dom.length>i;i++){
				if(event&&dom[i]==event.target){
					dom[i].parentElement.setAttribute('class','active');
				}else{
					dom[i].parentElement.removeAttribute('class');
				}
			}

		}
		var 	container = $(".mainleftpanel");
		 container.on('click',function(){
		 	setActive(event)
		 });
		$scope.showPanel = false;
		$scope.authority;
		//$scope.role = role;
				
		(function(){
			var inter = setInterval(function(){			      
				var timeout =  setTimeout(function(){
				  	setActive();				  	
				   	var path = '#'+$location.$$path;
						if(path=='#'){
							path = '#/';
						};
						var	target =$("[href^='"+ path.split('/').splice(0,2).join('/')+ "']");				
						target.parent().addClass('active');
						$('.index-body-leftPanel ').height($('.index-main-content').height());
						window.clearTimeout(inter);
				},400) ;		
			},1000)			
		})();		
	}]);
	app.controller("MainCtrl",['$scope','$rootScope','$location','isLoading',function($scope,$rootScope,$location,
		isLoading){
		$scope.name="NavCtrl";
		$rootScope.showSiderbar = false;
		$rootScope.marginSize ="margin-n";		
		$rootScope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams){
			//路由变化时清空 loading的 列表 和图标
			isLoading.requestList={};
			isLoading.hideMask();
        })
	}]);	
	app.controller("UserMgrCtrl",['$scope','$rootScope','$location','$filter','dialog','successTip','batch','dialogshow',function($scope,$rootScope,
		$location,$filter,dialog,successTip,batch,dialogshow){			
		$scope.name="UserMgrCtrl";
		$scope.resulttype  =0;
		$scope.userId = $rootScope.useId;	
		$scope.pageSetting={
			total:0,
			offset:0,
			limit:20			
		};
		$scope.changeType = function(e,type,val){
			if(type=='resulttype')
				$scope.resulttype = val;			
			if(true){
				$scope.resulttype = val;
				$scope.pageSetting.offset = 0;
				batchList(getParam());
			}				
		}		
		$scope.$on('pageChange', function(e,param){
			$scope.pageSetting.offset =param.pageInfo.offset;
			batchList(getParam())
		});	
		
		$scope.$on('changeItem',function(e,data){
			if(data){
				$scope.s=data.search;
				$scope.pageSetting.offset = 0;
			}
			batchList(getParam());
		});		
        function getParam(){        	
        	 var param  ={
        		limit:20,
        		offset:$scope.pageSetting.offset,
        		type:$scope.resulttype
        	}
        	if($scope.month&&$scope.month != ''){
        		param.month = $scope.month;
        	}
        	if($scope.s&&$scope.s != ''){
        		param.s = $scope.s;
        	}
        	return param;
        };
		function batchList(param){
			$scope.$broadcast('batch');
			return batch.auditMgr.userMgr.getList(param).then(function(data){
				if(data){
					if(data.datas.length>=0){
						$scope.items = data.datas;							
					}			
					$scope.pageSetting.total=data.count;
				}
			});
		}
		var route = {
			//弹窗节点    controller挂载节点     模板id 
			AdmireTypeSettingCtrl:{dom: 'showModal', content:'#admireType-setting',template:'admireTypeSetting.ftl'},	
			UserDetailCtrl:{dom: 'showModal', content: '#userinfo-detail',template:'userDetail.ftl'},
			AccountDetailCtrl:{dom: 'showModal', content: '#userinfo-detail',template:'accountDetail.ftl'}/*,
			ProductionMgrCtrl:{dom: 'mgrModal', content: '#production-mgr',template:'productionMgr.ftl'}*/
		};		
		$scope.show=function(type,param){
			dialogshow.show(type,param,route);
		}

		setTimeout(function(){
			batchList(getParam());
		},100);

	}]);
	app.controller("DivideMgr",['$scope','successTip','batch','PrivateLetter','dialogshow','PrivateLetter','tipDialog','opLog',function($scope,
		successTip,batch,PrivateLetter,dialogshow,PrivateLetter,tipDialog,opLog){
		$scope.name="DivideMgr";
		$scope.pageSetting={
			total:0,
			offset:0,
			limit:20
		};
		$scope.searchtype = 1;
		$scope.changeType = function(e,type,val){			
			if($scope.searchtype!=val){
				$scope.pageSetting.offset = 0;
				batchList(getParam());
			}	
		}
		$scope.$on('pageChange', function(e,param){
			$scope.pageSetting.offset =param.pageInfo.offset;
			batchList(getParam())
		});			
		$scope.$on('changeItem',function(e,data){
			if(data){
				$scope.s=data.search;
				$scope.pageSetting.offset = 0;
			}
			batchList(getParam());
		});	
        function getParam(){ 
        	 var param = {
        		type:$scope.searchtype,
        		limit:20,
        		offset:$scope.pageSetting.offset
        	};
        	if($scope.s&&$scope.s != ''){
        		param.s = $scope.s;
        	}
        	return param ;        	
        };
        function adapterPercent(_val){
        	var val = _val.split('.')[1];
        	if(val&&val.length>2){
        		return val.slice(0,2)+'.'+val.slice(2)+'%';
        	}else if(val&&val.length==2){
        		return val.slice(0)+'%';
        	}else if(val&&val.length==1){
        		return val.slice(0)+'0%';
        	}else{
        		return _val*1;
        	}
        }        
		function batchList(param){
			$scope.$broadcast('batch');				
			return batch.auditMgr.divideMgr.getList(param).then(function(data){
				if(data){
					if(data.count>=0){
						_.each(data.datas,function(val , key , array){
							if(val.gainSharing&&val.gainSharing!=''){
								val.new_gainSharing = adapterPercent(val.gainSharing);
							}else{
								val.new_gainSharing = 0;
							}
							if(val.gainSharingOpRecord){
								opLog.adapter(val,'gainSharingOpRecord','divide');
							}								
						})						
						$scope.members = data.datas;
						$scope.pageSetting.total=data.count;
					}
				}
			});
		}		
		batchList(getParam());			
		var route = {
			//弹窗节点    controller挂载节点     模板id 
			DivideSettingCtrl:{dom: 'showModal', content: '#divide-setting',template:'divideSetting.ftl'}
		};			
		$scope.showReason=function(member){
			member.searchtype = $scope.searchtype;
			dialogshow.show('DivideSettingCtrl',member,route);
			$("#showModal").modal('show');
		}
	}]);	
	app.controller("BlackListMgr",['$scope','successTip','batch','PrivateLetter','dialogshow','tipDialog',function($scope,
		successTip,batch,PrivateLetter,dialogshow,tipDialog){
		$scope.name="blackProductionMgr";
		$scope.type = 'user';
		$scope.pageSetting={
			total:0,
			offset:0,
			limit:20
		};
		$scope.searchtype = 1;
		$scope.changeType = function(e,type,val){
			if(type=='type') $scope.type = val;
			if($scope.searchtype!=val){
				$scope.pageSetting.offset = 0;
				batchList(getParam());
			}	
		}
		$scope.$on('pageChange', function(e,param){
			$scope.pageSetting.offset =param.pageInfo.offset;
			batchList(getParam())
		});			
		$scope.$on('changeItem',function(e,data){
			if(data){
				$scope.s=data.search;
				$scope.pageSetting.offset = 0;
			}
			batchList(getParam());
		});	
        function getParam(){ 
        	 var param = {
        		type:$scope.searchtype,
        		limit:20,
        		offset:$scope.pageSetting.offset
        	};
        	if($scope.s&&$scope.s != ''){
        		param.s = $scope.s;
        	}
        	return param ;        	
        };
		function batchList(param){
			$scope.$broadcast('batch');			
			return batch.auditMgr.blackMgr.getList(param,{type:$scope.type}).then(function(data){
				if(data){
					if(data.count>=0){				
						$scope.members = data.datas;
						$scope.pageSetting.total=data.count;
					}
				}
			});
		}		
		batchList(getParam());	
		$scope.removeAction = function(member){		
			PrivateLetter({
				title:"操作确认",
				content:'确定将用户名移出黑名单吗？',
				actionButton:'确定',
				width:"426px",			
				readonly:true
			}).done(function(action,data){
				batch.auditMgr.blackMgr.removeUser({
					id:member.id,
					userId:member.userId
				}).then(function(data){
					if(data&&data.code ==200){
						successTip('success');
						batchList(getParam());
					}
				})
				
			}).fail(function(){
				
			});
			
		}
	}]);
	app.controller("blackProductionMgr",['$scope','$location','successTip','batch','PrivateLetter','dialogshow','tipDialog',function($scope,
		$location,successTip,batch,PrivateLetter,dialogshow,tipDialog){
		$scope.name="blackProductionMgr";
		$scope.tabName = 'singleSong';
		$scope.type = 'production';
		$scope.pageSetting={
			total:0,
			offset:0,
			limit:20
		};
		$scope.searchtype = 1;
		$scope.changeType = function(e,type,val){				
			if($scope.searchtype!=val){
				$scope.pageSetting.offset = 0;
				batchList(getParam());
			}	
		}
		$scope.$on('pageChange', function(e,param){
			$scope.pageSetting.offset =param.pageInfo.offset;
			batchList(getParam())
		});			
		$scope.$on('changeItem',function(e,data){
			if(data){
				$scope.s=data.search;
				$scope.pageSetting.offset = 0;
			}
			batchList(getParam());
		});	
        function getParam(){ 
        	 var param = {
        		type:$scope.searchtype,
        		limit:20,
        		offset:$scope.pageSetting.offset
        	};
        	if($scope.s&&$scope.s != ''){
        		param.s = $scope.s;
        	}
        	return param ;        	
        };
		function batchList(param){
			$scope.$broadcast('batch');			
			return batch.auditMgr.blackMgr.getUserProductionList({
				userId:$location.$$search.userId,
				type:$scope.searchtype
				}
			).then(function(data){
				if(data){
					if(data.count>=0){				
						$scope.members = data.datas;
						$scope.pageSetting.total=data.count;
					}
				}
			});
		}		
		batchList(getParam());	
		$scope.privateLetter = function(param){
				//$("#mgrModal").hide();				
				PrivateLetter({
					title:"私信通知",
					content:param.content,
					actionButton:'确定并发送',
					width:"426px",
					required:false,
					tempAddress:"privateLetter.html",
					readonly:false,
					placeHolder:"en"
				}).done(function(action,data){
					var params ={
						songId:param.songId,
						userId:$location.$$search.userId,
						audit:param.audit
					};					
					if(data){
						params.msgContent = data.content;
					}
					//服务好后发送 审核结果
					auditAction(params,function(data){
						if(data){
							//$("#showModal").modal('hide');
							$scope.$emit("changeItem");
							successTip('success');
						}
					});		
				}).fail(function(){
					//$("#mgrModal").show();
				});
		  }
		  function auditAction(param,cbsuccess,cbfail){
			  batch.auditMgr.userMgr.openSingleSong(param).then(
				  cbsuccess,cbfail
			  )	
		  }
		  $scope.songSingleAction = function(item,type){
			  var param ={
			  	  songId:item.songId
			  };		  			  	
			  switch (type){				
			  case 'removeBlack':
				  param.audit = -2;
				  param.content = "您的单曲《"+item.songName+"》赞赏权限已被管理员解除锁定。即日起您可以进入“网易云音乐网页版－赞赏管理入口”操作，开通该单曲的赞赏功能。感谢您对网易云音乐的支持！";
				  $scope.privateLetter(param);	
				  break				
			  }		  	
		  }
	}]);
	app.controller("OpenAuditCtrl",['$scope','$location','successTip','batch','PrivateLetter','dialogshow','PrivateLetter','tipDialog',function($scope,
		$location,successTip,batch,PrivateLetter,dialogshow,PrivateLetter,tipDialog){
		$scope.name="OpenAuditCtrl";
		$scope.pageSetting={
			total:0,
			offset:0,
			limit:20
		};
		$scope.searchtype = "1";
		$scope.resulttype = "2";
		$scope.changeType = function(e,type,val){
			if(type=='searchtype')
				$scope.searchtype = val;
			if(type=='resulttype')
				$scope.resulttype = val;			
			if(true){
				$scope.pageSetting.offset = 0;
				batchList(getParam());
			}	
		}
		$scope.$on('pageChange', function(e,param){
			$scope.pageSetting.offset =param.pageInfo.offset;
			batchList(getParam())
		});			
		$scope.$on('changeItem',function(e,data){
			if(data){
				$scope.s=data.search;
				$scope.pageSetting.offset = 0;
			}
			batchList(getParam());
		});	
        function getParam(){ 
        	 var param = {
        		type:$scope.searchtype,
        		status:$scope.resulttype,
        		limit:20,
        		offset:$scope.pageSetting.offset
        	};
        	if($scope.s&&$scope.s != ''){
        		param.s = $scope.s;
        	}
        	return param ;        	
        };
		function batchList(param){
			$scope.$broadcast('batch');						
			return batch.withdrawAudit.openAudit.getList(param).then(function(data){
				if(data){
					if(data.datas.length>=0/*data.count>=0*/){
						_.each(data.datas,function(val , key , array){
							if(val.opRecord){
								var rel = val.opRecord.split(' ');
								val.record ={};
								val.record.auditResult =  rel[4];
								val.record.aduiter =  rel[2];
								val.record.time = rel[0].replace(/_/g,':') +" "+rel[1];
							}							
						})	
						$scope.members = data.datas;
						$scope.pageSetting.total=data.count;
					}
				}
			});
		}
		batchList(getParam());							
		var route = {
			//弹窗节点    controller挂载节点     模板id 
			OpenAuditRejectCtrl:{dom: 'statusModal', content: '#status-content',template:'reject.ftl'},
			OpenUserDetailCtrl:{dom: 'showModal', content: '#userinfo-detail',template:'openUserDetail.ftl'},
			OpenUserAuditCtrl:{dom: 'showModal', content: '#userinfo-edit',template:'openUserAudit.ftl'}
		};		
		$scope.show=function(type,param){
			dialogshow.show(type,param,route);
		}		
		$scope.showReason=function(member ,status,modal){	
			var type ='';
			if(status == 'audit'){
				var auditResult = false;
				batch.withdrawAudit.openAudit.isAuditing({
					id:member.id
				}).then(function(data){
					if(data&&(data.isChecking==true)){
						auditResult = true;
					}
					if(auditResult == true){
						tipDialog({
							title:"提示",
							content:'提示该申请已有用户正在审核，您暂时无法进行审核操作。',
							width:"425px"
						});
					}
					if(auditResult == false){						
						dialogshow.show(type,{item:member},route);
						$("#"+modal).modal('show');
					}
				});				
			}
			switch(status){				
				case '-1':
					type = 'OpenAuditRejectCtrl';
					break
				case 'audit':
					type = 'OpenUserAuditCtrl';
					break	
				case 'detail':
					type = 'OpenUserDetailCtrl';
					break		
			}
			if(auditResult == true){
				return
			}
			if(type!=''&&type!='OpenUserAuditCtrl'){
				dialogshow.show(type,{item:member},route);
				$("#"+modal).modal('show');
			}
		}
	}]);
	app.controller("WithdrawAuditTemporaryCtrl",['$scope','$rootScope','$location','$filter','dialog','successTip','batch','PrivateLetter',function($scope,$rootScope,
		$location,$filter,dialog,successTip,batch,PrivateLetter){			
		$scope.name="WithdrawAuditCtrl";
		$scope.userId = $rootScope.useId;
		$scope.selectAll = false;
		$scope.status ='all';
		$scope.payType = 0;
		$scope.time = _.now();
		$scope.select={
			alipay:'sel',
			wechart:'unsel'			
		};
		$scope.pageSetting={
			total:0,
			offset:0,
			limit:20
		};			
		$scope.$on('pageChange', function(e,param){
			$scope.pageSetting.offset =param.pageInfo.offset;
			batchList(getParam())
		});	
		$scope.search=function(name){
			for(i in $scope.select){
				$scope.select[i] ='unsel';
			}
			$scope.select[name] ='sel';
			$scope.selected =name;
			switch(name){
				case 'alipay':
					$scope.payType = 0;
					break
				case 'wechart':
					$scope.payType = 3;
					break
			};
			if($scope.status == 'all'){
				$scope.pageSetting.offset = 0;
				batchList(getParam());	
			}else{
				$scope.status ='all';
			}
			$scope.pageSetting.offset = 0;
		}
		$scope.$on('changeItem',function(e,data){
			if(data){
				$scope.key=data.search;
				$scope.pageSetting.offset = 0;
			}
			batchList(getParam());
		});
		//音乐人的状态, 0-待审核 1-已通过 2-已拒绝 -1-全部
		$scope.tags=[{id:'0',name:"未处理"},{id:'-2',name:"已拒绝"},{id:'2',name:"到账成功"},{id:'-1',name:"到账失败"}];
		$scope.changeTag =function(e){
			batch.auditsManagement.changeTag(e.id,e.tag,1).then(function(data){			
				 batchList(getParam());
			});			
		}
		$scope.$watch('status',function(oldValue , newValue){
			if(oldValue&&newValue&&oldValue!=newValue){		
				$scope.status = oldValue;
				$scope.pageSetting.offset = 0;
				batchList(getParam());	
			}				
		})		
        function getParam(){ 
        	 var filter = $filter('date');
        	 var all = $scope.status == 'all'?true:false;
        	 var param = {
        		all:all,        		
        		payType:$scope.payType,
        		limit:20,
        		offset:$scope.pageSetting.offset
        	}; 
        	if($scope.status=='all'){
        		param.status = '8';
        	}else{
        		param.status =$scope.status;
        	}
        	
        	return param ;
        	
        };
		function batchList(param){
			$scope.$broadcast('batch');
			return batch.withdrawMgr.withdrawAudit.getList(param).then(function(data){
				if(data){
					if(data.count>=0){
						_.each(data.records,function(val , key , array){
							val.record.status = val.record.status+'';
						})						
						$scope.members = data.records;
						$scope.pageSetting.total=data.count;
					}
				}
			});
		}
		
		$scope.changeTag = function(member){
			var content = "确定将该条提现申请的状态修改为“"+member.status.name+"”吗？";
			var placeHolder ="";
			var readonly = true;
			var required = false;
			var param ={				
				id:member.id,
				userId:member.record.userId,
				amount:member.record.amount,
				payMethod:$scope.payType
			};
			var requesttype ="";
			switch(member.status.id){
				case '2':
					requesttype = 'success';						
					break
				case '-1':
					requesttype = 'failed';
					content = null;
					readonly = false;
					required = true;
					placeHolder ="请输入失败原因。";
					break
				case '-2':
					requesttype = 'reject';
					content = null;
					readonly = false;
					required = true;
					placeHolder ="请输入拒绝理由。";
					break
			}
			
			PrivateLetter({
				title:"操作确认",
				content:content,
				actionButton:'确定',
				width:"426px",
				required:required,
				tempAddress:"withdrawAudit.html",
				readonly:readonly,
				placeHolder:placeHolder
			}).done(function(action,data){
				var reason ="";
				if(data){
					param.reason = data.content;					
				}				
				batch.withdrawMgr.withdrawAudit[requesttype](param).then(
					function(data){
						if(data){
							batchList(getParam());
						}
					}
				)
				
			}).fail(function(){
				member.status = $scope.tags[0];
			});
		}
		
		$scope.init = function(member ,tags){
			member.status = tags[_.findIndex(tags,{id : member.record.status})];
		}
		setTimeout(function(){
			batchList(getParam());			
		},100);
		
	}]);
	app.controller("WithdrawAuditCtrl",['$scope','$filter','successTip','batch','PrivateLetter','dialogshow',function($scope,
		$filter,successTip,batch,PrivateLetter,dialogshow){			
		$scope.name="WithdrawAuditCtrl";
		$scope.selectAll = false;
		$scope.select={
			alipay:'sel',			
			wechart:'unsel'			
		};
		
		$scope.pageSetting={
			total:0,
			offset:0,
			limit:20
		};			
		$scope.$on('pageChange', function(e,param){			
			$scope.pageSetting.offset =param.pageInfo.offset;
			batchList(getParam())
		});	
		$scope.search=function(name){
			for(i in $scope.select){
				$scope.select[i] ='unsel';
			}
			$scope.select[name] ='sel';
			$scope.selected =name;
			switch(name){
				case 'alipay':
					$scope.payType = 0;
					break
				case 'wechart':
					$scope.payType = 3;					
					break				
			};
			$scope.selectAll = false;
			if($scope.status == 'all'){
				$scope.pageSetting.offset = 0;
				batchList(getParam());	
			}else{
				$scope.status ='all';
			}
			$scope.pageSetting.offset = 0;
		}
		$scope.$on('changeItem',function(e,data){
			if(data){
				$scope.s=data.search;
				$scope.pageSetting.offset = 0;
			}
			batchList(getParam());
		});
		$scope.tags=[{id:'0',name:"未处理"},{id:'-2',name:"已拒绝"},{id:'2',name:"到账成功"},{id:'-1',name:"到账失败"}];
		$scope.changeTag =function(e){
			batch.auditsManagement.changeTag(e.id,e.tag,1).then(function(data){			
				 batchList(getParam());
			});			
		}
		$scope.status ='all';
		$scope.payType = 0;
		$scope.time = _.now();
		$scope.$watch('status',function(newValue ,oldValue ){
			if(oldValue&&newValue&&oldValue!=newValue){		
				$scope.status = newValue;
				$scope.pageSetting.offset = 0;
				batchList(getParam());	
			}				
		})
		$scope.$watch('selectAll',function(newValue ,oldValue){
			if(newValue){		
				_.each($scope.members,function(val , key , array){
					val.check =true;
				})	
			}else{
				_.each($scope.members,function(val , key , array){
					val.check =false;
				})
			}				
		})
        function getParam(){ 
        	var filter = $filter('date');
        	var all = $scope.status == 'all'?true:false;
        	var param = {
        		all:all,        		
        		payType:$scope.payType,
        		limit:20,
        		offset:$scope.pageSetting.offset
        	}; 
        	if($scope.status=='all'){
        		param.status = '8';
        	}else{
        		param.status =$scope.status;
        	}
        	if($scope.s&&$scope.s != ''){
        		param.s = $scope.s;
        	}
        	return param ;        	
        };
		function batchList(param){
			$scope.$broadcast('batch');
			return batch.withdrawMgr.withdrawAudit.getList(param).then(function(data){
				if(data){
					if(data.count>=0){
						_.each(data.records,function(val , key , array){
							val.record.status = val.record.status+'';
							val.check = false;
						})						
						$scope.members = data.records;
						window.hhq = $scope;
						$scope.pageSetting.total=data.count;
					}
				}
			});
		}
		$scope.check = function(member){
			if(member.check = false){
				$scope.selectAll = false;
			}
		}
		$scope.changeTag = function(member){
			var content = "确定将该条提现申请的状态修改为“"+member.status.name+"”吗？";
			var placeHolder ="";
			var readonly = true;
			var required = false;
			var param ={				
				id:member.id,
				userId:member.record.userId,
				amount:member.record.amount,
				payMethod:$scope.payType
			};
			var requesttype ="";
			switch(member.status.id){
				case '2':
					requesttype = 'success';						
					break
				case '-1':
					requesttype = 'failed';
					content = null;
					readonly = false;
					required = true;
					placeHolder ="请输入失败原因。";
					break
				case '-2':
					requesttype = 'reject';
					content = null;
					readonly = false;
					required = true;
					placeHolder ="请输入拒绝理由。";
					break
			}
			
			PrivateLetter({
				title:"操作确认",
				content:content,
				actionButton:'确定',
				width:"426px",
				required:required,
				tempAddress:"withdrawAudit.html",
				readonly:readonly,
				placeHolder:placeHolder
			}).done(function(action,data){
				var reason ="";
				if(data){
					param.reason = data.content;					
				}
				
				batch.withdrawMgr.withdrawAudit[requesttype](param).then(
					function(data){
						if(data){
							batchList(getParam());
						}
					}
				)
				
			}).fail(function(){
				member.status = $scope.tags[0];
			});
		}			
		setTimeout(function(){
			batchList(getParam());			
		},100);
		var route = {
			//弹窗节点    controller挂载节点     模板id 
			BatchAuditCtrl:{dom: 'batchModal', content: '#batch-content',template:'batchAudit.ftl'},
			BatchRejectCtrl:{dom: 'batchModal', content: '#batch-content',template:'batchReject.ftl'},	
			transferCtrl:{dom: 'testModal', content: '#transfer-content',template:'transfer.ftl'},
			rejectTransferCtrl:{dom: 'testModal', content: '#rejectTransfer-content',template:'rejectTransfer.ftl'},			
			AuditRejectCtrl:{dom: 'statusModal', content: '#status-content',template:'reject.ftl'},
			AuditingCtrl:{dom: 'statusModal', content: '#status-content',template:'auditing.ftl'},
			AuditedCtrl:{dom: 'statusModal', content: '#status-content',template:'audited.ftl'},
			AuditFailCtrl:{dom: 'statusModal', content: '#status-content',template:'auditFail.ftl'}
		};		
		$scope.show=function(type,param){
			dialogshow.show(type,param,route);
		}
		$scope.batchAduit = function(type,controllerName){
			var arr = [];
			arr = _.filter($scope.members,function(val ,key ,arr){
				return val.check == true;
			})
			if(arr.length == 0) {
				alert('至少选择一条数据！');
				return ;
			}
			dialogshow.show(controllerName,{parent:$scope,arr:arr},route);
			$("#batchModal").modal('show');				
		}
		$scope.showReason=function(member ,status){	
			var type ='';
			switch(status){
				case '2':
					type = 'AuditedCtrl';
					break
				case '-1':
					type = 'AuditFailCtrl';
					break
				case '-2':
					type = 'AuditRejectCtrl';
					break
				case '1':
					type = 'AuditingCtrl';
					break
				case '3':
					type = 'AuditingCtrl';
					break
			}
			if(type!=''){
				dialogshow.show(type,{item:member},route);
				$("#statusModal").modal('show');
			}
		}
		
	}]);
	app.controller("WithdrawReportsCtrl",['$scope','$rootScope','$location','$filter','dialog','successTip','batch',function($scope,$rootScope,
		$location,$filter,dialog,successTip,batch){			
		$scope.name="WithdrawAuditCtrl";
		$scope.userId = $rootScope.useId;
		$scope.select={
			alipay:'sel',
			wechart:'unsel',
			withdraw:'sel',
			income:'unsel'
		};
		$scope.withdraw = true;
		$scope.pageSetting={
			total:0,
			offset:0,
			limit:20			
		};			
		$scope.$on('pageChange', function(e,param){
			$scope.pageSetting.offset =param.pageInfo.offset;
			batchList(getParam())
		});	
		$scope.search=function(name){			
			$scope.select[name] ='sel';
			$scope.selected =name;
			switch(name){
				case 'alipay':
					$scope.payType = 0;
					$scope.select.wechart = 'unsel';
					break
				case 'wechart':
					$scope.payType = 3;
					$scope.select.alipay = 'unsel';
					break
				case 'withdraw':
					$scope.withdraw = true;
					$scope.income = false;
					$scope.select.income = 'unsel';
					break
				case 'income':
					$scope.withdraw = false;
					$scope.income = true;
					$scope.select.withdraw = 'unsel';
					break	
			};
			$scope.pageSetting.offset = 0;
			batchList(getParam());
		}
		$scope.$on('changeItem',function(e,data){
			$scope.month = $("#month").val().replace('-','');
			if(data){
				$scope.s=data.search;
				$scope.pageSetting.offset = 0;
			}
			batchList(getParam());
		});
		//音乐人的状态, 0-待审核 1-已通过 2-已拒绝 -1-全部
		$scope.$watch('month',function(newValue ,oldValue){
			console.log(newValue);
		})
		var filter = $filter('date');
		$scope.payType = 0;
		$scope.time = _.now();
        function getParam(){        	
        	//month=201611&payType=0&limit=20&offset=0&managerName=hzwanggaoping
        	 var param  ={
        		month:filter(_.now(),'yyyyMM'),
        		payType:$scope.payType,
        		limit:20,
        		offset:$scope.pageSetting.offset,
        		managerName:$rootScope.role.userName
        	}
        	if($scope.month&&$scope.month != ''){
        		param.month = $scope.month;
        	}
        	if($scope.s&&$scope.s != ''){
        		param.s = $scope.s;
        	}
        	return param;
        };
		function batchList(param){
			$scope.$broadcast('batch');
			return batch.withdrawMgr.withdrawReports.getList(param).then(function(data){
				if(data){
					if(data.datas.length>=0){
						var arr =[];
						_.each(data.datas,function(item , key ,_arr){
							var obj = {};
							obj = _.extend(item.artist,item.artistMoney);
							obj.canWithdraw = item.canWithdraw;
							obj.userName = item.userName;
							obj.wechatNickName = item.wechatNickName;
							//obj.realIncome = item.realIncome;
							obj.commisionCharge = item.commisionCharge;
							arr.push(obj);
						})
						$scope.items = arr;			
					}			
					$scope.pageSetting.total=data.count;
				}
			});
		}
		$scope.exports = function(){
			var url = $scope.withdraw?batch.withdrawMgr.withdrawReports.withDrawExports():batch.withdrawMgr.withdrawReports.incomeExports();
			window.a = document.createElement('a');
			a.setAttribute('href',window.location.protocol +"//"+window.location.hostname+
				url+'?month='+$("#month").val().split('-').join(''));//
			a.click();
			delete a ;
		}
		setTimeout(function(){
			batchList(getParam());
			$("#month").val(filter(_.now(),'yyyy-MM'));
		},100);
	}]);
})(window.angular)