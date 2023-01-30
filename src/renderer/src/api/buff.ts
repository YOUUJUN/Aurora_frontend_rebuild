import { postActionLocal, getActionLocal } from './manage'

const startBuffCrawlerService = (params?: Object) => postActionLocal('/actBuff', params)
const stopBuffCrawlerService = () => postActionLocal('/stopBuff')
const clearBuffCacheData = () => postActionLocal('/clearBuff')
const fetchBuffCacheData = () => postActionLocal('/gatherBuff')

const startBuffCrawlerService_history = () => postActionLocal('/actBuffHistoryPrices')
const stopBuffCrawlerService_history = () => postActionLocal('/stopBuffHistoryPrices')
const fetchBuffCacheData_history = () => postActionLocal('/getBuffHistoryPrices')

const saveSteamPurchase = (params?: Object) => postActionLocal('/saveSteamPurchase', params)
const saveBufffPurchase = (params?: Object) => postActionLocal('/saveBufffPurchase', params)

const saveGoodsData = (params?: Object) => postActionLocal('/saveGoods', params)
const saveHistoryPriceData = (params?: Object) => postActionLocal('/saveGoodsHistoryPrice', params)

const startBuffRefererCrawlerLoop = (params?: Object) => postActionLocal('/launchRefererRequestLoop', params)
const stopBuffRefererCrawlerService = () => postActionLocal('/stopRefererBuff')
const fetchRefererBuffData = (params?: Object) => postActionLocal('/gatherRefererBuff', params)

const updateBuffCrawlerPass = (params?: Object) => postActionLocal('/updateLogInfo', params)

export {
	startBuffCrawlerService,
	stopBuffCrawlerService,
	clearBuffCacheData,
	fetchBuffCacheData,
	startBuffCrawlerService_history,
	stopBuffCrawlerService_history,
	fetchBuffCacheData_history,
	saveSteamPurchase,
	saveBufffPurchase,
	saveGoodsData,
	saveHistoryPriceData,
	startBuffRefererCrawlerLoop,
	stopBuffRefererCrawlerService,
	fetchRefererBuffData,
	updateBuffCrawlerPass,
}
