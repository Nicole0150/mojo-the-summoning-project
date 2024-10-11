const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { db } = require('../db/config')
const { Deck } = require('./Deck')

// define in global scope
let deck

// clear db and create new user before tests
beforeAll(async () => {
    await db.sync({ force: true })
    deck = await Deck.create({
      name: "deck1",
      xp: 10
    })
  })

// clear db after tests
afterAll(async () => await db.close())

describe('User', () => {
  it('has an id', async () => {
    expect(deck).toHaveProperty('id')
  })

  it('has a name', async () => {
    expect(deck).toHaveProperty('name')
  })

  it('has a xp', async () => {
    expect(deck).toHaveProperty('xp')
  })

  it ("can assign name", async () => {
    expect(deck.name).toBe("deck1")
  })

  it ("can assign xp", async () => {
    expect(deck.xp).toBe(10)
  })

  /**
   * Create more tests
   * E.g. check that the username of the created user is actually gandalf
   */
})