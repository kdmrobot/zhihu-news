<script type="text/ng-template" id="transfer.ftl">	
   <div id="transfer-content" ng-controller ="transferCtrl">
		  <div class="modal-header">
			  <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
			  <h4 class="modal-title" id="errorModalLabel">转账确认</h4>
		  </div>
		<div class="modal-body" ng-cloak>
			确定转账{{amount}}元到{{targetAcctNo}}？
		 </div>
		
		<div class="modal-footer">
			<button type="button" class="btn btn-primary"   ng-click="action()"  >确定</button>
			<button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
		</div>
	</div>
</script >