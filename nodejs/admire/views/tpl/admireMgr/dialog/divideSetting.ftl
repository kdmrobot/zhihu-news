<script type="text/ng-template" id="divideSetting.ftl">
	<style>		
		#divide-setting  .item-container{
			width:128px;
			margin: auto;
		}
		#divide-setting .item-container-content p{
			background-color: rgba(101, 98, 98, 0.09);
    		padding: 20px 20px;
		}
		#divide-setting .item-container-content input{
			width:40px;
		}
	</style>	
	<div id="divide-setting">
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
			<h4 class="modal-title" id="errorModalLabel">编辑</h4>
		</div>
		<div class="modal-body" ng-cloak >		
			<div class="item-container clearfix">
				<div class="item-container-content">
					<span class=" ">
						分成比例：&nbsp;<input  type="input"  ng-model="rate"></input>&nbsp;%
					</span>
				</div>												
			</div>
			<div class="item-container-content" style="width:478px;margin:20px auto;background-color:#dcdcdc;">
				<p >{{content}}</p>
			</div>												
		</div>
		
		<div class="modal-footer">
			<button type="button" class="btn btn-primary"  ng-click="action()"  ng-class="{true: 'active', false: 'disabled'}[isActive]"  >保存修改并发送私信</button>
			<button type="button" class="btn btn-default"  data-dismiss="modal">取消</button>
		</div>
	</div>
</script >