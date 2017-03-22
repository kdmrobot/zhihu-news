<script type="text/ng-template" id="userEdit.ftl">
	<style>
		#userinfo-edit>.modal-body{
			 width: 640px;
   			 margin: 1px auto;
		}
		#userinfo-edit>.modal-body h4{
			font-weight: bold;
			margin-top: 30px;
		}
		#userinfo-edit>.modal-body .item-container  input{
			width: 180px;
			float: right;
		}
		#userinfo-edit>.modal-body .info-mr{
			margin-right:140px;
		}
		#userinfo-edit>.modal-body .item-container{
			width:640px;
			color: #222;
		    font-size: 12px;
		    margin-bottom: 14px;
		}

		#userinfo-edit  .item-container-left{
			width:262px;
			margin-right:20px;
		}
		#userinfo-edit .item-container-right{
			width:280px;
		}
	</style>	
	<div id="userinfo-edit">
		<div class="modal-header">
			<button type="button" class="close" ng-click="action('close')" aria-hidden="true">&times;</button>
			<h4 class="modal-title" id="errorModalLabel">实名信息编辑</h4>
		</div>
		<div class="modal-body" ng-cloak >
			<h4 >实名信息</h4>
			<div class="item-container clearfix">
				<div class="item-container-left fl">
					<span class=" ">
						真实姓名：&nbsp;<input ng-model ="info.realName"></input>
					</span>
				</div>
				
				<div class="item-container-right fl">
					<span class=" ">
						国籍：&nbsp;
						<nationality-country country="country"> </nationality-country > 
						<!--<input ng-model ="info.county"></input>-->
					</span>
				</div>					
			</div>
			
			<div class="item-container clearfix">
				<div class="item-container-left fl">
					<span class=" ">
						证件号：&nbsp;<input ng-model ="info.idCard"></input>
					</span>
				</div>							
			</div>
			
			<div>
	  			<div class="ib" style="text-align:center;width:54%;">
	  				<div ng-if="!picFile1" >
	  			  		<img  ng-click="showPicture($event)"   class="thumb"  src="{{info.idTopPicUrl}}" style="width:200px;height:120px;">
	  			  	</div>
	  			  	<div ng-if="picFile1">
	  			  		<img  ng-click="showPicture($event)" ngf-src="picFile1" class="thumb"  src="{{info.idTopPicUrl}}" style="width:200px;height:120px;">
	  			  	</div>
	  			  	<div>
	  			  	 	<span> 正面图片</span>
	  			  	 </div>
              	</div>
               <div class="ib" style="text-align:center;width:45%;">
               		<div ng-if="!picFile2" >
	  			  		<img  ng-click="showPicture($event)"  class="thumb" src="{{info.idDownPicUrl}}"  style="width:200px;height:120px;">
	  			  	</div>
	  			  	<div ng-if="picFile2" >
	  			  		<img  ng-click="showPicture($event)"  ngf-src="picFile2" class="thumb" src="{{info.idDownPicUrl}}"  style="width:200px;height:120px;">
	  			  	</div>	
	  			  	<div>	
	  			  	 	<span> 反面图片</span>
	  			  	</div>	
              	</div>
	  		</div>	
	  				  		
           <div class="ib" style="width:45%;marin-left:4px;">
          	  <form name="myForm1">		
	                                          上传正面图片: 
	              <input class="ib" style="margin-bottom:20px;" type="file" ngf-max-size="2MB"    ngf-select ng-model="picFile1" name="file1" 
	              	ngf-accept="'image/*'"    ngf-pattern="'.jpg,.jpeg,.png,.gif'" required>
	              <button class="ib" ng-disabled="myForm1.file1.$error.required" ng-click="uploadPic(picFile1,'file1')">Submit</button>
	                <progress ng-model="file1"  value="{{file1}}" max="100"></progress>
	           </form>
           </div>
	          
           <div class="ib" style="width:45%;margin-left:4px;">
          	<form name="myForm2">			    		
	                                          上传背面图片: 
	              <input class="ib" style="margin-bottom:20px;" type="file" ngf-select ng-model="picFile2" name="file2" 
	              ngf-max-size="2MB" ngf-accept="'image/*'"    ngf-pattern="'.jpg,.jpeg,.png,.gif'" required>			             	
	              <button class="ib" ng-disabled="myForm2.file2.$error.required" ng-click="uploadPic(picFile2,'file2')">Submit</button>
	              <progress ng-model="flie2"  value="{{file2}}" max="100"></progress>
			 </form>
           </div>	
			
			
			<h4>联系方式</h4>
			<div class="item-container clearfix">
				<div class="item-container-left fl">
					<span class="">
						邮箱：&nbsp;<input valid-email   ng-model ="info.mail"></input>
					</span>
				</div>
				<div class="item-container-right fl">
					<span class="">
						 手机号：&nbsp;<input style="width:125px;" ng-model="info.phoneNumber" valid-number></input>
						<div style="float:right;"><nationality-iphone  countryid="countryid"></nationality-iphone></div>
					</span>
				</div>		
			</div>
			
			<!-- <h4>提现账户信息</h4>
			<div class="item-container clearfix">
				<div class="item-container-left fl">
					<span class="">
						支付宝：&nbsp;<input ng-model ="info.aliAccount"></input>
					</span>
					</span>
				</div>
				<div class="item-container-right fl">	
					<span>
						支付宝账号实名：&nbsp;<input ng-model ="info.aliRealName"></input>
					</span>
				</div>					
			</div>
			<div class="item-container clearfix">
				<div class="item-container-left fl">
					<span class="">
						微信 open id ：&nbsp;<span>{{info.wechatAccount}}</span>
					</span>
				</div>		
				<div class="item-container-right fl">		
					<span>
						微信账号实名：&nbsp;<input ng-model ="info.wechatRealName"></input>
					</span>
				</div>	
			</div> -->						
		</div>
		
		<div class="modal-footer">
			<button type="button" class="btn btn-primary"  ng-class="{true: 'active', false: 'disabled'}[isActive]"    ng-click="action('action')"  >保存</button>
			<button type="button" class="btn btn-default" ng-click="action('close')">取消</button>
		</div>
	</div>
</script >