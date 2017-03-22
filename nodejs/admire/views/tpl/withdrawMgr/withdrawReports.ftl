<script type="text/ng-template" id="withdrawReports.ftl">	
	<div class="clearfix serch-header"  >		
		<div class=" clearfix">
			<input type="month"  ng-modol="month"  id="month"></input>
			<div class=" fr clearfix serch-header-left">		
				<simplesearch></simplesearch>			
			</div>
			<button class="fr" style="margin-right: 20px;margin-top: 5px;" ng-click="exports()">导出excel</button>
		</div>
		
		<div class=" clearfix" style="margin-top:10px;">
			<div class="fl ib" style="">
				<input  type="radio"  ng-click="search('withdraw')"   id="withdraw"   ng-checked="select.withdraw=='sel'"  ><span class="mr25">提现报表</span>		
				<input type="radio"   ng-click="search('income')"  id="income"  ng-checked="select.income=='sel'" ><span >收入报表</span>					
			</div>
			<div  class="fr ib" style="">
				<input  type="radio"  ng-click="search('alipay')"   id="alipay"   ng-checked="select.alipay=='sel'"  ><span class="mr25">支付宝</span>		
				<input type="radio"   ng-click="search('wechart')"  id="wechart"  ng-checked="select.wechart=='sel'" ><span >微信</span>					
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
				              <th style="min-width: 86px;" >User ID</th>	 
				              <th style="min-width: 86px;" >用户名</th>	
				              <th style="min-width: 86px;" >艺人ID</th>
				              <th style="width:128px;">艺人名</th>
				              <th style="width:128px;">真实姓名</th>									 
							  <th  ng-if="payType == 0&&withdraw" >支付宝收款账号</th>
							  <th  ng-if="payType == 0&&withdraw" >支付宝账号实名</th>
							  <th  ng-if="payType == 3&&withdraw">微信收款账号openid</th>
							  <th style="min-width: 86px;"  ng-if="payType == 3&&withdraw" >微信账号昵称</th>
							  <th style="min-width: 86px;"  ng-if="payType == 3&&withdraw" >微信账号实名</th>
							  <!--<th style="width:{{width}};">支付宝账号实名</th> -->							
							  <th ng-if="withdraw" style="min-width: 86px;">本月可提现总额</th>
							  <th ng-if="withdraw" style="min-width: 86px;">本月已提现金额</th>
							  <th ng-if="withdraw" style="min-width: 86px;">当前可提现余额</th>
							  
							  <th ng-if="!withdraw" style="min-width: 86px;">本月赞赏收入</th>
							  <th ng-if="!withdraw" style="min-width: 86px;">本月单曲收入</th>
							  <th ng-if="!withdraw" style="min-width: 86px;">本月电台收入</th>
							  <th ng-if="!withdraw" style="min-width: 86px;">本月专栏收入</th>
							  <th ng-if="!withdraw" style="min-width: 86px;">本月赞赏实际收入</th>
							  <th ng-if="!withdraw" style="min-width: 86px;">本月赞赏手续费</th>
							  
				            </tr>
				            </thead>
				            <tbody>
				            <tr  ng-repeat="member in items"  >
				              <td>{{member.userId}}</td>
				              <td>
				              	<div  class="f-thide" style="overflow:hidden;width: 108px;" >
					              	<a href="//music.163.com/#/user/home?id={{member.userId}}" target="_blank">
					              		{{member.userName}}
					              	</a>
				              	</div>
				              </td>
				              <td>{{member.artistId}}</td>
				              <td>
				              	<div  class="f-thide" style="overflow:hidden;width: 108px;" >
					              {{member.artistName||'--'}}
				              	</div></td>
				              <td>
				              	<div  class="f-thide" style="overflow:hidden;width: 108px;" >
					             {{member.realName}}
				              	</div></td>
				              </td>									
				              <td ng-if="payType == 0&&withdraw" >{{member.aliAccount}}</td>
				              <td ng-if="payType == 0&&withdraw" >{{member.aliRealName}}</td>
				               
				              <td ng-if="payType == 3&&withdraw" >{{member.wechatAccount}}</td>
				              <td ng-if="payType == 3&&withdraw" >{{member.wechatNickName||'--'}}</td>
				              <td ng-if="payType == 3&&withdraw" >{{member.wechatRealName}}</td>
				                
							  <td ng-if="withdraw">
							  	<div  class="f-thide" style="overflow:hidden;width: 108px;" >
							  		{{member.totalIncome}}
							  	</div>
							  </td>				             
							  <td ng-if="withdraw">
							  	<div  class="f-thide" style="overflow:hidden;width: 108px;" >
							  		{{member.totalWithdraw}}
							  	</div>
							  </td>	
							  <td ng-if="withdraw">{{member.canWithdraw}}</td>	
							  
							  <td ng-if="!withdraw">{{member.realIncome}}</td>
							  <td ng-if="!withdraw">{{member.songIncome}}</td>
							  <td ng-if="!withdraw">{{member.djIncome}}</td>
							  <td ng-if="!withdraw">{{member.topicIncome}}</td>
							  <td ng-if="!withdraw">{{member.monthIncome}}</td>
							  <td ng-if="!withdraw">{{member.commisionCharge}}</td>
							  							
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
