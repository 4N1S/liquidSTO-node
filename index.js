const request = require('request');


const liquidSTO = function() {
	this.version = "0.0.1";
	this.baseURL = "https://securities-beta.blockstream.com/api/";
	this.userAgent = "LiquidSTO-node";
};

liquidSTO.prototype.addinvest = function(token,is_company,name,GAID,callback) {
	var data={"is_company":is_company,"name":name,"GAID":GAID};
	var auth="token "+token;
	this.headers= {
	  	'Authorization': auth,
	  	'User-Agent':this.userAgent,
		'Content-Type': 'application/json',
	  }
	this.apiPost("investors/add", data, function(err, data) {
		return callback(err, data);
	});
}

liquidSTO.prototype.updateInvestor = function(token,id,name,callback) {
	var data = { 'name': name };

	var auth="token "+token;
	this.headers= {
	  	'Authorization': auth,
	  	'User-Agent':this.userAgent,
		'Content-Type': 'application/json',
	  }
	this.apiPut("investors/"+id+"/edit", data, function(err, data) {
		return callback(err, data);
	});
}
liquidSTO.prototype.getInvestorsList = function(token,callback) {
	var auth="token "+token;
	this.headers= {
	  	'Authorization': auth,
	  	'User-Agent':this.userAgent,
		'Content-Type': 'application/json',
	  }
	this.apiGet("investors", {}, function(err, data) {
		console.log("##Invest list##");
		return callback(err, data);
	});
}

liquidSTO.prototype.createInvestorCategory = function(token,name,description,callback) {
	var data = { 'name': name, 'description':description };

	var auth="token "+token;
	this.headers= {
	  	'Authorization': auth,
	  	'User-Agent':this.userAgent,
		'Content-Type': 'application/json',
	  }
	this.apiPost("categories/add", data, function(err, data) {
		console.log("##NEW Categorie##");
		return callback(err, data);
	});
}

liquidSTO.prototype.getInvestorDetails = function(token,id,callback) {
	var auth="token "+token;
	this.headers= {
	  	'Authorization': auth,
	  	'User-Agent':this.userAgent,
		'Content-Type': 'application/json',
	  }
	this.apiGet("investors/"+id, {}, function(err, data) {
		console.log("##Invest Detail##");
		return callback(err, data);
	});
}

liquidSTO.prototype.getCategoryDetails = function(token,id,callback) {
	var auth="token "+token;
	this.headers= {
	  	'Authorization': auth,
	  	'User-Agent':this.userAgent,
		'Content-Type': 'application/json',
	  }
	this.apiGet("categories/"+id, {}, function(err, data) {
		console.log("##Invest Detail##");
		return callback(err, data);
	});
}

liquidSTO.prototype.getCategoriesList = function(token,callback) {
	var auth="token "+token;
	this.headers= {
	  	'Authorization': auth,
	  	'User-Agent':this.userAgent,
		'Content-Type': 'application/json',
	  }
	this.apiGet("categories", {}, function(err, data) {
		console.log("##Categories Invest list##");
		return callback(err, data);
	});
}

// liquidSTO.prototype.addInvestorToCategory = function(token,investor_id, category_id,callback) {
//     var data = { 'investors': investor_id };

// 	var auth="token "+token;
// 	this.headers= {
// 	  	'Authorization': auth,
// 	  	'User-Agent':this.userAgent,
// 		'Content-Type': 'application/json',
// 	  }
// 	this.apiPost("categories/"+category_id+"/add", data, function(err, data) {
// 		console.log("##addInvestorToCategory##");
// 		return callback(err, data);
// 	});
// }

liquidSTO.prototype.getAssetsList = function(token,callback) {
	var auth="token "+token;
	this.headers= {
	  	'Authorization': auth,
	  	'User-Agent':this.userAgent,
		'Content-Type': 'application/json',
	  }
	this.apiGet("assets", {}, function(err, data) {
		console.log("##Assets list##");
		return callback(err, data);
	});
}


liquidSTO.prototype.getAssetsDetail = function(token,uid,callback) {
	var auth="token "+token;
	this.headers= {
	  	'Authorization': auth,
	  	'User-Agent':this.userAgent,
		'Content-Type': 'application/json',
	  }
	this.apiGet("assets/"+uid, {}, function(err, data) {
		console.log("##Assets detail##");
		return callback(err, data);
	});
}

liquidSTO.prototype.createAsset = function(token,name,amount,is_confidential,destination_address,domain,ticker,pubkey,is_reissuable,reissuance_address,reissuance_amount,callback) {
	var data={
				"name":name,
				"amount":amount,
				"is_confidential":is_confidential,
				"destination_address":destination_address,
				"domain":domain,
				"ticker":ticker,
				"pubkey":pubkey,
				"is_reissuable":is_reissuable,
				"reissuance_address":reissuance_address,
				"reissuance_amount":reissuance_amount
			};
	var auth="token "+token;
	this.headers= {
	  	'Authorization': auth,
	  	'User-Agent':this.userAgent,
		'Content-Type': 'application/json',
	  }
	this.apiPost("assets/issue", data, function(err, data) {
		console.log("##NEW Assets##");
		return callback(err, data);
	});
}

