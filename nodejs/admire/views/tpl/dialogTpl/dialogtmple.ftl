<script type="text/ng-template" id="withdrawAudit.html">		
	<div class="modal fade ng-scope in" id="tipsModal" tabindex="-1" role="dialog" aria-labelledby="testModalLabel" aria-hidden="true" style="display: block;">
	    <div class="modal-dialog dialog-center" style="width:{{width}}px;";>
	        <div class="modal-content">
		        <div id="logoutMusician">
					<div class="modal-header .tac">
					  <button type="button" class="close" ng-click="submit('close')" aria-hidden="true">×</button>
					  <h4 class="modal-title" id="myModalLabel">{{title}}</h4>
					</div>
					<div  ng-if="!readonly"  class="modal-body">
					  <textarea  id="dialogcontent" style="height: 139px;width: 100%;" placeHolder="{{placeHolder}}"  ng-keyup="contentchange(123)"  ng-model="$parent.content"></textarea>
					</div>
					<div  ng-if="readonly"  class="modal-body"  style="height:{{height}}px;">
					 <span>{{content}}</span>
					</div>
					<div class="modal-footer">
					  <button ng-if="showActionButton"  type="button" class="btn btn-primary"  ng-class="{true: 'active', false: 'disabled'}[isActive]"  ng-click="submit('submit')">{{actionButton}}</button>
					   <button type="button" class="btn btn-default" ng-click="submit('close')">取消</button>						  
					</div>
				</div>
			</div><!-- /.modal-content -->
	    </div><!-- /.modal -->
	</div>
</script>