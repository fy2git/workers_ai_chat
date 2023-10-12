import { drizzle } from 'drizzle-orm/d1'
import { chat } from '~/schema'

export type InsertMessage = typeof chat.$inferInsert
export type SelectMessage = typeof chat.$inferSelect

export const getMessages = async (db_binding: D1Database) => {
  const db = drizzle(db_binding)
  const result = await db.select().from(chat)
  return result
}

export const addMessage = async (
  db_binding: D1Database,
  messages: InsertMessage[]
) => {
  const db = drizzle(db_binding)
  const result = await db.insert(chat).values(messages)
  return result
}

export const resetChat = async (db_binding: D1Database) => {
  const db = drizzle(db_binding)
  const result = await db.delete(chat)
  return result
}
