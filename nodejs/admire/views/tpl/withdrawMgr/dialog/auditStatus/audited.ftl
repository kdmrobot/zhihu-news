<script type="text/ng-template" id="audited.ftl">
	<div id="status-content">
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
			<h4 class="modal-title" id="errorModalLabel">提现状态信息</h4>
		</div>
		<div class="modal-body" ng-cloak>
			<div style="margin:1px 20px;    min-height: 180px;display: flex;align-items: center;justify-content: center;flex-direction: column;">
				<p style="font-weight: bold;">到账成功</p>
				<div class="status-content-region">
					<p>收款账号：<span >{{info.targetAcctNo}} </span ></p>
					<p>商户流水号：<span >{{info.withDrawNo}}</span ></p>
					<p>收款账号姓名：<span >{{info.targetAcctName}} </p></span >
					<p>转账金额：<span >{{info.amount}}</p></span >
					<p>支付宝内部流水号说明：<span >{{info.thirdDrawNumber}}</span > </p>
					<p>完成时间：<span >{{info.db_update_time|date : 'yyyy-MM-dd HH:mm:ss'}} </span ></p>
				</div>
			</div>
		</div>
	</div>
</script >