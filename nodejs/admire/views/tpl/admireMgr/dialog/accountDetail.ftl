<script type="text/ng-template" id="accountDetail.ftl">
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
			<h4 class="modal-title" id="errorModalLabel">账户信息管理</h4>
		</div>
		<div class="modal-body" ng-cloak >
			<div class="item-container clearfix">
				<div class="item-container-left fl">
					<span style="font-size: 16px;">
						支付宝账号：&nbsp;&nbsp;&nbsp;<button ng-click="aplay()" class="btn btn-default yyr-default-btn-auto yyr-default-btn mr10" style="font-size: 13px;">{{bindAplayBtn}}</button>
					</span>
				</div>					
			</div>			
			<div class="item-container clearfix">
				<div class="item-container-left fl">
					<span class="">
						支付宝账号：&nbsp;&nbsp;&nbsp;{{info.artist.aliAccount||'--'}}
					</span>
				</div>					
			</div>
			<div class="item-container clearfix">
				<div class="item-container-left fl">	
					<span>
						支付宝账号实名：&nbsp;&nbsp;&nbsp;{{info.artist.aliRealName||'--'}}
					</span>
				</div>				
			</div>

			<div class="item-container clearfix">
				<div class="item-container-left fl">
					<span style="font-size: 16px;">
						微信账户 ： &nbsp;&nbsp;&nbsp;<button ng-if="bindWechat" ng-click="wechat()" class="btn btn-default yyr-default-btn-auto yyr-default-btn mr10" style="font-size: 13px;">{{wechatBtn}}</button>
					</span>
				</div>		
			</div>
			
			<div class="item-container clearfix">
				<div class="item-container-left fl">
					<span class="">
						微信 open id ： &nbsp;&nbsp;&nbsp;<span>{{info.wechat.openId||'--'}}</span>
					</span>
				</div>			
			</div>	
						
			<div class="item-container clearfix">
				<div class="item-container-left fl">
					<span class="">
						微信账号昵称： &nbsp;&nbsp;&nbsp;<span>{{info.wechat.nickName||'--'}}</span>
					</span>
				</div>			
			</div>	
			
			<div class="item-container clearfix">	
				<div class="item-container-right fl">		
					<span>
						微信账号实名：&nbsp;&nbsp;&nbsp;{{info.artist.wechatRealName||'--'}}
					</span>
				</div>	
			</div>	
			
			
				
			
		</div>	
	</div>
</script >