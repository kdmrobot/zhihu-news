<script type="text/ng-template" id="rejectTransfer.ftl">
	<div id="rejectTransfer-content">
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
			<h4 class="modal-title" id="errorModalLabel">备注拒绝理由</h4>
		</div>
		<div class="modal-body">
			
			<div role="tabpanel" class="tab-pane active" id="profile">
				<textarea  id="contentvalue"  class="form-control"  placeholder="" ng-model="content"  ng-keyup="contentchange()"  rows="6" style="margin-top:20px;"></textarea>
			</div>
			<div>
				<h6>注：限制输入200字节</h6>
		</div>
		
		<div class="modal-footer">
			<button type="button" class="btn btn-primary"   ng-click="action()"  ng-class="{true: 'active', false: 'disabled'}[isActive]"   >提交</button>
			<button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
		</div>
	</div>
</script >