<template>
    <div>
        <el-form
                :rules="rules"
                ref="loginForm"
                v-loading="loading"
                element-loading-text="正在登录..."
                element-loading-spinner="el-icon-loading"
                element-loading-background="rgba(0, 0, 0, 0.8)"
                :model="loginForm"
                class="loginContainer"
        >
            <h3 class="loginTitle">系统登录</h3>
            <el-form-item prop="username">
                <el-input
                        size="normal"
                        type="text"
                        v-model="loginForm.username"
                        auto-complete="off"
                        placeholder="请输入用户名"
                ></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input
                        size="normal"
                        type="password"
                        v-model="loginForm.password"
                        auto-complete="off"
                        placeholder="请输入密码"
                        @keydown.enter.native="submitLogin"
                ></el-input>
            </el-form-item>
            <el-checkbox size="normal" class="loginRemember" v-model="checked"></el-checkbox>
            <el-button size="normal" type="primary" style="width: 100%;" @click="submitLogin">登录</el-button>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                loading: false,
                loginForm: {
                    username: "me",
                    password: "password"
                },
                checked: true,
                rules: {
                    username: [
                        {required: true, message: "请输入用户名", trigger: "blur"}
                    ],
                    password: [{required: true, message: "请输入密码", trigger: "blur"}]
                }
            };
        },
        methods: {
            submitLogin() {
                this.$refs.loginForm.validate(valid => {
                    if (valid) {
                        this.loading = true;
                        this.postKeyValueRequestJson('/api/login', this.loginForm).then(resp => {
                            this.loading = false;
                            // console.log("调用结果");
                            // console.log(resp);
                            if (resp) {
                                this.$store.commit('INIT_CURRENTHR', resp); // 这里的调用取决于doLogin的输出
                                window.sessionStorage.setItem("user", JSON.stringify(resp));
                                // console.log('修改路由...');
                                let path = this.$route.query.redirect;
                                console.log(this.$route);
                                console.log(path);
                                // this.$router.replace((path == '/' || path == undefined) ? '/home' : path);
                                this.$router.replace((path == '/' || path == undefined) ? '/' : path);
                            }
                        })
                    } else {
                        this.$message.error("请输入所有字段");
                        return false;
                    }
                });
            }
        }
    };
</script>

<style>
    .loginContainer {
        border-radius: 15px;
        background-clip: padding-box;
        margin: 180px auto;
        width: 350px;
        padding: 15px 35px 15px 35px;
        background: #fff;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;
    }

    .loginTitle {
        margin: 15px auto 20px auto;
        text-align: center;
        color: #505458;
    }

    .loginRemember {
        text-align: left;
        margin: 0px 0px 15px 0px;
    }
</style>
