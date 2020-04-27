<template>
  <div class="workbench">
    <div class="topBox">
      <ul>
        <li>
          <div>待报价订单</div>
          <div>{{getNumbers.waiting}}</div>
        </li>
        <li>
          <div>执行中订单</div>
          <div>{{getNumbers.running}}</div>
        </li>
        <li>
          <div>已完成订单</div>
          <div>{{getNumbers.finished}}</div>
        </li>
        <li>
          <div>总收入</div>
          <div>
            <span>￥</span>
            {{getNumbers.income}}
          </div>
        </li>
        <li>
          <div>待收款</div>
          <div>
            <span>￥</span>82,345
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div>已完成订单</div>
          <div>{{getNumbers.income}}</div>
        </li>
        <li>
          <div>已完成订单</div>
          <div>{{getNumbers.income}}</div>
        </li>
      </ul>
    </div>
    <div class="mainBoxs">
      <div class="leftBoxs">
        <div class="leftTop itemBox">
          <div class="title">快捷操作</div>
          <div class="quickRow quick">
            <div>
              <i class="icon-cjxbj"></i> 创建新报价
            </div>
            <div>
              <i class="icon-yqkh"></i> 邀请客户
            </div>
          </div>
          <div class="quickRow quick">
            <div>
              <i class="icon-xsb"></i> 添加新设备
            </div>
            <div>
              <i class="icon-hzf"></i> 链接新合作方
            </div>
          </div>
        </div>
        <div class="leftRight itemBox">
          <div class="title">代办事项</div>
          <div>
            <!-- 无线循环 -->
            <!-- <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
                          <li v-for="(i,index) in count" class="infinite-list-item" :key="index">{{ i }}</li>
            </ul>-->
            <ul class="dealt">
              <li v-for="(i,index) in 3" :key="index">
                <div>
                  <div class="dealtLeft">
                    <i class="icon"></i>
                    <span>您收到一份报价，请查看</span>
                  </div>
                  <div class="time">2019-08-19 10:34</div>
                </div>
                <div>
                  <el-button size="mini" round>查看详情</el-button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="rightBox itemBox">
        <div class="title">统计分析</div>
        <div class="tabBoxs">
          <div>
            <i class="icon icon-expenditure"></i>支出统计
          </div>
          <div>
            <i class="icon icon-order"></i>订单统计
          </div>
        </div>
        <div>
          <el-select v-model="value" placeholder="最近30天">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>

          <el-date-picker
            v-model="value2"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions"
          ></el-date-picker>
        </div>

        <div></div>
        <div class="trendBox">
          <div class="title">
            趋势图
            <i class="icon"></i>
          </div>
        </div>
        <div class="echartBox"></div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "workbench",
  components: {},
  data() {
    return {
      count: 0,
      options: [
        {
          value: "选项1",
          label: "30天"
        },
        {
          value: "选项2",
          label: "一年"
        }
      ],
      value: "",
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      value1: "",
      value2: "",
      getNumbers: {
        waiting: "",
        running: "",
        finished: "",
        income: "",
        devCount: "",
        projectCount: "",
        partnerCount: "",
        customerCount: ""
      }
    };
  },
  mounted() {
    this.initGetData();
  },
  methods: {
    initGetData() {
      let _this = this;
      let url = "/lab2lab/v1/provider/getnumbers";
      let access_token = this.$store.state.userInfo.access_token;
      this.Axios.get(url, { access_token: access_token }).then(res => {
        console.log(res);
        if (res.code == 200) {
          _this.getNumbers = res.data;
          console.log(_this.getNumbers);
        }
      });
    },
    load() {
      this.count += 2;
    }
  }
};
</script>

