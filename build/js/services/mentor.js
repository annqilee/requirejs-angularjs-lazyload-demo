define(["angular"],function(e){e.module("application.Mentor",[]).factory("Mentor",["$resource","$cachedResource","$http","$q",function(e,t,r,n){return{list:{query:function(e){return r.get(API.getRecMentorList.url+serialize(e))},search:function(e){return r.get(API.getRecMentorList.url+serialize(e))}},detail:{query:function(e){return r.get(API.getMentorDetails.url+serialize(e))},queryComments:function(e){return r.get(API.getCommentList.url+serialize(e))}},get:{hotKeywords:function(){var e=n.defer();return e.resolve(["营销","运营","沙金","Lydia"]),e.promise}}}}])});