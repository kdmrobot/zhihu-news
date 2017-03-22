<script type="text/ng-template" id="blackMgr.ftl">	
	<div class="clearfix serch-header"  >			
		<div ui-view  class=" clearfix" style="overflow:hidden;">
		
		</div>		
	 </div> 
</script >	

<script type="text/ng-template" id="blackProductionMgr.ftl">	
	<style>
		.tab-wrapper:after {
		    content: "";
		    display: block;
		    height: 0;
		    font-size: 0;
		    visibility: hidden;
		    clear: both;
		}
		.tab-wrapper{
		    margin-left: 20px;
   			margin-right: 20px;
			zoom: 1;
		    border-bottom: 1px solid #e5e9ef;
		    line-height: 1;
		    position: relative;
		}
		.tab-wrapper .tab.active{
			color: #CC0000;
		    border-bottom: 3px solid #CC0000;
		    position: relative;
		    margin-bottom: -1px;
		}
		.tab-wrapper .tab{
			margin-top: 10px;
    		font-size: 21px;
    		font-weight: bold;
		    float: left;
		    margin-right: 48px;
		    padding-bottom: 12px;
		    cursor: pointer;
		    min-width: 100px;
   			text-align: center;
		}
		.blackProduction-label{
		    margin-left: 10px;
			margin-top: 20px;
			margin-bottom:20px;
		    font-size: 20px;
		    font-weight: bold;
		    font-family: 'PingFangSC-Semibold', 'PingFang SC Semibold', 'PingFang SC';
		}
		.blackProduction-select{
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
	 <div class="blackProduction-label" >
		<a style="color:#CC0000;" ng-href="#/blackMgr/list" href="#/blackMgr/list" >黑名单管理</a> >
		黑名单作品管理
	</div>	
	<div id="production-mgr">
		<div class="clearfix serch-header"  >		
			<div class=" clearfix">
				<div class=" fr clearfix serch-header-left">
					<simplesearch></simplesearch>			
				</div>			
			</div>		
		</div>
		<div   class="modal-body clearfix" ng-cloak style="padding:1px;overflow:hidden">
			<div class="tab-wrapper" ng-click="changeTab($event)" >
				<div class="tab "  ng-class="{true: 'active', false: ''}[tabName=='singleSong']"     name="singleSong" data-type="1">
					单曲
				</div>			
				<!--<div class="tab "   ng-class="{true: 'active', false: ''}[tabName=='program']"   name="program" data-type="2">
					节目
				</div>
				<div class="tab " ng-class="{true: 'active', false: ''}[tabName=='programArticle']"    name="programArticle" data-type="3">
					专栏文章
				</div>-->
			</div>
			<div class="modal-body">
			 <div class="table-container">
				   <div id="example1_wrapper" class="dataTables_wrapper form-inline dt-bootstrap">			        	
				       	<table id="example2" class="table table-bordered table-striped dataTable">
							<thead>           
							<tr>
							  <th>序号</th>	
							  <th>拉黑时间</th> 	 
							  <th >歌曲名</th>								  
							  <th >歌手名</th>
							  <th >所属专辑</th>
							  <th >发行时间</th>
							  <th >类型</th>
							  <th >版本</th>
							  <th >风格</th>
							  <th >版权公司</th>
							  <th >操作</th>										 
							</tr>
							</thead>
							<tbody>
							<tr  ng-repeat="member in members"  >
							  <td>{{$index+1}}</td>
							  <td>{{member.blackTime|date : 'yyyy-MM-dd HH:mm:ss'}}</td>
							  <td>							  	 
							  	  <div class="f-thide" style="overflow:hidden;width: 108px;" >
					              	<a href="//music.163.com/#/song?id={{member.songId}}" target="_blank">
					              		{{member.songName}}
					              	</a>
				              	  </div>	
							  </td>							 
							  <td>{{member.singer}}</td>
							  <td>
							  	  <div class="f-thide" style="overflow:hidden;width: 108px;" >
					              	<a href="//music.163.com/#/album?id={{member.albumId}}" target="_blank">
					              		{{member.albumName}}
					              	</a>
				              	  </div>	
							  </td>
							  <td>{{member.pubTime|date : 'yyyy-MM-dd HH:mm:ss'}}</td>		
							  <td>{{member.type}}</td>		
							  <td>{{member.version}}</td>		
							  <td>{{member.style}}</td>		
							  <td>{{member.copyRight}}</td>									  
							  <td>	
							  	<button  class="btn btn-default yyr-default-btn-auto yyr-default-btn" ng-click="songSingleAction(member,'removeBlack')">取消拉黑</button>
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