<script type="text/ng-template" id="accountBindAplay.html">		
	<div class="modal fade ng-scope in" id="tipsModal" tabindex="-1" role="dialog" aria-labelledby="testModalLabel" aria-hidden="true" style="display: block;">
	    <div class="modal-dialog dialog-center" style="width:{{width}}px;";>
	        <div class="modal-content">
		        <div id="logoutMusician">
					<div class="modal-header .tac">
					  <button type="button" class="close" ng-click="submit('close')" aria-hidden="true">×</button>
					  <h4 class="modal-title" id="myModalLabel">{{title}}</h4>
					</div>
					<div  ng-if="!readonly"  class="modal-body">
					 	<div style="line-hegiht:30px;height:30px;margin-bottom: 15px;">
					 		 支付宝账号
					 		<div style="margin-left: 39px;display: inline-block;"><input style="width: 150px;text-indent: 0.5em;float:none;" ng-model="$parent.aplayAccount"></input></div>
					 	</div>
					 	<div>
					 		 支付宝账号实名
					 		<div style="margin-left: 11px;display: inline-block;"> <input style="width: 150px;text-indent: 0.5em;float:none;" ng-model="$parent.aplayRealAccount"></input></div>
					 	</div>
					</div>			
					<div class="modal-footer">
					  <button ng-if="showActionButton"  type="button" class="btn btn-primary"  ng-class="{true: 'active', false: 'disabled'}[isActive]"  ng-click="submit('submit')">{{actionButton}}</button>
					   <button type="button" class="btn btn-default" ng-click="submit('close')">取消</button>						  
					</div>
				</div>
			</div><!-- /.modal-content -->
	    </div><!-- /.modal -->
	</div>
</script>


<script type="text/ng-template" id="nationalityCountry.html">
	<div class="dropdown-theme1 ib" ng-cloak>
		<div style="margin-left: 10px;" ng-click="show()" >
			<input   disabled="disabled" style="width: 176px;text-indent: 0.5em;float:none;" ng-model="value" ><div class="ib div-b" ng-click="showUl()"><b class="caret" style="margin-left: -12px;"  /></div></input>
		</div>
		<div style="margin-left: 10px;"   ng-mouseleave="close()">
			<ul  ng-show="isShow"  style="width: auto;display:block;line-height:21px;overflow:auto;max-height:176px;" ng-click="selectLi($event,this)" >
				<li ng-repeat="item in data"  id="{{item.id}}"  val="{{item.country}}"class="dropdown-li-hover" style="margin-left: 11px;">{{item.country}}+{{item.id}}</li>			
			</ul>
		</div>
	</div>
</script>

<script type="text/ng-template" id="nationalityIphone.html">
	<div class="dropdown-theme1 ib" ng-cloak>
		<div style="margin-left: 10px;" ng-click="show()" >
			<input   disabled="disabled" style="width: 57px;text-indent: 0.5em;float:none;" ng-model="value" ><div class="ib div-b" ng-click="showUl()"><b class="caret" style="margin-left: -12px;"  /></div></input>
		</div>
		<div style="margin-left: 10px;"   ng-mouseleave="close()">
			<ul  ng-show="isShow"  style="width: auto;display:block;line-height:21px;overflow:auto;max-height:176px;" ng-click="selectLi($event,this)" >
				<li ng-repeat="item in data"  id="{{item.id}}"  class="dropdown-li-hover" style="margin-left: 11px;">{{item.country}}+{{item.id}}</li>			
			</ul>
		</div>
	</div>
</script>

<script type="text/ng-template" id="showPicture.html">
	<div style="position: fixed;height: 100%;width: 100%;top: 1px;left: 1px;z-index: 9999;background-color: rgb(243, 242, 242);">
		<div style="position: absolute;left: 50%;top: 50%;tansform:  -50% -50%;transform: translate(-50%,-50%);z-index: 9999;">
			<div style="position:relative;">
				<div style="float:right;top: -18px;cursor: pointer;" ng-click="close()">
					<div style=" position: absolute;top: -18px;">
						<i class="fa fa-fw fa-close"></i>
					</div>
				</div>				
				<img style="cursor: pointer;" src=""  ng-click="close()" >
			</div>
		</div>
	</div>
</script>

<script type="text/ng-template" id="privateLetter.html">		
	<div class="modal fade ng-scope in" id="tipsModal" tabindex="-1" role="dialog" aria-labelledby="testModalLabel" aria-hidden="true" style="display: block;">
	    <div class="modal-dialog dialog-center" style="width:{{width}}px;";>
	        <div class="modal-content">
		        <div id="logoutMusician">
					<div class="modal-header .tac">
					  <button type="button" class="close" ng-click="submit('close')" aria-hidden="true">×</button>
					  <h4 class="modal-title" id="myModalLabel">{{title}}</h4>
					</div>
					<div  ng-if="!readonly"  class="modal-body">
					  <textarea  id="dialogcontent" style="height: 139px;width: 100%;"   ng-keyup="contentchange($event)" ng-model="$parent.content"></textarea>
					</div>
					<div  ng-if="readonly"  class="modal-body "  style="height:{{height}}px;">
					 	<div >
					 		<span>{{content}}</span>
					 	</div>
					</div>
					<div class="modal-footer">
					  <button ng-if="showActionButton"  type="button" class="btn btn-primary"  ng-class="{true: 'active', false: 'disabled'}[isActive]"  ng-click="submit('submit')">{{actionButton}}</button>
					   <button type="button" class="btn btn-default" ng-click="submit('close')">取消</button>						  
					</div>
				</div>
			</div><!-- /.modal-content -->
	    </div><!-- /.modal -->
	</div>
