<script type="text/ng-template" id="openUserDetail.ftl">
	<style>
		#userinfo-detail>.modal-body h4{
			font-weight: bold;
			margin-top: 30px;
		}
		#userinfo-detail>.modal-body .info-mr{
			margin-right:140px;
		}
		#userinfo-detail>.modal-body .item-container{
			width:540px;
			color: #222;
		    font-size: 12px;
		    margin-bottom: 14px;
		}

		#userinfo-detail  .item-container-left{
			width:300px;
			word-break: break-all;
		}
		#userinfo-detail .item-container-right{
			width:240px;
			word-break: break-all;
		}
	</style>	
	<div id="userinfo-detail">
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
			<h4 class="modal-title" id="errorModalLabel">信息查看</h4>
		</div>
		<div class="modal-body"  >
		    <div ng-if="param.searchtype ==1">
			    <h4>音乐人信息</h4>
				   <div class="item-container clearfix">
					  <div class="item-container-left fl">
						<span class=" ">
							入驻时间：&nbsp;&nbsp;&nbsp;{{info.data.enterTime|date : 'yyyy-MM-dd HH:mm:ss'}}
						</span>
					</div>
					<div class="item-container-right fl">
						<span class=" ">
							流派风格：&nbsp;&nbsp;&nbsp;{{info.data.genre}}
						</span>
					</div>				
				</div>
				<div class="item-container clearfix">
					<div class="item-container-left fl">
						<span class=" ">
							专辑数量：&nbsp;&nbsp;&nbsp;{{info.data.productionNumber}}
						</span>
					</div>
					<div class="item-container-right fl">
						<span class=" ">
							音乐人指数：&nbsp;&nbsp;&nbsp;{{info.data.musicianRate}}
						</span>
					</div>				
				</div>
		    </div>
			<div ng-if="param.searchtype ==2">
			   <h4>电台信息</h4>
				 <div class="item-container clearfix">
					<div class="item-container-left fl">
						<span class=" ">
							电台数量：&nbsp;&nbsp;&nbsp;{{info.data.enterTime|date : 'yyyy-MM-dd HH:mm:ss'}}
						</span>
					</div>							
				</div>
				<div class="item-container clearfix">
					<div class="item-container-left fl">
						<span class=" ">
							电台订阅总数：&nbsp;&nbsp;&nbsp;{{info.data.productionNumber}}
						</span>
					</div>			
				</div>
		   </div>
			
			
		   <h4 >实名信息</h4>
			<div class="item-container clearfix">
				<div class="item-container-left fl">
					<span class=" ">
						真实姓名：&nbsp;&nbsp;&nbsp;{{info.data.realName}}
					</span>
				</div>
				<div class="item-container-right fl">
					<span class=" ">
						国籍：&nbsp;&nbsp;&nbsp;{{info.data.county}}
					</span>
				</div>					
			</div>
			<div class="item-container clearfix">
				<div class="item-container-left fl">
					<span class=" ">
						证件号：&nbsp;&nbsp;&nbsp;{{info.data.idCard}}
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
					<img ng-click="showPicture($event)"  src="{{info.data.idTopPicUrl}}" style="width:220px;height:120px;">
					<img ng-click="showPicture($event)"  src="{{info.data.idDownPicUrl}}" style="width:220px;height:120px;margin-left:20px;">
				</div>									
			</div>
			
			<h4>联系方式</h4>
			<div class="item-container clearfix">
				<div class="item-container-left fl">
					<span class="">
						邮箱：&nbsp;&nbsp;&nbsp;{{info.data.mail}}
					</span>
				</div>	
				<div class="item-container-right fl">
					<span class="">
						手机号：&nbsp;&nbsp;&nbsp;{{info.data.phoneNumber}}
					</span>
				</div>	
			</div>
			
			<h4>提现账户信息</h4>
			<div class="item-container clearfix">
				<div class="item-container-left fl">
					<span class="">
						支付宝：&nbsp;&nbsp;&nbsp;{{info.data.aliAccount||'--'}}
					</span>
				</div>	
				<div class="item-container-right fl">	
					<span>
						支付宝账号实名：&nbsp;&nbsp;&nbsp;{{info.data.aliRealName||'--'}}
					</span>
				</div>
			</div>
			<div class="item-container clearfix">
				<div class="item-container-left fl">
					<span class="">
						微信  open id ：&nbsp;&nbsp;&nbsp;{{info.data.wechatAccount||'--'}}
					</span>
				</div>		
				<div class="item-container-right fl">		
					<span>
						微信账号实名：&nbsp;&nbsp;&nbsp;{{info.data.wechatRealName||'--'}}
					</span>
				</div>	
			</div>	
			
		</div>			
	</div>
</script >