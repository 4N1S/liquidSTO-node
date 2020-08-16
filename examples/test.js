const liquidSTO = require('../index.js');

// Public API
const client = new liquidSTO();
const asset_uid="XXXX-YYYY-ZZZ-WWWW-VVV";

//List Assets EMPTY
client.setAuthTokenHeader("username","password",function (error, data) {
	if(error)console.log("E!",error)
	const token=data.token;
	client.getAssetActivities(token,asset_uid,function (error, data) {
		if(error) console.log("E!",error)
		console.dir(data);

	});
	// Issuement
	// name="Example Asset to delete"
	// amount=13000000;
	// is_confidential=true;
	// destination_address="VJLCCTHsukWfYLstLv3w7CD7SbyhfgeBHeE166PfKZoodv8FtmhquNPownDMfVSZxJZusxNeRow3d5rW";
	// domain="4nis.com";
	// ticker="ANIS"
	// pubkey="02ae8b59b8bdca28aa21701d572cbb2461e2a8b26bf364e1bf5453a443f9ad47b0";
	// is_reissuable=true;
	// reissuance_address="VTpzeMg3hrf5KhBorVqsagPXVZVuugQ3i5x9gsQLUUYTcWg8mZRSuYAeBzeY67R9hxsvBk5JgrPQFU75";
	// reissuance_amount=100

	// client.createAsset(token,name,amount,is_confidential,destination_address,domain,ticker,pubkey,is_reissuable,reissuance_address,reissuance_amount,function (error, data) {
	// 	if(error) console.log("E!",error)
	// 	console.log(data);

	// });

	// //Investors ADD
	// var is_company=false;
	// var name="zythop";
	// var GAID="GACVseJpoMcb4VGeW8r4XFwrTD5GA"
	// client.addinvest(token,is_company,name,GAID,function (error, data) {
	// client.addinvest(token,is_company,name,GAID,function (error, data) {
	// 	if(error) console.log("E!",error)
	// 	console.dir(data);

	// });

	// client.getInvestorsList(token,function (error, data) {
	// 	if(error) console.log("E!",error)
	// 	console.dir(data);

	// });
	//Investors update
	// var name="Update zythop";
	// var investor_id=42;
	// client.updateInvestor(token,investor_id,name,function (error, data) {
	// 	if(error) console.log("E!",error)
	// 	console.dir(data);

	// });

	// name="Founder";
	// description="Investisor serie A";
	// client.createInvestorCategory(token,name,description,function (error, data) {
	// 	if(error) console.log("E!",error)
	// 	console.dir(data);

	// });
	var investor_id=42;
	// client.getInvestorDetails(token,investor_id,function (error, data) {
	// 	if(error) console.log("E!",error)
	// 	console.dir(data);
	// });
	// List des categories
	// client.getCategoriesList(token,function (error, data) {
	// 	if(error) console.log("E!",error)
	// 	console.dir(data);

	// });
	var category_id=17;
	// client.getCategoryDetails(token,category_id,function (error, data) {
	// 	if(error) console.log("E!",error)
	// 	console.dir(data);

	// });
	// client.addInvestorToCategory(token,investor_id, category_id,function (error, data) {
	// 	if(error) console.log("E!",error)
	// 	console.dir(data);

	// });
	// client.getAssetsList(token,function (error, data) {
	// 	if(error) console.log("E!",error)
	// 	console.dir(data);

	// });

	// client.getAssetsDetail(token,asset_uid,function (error, data) {
	// 	if(error) console.log("E!",error)
	// 	console.dir(data);

	// })
	// client.deleteAsset(token,asset_uid,function (error, data) {
	// 	if(error) console.log("E!",error)
	// 	console.dir(data);

	// });
	// client.getAssetsList(token,function (error, data) {
	// 	if(error) console.log("E!",error)
	// 	console.dir(data);

	// });
	// Reissuance command request
	// NOTE: Reissuance is not currently supported.
	//       - example shown below for future reference only
	// amount_to_reissue=1;
	// client.reissueRequest(token,asset_uid,amount_to_reissue,function (error, data) {
	// 	if(error) console.log("E!",error)
	// 	console.dir(data);

	// });
	// name="Nouveau token a delete";
	// client.updateAsset(token,asset_uid,name,function (error, data) {
	// 	if(error) console.log("E!",error)
	// 	console.dir(data);

	// });


});