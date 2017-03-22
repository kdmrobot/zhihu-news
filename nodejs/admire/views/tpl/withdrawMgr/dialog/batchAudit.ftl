<script type="text/ng-template" id="batchAudit.ftl">
	<div id="batch-content"  style="font-size:12px;">
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
			<h4 class="modal-title" id="errorModalLabel">批量转账</h4>
		</div>
		<div class="modal-body" ng-cloak>
			 <table id="example2" class="table table-bordered table-striped dataTable">
	            <thead>           
	            <tr>
	              <th style="width:90px;">提交时间</th>	 
	              <th style="width:91px;">User ID</th>	
	              <th style="width:108px;">用户名</th>				              
				  <th style="width:230px;">收款账号</th>									  	
				  <th style="width:118px;">收款账号实名</th>
				  <th style="width:100px;">申请提现金额</th>			
	            </tr>
	            </thead>
	            <tbody>
	            <tr  ng-repeat="member in members"  >
				     <td>{{member.record.db_create_time|date : 'yyyy-MM-dd'}}</td>
				     <td>
	              	     <span ng-if="member.record.artistType=='1'">{{member.record.userId}}</span>
	              	     <span ng-if="member.record.artistType!='1'">--</span>
	              	 </td>
	              	 <td>{{member.artist.realName}}</td>
				  	 <td>{{member.record.targetAcctNo}}</td>
				     <td>
					     <span ng-if="param.parent.payType=='0'">
					    	 {{member.artist.aliRealName}}
					     </span>
					     <span ng-if="param.parent.payType=='3'">
					    	 {{member.artist.aliRealName}}
					     </span>
				     </td>
				     <td>{{member.record.amount}}</td>										
	            </tr>									
	            </tbody>
	          </table>
		</div>
		<div style="margin-left: 25px;">
			<span class="fwb" >提现总笔数：</span><span style="margin-right: 40px;">{{length}}</span>
			<span class="fwb" >提现总金额：</span><span style="margin-right: 40px;">{{total}}</span>
			<!--<span class="fwb">当前可提现金额：</span><span>{{remainTotal}}</span>-->
		</div>
		<div class="modal-footer">
			<button type="button" class="btn btn-primary"   ng-click="action()"  ng-class="{true: 'active', false: 'disabled'}[isActive]"   >确认转账</button>
			<button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
		</div>
	</div>
</script >