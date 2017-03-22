<script type="text/ng-template" id="userDetail.ftl">
	<style>
		#userinfo-detail>.modal-body{
			 width: 640px;
   			 margin: 1px auto;
		}
		#userinfo-detail>.modal-body h4{
			font-weight: bold;
			margin-top: 30px;
		}
		#userinfo-detail>.modal-body .item-container  input{
			width: 180px;
			float: right;
		}
		#userinfo-detail>.modal-body .info-mr{
			margin-right:140px;
		}
		#userinfo-detail>.modal-body .item-container{
			width:640px;
			color: #222;
		    font-size: 12px;
		    margin-bottom: 14px;
		}

		#userinfo-detail  .item-container-left{
			width:262px;
			margin-right:20px;
			word-break: break-all;
		}
		#userinfo-detail .item-container-right{
			width:280px;
			word-break: break-all;
		}
	</style>	
	<div id="userinfo-detail">
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
			<h4 class="modal-title" id="errorModalLabel">实名信息查看</h4>
		</div>
		<div class="modal-body" ng-cloak >
			<h4 >实名信息</h4>
			<div class="item-container clearfix">
				<div class="item-container-left fl">
					<span class=" ">
						真实姓名：&nbsp;&nbsp;&nbsp;{{info.artist.realName}}
					</span>
				</div>
						
				<div class="item-container-right fl">
					<span class=" ">
						国籍：&nbsp;&nbsp;&nbsp;{{info.artist.county}}
					</span>
				</div>				
			</div>
			
			
			<div class="item-container clearfix">
				<div class="item-container-left fl">
					<span class=" ">
						证件号：&nbsp;&nbsp;&nbsp;{{info.artist.idCard}}
					</span>
				</div>							
			</div>
			
			<div class="item-container clearfix">
					<div  class="fl" style="height:120px;width:62px;">		
						<span class=" ">
						证件图片：
						</span>
					</div>
					<div class="fl" style="overflow:hidden;width:475px;">
						<img ng-click="showPicture(info.artist.idTopPicUrl)" src="{{info.artist.idTopPicUrl}}" style="width:220px;height:120px;">	
						<img ng-click="showPicture(info.artist.idDownPicUrl)" src="{{info.artist.idDownPicUrl}}" style="width:220px;height:120px;margin-left:20px;">						
					</div>									
			</div>
			
			
			
			<h4>联系方式</h4>
			<div class="item-container clearfix">
				<div class="item-container-left fl">
					<span class="">
						邮箱：&nbsp;&nbsp;&nbsp;{{info.artist.mail}}
					</span>
				</div>	
				<div class="item-container-right fl">
					<span class="">
						手机号：+{{info.artist.phonePre}}&nbsp;&nbsp;&nbsp;{{info.artist.phoneNumber}}
					</span>
				</div>	
			</div>
			
			<!-- <h4>提现账户信息</h4>
			<div class="item-container clearfix">
				<div class="item-container-left fl">
					<span class="">
						支付宝：&nbsp;&nbsp;&nbsp;{{info.artist.aliAccount||'--'}}
					</span>
				</div>	
				<div class="item-container-right fl">	
					<span>
						支付宝账号实名：&nbsp;&nbsp;&nbsp;{{info.artist.aliRealName||'--'}}
					</span>
				</div>
			</div>
			<div class="item-container clearfix">
				<div class="item-container-left fl">
					<span class="">
						微信 open id ： &nbsp;&nbsp;&nbsp;<span>{{info.wechat.openId||'--'}}</span>
					</span>
				</div>		
				<div class="item-container-right fl">		
					<span>
						微信账号实名：&nbsp;&nbsp;&nbsp;{{info.artist.wechatRealName||'--'}}
					</span>
				</div>	
			</div>	-->
			
		</div>
		
		<div class="modal-footer">
			<button type="button" class="btn btn-primary"      ng-click="show('UserEditCtrl',info)"  >编辑</button>
			<button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
		</div>
	</div>
</script >