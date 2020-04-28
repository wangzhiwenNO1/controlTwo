<template>
  <div class="orderIng">
    <el-row :gutter="10">
      <el-col :span="6">
        <div class="grid-content bg-purple OrderIngLeftBox">
          <div class="inputBox">
            <div>
              <el-input size="mini" suffix-icon="el-icon-search"></el-input>
              <el-select v-model="value" size="mini" placeholder="请选择">
                <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                ></el-option>
              </el-select>
            </div>
            <i class="el-icon-circle-plus-outline"></i>
          </div>
          <!-- 左上 -->
          <ul class="infinite-list " v-infinite-scroll="load" style="overflow:auto">
            <li v-for="(item,index) in orderList" :key="index" class="infinite-list-item" @click="changeOrder(index)">
              <div class="itemBox leftOne">
                <div class="orderNum">#{{item.orderNum}}</div>
                <div class="orderName">
                  <div>{{item.orderName}}</div>
                  <div class="price">￥{{item.floorQuote}}</div>
                  <i class="el-icon-more"></i>
                </div>
                <ul class="ulBoxs">
                  <li>
                    <div>状态</div>
                    <div class="state" v-if="item.status==0">初始</div>
                    <div class="state" v-else-if="item.status==1">报价中</div>
                    <div class="state" v-else-if="item.status==2">进行中</div>
                    <div class="state" v-else-if="item.status==3">已完成</div>
                    <div class="state" v-else-if="item.status==4">已关闭</div>
                  </li>
                  <li>
                    <div>负责人</div>
                    <div class="conscientious">
                      <div class="avatar"></div>
                      <div>{{item.customerManagerName}}</div>
                    </div>
                  </li>
                  <li>
                    <div>优先级</div>
                    <div>
                      <i></i>
                      <div>{{item.priority}}</div>
                    </div>
                  </li>
                  <li>
                    <div>未读消息</div>
                    <div>
                      <i class="el-icon-chat-dot-square"></i>
                      <span>{{item.unreadMessageCount}}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>


        </div>
      </el-col>
      <el-col :span="9">
        <div class="grid-content bg-purple middleBox">
          <div class="itemBox leftOne">
            <div class="orderNum">#{{orderInfo.orderNum}}</div>
            <div class="orderName">
              <div>{{orderInfo.orderName}}</div>
              <i class="el-icon-more moreBtn" @click="changeOperating">
                <div class="triangle" v-if="operating"></div>
                <ul v-if="operating">
                  <li>操作</li>
                  <li>
                    <i class="el-icon-edit-outline"></i>
                    <span>编辑订单</span>
                  </li>
                  <li>
                    <i class="el-icon-delete"></i>
                    <span>删除订单</span>
                  </li>
                  <li>
                    <i class="el-icon-download"></i>
                    <span>下载订单</span>
                  </li>
                  <li>确定</li>
                </ul>
              </i>
            </div>
            <ul class="ulBoxs">
              <li>
                <div>状态</div>
                <div class="state" v-if="orderInfo.status==0">初始</div>
                <div class="state" v-else-if="orderInfo.status==1">报价中</div>
                <div class="state" v-else-if="orderInfo.status==2">进行中</div>
                <div class="state" v-else-if="orderInfo.status==3">已完成</div>
                <div class="state" v-else="orderInfo.status==4">已关闭</div>
              </li>
              <li>
                <div>负责人</div>
                <div class="conscientious">
                  <div @click="changePrincipal">
                    <div class="avatar"></div>
                    <div>{{orderInfo.customerManagerName}}</div>
                  </div>

                  <div class="triangle" v-if="principal"></div>
                  <ul v-if="principal">
                    <li>指定负责人</li>
                    <li>
                      <el-avatar :size="20"></el-avatar>
                      <span>令狐冲</span>
                    </li>
                    <li>
                      <el-avatar :size="20"></el-avatar>
                      <span>令狐冲</span>
                    </li>
                    <li>
                      <el-avatar :size="20"></el-avatar>
                      <span>令狐冲</span>
                    </li>
                    <li>确定</li>
                  </ul>
                </div>
              </li>
              <li>
                <div>优先级</div>
                <div class="priority">
                  <div @click="changePriority">
                    <i class="yellowIcon"></i>
                    <div>{{orderInfo.priority}}</div>
                  </div>

                  <div class="triangle" v-if="priority"></div>
                  <ul v-if="priority">
                    <li>指定优先级</li>
                    <li>
                      <i class="redIcon"></i>
                      <span>高</span>
                    </li>
                    <li>
                      <i class="yellowIcon"></i>中
                    </li>
                    <li>
                      <i class="purpleIcon"></i>低
                    </li>
                    <li>确定</li>
                  </ul>
                  <!-- <el-dropdown @command="handleCommand" trigger="click">
                    <span class="el-dropdown-link">
                      <i class="el-icon-arrow-down"></i>中
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item command="d" class="priorityTitle">指定优先级</el-dropdown-item>
                      <el-dropdown-item command="a">
                        <i class="el-icon-arrow-down"></i>高
                      </el-dropdown-item>
                      <el-dropdown-item command="b">
                        <i class="el-icon-arrow-down"></i>中
                      </el-dropdown-item>
                      <el-dropdown-item command="c">
                        <i class="el-icon-arrow-down"></i>低
                      </el-dropdown-item>
                      <el-dropdown-item command="e" divided>确定</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>-->
                </div>
              </li>
              <li>
                <div>协作人员</div>
                <div class="cooperation">
                  <div class="avatarBox">
                    <div class="avatar"></div>
                    <div class="avatar"></div>
                  </div>
                  <div>3+</div>
                  <div class="icon addIcon" @click="changeTeamwork"></div>
                  <div class="triangle" v-if="teamwork"></div>
                  <ul v-if="teamwork">

                    <li>协作人员</li>
                    <li class="cooperationTwoBox">
                      <ul class="cooperationTwo">
                        <li v-for="(item,index) in 3" :key="index">
                          <el-avatar :size="20"></el-avatar>
                          <span>令狐冲</span>
                          <i class="el-icon-remove-outline"></i>
                        </li>

                        <li>
                          <div>保存</div>
                          <div>取消</div>
                        </li>
                      </ul>
                    </li>
                    <li v-for="(item,index) in orderInfo.memberList" :key="index">
                      <el-avatar :size="20"></el-avatar>
                      <span>{{item.teamUserName}}</span>
                    </li>


                    <li>编辑</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div class="itemBox middleOne">
            <div class="title">
              <div>选择服务方</div>
              <div class="btnRows">
                <el-button size="mini" type="text" icon="el-icon-circle-plus-outline">添加服务方</el-button>
                <el-button size="mini" class="vsBtn" type="text" icon="iconVs" @click="compare">价格比较</el-button>
                <span>2/5</span>
              </div>
            </div>
            <ul class="labBoxs">
              <li v-for="(ite,idx) in orderInfo.subPackage">
                <div class="avatarBox">
                  <el-avatar :src="ite.labLogo" :size="30"></el-avatar>
                  <div>{{orderInfo.labName}}</div>
                </div>
                <div>￥{{ite.totalPrice}}</div>
                <div class="btnBox">
                  <div class="infoBtn" @click="goToInfo">详情</div>
                  <div class="ratifyBtn" @click="quote(1,idx)" v-if="orderInfo.status==1">批准</div>
                  <div class="refuseBtn" @click="quote(2,idx)" v-if="orderInfo.status==1">拒绝</div>
                </div>
              </li>
            </ul>
          </div>

          <div class="itemBox">
            <div class="itemBox middleTwo leftTwo">
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
                  <div>需求完成日期</div>
                  <div>
                    <div>{{orderInfo.quotationFinishDate}}</div>
                  </div>
                </li>
                <li>
                  <div>其他要求</div>
                  <div>{{orderInfo.otherRequirements}}</div>
                </li>
              </ul>
            </div>
          </div>
          <div class="middleThree itemBox">
            <div>
              <div class="title">
                <div>技术资料</div>
                <div>
                  <el-button type="text" size="mini" icon="el-icon-circle-plus-outline">添加新文件
                  </el-button>
                  <i class="el-icon-arrow-up"></i>
                </div>
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
          </div>
          <div class="middleThree itemBox">
            <div>
              <div class="title">
                <div>采购文件（订单或合同）</div>
                <div>
                  <el-button type="text" size="mini" icon="el-icon-circle-plus-outline">添加新文件
                  </el-button>
                  <i class="el-icon-arrow-up"></i>
                </div>
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
        </div>
      </el-col>
      <el-col :span="9">
        <div class="grid-content bg-purple">
          <Chat></Chat>
        </div>
      </el-col>
    </el-row>
    <div>
      <el-dialog width="90%" title="报价比较" center :visible.sync="outerVisible">
        <div class="outBox">
          <ul>
            <li v-for="(item,index) in quotationList" :key="index">
              <div class="avatarBox">
                <el-avatar :size="30" :src="item.serviceLabLogo"></el-avatar>
                <div>{{item.serviceLabName}}</div>
              </div>
              <div class="infoBox">
                <div class="infoItem">
                  <div>资质</div>
                  <div>{{item.qualifications}}</div>
                </div>
                <div class="infoItem">
                  <div>综合评价</div>
                  <div>{{item.compositeScore}}/5</div>
                </div>
                <div class="infoItem">
                  <div>总价</div>
                  <div>￥{{item.totalPrice}}</div>
                </div>
                <div class="infoItem">
                  <div>完成周期</div>
                  <div>{{item.deliveryCycle}}</div>
                </div>
              </div>
              <div class="btnBoxs">
                <el-button round size="mini" class="blueBtn" @click="quote(2,index)">批准</el-button>
                <el-button round size="mini" class="redBtn" @click="innerVisible = true">详情</el-button>
              </div>
            </li>
            <li class="addLis">
              <div class="addBox">
                <i class="el-icon-circle-plus-outline"></i>
                <div>发起新的询价</div>
              </div>
              <div class="tips">每个订单最多可以获得5份报价</div>
            </li>
          </ul>
        </div>
        <el-dialog
                width="60%"
                title="内层 Dialog"
                :visible.sync="innerVisible"
                append-to-body
                center>
          <el-form :model="form" class="formBox">
            <div>反馈意见</div>
            <div>
              <el-input type="textarea" v-model="form.name"></el-input>
            </div>
            <div>上传采购订单（PO）</div>
            <div>
              <el-upload
                      class="upload-demo"
                      ref="upload"
                      action="https://jsonplaceholder.typicode.com/posts/"
                      :on-preview="handlePreview"
                      :on-remove="handleRemove"
                      :file-list="fileList"
                      :auto-upload="false">
                <el-button slot="trigger" size="small" type="text" icon="el-icon-circle-plus-outline">选取文件</el-button>
                <el-button style="margin-left: 10px;" size="mini" round  @click="submitUpload">上传</el-button>
                <!--                            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
              </el-upload>
            </div>
            <div class="btnBoxs">
              <el-button round size="mini" class="blueBtn" @click="changeisShow">批准</el-button>
              <el-button round size="mini" class="redBtn" @click="changeisShow">取消</el-button>
            </div>
          </el-form>
        </el-dialog>
        <div slot="footer" class="dialog-footer">

        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Chat from "../components/Chat";
  import Price from "../components/dialog/Price";

  export default {
    name: "order",
    components: {
      Chat,
      Price
    },
    data() {
      return {
        pageNumber: 1,//订单列表当前页数
        orderList: [],//订单列表
        orderInfo:"",//订单详情
        currId:"",//当前订单id

        isPrice:false,//价格比较

        count: 0,
        activeName: 1,
        principal: false, //负责人
        priority: false, //优先级
        teamwork: false, //协作
        operating: false, //操作


        quotationList:[],

        centerDialogVisible: true,
        innerVisible:false,
        outerVisible:false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],


        options: [
          {
            value: "选项1",
            label: "黄金糕"
          },
          {
            value: "选项2",
            label: "双皮奶"
          },
          {
            value: "选项3",
            label: "蚵仔煎"
          },
          {
            value: "选项4",
            label: "龙须面"
          },
          {
            value: "选项5",
            label: "北京烤鸭"
          }
        ],
        value: "",
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
        ]
      };
    },
    mounted() {
      this.getOrderList();

    },
    methods: {
      changeChild(e){
        console.log(e);
      },
      load() {
        this.count += 2
      },
      //切换订单
      changeOrder(index){
        this.currId=this.orderList[index].id;
        this.getOrderInfo(index);
      },
      //获取订单列表
      getOrderList() {
        let that = this;
        this.Axios.get("/lab2lab/v1/requestor/getorderlist", {
          count: 10,
          pageNumber: this.pageNumber,
        }).then(function (res) {
          if (res.code == 200) {
            that.orderList = res.data;
            that.getOrderInfo(0);
          }
        })
      },
      //需求方订单更多详情
      getOrderInfo(index){
        let that = this;
        this.Axios.get("/lab2lab/v1/requestor/getmoreorderdetail", {
          id:that.orderList[index].id,
          orderNum: 10,//订单编号
          serviceId:"",//服务方Id
        }).then(function (res) {
          console.log(res);
          if (res.code == 200) {
            that.orderInfo = res.data;
          }
        })
      },
      //需求方批准（拒绝）报价
      quote(type,index){

        let that = this;
        let str="";
        if(type==1){
          str="接受原因"
        }else{
          str="拒绝原因"
        }
        this.$prompt(str, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(({value}) => {

          that.Axios.get("/lab2lab/v1/requestor/quote", {
            id:that.orderInfo[index].id,
            result: type,
            reason:value,
          }).then(function (res) {
            console.log("需求方批准（拒绝）报价",res);
            if (res.code == 200) {
              that.$message({
                type: 'success',
                message: '成功'
              });
              that.$router.push({
                path: "/login"
              });
            }
          })
        })



      },
      handleCommand(command) {
        this.$message("click on item " + command);
      },
      changeTeamwork() {
        this.teamwork = !this.teamwork;
      },
      changePrincipal() {
        this.principal = !this.principal;
      },
      changePriority() {
        this.priority = !this.priority;
      },
      changeOperating() {
        this.operating = !this.operating;
      },
      arraySpanMethod({row, column, rowIndex, columnIndex}) {
        // if (rowIndex % 2 === 0) {
        //   if (columnIndex === 0) {
        //     return [1, 2];
        //   } else if (columnIndex === 1) {
        //     return [0, 0];
        //   }
        // }
        console.log(rowIndex);
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
      },
      goToInfo() {
        this.$router.push({name:'order',params:{id:this.orderInfo.id,orderNum:this.orderInfo.orderName,serviceId:this.orderInfo.serviceId}});
        // this.$router.push({
        //     path: "/order"
        // });
      },
      //报价比较
      getcompareQuotation(){
        let that=this;

        this.Axios.get("/lab2lab/lab2lab/v1/requestor/compareQuotation", {
          orderId:10
        }).then(function (res) {
          console.log("报价比较",res);
          that.quotationList=res.data;
        })
      },
      changeisShow(){},
      compare(){
        this.outerVisible=true;
        this.getcompareQuotation();
      },

      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      submitUpload() {
        this.$refs.upload.submit();
      },
    }
  };
