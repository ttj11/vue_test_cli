<template>
    <div>
        <label>
            <input type="checkbox" 
                :id="bollObj.id"
                :checked="bollObj.status"
                @change="oneCheck(bollObj.id)" 
            >{{ bollObj.type }}
        </label>
    </div>
</template>

<script>
export default {
    name: "Item",
    props: ["bollObj","oneChecked"],
    methods:{
        //点击单个
        oneCheck(id){
            this.oneChecked(id);
        }
    },
    mounted(){
        // console.log(this.bollObj);

    }
}
</script>

<style scoped>
label {
    display: block;
    margin: 10px 0;
}
</style>