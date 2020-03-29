<template>
    <div class="registerBox">
        <div class="logoBox">
            <img src="../assets/imgs/icon-LOGO2.png" alt="">
        </div>
        <div class="ThreeMainBoxs">
            <div class="title">注册</div>
            <div>
                <div class="label">机构类型（可多选）</div>
                <div>
                    <el-checkbox-group v-model="checkList">
                        <el-checkbox label="检测实验室"></el-checkbox>
                        <el-checkbox label="国家重点实验室"></el-checkbox>
                        <el-checkbox label="科研实验室"></el-checkbox>
                        <el-checkbox label="校准实验室" ></el-checkbox>
                        <el-checkbox label="企业内部实验室" ></el-checkbox>
                        <el-checkbox label="高校实验室" ></el-checkbox>
                        <el-checkbox label="其他" ></el-checkbox>
                        <el-input v-model="inputValue" placeholder="请输入内容"></el-input>
                    </el-checkbox-group>
                </div>
            </div>
            <div>
                <div class="label">机构资质（可多选）</div>
                <div>
                    <el-checkbox-group v-model="checkList">
                        <el-checkbox label="ISO/IEC 17025认可"></el-checkbox>
                        <el-checkbox label="CMA资质认定"></el-checkbox>
                        <el-checkbox label="3C指定实验室"></el-checkbox>
                        <el-checkbox label="整车厂授权" ></el-checkbox>
                        <el-checkbox label="CB认证" ></el-checkbox>
                        <el-checkbox label="其他" ></el-checkbox>
                        <el-input v-model="inputValue" placeholder="请输入内容"></el-input>
                    </el-checkbox-group>
                </div>
            </div>
            <div>
                <div class="label">机构简介</div>
                <div>
                    <el-input
                            type="textarea"
                            :rows="2"
                            placeholder="简要描述贵机构的优势特色的项目 如：EMC测试、新能源产品检测等"
                            v-model="textarea">
                    </el-input>
                </div>
            </div>
            <div class="btnBoxs">
                <el-button class="upperBtn" round>上一步</el-button>
                <el-button class="nextBtn" round @click="jump">下一步</el-button>
            </div>
        </div>
        <div class="goBack">返回首页 <i class="el-icon-arrow-right"></i></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                checkList: ['选中且禁用','复选框 A'],
                textarea:"",
                inputValue:"",
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
                    path: "/registerFour",
                })
            }
        }
    }
</script>

<style lang="less" >
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

        .ThreeMainBoxs {
            width: 31.25rem;
            height: 32rem;
            background: rgba(255, 255, 255, 1);
            border-radius: 0.3rem;
            padding:2rem 2rem;
            box-sizing: border-box;
            .el-checkbox__input.is-checked+.el-checkbox__label{
                color: #04AF00;
            }

            .el-checkbox-group{
                flex-direction: row;
                flex-wrap: wrap;
            }

            .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner{
                background-color: #04AF00;
                border-color: #04AF00;
            }

            .label{
                line-height: 1.7rem;
            }

            .el-checkbox{
                margin-right: 1rem;
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
        .btnBoxs{
            display: flex;
        }
        .el-button{
            width:50%;
            color:#999999;
            margin-top:0.5rem;
        }
        .nextBtn{
            color: #ffffff;
            background:linear-gradient(90deg,rgba(4,175,0,1),rgba(52,225,34,1));
        }

        .goBack{
            position: absolute;
            bottom:1rem;
            color:#999999;
        }
    }
</style>