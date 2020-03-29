<template>
    <el-row>
        <el-col :span="2">
            <div class="leftBox">
                <div :class="type==1?'active':''" @click="changeType(1)">
                    <i class="icon-all"></i>
                    <div>全部客户</div>
                </div >
                <div :class="type==2?'active':''" @click="changeType(2)">
                    <i class="icon-inside"></i>
                    <div>内部客户</div>
                </div>
                <div :class="type==3?'active':''" @click="changeType(3)">
                    <i class="icon-important"></i>
                    <div>重要客户</div>
                </div>
                <div :class="type==4?'active':''" @click="changeType(4)">
                    <i class="icon-ordinary"></i>
                    <div>普通客户</div>
                </div>
                <div class="addBox" :class="type==5?'active':''" @click="changeType(5)">
                    <i class="el-icon-circle-plus-outline"></i>
                    <div>添加客户</div>
                </div>
            </div>
        </el-col>
        <el-col :span="12" class="cardBox">
            <el-card class="box-card" v-if="true" shadow="hover">
                <div class="cardItem">
                    <div class="imgBox">
                        <el-avatar :size="70" src="#"></el-avatar>
                        <el-button round size="mini">取消链接</el-button>
                    </div>
                    <div class="infoBox">
                        <div>
                            <div>
                                <div class="name">上海少林检测技术服务有限公司</div>
                                <div class="site">上海市黄浦区示例路888号</div>
                            </div>
                            <div>
                                <div class="greenDiv">选择</div>
                            </div>
                        </div>
                        <div class="numBox">
                            <div>
                                <i class="el-icon-document"></i>
                                <div>类别：重要客户</div>
                            </div>
                            <div>
                                <i class="el-icon-thumb"></i>
                                <div>总交易额：¥68,900</div>
                            </div>
                            <div>
                                <div class="infoBtn">合作详情</div>
                            </div>
                        </div>
                    </div>
                </div>
            </el-card>
            <el-card class="box-card" v-else shadow="hover">
                <div class="cardItems">
                    <div class="site">很抱歉，未能找到您搜索的相关实验室，请输入实验室联系人邮箱，邀请实验室加入，十分感谢！</div>
                    <div class="inputBox">
                        <label>邮箱地址：</label>
                        <el-input placeholder="请输入内容"></el-input>
                    </div>
                    <div class="buttonBox">
                        <el-button round size="mini">发送邀请</el-button>
                    </div>
                </div>
            </el-card>
        </el-col>
        <el-col :span="10">
            <div class="providerBoxs">
                <div class="title">
                    <div>发消息给客户</div>
                </div>
                <ul>
                    <li>
                        <div class="label">收件人</div>
                        <div><el-input></el-input></div>
                    </li>
                    <li>
                        <div class="label">主题</div>
                        <div><el-input></el-input></div>
                    </li>
                    <li>
                        <div class="label textBox">正文</div>
                        <div>
                            <div id="wangeditor">
                                <div ref="editorElem" style="text-align:left;"></div>
                            </div>
                        </div>
                    </li>

                </ul>
                <div class="btnRow">
                    <el-button size="mini" round @click="jump">提交</el-button>
                    <el-button size="mini" round>取消</el-button>
                </div>
            </div>

            <div class="information">
                <div class="imgBox">
                    <el-avatar :size="50"></el-avatar>
                    <div>
                        <div>上海必为检测技术服务有限公司</div>
                        <div class="site">上海市徐汇区示例路888号</div>
                    </div>
                </div>
                <div class="text">上海必为检测服务有限公司是独立的第三方检测机构，特色项目包括：EMC电磁兼 容试验、三综合振动试验、ELV有害物质分析等，服务</div>
                <div class="infoBtn">
                    <el-button round size="small">查看详情</el-button>
                </div>
            </div>
        </el-col>
    </el-row>
