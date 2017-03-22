<script type="text/ng-template" id="rejectList.html">
	<div id="audit-reject">
		<div class="modal-header">
			<button type="button" class="close"  ng-click="submit('close')"  aria-hidden="true">&times;</button>
			<h4 class="modal-title" id="errorModalLabel">私信通知</h4>
		</div>
		<div class="modal-body" ng-cloak >
			<div style="min-height:200px;">
				<div >
					<span>拒绝原因</span>
					<dropdown source="param"   selectlist="selectlist"></dropdown>
				</div>
				<div role="tabpanel" ng-if="contentId!=0" class="tab-pane active" id="profile">
					<textarea class="form-control"   ng-class="{true: 'active', false: 'disabled'}[isActive]"    ng-keyup="validContent($event)"   placeholder="编辑私信" ng-model="$parent.content"  rows="6" style="margin-top:20px;"></textarea>
				</div>
				<div>
					<!-- <h6>注：歌曲需要转码，转码完成后次私信才会Push给用户</h6> -->
				</div>
			</div>
		</div>
		
		<div class="modal-footer">
			<button type="button" class="btn btn-primary"   ng-click="submit('action')"  ng-class="{true: 'active', false: 'disabled'}[isActive]" >确定并发送</button>
			<button type="button" class="btn btn-default"    ng-click="submit('close')" >取消</button>
		</div>
	</div>
</script>