window.application.components.controller("CommentsCtrl",["$rootScope","$scope","$location","API",function(o,n,t,c){n.comments=[],c.go(c.getCommentList,!1,{MentorId:t.search().id}).then(function(o){angular.forEach(o.data,function(o){n.comments.push(o)})},function(o){n.comments.push([])})}]);