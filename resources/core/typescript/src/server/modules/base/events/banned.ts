import sPlayer from "@server/modules/player/model/player"
import { BannedController } from "@server/modules/use-cases/banned/controller"

on("core:create_banned", async (source: number) => {
     const banned = new BannedController()
     const user_id = sPlayer.getUserId(source)
     await banned.createBanned({ id: user_id, banned: true })
})


on("core:delete_banned", async (source: number) => {
     const banned = new BannedController()
     const user_id = sPlayer.getUserId(source)
     const deletePlayer = await banned.deleteBanned({ id: user_id })
     if (deletePlayer) {
          return true
     }
     return false
})