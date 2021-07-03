import httpRequest from "@/utils/http.js"

//登录获取token
export function fetchToken(params){
	return httpRequest({
		url:"/login",
		methods:"POST",
		data:params
	})
}
