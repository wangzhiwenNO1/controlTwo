<template>
    <div class="serviceBox">
        <div class="showBtn">
            <div class="active">
                <i class="icon close-eyes"></i>
                <span>不公开显示点评</span>
            </div>
            <div>
                <i class="icon open-eyes"></i>
                <span>公开显示点评</span>
            </div>
        </div>


        <ul class="serviceUl">
            <li v-for="(item,index) in listInfo" :key="index">
                <el-avatar class="avatar" :size="30" :src="listInfo.pic"></el-avatar>
                <div>
                    <div>{{item.userName}}|{{item.labName}}</div>
                    <div class="fen">综合评分：{{item.averageRate}}/5.0</div>
                    <div>{{item.remark}}</div>
                    <div class="time">2019年8月6日 13:15</div>
                </div>
            </li>

        </ul>

        <el-pagination
                class
                background
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage3"
                :page-size="10"
                layout="prev, pager, next, jumper"
                :total="count"
        ></el-pagination>
    </div>
</template>
<script>

    import AddLink from "../dialog/AddLink";

    export default {
        name: "Service",
        components: {
            AddLink
        },
        data() {
            return {
                currentPage3: 1,
                listInfo: [],
                count: "",
            }
        },
        mounted() {
            this.getList();
        },
        methods: {
            getList() {
                let that = this;

                this.Axios.get("/lab2lab/v1/requestor/getrates", {
                    id: 10,
                    page: 1,
                    limit: 10
                }).then(function (res) {
                    console.log("评价列表", res);
                    that.listInfo = res.data;
                    that.count = res.count
                })
            },
            handleSizeChange() {
            },
            handleCurrentChange() {
            },

        }
    };
</script>
<style lang="less" scoped>
    .serviceBox {
        height: 27rem;
        background: white;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;

        .showBtn {
            width: 100%;
            display: flex;
            align-self: center;
            padding: 0.5rem 1rem 0;
            box-sizing: border-box;

            & > div {
                display: flex;
                align-items: center;
                margin-right: 1rem;
            }

            i {
                display: inline-block;
                width: 1rem;
                height: 0.5rem;
                background: pink;
                margin-right: 0.3rem;
            }

            .close-eyes {
                background: url("../../assets/imgs/btn-gkdp1.png") no-repeat;
                background-size: contain;
            }

            .open-eyes {
                background: url("../../assets/imgs/btn-bgkdp1.png") no-repeat;
                background-size: contain;
            }

            .active {
                color: #04af00;

                .close-eyes {
                    background: url("../../assets/imgs/btn-gkdp2.png") no-repeat;
                    background-size: contain;
                }

                .open-eyes {
                    background: url("../../assets/imgs/btn-bgkdp2.png") no-repeat;
                    background-size: contain;
                }
            }
        }
    }

    .serviceUl {
        padding: 1rem;
        width: 100%;
        box-sizing: border-box;

        li {
            display: flex;
            padding: 1rem;
            background: rgba(242, 244, 250, 1);
            box-sizing: border-box;
            line-height: 1.5rem;
            position: relative;

            & > div {
                width: 100%;
            }

            .avatar {
                margin-right: 0.5rem;
                flex-shrink: 0;
            }

            .fen {
                font-size: 0.75rem;
                font-weight: 400;
                color: rgba(153, 153, 153, 1);
                margin-bottom: 0.3rem;
            }

            .time {
                text-align: right;
                font-size: 0.75rem;
                font-weight: 400;
                color: rgba(153, 153, 153, 1);
            }

            .btnDiv {
                width: 5.63rem;
                height: 1.88rem;
                background: linear-gradient(90deg,
                rgba(4, 175, 0, 1),
                rgba(52, 225, 34, 1));
                border-radius: 1rem;
                position: absolute;
                text-align: center;
                line-height: 1.88rem;
                right: 1rem;
                top: 1rem;
                color: #ffffff;
            }
        }
    }
</style>
