
import React, {Component} from 'react';
import {AsyncStorage } from 'react-native';

/**
 * api接口地址
 */
const baserUrl = 'http://www.boya88888.com'


/**
 * 验证数据格式
 * @param value 字符串
 **/

const validString= {
	isPhone(value){
		let reg = /^1[3-9][0-9]{9}$/
		return reg.test(value)
	},
	isEmail(value){
		let reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/
		return reg.test(value)
	},
	notempty(value){
		let reg = /(^s*)|(s*$)/g
		return reg.test(value)
	},
	username(value){
		let reg = /^\\w+$/
		return reg.test(value)
	},
	idcard(value){
		let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
		return reg.test(value)
	},
	intege(value){
		let reg = /^\+?[1-9][0-9]*$/
		return reg.test(value)
	},
}
/**
 * 验证登录状态
 * @param obj 对象
 */
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

/**
 * 将对象转成 a=1&b=2的形式
 * @param obj 对象
 */
function obj2String(obj, arr = [], idx = 0) {
	let _string = "?";

	for (let item in obj) {
		_string += "&" + item + "=" + obj[item]
	}

	console.log(_string)
	return _string
  }


/**
 * 刷新token
 */
function refreshToken(){
	let token = "";
	AsyncStorage.getItem("userToken", (err, result) => {
		console.log(result);
		if(err){
			throw new Error("登陆信息异常")
		}else{
			token = JSON.parse(result).token
		}
	});
    
	if(typeof token == 'undefined'){ //token过期时间不存在,表示没有登陆
		throw new Error("登陆信息异常")
	}else{
		if(Date.parse(token.expired_at.replace(/-/g,"/")||0) < ((new Date()).getTime()+1000*60*10)){ //验证token,提前10分钟验证            
            fetchData({
                url: '/api/authorizations/current',
			    method: "PUT",
			    data:{},
				async:false,
				headers:{
					"Authorization":"Bearer " + ($api.getStorage("token")||{}).token
				},
            },{
                success(response){
                    AsyncStorage.setItem('userToken', response);
                },
                error(error){
                    AsyncStorage.removeItem('userToken',(error)=>{
                        throw new Error("登陆信息异常")
                    });                    
                }
            })
		}
	}
}


/**
*params {url,method,data:{values},needToken},
*cb回调函数
*needToken是否需要传token 0/false/undefine 表示不需要token，1/true表示需要且会直接跳转，2表示需要不会直接跳转
**/
function fetchData(params,handlers){
	let headers =  {
		'content-type': 'application/json'
	}

	if(typeof(params.showError)=="undefined"){
		showError = true; //默认会出现
	}

	if(params.url.indexOf("http")==-1){
		params.url=baserUrl+params.url
    }
    
	if(typeof params.async == "undefined"){
		params.async = true;
	}

	if(!!params.needToken){ //是否需要检查token
		AsyncStorage.getItem("userToken", (err, result) => {
			if(err){
				throw new Error("登陆信息异常")
			}else{
				headers.Authorization = "Bearer " + JSON.parse(result).token;
				_doFetch()
			}
		});
	}else{
		_doFetch()
	}

	function _doFetch(){
		let _config = {
			cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
			credentials: 'include', // include, same-origin, *omit
			headers: headers,
			method: params.method, // *GET, POST, PUT, DELETE, etc.
			mode: 'cors', // no-cors, cors, *same-origin
			redirect: 'follow', // manual, *follow, error
			referrer: 'no-referrer', // *client, no-referrer
		}
		if(params.method.toLowerCase()=="get"){
			let data = '?' + obj2String(params.data);
			return fetch(params.url + data, {
				..._config
			})
			.then(response => response.json())
			.then(responseJson=>handlers.success(responseJson))
			.catch(function(error) {
				handlers.error(error);
			})
		}else{
			//console.warn(params.data)
			return fetch(params.url, {
				body: JSON.stringify(params.data), // must match 'Content-Type' header
				..._config
			})
			.then(response => response.json())
			.then(responseJson=>handlers.success(responseJson))
			.catch(function(error) {
				handlers.error(error);
			})
		}
	}
}

module.exports= {
    baserUrl,
    // checkLoginStatus,
    // refreshToken,
	fetchData,
	validString
}