liquidSTO.prototype.deleteAsset = function(token,uid,callback) {
	var auth="token "+token;
	this.headers= {
	  	'Authorization': auth,
	  	'User-Agent':this.userAgent,
		'Content-Type': 'application/json',
	  }
	this.apiDelete("assets/"+uid+"/delete", {}, function(err, data) {
		console.log("##Delete asset uid"+uid+"##");
		return callback(err, data);
	});
}
liquidSTO.prototype.updateAsset = function(token,uid,name,callback) {
	var data = { 'name': name };

	var auth="token "+token;
	this.headers= {
	  	'Authorization': auth,
	  	'User-Agent':this.userAgent,
		'Content-Type': 'application/json',
	  }
	this.apiPut("assets/"+uid+"/edit", data, function(err, data) {
		return callback(err, data);
	});
}
liquidSTO.prototype.reissueRequest = function(token,uid,amount_to_reissue,callback) {
	var data = { 'amount_to_reissue': amount_to_reissue };

	var auth="token "+token;
	this.headers= {
	  	'Authorization': auth,
	  	'User-Agent':this.userAgent,
		'Content-Type': 'application/json',
	  }
	this.apiPost("assets/"+uid+"/reissue-request", data, function(err, data) {
		console.log("##NEW MINT "+amount_to_reissue+" Token ##");
		return callback(err, data);
	});
}

liquidSTO.prototype.getAssetActivities = function(token,uid,callback) {
	var auth="token "+token;
	this.headers= {
	  	'Authorization': auth,
	  	'User-Agent':this.userAgent,
		'Content-Type': 'application/json',
	  }
	this.apiGet("assets/"+uid+"/activities", {}, function(err, data) {
		console.log("##Assets activities##");
		return callback(err, data);
	});
}
liquidSTO.prototype.getAssetReissuances = function(token,uid,callback) {
	var auth="token "+token;
	this.headers= {
	  	'Authorization': auth,
	  	'User-Agent':this.userAgent,
		'Content-Type': 'application/json',
	  }
	this.apiGet("assets/"+uid+"/reissuances", {}, function(err, data) {
		console.log("##Assets reissuances##");
		return callback(err, data);
	});
}
liquidSTO.prototype.getAssetAssignments = function(token,uid,callback) {
	var auth="token "+token;
	this.headers= {
	  	'Authorization': auth,
	  	'User-Agent':this.userAgent,
		'Content-Type': 'application/json',
	  }
	this.apiGet("assets/"+uid+"/assignments", {}, function(err, data) {
		console.log("##Assets assignmentss##");
		return callback(err, data);
	});
}


/*
 *
 * REQUEST HANDLERS
 *
 */
liquidSTO.prototype.apiGet=async function apiGet (method, params, callback) {
	var api=this.baseURL+""+method;
    return new Promise((resolve, reject) => {
        request({ uri:api, method:'GET', headers:this.headers,userAgent:this.userAgent }, (error, response, body) => {
            if (error) return reject(error)
            return callback(error, JSON.parse(body));
        })
    })
}
liquidSTO.prototype.apiPost= async function apiPost (method, params, callback) {
	var api=this.baseURL+""+method;
    return new Promise((resolve, reject) => {
        request({ uri:api, method:'POST', json:params, headers:this.headers,userAgent:this.userAgent }, (error, response, body) => {
            return callback(error, body);
        })
    })
}
liquidSTO.prototype.apiPostauth= async function apiPost (method, params, callback) {
	var api=this.baseURL+""+method;
    return new Promise((resolve, reject) => {
        request({ uri:api, method:'POST', json:params, headers:this.headers,userAgent:this.userAgent }, (error, response, body) => {
            return callback(error, body);
        })
    })
}

liquidSTO.prototype.apiPut=async function apiPut (method, params, callback) {
	var api=this.baseURL+""+method;
    return new Promise((resolve, reject) => {
        request({ uri:api, method:'PUT', json:params,headers:this.headers,userAgent:this.userAgent }, (error, response, body) => {
            if (error) return reject(error)

            return callback(error, body);
        })
    })
}

liquidSTO.prototype.apiDelete=async function apiPut (method, params, callback) {
	var api=this.baseURL+""+method;
    return new Promise((resolve, reject) => {
        request({ uri:api, method:'DELETE', headers:this.headers,userAgent:this.userAgent }, (error, response, body) => {
            if (error) return reject(error)

            return callback(error, body);
        })
    })
}

liquidSTO.prototype.setAuthTokenHeader = function(username, password,callback) {
	var data2 ={ 'username':username, 'password':password };

	this.apiPostauth("user/obtain_token", data2, function(err, data) {
		return callback(err, data);

	});

}

module.exports = liquidSTO;
