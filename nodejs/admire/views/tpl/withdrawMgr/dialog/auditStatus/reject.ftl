<script type="text/ng-template" id="reject.ftl">
	<div id="status-content" ng-cloak>
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
			<h4 class="modal-title" id="errorModalLabel">{{title}}状态信息</h4>
		</div>
		<div class="modal-body" >
			<div style="margin:1px 20px;    min-height: 180px;display: flex;align-items: center;justify-content: center;flex-direction: column;">
				<p style="font-weight: bold;">已拒绝</p>
				<div >
					<p>拒绝理由:
						<span style="line-height: 29px;color:#a50d36;text-indent:2em;">
							{{reason}}
						</span>
					 </p>				
				</div>
			</div>
		</div>
	</div>
</script >