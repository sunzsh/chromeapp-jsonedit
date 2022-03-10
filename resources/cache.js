class CacheDao {
  constructor (key) {
    this.key = key
    this.maxLength = 5
  }

  async setItem(item) {
    let arr = await this.getItem()
    if(!Array.isArray(arr)) {
      arr = []
    }
    if(arr.length >= this.maxLength) {
      arr.pop()
    }
    arr.unshift({
      timestamp: Math.round(new Date() / 1000),
      value: item
    })
    localforage.setItem(this.key, arr)
  }

  getItem() {
    try{
      return localforage.getItem(this.key)
    }catch(err) {
      // nothing..
    }
    return []
  }
}
const cacheDao = new CacheDao('__jsoneditor_history')

function beautifyTime(timestamp){
  var mistiming = Math.round(new Date() / 1000)-timestamp;
  var postfix = mistiming>0 ? '前' : '后'
  mistiming = Math.abs(mistiming)
  var arrr = ['年','个月','星期','天','小时','分钟','秒'];
  var arrn = [31536000,2592000,604800,86400,3600,60,1];

  for(var i=0; i<7; i++){
      var inm = Math.floor(mistiming/arrn[i])
      if(inm!=0){
          return inm+arrr[i] + postfix
      }
  }
  return '刚刚'
}