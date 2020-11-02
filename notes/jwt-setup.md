# JWT

How to use JWT.

### Packages

This is your JWT encoder and decoder

```
npm install jsonwebtoken
```

### Example

#### encode

[doc](https://www.npmjs.com/package/jsonwebtoken#jwtsignpayload-secretorprivatekey-options-callback) jwt.sign(payload, secretOrPrivateKey, [options, callback])

```js
const privateKey = "shhh!";
app.get("/api/getjwt", (req, res) => {
  const encodeJWT = jwt.sign({ foo: "bar" }, privateKey);
  res.send(encodeJWT);
});
// Result: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE2MDM3Mzg3OTJ9.LKZzth3hg_LEodzFUDgssjTkt0Wu8Pde2RgiMMHdkSg
```

#### decode with valid signature

[doc](https://www.npmjs.com/package/jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback) jwt.verify(token, secretOrPublicKey, [options, callback])

```js
const privateKey = "shhh!";
app.post("/api/postjwt", (req, res) => {
  const decodeJWT = jwt.verify(req.query.jwt, privateKey);
  res.send(decodeJWT);
});
// Result: { "foo": "bar", "iat": 1603738792 }
```
