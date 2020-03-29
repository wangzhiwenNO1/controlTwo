<template>
    <div class="registerBox">
        <div class="logoBox">
            <img src="../assets/imgs/icon-LOGO2.png" alt="">
        </div>
        <div class="registerTwoBox">
            <div class="title">注册</div>
            <div>
                <div class="label">姓名</div>
                <div>
                    <el-input placeholder="请输入真实姓名"></el-input>
                </div>
            </div>
            <div>
                <div class="label">邮箱地址</div>
                <div>
                    <el-input placeholder="email@example.com"></el-input>
                </div>
            </div>
            <div>
                <div class="label">联系电话</div>
                <div>
                    <el-input placeholder="请输入11位手机号"></el-input>
                </div>
            </div>
            <div>
                <div class="label">密码</div>
                <div>
                    <el-input placeholder="8-16位字母、数字和符号两种以上的组合"></el-input>
                </div>
            </div>
            <div>
                <div class="label">确认密码</div>
                <div>
                    <el-input placeholder="请再次输入新设置的密码"></el-input>
                </div>
            </div>
            <div class="btnRows">
                <el-button round>上一步</el-button>
                <el-button round class="next" @click="jump">下一步</el-button>
            </div>
        </div>
        <div class="goBack">返回首页 <i class="el-icon-arrow-right"></i></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                value: ''
            }
        },
        methods:{
            jump(){
                this.$router.push({
                    path: "/registerThree",
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .registerBox {
        background: #F2F4FA;
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0;
        display: flex;
        flex-direction: column;
        align-items: center;

        .logoBox {

            height: 3.38rem;

            margin: 2rem;
        }

        .registerTwoBox {
            width: 31.25rem;
            background: rgba(255, 255, 255, 1);
            border-radius: 0.3rem;
            padding:2rem 5rem;
            box-sizing: border-box;

            .label{
                line-height: 1.7rem;
            }

            .title{
                text-align: center;
                font-size:1.5rem;
                margin-bottom: 1rem;
            }


            .purple{
                margin:0.5rem 0;
            }


        }

        .btnRows{
            display: flex;
            justify-content: space-between;
        }
        .el-button{
            width:50%;
            margin-top:0.5rem;
        }
        .next{
            background:linear-gradient(90deg,rgba(4,175,0,1),rgba(52,225,34,1));
            color: #ffffff;

        }

        .goBack{
            position: absolute;
            bottom:1rem;
            color:#999999;
        }
    }
</style>