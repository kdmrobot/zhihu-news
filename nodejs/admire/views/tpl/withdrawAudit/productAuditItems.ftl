<script type="text/ng-template" id="productAuditItems.ftl">
	<style>		
		.productAuditItems-label{
		    margin-left: 10px;
			margin-top: 20px;
			margin-bottom:20px;
		    font-size: 20px;
		    font-weight: bold;
		    font-family: 'PingFangSC-Semibold', 'PingFang SC Semibold', 'PingFang SC';
		}
		.songsingle-detail-select{
		    margin-top: -1px;
   			margin-bottom: 2px;
    		margin-left: 9px;
		}
		.red{
			color:red;
		}		
		.blue{
			color:#1f1d1d;
		}
		.yellow{
			color:#b9b9b1;
		}
	</style>
	 <div class="productAuditItems-label" >
		<a style="color:#CC0000;" ng-href="#/productAudit/list" href="#/productAudit/list" >作品管理</a> >
		待审核作品
	</div>
	<div class="clearfix serch-header"  >
		<div class=" clearfix">
			<div class=" fr clearfix serch-header-left">
				<simplesearch></simplesearch>			
			</div>
		</div>			
	 </div> 	
	<div id="production-mgr">
		<!--<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
			<h4 class="modal-title" id="errorModalLabel">作品管理</h4>
		</div>-->
		<div   class="modal-body clearfix" ng-cloak style="padding:1px;overflow:hidden">			
			<div   class="modal-body">		  	 
			 <div     class="table-container">
				   <div id="example1_wrapper" class="dataTables_wrapper form-inline dt-bootstrap">			        	
				       	<table id="example2" class="table table-bordered table-striped dataTable">
							<thead>           
							<tr>
							  <th >序号</th>	 
							  <th >歌曲id</th>	 
							  <th >歌曲名</th>	
							  <th >歌手名</th>
							  <th >赞赏状态</th>
							  <th >操作</th>										 
							</tr>
							</thead>
							<tbody>
							<tr  ng-repeat="member in songSingItems"  >
							  <td>{{$index+1}}</td>

							  <td>{{member.songId}}</td>
							  <td>{{member.songName}}</td>
							  <td>{{member.singer}}</td>
							  
							  <td><span ng-class="{'1': 'red', '2': 'blue','3':'yellow'}[member.admireStatus]">{{member.admireStatus|admireStatus}}</span></td>
							  <td>	
							  	<button ng-if="member.admireStatus=='1'"  class="btn btn-default yyr-default-btn-auto yyr-default-btn" ng-click="songSingleAction(member,'closeSingle')" >关闭赞赏并拉黑</button>
							  	<button ng-if="member.admireStatus=='2'"   class="btn btn-default yyr-default-btn-auto yyr-default-btn" ng-click="songSingleAction(member,'openAdmire')">开通赞赏</button>
							  	<button ng-if="member.admireStatus=='3'" class="btn btn-default yyr-default-btn-auto yyr-default-btn" ng-click="songSingleAction(member,'removeBlack')">取消拉黑</button>
							  </td>				             								
							</tr>									
							</tbody>
						  </table>
				 </div>
				 <page setting="pageSetting" name="artist_totalGrid"></page>
			</div>	  	 
			</div>							
		</div>
	</div>
	<!-- 模态框（Modal） -->
	<div class="modal fade" id="showModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div id="model-content"></div>
			</div><!-- /.modal-content -->
		</div><!-- /.modal -->
	</div>
</script >