<style lang="less" scoped>
.workbench {
  padding: 1rem;
  background: rgba(242, 244, 250, 1);
  min-height: calc(100vh - 9.6rem);
  box-sizing: border-box;

  .title {
    padding: 0.3rem 0;
    border-bottom: 1px solid #f2f4fa;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
    font-weight: 400;
    font-size: 1rem;
  }

  .topBox {
    height: 4.88rem;
    background: rgba(255, 255, 255, 1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: black;

    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;

      li {
        text-align: center;
        width: 9rem;
        border-right: 1px solid #eeeeee;

        & > div:first-child {
          color: #999;
          height: 1rem;
          font-size: 0.75rem;
          margin-bottom: 0.5rem;
        }

        & > div:last-child {
          font-weight: 600;
          font-size: 1.5rem;
          // font-size: 12px;
          // font-weight: 100;
        }

        &:last-child {
          border-right: none;
        }
      }
    }

    & > ul:last-child {
      & div:last-child {
        color: #04af00;
      }
    }
  }

  .itemBox {
    padding: 1rem;
    background: #fff;
  }

  .mainBoxs {
    display: flex;

    .leftBoxs {
      flex: 1;

      .leftTop {
        margin: 1rem 0;
      }

      .quickRow {
        display: flex;
        justify-content: center;
        padding: 1rem;
      }

      .quick {
        & > div {
          width: 12.5rem;
          height: 3.13rem;
          background: rgba(255, 255, 255, 1);
          border: 1px solid rgba(218, 220, 227, 1);
          border-radius: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 1rem;
        }

        i {
          display: inline-block;
          width: 1.2rem;
          height: 1.2rem;
          background: pink;
          margin-right: 0.3rem;
        }

        .icon-cjxbj {
          background: url("../assets/imgs/btn-cjxbj.png") no-repeat;
          background-size: contain;
        }

        .icon-yqkh {
          background: url("../assets/imgs/btn-yqkh.png") no-repeat;
          background-size: contain;
        }

        .icon-xsb {
          background: url("../assets/imgs/btn-tianjia1.png") no-repeat;
          background-size: contain;
        }

        .icon-hzf {
          background: url("../assets/imgs/btn-ljxhzf.png") no-repeat;
          background-size: contain;
        }
      }

      .rightTop {
        padding: 1rem;
        background: #fff;
      }
    }

    .rightBox {
      flex: 1;
      margin: 1rem 0 1rem 1rem;
      background: #fff;

      .title {
        margin-top: 0.5rem;
      }
    }
  }

  .dealt {
    li {
      border-bottom: 1px solid #eeeeee;
      padding: 1rem 0;
      display: flex;
      align-items: center;
      justify-content: space-between;

      & > div {
        display: flex;
        align-items: center;
      }

      .el-button {
        color: #04af00;
        border: 1px solid #04af00;
      }
    }

    .icon {
      width: 0.5rem;
      height: 0.5rem;
      margin-right: 0.5rem;
      display: inline-block;
      background: #04af00;
      border-radius: 50%;
    }

    .time {
      font-size: 0.75rem;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
      padding-left: 1rem;
    }
  }

  .infinite-list {
    height: 20rem;
    background: pink;
  }

  .tabBoxs {
    display: flex;
    margin-bottom: 1rem;

    & > div {
      padding: 0.5rem 1rem;

      margin-right: 1rem;
      display: flex;
      align-items: center;
      border-bottom: 3px solid #04af00;
      font-size: 0.88rem;
    }

    .icon {
      width: 1rem;
      height: 1rem;
      margin-right: 0.5rem;
      display: block;
    }

    .icon-expenditure {
      background: url("../assets/imgs/btn-zhichu2.png") no-repeat;
      background-size: contain;
    }

    .icon-order {
      background: url("../assets/imgs/btn-dingdan2.png") no-repeat;
      background-size: contain;
    }
  }

  .trendBox {
    .title {
      justify-content: flex-start;
    }

    .icon {
      display: inline-block;
      width: 1rem;
      height: 1rem;
      margin-left: 0.5rem;
      background: url("../assets/imgs/btn-hqbz1.png") no-repeat;
      background-size: contain;
    }
  }

  .echartBox {
    height: 20rem;
    background: #eeeeee;
  }
}
</style>