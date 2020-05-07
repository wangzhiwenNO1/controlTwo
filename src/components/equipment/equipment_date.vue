<template>
    <div class="equipmentDate">
        <div>
            <div class="tableBoxs">
                <div class="title">
                    <div class="tagsBox">
                        <div :class="{active:weekType==1}" @click="changeWeek(1)">按周</div>
                        <div :class="{active:weekType==2}" @click="changeWeek(2)">按月</div>
                    </div>
                    <div>
                        Nov 11–Nov 17-2019
                        <i class></i>
                    </div>
                </div>
                <div v-if="weekType==1">
                    <el-table border size="small" :data="tableData" style="width: 100%">
                        <el-table-column label>
                            <template slot-scope="scope">
                                <div>{{ scope.row.date }}</div>
                            </template>
                        </el-table-column>
                        <el-table-column label="Mon 11">
                            <template slot-scope="scope">
                                <div class="blueBg" v-if="scope.row.mon==0"></div>
                                <div class="greenBgs" v-else-if="scope.row.mon==1"></div>
                                <div class="greyBg" v-else></div>
                            </template>
                        </el-table-column>
                        <el-table-column label="Tue 12">
                            <template slot-scope="scope">
                                <div class="blueBg" v-if="scope.row.tue==0"></div>
                                <div class="greenBgs" v-else-if="scope.row.tue==1"></div>
                                <div class="greyBg" v-else></div>
                            </template>
                        </el-table-column>
                        <el-table-column label="Wed 13">
                            <template slot-scope="scope">
                                <div class="blueBg" v-if="scope.row.wed==0"></div>
                                <div class="greenBgs" v-else-if="scope.row.wed==1"></div>
                                <div class="greyBg" v-else></div>
                            </template>
                        </el-table-column>
                        <el-table-column label="Thu 14">
                            <template slot-scope="scope">
                                <div class="blueBg" v-if="scope.row.thu==0"></div>
                                <div class="greenBgs" v-else-if="scope.row.thu==1"></div>
                                <div class="greyBg" v-else></div>
                            </template>
                        </el-table-column>
                        <el-table-column label="Fri 15">
                            <template slot-scope="scope">
                                <div class="blueBg" v-if="scope.row.fri==0"></div>
                                <div class="greenBgs" v-else-if="scope.row.fri==1"></div>
                                <div class="greyBg" v-else></div>
                            </template>
                        </el-table-column>
                        <el-table-column label="Sat 16">
                            <template slot-scope="scope">
                                <div class="blueBg" v-if="scope.row.set==0"></div>
                                <div class="greenBgs" v-else-if="scope.row.set==1"></div>
                                <div class="greyBg" v-else></div>
                            </template>
                        </el-table-column>
                        <el-table-column label="Sun 17">
                            <template slot-scope="scope">
                                <div class="blueBg" v-if="scope.row.sun==0"></div>
                                <div class="greenBgs" v-else-if="scope.row.sun==1"></div>
                                <div class="greyBg" v-else></div>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>

                <div v-else>
                    <el-calendar>
                        <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
                        <template slot="dateCell" slot-scope="{date, data}">
                            <div class="calendarBox">
                                <div class="calendar-day">{{ data.day.split('-').slice(2).join('-') }}</div>
                                <div v-for="(item,index) in calendarData" :key="index">
                                    <div v-if="(item.months).indexOf(data.day.split('-').slice(1)[0])!=-1&&(item.days).indexOf(data.day.split('-').slice(2).join('-'))!=-1">
                                        <el-row class="calendarItem">
                                            <el-col v-if="item.useing!=0" :span="item.useing">
                                                <div class="gridItem bg-purple-gl"></div>
                                            </el-col>
                                            <el-col v-if="item.used!=0" :span="item.used">
                                                <div class="gridItem bg-purple bg-purple-ligh "></div>
                                            </el-col>
                                            <el-col v-if="item.unavailable!=0" :span="item.unavailable">
                                                <div class="gridItem bg-purple-ash"></div>
                                            </el-col>
                                        </el-row>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </el-calendar>
                </div>
                <div class="introduce">
                    <div>
                        <i class="icon blueIcon"></i>未使用
                    </div>
                    <div>
                        <i class="icon greenIcon"></i>已使用
                    </div>
                    <div>
                        <i class="icon greyIcon"></i>不可用
                    </div>
                </div>
            </div>

            <div class="tableBoxes">
                <div class="title">设备使用史</div>
                <el-table border size="small" :data="tableDataTwo" style="width: 100%">
                    <el-table-column label="开始时间">
                        <template slot-scope="scope">
                            <div>{{ scope.row.startTime }}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="结束时间">
                        <template slot-scope="scope">
                            <div>{{ scope.row.endTime }}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="任务编号">
                        <template slot-scope="scope">
                            <div>{{ scope.row.taskCode }}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="使用项目/事件">
                        <template slot-scope="scope">
                            <div>{{ scope.row.itemName }}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="使用时长">
                        <template slot-scope="scope">
                            <div>{{ scope.row.userTime }}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="收入">
                        <template slot-scope="scope">
                            <div>{{ scope.row.income }}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="成本">
                        <template slot-scope="scope">
                            <div>{{ scope.row.cost }}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="收益">
                        <template slot-scope="scope">
                            <div>{{scope.row.profit}}</div>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "eripment_info",
        data() {
            return {
                weekType: 1,
                tableData: [
                    {
                        date: "00:00 02:00",
                        mon: 0,
                        tue: 0,
                        wed: 0,
                        thu: 1,
                        fri: 2,
                        set: 0,
                        sun: 0
                    }
                ],
                tableDataTwo: [
                    {
                        startTime: "2019年12月2日",
                        endTime: "2019年12月6日",
                        num: "T20191201001",
                        things: "高温试验",
                        times: "120",
                        price: "3600",
                        cost: "2400",
                        profit: "1200"
                    }
                ],
                calendarData: [
                    {months: ['03'], days: ['01'], useing: 24, used: 0, unavailable: 0},
                    {months: ['03'], days: ['02'], useing: 12, used: 12, unavailable: 0},
                    {months: ['03'], days: ['03'], useing: 0, used: 24, unavailable: 0},
                    {months: ['03'], days: ['04'], useing: 6, used: 18, unavailable: 0},
                    {months: ['03'], days: ['05'], useing: 3, used: 21, unavailable: 24},
                    {months: ['03'], days: ['06'], useing: 20, used: 4, unavailable: 24},
                    {months: ['03'], days: ['07'], useing: 0, used: 0, unavailable: 24},
                    {months: ['03'], days: ['08'], useing: 0, used: 0, unavailable: 24},
                ],
                value: new Date()

            };
        },
        mounted() {
            this.getdeviceusagelog();
            this.getdevicecalendar();
        },
        methods: {
            //  设备使用记录
            getdeviceusagelog() {
                let that = this;
                that.Axios.get("/lab2lab/v1/provider/getdeviceusagelog", {
                    id: 12,
                    deviceCode: "122",
                    count: "10",
                    pageNumber: "1"
                }).then(function (res) {
                    console.log("设备使用记录", res);
                    if (res.code == 200) {
                        that.tableDataTwo = res.data;
                    }
                })
            },
            // 设备日历
            getdevicecalendar() {
                let that = this;
                that.Axios.get("/lab2lab/v1/provider/getdeviceusagelog", {
                    id: 12,
                    deviceCode: "122",
                    startDate: "2020-01-01",
                    endDate: "2020-02-01"
                }).then(function (res) {
                    console.log("设备日历", res);
                    if (res.code == 200) {
                        that.tableDataTwo = res.data;
                    }
                })
            },
            changeWeek(type) {
                this.weekType = type;
            },
        }
    };
