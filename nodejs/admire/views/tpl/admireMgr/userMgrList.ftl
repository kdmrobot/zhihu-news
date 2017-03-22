<script type="text/ng-template" id="userMgrList.ftl">	
	<style>
		.songsingle-detail-label{
		    margin-left: 10px;
			margin-top: 20px;
			margin-bottom:20px;
		    font-size: 20px;
		    font-weight: bold;
		    font-family: 'PingFangSC-Semibold', 'PingFang SC Semibold', 'PingFang SC';
		}
	</style>
	<div class="songsingle-detail-label" >
		用户管理
	</div>	
	<div class="clearfix serch-header"  >		
		<div class=" clearfix">
			<div class=" fr clearfix serch-header-left">
				<simplesearch></simplesearch>			
			</div>
			<div class="fl ib" style="margin-top: 12px;">
				<input  type="radio"  ng-click="changeType($event,'resulttype',0)" ng-model="resulttype" value="0" ><span class="mr25">全部</span>	
				<input  type="radio"  ng-click="changeType($event,'resulttype',1)" ng-model="resulttype" value="1" ><span class="mr25">单曲</span>	
				<!--<input  type="radio"  ng-click="changeType($event,'resulttype',2)" ng-model="resulttype" value="2" ><span class="mr25">电台</span>	
				<input  type="radio"  ng-click="changeType($event,'resulttype',3)" ng-model="resulttype" value="3" ><span class="mr25">专栏</span>-->								
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
				              <th style="min-width: 86px;">开通时间</th>	 
				              <th style="min-width: 86px;">User ID</th>	 
				              <th style="min-width: 86px;">用户名</th>	
				              <th style="width:128px;">艺人ID</th>
				              <th style="width:128px;">艺人名</th>
				              <th style="width:128px;">已开通赞赏类型</th>										 
							  <th   style="min-width: 86px;">累计赞赏金额</th>
							  <th style="min-width: 86px;">累计赞赏人次</th>
							  <th style="width:128px;">管理与操作</th>
				            </tr>
				            </thead>
				            <tbody>
				            <tr  ng-repeat="member in items"  >
				              <td>{{member.createTime|date : 'yyyy-MM-dd HH:mm:ss'}}</td>
				              <td>{{member.userId}}</td>
				              <td>
				              	<div  class="f-thide" style="overflow:hidden;width: 128px;" >
					              	<a href="http://music.163.com/#/user/home?id={{member.userId}}" target="_blank">
					              		{{member.userName}}
					              	</a>
				              	</div>
				              </td>
				              <td>{{member.artistId}}</td>
				              <td>
				              	<div  class="f-thide" style="overflow:hidden;width: 128px;" >
					              	<a href="http://music.163.com/#/artist?id={{member.artistId}}" target="_blank">
					              		{{member.artistName}}
					              	</a>
				              	</div>
				              </td>
				              <td>
				              	<div  class="f-thide" style="overflow:hidden;width: 180px;" >
				              		<span style="margin-right:10px;">
				              			<span ng-if="member.songReward ==1">单曲&nbsp</span>
				              			<span ng-if="member.djReward ==1">电台&nbsp</span>
				              			<span ng-if="member.topicReward ==1">专栏&nbsp</span>
				              		</span>
					              	<button  ng-if="member.songReward ==1||member.djReward ==1||member.topicReward ==1" type="button" class="btn btn-default yyr-default-btn-auto yyr-default-btn mr10" data-toggle="modal" 
							   			ng-click="show('AdmireTypeSettingCtrl',member)" data-backdrop="static" data-target="#showModal">
							   			更改
							   		</button>
				              	</div>
				              </td>
							  <td>{{member.rewardMoney}}</td>	
							  <td>{{member.rewardCount}}</td>
							   <td>
							   	  <div  class="flx-center">
							   		<button  type="button" class="btn btn-default yyr-default-btn-auto yyr-default-btn mr10" data-toggle="modal" 
							   			ng-click="show('UserDetailCtrl',member)" data-backdrop="static" data-target="#showModal">
							   			实名管理
							   		</button>
							   		<button  type="button" class="btn btn-default yyr-default-btn-auto yyr-default-btn mr10" data-toggle="modal" 
							   			ng-click="show('AccountDetailCtrl',member)" data-backdrop="static" data-target="#showModal">
							   			账户管理
							   		</button>
							   		
							   		<!--<button  type="button" class="btn btn-default yyr-default-btn-auto yyr-default-btn mr10" data-toggle="modal" 
							   			ng-click="show('ProductionMgrCtrl',member)" data-backdrop="static" data-target="#mgrModal">
							   			作品管理
							   		</button>-->
							   		<a ng-if="member.songReward ==1||member.djReward ==1||member.topicReward ==1"   ng-href="#/userMgr/production?userId={{member.userId}}" href="#/userMgr/production?userId={{member.userId}}"><button  type="button" class="btn btn-default yyr-default-btn-auto yyr-default-btn mr10" >
							   			作品管理
							   		</button>	</a>						   																				  									   									 
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
	<!-- 模态框（Modal） -->
	<div class="modal fade" id="showModal" tabindex="-3" role="dialog" aria-labelledby="myModal1Label" aria-hidden="true" data-backdrop="static">
		<div class="modal-dialog">
			<div class="modal-content">
				<div id="model-content"></div>
			</div><!-- /.modal-content -->
		</div><!-- /.modal -->
	</div>
	<div class="modal fade" id="editModal" tabindex="-2" role="dialog" aria-labelledby="myModal2Label" aria-hidden="true" data-backdrop="static">
		<div class="modal-dialog" style="width:620px;">
			<div class="modal-content">
				<div id="model-content"></div>
			</div><!-- /.modal-content -->
		</div><!-- /.modal -->
	</div>
	<div class="modal fade" id="mgrModal" tabindex="-1" role="dialog" aria-labelledby="myModal3Label" aria-hidden="true" data-backdrop="static">
		<div class="modal-dialog" style="width:980px;">
			<div class="modal-content">
				<div id="model-content"></div>
			</div><!-- /.modal-content -->
		</div><!-- /.modal -->
	</div>
	</section>
</script >	
