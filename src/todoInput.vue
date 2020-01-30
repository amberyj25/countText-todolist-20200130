<template>
<div @click="addtodo" @keyup.enter="addtodo">
    <input type="text" v-model="text1">  
    <input type="button" value="button">
</div>
</template>
<script>
export default {
    data(){
        return {
            text1:""
        }
    },
    methods:{
        addtodo(){
            if(this.text1 == ""){
                return
            };
            this.$emit("addtodoemit",this.text1);
            this.text1="";
        }
    }
}
</script>