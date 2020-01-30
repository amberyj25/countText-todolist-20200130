<template>
<div>
    <h2>輸入數字做計算</h2>
    <p>1.只能修改 a,b的數字 而取得值</p>
    <input type="text" v-model="a">
    +
    <input type="text" v-model="b">
    =
    <input type="text" v-model="c">
    <p>2.可以透過先設定f來換算d或e</p>
    <input type="text" v-model="d">
    +
    <input type="text" v-model="e">
    =
    <input type="text" v-model="f">
</div>
</template>
<script>
export default {
    data(){
        return {
            a:0,
            b:0,
            d:0,
            e:0,
        }
    },
    computed:{
        c(){
            return parseInt(this.a)+parseInt(this.b)
        },
        f:{
            get(){
                return parseInt(this.d)+parseInt(this.e)
            },
            set(value){
                this.d = parseInt(value)-parseInt(this.e)
            }
        }
    }
}
</script>

