export * from './client'
import { createTrade } from './services/createTrade'
import { deleteTrade } from './services/deleteTrade'
import { getTrades } from './services/getTrades'
import { syncUser } from './services/syncUser'
import { updateProfile } from './services/updateProfile'
import { updateTrade } from './services/updateTrade'
import { checkHealth } from './services/checkHealth'

export {
  createTrade,
  deleteTrade,
  getTrades,
  syncUser,
  updateProfile,
  updateTrade,
  checkHealth,
}
