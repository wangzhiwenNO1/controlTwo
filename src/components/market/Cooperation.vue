<template>
    <div class="cooperation">
        <el-row class="topBox">
            <el-col>
                <div class="grid-content viscosity">
                    <div>
                        <span>交易金额：</span>{{coperationdetail.turnover}}
                    </div>
                    <div>
                        <span>客户粘度：</span>
                        <i class="icon"></i>{{coperationdetail.customerViscosity}}
                    </div>
                </div>
            </el-col>
            <el-col>
                <div class="grid-content bg-purple-light">
                    <div>
                        <span>询价总次数：</span>{{coperationdetail.enquiryTimes}}
                    </div>
                    <div>
                        <span>订单总数：</span>{{coperationdetail.orderCount}}
                    </div>
                </div>
            </el-col>
            <el-col>
                <div class="grid-content bg-purple">
                    <div>
                        <span>近30天询价次数：</span>{{coperationdetail.enquiryTimesInMonth}}
                    </div>
                    <div>
                        <span>近30天交易次数：</span>{{coperationdetail.orderCountInMonth}}
                    </div>
                </div>
            </el-col>
            <el-col>
                <div class="grid-content bg-purple-light">
                    <div>
                        <span>以收付款：</span>￥{{coperationdetail.receivedPayment}}
                    </div>
                    <div>
                        <span>代收付款：</span>￥{{coperationdetail.outstandingPayment}}
                    </div>
                </div>
            </el-col>
            <el-col>
                <div class="grid-content bg-purple-light">
                    <div>
                        <span>客户联系人：</span>￥{{coperationdetail.customerContact}}
                    </div>
                    <div>
                        <span>客户经理：</span>{{coperationdetail.customerManager}}
                        <i class="el-icon-edit"></i>
                    </div>
                </div>
            </el-col>
        </el-row>
        <div class="tableBox">
            <div class="title">交易明细</div>
            <el-table border size="small" :data="tableData" style="width: 100%">
                <el-table-column label="任务编号" width="180">
                    <template slot-scope="scope">
                        <div>{{ scope.row.id }}</div>
                    </template>
                </el-table-column>
                <el-table-column label="任务名称" width="180">
                    <template slot-scope="scope">
                        <div>{{ scope.row.orderName }}</div>
                    </template>
                </el-table-column>
                <el-table-column label="任务状态">
                    <template slot-scope="scope">
                        <div class="taskStatusOne" v-if="scope.row.num==0">初始</div>
                        <div class="taskStatusOne" v-if="scope.row.num==1">报价中</div>
                        <div class="taskStatusOne" v-if="scope.row.num==2">进行中</div>
                        <div class="taskStatusOne" v-if="scope.row.num==3">已完成</div>
                        <div class="taskStatusTwo" v-else>已关闭</div>
                    </template>
                </el-table-column>
                <el-table-column label="交易金额">
                    <template slot-scope="scope">
                        <div>￥{{ scope.row.totalPrice }}</div>
                    </template>
                </el-table-column>
                <el-table-column label="交易类型">
                    <template slot-scope="scope">
                        <div v-if="scope.row.totalPrice">
                            <i></i>支出
                        </div>
                        <div v-else>
                            <i></i>收入
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="发票状态">
                    <template slot-scope="scope">
                        <div class="payStatusOne" v-if="scope.row.invoiceStatus">
                            <i></i>未开具
                        </div>
                        <div class="payStatusTwo" v-else>
                            <i></i>已开具
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="首付款截止日期">
                    <template slot-scope="scope">
                        <div>{{ scope.row.gatheringDate }}</div>
                    </template>
                </el-table-column>
                <el-table-column label="收付款状态">
                    <template slot-scope="scope">
                        <div class="paymentOne" v-if="scope.row.gatheringStatus==0">未支付</div>
                        <div class="paymentTwo" v-else-if="scope.row.gatheringStatus==1">已支付</div>
                        <div class="paymentThr" v-else>已逾期</div>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                coperationdetail:{},
                tableData: []
            };
        },
        mounted() {
            this.getInfo();
        },
        methods: {
            //请求服务方信息
            getInfo(){
                let that=this;

                this.Axios.get("/lab2lab/v1/requestor/getcoperationdetail", {
                    id:10
                }).then(function (res) {
                    console.log("请求服务方信息",res);
                    that.coperationdetail=res.data;
                    that.tableData=res.data.transactionDetails;
                })
            },

            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            }
        }
    };
</script>
<style lang="less" >
    .cooperation {
        .topBox {
            background: #ffffff;
            margin: 1rem;
            padding: 1rem;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            display: flex;
        }

        .grid-content {
            padding: 0 1rem;
            border-left: 1px solid #f2f4ff;

            & > div {
                font-size: 0.88rem;
                font-weight: 400;
                color: rgba(153, 153, 153, 1);
                line-height: 1.5rem;

                span {
                    color: rgba(51, 51, 51, 1);
                    margin-right: 1rem;
                }

                i {
                    margin: 0 0.5rem;

                    &::before {
                        color: rgba(131, 230, 34, 1);
                    }
                }
            }
        }
        .viscosity {
            &>div:last-child{
                display: flex;
                align-items: center;
                color: #04AF00;
            }
            .icon {
                display: inline-block;
                width: 1rem;
                height: 1rem;
                background: pink;
            }
        }

        .tableBox {
            padding: 0.5rem 1rem;
            margin: 1rem;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            background: #ffffff;

            .title {
                padding: 0.5rem 0;
                border-bottom: 1px solid #f2f4ff;
                margin-bottom: 1rem;
            }
        }

        .el-table th {
            background: #eeeeee;
        }

        .taskStatusOne {
            width: 5rem;
            background: linear-gradient(
                    90deg,
                    rgba(131, 230, 34, 1),
                    rgba(255, 255, 255, 1)
            );
            border-radius: 1rem;
            text-align: center;
        }
        .taskStatusTwo {
            background: linear-gradient(
                    90deg,
                    rgba(131, 230, 34, 1),
                    rgba(255, 255, 255, 1)
            );
            border-radius: 1rem;
            text-align: center;
            width: 5rem;
        }

        .payStatusOne {
            color: #999999;
            display: flex;
            align-items: center;

            i {
                width: 1rem;
                height: 1rem;
                background: #999999;
                display: inline-block;
                margin-right: 0.3rem;
                border-radius: 50%;
            }
        }
        .payStatusTwo {
            color: rgba(131, 230, 34, 1);
            display: flex;
            align-items: center;

            i {
                width: 1rem;
                height: 1rem;
                background: rgba(131, 230, 34, 1);
                display: inline-block;
                margin-right: 0.3rem;
                border-radius: 50%;
            }
        }

        .paymentTwo {
            color: rgba(131, 230, 34, 1);
        }
        .paymentThr {
            color: #f12c0b;
        }
    }
</style>
