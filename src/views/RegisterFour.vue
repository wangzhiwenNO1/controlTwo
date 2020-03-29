<template>
    <div class="registerBox">
        <div class="logoBox">
            <img src="../assets/imgs/icon-LOGO2.png" alt="">
        </div>
        <div class="mainBoxFour">
            <div class="title">注册</div>
            <div>
                <div class="label">营业执照：</div>
                <div class="uploadBox">
                    <div>
                        <i class="iconFile"></i>
                        <i class="el-icon-close"></i>
                    </div>
                    <div class="upbtnBox">
                        <el-button size="mini" type="text" icon="el-icon-circle-plus-outline">选择文件</el-button>
                        <el-button size="mini" round>上传</el-button>
                    </div>
                </div>
            </div>
            <div>
                <div class="label">资质证明(可上传多个文件)：</div>
                <div class="uploadBox">
                    <div>
                        <i class="iconFile"></i>
                        <i class="el-icon-close"></i>
                    </div>
                    <div class="upbtnBox">
                        <el-button size="mini" type="text" icon="el-icon-circle-plus-outline">选择文件</el-button>
                        <el-button size="mini" round>上传</el-button>
                    </div>
                </div>
            </div>
            <div>
                <div class="label">机构logo：</div>
                <div class="uploadBox">
                    <div>
                        <i class="iconFile"></i>
                        <i class="el-icon-close"></i>
                    </div>
                    <div class="upbtnBox">
                        <el-button size="mini" type="text" icon="el-icon-circle-plus-outline">选择文件</el-button>
                        <el-button size="mini" round>上传</el-button>
                    </div>
                </div>
            </div>
            <div class="agreement">
                <span>同意实验室帮的用户协议</span>
                <el-checkbox ></el-checkbox>
            </div>
            <div class="btnBoxs">

                <el-button class="nextBtn" round>提交申请</el-button>
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

        .mainBoxFour {
            width: 31.25rem;
            height: 28.43rem;
            background: rgba(255, 255, 255, 1);
            border-radius: 0.3rem;
            padding:2rem 5rem;
            box-sizing: border-box;

            .uploadBox{
                display: flex;
                justify-content: space-between;
                align-items: center;

                .iconFile{
                    width: 1rem;
                    height: 1rem;
                    background: pink;
                    display: inline-block;
                }


                .upbtnBox{
                    display: flex;
                    justify-content: space-between;

                    .el-button{
                        width:5.25rem;
                        background:rgba(255,255,255,1);

                        border-radius:1rem;
                        color:#04AF00;
                    }

                    &>.el-button:last-child{
                        border:1px solid #04AF00;
                    }

                }
            }

            .agreement{
                text-align: right;
                margin:1.5rem 0;

                span{
                    margin-right: 0.5rem;
                }
            }

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
        .btnBoxs{
            display: flex;
        }
        .el-button{
            width:100%;
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