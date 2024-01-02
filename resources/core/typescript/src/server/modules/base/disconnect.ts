import sPlayer from "../player/model/player"
import { SpwanController } from "../use-cases/spwan/controller"



on("playerDropped", async (reason: string) => {
     const player = sPlayer.getUserId(source)
     const spawController = new SpwanController()
     const ped = GetPlayerPed(`${source}`)
     const coords = GetEntityCoords(GetPlayerPed(`${source}`))
     const model = GetEntityModel(ped)
     await spawController.createSpwan({ id: player, coords: coords, model: `${model}` })
})