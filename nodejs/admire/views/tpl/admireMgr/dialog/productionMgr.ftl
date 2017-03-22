<script type="text/ng-template" id="productionMgr.ftl">
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
		.songsingle-detail-label{
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
		
		.songsingle-detail-select input{				
		    position: relative;
   			top: 2px;		
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
	<div class="songsingle-detail-label" >
		<a style="color:#CC0000;" ng-href="#/userMgr/list" href="#/userMgr/list" >用户管理</a> >
		作品管理
	</div> 		
	<div id="production-mgr">
		<div class="clearfix serch-header"  >		
			<div class=" clearfix">
				<div class=" fr clearfix serch-header-left">
					<simplesearch></simplesearch>			
				</div>			
			</div>		
		</div>
		<!--<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
			<h4 class="modal-title" id="errorModalLabel">作品管理</h4>
		</div>-->
		<div   class="modal-body clearfix" ng-cloak style="padding:1px;overflow:hidden">
			<div class="tab-wrapper" ng-click="changeTab($event)" >
				<div class="tab "  ng-class="{true: 'active', false: ''}[tabName=='singleSong']"     name="singleSong" data-type="1">
					单曲
				</div>			
				<div class="tab "   ng-class="{true: 'active', false: ''}[tabName=='program']"   name="program" data-type="2">
					节目
				</div>
				<div class="tab " ng-class="{true: 'active', false: ''}[tabName=='programArticle']"    name="programArticle" data-type="3">
					专栏文章
				</div>
			</div>
			<div   class="modal-body">

			 <div  ng-if="workflow=='songSingle_detail'"   class="table-container">
			 	<!--  <div class="songsingle-detail-label" >
					  	惊叹号>单曲列表
				  </div>-->
			 
			 	  <div class="songsingle-detail-select ib" >
					  <input  type="radio"  ng-click="changeStatus($event,2)" ng-model="status" value="2" ><span class="mr25">全部</span>	
					  <input  type="radio"  ng-click="changeStatus($event,1)" ng-model="status" value="1" ><span class="mr25">已开通</span>	
					  <input  type="radio"  ng-click="changeStatus($event,0)" ng-model="status" value="0" ><span class="mr25">未开通</span>	
					  <input  type="radio"  ng-click="changeStatus($event,3)" ng-model="status" value="3" ><span class="mr25">黑名单</span>								
				  </div>

				   <div id="example1_wrapper" class="dataTables_wrapper form-inline dt-bootstrap">			        	
				       	<table id="example2" class="table table-bordered table-striped dataTable">
							<thead>           
							<tr>
							  <th >序号</th>	 	 
							  <th >歌曲名</th>	
							  <th >赞赏状态</th>
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
								<tr  ng-repeat="member in items"  >
								  <td>{{$index+1}}</td>
								  <td>
								  	  <div class="f-thide" style="overflow:hidden;width: 108px;" >
						              	<a href="//music.163.com/#/song?id={{member.songId}}" target="_blank">
						              		{{member.songName}}
						              	</a>
					              	  </div>
								  </td>
								  <td><span ng-class="{'1': 'red', '2': 'blue','3':'yellow'}[member.admireStatus]">{{member.admireStatus|admireStatus}}</span></td>
								  <td>{{member.singer}}</td>
								  <td>
								  	  <div class="f-thide" style="overflow:hidden;width: 108px;" >
						              	<a href="//music.163.com/#/album?id={{member.albumId}}" target="_blank">
						              		{{member.albumName}}
						              	</a>
					              	  </div>
								  </td>
								  <td>{{member.pubTime|date : 'yyyy-MM-dd HH:mm:ss'}}</td>		
								  <td>{{member.type||'--'}}</td>		
								  <td>{{member.version||'--'}}</td>		
								  <td>{{member.style||'--'}}</td>		
								  <td>{{member.copyRight||'--'}}</td>									  
								  <td>	
								  	<button ng-if="member.admireStatus=='1'" class="btn btn-default yyr-default-btn-auto yyr-default-btn" ng-click="songSingleAction(member,'closeSingle')" >关闭赞赏并拉黑</button>
								  	<button ng-if="member.admireStatus=='0'" class="btn btn-default yyr-default-btn-auto yyr-default-btn" ng-click="songSingleAction(member,'openAdmire')">开通赞赏</button>
								  	<button ng-if="member.admireStatus=='3'" class="btn btn-default yyr-default-btn-auto yyr-default-btn" ng-click="songSingleAction(member,'removeBlack')">取消拉黑</button>
								  	<span ng-if="member.admireStatus=='4'" >关闭中</span>
								  	<span ng-if="member.admireStatus=='5'" >开通中</span>								  	
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