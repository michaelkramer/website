# To view what is listening PORT in WSL
`sudo lsof -n -i :3001 | grep LISTEN`

# Windows see what ports are open 
`netstat`

# Windows see what is listening PORT
`netstat -ano | findstr :5002`

# Port forwarding from WSL to Windows
https://dev.to/vishnumohanrk/wsl-port-forwarding-2e22

# Kill by port.

### To list any process listening to the port 8080:
`lsof -i:8080`

### To kill any process listening to the port 8080:
`kill $(lsof -t -i:8080)`

### or more violently:
`kill -9 $(lsof -t -i:8080)`