</template>
<script>
    import E from "wangeditor";
    export default {
        data() {
            return {
                checkList: ["选中且禁用", "复选框 A"],
                type:1,
                editor: null,
                editorContent: ''
            };
        },
        // catchData是一个类似回调函数，来自父组件，当然也可以自己写一个函数，主要是用来获取富文本编辑器中的html内容用来传递给服务端
        props: ['catchData'], // 接收父组件的方法
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate(valid => {
                    if (valid) {
                        alert("submit!");
                    } else {
                        console.log("error submit!!");
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            handleExceed(files, fileList) {
                this.$message.warning(
                    `当前限制选择 3 个文件，本次选择了 ${
                        files.length
                    } 个文件，共选择了 ${files.length + fileList.length} 个文件`
                );
            },
            beforeRemove(file, fileList) {
                return this.$confirm(`确定移除 ${file.name}？`);
            },
            jump(){
                this.$router.push({
                    path: "/demand",
                })
            },
            changeType(type){
                this.type=type;
            }
        },
        mounted() {
            this.editor = new E(this.$refs.editorElem);
            // 编辑器的事件，每次改变会获取其html内容
            this.editor.customConfig.onchange = html => {
                this.editorContent = html;
                this.catchData(this.editorContent); // 把这个html通过catchData的方法传入父组件
            };
            this.editor.customConfig.menus = [
                // 菜单配置
                'head', // 标题
                'bold', // 粗体
                'fontSize', // 字号
                'fontName', // 字体
                'italic', // 斜体
                'underline', // 下划线
                'strikeThrough', // 删除线
                'foreColor', // 文字颜色
                'backColor', // 背景颜色
                'link', // 插入链接
                'list', // 列表
                'justify', // 对齐方式
                'quote', // 引用
                'emoticon', // 表情
                'image', // 插入图片
                'table', // 表格
                'code', // 插入代码
                'undo', // 撤销
                'redo' // 重复
            ];
            this.editor.create(); // 创建富文本实例
        }
    };
</script>
<style lang="less" >
    .el-row {
        box-sizing: border-box;
        margin: 0;
    }
    .el-form-item {
        margin-bottom: 10px;
    }
    serviceBoxs {
        display: flex;
        flex-direction: column;
    }
    .el-checkbox__label{
        font-size:0.75rem;
    }
    .radioBox {
        background: #ffffff;
        height: 100%;
        padding: 1rem;
        margin-top: 0.2rem;
        border-radius: 0.3rem;
        box-sizing: border-box;
        ul {
            li {
                margin-bottom: 0.5rem;
            }
        }

        .title {
            font-size: 1rem;
            font-weight: 400;
            color: rgba(2, 95, 147, 1);
            padding: 0.3rem 0;
            border-bottom: 1px solid #08ae00;
            margin-bottom: 0.3rem;
        }
    }

    .providerBoxs {
        padding: 1rem;
        box-sizing: border-box;
        background: #ffffff;
        margin: 1rem;
        border-radius: 0.3rem;

        #wangeditor{
            width:100%;

            .w-e-toolbar{
                flex-wrap: wrap;
            }
        }

        .textBox{
            align-self: flex-start;
        }

        .title {
            padding: 0.3rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #f2f4ff;
            margin-bottom: 0.3rem;
        }

        ul {
            padding: 0.5rem 0;

            li {
                display: flex;
                align-items: center;
                width: 100%;

                .label{
                    flex:1;
                }

                &>div{
                    margin:0.3rem 0;
                }

                &>div:last-child{
                    flex:8;
                }

                .items {
                    display: flex;
                    align-items: center;
                }
            }
        }
        .el-avatar {
            margin-right: 0.4rem;
        }
        .btnRow {
            padding: 1rem 0;
            border-top: 1px solid #f2f4ff;
            display: flex;
            justify-content: center;

            .el-button {
                width: 8rem;
            }
        }
    }
    .cardBox {
        padding: 0.5rem;

        .cardItem {
            display: flex;
            .imgBox {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-right: 1rem;

                .el-avatar {
                    margin-bottom: 0.5rem;
                }
            }
            .infoBox {
                flex: 1;
                padding: 0.5rem 0;
            }
            .infoBox > div {
                display: flex;
                justify-content: space-between;

                &:first-child {
                    padding: 0 0.5rem 1rem;
                }
            }
            .numBox {
                padding: 1rem 0.5rem 0;
                border-top: 1px solid #f4f2ff;

                i {
                    margin-right: 0.5rem;
                }
            }
            .numBox > div {
                display: flex;
                align-items: center;

                font-size: 0.75rem;
                font-weight: 400;
                color: rgba(153, 153, 153, 1);
                line-height: 1.5rem;
            }
        }
    }
    .site {
        font-size: 0.75rem;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
        line-height: 1.5rem;
        margin-top: 0.3rem;
    }
    .information {
        padding: 1rem;
        margin: 1rem;
        background: #ffffff;
        box-sizing: border-box;

        .imgBox {
            display: flex;
            padding: 0.5rem 0;
            border-bottom: 1px solid #f4f2ff;

            .el-avatar {
                margin-right: 1rem;
            }
        }

        .text {
            font-size: 0.88rem;
            font-weight: 400;
            color: rgba(153, 153, 153, 1);
            line-height: 1.5rem;
            padding: 1rem 0;
        }

        .infoBtn {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    .cardItems{

        .site{
            margin-bottom: 1rem;
            border-bottom: 1px solid #F4F2FF;
            padding-bottom: 1rem;
        }
        .inputBox{
            display: flex;
            align-items: center;

            label{
                flex-shrink: 0;
            }
        }
        .buttonBox{
            margin-top:2rem;
            padding-top:1rem;
            border-top:1px solid #f4f2ff;
            text-align: right;
        }
    }
    .leftBox {
        min-height: calc(100vh - 12rem);
        background: rgba(255, 255, 255, 1);
        padding: 0.5rem 0 0.5rem 0.5rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;

        & > div {
            display: flex;
            align-items: center;
            width: 8rem;
            padding: 0.8rem 0 0.8rem 0.8rem;
            box-sizing: border-box;
            border-bottom: 1px solid #EEEE;

            i {
                margin-right: 0.3rem;
                font-size: 1.2rem;
            }

        }

        i{
            width: 1rem;
            height: 1rem;
            display: inline-block;
        }

        .icon-all{
            background:url("../assets/imgs/btn-quanbu2.png") no-repeat;
            background-size: contain;
        }

        .icon-inside{
            background:url("../assets/imgs/btn-neibukh1.png") no-repeat;
            background-size: contain;
        }

        .icon-important{
            background:url("../assets/imgs/btn-zhongyao1.png") no-repeat;
            background-size: contain;
        }

        .icon-ordinary{
            background:url("../assets/imgs/btn-putong1.png") no-repeat;
            background-size: contain;
        }



        .active {
            background: rgba(242, 244, 250, 1);
            color: #04AF00;
            border-left: 2px solid #04AF00;

            i::before {
                color: #04AF00;

            }
            .icon-wholes{
                background:url("../assets/imgs/btn-qbry2.png") no-repeat;
                background-size: contain;
            }

            .icon-power{

                background:url("../assets/imgs/btn-qxgl2.png") no-repeat;
                background-size: contain;
            }
        }

        .addBox {
            flex-direction: column;
            padding: 0.8rem;

            i::before {
                color: #04AF00;
                font-size: 1.2rem;
            }

            & > div {
                margin-top: 0.3rem;
            }
        }
    }
</style>