</script>
<style lang="less">
  .priority,
  .conscientious,
  .cooperation,
  .moreBtn {
    position: relative;

    & > div:first-child {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    i {
      display: block;
      margin-right: 0.3rem;
    }

    .triangle {
      width: 0;
      height: 0;
      border-left: 0.5rem solid transparent;
      border-right: 0.5rem solid transparent;
      border-bottom: 0.8rem solid #f3f4f9;
      position: absolute;
      top: 1.7rem;
      z-index: 9;
    }

    .redIcon {
      background: #f12c0b;
      width: 0.6rem;
      border-radius: 50%;
      height: 0.6rem;
    }

    .yellowIcon {
      background: #fda23f;
      width: 0.6rem;
      border-radius: 50%;
      height: 0.6rem;
    }

    .purpleIcon {
      background: #c37cff;
      width: 0.6rem;
      border-radius: 50%;
      height: 0.6rem;
    }

    & > ul {
      position: absolute;
      width: 7.81rem;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0rem 0rem 1rem 0rem rgba(0, 0, 0, 0.37);
      border-radius: 0rem;
      top: 2.5rem;
      left: -5rem;
      color: #333333;
      z-index: 8;

      & > li {
        width: 100%;
        height: 2.5rem;
        box-sizing: border-box;
        border-radius: 0rem;
        line-height: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid #f2f4fa;


      }

      & > li:hover {
        background: rgba(229, 229, 229, 1);
      }

      & > li:first-child {
        background: #f3f4f9;
      }

      & > li:last-child {
        border-top: 1px solid #2c64ff;
        border-bottom: none;
        color: #2c64ff;
      }
    }
  }

  .moreBtn {
    ul {
      li:hover {
        color: #2c64ff;
      }
    }
  }

  .conscientious {
    ul {
      top: 3rem;

      li {
        color: #333333;
      }

      & > li:hover {
        color: #2c64ff;
      }
    }

    .triangle {
      top: 2.3rem;
    }

    .el-avatar {
      margin-right: 0.3rem;
    }
  }

  .cooperation {


    .triangle {
      left: 0rem;
    }

    .el-avatar {
      margin-right: 0.3rem;
    }

    & > ul {
      & > li:hover {
        color: #2c64ff;
      }
    }

    .cooperationTwoBox {
      height: 0;
      position: relative;

      &:hover {
        background: #ffffff;
        color: #333;
      }
    }

    .cooperationTwo {
      position: absolute;
      width: 10.31rem;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0rem 0rem 1rem 0rem rgba(0, 0, 0, 0.37);
      border-radius: 0rem;
      left: 8rem;
      top: 0;

      & > li {
        display: flex;
        height: 2.5rem;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid #f2f4fa;

        span {
          margin: 0 0.5rem 0 0.3rem;
        }

        .el-icon-remove-outline,
        .el-icon-circle-plus-outline {
          width: 1.2rem;
          height: 1.2rem;
        }

        & > div {
          margin: 0 0.3rem;
        }

        & > div:first-child {
          color: #2c64ff;
        }

        & > div:last-child {
          color: #f12c0b;
        }

        &:hover {
          background: #e5e5e5;

          i {
            color: #2c64ff;
          }
        }
      }
    }
  }

  .priorityTitle {
    background: pink;
  }

  .orderIng {
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

      .fileName {
        color: #999999;
      }

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
          color: #333333;
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

    .ulBoxs {
      display: flex;
      color: #999999;
      font-size: 0.75rem;
      align-items: center;
      justify-content: space-between;
      margin-top: 1rem;

      & > li {
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

        & > div:last-child {
          color: #333333;
        }

        .conscientious {
          font-size: 0.75rem;
          // flex-direction: column;

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
          background: pink;
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

      .el-icon-arrow-up {
        color: #2c64ff;
        margin-left: 1rem;
      }

      .el-icon-chat-dot-square {
        font-size: 1.1rem;
        margin-right: 0.1rem;
      }
    }

    .OrderIngLeftBox {
      .leftOne {
        border-left: 3px solid #83e622;
        margin-bottom: 1rem;

        .orderNum {
          font-size: 0.75rem;
          color: #999999;
        }
      }

      .infinite-list {
        height: calc(100vh - 15rem);
        padding: 0.5rem;
        box-sizing: border-box;
      }

      .inputBox {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.5rem;

        & > div {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        & > div:first-child {
          width: 70%;
        }

        .el-input {
          margin-right: 0.3rem;
        }

        .el-icon-circle-plus-outline {
          color: #2C64FF;
          font-size: 1.5rem;
          margin-right: 0.5rem;
        }
      }

      .leftThree,
      .leftFour {
      }
    }
  }

  .orderName {
    display: flex;
    color: #333333;
    font-size: 0.88rem;
    align-items: center;
    justify-content: space-between;

    .icon {
      width: 1rem;
      height: 1rem;
      display: block;
      background: pink;
    }

    .price {
      font-size: 0.75rem;
      color: #999999;
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

  .middleBox {
    .middleOne {
      background: #ffffff;

      .title {
        span {
          color: #999999;
          font-size: 0.75rem;
          margin-left: 0.3rem;
        }

        .el-button {
          font-size: 1rem;
          color: #2c64ff;

          span {
            color: #2c64ff;
          }
        }
      }

      .btnBox {
        div {
          margin: 0 0.3rem;
        }
      }

      .ulBoxs {
        li {
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          color: #333333;


          & > div:first-child {
            margin-bottom: 0;
          }

          .infoBtn {
            color: #2c64ff;
          }

          .ratifyBtn {
            color: #3dc600;
          }

          .refuseBtn {
            color: #f12c0b;
          }
        }
      }

      .labBoxs{
        li{
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #333333;
          padding:0.5rem;

          .avatarBox{
            display: flex;
            align-items: center;

            .el-avatar{
              margin-right: 0.3rem;
            }
          }


          & > div:first-child {
            margin-bottom: 0;
          }

          .infoBtn {
            color: #2c64ff;
          }

          .ratifyBtn {
            color: #3dc600;
          }

          .refuseBtn {
            color: #f12c0b;
          }
        }
      }

      .btnRows {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .vsBtn {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .iconVs {
        /*background: url("../assets/imgs/Btn-jgbj.png") no-repeat;*/
        background-size: contain;
        display: inline-block;
        width: 1rem;
        height: 1rem;
      }
    }

    .fileBox {
      padding: 0;
    }
  }
  .outBox{
    ul{
      display: flex;
      justify-content: center;
      align-items: center;

      li{
        min-width:14rem;
        min-height: 20rem;
        border:1px solid rgba(221, 224, 233, 1);
        line-height: 2.2rem;
        padding:1rem;
        box-sizing: border-box;
        border-radius: 0.3rem;
        margin:0 0.5rem;



        .avatarBox{
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          padding:0.5rem;
        }

        .infoItem{
          border-bottom:1px solid #EEEEEE;
          display: flex;
          align-items: center;
          &:first-child{
            border-top:1px solid #EEEEEE;
          }

          &>div{
            flex:1;

            &:first-child{
              color: #999999;
            }
          }

        }


        .addBox{
          flex:9;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          i{
            font-size:5rem;
            color:#2C64FF;
          }
        }
        .tips{
          font-size:0.75rem;
          color:#999999;
        }

      }
      .addLis{
        display:flex;
        justify-content: center;
        flex-direction: column;
      }
    }

  }
  .btnBoxs{
    padding: 1rem 0 0;
    text-align: center;

    .el-button{
      width:5rem;
    }
  }
  .formBox{
    .btnBoxs{
      width:100%;
      display:flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
