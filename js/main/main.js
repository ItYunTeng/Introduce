$(function(){
	$("#evaluate").click(function(){
		$(".ev_container").css("display","block");
	});
	$(".ri_close").click(function(){
		$(".ev_container").css("display","none");
	});
	var totalPage = 5//$("#pageCount").val();
	var currenPage = 1//
	$(".tcdPageCode").createPage({
		pageCount:totalPage,
		current:currenPage,
		backFn:function(p){
			pagelimit(p);
		}
	});
})
function bigger(){
	$("#img_nav").css("transform","scale(1.1)");
	$("#img_nav").css("transition","all 1s ease 0s");
}
function smaller(){
	$("#img_nav").css("transform","");
	$("#img_nav").css("transition","");
}
function pagelimit(p){
	var url = "http://www.bbw1040.cn?currenPage="+p;
	window.location.href=url;
}
