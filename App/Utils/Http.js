
const HOST = `http://192.168.1.3`;

const PORT = `3009`;

const headers = {
	'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
};

function isEmptyObject(obj) {
  for(var i in obj) { return false; }
  return true;
}

function codeParams(params) {

	return  Object.keys(params).map((key) => {
	  return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
	}).join('&');

}

class Http {


	request(uri, method = 'GET', params = {}) {

		let config = {
			method, headers
		};

		if (!isEmptyObject(params))
			config.body = codeParams(params);

		return fetch(`${Http.HOST}:${PORT}/${uri}`, config)
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

export default new Http;