</script>

<style lang="less">

    .calendar-day {
        text-align: center;
        color: #202535;
        line-height: 30px;
        font-size: 12px;
        margin-bottom: 1rem;
    }

    .is-selected {
        color: #F8A535;
        font-size: 10px;
        margin-top: 5px;
    }

    #calendar .el-button-group > .el-button:not(:first-child):not(:last-child):after {
        content: '当月';
    }

    .bg-purple-gl {
        background: rgba(178, 196, 246, 1);
    }

    .bg-purple-ligh {

        background: rgba(176, 226, 128, 1);
    }

    .bg-purple-ash {
        background: rgba(223, 224, 229, 1);
    }

    .calendarItem {
        border-radius: 1rem;
        height: 1.2rem;
        overflow: hidden;

        .gridItem {
            height: 1.2rem;
        }
    }


    .equipmentDate {
        .greenBgs {
            background: rgba(176, 226, 128, 1);
        }

        .topBox {
            background: #ffffff;
            margin-bottom: 1rem;
            padding: 1rem;

            .title {
                padding: 0.5rem;
                border-bottom: 1px solid #f2f4ff;
                margin-bottom: 1rem;
            }
        }

        .introduce {
            display: flex;
            align-items: center;
            padding: 1.5rem 0 0;

            & > div {
                font-size: 0.75rem;
                color: #999999;
            }

            & > div {
                margin-right: 0.5rem;
            }

            .icon {
                width: 0.8rem;
                height: 0.8rem;
                margin-right: 0.3rem;
                border-radius: 50%;
                display: inline-block;
            }

            .blueIcon {
                background: #b2c4f6;
            }

            .greenIcon {
                background: #b0e280;
            }

            .greyIcon {
                background: #dfe0e5;
            }
        }

        .rows {
            .el-col {
                display: flex;
                align-items: center;

                & > div {
                    width: 50%;
                    text-align: center;
                    height: 2rem;
                    line-height: 2rem;
                    border: 1px solid #eeeeee;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .label {
                    background: #e7e9ef;
                }
            }
        }

        .rowTwo {
            .el-col {
                display: flex;

                & > div {
                    text-align: left;
                    height: 2rem;
                    line-height: 2rem;
                    border: 1px solid #eeeeee;
                    width: 100%;
                }

                .label {
                    text-align: center;
                    background: #e7e9ef;
                }
            }
        }

        .tableBox {
            .el-table .cell {
                font-size: 0.75rem;

                & > div {
                    font-size: 0.75rem;
                }
            }
        }

        .tableBoxes {
            margin: 0.5rem 0;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            background: #ffffff;
            padding: 1rem;

            .title {
                display: flex;
                justify-content: space-between;
                padding-bottom: 0.5rem;
                border-bottom: 1px solid #eeeeee;
                margin-bottom: 0.5rem;
            }
        }

        .tableBoxs {
            margin: 0.5rem 0;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            background: #ffffff;
            padding: 1rem;

            .title {
                display: flex;
                justify-content: space-between;
            }

            .tagsBox {
                display: flex;

                & > div {
                    margin-right: 1rem;
                }

                .active {
                    color: #2c64ff;
                }
            }

            .el-table--small td {
                padding: 0;
            }

            .blueBg {
                background: #b2c4f6;
                width: 100%;
                height: 1.8rem;
            }

            .greenBgs {
                background: #b0e280;
                width: 100%;
                height: 1.8rem;
            }

            .greyBg {
                background: #dfe0e5;
                width: 100%;
                height: 1.8rem;
            }

            .cell {
                padding: 0;
            }

            .title {
                padding: 0.5rem;
                border-bottom: 1px solid #f2f4ff;
                margin-bottom: 1rem;
            }
        }

        .el-table th {
            background: #eeeeee;
        }

        .taskStatusOne {
            width: 5rem;
            background: linear-gradient(90deg,
            rgba(44, 168, 255, 1),
            rgba(255, 255, 255, 1));
            border-radius: 1rem;
            text-align: center;
        }

        .taskStatusTwo {
            background: linear-gradient(90deg,
            rgba(131, 230, 34, 1),
            rgba(255, 255, 255, 1));
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
            color: #2c64ff;
            display: flex;
            align-items: center;

            i {
                width: 1rem;
                height: 1rem;
                background: #2c64ff;
                display: inline-block;
                margin-right: 0.3rem;
                border-radius: 50%;
            }
        }

        .paymentTwo {
            color: #2c64ff;
        }

        .paymentThr {
            color: #f12c0b;
        }
    }
</style>
