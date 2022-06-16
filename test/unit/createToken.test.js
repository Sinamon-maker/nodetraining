const createToken = require('../../utils/createToken')
const config = require('dotenv')
const secret = process.env.SECRET_KEY
const jwt = require('jsonwebtoken')

describe('shoult create correct token', () => {
  it('create', ()=> {
    const user = {
      user_id:1,
      email:'nor@gmail.com',
      role: 'admin'
    }
    const token = createToken(user)
    const decoded = jwt.verify(token, secret)

    expect(decoded).toMatchObject({data: {}})
    expect(decoded.data).toHaveProperty('id', 1)
     expect(decoded.data).toHaveProperty('isAdmin', 'admin')
  })
})