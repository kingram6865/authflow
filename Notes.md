# Authentication course Notes
## 2024 04 29 0523 PDT
### How JWTs Are Usd in Full-Stack Apps
- Step 1: The user logs in.
- Step 2: The server generates a JWT containing the user's information.
- Step 3: The server sends the JWT to the user.
- Step 4: The front end stores this JWT.
- Step 5: The front end includes this JWT whenever it needs privileged access.
- Step 6: The server uses the JWT's signature to verify that it hasn't been modified.

The JWT is usually sent in a request header.
E.g. { Authorization: 'Bearer yJzdiOilx.eyJiLxMjM0NTY3OD.SflKxwRJS'}

JWT' are credentials so treat them like passwords.

### Signing vs Encrypting
- Signing - proves that the data in the JWT hasn't been modified
- Encrypting - prevents third parties from seeing the data inside the JWT

### Benefits of JWT's
- JWT's are stateless
- Uses JSON, which is more compact and sexure than using XML

### Drawbacks of JWTs
- Tokens are valid until they expire or a private key is changed
- The user will have to reauthenticate when the token expires

## Implementation notes
In a production environment, When setting the JWT_SECRET in the .env, use a password generator to create the key. Use a long string.