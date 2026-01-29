function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b]
  }
  return a;
}

function lcm(a, b) {
	return (a / gcd(a, b)) * b
}

const express = require('express')
const app = express()
const PORT = 9270

const isNatural = (s) => /^[1-9][0-9]*$/.test(s)

app.get("/zas_zuhaer2_gmail_com", (req, res) => {
  const { x, y } = req.query

  if (!isNatural(x) || !isNatural(y)) {
    return res.send("NaN")
  }

  const a = Number(x)
  const b = Number(y)

  return res.send(String(lcm(a, b)))
})


app.listen(PORT, () => {
  console.log(`Server running`);
})