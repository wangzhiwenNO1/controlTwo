<template>
  <div class="AbilityBox">
    <div class="screenBox">
      <el-input placeholder="请输入内容" size="mini" class="search" prefix-icon="el-icon-search"></el-input>
      <el-select v-model="value" size="mini" placeholder="请选择">
        <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <div class="el-row">
      <div class="el-col">
        <el-card class="box-card" shadow="hover" v-for="(item,index) in providerdevices" :key="index">
          <div class="machineItem">
            <div class="machineImg" @click="goToEquipment">
              <el-image :src="providerdevices.devicePic" fit="fill"></el-image>
              <div>{{providerdevices.deviceName}}</div>
              <div class="company">{{providerdevices.deviceModel}}</div>
              <!-- <el-button round size="mini">取消关联</el-button> -->
            </div>
            <div class="machineInfo">
              <div class="title">适用检测项目</div>
              <div class="tesing" v-for="(ite,idex) in item.items" :key="idex">
                <div class="tesItem">
                  <div class="name">
                    <div>{{ite.projectName}}</div>
                    <div class="icon"></div>
                  </div>
                  <div>
                    <span>收费标准：</span>￥{{ite.price}}{{ite.unit}}
                  </div>
                  <div>
                    <span>适用标准：</span>{{ite.applicableStandard}}
                  </div>
                </div>
                <div>
                  <el-button round class="cancelBtn" size="mini" v-if="item==1">取消选择</el-button>
                  <el-button round class="greenBtn" size="mini" v-else>选择</el-button>
                </div>
              </div>
              <div class="btnRow">
                <el-button type="text" size="mini" class="button">
                  展开
                  <i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
              </div>
            </div>
          </div>
        </el-card>
      </div>
      <div class="el-col">
        <div class="itemBox">
          <div class="title">选择需求项目</div>
          <div class="tagBox">
            <div class="items">
              <el-avatar :size="30" src="#"></el-avatar>
              <div>上海少林检测技术服务有限公司</div>
            </div>
            <el-tag
                    :key="tag"
                    v-for="tag in dynamicTags"
                    closable
                    :disable-transitions="false"
                    @close="handleClose(tag)"
            >{{tag}}
            </el-tag>
          </div>
          <div class="btnRows">
            <el-button round class="greenBtn" size="mini" @click="goToDemand">提交需求</el-button>
            <el-button round class="cancelBtn" size="mini">取消需求</el-button>
          </div>
        </div>
        <div class="itemBox itemInfo">
          <div class="title">设备详情</div>
          <div class="productBox">
            <div class="productImg">
              <el-image :src="devicedetail.devicePic" ></el-image>
              <el-button size="mini" round class="cancelBtn" @click="managedevice(0)" v-if="devicedetail.isNetwork==1">取消关联</el-button>
              <el-button size="mini" round class="greenBtn" @click="managedevice(1)" v-else>关联</el-button>
            </div>
            <div class="product">
              <div>
                <span>设备名称：</span>{{devicedetail.deviceName}}
              </div>
              <div>
                <span>设备编号：</span>{{devicedetail.deviceCode}}
              </div>
              <div class="Model">
                <span>设备厂商和型号：</span>
                <div>
                  <div>{{devicedetail.deviceModel}}</div>
                  <!--                                    <div>温度：-60℃~180℃</div>-->
                </div>
              </div>
              <div>
                <span>技术参数：</span>{{devicedetail.techParams}}
              </div>
              <div>
                <span>其他说明：</span>{{devicedetail.remark}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <el-dialog title="添加链接" width="40%" center :visible.sync="dialogFormVisible">
        <div class="infoBox">
          <el-avatar size="50"></el-avatar>
          <div>
            <div>上海必维检测技术服务有限公司</div>
            <div class="subTitle">上海市徐汇区</div>
          </div>
        </div>
        <div class="rateBox">
          <div>链接方式类别</div>
          <el-select v-model="formData.linkTypeCode"  placeholder="请选择">
            <el-option
                    v-for="item in linkType"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="rateBox">
          <div>分类</div>
          <el-select v-model="formData.subTypeCode" placeholder="请选择">
            <el-option
                    v-for="item in subType"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="rateBox">
          <div>指定联系人</div>
          <el-select v-model="formData.contactUserId"  placeholder="请选择">
            <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
          </el-select>
        </div>

        <div slot="footer" class="dialog-footer">
          <el-button round size="mini" type="primary" @click="centerDialogVisible = false">提 交</el-button>
          <el-button round size="mini" class="cancel" @click="centerDialogVisible = false">取 消</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
  import AddLink from "../dialog/AddLink";

  export default {
    data() {
      return {
        providerdevices: "",
        devicedetail:"",

        dynamicTags: ["标签一", "标签二", "标签三"],
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
        dialogFormVisible:true,
        formData:{
          linkedLabId:"",
          linkTypeCode:"",
          subTypeCode:"",
          contactUserId:"",
          contactName:"",
        },
        linkType:[{
          value: 1,
          label: '供应商'
        }, {
          value: 2,
          label: '供方合作方'
        }, {
          value: 3,
          label: '客户'
        }],

        subType:[{
          value: 1,
          label: '常用供应商'
        }, {
          value: 2,
          label: '合格供应商'
        }, {
          value: 3,
          label: '内部合作方'
        },{
          value: 4,
          label: '重要合作方'
        },{
          value: 5,
          label: '普通合作方'
        }, {
          value: 6,
          label: '内部客户'
        },{
          value: 6,
          label: '重要客户'
        }, {
          value: 7,
          label: '普通客户'
        }],


      };
    },
    components: {
      AddLink
    },
    mounted() {
      this.getproviderdevices();
      this.getdevicedetail();
    },
    methods: {
      //供应商服务能力
      getproviderdevices() {
        let that = this;

        this.Axios.get("/lab2lab/v1/requestor/getproviderdevices", {
          id: 10
        }).then(function (res) {
          console.log("供应商服务能力", res);
          that.providerdevices = res.data;

        })
      },
      //设备详情
      getdevicedetail() {
        let that = this;
        that.Axios.get("/lab2lab/v1/provider/getdevicedetail", {
          id: 12,
          deviceCode: "122",

        }).then(function (res) {
          console.log("设备详情", res);
          if (res.code == 200) {
            that.devicedetail = res.data;
          }
        })
      },
      //需求方添加链接
      newlink(){
        let that=this;
        let data=that.formData;
        that.Axios.get("/lab2lab/v1/requestor/newlink", data).then(function (res) {

          if (res.code == 200) {
            that.$message({
              type: 'success',
              message: '订单完成'
            });

          }
        })
      },
      //关联（取消关联）设备
      managedevice(type){
        let that=this;
        let data=that.formData;
        that.Axios.get("/lab2lab/v1/provider/managedevice", {
          link:type,
          id:"12",
          deviceCode:"abc",
        }).then(function (res) {

          if (res.code == 200) {
            that.$message({
              type: 'success',
              message: '完成'
            });
            that.devicedetail.isNetwork=type;
          }
        })
      },
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },
      goToDemand() {
        this.$router.push({
          path: "/demand"
        });
      },
      goToEquipment() {
        this.$router.push({
          path: "/equipment"
        });
      }
    }
  };
