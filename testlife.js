
var Test={
			template:`
				<div>
					i am test ==> {{msg}} <br>
					<button @click="msg+='1'">msg+1</button>
				</div>
			`,
			data(){
				return{
					msg: 'hello vue'
				}
			},
			//组件创建前 拿不到数据
			beforeCreate(){
				// console.log('组件创建前' + this.msg)
				console.log('beforeCreate => ' + this.msg)
			},
			//组件创建后 可以拿到数据
			created(){
				console.log('created => ' + this.msg)
			},
			//Dom挂载前 定义的组件还没有插入到 #app 的目的地
			beforeMount(){
				console.log('beforeMount => ' + document.body.innerHTML)
			},
			//Dom挂载后 定义的组件已经插入到 #app 的目的地
			mounted(){
				console.log('mounted => ' + document.body.innerHTML)
			},
			//基于数据更新前
			beforeUpdate(){
				console.log('beforeUpdate => ' + document.body.innerHTML)
			},
			//基于数据更新后
			updated(){
				console.log('updated => ' + document.body.innerHTML)
			},

			beforeDestroy(){
				console.log('beforeDestroy => ' + document.body.innerHTML)
			},
			//组件销毁后
			destroyed(){
				console.log('destroyed => ' + document.body.innerHTML)
			},
			//组件停用
			deactivated(){
				console.log('deactivated => ' + document.body.innerHTML)
			},
			//组件启用
			actived(){
				console.log('actived => ' + document.body.innerHTML)
			}
		}
		new Vue({
			el:'#app',
			template:`
				<div>
					<keep-alive><test v-if='testshow'></test></keep-alive>
					<test v-if='testshow'></test>
					<button @click='clickout'>destroy</button>
				</div>
			`,
			components:{
				Test,
			},
			data:function(){
				return {
					testshow:true
				}
			},
			methods:{
				clickout(){
					this.testshow = !this.testshow
				}
			}
		})
