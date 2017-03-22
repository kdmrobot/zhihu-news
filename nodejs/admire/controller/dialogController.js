/**
 * Created by wb.huanghuaqing on 2016/9/20.
 */
(function(angular) {
    var app = angular.module("app");
    app.service('dialogUtil',[function(){
		function contentchange($scope){	
		    var getBytesLength = function(e) { 
				var length = 0; 
				for(i = 0;i < e.length; i++) { 
					iCode = e.charCodeAt(i); 
					if((iCode >= 0 && iCode <= 255) || (iCode >= 0xff61 && iCode <= 0xff9f)) { 
						length += 1; 
					} else { 
						length += 2; 
					} 
				} 
				return length; 
			} 
			if($.trim($("#contentvalue").val())&&$.trim($("#contentvalue").val()!='')){
				if(getBytesLength($("#contentvalue").val())>200){
					//alert("限制输入200字节");
					$scope.isActive = false;
				}else{
					$scope.isActive = true;
				}
			}else{
				$scope.isActive =false;
			}
		}	   	
        return {
        	contentchange:contentchange
        }
	}])
	app.service('auditUtil',[function(){
		function getDetail($scope,type){
 				//id1_userId1_withdrawNo1,id2_userId2_withdrawNo2  奇葩格式
 				var details  =[];
 				_.each($scope.members,function(val ,key ,arr){
	 				details.push(val.record.id+"_"+val.record.userId+"_"+val.record.withDrawNo+'_'+type );
	 			}) 				
	 			if(details.length>0){
	 				return  details.join(',');
	 			}else{
	 				return '' ;
	 			} 				
 			}	
    	
        return {
        	getDetail:getDetail
        }
	}])
	app.controller("UserDetailCtrl",['$scope','dialogshow','batch','showPicture',function($scope,dialogshow,batch,showPicture){
		$scope.name = "UserDetailCtrl";	
		var route = {
			UserEditCtrl:{dom: 'editModal', content: '#userinfo-edit',template:'userEdit.ftl'}				
		};		
		$scope.show=function(type,param){
			$("#showModal").hide();
			dialogshow.show(type,param,route);
			$('#editModal').modal('show');
		}
		$scope.showPicture = function(src){
			showPicture.showPicture(src)
		}
		batch.auditMgr.userMgr.getDetail({id:$scope.param.id}).then(function(data){
			if(data){
				$scope.info = data;
				$scope.info.wechatAccount = $scope.info.wechat?$scope.info.wechat.openId:'--';
			}
		});	
    }]);
    app.controller("AccountDetailCtrl",['$scope','dialogshow','batch','PrivateLetter','successTip',function($scope,dialogshow,batch,PrivateLetter,successTip){
		$scope.name = "AccountDetailCtrl";	
		var route = {
			UserEditCtrl:{dom: 'editModal', content: '#userinfo-edit',template:'userEdit.ftl'}				
		};		
		$scope.show=function(type,param){
			$("#showModal").hide();
			dialogshow.show(type,param,route);
			$('#editModal').modal('show');
		}
		$scope.aplay = function(){
			if($scope.bindAplay == false){
				$("#showModal").hide();
				PrivateLetter({
					title:"绑定支付宝账号",
					width:"425",
					actionButton:'绑定',
					tempAddress:"accountBindAplay.html"
				}).done(function(type,data){
					batch.auditMgr.userMgr.accountBindAplay({
						rewardartistid:$scope.param.id,
						account:data.scope.aplayAccount,
						realname:data.scope.aplayRealAccount
					}).then(function(data){
						if(data){
							successTip('success');							
							getData();
						}
						$("#showModal").show();
					});	
				}).fail(function(){
					$("#showModal").show();		
				});
			}else if($scope.bindAplay == true){
				$("#showModal").hide();
				PrivateLetter({
					title:"操作确认",
					content:'确认解绑当前支付宝账号吗？',
					width:"425",
					readonly:true,
					actionButton:'确认'					
				}).done(function(){				
					batch.auditMgr.userMgr.accountUnBindAplay({
						rewardartistid:$scope.param.id
					}).then(function(data){
						if(data){
							successTip('success');							
							getData();
						}
						$("#showModal").show();
					});	
				}).fail(function(){							
					$("#showModal").show();
				});		
			}	
		}
		$scope.wechat = function(){
			$("#showModal").hide();
			PrivateLetter({
				title:"操作确认",
				content:'确认解绑当前微信账号吗？',
				width:"425",
				readonly:true,
				actionButton:'确认'					
			}).done(function(){				
				batch.auditMgr.userMgr.accountUnBindWechat({
					rewardartistid:$scope.param.id
				}).then(function(data){
					if(data){
						successTip('success');							
						getData();
					}
					$("#showModal").show();
				});	
			}).fail(function(){							
				$("#showModal").show();
			});		
		}
		function getData(){
			batch.auditMgr.userMgr.getDetail({id:$scope.param.id}).then(function(data){
				if(data){
					$scope.info = data;				
					if(data.wechat){
						$scope.bindWechat = true;
						$scope.wechatBtn = '解绑';
					}else{
						$scope.bindWechat = false;
						$scope.wechatBtn = '绑定';
					}
					if(data.artist.aliAccount){
						$scope.bindAplay = true;
						$scope.bindAplayBtn = '解绑';
					}else{
						$scope.bindAplay = false;
						$scope.bindAplayBtn = '绑定';
					}
				}
			});
		}
		getData();
    }]);
    
    app.controller("OpenUserDetailCtrl",['$scope','batch','showPicture',function($scope,batch,showPicture){
		$scope.name = "OpenUserDetailCtrl";
		$scope.showPicture = function(e){
			var src = e.target.src;
			showPicture.showPicture(src);
		}
		batch.withdrawAudit.openAudit.detail({
			id:$scope.param.item.id,
			userId:$scope.param.item.userId
		}).then(function(data){
			if(data){
				$scope.info = data;		
			}
		});						
    }]);
    app.controller("OpenUserAuditCtrl",['$scope','successTip','dialogshow','batch','PrivateLetter','showPicture',function($scope,successTip,dialogshow,batch,PrivateLetter,showPicture){
		$scope.name = "OpenUserAuditCtrl";	
		$scope.isActive = false;
		$scope.id = $scope.param.item.id;
		$scope.userId = $scope.param.item.userId;
		$scope.audit = function(e,val){
			$scope.isActive = true;
			$scope.status = val;
		}			
		batch.withdrawAudit.openAudit.detail({
			id:$scope.param.item.id,
			userId:$scope.param.item.userId
		}).then(function(data){
			if(data){
				$scope.info = data;
				$scope.inter = setInterval(function(){
					batch.withdrawAudit.openAudit.heartBeat({
						id:$scope.param.item.id,
						isLoading:false
					});
				},10000)
			}
		});
		var route = {
			//弹窗节点    controller挂载节点     模板id 
			RejectListCtrl:{dom: 'statusModal', content: '#audit-reject',template:'rejectList.html'}
		};		
		$scope.show=function(type,param){
			dialogshow.show(type,$scope,route);
		}
		$scope.showPicture = function(e){
			var src = e.target.src;
			showPicture.showPicture(src);
		}
		$scope.action = function(type){
			if(type=='close'){
				$("#showModal").modal('hide');	
			}
		}
		$scope.showReason=function(member ){				
			var type ='';
			switch($scope.status){				
				case -1:
					type = 'RejectListCtrl';
					break
				case -2:
					type = 'RejectListCtrl';
					break		
			}
			if(type=='RejectListCtrl'){
				$("#showModal").hide();
				dialogshow.show(type,$scope,route);					
				$("#statusModal").modal('show');
			}else{
				$scope.privateLetter();
			}
		}
		$scope.privateLetter = function(){
			$("#showModal").hide();				
			PrivateLetter({
				title:"私信通知",
				content:"恭喜！您已成功开通单曲赞赏权限。您可以进入云音乐“网页版－赞赏管理”页面选择要开通赞赏的作品。用户赞赏金额扣除服务手续费后，将全部进入您的个人账户。您可以进入iPhone或Android手机客户端“帐号－赞赏收入”页面查询收入详情并提现。如有疑问，请私信@原创君。",
				actionButton:'确定',
				width:"426px",
				tempAddress:"privateLetter.html",
				readonly:false,
				actionButton:"确定并发送"
			}).done(function(action,data){
				var param ={};				
				if(data){
					param.msgContent = data.content;
					param.type = 1;
					param.id = $scope.param.item.id,
					param.userId = $scope.param.item.userId
				}
				auditAction(param,function(data){
					if(data&&data.code==200){
						window.clearInterval($scope.inter);
						$("#showModal").modal('hide');
						$scope.$emit("changeItem");
						successTip('success');
					}else{
						$("#showModal").show();
					}						
				});			
			}).fail(function(){
				$("#showModal").show();
			});
	  }
		function auditAction(param,cbsuccess,cbfail){
		  	batch.withdrawAudit.openAudit.audit(param).then(
				cbsuccess,cbfail
			)	
		}
		$scope.auditAction = auditAction;		  
    }]);    
    app.controller("RejectListCtrl",['$scope' ,'$location','dialog','successTip','batch' ,function($scope ,
    	$location,dialog,successTip,batch ){
        $scope.name="RejectListCtrl";
        $scope.isActive = false;
        $scope.$on('select',function(e,data){
        	$scope.content =data.content.text;
        	if(data.content.id==0||data.content.id==6){
        		$scope.isActive = false;        		
        	}else{
        		$scope.isActive = true;       	
        	}
        	$scope.contentId = data.content.id;
        	$scope.rejectTitle = data.content.tip.split(".")[1];
        })
        $scope.validContent = function(event){
        	if(event.target.value&&$.trim(event.target.value)!=''){
        		$scope.isActive = true;
        	}else{
        		$scope.isActive = false;        	
        	}
        }
        $scope.selectlist =[
        	{id:0,tip:'未选择',text:''},
            {id:1,tip:'1.非本人作品',text:'您好，由于您上传的作品为非本人作品，故不予开通赞赏功能。请及时下线非本人作品，上传原创作品后重新提交申请。感谢您一直以来对云音乐的支持！如有疑问，请私信@原创君。'},
            {id:2,tip:'2.翻唱',text:'您好，由于您上传的作品均为翻唱作品，故不予开通赞赏功能。请上传原创作品后重新提交申请。感谢您一直以来对云音乐的支持！如有疑问，请私信@原创君。'},
            {id:3,tip:'3.作品质量不够',text:'您好，由于您上传的作品质量未达到标准，故不予开通赞赏功能。请完善您的作品质量后，重新提交申请。感谢您一直以来对云音乐的支持！如有疑问，请私信@原创君。'},
            {id:4,tip:'4.专辑封面、专辑名称、歌曲名、歌词涉嫌违规',text:'您好，由于您上传的《XXX》专辑封面/专辑名称/歌曲名/歌词涉嫌违规，故不予开通赞赏功能。请修改相应内容后重新提交申请。感谢您一直以来对云音乐的支持！如有疑问，请私信@原创君。'},
            {id:5,tip:'5.工作室社团申请',text:'您好，赞赏功能暂不接受工作室/社团申请，请由音乐人本人注册帐号并申请。感谢您一直以来对云音乐的支持！如有疑问，请私信@原创君。'},
            {id:6,tip:'6.手动填写',text:''}           
        ];       
        $scope.submit = function(type){
        	if(type=='action'){
        		if($scope.contentId == 6){
	        		$scope.rejectTitle = $scope.content;
	        	}
        		var param ={
        			id:$scope.param.id,
        			msgContent : $scope.content,
        			type : $scope.param.status,
        			userId :$scope.param.userId,
        			rejectReason:$scope.rejectTitle
        		};        		        	
        		batch.withdrawAudit.openAudit.audit(param).then(function(data){
        			if(data){
        				window.clearInterval($scope.param.inter);
        				$("#showModal").modal('hide');
        				$("#statusModal").modal('hide');
						$scope.$emit("changeItem");
						successTip('success');
					}
        		},function(){
        			alert("失败");
        		});
        	}
        	if(type=='close'){
        		$("#statusModal").modal('hide');
        		$("#showModal").show();
        	}        	        	
        }
    }])
    app.controller("UserEditCtrl",['$scope','successTip','batch','tipDialog','Upload','$timeout','showPicture',function($scope,successTip,batch,tipDialog,Upload,$timeout,showPicture){
		$scope.name = "UserEditCtrl";
		var arr = ['id','aliRealName','realName','aliAccount','phoneNumber','wechatRealName','wechatAccount',
 					'mail','idCard','idTopPicId','idDownPicId','county','idTopPicUrl','idDownPicUrl','phonePre'];
		$scope.info ={};
		_.each($scope.param.artist,function(val , key ,array){
				if( _.indexOf(arr,key)>=0){
					$scope.info[key] = array[key];
				};
			}
		);		
		$scope.countryid = $scope.info.phonePre;
		$scope.country = $scope.info.county;
		$scope.info.wechatAccount = $scope.param.wechat?$scope.param.wechat.openId:'--';		
		$scope.onbeforeclose = function(){
			$("#showModal").show();
		}
		$scope.$on('selectNationalityCountry',function(e , param){
			 $scope.info.county = $scope.country = param.countryInfo.country;
		})
		$scope.$on('selectNationalityIphone',function(e , param){
			$scope.info.phonePre = $scope.countryId = param.countryInfo.id;
		})
		$scope.action = function(type){
			if(type=='close'){
				$('#editModal').modal('hide');
				setTimeout(function(){
					$("#showModal").modal('hide');
				},100)
			}else{
				if($scope.valid.length != 0){
					return ;
				}				
 				var r=confirm("确定修改？");
 				if(r == false) return;
				var param =_.pick($scope.info,
 					'id','realName','phoneNumber','mail','idCard','idTopPicId','idDownPicId','county','wechatRealName',
 					'aliRealName','aliAccount','phonePre'
 				);
 				var valid = true,valikey ='';
 				_.each(param,function(val,key,arr){
 					if(key=='wechatRealName'||key=='aliRealName'||key=='aliAccount'){
 						return;
 					}
 					if(!val||$.trim(key)==''){
 						validkey =key;
 						valid = false;
 					}
 				}) 				
 				if(valid ==false){
 					alert(validkey+'必填!');
 					return;
 				} 				
 				batch.auditMgr.userMgr.editAction(param).then(function(data){
					if(data&&data.code ==200){
						$('#editModal').modal('hide');
						setTimeout(function(){
							$("#showModal").modal('hide');
						},100)						
						successTip('success');
						$scope.$emit('changeItem');												
					}else{
						if(data.message){
                    		tipDialog({
								title:"提示",
								content:(data.message?data.message:''),
								width:"526px"
							});
						}
					}	
				});
			}
		}		
		$scope.usingFlash = FileAPI && FileAPI.upload != null;
		$scope.uploadPic = function (file,name) {
		    $scope.formUpload = true;
		    if(file != null) {
		        $scope.upload(file,null,name);
		    }
		};
		$scope.upload = function (file, resumable,name) {
		      $scope.errorMsg = null;		    
		      uploadUsingUpload(file, resumable,name);		      
	    };
		$scope.file1 =0;
		$scope.file2 =0;
		$scope.chunkSize = 100000;
		$scope.showPicture = function(e){
			var src = e.target.src;
			showPicture.showPicture(src);
		}
		function uploadUsingUpload(file, resumable,name) {
		  	$scope[name] =0;		  	
		    file.upload = Upload.upload({
		      url: '/upload/img',
		      headers: {
		        'optional-header': 'header-value'
		      },
		      file:file
		    });
		    file.upload.then(function (response) {
		  
		      	if(response.data&&response.data.code ==200){
		      		if(name=='file1') {
		      			$scope.idTopPicUrl = response.data.url;
		      			$scope.info.idTopPicId = response.data.id;
		      		}
		      		if(name=='file2') {
		      			$scope.idDownPicUrl =response.data.url;
		      			$scope.info.idDownPicId = response.data.id;
		      		}
		      	}else{
		      		alert("上传失败!");
		      	}
		      	//$scope.$apply();  		        
		      ;		      
		    }, function (response) {
		      if (response.status > 0)
		        $scope.errorMsg = response.status + ': ' + response.data;
		        alert("上传失败！")
		    }, function (evt) {
		      // Math.min is to fix IE which reports 200% sometimes
		        $scope[name] = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
		    });		
		}	 			  
    }]);       
    app.controller("AdmireTypeSettingCtrl",['$scope','successTip','batch','tipDialog',function($scope,successTip,batch  ,tipDialog){
		$scope.name = "AdmireTypeSettingCtrl";
		$scope.workflow = 'choose';
		$scope.isActive = false;
		$scope.resolve = false;
		$scope.resolveblack = false; 
		$scope.forbid;
		$scope.onbeforeclose = function(){
			//$("#showModal").show();
		} 
		$scope.changeType = function(e ,name ,type){
			$scope.isActive = false;
			$scope.resolveblack = false;
			$scope.resolve = false;
			$scope.resultType = type;
		}
		$scope.resolveAction = function(e,type){ 
			if(!$scope.resultType){
				return;
			}
			$scope.type = type;
			if(type =='resolve'){
				$scope.resolve = true;
				$scope.resolveblack = false;
				$scope.forbid = false;
				$scope.content ="很抱歉，您的单曲赞赏权限已被管理员收回。即日起，您的单曲作品不再接受用户赞赏。您仍可进入手机客户端“帐号－赞赏收入”页面查询历史收入并对余额进行提现。如需重新开通权限，您需要再次申请。感谢您一直以来对云音乐的支持！如有疑问，请私信@原创君。";
			}
			if(type =='resolveblack'){
				$scope.resolveblack = true;
				$scope.resolve = false;
				$scope.forbid = true;
				$scope.content = "很抱歉，您的单曲赞赏权限已被管理员收回。即日起，您的单曲作品不再接受用户赞赏。您仍可进入手机客户端“帐号－赞赏收入”页面查询历史收入并对余额进行提现。如需重新开通权限，您需要再次申请。感谢您一直以来对云音乐的支持！如有疑问，请私信@原创君。";
			}
			$scope.isActive = true;
		}		
		$scope.next = function(){
			$scope.workflow = "audit"; 			
		} 						
		$scope.action = function(type){
			if(type=='close'){
				if($scope.workflow=='audit'){
					$scope.workflow ="choose";						
					return;
				}
				$('#showModal').modal('hide'); 				
			}else{
 				var r=confirm("确定修改？");
 				if(r == false) return;
				var param ={
					 id:$scope.param.id,
					 type:$scope.resultType,
					 forbid : $scope.forbid,
					 msgContent : $scope.content
				};
 				batch.auditMgr.userMgr.updateAdmireType(param).then(function(data){
					if(data&&data.code ==200){
						successTip('success');
						$scope.$emit('changeItem');
						$('#showModal').modal('hide');
					}
				});
			}
		}				 			
    }]);  
    app.controller("DivideSettingCtrl",['$scope','successTip','batch','auditUtil','tipDialog','Upload','$timeout',function($scope,successTip,batch  ,auditUtil,tipDialog,Upload,$timeout){
		$scope.name = "DivideSettingCtrl";
		try{
			$scope.rate =  $scope.param.new_gainSharing!=0?$scope.param.new_gainSharing.slice(0,-1):0;
		}catch(e){
			$scope.rate = 0;
		}
		$scope.isActive = false;
		$scope.content = getContent();
		$scope.$watch('rate',function(newVal ,oldVal){
			if(newVal ==''||newVal==undefined){
				$scope.isActive = false;
				return;
			}
			if(newVal<0||newVal>100){
				$scope.isActive = false;
				return;
			}
			$scope.isActive = true;
			$scope.content = getContent();
		})		
		$scope.action = function(){			
			return batch.auditMgr.divideMgr.divideSetting({
				id:$scope.param.id,
				gainSharing:($scope.rate+'').length ==1?('0.0'+$scope.rate):('0.'+$scope.rate),
				type:$scope.param.searchtype,
				msgContent:getContent()
			}).then(function(data){
				if(data){
					$("#showModal").modal("hide");
					successTip('success');
					$scope.$emit("changeItem");
				}
			});
		}		
		function getContent(){
			return "您好，即日起云音乐单曲赞赏服务手续费调整为用户赞赏金额的"+$scope.rate+"%。感谢您一直以来对云音乐的支持！如有疑问请私信@原创君";
		}
    }]);   
    app.controller("ProductionMgrCtrl",['$scope','$location','dialog','successTip','batch'  ,'auditUtil','tipDialog','PrivateLetter','dialogshow',function($scope,
    	$location,dialog,successTip,batch  ,auditUtil,tipDialog,PrivateLetter,dialogshow){
		$scope.name = "ProductionMgrCtrl";
		$scope.tabName = 'singleSong';
		$scope.isActive = false;
		$scope.type = 1;
		$scope.status = 2;
		$scope.workflow  ="songSingle_detail";
		$scope.resulttype = 0;
		$scope.pageSetting={
				total:0,
				offset:0,
				limit:20			
			};	
 		$scope.changeTab = function(e){
 			var name = e.target.getAttribute('name');
 			var type = e.target.getAttribute('data-type');
 			if(name)$scope.tabName  = name;
 			if(type)$scope.type  = type;
 		}
 		$scope.changeStatus = function(e ,val){
 			$scope.status = val;
 			$scope.pageSetting.offset = 0;
 			batchList(getParam());
 		}	
 		$scope.$on('pageChange', function(e,param){
			$scope.pageSetting.offset =param.pageInfo.offset;
			batchList(getParam())
		});		
		$scope.$on('changeItem',function(e,data){
			if(data){
				$scope.key=data.search;
				$scope.pageSetting.offset = 0;
			}
			batchList(getParam());
		});		
        function getParam(){        	
        	 var param  ={
        	 	userId:$location.$$search.userId,
        	 	type:$scope.type,
        	 	status:$scope.status,
        		limit:20,
        		offset:$scope.pageSetting.offset
        	}       	
        	return param;
        };
        batchList(getParam());
		function batchList(param){
			$scope.$broadcast('batch');
			return batch.auditMgr.userMgr.getProductionList(param).then(function(data){
				if(data){
					if(data.songs.length>=0){
						$scope.items = data.songs;							
					}			
					$scope.pageSetting.total=data.count;
				}
			});
		}		
		var route = {
			CloseAdmireCtrl:{dom: 'showModal', content: '#audit-reject',template:'rejectList.html'}
		};			
		$scope.privateLetter = function(param){				
			PrivateLetter({
				title:"私信通知",
				content:param.content,
				actionButton:'确定并发送',
				width:"426px",
				required:false,
				tempAddress:"privateLetter.html",
				readonly:true,
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
	  $scope.auditAction = auditAction;		
	  $scope.songSingleAction = function(item,type){
	  	  var param ={
	  		  songId:item.songId,
	  		  songName:item.songName
	  	  };		  			  	
		  switch (type){
			  case 'closeSingle':	
				  param.audit = -1;
				  dialogshow.show('CloseAdmireCtrl',param,route);					
				  $("#showModal").modal('show')
				  break
			  case 'openAdmire':
				  param.audit = 1;
				  param.content = "您的单曲《"+item.songName+"》已由管理员操作开通赞赏功能。即日起用户可以赞赏该单曲，赞赏收入扣除提现服务手续费后将全部进入您的个人账户。感谢您对网易云音乐的支持！";
				  $scope.privateLetter(param);				
				  break
			  case 'removeBlack':
				  param.audit = -2;
				  param.content = "您的单曲《"+item.songName+"》赞赏权限已被管理员解除锁定。即日起您可以进入“网易云音乐网页版－赞赏管理入口”操作，开通该单曲的赞赏功能。感谢您对网易云音乐的支持！";
				  $scope.privateLetter(param);	
				  break				
		  }		  	
	  }	
    }]);
    app.controller("CloseAdmireCtrl",['$scope','$location','dialog','successTip','batch' ,function($scope,$location,dialog,successTip,batch){
        $scope.name="CloseAdmireCtrl";
        $scope.selectlist =[
        	{id:0,tip:'未选择',text:''},
            {id:1,tip:'1.非本人作品',text:'您的单曲《'+$scope.param.songName+'》赞赏权限已被管理员锁定，即日起暂不接受该单曲开通赞赏。锁定原因：该单曲为非本人作品。请及时下线，感谢您对网易云音乐的支持！'},
            {id:2,tip:'2.作品质量不够',text:'您的单曲《'+$scope.param.songName+'》赞赏权限已被管理员锁定，即日起暂不接受该单曲开通赞赏。锁定原因：该作品质量未达到标准。请完善您的作品质量后私信@原创君申请恢复，感谢您对网易云音乐的支持！'},
            {id:3,tip:'3.翻唱/翻弹',text:'您的单曲《'+$scope.param.songName+'》赞赏权限已被管理员锁定，即日起暂不接受该单曲开通赞赏。锁定原因：该作品为翻唱/翻弹作品。涉及版权问题无法开通赞赏功能，感谢您对网易云音乐的支持！'},
            {id:4,tip:'4.专辑封面、专辑名称、歌曲名、歌词涉嫌违规',text:'您的单曲《'+$scope.param.songName+'》赞赏权限已被管理员锁定，即日起暂不接受该单曲开通赞赏。锁定原因：该作品涉嫌违规。请修改相应内容后私信@原创君申请恢复，感谢您对网易云音乐的支持！'},
            {id:5,tip:'5.手动填写',text:''}          
        ];      
        $scope.$on('select',function(e,data){
        	$scope.content =data.content.text;
        	if(data.content.id==0||data.content.id==5){
        		$scope.isActive = false;        		
        	}else{
        		$scope.isActive = true;       	
        	}
        	$scope.contentId = data.content.id;
        	//$scope.rejectTitle = data.content.tip.split(".")[1];
        })
        $scope.validContent = function(event){
        	if(event.target.value&&$.trim(event.target.value)!=''){
        		$scope.isActive = true;
        	}else{
        		$scope.isActive = false;        	
        	}
        }
        $scope.submit = function(type){
        	if(type=='action'){
        		var params ={
					songId:$scope.param.songId,
					userId:$location.$$search.userId,
					audit:$scope.param.audit,
					msgContent : $scope.content
				};										
        		batch.auditMgr.userMgr.openSingleSong(params).then(function(data){
        			if(data){
        				$("#showModal").modal('hide');
						$scope.$emit("changeItem");
						successTip('success');
					}
        		});
        	}
        	if(type=='close'){
        		$("#showModal").modal('hide');
        	}        	        	
        }
    }]);
    app.controller("BatchAuditCtrl",['$scope','$location','dialog','successTip','batch','auditUtil',function($scope,$location,dialog,successTip,batch   ,auditUtil){
		$scope.name = "BatchAuditCtrl";	
		$scope.members = $scope.param.arr;
		$scope.length = $scope.members.length;
		$scope.total = 0;
		$scope.remainTotal = 0;
		_.each($scope.members,function(val ,key ,arr){
			$scope.total +=val.record.amount;
			$scope.remainTotal += val.remainMoney;
		})
		$scope.total = $scope.total.toFixed(2)*1;
		window.hhq  =successTip;
		$scope.action = function(){ 				
			batch.withdrawMgr.withdrawAudit.batchAction({
 				audit:'transfer',
 				details : auditUtil.getDetail($scope,$scope.param.parent.payType ),
 				reason:"xx"
 			}).then(function(data){
				if(data&&data.code ==200){
					$scope.$emit('changeItem');
					$("#batchModal").modal('hide');		
					successTip('success');
				}
			});
		}			
    }]);
    app.controller("BatchRejectCtrl",['$scope' ,'$location','dialog','successTip','batch','dialogshow','auditUtil',function($scope,$location,dialog,successTip,batch   ,dialogshow,auditUtil){
		$scope.name = "BatchRejectCtrl";
		$scope.members = $scope.param.arr;
		$scope.length = $scope.members.length;
		$scope.total = 0;
		$scope.remainTotal = 0;
		_.each($scope.members,function(val ,key ,arr){ 				
			$scope.total +=val.record.amount;
			$scope.remainTotal += val.remainMoney;
		})
		$scope.total = $scope.total.toFixed(2)*1; 			
		var route = {ConfirmRejeCtrl:{dom: 'testModal', content: '#rejectTransfer-content',template:'rejectTransfer.ftl'}}
		$scope.rejectAction = function(type){
			dialogshow.show(type,{callback:post},route);
			$("#testModal").modal('show');
		}
		function post(content){
 				batch.withdrawMgr.withdrawAudit.batchAction({
	 				audit:'reject',
	 				details : auditUtil.getDetail($scope,$scope.param.parent.payType ),
	 				reason:content
	 			}).then(function(data){
					if(data&&data.code ==200){
						$scope.$emit('changeItem');
						$("#testModal").modal('hide');
						$("#batchModal").modal('hide');		
						successTip('success');
					}
				});
 			}
    }]);
    app.controller("ConfirmRejeCtrl",['$scope','$location','dialog','successTip','batch','dialogUtil',function($scope,$location,dialog,successTip,batch   ,dialogUtil){
		$scope.name = "ConfirmRejeCtrl";
		$scope.isActive = false;
		$scope.contentchange = function(){
		 	 dialogUtil.contentchange($scope);
		}	
		$scope.action = function(){
 				$scope.param.callback($scope.content);
 			}
    }]);
    app.controller("transferCtrl",['$scope','$location','dialog','successTip','batch',function($scope,$location,dialog,successTip,batch){
    	$scope.name = "transferCtrl";
    	$scope.targetAcctNo = $scope.param.record.targetAcctNo;
    	$scope.amount = $scope.param.record.amount;        	            	 
    	function action(param){
    	    var param ={
    	 		userId :$scope.param.record.userId,
    	 		id: $scope.param.record.id,
    	 		amount: $scope.param.record.amount,
    	 		payMethod:$scope.parentScope.payType
    	 	}
    	 	console.log(param);
			return batch.withdrawMgr.withdrawAudit.transfer(param).then(function(data){
				if(data){
					$scope.$emit('changeItem');
					successTip('success');
					$("#testModal").modal('hide');
				}
			});
		}
		$scope.action = action; 	 
    }]);
    app.controller("rejectTransferCtrl",['$scope' ,'$location','dialog','successTip','batch'   ,'dialogUtil',function($scope,$location,dialog,successTip,batch   ,dialogUtil){
		$scope.name = "rejectTransferCtrl";
		$scope.isActive =false;
		function action(param){
    	 	var param ={
    	 		userId :$scope.param.record.userId,
    	 		id: $scope.param.record.id,
    	 		amount: $scope.param.record.amount,
    	 		payMethod:$scope.parentScope.payType,
    	 		reason:$scope.content
    	 	}
    	 	console.log(param);
			return batch.withdrawMgr.withdrawAudit.rejectTransfer(param).then(function(data){
				if(data){
					$scope.$emit('changeItem');
					successTip('success');
					$("#testModal").modal('hide');
				}
			});
		 }			 
		$scope.contentchange = function(){
		 	dialogUtil.contentchange($scope);
		}			 
		$scope.action = action; 			
    }]);
    app.controller("AuditRejectCtrl",['$scope' ,'$location','dialog','successTip','batch',function($scope,$location,dialog,successTip,batch){
		$scope.name = "AuditRejectCtrl";	
		batch.withdrawMgr.withdrawAudit.getLog({
 				id:$scope.param.item.record.id,
 				userId : $scope.param.item.record.userId
 			}).then(function(data){
				if(data&&data.code ==200){
					$scope.reason = data.data.reason;
					$scope.title = "提现";
				}
			});
    }]);    
    app.controller("OpenAuditRejectCtrl",['$scope' ,'$location','dialog','successTip','batch',function($scope,$location,dialog,successTip,batch){
		$scope.name = "OpenAuditRejectCtrl";
		$scope.reason = $scope.param.item.rejectReason||"默认 后台测试没填理由";
		$scope.title = "审核";
    }]);
    app.controller("AuditingCtrl",['$scope','$location','dialog','successTip','batch',function($scope,$location,dialog,successTip,batch){
		$scope.name = "AuditingCtrl";
		batch.withdrawMgr.withdrawAudit.getLog({
 				id:$scope.param.item.record.id,
 				userId : $scope.param.item.record.userId
 			}).then(function(data){
				if(data&&data.code ==200){
					$scope.info = data.data;
				}
			});
    }]);
    app.controller("AuditedCtrl",['$scope','$location','dialog','successTip','batch',function($scope,$location,dialog,successTip,batch){
		$scope.name = "AuditedCtrl";
		batch.withdrawMgr.withdrawAudit.getLog({
 				id:$scope.param.item.record.id,
 				userId : $scope.param.item.record.userId
 			}).then(function(data){
				if(data&&data.code ==200){
					$scope.info = data.data;
				}
			});
    }]);
    app.controller("AuditFailCtrl",['$scope','$location','dialog','successTip','batch',function($scope,$location,dialog,successTip,batch){
		$scope.name = "AuditFailCtrl";
		batch.withdrawMgr.withdrawAudit.getLog({
 				id:$scope.param.item.record.id,
 				userId : $scope.param.item.record.userId
 			}).then(function(data){
				if(data&&data.code ==200){
					$scope.info = data.data;
				}
			});
    }]);
})(window.angular)