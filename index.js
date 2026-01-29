function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b]
  }
  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b)
}

const express = require('express')
const app = express()
const PORT = 9270

app.get("/zas_zuhaer2_gmail_com", (req, res) => {
	const x = req.query.x
	const y = req.query.y
	if(x == undefined || y == undefined){
		return res.send("NaN")
	}
	var a = Number(x)
	var b = Number(y)

	if (!Number.isInteger(a) || !Number.isInteger(b) || a <= 0 || b <= 0){
		console.log("third")
    	return res.send("NaN");
 	}
	else{
		return res.send(String(lcm(a,b)))
	}

});

app.listen(PORT, () => {
  console.log(`Server running`);
});