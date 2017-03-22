
(function (angular) {
  'use strict';
  function getCountry(){
        	 return [
			        ["China", "中国", "CN", 86],
			        ["Hongkong", "中国香港", "HK", 852],
			        ["Macao", "中国澳门", "MO", 853],
			        ["Taiwan", "中国台湾", "TW", 886],
			        ["Japan", "日本", "JP", 81],
			        ["Korea", "韩国", "KR", 82],
			        ["United Kingdom", "英国", "GB", 44],
			        ["United States of America", "美国", "US", 1],
			        ["Canada", "加拿大", "CA", 1],
			        ["France", "法国", "FR", 33],
			        ["Finland", "芬兰", "FI", 358],
			        ["Germany", "德国", "DE", 49],
			        ["Netherlands", "荷兰", "NL", 31],
			        ["Italy", "意大利", "IT", 39],
			        ["India", "印度", "IN", 91],
			        ["Thailand", "泰国", "TH", 66],
			        ["NewZealand", "新西兰", "NZ", 64],
			        ["Portugal", "葡萄牙", "PT", 351],
			        ["Russia", "俄罗斯", "RU", 7],
			        ["Singapore", "新加坡", "SG", 65],
			        ["Malaysia", "马来西亚", "MY", 60],
			        ["Spain", "西班牙", "ES", 34],
			        ["South Africa", "南非", "ZA", 27],
			        ["Sweden", "瑞典", "SE", 46],
			        ["Angola", "安哥拉", "AO", 244],
			        ["Afghanistan", "阿富汗", "AF", 93],
			        ["Albania", "阿尔巴尼亚", "AL", 355],
			        ["Algeria", "阿尔及利亚", "DZ", 213],
			        ["Andorra", "安道尔共和国", "AD", 376],
			        ["Anguilla", "安圭拉岛", "AI", 1264],
			        ["Antigua and Barbuda", "安提瓜和巴布达", "AG", 1268],
			        ["Argentina", "阿根廷", "AR", 54],
			        ["Armenia", "亚美尼亚", "AM", 374],
			        ["Ascension", "阿森松", "AC", 247],
			        ["Australia", "澳大利亚", "AU", 61],
			        ["Austria", "奥地利", "AT", 43],
			        ["Azerbaijan", "阿塞拜疆", "AZ", 994],
			        ["Bahamas", "巴哈马", "BS", 1242],
			        ["Bahrain", "巴林", "BH", 973],
			        ["Bangladesh", "孟加拉国", "BD", 880],
			        ["Barbados", "巴巴多斯", "BB", 1246],
			        ["Belarus", "白俄罗斯", "BY", 375],
			        ["Belgium", "比利时", "BE", 32],
			        ["Belize", "伯利兹", "BZ", 501],
			        ["Benin", "贝宁", "BJ", 229],
			        ["BermudaIs.", "百慕大群岛", "BM", 1441],
			        ["Bolivia", "玻利维亚", "BO", 591],
			        ["Botswana", "博茨瓦纳", "BW", 267],
			        ["Brazil", "巴西", "BR", 55],
			        ["Brunei", "文莱", "BN", 673],
			        ["Bulgaria", "保加利亚", "BG", 359],
			        ["Burkina-faso", "布基纳法索", "BF", 226],
			        ["Burma", "缅甸", "MM", 95],
			        ["Burundi", "布隆迪", "BI", 257],
			        ["Cameroon", "喀麦隆", "CM", 237],
			        ["Cayman Is.", "开曼群岛", "KY", 1345],
			        ["Central African Republic", "中非共和国", "CF", 236],
			        ["Chad", "乍得", "TD", 235],
			        ["Chile", "智利", "CL", 56],
			        ["Colombia", "哥伦比亚", "CO", 57],
			        ["Congo", "刚果", "CG", 242],
			        ["Cook Is.", "库克群岛", "CK", 682],
			        ["Costa Rica", "哥斯达黎加", "CR", 506],
			        ["Cuba", "古巴", "CU", 53],
			        ["Cyprus", "塞浦路斯", "CY", 357],
			        ["Czech Republic", "捷克", "CZ", 420],
			        ["Denmark", "丹麦", "DK", 45],
			        ["Djibouti", "吉布提", "DJ", 253],
			        ["Dominica Rep.", "多米尼加共和国", "DO", 1890],
			        ["Ecuador", "厄瓜多尔", "EC", 593],
			        ["Egypt", "埃及", "EG", 20],
			        ["EISalvador", "萨尔瓦多", "SV", 503],
			        ["Estonia", "爱沙尼亚", "EE", 372],
			        ["Ethiopia", "埃塞俄比亚", "ET", 251],
			        ["Fiji", "斐济", "FJ", 679],
			        ["French Guiana", "法属圭亚那", "GF", 594],
			        ["Gabon", "加蓬", "GA", 241],
			        ["Gambia", "冈比亚", "GM", 220],
			        ["Georgia", "格鲁吉亚", "GE", 995],
			        ["Ghana", "加纳", "GH", 233],
			        ["Gibraltar", "直布罗陀", "GI", 350],
			        ["Greece", "希腊", "GR", 30],
			        ["Grenada", "格林纳达", "GD", 1809],
			        ["Guam", "关岛", "GU", 1671],
			        ["Guatemala", "危地马拉", "GT", 502],
			        ["Guinea", "几内亚", "GN", 224],
			        ["Guyana", "圭亚那", "GY", 592],
			        ["Haiti", "海地", "HT", 509],
			        ["Honduras", "洪都拉斯", "HN", 504],
			        ["Hungary", "匈牙利", "HU", 36],
			        ["Iceland", "冰岛", "IS", 354],
			        ["Indonesia", "印度尼西亚", "ID", 62],
			        ["Iran", "伊朗", "IR", 98],
			        ["Iraq", "伊拉克", "IQ", 964],
			        ["Ireland", "爱尔兰", "IE", 353],
			        ["Israel", "以色列", "IL", 972],
			        ["IvoryCoast", "科特迪瓦", "CI", 225],
			        ["Jamaica", "牙买加", "JM", 1876],
			        ["Jordan", "约旦", "JO", 962],
			        ["Kampuchea (Cambodia )", "柬埔寨", "KH", 855],
			        ["Kazakstan", "哈萨克斯坦", "KZ", 327],
			        ["Kenya", "肯尼亚", "KE", 254],
			        ["Kuwait", "科威特", "KW", 965],
			        ["Kyrgyzstan", "吉尔吉斯坦", "KG", 331],
			        ["Laos", "老挝", "LA", 856],
			        ["Latvia", "拉脱维亚", "LV", 371],
			        ["Lebanon", "黎巴嫩", "LB", 961],
			        ["Lesotho", "莱索托", "LS", 266],
			        ["Liberia", "利比里亚", "LR", 231],
			        ["Libya", "利比亚", "LY", 218],
			        ["Liechtenstein", "列支敦士登", "LI", 423],
			        ["Lithuania", "立陶宛", "LT", 370],
			        ["Luxembourg", "卢森堡", "LU", 352],
			        ["Madagascar", "马达加斯加", "MG", 261],
			        ["Malawi", "马拉维", "MW", 265],
			        ["Maldives", "马尔代夫", "MV", 960],
			        ["Mali", "马里", "ML", 223],
			        ["Malta", "马耳他", "MT", 356],
			        ["Mariana Is", "马里亚那群岛", "MP", 1670],
			        ["Martinique", "马提尼克", "MQ", 596],
			        ["Mauritius", "毛里求斯", "MU", 230],
			        ["Mexico", "墨西哥", "MX", 52],
			        ["Moldova, Republic of", "摩尔多瓦", "MD", 373],
			        ["Monaco", "摩纳哥", "MC", 377],
			        ["Mongolia", "蒙古", "MN", 976],
			        ["Montserrat Is", "蒙特塞拉特岛", "MS", 1664],
			        ["Morocco", "摩洛哥", "MA", 212],
			        ["Mozambique", "莫桑比克", "MZ", 258],
			        ["Namibia", "纳米比亚", "NA", 264],
			        ["Nauru", "瑙鲁", "NR", 674],
			        ["Nepal", "尼泊尔", "NP", 977],
			        ["Netheriands Antilles", "荷属安的列斯", "AN", 599],
			        ["Nicaragua", "尼加拉瓜", "NI", 505],
			        ["Niger", "尼日尔", "NE", 227],
			        ["Nigeria", "尼日利亚", "NG", 234],
			        ["North Korea", "朝鲜", "KP", 850],
			        ["Norway", "挪威", "NO", 47],
			        ["Oman", "阿曼", "OM", 968],
			        ["Pakistan", "巴基斯坦", "PK", 92],
			        ["Panama", "巴拿马", "PA", 507],
			        ["Papua New Cuinea", "巴布亚新几内亚", "PG", 675],
			        ["Paraguay", "巴拉圭", "PY", 595],
			        ["Peru", "秘鲁", "PE", 51],
			        ["Philippines", "菲律宾", "PH", 63],
			        ["Poland", "波兰", "PL", 48],
			        ["French Polynesia", "法属玻利尼西亚", "PF", 689],
			        ["PuertoRico", "波多黎各", "PR", 1787],
			        ["Qatar", "卡塔尔", "QA", 974],
			        ["Reunion", "留尼旺", "RE", 262],
			        ["Romania", "罗马尼亚", "RO", 40],
			        ["Saint Lueia", "圣卢西亚", "LC", 1758],
			        ["Saint Vincent", "圣文森特岛", "VC", 1784],
			        ["Samoa Eastern", "东萨摩亚(美)", "AS", 684],
			        ["Samoa Western", "西萨摩亚", "WS", 685],
			        ["San Marino", "圣马力诺", "SM", 378],
			        ["Sao Tome and Principe", "圣多美和普林西比", "ST", 239],
			        ["Saudi Arabia", "沙特阿拉伯", "SA", 966],
			        ["Senegal", "塞内加尔", "SN", 221],
			        ["Seychelles", "塞舌尔", "SC", 248],
			        ["Sierra Leone", "塞拉利昂", "SL", 232],
			        ["Slovakia", "斯洛伐克", "SK", 421],
			        ["Slovenia", "斯洛文尼亚", "SI", 386],
			        ["Solomon Is", "所罗门群岛", "SB", 677],
			        ["Somali", "索马里", "SO", 252],
			        ["Sri Lanka", "斯里兰卡", "LK", 94],
			        ["St.Lucia", "圣卢西亚", "LC", 1758],
			        ["St.Vincent", "圣文森特", "VC", 1784],
			        ["Sudan", "苏丹", "SD", 249],
			        ["Suriname", "苏里南", "SR", 597],
			        ["Swaziland", "斯威士兰", "SZ", 268],
			        ["Switzerland", "瑞士", "CH", 41],
			        ["Syria", "叙利亚", "SY", 963],
			        ["Tajikstan", "塔吉克斯坦", "TJ", 992],
			        ["Tanzania", "坦桑尼亚", "TZ", 255],
			        ["Togo", "多哥", "TG", 228],
			        ["Tonga", "汤加", "TO", 676],
			        ["Trinidad and Tobago", "特立尼达和多巴哥", "TT", 1809],
			        ["Tunisia", "突尼斯", "TN", 216],
			        ["Turkey", "土耳其", "TR", 90],
			        ["Turkmenistan", "土库曼斯坦", "TM", 993],
			        ["Uganda", "乌干达", "UG", 256],
			        ["Ukraine", "乌克兰", "UA", 380],
			        ["United Arab Emirates", "阿拉伯联合酋长国", "AE", 971],
			        ["Uruguay", "乌拉圭", "UY", 598],
			        ["Uzbekistan", "乌兹别克斯坦", "UZ", 233],
			        ["Venezuela", "委内瑞拉", "VE", 58],
			        ["Vietnam", "越南", "VN", 84],
			        ["Yemen", "也门", "YE", 967],
			        ["Yugoslavia", "南斯拉夫", "YU", 381],
			        ["Zimbabwe", "津巴布韦", "ZW", 263],
			        ["Zaire", "扎伊尔", "ZR", 243],
			        ["Zambia", "赞比亚", "ZM", 260]
		    	];
        	}
            
  angular.module('MyDirect', ['Batch','Routes'])
  .directive('onFinishRender',['$timeout', '$parse', function ($timeout, $parse) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            if (scope.$last === true) {
                $timeout(function () {
                    scope.$emit('ngRepeatFinished'); //事件通知
                        var fun = scope.$eval(attrs.onFinishRender);
                        if(fun && typeof(fun)=='function'){  
                            fun();  //回调函数
                        }  
                });
            }
        }
    }
   }])
  .directive('simplesearch', ['$http',function ($http) {
  	return {
        restrict: 'E',
        templateUrl:'simpleSearch.html',									
        replace: true,
        scope : {
             validtype:'@'    
        },
        controller: function($scope){
        	var unwatch = [];
        	//属性监听 主要监听 ajax回调后的赋值
        	 unwatch.push($scope.$watchCollection('input',function(newVal , oldVal){				
	        		if(!(newVal === oldVal)){
						$scope.showList = true;
	        			$scope.batchDate({
							s:newVal
						});       			
	        		}
        		})
        	);
        	//销毁
        	$scope.$on('$destroy', function () {
	            angular.forEach(unwatch, function (val) {
	              val();
	            });
            });
        	
        },
        link : function($scope, element, attrs) {
        	if($scope.validtype){
        		$scope.valid = $scope.validtype;
        	}else{
        		$scope.valid ='simple';
        	}		
			$scope.enter = function(ev){
				if (ev.keyCode == 13) {
					if($(ev.target).data('valid')!=undefined){
						if($(ev.target).data('valid')=='true'){
							$scope.$emit('changeItem',{search:$.trim($scope.search)});
						}
						return ;
					}
					
					$scope.$emit('changeItem',{search:$.trim($scope.search)});
					
				} 			
			}			
			$scope.post = function(er){
				var target = $('.dropdown').has(er.target).find('input')[0];
				$scope.enter({keyCode:13,target:target});			
			}
        }
    };
  }])
  .directive('nationalityCountry', ['$http',function ($http) {
	  return {
		  restrict: 'E',
		  scope:{
            country:'='
          },
		  templateUrl:'nationalityCountry.html',
		  replace: true,		 
		  controller: function($scope){
			 
		  },
		  link : function($scope, element, attrs) {	  	    
        	var value = $scope.country;
            var dataList =[];
        	getCountry().forEach(function(val , key ,arr){
        		dataList.push({
        			id:val[3],
        			enCountry:[0],
        			country:val[1]
        		});
        	})            
            $scope.data = dataList;
            $scope.value = value;
			$scope.isShow = false;							  
			$scope.showUl=function(querry){
				$scope.isShow=!$scope.isShow;
			}
			$scope.selectLi=function(e){
			  var id = e.target.id;
			  var index = _.findIndex($scope.data,{id:id*1});			  	 
			  $scope.$emit('selectNationalityCountry',{countryInfo:$scope.data[index]})			  
			  $scope.value = $scope.data[index].country;
			  $scope.isShow=false;
			  }				
			  $scope.close = function(){
			  	$scope.isShow = false;			  
			  }
			  $scope.show = function(){
			  	$scope.isShow = true;			  
			  }
		  }
	  };
  }])
  .directive('nationalityIphone', ['$http',function ($http) {
	  return {
		  restrict: 'E',
		  scope:{
            countryid:'='
          },
		  templateUrl:'nationalityIphone.html',
		  replace: true,		 
		  controller: function($scope){
			 
		  },
		  link : function($scope, element, attrs) {	  	    
        	var value = $scope.countryid;
            var dataList =[];
        	getCountry().forEach(function(val , key ,arr){
        		dataList.push({
        			id:val[3],
        			country:val[1]
        		});
        	})            
            $scope.data = dataList;
            $scope.value = value;
			$scope.isShow = false;							  
			$scope.showUl=function(querry){
				$scope.isShow=!$scope.isShow;
			}
			$scope.selectLi=function(e){
			  var id = e.target.id;
			  var index = _.findIndex($scope.data,{id:id*1});			  	 
			  $scope.$emit('selectNationalityIphone',{countryInfo:$scope.data[index]})			  
			  $scope.value = id;
			  $scope.isShow=false;
			  }				
			  $scope.close = function(){
			  	$scope.isShow = false;			  
			  }
			  $scope.show = function(){
			  	$scope.isShow = true;			  
			  }
		  }
	  };
  }])
  .directive('dropdown', ['$http',function ($http) {
	  return {
		  restrict: 'E',
		  scope:{
            source:'=',
            selectlist:'=' 
          },
		  templateUrl:'dropdown.html',
		  replace: true,		 
		  controller: function($scope){
			 
		  },
		  link : function($scope, element, attrs) {
		  	 if($scope.selectlist){
		  		$scope.data = $scope.selectlist;
		  	 }else{
		  	    if($scope.source.applytype=='0'){//申请
		  	   		var str="您好，您入驻的音乐人账号未通过审核。";
                    $scope.data = [
                        {id:0,tip:'默认',text:str+'我们目前不接受录音或演唱品质影响试听的，且格式在320kbs以下的作品。我们对音乐人的作品要求是：必须是自己演唱或者参与创作的音乐作品，作品经历完整的词曲、编曲、录音、混缩的过程，音质在320kb以上。 '},
                        {id:1,tip:'1.音质差',text:str+'原因：音质未达到收录要求。我们不收录录音或演唱品质影响试听的作品。我们对音乐人的作品要求是：必须是自己演唱或者参与创作的音乐作品，作品经历完整的词曲、编曲、录音、混缩的过程，音质在320kb以上。'},
                        {id:2,tip:'2.语言类节目',text:str+'原因：语言类节目。我们不收录语言类作品。请上传至您的个人电台。'},
                        {id:3,tip:'3.电子混音作品，不确定是否是自己混音的',text:str+'原因：请确认上传的是否为自己混音改编的电音作品，并请将分轨文件发送到邮箱：yc163music@163.com 我们对音乐人的作品要求是：必须是自己演唱或者参与创作的音乐作品，作品经历完整的词曲、编曲、录音、混缩的过程，音质在320kb以上。'},
                        {id:4,tip:'4.3D环绕电子音乐',text:str+'原因：3D环绕电子音乐，我们不收录3D环绕电子改编作品。我们对音乐人的作品要求是：必须是自己演唱或者参与创作的音乐作品，作品经历完整的词曲、编曲、录音、混缩的过程，音质在320kb以上。'},
                        {id:5,tip:'5.作品不完整的',text:str+'原因：我们不收录音乐片段或不完整的音乐作品。我们对音乐人的作品要求是：必须是自己演唱或者参与创作的音乐作品，作品经历完整的词曲、编曲、录音、混缩的过程，音质在320kb以上。'},
                        {id:6,tip:'6.拿别人的歌曲申请（乱来）',text:str+'原因：非本人作品 。我们对音乐人的作品要求是：必须是自己演唱或者参与创作的音乐作品，作品经历完整的词曲、编曲、录音、混缩的过程，音质在320kb以上。'},
                        {id:7,tip:'7.作品很差的',text:str+'原因：音乐作品质量未达到我们收录的标准，建议可以上传到个人电台,待作品成熟后再来申请音乐人。我们对音乐人的作品要求是：必须是自己演唱或者参与创作的音乐作品，作品经历完整的词曲、编曲、录音、混缩的过程，音质在320kb以上。'},
                        {id:8,tip:'8.公司及团队申请',text:str+'原因：我们暂不接受公司及团体账号的音乐人申请，可以邀请旗下音乐人以个人名义申请。感谢您对云音乐的支持。'},
                        {id:9,tip:'9.资料不完整 ',text:str+'原因：个人资料不完整。请您补充上传个人头像并绑定微博或其他个人账号，以便确认身份。资料补充完整后可拿重新申请。我们对音乐人的作品要求是：必须是自己演唱或者参与创作的音乐作品，作品经历完整的词曲、编曲、录音、混缩的过程，音质在320kb以上。'},
                        {id:10,tip:'10.翻唱作品',text:str+' 您申请的音乐人账号“”未通过审核。翻唱作品建议上传到个人电台，个人电台有很好的翻唱氛围可以帮您积累人气，待您有原创作品时欢迎再来申请音乐人。音乐人的入驻作品要求是：必须是本人原创（参与词、曲、编曲创作）的音乐作品，且作品经历完整的词曲、编曲、录音、混缩的过程。'},
                        {id:11,tip:'11,认领，如不能确定是音乐人本人的话',text:str+'您提供的身份证信息与歌手信息不符，我们只接受音乐人本人的认领。'}
                    ];
                }else{
                	var str="您好，您认领的音乐人账号未通过审核。";
                    $scope.data = [
                        {id:0,tip:'默认',text:str+'您提供的身份证信息与歌手信息不符，我们只接受音乐人本人的认领。'},
                        {id:1,tip:'1.音质差',text:str+'原因：音质未达到收录要求。我们不收录录音或演唱品质影响试听的作品。我们对音乐人的作品要求是：必须是自己演唱或者参与创作的音乐作品，作品经历完整的词曲、编曲、录音、混缩的过程，音质在320kb以上。'},
                        {id:2,tip:'2.语言类节目',text:str+'原因：语言类节目。我们不收录语言类作品。请上传至您的个人电台。'},
                       // {id:3,tip:'3.电子混音作品，不确定是否是自己混音的',text:str+'原因：请确认上传的是否为自己混音改编的电音作品，并请将分轨文件发送到邮箱：yc163music@163.com 我们对音乐人的作品要求是：必须是自己演唱或者参与创作的音乐作品，作品经历完整的词曲、编曲、录音、混缩的过程，音质在320kb以上。'},
                        {id:3,tip:'3.3D环绕电子音乐',text:str+'原因：3D环绕电子音乐，我们不收录3D环绕电子改编作品。我们对音乐人的作品要求是：必须是自己演唱或者参与创作的音乐作品，作品经历完整的词曲、编曲、录音、混缩的过程，音质在320kb以上。'},
                        {id:4,tip:'4.作品不完整的',text:str+'原因：我们不收录音乐片段或不完整的音乐作品。我们对音乐人的作品要求是：必须是自己演唱或者参与创作的音乐作品，作品经历完整的词曲、编曲、录音、混缩的过程，音质在320kb以上。'},
                        {id:5,tip:'5.拿别人的歌曲申请（乱来）',text:str+'原因：非本人作品 。我们对音乐人的作品要求是：必须是自己演唱或者参与创作的音乐作品，作品经历完整的词曲、编曲、录音、混缩的过程，音质在320kb以上。'},
                        {id:6,tip:'6.作品很差的',text:str+'原因：音乐作品质量未达到我们收录的标准，建议可以上传到个人电台,待作品成熟后再来申请音乐人。我们对音乐人的作品要求是：必须是自己演唱或者参与创作的音乐作品，作品经历完整的词曲、编曲、录音、混缩的过程，音质在320kb以上。'},
                        {id:7,tip:'7.公司及团队申请',text:str+'原因：我们暂不接受公司及团体账号的音乐人申请，可以邀请旗下音乐人以个人名义申请。感谢您对云音乐的支持。'},
                        {id:8,tip:'8.资料不完整 ',text:str+'原因：个人资料不完整。请您补充上传个人头像并绑定微博或其他个人账号，以便确认身份。资料补充完整后可拿重新申请。我们对音乐人的作品要求是：必须是自己演唱或者参与创作的音乐作品，作品经历完整的词曲、编曲、录音、混缩的过程，音质在320kb以上。'}
                     ];
                }
		  	  }
              $scope.$emit('select',{content:$scope.data[0]});
              $scope.value = $scope.data[0].tip;
			  $scope.isShow = false;							  
			  $scope.showUl=function(querry){
				  $scope.isShow=!$scope.isShow;
			  }
			  $scope.selectLi=function(e){
			  	 var id = e.target.id;
			  	 var index = _.findIndex($scope.data,{id:id*1});
			  	 
			  	  $scope.$emit('select',{content:$scope.data[index]})
			  
				  $scope.value = e.target.innerHTML;
				  $scope.isShow=false;
			  }
				
			  $scope.close = function(){
			  	$scope.isShow = false;			  
			  }
			  $scope.show = function(){
			  	$scope.isShow = true;			  
			  }
		  }
	  };
  }])
  .directive('logger', ['$http','$location','$filter','batch',function ($http,$location,$filter,batch) {
  	
  	  var nameMap = {
  	  		origin:"老艺人名",
  	  		_new:"新艺人名",
  	  		name:"专辑名",
  	  		pubtime:"发行时间",
  	  		style:"风格",
  	  		songname:"歌曲名",
  	  		ablumname:"专辑名",
  	  		oldname:"老专辑名",
  	  		newname:"新专辑名",
  	  		type:"专辑风格",
  	  		cover:"封面picId",
  	  		style:"风格",
  	  		pubtime:"发行时间",
  	  		oldsongname:"老歌曲名",
  	  		newsongname:"新歌曲名",
  	  		artistname:"艺人名",
  	  		reson:"理由",
  	  		image:"头像",
  	  		gender:"性别",
  	  		location:"地区",
  	  		company:"公司",
  	  		desc:"简介",
  	  		cellphone:"手机号",
  	  		email:"邮箱"
  	  };  	
	  var opType =[
	  	{key:0,content:[],name:'入驻审核'},
	  	{key:1,content:[],name:'认领审核'},
	  	{key:3,content:['orign','new'],name:'艺人名审核'},
	  	{key:4,content:['name','pubtime','style','desc'],name:'专辑审核'},
	  	{key:5,content:['songname','ablumname'],name:'上传歌曲审核'},
	  	{key:8,content:['oldname','newname','type','cover','stype','pubtime','desc'],name:'专辑资料审核'},
	  	{key:9,content:['oldsongname','newsongname','artistname','lyric','reason'],name:'歌曲资料审核'},
	  	{key:10,content:['image','gender','location','style','company','desc','cellphone','email'],name:'艺人资料审核'},
	  	{key:11,content:['songname','ablumname'],name:'替换音频审核'}
	  ];
	  // "opType":5//操作类型；0-入驻审核 1-认领审核 2-歌词审核 3-艺人名审核 4-专辑审核 5-上传歌曲审核 6-音乐人上下线审核 7-音乐人审核审核 8-专辑资料审核 9-歌曲资料审核 10-艺人资料审核 11-替换音频审核
	  return {
		  restrict: 'ACE',
		  scope:{
            posttype:'@'
          },
		  templateUrl:'logger.html',
		  replace: true,
		  scope : {

		  },
		  controller: function($scope){
			 
		  },
		  link : function($scope, element, attrs) {
		  	  var offset = 0;
		  	  var limit = 20;
		  	  var id = attrs.id*1;
		  	  var type =attrs.posttype*1;
		  	  var filter = $filter('date');
		  	  var location = $location;		
		  	  var param ={
			 		id:id,
			 		type :type,
			 		offset:0,
			 		limit:20
			 	};
		      function debounce(func, wait, immediate) {
			      var timeout;
			      return function() {
				      var context = this, args = arguments;
				        var later = function() {
				            timeout = null;
				            if (!immediate) func.apply(context, args);
				        };
				        var callNow = immediate && !timeout;
				        clearTimeout(timeout);
				        timeout = setTimeout(later, wait);
				        if (callNow) func.apply(context, args);
				  };
			  };			
			 function  getTemplate(){
			     var temp ='<div class="log-item">'+
							'<p style="">2016-07-16 12:00</p>'+
							'<ul>修改专辑《阿瓦达》信息</br>名称：卢旺达大饭店</br>歌手：哎嘿</br>歌词：惺惺惜惺惺想</ul>'+
							'<ul>审核通过(hzwanye)</ul>'+	
						'</div>';	
				return temp;
			 }						 
			 function getDatas(data){
			 	var result = data.result.logs;
					if(result.length<=0)return ;
					var datas =[];
					_.each(result,function(val ,key ,arr){
						var obj ={};
						obj.auditTime = filter(val.auditTime,'yyyy-MM-dd HH:MM:ss');
						obj.auditUser = val.auditUser;
						obj.auditResult = val.auditResult;
						var index = _.findIndex(opType,{key:val.opType});
						obj.auditName = opType[index].name;
						datas.push(obj);
						var opDetail = obj.opDetail ={};
						var content = opType[index].content;
						var orignOpDetail = JSON.parse(val.opDetail);
						if(content.length>0){
							_.each(content,function(val ,key ,arr){
								if(orignOpDetail.hasOwnProperty(val)){
									if(val == 'new'){
										opDetail[_new] = orignOpDetail[val];
									}else{
										if(val =='pubtime'){
											opDetail[val] =  filter(orignOpDetail[val],'yyyy-MM-dd HH:MM:ss');
										}else{
											opDetail[val] = orignOpDetail[val];
										}
									}
								}
							})
						}
					})
					return datas;
			 }			 			 
			 function batchItem(){			 				 	
			 	batch.logs.getLog(param).then(function(data){			 		
			 		var date =  filter(new Date(),'yyyy-MM-dd HH:MM:ss');
					if(data){
						param.offset+=10;
						var compiled = _.template($("#t2").html());
						$(".right-content ").append(compiled({
							datas:getDatas(data),
							nameMap:nameMap
						}));				 		
					}
				});
				 
			 }
			 setTimeout(function(){
			 	 batchItem();
			 },500)			
			 
			 var callback = debounce(function(){
				  var  dom = $(this);
				  var viewHeight = $(this).height();
				  var contentHeight = $(this)[0].scrollHeight;
			      var scrollTop = $(this).scrollTop();   
			      if(contentHeight  - scrollTop - viewHeight<40){
			    	console.log("add  once");
			    	dom.append(batchItem());
			      }
			 },500);			
			 $(".right-content").scroll(callback);	  		
		  }
	  };
  }]) 
  .directive('hello', ['$http',function ($http) {
  	return {
        restrict: 'E',
        templateUrl:'search.html',									
        replace: true,
        scope : {
                 
        },
        controller: function($scope){
        	var unwatch = [];
        	//属性监听 主要监听 ajax回调后的赋值
        	 unwatch.push($scope.$watchCollection('input',function(newVal , oldVal){				
	        		if(!(newVal === oldVal)){
						$scope.showList = true;
	        			$scope.batchDate({
							s:newVal
						});       			
	        		}
        		})
        	);
        	//销毁
        	$scope.$on('$destroy', function () {
	            angular.forEach(unwatch, function (val) {
	              val();
	            });
            });       	
        },
        link : function($scope, element, attrs) {
			$scope.showList = false;
			$scope.searchList ={
				artist:[{
					id:44,name:"haha"
				},{
					id:66,name:"大"
				}]
			};				
			$scope.batchDate =function(querry){
				$scope.showList=true;
				return;
				$http({
					method :'GET',
					//url:'api/search/get',
					url:'/api/search/get',
					params : querry
				}).then(function (data) {
				});
			}
			$scope.onClick=function(e,type){
				switch(type){
					case 'input':
						$scope.showList = true;
				}

			}
			//在input框 获得焦点的时候 设置mouseleave事件
			$scope.focusA = null; //当前获得active的元素
			$scope.Interval = null;
			$scope.focus =null;//当前元素的位置
			$scope.on = false;//按下按钮没有放开时为 on
			$(".myouter").on('mouseleave',function(e){
				$scope.showList = false;
				$scope.$apply();
			})
			.on('click','li',function(e){
				if(e.target.nodeName !="A"){
					e.target = e.target.getElementsByTagName('A')[0];
				}
				$scope.inputValue = $.trim(e.target.innerHTML);
				$scope.showList = false;
				if(e.target.nodeName!="A")e.target =e.target.getElementsByTagName('A')[0];
				var input = $('.dropdown').has($(e.target)).find('input');
				input.focus();
				$scope.$apply();
			});

			$("[name='searchInput']").on('keydown',function(e){
				$scope.domList = $(".myouter").find('li');

				if($scope.on ==true) return ;
				var keyCode = e.keyCode;
				if(keyCode == 13&&$(".myouter").is(':hidden')==false){
					$(".myouter").find('li.selected').click();
				}
				if((keyCode == 38||keyCode == 40)&&!$(".myouter").is(':hidden')){
					var domList = $scope.domList;
					if(domList.length<=0) return ;
					$scope.on =true;
					if(keyCode == 38){
						if($scope.focusA){
							$scope.focusA.removeClass('selected');
						}
						if($scope.focus==null){
							$scope.focus =domList.length-1;
						}else{
							--$scope.focus;
						}
						if($scope.focus == -1)$scope.focus=domList.length;
						$scope.focusA = $(domList[$scope.focus]).addClass('selected');

					}
					if(keyCode == 40){
						if($scope.focusA){
							$scope.focusA.removeClass('selected');
						}
						if($scope.focus==null){
							$scope.focus = 0;
						}else{
							++$scope.focus;
						}
						if($scope.focus == domList.length)$scope.focus=-1;
						$scope.focusA = $(domList[$scope.focus]).addClass('selected');

					}

					clearInterval($scope.Interval);
					$scope.Interval = setInterval(function(){
						if($scope.focusA){
							$scope.focusA.removeClass('selected');
						}

						if(keyCode == 38){
							--$scope.focus;
							if($scope.focus == -1)$scope.focus=domList.length-1;
						}
						if(keyCode == 40){
							++$scope.focus;
							if($scope.focus == domList.length)$scope.focus=0;
						}
						console.log($scope.focus);
						$scope.focusA = $(domList[$scope.focus]).addClass('selected');

					},300);
				}
			}).on('keyup',function(e){
			if(e.keyCode == 38||e.keyCode == 40){
				clearInterval($scope.Interval);
				$scope.on = false;
			}
		});	
      }
    };
  }])
  .directive('page', function () {
  	return {
        restrict: 'E',
        template: '<div>'+
        			'<div class="fl ib" style="margin-top: 15px;">'+
        					'<div class="dataTables_info"   id="example1_info" role="status" aria-live="polite">显示{{from}} 到 {{to}} 条,总数： {{total}} </div>'+
    				 	'</div>'+        
        			'<div class="pager-content " style="width:800px;text-align:center;">'+    			  		
						  '<div class=" paging_simple_numbers ib" id="example1_paginate">'+
					         	'<ul class="pagination">'+
					          	'<li class=""   ng-class="{true: \'paginate_button previous\', false: \'paginate_button previous disabled\'}[preAvailable]"   id="example1_previous">'+
					          		'<a  class=" pager-li-mr"  ng-click="pagePrevious($event)"    aria-controls="example1" data-dt-idx="0" tabindex="0">上一步{{name}}</a>'+
					          '	</li>'+ 
					          
					        	'<li ng-repeat="num in nums"  ng-click="pageChange($event)"  ng-class="{true: \'paginate_button active\', false: \'paginate_button\'}[num.cum]">'+						        							        		
					        		'<a  class="pager-li-mr" tabindex="{{num.num}}">{{num.num}}</a>'+
					        	'</li> '+  
				        	
					         	'<li    ng-class="{true: \'paginate_button next\', false: \'paginate_button next disabled\'}[nextAvailable]"  id="example1_next">'+
					         		'<a  class=" pager-li-mr" ng-click="pageNext($event)" aria-controls="example1" data-dt-idx="7" tabindex="0">下一步</a>'+
					         	'</li>'	+         		
					         '</ul>'+
					         	'<div class="fr" style=\"margin-top: 20px;\">'+
								  	  '<input ng-model="tappage"  style=\"width: 20px; margin-right: 12px;margin-left: 10px;\">'+								 
								 '<button ng-click="tap()" style="padding:2px 3px; color: #100f0f;border-color: #bfafaf;" class=\"btn btn-default\" ng-class=\"{true:\'active\',false:\'disabled\'}[isActive]\"  >跳转</button>'+
								 '</div>'+
						  '</div>'+ 						  
					'</div>'+
				'</div>',	
        replace: true,
        scope : {
            pageSetting: '=?setting'            
        },
        controller: function($scope){
        	$scope.isActive = false;	
        	var unwatch = [];
        	//属性监听 主要监听 ajax回调后的赋值
        	 unwatch.push($scope.$watchCollection('pageSetting',function(newVal , oldVal){
	        		if(!(newVal === oldVal)){
	        			reSet(newVal);        			
	        		}
        		})
        	);
        	//销毁
        	$scope.$on('$destroy', function () {
	            angular.forEach(unwatch, function (val) {
	              val();
	            });
            });
            $scope.$on('batch',function(){
            	$scope.tappage = '';
            });            
			//limit 每页显示的数量
			//offset 分页的偏移量
			//total  总数
        	function reSet(obj){
        		//服务 只返回 count
				if($scope.pageSetting.total<0) return;
        		$scope.init();
        	}
        },
        link : function($scope, element, attrs) {
        	var total,
        		curPage,//当前页
        		number,//分页值
        		pageSize,//总页数
        		pageArr;
        	
        	$scope.init = function(){
				//根据初始化的值  计算其他的属性	
				//页数				
				$scope.total = total = $scope.pageSetting.total;
	            number = $scope.pageSetting.limit;
	            if($scope.pageSetting.offset==0){
					curPage = 1;//后台的起始 offset 第一页 认为是0
	            }else{
	            	curPage = $scope.pageSetting.offset/$scope.pageSetting.limit+1;
	            }
				if(total==0){
					$scope.from="",
					$scope.to="",
					$scope.preAvailable =false,
					$scope.nextAvailable=false,
					$scope.nums=[]
					return ;
				}
        	
				pageSize = parseInt(total/number) + (total%number>0?1:0);
        		
				//前翻是否可用
				$scope.preAvailable = curPage === 1?false:true;
				//后翻是否可用
				$scope.nextAvailable = curPage === pageSize?false:true;

				//数据部分 给显示模拟 结构  
				//添加  页数过多时候出现 ...的功能   只显示9个  已点击页为区分 只显示10页·
			    pageArr = new Array(pageSize);
			    for(var i=0 ;pageArr.length>i;i++){
						pageArr[i] = {num :i+1};
						if(pageArr[i].num==curPage){
							pageArr[i].cum = true;				
						}
				}
				if(pageSize<=10||curPage<7){
					$scope.nums =pageArr.slice(0,0+10+1);
				}else if(pageSize>=10&&curPage>=7){
					if(pageArr.slice(curPage-5-1,curPage+4).length<10){
						$scope.nums =pageArr.slice(pageArr.length-10);//如果不够截取后不够10条则直接显示最后10条
					}else{
						$scope.nums =pageArr.slice(curPage-5-1,curPage+4);
					}
				}						
				//从 哪一个 到哪一个数据		
				$scope.from = getFrom();
				$scope.to = getTo();
				//pageArr[curPage-1].cum = true;
				
				setTimeout(function(){
					//$(".pager-content").attr('style',"width:"+$(".paging_simple_numbers").width()+"px;");
				},200);
        	}
        	$scope.init();
	        //事件部分
			//当前页 修改触发事件
			$scope.pageChange = function pageChange(e){
				var oldPge = curPage;
				//更新当前页的显示
				curPage = e.target.tabIndex;
				pageHandle(oldPge,curPage);
			}
			//分页改变逻辑处理函数		
			function pageHandle(oldPge ,newPage){
				//不跨scope修改 
				$scope.$emit('pageChange',{
					pageInfo :{
						limit : number,
						offset : (curPage-1)*number
					}});									
			}
			//获取当显示起始数据
			function getFrom(){
				if(total == 0 ) return '';
				return 1+number*(curPage-1);			
			}				
			//获取当显示到那一条
			function getTo(){
				//当前页为最后一页
				if(total ==0 ) return '';
				
				if(curPage == pageSize){
					return total;
				}else{
					return  curPage*number;
				}		
			}			
			//前一页
			$scope.pagePrevious = function(){
				if(!$scope.preAvailable) return;
				var oldPge = curPage;
				curPage -= 1;			
				pageHandle(oldPge,curPage);
			}			
			//后一页
			$scope.pageNext = function(){
				if(!$scope.nextAvailable) return;
				var oldPge = curPage;
				curPage += 1;
				pageHandle(oldPge,curPage);
			}				           
       
			$scope.$watch('tappage',function(newVal , oldVal){
				if(!_.isNumber(newVal*1)) return ;
				var newval = newVal*1;
				if(newVal>=1&&newVal<=pageSize&&newVal != curPage){
					$scope.isActive = true;
				}else{
					$scope.isActive = false;
				}	
			})			
			$scope.tap = function(){
				
				$scope.pageChange({target:{
					tabIndex:$scope.tappage*1
				}});
			}			
		}
    };
  })
 
})(window.angular)