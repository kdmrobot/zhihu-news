<script type="text/ng-template" id="BlackList.ftl">	
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
			
			<div    class="fr ib"  style="margin-top: 12px;margin-left:10px;">
				<input  type="radio"  ng-click="changeType($event,'type','user')"   ng-model="type" value="user" ><span class="mr25">黑名单用户</span>
				<input  type="radio"  ng-click="changeType($event,'type','production')"   ng-model="type" value="production" ><span class="mr25">黑名单作品</span>												
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
					              <th ng-if="type!='production'" style="width:180px;">拉黑时间</th>
					              <th ng-if="type=='production'"   style="width:180px;">用户开通赞赏时间</th>					               
					              <th style="width:180px;">User ID</th>	
					              <th style="width:180px;">用户名</th>
					              
					              <th ng-if="type=='production'" style="width:180px;" >艺人ID</th>									 
								  <th ng-if="type=='production'"  style="width:180px;">艺人名</th>
								  <th ng-if="type=='production'">黑名单歌曲数</th>						  	
								  <th >操作</th>		
					            </tr>
				            </thead>
				            <tbody>
				            <tr  ng-repeat="member in members"  >
				              <td>		              
				              	<span ng-if="type!='production'">{{member.time|date : 'yyyy-MM-dd HH:mm:ss'}}</span>
				              	<span ng-if="type=='production'">{{member.openTime|date : 'yyyy-MM-dd HH:mm:ss'}}</span>
				              </td>
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
				              
				              <td  ng-if="type=='production'">{{member.artistId}}</td>				              
				              <td  ng-if="type=='production'">
				              	  <div class="f-thide" style="overflow:hidden;width: 108px;" >
					              	  <a href="//music.163.com/#/artist?id={{member.artistId}}" target="_blank">
					              		  {{member.artistName}}
					              	  </a>
				              	  </div>	
				              </td>
				              <td  ng-if="type=='production'">
				              	{{member.blackSize}}
				              </td>				              				              									
							  <td  >
								   <div ng-if="type=='user'" class="flx-center">
							   			<button    type="button" class="btn btn-default yyr-default-btn-auto yyr-default-btn mr10"  
							   			 ng-click="removeAction(member)" >移出黑名单</button>																		  									   									 
								  </div>
								   <div ng-if="type=='production'" class="flx-center">
								   		<a ng-href="#/blackMgr/production?userId={{member.userId}}" href="#/blackMgr/production?userId={{member.userId}}">
							   				<button    type="button" class="btn btn-default yyr-default-btn-auto yyr-default-btn mr10">管理</button>
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
	<!-- 模态框（Modal） -->
	<div class="modal fade" id="showModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="static">
		<div class="modal-dialog" style="padding-top: 104px;width:500px;">
			<div class="modal-content">
				<div id="model-content"></div>
			
			</div><!-- /.modal-content -->
		</div><!-- /.modal -->
	</div>
	</section>
</script >	
