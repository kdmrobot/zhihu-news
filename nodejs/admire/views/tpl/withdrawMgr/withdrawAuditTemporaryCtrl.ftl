<script type="text/ng-template" id="withdrawAuditTemporaryCtrl.ftl">	
	<div class="clearfix serch-header"  >
		<div class=" clearfix">
			<div class="fl ib" style="margin-top: 12px;">
				<input  type="radio"  ng-click="search('alipay')"   id="alipay"   ng-checked="select.alipay=='sel'"  ><span class="mr25">支付宝</span>		
				<input type="radio"   ng-click="search('wechart')"  id="wechart"  ng-checked="select.wechart=='sel'" ><span class="mr25">微信</span>					
			</div>
			<div class="fr ib" style="margin-top: 12px;">
				<input  type="radio" value="all"  ng-model="status"   ><span class="mr25">全部</span>		
				<input type="radio"  value="0"  ng-model="status"  ><span class="mr25">未处理</span>
				<input  type="radio" value="-2"  ng-model="status" ><span class="mr25">已拒绝</span>		
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
				              <th style="width:138px;">提交时间</th>	 
				              <th style="width:108px;">User ID</th>	
				              <th style="width:108px;">真实姓名</th>
				              
				              <th style="width:108px;">艺人ID</th>									 
							  <th style="width:128px;">艺人名</th>							  	
							  <th style="width:128px;">收款账号</th>
							  		
							  <th style="width:128px;">申请提现金额</th>	
							  <th style="width:148px;">当前可提现金额</th>
							  								  	
							  <th style="width:118px;">操作</th>
							  <th style="width:128px;">操作记录</th>			
				            </tr>
				            </thead>
				            <tbody>
				            <tr  ng-repeat="member in members"  >
				              <td>{{member.record.db_create_time|date : 'yyyy-MM-dd HH:mm:ss'}}</td>
				              <td>
				              	<span ng-if="member.record.artistType=='1'">{{member.record.userId}}</span>
				              	<span ng-if="member.record.artistType!='1'">--</span>
				              	</td>
				              <td>
				              	<div  ng-if="member.record.artistType=='1'"    class="f-thide" style="overflow:hidden;width: 108px;" >
					              	<a href="http://music.163.com/#/user/home?id={{member.record.userId}}" target="_blank">
					              		{{member.artist.realName}}
					              	</a>
				              	</div>
				              	<span ng-if="member.record.artistType!='1'">--</span>
				              </td>
				              
				              <td>{{member.record.artistId}}</td>				              
				              <td>{{member.artistName}}</td>				              									
							  <td>{{member.record.targetAcctNo}}</td>
				                
							  <td>{{member.record.amount}}</td>				             
							  <td>{{member.remainMoney}}</td>							
							  <td>								  					  
								  <select ng-if="member.record.status =='0'" ng-init="init(member,tags)"   ng-model="member.status" ng-options=" x.name   for x in tags " ng-change="changeTag(member,$event)">
								  </select>	
								  <span ng-if="member.record.status !='0'">{{member.record.status|payType}}</span>
							  </td>
							  <td>-----</td>								
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
		
	<button  ng-show="false"  id="conflict" data-toggle="modal" href="pages/views/tpl/auditsManagement/dialog/reviewConflictTips.html" 
	data-backdrop="static" data-target="#conflictModal">conflict</button>
	
	<!-- 模态框（Modal） -->
	<div class="modal fade" id="conflictModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				
			</div><!-- /.modal-content -->
		</div><!-- /.modal -->
	</div>
	
	<div class="modal fade" id="lirModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" >
		<div class="modal-dialog">
		<!-- background-image: url('resources/background.jpg') -->
			<div class="modal-content" style="padding: 2px;border-radius: 10px;">
				<lrcscroll lrc-url="mock/test.lrc" music-url="resources/oldgai.mp3"></lrcscroll>
			</div><!-- /.modal-content -->
	
		</div><!-- /.modal -->
	</div>
	
	</section>
</script >	
