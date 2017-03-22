<script type="text/ng-template" id="productAuditList.ftl">	
	<style>
		.productAuditList-label{
		    margin-left: 10px;
			margin-top: 20px;
			margin-bottom:20px;
		    font-size: 20px;
		    font-weight: bold;
		    font-family: 'PingFangSC-Semibold', 'PingFang SC Semibold', 'PingFang SC';
		}
	</style>	
	<div class="productAuditList-label" >
		作品管理
	</div>		
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
				<input  type="radio"  ng-click="changeType($event,'searchtype',3)" ng-model="searchtype" value="3"><span class="mr25">专栏</span>						
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
				              
				              <th style="width:108px;">艺人ID</th>									 
							  <th style="width:128px;">艺人名</th>
							  							  	
							  <th style="width:128px;">开通赞赏类型</th>
							  <th style="width:128px;">审核状态</th>
							  								  	
							  <th style="width:118px;">操作</th>		
				            </tr>
				            </thead>
				            <tbody>
				            <tr  ng-repeat="member in members"  >
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
				              				              									
							  <td>单曲</td>
				              <td> 
				              	<a ng-if="member.record.status!='0'" a style="cursor:pointer;"  href=""  ng-click="showReason(member,'-1','statusModal')">拒绝</a></td> 				              
							  <td >
							  	 <div  class="flx-center">
								 	<a ng-href="#/productAudit/items" href="#/productAudit/items">
								 		<button  type="button" class="btn btn-default yyr-default-btn-auto yyr-default-btn mr10" >
							   			审核</button>
							   		</a>
							   	</div>
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
		<div class="modal-dialog" style="padding-top: 104px;width: 500px;">
			<div class="modal-content" >
				<div id="model-content" ></div>
			
			</div><!-- /.modal-content -->
		</div><!-- /.modal -->
	</div>
	<div class="modal fade" id="batchModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="static">
		<div class="modal-dialog" style="padding-top: 104px;width: 700px;">
			<div class="modal-content" >
				<div id="model-content" ></div>
			
			</div><!-- /.modal-content -->
		</div><!-- /.modal -->
	</div>
	<!-- 模态框（Modal） -->
	<div class="modal fade" id="showModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="static">
		<div class="modal-dialog" style="padding-top: 104px;">
			<div class="modal-content">
				<div id="model-content"></div>
			
			</div><!-- /.modal-content -->
		</div><!-- /.modal -->
	</div>
	</section>
</script >	