</script>

<script type="text/ng-template" id="commonDialog.html">		
	<div class="modal fade ng-scope in" id="tipsModal" tabindex="-1" role="dialog" aria-labelledby="testModalLabel" aria-hidden="true" style="display: block;">
	    <div class="modal-dialog dialog-center" style="width:{{width}}">
	        <div class="modal-content">
		        <div id="logoutMusician">
					<div class="modal-header .tac">
					  <button type="button" class="close" data-dismiss="modal" ng-click="submit('close')" aria-hidden="true">×</button>
					  <h4 class="modal-title" id="myModalLabel">{{title}}</h4>
					</div>
					<div class="modal-body">
					  {{content}}
					</div>
					<div class="modal-footer">
					  <button type="button" class="btn btn-primary" ng-click="submit()">我知道了</button>					  
					</div>
				</div>
			</div><!-- /.modal-content -->
	    </div><!-- /.modal -->
	</div>
</script>
<script type="text/ng-template" id="simpleSearch.html">		
	<div class="">
		<div class="dropdown" >				
				<input    ng-if="valid =='valid-number'"   ng-keypress="enter($event)"    placeholder="输入艺人id"  ng-model="$parent.search" valid-number   class="form-control" 
				style="display: inline-block;width: 79%;margin-right: -15px;width:340px;height:35px;">
			
				<input  ng-if="valid =='simple'"    ng-keypress="enter($event)"  ng-model="$parent.search"   placeholder=""  class="form-control" 
					style="display: inline-block;width: 79%;margin-right: -15px;width:340px;height:35px;">
			<div ng-click="post($event)" class="search-btn-simple">
				<div style="position: relative;height:100%;width:100%;
						justify-content: center;display: flex;justify-content: center;align-items: center;">
					<span >搜索</span>
				</div>
			</div>					
		</div>
	</div>
</script>

<script type="text/ng-template" id="simpleSearch_number.html">		
	<div class="col-md-12">
		<div class="dropdown" style="width: 80%;margin-top:20px;">			
			<div style="display:inline-block;position: relative;width: 51px;height: 31px;left: -40px;
				top: 1px;background-color:#eae6e6;border-left: 1px solid #ccc0c0;;">
				<div style="position: relative;height:100%;width:100%;
						justify-content: center;display: flex;justify-content: center;align-items: center;">
					<span >查询</span>
				</div>
			<div>
		</div>
	</div>
</script>
<script type="text/ng-template" id="logger.html">

	<div class=" fr right-content  " style="overflow:auto;max-height:450px;">
		
	</div>
</script>
<script id="t2" type="text/template">
    <%_.each(datas, function(item) {%>
            <div class="log-item">
                <li><%=item.auditTime%></li>
                <li><%=item.auditName%></li>
                <%_.each(item.opDetail, function(val , key, arr) {%>
                	<li><%=nameMap[key]%>:<%=val%></li>
                <%});%>
                <li ><%=item.auditResult%>(<%=item.auditUser%>)</li>
            </div>                            
    <%});%>
</script>

<script type="text/ng-template" id="dropdown.html">
	<div class="dropdown-theme1 ib" ng-cloak>
		<div style="margin-left: 10px;" ng-click="show()" >
			<input   disabled="disabled" style="width: 400px;text-indent: 1em;" ng-model="value" ><div class="ib div-b" ng-click="showUl()"><b class="caret" style="margin-left: -12px;"  /></div></input>
		</div>
		<div style="margin-left: 10px;"   ng-mouseleave="close()">
			<ul  ng-show="isShow"  style="width: 400px;display:block;line-height:21px;" ng-click="selectLi($event,this)" >
				<li ng-repeat="item in data"  id="{{item.id}}"  class="dropdown-li-hover" style="margin-left: 11px;">{{item.tip}}</li>			
			</ul>
		</div>

	</div>
</script>

<script type="text/ng-template" id="search.html">
	<div   class="row  box-body">
		<div class="col-md-12">
			<div class="col-md-2 mylabel">
				<label>查询</label>
			</div>
			<div class="col-md-10">
				<div class="dropdown" style="width: 80%;">
					<input class="form-control" name="searchInput" id="searchSong" ng-click="onClick($event,'input')"  placeholder="ID/单曲/专辑/歌手"
						 ng-model="inputValue"
						style="display: inline-block; width: 100%; margin-right: -15px;">
					<div style="display: inline-block;" ng-click="drop()">
						<span class="caret"></span></input>
					</div>
					<div class="myouter" ng-show="showList"  >
						<div ng-if="searchList.artist.length">
							<h3 class="myhd">
								<i class="my_i" style="background-position: -49px -300px;"></i><em
									class="myem">歌手</em>
							</h3>
							<ul ng-repeat='member in searchList.artist' class="myul">

								<li><a id="{{member.id}}" type="artistid"
									style="display: block"
									style="background-position: -49px -300px;"
									class="mya s-fc0 f-thide xtag" data-type="">{{member.name}}
								</a></li>
							</ul>
						</div>

					</div>
				</div>
			</div>
		</div>
	</div>
</script>
