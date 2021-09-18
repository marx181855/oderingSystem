async function request(path: string, data?: any, method?: any) {
  return new Promise((resolve, reject) => {
    uni.request({
      url: 'http://127.0.0.1:8081/api/' + path,
      method: method || "GET", 
      data: data || {}, 
      header: {
        'Content-Type': 'json'
      },
      success: resolve,
      fail: function() {
        reject()
        uni.showModal({
          showCancel: false,
          title: '失败'
        })
      }
    });
  })
 
}

export default request;

