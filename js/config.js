
import React, {Component} from 'react';
import {Text, View,StyleSheet,ImageBackground,Image, AsyncStorage,TextInput,TouchableOpacity } from 'react-native';

const baserUrl = 'http://www.boya88888.com'

function checkLoginStatus(params){
    params = Object.assign({
		name:"login",
		showModel:false,//是否直接跳转,true会提示是否登陆，false，则不会提示直接跳转。
		onlyStatus:false,//这个优先级最高，直接返回是否值
	},params||{});
	switch (params.name){
		case "login":
			 if(params.onlyStatus==true){
				 return !!$api.getStorage("token")
			 }
			 if(params.showModel==false){
				 if(!$api.getStorage("token")){//没有登陆信息
					 $api.rmStorage("token"); //删除
					 throw new Error("未登录")
				 }
			 }
			 if(params.showModel==true){
			 	if(!$api.getStorage("token")){//没有登陆信息
					
			 	}			 
			 }
			break;
		default:
			break;
	}
}

//刷新token
function refreshToken(){
    var token = $api.getStorage("token");
    
	if(typeof token == 'undefined'){ //token过期时间不存在,表示没有登陆
		throw new Error("登陆信息异常")
	}else{
		if(Date.parse(token.expired_at.replace(/-/g,"/")||0) < ((new Date()).getTime()+1000*60*10)){ //验证token,提前10分钟验证
            
            fetchData({
                url: baserUrl+'/api/authorizations/current',
			    method: "PUT",
			    data:{},
				async:false,
				headers:{
					"Authorization":"Bearer " + ($api.getStorage("token")||{}).token
				},
            },{
                success(response){
                    await AsyncStorage.setItem('userToken', response);
                },
                error(error){
                    await AsyncStorage.removeItem('userToken',(error)=>{
                        throw new Error("登陆信息异常")
                    });                    
                }
            })
		}
	}
}

// params {url,method,data:{values},needToken},
// cb回调函数
// needToken是否需要传token 0/false/undefine 表示不需要token，1/true表示需要且会直接跳转，2表示需要不会直接跳转
function fetchData(params,handlers){
	if(typeof(params.showError)=="undefined"){
		showError = true; //默认会出现
	}
	if(!!params.needToken){ //是否需要检查token
		if(!$api.getStorage("token")){
			if(params.needToken==2){
				return
			}else{
				throw new Error("登陆信息异常")
				return
			}
		}else{
			refreshToken();//验证token是否需要刷新。
			params.headers={
				"Authorization":"Bearer " + ($api.getStorage("token")||{}).token
			}
		}
	}
	if(params.url.indexOf("http")==-1){
		params.url=baserUrl+params.url
    }
    
	if(typeof params.async == "undefined"){
		params.async = true;
    }
    
    return fetch(params.url, {
        body: JSON.stringify(params.data), // must match 'Content-Type' header
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'include', // include, same-origin, *omit
        headers: {
          'content-type': 'application/json'
        },
        method: params.method, // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // *client, no-referrer
    })
    .then(response => response.json())
    .then(responseJson=>handlers.success(responseJson))
    .catch(function(error) {
        handlers.error(error);
    })
}

module.exports= {
    baserUrl:baserUrl,
    checkLoginStatus:checkLoginStatus,
    refreshToken:refreshToken,
    fetchData:fetchData
}