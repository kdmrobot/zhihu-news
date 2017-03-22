<script type="text/ng-template" id="divideMgr.ftl">	
	<div class="clearfix serch-header"  >
		<div class=" clearfix">
			<div class=" fr clearfix serch-header-left">
				<simplesearch></simplesearch>			
			</div>
		</div>	
		<div class=" clearfix">
			<div    class="fl ib"  style="margin-top: 12px;margin-left:10px;">
				<input  type="radio"  ng-click="changeType($event,'searchtype',1)" ng-model="searchtype" value="1" ><span class="mr25">单曲</span>		
				<!--<input  type="radio"  ng-click="changeType($event,'searchtype',2)" ng-model="searchtype" value="2"><span class="mr25">电台</span>		
				<input  type="radio"  ng-click="changeType($event,'searchtype',3)" ng-model="searchtype" value="3"><span class="mr25">专栏</span>	-->					
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
				              
				              <th style="width:108px;">User ID</th>	
				              <th style="width:108px;">用户名</th>
				              
				              <th style="width:108px;">艺人ID</th>									 
							  <th style="width:128px;">艺人名</th>
							  		
							  <th style="width:110px;">开通时间</th>									  							  	
							  <th style="width:128px;">分成比例</th>
							  								  	
							  <th style="width:118px;">操作</th>
							  <th style="width:128px;">操作记录</th>			
				            </tr>
				            </thead>
				            <tbody>
				            <tr  ng-repeat="member in members"  >				             
				              <td>
				              	<span >{{member.userId}}</span>
				              </td>
				              <td>
				              	<div class="f-thide" style="overflow:hidden;width: 108px;" >
					              	<a href="//music.163.com/#/user/home?id={{member.userId}}" target="_blank">
					              		{{member.userName}}
					              	</a>
				              	</div>
				              </td>
				              
				              <td>{{member.artistId}}</td>				              
				              <td>
				              	  <div class="f-thide" style="overflow:hidden;width: 108px;" >
					              	 <a href="//music.163.com/#/artist?id={{member.artistId}}" target="_blank">
					              		{{member.artistName}}
					              	 </a>
				              	  </div>				              	
				              </td>				              				              				              									
							  <td>{{member.openTime|date : 'yyyy-MM-dd HH:mm:ss'}}</td>
						      <td>{{member.new_gainSharing}}</td>
						              
							  <td >
								   <div class="flx-center">
							   		<button    type="button" class="btn btn-default yyr-default-btn-auto yyr-default-btn mr10" ng-click="showReason(member)" 
                                    >编辑</button>																		  									   									 
								  </div>
							  </td>		
							  <td>
							  	<div ng-if="member.gainSharingOpRecord" class="flx-center">
								  <div class="ib ">
									  <div><span class="mr10 ng-binding">{{member.aduiter}}</span></div>
									  <div><span class="ng-binding">{{member.time}}</span></div>
								  </div>											  									   									 
							    </div>
							    <span ng-if="!member.gainSharingOpRecord">-----</span>
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
	<div class="modal fade" id="showModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="static">
		<div class="modal-dialog" style="padding-top: 104px;">
			<div class="modal-content">
				<div id="model-content"></div>
			
			</div><!-- /.modal-content -->
		</div><!-- /.modal -->
	</div>
	</section>
</script >	
