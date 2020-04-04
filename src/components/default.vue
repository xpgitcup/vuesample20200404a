<template>
    <el-container>
        <!-- 这里是页眉-->
        <el-header>
            <applicationTitle></applicationTitle>
        </el-header>

        <el-container>
            <!-- 这里是菜单-->
            <el-aside width="10%">
                <div v-if="$store.state.currentUser">
                    <menus></menus>
                </div>
                <div v-else>
                </div>

            </el-aside>


            <!--这里是主显示区-->
            <el-main>
                <div v-if="$store.state.currentUser">
                    <router-view></router-view>
                </div>
                <div v-else>
                    <info></info>
                </div>
            </el-main>
        </el-container>

        <!-- 这里是页脚-->
        <el-footer>
            页脚
        </el-footer>
    </el-container>
</template>

<script>
    import applicationTitle from "./home/applicationTitle.vue";
    import menus from './home/menus.vue'
    import Info from "./home/info";

    export default {
        name: "default",
        components: {
            Info,
            applicationTitle,
            menus
        }
    }

</script>

<style scoped>

</style>