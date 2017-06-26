


function isEmptyObject(obj) {
  for(var i in obj) { return false; }
  return true;
}

function codeParams(params) {

	return  Object.keys(params).map((key) => {
	  return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
	}).join('&');

}


export default class Http {

	static HOST = `http://192.168.1.3`;

	static PORT = `3009`;

	static request(uri, method = 'GET', params = {}) {

		let config = {
			method,
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
			}
		};

		if (!isEmptyObject(params))
			config.body = codeParams(params);

		console.log("`${Http.HOST}:${Http.PORT}/${uri}`", `${Http.HOST}:${Http.PORT}/${uri}`);
		return fetch(`${Http.HOST}:${Http.PORT}/${uri}`, config)
		.then(resp => {

			return resp.json().then(json => {
				if (!resp.ok) {
					throw Error(json.message);
				}
				return json;
			})

		})

	}

}


