const http=require("http");
const url=require("url");


const server=http.createServer((req,res)=>{
	res.setHeader("Access-Control-Allow-Origin","*");
	let path=url.parse(req.url, true);

	if (path.pathname == "/check")
	{
		let num=path.query.number;
		let n=parseInt(num);
		let r=n % 2 == 0 ? "Even" : "Odd";
		res.write(r);
		res.end();

	}


});
server.listen(9000, ()=>{console.log("server ready @9000");});