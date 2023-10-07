<template>
    <div >
        <Item v-for="bollObj in bolls" :key="bollObj.id"  
            :bollObj="bollObj" :oneChecked="oneChecked"/>
    </div>
</template>

<script>
import Item from "./Item"

export default {
    name: "List",
    props: ["bolls","oneChecked"],
    components: {
        Item,
    },
    mounted() {
        console.log(this.bolls);
    }


}
</script>

<style scoped></style>