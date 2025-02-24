API endpoints-
  Signup
     
     POST /api/user/signup
     
  Body - {
    "name" : "test",
    "email":"test@gmail.com",
    "password" : "test",
    "role": "admin"
}
    You can put role as admin or user
  
  Login
    
    POST /api/user/login
  
  Body - {
    "email":"test@gmail.com",
    "password" : "test"
}

Returns JWT token

Fetch (All users)
  Headers - Authorization : JWT_token
  
      GET /api/user/fetch

Delete (admin only)
  Headers - Authorization : Admin_JWT_token
  
    DEL /api/user/delete/<Entry ID>

Update (admin only)
  Headers - Authorization : Admin_JWT_token
  
    PUT /api/user/update/<Entry ID>
  
  Body - {
    "name" : "test new",
    "email":"test@gmail.com",
    "password" : "test",
    "role": "user"
}
  