</script>
<style lang="less" scoped>
  .AbilityBox {
    width: 100%;
    box-sizing: border-box;
    padding: 1rem;

    .screenBox {
      .search {
        width: 12.5rem;
        height: 1.75rem;
        background: rgba(255, 255, 255, 1);
        border-radius: 0rem;
        margin-right: 0.5rem;
      }
    }

    .el-row {
      display: flex;
    }

    .el-col {
      line-height: 1.88rem;
      position: relative;
      box-sizing: border-box;
      width: 50%;
    }

    .itemBox {
      padding: 0.5rem;
      background: #ffffff;
      margin: 0.5rem 1rem 1rem 0;
      border: 1px solid #eeeeee;
    }

    .itemInfo {
      .productBox {
        padding: 1rem;
      }
    }

    .machineItem {
      display: flex;

      .machineInfo {
        flex: 1;
      }

      .machineImg {
        display: flex;
        flex-direction: column;
        align-items: center;
        line-height: 2rem;
        padding: 0.5rem;
        box-sizing: border-box;

        .el-button {
          width: 6rem;
          border: 1px solid rgba(241, 44, 11, 1);
          text-align: center;
          color: rgba(241, 44, 11, 1);
        }

        .company {
          color: #999;
        }
      }

      .el-image {
        width: 8.75rem;
        height: 10.13rem;
      }

      .tesing {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 0;
        border-bottom: 1px solid #f2f4fa;

        span {
          color: #999999;
          line-height: 1.5rem;
        }
      }

      .name {
        display: flex;
        align-items: center;
        margin-bottom: 0.2rem;

        & > div {
          font-size: 1.1rem;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
        }

        .icon {
          width: 1rem;
          height: 1rem;
          background: pink;
          margin-left: 1rem;
        }
      }
    }

    .title {
      padding-bottom: 0.3rem;
      border-bottom: 1px solid #f2f4fa;
      margin-bottom: 0.1rem;
      display: flex;
      justify-content: space-between;
    }

    .btnRow {
      text-align: right;
    }

    .btnRows {
      text-align: center;
      margin: 1rem 0;
    }

    .tagBox {
      padding: 1rem;
      border-bottom: 1px solid #f2f4f2;

      .items {
        display: flex;
        align-items: center;
        margin-bottom: 0.5rem;
      }

      .el-avatar {
        margin-right: 0.3rem;
      }
    }

    .box-card {
      margin: 0.5rem 0.5rem 0.5rem 0;
    }

    .el-tag + .el-tag {
      margin-left: 10px;
    }

    .productBox {
      display: flex;

      .productImg {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-right: 2rem;
      }

      .el-image {
        width: 8.75rem;
        height: 10.13rem;
        margin-bottom: 0.5rem;
      }

      span {
        color: #999999;
        line-height: 1.5rem;
        width: 9rem;
        display: inline-block;
        text-align: right;
      }

      .Model {
        display: flex;
      }
    }
  }
  .label {
    margin: 0.5rem 0;
  }

  .rateBox {
    display: flex;
    align-items: center;
    margin-bottom:1rem;

    & > div:first-child {
      margin-right: 0.5rem;
      flex:1;
    }

    & > div:last-child {
      flex:3;
    }
  }
  .infoBox{
    display: flex;
    justify-content: center;
    align-items: center;
    border:1px solid #EEEEEE;
    margin-bottom:1rem;
    padding:1rem;
    line-height: 1.5rem;

    .el-avatar{
      margin-right: 1rem;
    }

    .subTitle{
      color: #999999;
    }
  }
</style>
