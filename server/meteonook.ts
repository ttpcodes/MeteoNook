import {sendUnaryData, ServerUnaryCall, status} from 'grpc'

import OverviewDay from '../js/overviewDay'

import {IMeteoNookServer} from './proto/meteonook_grpc_pb'
import {Hemisphere, IslandInfo, Overview} from './proto/meteonook_pb'

export default class MeteoNookServer implements IMeteoNookServer {
  getOverview(call: ServerUnaryCall<IslandInfo>, callback: sendUnaryData<Overview>) {
    const data = call.request
    let hemisphere = ''
    switch (data.getHemisphere()) {
      case Hemisphere.NORTH:
        hemisphere = 'N'
        break
      case Hemisphere.SOUTH:
        hemisphere = 'S'
        break
    }
    const seed = data.getSeed()

    const overview = new OverviewDay(`v1&Default&${seed}&${hemisphere}`)
    overview.init().then(() => {
      if (!overview.$t) {
        throw Error('bug: this.$t is null')
      }

      const response = new Overview()

      const forecasts = []
      for (const forecast of overview.broadForecast) {
        forecasts.push(forecast)
      }
      if (overview.day.heavyShower) {
        forecasts.push('🌠 ' + overview.$t('oHeavyShowerAlert', {start: overview.$d(overview.showerStartDate, 'timeHM'), end: overview.$d(overview.showerEndDate, 'timeHM')}))
      }
      if (overview.day.lightShower) {
        forecasts.push('🌠 ' + overview.$t('oShowerAlert', {list: overview.lightShowerTimeList}))
      }
      response.setForecast(forecasts.join('\n'))

      response.setPattern(overview.day.patternName)

      callback(null, response)
    }).catch(err => {
      console.log('error getting weather overview: ', err)
      callback({
        code: status.INTERNAL,
        message: `error getting weather overview: ${err}`,
        name: 'Internal Error'
      }, null)
    })
  }
}
