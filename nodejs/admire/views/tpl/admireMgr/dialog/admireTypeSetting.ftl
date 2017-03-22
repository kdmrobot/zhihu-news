<script type="text/ng-template" id="admireTypeSetting.ftl">
	<style>
		#admireType-setting .admireType-label{
		 	text-align: center;
   		 	border-bottom: 1px solid #968c8c;
   		 	font-weight: bold;
		}
		.admireType-label h4{
			font-weight: bold;
		}
		
		.admireType-flx-center{
		    justify-content: center;
    		display: flex;
    		margin:20px 0px;
		}
		.admireType-flx-center .btn-primary{
			 background-color: #2d2b2f;
   			 border-color: #2d2b2f;
   			 color:white;
		}
	</style>	
	<div id="admireType-setting" ng-cloak>
		<div class="modal-header">
			<button type="button" class="close"  ng-click="action('close')" aria-hidden="true">&times;</button>
			<h4 class="modal-title" id="errorModalLabel">实名信息编辑</h4>
		</div>
		<div class="modal-body clearfix"  style="padding:1px;overflow:hidden">
			<div ng-if="workflow =='choose'" >
				<div class="admireType-label">
					<h4>用户开通赞赏类型</h4>
				</div>			
				<div class="admireType-flx-center"  style="width: 104%;">
					<input ng-if="param.songReward==1"   type="radio"  ng-click="changeType($event,'resultType','1')" ng-model="$parent.resultType" value="1" >
					<span  ng-if="param.songReward==1"  class="mr25">单曲</span>	
					<input ng-if="param.djReward==1"   type="radio"  ng-click="changeType($event,'resultType','2')" ng-model="$parent.resultType" value="2" >
					<span ng-if="param.djReward==1"  class="mr25">电台节目</span>	
					<input ng-if="param.topicReward==1"  type="radio"  ng-click="changeType($event,'resultType','3')" ng-model="$parent.resultType" value="3" >
					<span ng-if="param.topicReward==1" class="mr25">专栏文章</span>					
				</div>
				<div class="admireType-flx-center" style="width: 99%;">
					<button type="button" class="btn btn-default"  ng-class="{true: 'btn btn-primary', false: 'btn btn-default'}[resolve]"     style="margin-right: 29px;"  ng-click="resolveAction($event,'resolve')">收回权限</button>
					<button type="button" class="btn btn-default"  ng-class="{true: 'btn btn-primary', false: 'btn btn-default'}[resolveblack]"    ng-click="resolveAction($event,'resolveblack')">收回权限并拉黑</button>
				</div>
			</div>
			<div ng-if="workflow == 'audit'"    class="modal-body">
			  <h4 style="font-weight: bold;">私信编辑</h4>
			  <textarea  id="dialogcontent" style="height: 139px;width: 100%;"   ng-keyup="contentchange(123)" ng-model="$parent.content"></textarea>
			</div>	
						
		</div>
		
		<div class="modal-footer">
			<button  ng-if="workflow =='choose'" type="button" class="btn btn-primary"  ng-class="{true: 'active', false: 'disabled'}[isActive]"      ng-click="next('action')"  >下一步</button>
			<button  ng-if="workflow == 'audit'&&type=='resolve'" type="button" class="btn btn-primary"      ng-click="action('resolve')"  >确定收回权限</button>
			<button  ng-if="workflow == 'audit'&&type=='resolveblack'" type="button" class="btn btn-primary"      ng-click="action('resolveblack')"  >确定收回并拉黑</button>
			<button type="button" class="btn btn-default"     ng-click="action('close')">取消</button>
		</div>
	</div>
</script >