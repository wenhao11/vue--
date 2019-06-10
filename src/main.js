/*
入口js*/
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

const app = new Vue({
  el: '#app',
  data: {
    willShow:false,
    newPerson: {
      name: '',
      emall: '',
      gender:'',
      province:'',
      hobby:'',

    },
    people: [{
      name: 'aaa',
      emall: '112332@163.com',
      gender:'北京',
      province:'篮球',
      hobby:'男',
    }, {
      id: '2',
      name: 'bbb',
      emall: '112332@163.com',
      gender:'山东',
      province:'跑步',
      hobby:'女',
    },{
      name: 'ccc',
      emall: '112332@163.com',
      gender:'河南',
      province:'编程',
      hobby:'男',
    },{
      name: 'ddd',
      emall: '112332@163.com',
      gender:'河北',
      province:'篮球',
      hobby:'男',
    },]
  },
  methods:{
    addPerson:function () {
      if (this.willShow = !this.willShow){
        this.willShow=true
      }
    },
    createPerson1:function () {
      if (this.willShow==true){
        this.willShow=false
      }
    },
    createPerson: function(){
      this.people.push(this.newPerson);
      this.newPerson = {id:'',name: '', emall: '',gender:'',province:'', hobby:'',}
      if (this.willShow==true){
        this.willShow=false
      }
    },
    Person: function(index){
      this.people.splice(index,1);
    },
  }
});
