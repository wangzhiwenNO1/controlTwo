<template>
  <div class="order">
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple leftBox">
          <!-- 左上 -->
          <div class="itemBox leftOne">
            <div class="orderNum">#{{orderInfo.orderNum}}</div>
            <div class="orderName">
              <div>{{orderInfo.orderName}}</div>
              <i class="el-icon-more"></i>
            </div>
            <ul class="ulBox">
              <li>
                <div>状态</div>
                <div class="state">已完成</div>
              </li>
              <li>
                <div>负责人</div>
                <div class="conscientious">
                  <div class="avatar"></div>
                  <div>{{orderInfo.customerManagerName}}</div>
                </div>
              </li>
              <li>
                <div>优先级</div>
                <div>
                  <i></i>
                  <div>{{orderInfo.priority}}</div>
                </div>
              </li>
              <li>
                <div>协作人员</div>
                <div class="cooperation">
                  <div class="avatarBox" v-for="(item,index) in orderInfo.memberList" :key="index">
                    <div class="avatar">

                    </div>

                  </div>
                  <div v-if="orderInfo.memberList">{{orderInfo.memberList.length}}+</div>
                  <div class="icon addIcon"></div>
                </div>
              </li>
            </ul>
          </div>
          <!-- 左边第二个 -->
          <div class="itemBox leftTwo">
            <div class="title">需求描述</div>
            <ul class="demandBox">
              <li>
                <div>需求名称</div>
                <div>{{orderInfo.demandName}}</div>
              </li>
              <li>
                <div>需求项目</div>
                <div>{{orderInfo.demandItem}}</div>
              </li>
              <li>
                <div>依据标准</div>
                <div>{{orderInfo.basisStandard}}</div>
              </li>
              <li>
                <div>样品描述</div>
                <div>{{orderInfo.sampleDesc}}</div>
              </li>
              <li>
                <div>完成日期</div>
                <div>
                  <div>{{orderInfo.quotationFinishDate}}</div>
                  <!--                                    <div>Demo 003 检测项目</div>-->
                </div>
              </li>
              <li>
                <div>其他要求</div>
                <div>{{orderInfo.otherRequirements}}</div>
              </li>
            </ul>
          </div>
          <!-- 左边第三个 -->
          <div class="itemBox leftThree">
            <div class="title">
              <div>技术资料</div>
              <el-button type="text" size="mini" icon="el-icon-circle-plus-outline">添加新文件</el-button>
            </div>
            <ul class="fileBox">
              <li v-for="(files,i) in orderInfo.techFiles" :key="i">
                <div>
                  <img :src="files.attrUrl" :alt="files.attrName">
                </div>
                <div class="fileName">{{files.attrName}}</div>
              </li>
            </ul>
          </div>
          <!-- 左边第四个 -->
          <div class="itemBox leftFour">
            <div class="title">
              <div>采购文件</div>
              <el-button type="text" size="mini" icon="el-icon-circle-plus-outline">添加新文件</el-button>
            </div>
            <ul class="fileBox">
              <li v-for="(files,id) in orderInfo.purchaseFiles" :key="id">
                <div>
                  <img :src="files.attrUrl" :alt="files.attrName">
                </div>
                <div class="fileName">{{files.attrName}}</div>
              </li>
            </ul>
          </div>
        </div>
      </el-col>
      <el-col :span="9">
        <div class="grid-content bg-purple middleBox">
          <div class="itemBox middleOne">
            <div class="title">服务方：{{orderInfo.labName}}</div>
            <ul class="ulBox">
              <li>
                <div>服务方详情</div>
                <div class="icon iconService"></div>
              </li>
              <li>
                <div>订单记录</div>
                <div>
                  <div class="icon iconRecord"></div>
                </div>
              </li>
              <li>
                <div>联系人</div>
                <div>
                  <i class="avatar"></i>
                  <div>中</div>
                </div>
              </li>
              <li>
                <div>服务团队</div>
                <div>
                  <div class="avatarBox">
                    <div class="avatar"></div>
                    <div class="avatar"></div>
                  </div>
                  <div v-if="orderInfo.memberList">{{orderInfo.memberList.length}}+</div>
                  <div class="icon addPerson"></div>
                </div>
              </li>
              <li>
                <div>评价服务方</div>
                <div>
                  <i></i>
                  <div class="icon iconEvaluate" @click="showRateprovider"></div>
                </div>
              </li>
            </ul>
          </div>
          <div class="middleTwo itemBox">
            <div class="title">
              <div>报价信息</div>
              <div>
                <div>查看历史报价</div>
                <i class="el-icon-arrow-down"></i>
              </div>
            </div>
            <div>
              <el-table
                      :data="tableData"
                      :span-method="arraySpanMethod"
                      size="mini"
                      style="width: 100%"
              >
                <el-table-column prop="id" label="序号" width="50"></el-table-column>
                <el-table-column prop="projectName" label="项目名称"></el-table-column>
                <el-table-column prop="price" label="单价"></el-table-column>
                <el-table-column prop="unit" label="单位"></el-table-column>
                <el-table-column prop="num" label="数量"></el-table-column>
                <el-table-column prop="totalPrice" label="价格"></el-table-column>
              </el-table>
              <div class="RemarkBox">
                <div>预计订单交付周期 Expected Order Duration: <span>{{quotehistory.deliveryCycle}}</span></div>
                <div>付款条件 Payment Conditions: <span>{{quotehistory.paymentTerms}}</span></div>
                <div>备注说明Note:</div>
                <div class="Remarks">{{quotehistory.remark}}</div>
              </div>
            </div>
            <div class="upOfferBox">
              <a :href="upData.attrUrl" :download="upData.attrUrl">
                <el-button type="primary" size="mini" round class="upOffer" @click="savequote">下载报价</el-button>
              </a>

            </div>
          </div>
          <div class="middleThree itemBox">
            <div class="title">
              <div>分包信息</div>
            </div>
            <div>
              <el-table
                      :data="subcontractTable"
                      :span-method="arraySpanMethod"
                      size="mini"
                      style="width: 100%"
              >
                <el-table-column prop="id" label="序号" width="50"></el-table-column>
                <el-table-column prop="orderName" label="分包项目名称"></el-table-column>
                <el-table-column prop="labName" label="分包房方"></el-table-column>
              </el-table>
            </div>
          </div>
          <div class="middleFour">
            <el-collapse v-model="activeName" accordion>
              <el-collapse-item title="变更记录" name="1">
                <div>
                  <el-table
                          :data="orderChangeRecord"
                          :span-method="arraySpanMethod"
                          size="mini"
                          style="width: 100%"
                  >
                    <el-table-column prop="id" label="序号" width="50"></el-table-column>
                    <el-table-column prop="content" label="变更内容"></el-table-column>
                    <el-table-column prop="reason" label="变更原因"></el-table-column>
                    <el-table-column prop="reportTime" label="提出时间"></el-table-column>
                  </el-table>
                </div>
              </el-collapse-item>
              <el-collapse-item title="问题报告" name="2">
                <div><el-table
                        :data="orderProblemReport"
                        :span-method="arraySpanMethod"
                        size="mini"
                        style="width: 100%"
                >
                  <el-table-column prop="id" label="序号" width="50"></el-table-column>
                  <el-table-column prop="reportTime" label="发生时间"></el-table-column>
                  <el-table-column prop="remark" label="问题描述"></el-table-column>
                  <el-table-column prop="attrUrl" label="附件资料"></el-table-column>
                </el-table></div>
              </el-collapse-item>
              <el-collapse-item title="相关文件" name="3">
                <ul class="fileBox">
                  <li>
                    <div></div>
                    <div>文件名</div>
                  </li>
                </ul>
              </el-collapse-item>
            </el-collapse>
          </div>
        </div>
      </el-col>
      <el-col :span="9">
        <div class="grid-content bg-purple">
          <Chat></Chat>
        </div>
      </el-col>
    </el-row>

    <div>
      <el-dialog title="服务评价"  width="30%" center :visible.sync="dialogFormVisible">
        <div class="rateBox">
          <div>服务及时性：</div>
          <el-rate v-model="formData.timelessScore" :colors="colors"></el-rate>
        </div>
        <div class="rateBox">
          <div>服务准确性：</div>
          <el-rate v-model="formData.accuracyScore" :colors="colors"></el-rate>
        </div>
        <div class="rateBox">
          <div>服务专业性：</div>
          <el-rate v-model="formData.specialScore" :colors="colors"></el-rate>
        </div>
        <div class="label">评语</div>
        <div>
          <el-input v-model="formData.remark" type="textarea" autocomplete="off"></el-input>
        </div>

        <div slot="footer" class="dialog-footer">
          <el-button round size="mini" type="primary" @click="rateprovider">提 交</el-button>
          <el-button round size="mini" class="cancel" @click="centerDialogVisible = false">取 消</el-button>
        </div>
      </el-dialog>
    </div>




    <OrderList></OrderList>

  </div>
