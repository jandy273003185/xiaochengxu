// components/alert/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    isHide: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    save(){
      console.log(111)
    },
    confirmSubmit(){
      console.log(222)
    },
    cancel(){
      this.setData({isHide:'hide'});
    }
  }
})
