function gcd(a, b) {
  while (b !== 0n) {
    [a, b] = [b, a % b]
  }
  return a
}

function lcm(a, b) {
  return (a / gcd(a, b)) * b
}

const extractNatural = (s) => {
  if (typeof s !== "string") return null
  const m = s.match(/^(?:([1-9][0-9]*)|\{([1-9][0-9]*)\})$/)
  return m ? (m[1] || m[2]) : null
}


const express = require("express")
const app = express()
const PORT = 9270

app.get("/zas_zuhaer2_gmail_com", (req, res) => {
  const xStr = extractNatural(req.query.x)
  const yStr = extractNatural(req.query.y)

  if (!xStr || !yStr) {
    return res.send("NaN")
  }

  const a = BigInt(xStr)
  const b = BigInt(yStr)

  res.send(lcm(a, b).toString())
})

app.listen(PORT, () => {
  console.log("Server running")
})