</template>

<script>
  // @ is an alias to /src
  import Chat from "../components/Chat";
  import OrderList from "../components/dialog/OrderList";


  export default {
    name: "order",
    components: {
      Chat,
      OrderList,

    },
    data() {
      return {
        orderId:"",
        orderNum:"",	//订单编号
        serviceId:"",
        orderInfo:{},
        subcontractTable:[],
        orderChangeRecord:[],//变更记录
        orderProblemReport:[],//问题报告

        quotehistory:"",

        upData:"",//

        activeName: 1,
        tableData: [
          {
            id: "1",
            name: "王小虎",
            amount1: "234",
            amount2: "3.2",
            amount3: 10,
            amount4: 10
          },
          {
            id: "2",
            name: "王小虎",
            amount1: "165",
            amount2: "4.43",
            amount3: 12,
            amount4: 10
          },
          {
            id: "合计 Total Price：",
            name: "￥12,600"
          },
          {
            id: "含税价格 Final Price with Tax：",
            name: "￥12,600"
          }
        ],
        tableDatas: [
          {
            id: "1",
            name: "有害物质",
            amount1: "上海必为检测技术服务有限公司"
          }
        ],


        formData:{
          orderServiceId:12,
          accuracyScore:"",
          timelessScore:'',
          specialScore:"",
          remark:"",
        },


        colors:["#2C64FF","#2C64FF","#2C64FF"],
        centerDialogVisible: true,
        dialogFormVisible:false,

        formLabelWidth: '120px'
      };
    },
    mounted() {

      if(this.$route.params.id){
        this.orderId=this.$route.params.orderId;
        this.orderNum=this.$route.params.orderId;
        this.serviceId=this.$route.params.orderId;
      }
      this.getOrderInfo();
      this.getquotehistory();
    },
    methods: {
      //获取订单详情
      getOrderInfo(){
        let that = this;
        this.Axios.get("/lab2lab/v1/requestor/getmoreorderdetail", {
          orderId:this.orderId,
          orderNum: this.orderNum,//订单编号
          serviceId:this.serviceId,//服务方Id
        }).then(function (res) {

          if (res.code == 200) {
            that.orderInfo = res.data;
            that.subcontractTable=res.data.subPackage;
            that.orderChangeRecord=res.data.orderChangeRecord;
            that.orderProblemReport=res.data.orderProblemReport;
          }
        })
      },
      //查看历史报价
      getquotehistory(){
        let that = this;
        this.Axios.get("/lab2lab/v1/provider/getquotehistory", {
          id:this.orderId,
          orderNum: this.orderNum,//订单编号
        }).then(function (res) {
          console.log("查看历史报价",res);
          if (res.code == 200) {
            that.quotehistory=res.data;
            that.tableData=res.data.priceList;
          }
        })
      },
      //下载报价
      savequote(){
        let that = this;
        this.Axios.get("/lab2lab/v1/provider/savequote", {
          orderNum:"234",
          quoteNum: "123",//订单编号
        }).then(function (res) {
          console.log("下载报价",res);
          if (res.code == 200) {
            that.quotehistory=res.data;
            that.tableData=res.data.priceList;
          }
        })
      },
      showRateprovider(){
        this.dialogFormVisible=true;
      },
      // 评价服务方
      rateprovider(){
        let that=this;
        let data=that.formData;
        that.Axios.post("/lab2lab/v1/requestor/rateprovider", data).then(function (res) {
          console.log("评价服务方",res);
          if (res.code == 200) {
            this.$message({
              type: 'success',
              message: '已评价服务方'
            });
            that.dialogFormVisible = false
          }
        })
      },
      arraySpanMethod({row, column, rowIndex, columnIndex}) {
        // if (rowIndex % 2 === 0) {
        //   if (columnIndex === 0) {
        //     return [1, 2];
        //   } else if (columnIndex === 1) {
        //     return [0, 0];
        //   }
        // }

        if (rowIndex == 2 || rowIndex == 3) {
          return [1, 5];
          // if (columnIndex === 0) {
          //   return [1, 5];
          // } else if (columnIndex === 1) {
          //   return [0, 0];
          // }
        }
      },

      objectSpanMethod({row, column, rowIndex, columnIndex}) {
        // if (columnIndex === 0) {
        //   if (rowIndex % 2 === 0) {
        //     return {
        //       rowspan: 2,
        //       colspan: 1
        //     };
        //   } else {
        //     return {
        //       rowspan: 0,
        //       colspan: 0
        //     };
        //   }
        // }
      }
    }
  };
