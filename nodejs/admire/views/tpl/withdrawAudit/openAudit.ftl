<script type="text/ng-template" id="openAudit.ftl">	
	<div class="clearfix serch-header"  >
		<div class=" clearfix">
			<div class=" fr clearfix serch-header-left">
				<simplesearch></simplesearch>			
			</div>
		</div>	
		<div class=" clearfix">
			<div    class="fl ib"  style="margin-top: 12px;margin-left:10px;">
				<input  type="radio"  ng-click="changeType($event,'searchtype',1)" ng-model="searchtype" value="1" ><span class="mr25">单曲</span>		
				<input  type="radio"  ng-click="changeType($event,'searchtype',2)" ng-model="searchtype" value="2"><span class="mr25">电台</span>		
				<!--<input  type="radio"  ng-click="changeType($event,'searchtype',3)" ng-model="searchtype" value="3"><span class="mr25">专栏</span>	-->					
			</div>
			<div class="fr ib" style="margin-top: 12px;">
				<input  type="radio"  ng-click="changeType($event,'resulttype',2)" ng-model="resulttype" value="2" ><span class="mr25">全部</span>	
				<input  type="radio"  ng-click="changeType($event,'resulttype',0)" ng-model="resulttype" value="0" ><span class="mr25">未处理</span>	
				<input  type="radio"  ng-click="changeType($event,'resulttype',1)" ng-model="resulttype" value="1" ><span class="mr25">已通过</span>	
				<input  type="radio"  ng-click="changeType($event,'resulttype',-1)" ng-model="resulttype" value="-1" ><span class="mr25">已拒绝</span>								
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
				              <th style="width:110px;">申请时间</th>	 
				              <th style="width:108px;">User ID</th>	
				              <th style="width:108px;">用户名</th>
				              
				              <th ng-if="searchtype==1" style="width:108px;">艺人ID</th>									 
							  <th ng-if="searchtype==1" style="width:128px;">艺人名</th>
							  							  	
							  <th style="width:128px;">开通赞赏类型</th>
							  <th style="width:128px;">审核状态</th>
							  								  	
							  <th style="width:118px;">操作</th>
							  <th style="width:128px;">操作记录</th>			
				            </tr>
				            </thead>
				            <tbody>
				            <tr  ng-repeat="member in members"  >
				              <td>{{member.applyTime|date : 'yyyy-MM-dd HH:mm:ss'}}</td>
				              <td >
				              	<span >{{member.userId}}</span>
				              	</td>
				              <td >
				              	<div class="f-thide" style="overflow:hidden;width: 108px;" >
					              	<a href="//music.163.com/#/user/home?id={{member.userId}}" target="_blank">
					              		{{member.userName}}
					              	</a>
				              	</div>
				              </td>
				              
				              <td ng-if="searchtype==1">{{member.artistId}}</td>				              
				              <td ng-if="searchtype==1">
			              		<div class="f-thide" style="overflow:hidden;width: 108px;" >
					              	<a href="//music.163.com/#/artist?id={{member.artistId}}" target="_blank">
					              		{{member.artistName}}
					              	</a>
				              	</div>				              	   
				              </td>				              				              									
							  <td>{{member.rewardType|rewardType}}</td>
				              <td>
				              	<a ng-if="member.status=='-1'"  style="cursor:pointer;"  href=""  ng-click="showReason(member,'-1','statusModal')">{{member.status|rewardAuditType}}</a>
				              	<span ng-if="member.status!='-1'" >{{member.status|rewardAuditType}}</span>
				              </td> 				             				              
							  <td >
								  <div ng-if="member.status=='0'" class="flx-center">
							   		<button   type="button" class="btn btn-default yyr-default-btn-auto yyr-default-btn mr10"   ng-click="showReason(member,'audit','showModal')"
                                        >审核</button> 																		  									   									 
								  </div>
								   <div ng-if="member.status!='0'" class="flx-center">
							   		<button    type="button" class="btn btn-default yyr-default-btn-auto yyr-default-btn mr10"   ng-click="showReason(member,'detail','showModal')" 
                                        >查看</button>																		  									   									 
								  </div>
							  </td>		
							  <td>
							  	<div ng-if="member.opRecord" class="flx-center">
								  <div class="ib ">
									  <div><span class="mr10 ng-binding">{{member.record.auditResult}}</span></div>
									  <div><span class="mr10 ng-binding">{{member.record.aduiter}}</span></div>
									  <div><span class="ng-binding">{{member.record.time}}</span></div>
								  </div>											  									   									 
							    </div>
							    <span ng-if="!member.opRecord">-----</span>
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
	<div class="modal fade" id="statusModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="static">
		<div class="modal-dialog" style="padding-top: 66px;width: 500px;">
			<div class="modal-content" >
				<div id="model-content" ></div>
			
			</div><!-- /.modal-content -->
		</div><!-- /.modal -->
	</div>
	<div class="modal fade" id="batchModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="static">
		<div class="modal-dialog" style="padding-top: 66px;width: 700px;">
			<div class="modal-content" >
				<div id="model-content" ></div>
			
			</div><!-- /.modal-content -->
		</div><!-- /.modal -->
	</div>
	<!-- 模态框（Modal） -->
	<div class="modal fade" id="showModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="static">
		<div class="modal-dialog" style="padding-top: 66px;">
			<div class="modal-content">
				<div id="model-content"></div>
			
			</div><!-- /.modal-content -->
		</div><!-- /.modal -->
	</div>
	</section>
</script >	
