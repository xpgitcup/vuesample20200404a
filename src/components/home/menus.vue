<template>
    <el-collapse>
        <el-collapse-item title="基础参数" name="1">
            <ul>
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <router-link to="topography" class="main">地形</router-link>
                </li>
                <li>
                    <router-link to="stations" class="main">站点</router-link>
                </li>
            </ul>
        </el-collapse-item>
    </el-collapse>
</template>

<script>
    export default {
        name: "menus"
    }
</script>

<style scoped>

</style>