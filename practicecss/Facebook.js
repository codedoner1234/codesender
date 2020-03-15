if(localStorage.getItem("allComments")===null)
	{
localStorage.setItem('allComments',JSON.stringify([]));
	}
else{
	
	showComments();
}
function addComment() {
	event.preventDefault()
	var username = document.getElementById("username").value;
	var comment = document.getElementById("comment").value;

	if (username.length == 0) {
		var uer = document.getElementById("u_msg").innerHTML = "username cannot be empty"

		console.log(uer);
		console.log(typeof(uer));
		console.log(typeof(document.getElementById("u_msg")));
		document.getElementById("u_msg").style.color = "red";
		
   return;
	}
	if (comment.length === 0) {
		var cer = document.getElementById("c_msg").innerHTML = "comment cannot be empty"
		
//		cer.style.color = "red";
		return;
	}
	var userComment = {
		uname: username,
		ucomment: comment,
		timeStamp:getTimeStamp(),
         commentId:getUniqueId()

	}
	//	console.log(userComment)
	 var Comments_lc=JSON.parse(localStorage.getItem('allComments'))
	 console.log("and the Comment_lc is");
	console.log(Comments_lc);
	
	Comments_lc.push(userComment);
	localStorage.setItem('allComments',JSON.stringify(Comments_lc))
	showComments();
	
}
	
	function showComments()
	{
		
		var commentList = document.getElementById("comments");
	//going to the allcomments and iterating through each index
	var updatedcl= JSON.parse(localStorage.getItem('allComments'))
	clearList();

	for (var index = 0; index < updatedcl.length; index++) {

		//			console.log(allComments[index]);
		var uc = updatedcl[index];
		
		commentList.innerHTML = commentList.innerHTML+"<li>" + uc.uname + "&nbsp;&nbsp;:&nbsp;&nbsp;" + uc.ucomment + "&nbsp;&nbsp;:&nbsp;&nbsp;" +uc.timeStamp+ "<button onclick="+"deleteButton("+uc.commentId+")"+">"+ "Delete </button"+"</li>"
		console.log(commentList);
	}
}
		
		
	
function clearList()
{
document.getElementById("comments").innerHTML="";
	console.log(" iwas called")

}

function getTimeStamp()
{
event.preventDefault();
var date=new Date();
return date.getDate()+"/"+(parseInt(date.getMonth())+1)+"/"+date.getYear()+"&nbsp&nbsp&nbsp&nbsp"+date.getHours()+":"+date.getMinutes()

}
function getUniqueId()
{

if(localStorage.getItem("currentCommentId")===null)
	{
localStorage.setItem("currentCommentId",0)
		var id= parseInt(localStorage.getItem("currentCommentId"))+1;
	localStorage.setItem("currentCommentId",id)
		return id
	
	}
else
	{

	var id= parseInt(localStorage.getItem("currentCommentId"))+1;
	localStorage.setItem("currentCommentId",id)
		return id;
	
	
	}


}
function deleteButton(commentId)
{
	
event.preventDefault();
	console.log("i was called by delete")
	var updatedcl= JSON.parse(localStorage.getItem('allComments'))
	console.log("updatedcl in deletebutton is");
	console.log(updatedcl);

	for (var index = 0; index < updatedcl.length; index++) {
		event.preventDefault();

		var uc = updatedcl[index];
		console.log(uc);
		if(commentId===uc.commentId)
			{

			var indexOfComment=updatedcl.indexOf(uc);
				console.log(indexOfComment)
				updatedcl.splice(indexOfComment,1)
				console.log(updatedcl);
			}
	}
	localStorage.setItem('allComments',JSON.stringify(updatedcl));
		
showComments();

}