<script type="text/ng-template" id="withdrawAudit.ftl">	
	<div class="clearfix serch-header"  >
		<div class=" clearfix">
			<div class=" fr clearfix serch-header-left">
				<simplesearch></simplesearch>			
			</div>
		</div>
	
		<div ng-if="status=='0'"   class=" clearfix">
			<div    class="fl ib"  style="margin-top: 12px;margin-left:10px;">
				<input  type="radio"  ng-click="search('alipay')"   id="alipay"   ng-checked="select.alipay=='sel'"  ><span class="mr25">支付宝</span>		
				<input type="radio"   ng-click="search('wechart')"  id="wechart"  ng-checked="select.wechart=='sel'" ><span class="mr25">微信</span>					
			</div>
		</div>
		<div class=" clearfix">
			<div  ng-if="status=='0'" class="fl ib" style="margin-top: 12px;">
				<input style="margin-left:10px" type="checkbox" ng-model="$parent.selectAll"></input>
				<span style="margin-left:15px;font-size: 13px;">全选</span>
				<a ng-click="batchAduit('audit','BatchAuditCtrl')">批量转账</a>
				<a ng-click="batchAduit('reject','BatchRejectCtrl')" style="margin-left:10px">批量拒绝</a>		
			</div>
			<div  ng-if="status!='0'"  class="fl ib"  style="margin-top: 12px;margin-left:10px;">
				<input  type="radio"  ng-click="search('alipay')"   id="alipay"   ng-checked="select.alipay=='sel'"  ><span class="mr25">支付宝</span>		
				<input type="radio"   ng-click="search('wechart')"  id="wechart"  ng-checked="select.wechart=='sel'" ><span class="mr25">微信</span>					
			</div>
			<div class="fr ib" style="margin-top: 12px;">
				<input  type="radio" value="all"  ng-model="status"   ><span class="mr25">全部</span>		
				<input type="radio"  value="0"  ng-model="status"  ><span class="mr25">未处理</span>
				<input  type="radio" value="-2"  ng-model="status" ><span class="mr25">已拒绝</span>	
				
				<input  type="radio" ng-if="payType =='0'"   value="3"  ng-model="$parent.status" ><span ng-if="payType =='0'"   class="mr25">转账中</span>	
				<input  type="radio" ng-if="payType =='3'"  value="1"  ng-model="$parent.status" ><span  ng-if="payType =='3'" class="mr25">转账中</span>	
					
				<input type="radio"  value="2"  ng-model="status"  ><span class="mr25">到账成功</span>	
				<input  type="radio" value="-1"  ng-model="status"  ><span >到账失败</span>									
			</div>
		</div>
	 </div> 
	<section class="" >
	   <div class=""  >
	       <!-- /.box-header -->
	       <div class="table-container">
	       	<div id="example1_wrapper" class="dataTables_wrapper form-inline dt-bootstrap">			        	
	       		<div class="row">
	       			<div class="col-sm-12" >
	       				 <table id="example2" class="table table-bordered table-striped dataTable">
				            <thead>           
				            <tr>
				              <th ng-if="status=='0'"  style="width:20px;"></th>
				              <th style="width:108px;">提交时间</th>	 
				              <th style="width:108px;">User ID</th>	
				              <th style="width:108px;">用户名</th>
				              
				              <th style="width:108px;">艺人ID</th>									 
							  <th style="width:128px;">艺人名</th>							  	
							  <th style="width:128px;">收款账号</th>
							  <th style="width:128px;">收款账号姓名</th>
							  
							  		
							  <th style="width:118px;">申请提现金额</th>	
							  <th style="width:135px;">当前可提现金额</th>
							  
							  <th style="width:118px;">提现状态</th>
							  <th  style="width:118px;">备份状态</th>									  	
							  <th style="width:118px;">操作</th>
							  <th style="width:100px;">操作记录</th>			
				            </tr>
				            </thead>
				            <tbody>
				            <tr  ng-repeat="member in members"  >
				              <td  ng-if="status=='0'"><input type="checkbox" ng-model="member.check" "></input></td>
				              <td>{{member.record.db_create_time|date : 'yyyy-MM-dd HH:mm:ss'}}</td>
				              <td>
				              	<span >{{member.record.userId}}</span>
				              	</td>
				              <td>
				              	<div class="f-thide" style="overflow:hidden;width: 108px;" >
					              	<a href="//music.163.com/#/user/home?id={{member.record.userId}}" target="_blank">
					              		{{member.userName}}
					              	</a>
				              	</div>
				              </td>
				              
				              <td>{{member.record.artistId}}</td>				              
				              <td>
				              	   <span ng-if="member.record.artistType=='1'">{{member.artistName}}</span>
				              	   <span ng-if="member.record.artistType!='1'">--</span>
				              </td>				              									
							  <td>{{member.record.targetAcctNo}}</td>
				              <td>{{member.record.targetAcctName}}</td> 
				              
							  <td>{{member.record.amount}}</td>				             
							  <td>{{member.remainMoney}}</td>							 					
							  <td>								  					  								 
								  <a  ng-if="member.record.status!='0'" style="cursor:pointer;"  href=""  ng-click="showReason(member,member.record.status)">{{member.record.status|payType}}</a>
							 	 <span ng-if="member.record.status=='0'" >{{member.record.status|payType}}</span>
							  </td>
							  <td >								  					  								 
								  <span >{{member.rewardStatus|remarkpayType}}</span>
							  </td>
							   <td >
								  <div ng-if="status=='0'||member.record.status=='0'" class="flx-center">
							   		<button   type="button" class="btn btn-default yyr-default-btn-auto yyr-default-btn mr10" data-toggle="modal" ng-click="show('transferCtrl',member)" data-backdrop="static"
                                        data-target="#testModal">转账</button>
                                    <button  type="button" class="btn btn-default yyr-default-btn-auto  yyr-default-btn mr10" data-toggle="modal" ng-click="show('rejectTransferCtrl',member)" data-backdrop="static"
                                        data-target="#testModal">拒绝</button> 																		  									   									 
								  </div>
								   <div ng-if="status!='0'&&member.record.status!='0'" class="flx-center">
							   		<button   disabled="disabled" type="button" class="btn btn-default yyr-default-btn-auto yyr-default-btn mr10" data-toggle="modal" ng-click="show('transferCtrl',member)" data-backdrop="static"
                                        data-target="#testModal">转账</button>
                                    <button  disabled="disabled" type="button" class="btn btn-default yyr-default-btn-auto  yyr-default-btn mr10" data-toggle="modal" ng-click="show('rejectTransferCtrl',member)" data-backdrop="static"
                                        data-target="#testModal">拒绝</button> 																		  									   									 
								  </div>
							  </td>		
							  <td>
							  	<div ng-if="member.op" class="flx-center">
								  <div class="ib ">
									  <div><span class="mr10 ng-binding">{{member.op.audit}}</span></div>
									  <div><span class="ng-binding">{{member.op.managerName}}</span></div>
									  <div style="width:60px;"><span class="ng-binding">{{member.op.db_update_time|date : 'yyyy-MM-dd HH:mm:ss'}}</span></div>
								  </div>											  									   									 
							   </div>
							  <span ng-if="!member.op">-----</span>
							  </td>								
				            </tr>									
				            </tbody>
				          </table>
	       			</div>		        			
	       		</div>			        		    	
	      	 	</div>
	        </div>
		 <page setting="pageSetting" name="artist_totalGrid"></page>
	       <!-- /.box-body -->
	  </div>
	<div class="modal fade" id="statusModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog" style="padding-top: 134px;width: 500px;">
			<div class="modal-content" >
				<div id="model-content" ></div>
			
			</div><!-- /.modal-content -->
		</div><!-- /.modal -->
	</div>
	<div class="modal fade" id="batchModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog" style="padding-top: 134px;width: 700px;">
			<div class="modal-content" >
				<div id="model-content" ></div>
			
			</div><!-- /.modal-content -->
		</div><!-- /.modal -->
	</div>
	<!-- 模态框（Modal） -->
	<div class="modal fade" id="testModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog" style="padding-top: 134px;">
			<div class="modal-content">
				<div id="model-content"></div>
			
			</div><!-- /.modal-content -->
		</div><!-- /.modal -->
	</div>
	</section>
</script >	
