const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { db } = require('../db/config')
const { Attack } = require('./Attack')

// define in global scope
let attack

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
  attack = await Attack.create({
    title: 'myTitle',
    mojoCost: 10,
    staminaCost: 5,
 })
})

// clear db after tests
afterAll(async () => await db.close())

describe('Attack', () => {
  it('has an id', async () => {
    expect(attack).toHaveProperty('id')
  })

  it('has a title', async () => {
    expect(attack).toHaveProperty('title')
  })

  it('has a mojoCost', async () => {
    expect(attack).toHaveProperty('mojoCost')
  })

  it('has a staminaCost', async () => {
    expect(attack).toHaveProperty('staminaCost')
  })


  it ("can assign title", async () => {
    expect(attack.title).toBe("myTitle")
  })

  it ("can assign mojoCost", async () => {
    expect(attack.mojoCost).toBe(10)
  })

  it ("can assign title", async () => {
    expect(attack.staminaCost).toBe(5)
  })

  /**
   * Create more tests
   * E.g. check that the username of the created user is actually gandalf
   */
})