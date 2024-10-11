const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { db } = require('../db/config')
const { Card } = require('./Card')

// define in global scope
let card

// clear db and create new user before tests
beforeAll(async () => {
    await db.sync({ force: true })
    card = await Card.create({
      name: "card1",
      mojo: 10,
      stamina: 5,
      imgUrl: "img",
    })
  })

// clear db after tests
afterAll(async () => await db.close())

describe('Card', () => {
  it('has an id', async () => {
    expect(card).toHaveProperty('id')
  })

  it('has a name', async () => {
    expect(card).toHaveProperty('name')
  })

  it('has a mojo', async () => {
    expect(card).toHaveProperty("mojo")
  })

  it('has a stamina', async () => {
    expect(card).toHaveProperty("stamina")
  })

  it('has an imgUrl', async () => {
    expect(card).toHaveProperty("imgUrl")
  })


  it ("can assign name", async () => {
    expect(card.name).toBe("card1")
  })

  it ("can assign mojo", async () => {
    expect(card.mojo).toBe(10)
  })

  it ("can assign stamina", async () => {
    expect(card.stamina).toBe(5)
  })

  it ("can assign imgUrl", async () => {
    expect(card.imgUrl).toBe("img")
  })

  /**
   * Create more tests
   * E.g. check that the username of the created user is actually gandalf
   */
})