</script>
<style lang="less">
  .order {
    padding: 1rem;
    box-sizing: border-box;

    .upOfferBox {
      display: flex;
      justify-content: flex-end;
      margin-top: 0.5rem;
      border-top: 1px solid #eeeeee;
    }

    .upOffer {
      background: linear-gradient(90deg,
      rgba(44, 100, 255, 1),
      rgba(52, 171, 255, 1));
      margin-top: 0.5rem;
    }

    .RemarkBox {
      & > div {
        line-height: 1.5rem;
        font-weight: 600;
      }

      .Remarks {
        color: #999999;
        font-size: 0.75rem;
        font-weight: normal;
      }
    }

    .el-collapse-item {
      padding: 0 1rem;
      box-sizing: border-box;
      margin-bottom: 0.3rem;
      background: #ffffff;
      border-radius: 0.3rem;

      .el-collapse-item__header {
        height: 30px;
        line-height: 30px;
      }
    }

    .el-collapse-item__content {
      padding-bottom: 10px;
    }

    .fileBox {
      display: flex;
      align-items: center;
      padding: 1rem 0;

      li {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        margin-right: 0.5rem;

        & > div:first-child {
          width: 3rem;
          height: 3rem;
          background: pink;
          margin-bottom: 0.3rem;
        }

        & > div:last-child {
          color: #999999;
          font-size: 0.75rem;
        }
      }
    }

    .title {
      padding: 0.3rem 0;
      border-bottom: 1px solid #f2f4fa;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .ulBox {
      display: flex;
      color: #999999;
      font-size: 0.75rem;
      align-items: center;
      justify-content: space-between;
      margin-top: 1rem;

      li {
        padding: 0.25rem;
        border-right: 1px solid #eeeeee;
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;

        & > div {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
        }

        & > div:first-child {
          margin-bottom: 0.5rem;
        }

        .conscientious {
          font-size: 0.75rem;
          flex-direction: column;

          & > div {

            font-size: 0.75rem;
          }
        }

        &:last-child {
          border-right: none;
        }

        .state {
          width: 4rem;
          height: 1.25rem;
          background: linear-gradient(90deg,
          rgba(131, 230, 34, 1),
          rgba(255, 255, 255, 1));
          border-radius: 1rem;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          line-height: 1.25rem;
          align-self: center;
        }

        .avatar {
          width: 1.25rem;
          height: 1.25rem;
          border-radius: 50%;
          background: pink;
          margin-right: 0.2rem;
        }

        .avatarBox {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .icon {
          width: 1rem;
          height: 1rem;

          display: block;
        }

        .addIcon {
          /*background: url("../assets/imgs/Btn-tjtd.png") no-repeat;*/
          background-size: contain;
        }


      }
    }

    .itemBox {
      padding: 0.5rem 1rem;
      background: #ffffff;
      border-radius: 0.3rem;
      margin-bottom: 0.5rem;

      &:last-child {
        margin-bottom: 0;
      }
    }

    .leftBox {
      .leftOne {
        .orderNum {
          font-size: 0.75rem;
          color: #999999;
        }

        .orderName {
          display: flex;
          color: #333333;
          font-size: 0.88rem;
          align-items: center;
          justify-content: space-between;


        }
      }

      .leftTwo {
        .demandBox {
          margin-top: 0.5rem;

          li {
            display: flex;
            align-items: center;

            & > div:first-child {
              flex: 1;
              border-right: 1px solid #f2f4fa;
              height: 100%;
              padding: 0.2rem 0;
              color: #999999;
            }

            & > div:last-child {
              flex: 3;
              padding: 0rem 1rem;
              box-sizing: border-box;
              color: #333333;
            }
          }
        }
      }

      .leftThree,
      .leftFour {
      }
    }
  }

  .middleBox {
    .middleOne {
      background: #ffffff;


      .iconService {
        /*background: url("../assets/imgs/btn-fwf2.png") no-repeat;*/
        background-size: contain;
      }

      .iconRecord {
        /*background: url("../assets/imgs/Btn-ddjl.png") no-repeat;*/
        background-size: contain;
      }

      .addPerson {
        /*background: url("../assets/imgs/Btn-tjtd.png") no-repeat;*/
        background-size: contain;
      }

      .iconEvaluate {
        /*background: url("../assets/imgs/Btn-bianji.png") no-repeat;*/
        background-size: contain;
      }
    }

    .fileBox {
      padding: 0;
    }
  }

  .middleTwo {

    .title {
      & > div:last-child {
        color: #2C64FF;
        display: flex;
        align-items: center;

        & > div {
          font-size: 0.75rem;
        }

        i {
          color: #2C64FF;
        }
      }
    }

  }
</style>
