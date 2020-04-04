<template>
    <el-row>
        <el-col :span="2">
            <div class="block" style="float: left">
                <el-image :src="require('../../assets/cup-logo.png')" style="width: 60px; height: 60px">
                </el-image>
            </div>
        </el-col>
        <el-col :span="18">
            <div class="title">液体管道模拟</div>
        </el-col>
        <el-col :span="4">
            <div style="float: right">
                <div v-if="$store.state.currentUser">
                    <span>
                    <el-button>{{$store.state.currentUser.username}}</el-button>
                    <el-button @click="logout">退出</el-button>
                    </span>
                </div>
                <div v-else>
                    <router-link to="/Login">登录</router-link>
                </div>
            </div>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "applicationTitle",
        methods: {
            logout() {
                console.log('退出');
                this.postRequest("/logout").then(resp => {  // logout
                    this.loading = false;

                    console.log("调用结果");
                    console.log(resp);

                    if (resp) {
                        this.$store.commit('LOGOUT_CURRENTHR', resp); // 这里的调用取决于doLogin的输出
                        // window.sessionStorage.setItem("user", JSON.stringify(resp));
                        // console.log('修改路由...');
                        // let path = this.$route.query.redirect;
                        // this.$router.replace((path == '/' || path == undefined) ? '/home' : path);
                        console.log(this.$router);
                        // router.replace('/');    // 跳转回首页
                        // router.push('/')
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .title {
        font-size: 2.2em;
    }
</style>