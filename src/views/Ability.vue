<template>
  <div class="AbilityBox">
    <div class="screenBox">
      <el-input placeholder="请输入内容" size="mini" class="search" prefix-icon="el-icon-search"></el-input>
      <el-select v-model="value" size="mini" placeholder="请选择">
        <el-option v-for="(item,i) in options" :key="i" :label="item.label" :value="item.val"></el-option>
      </el-select>
    </div>
    <div class="el-row">
      <div class="el-col">
        <el-card class="box-card" shadow="hover" v-for="(item,index) in alldevices" :key="index">
          <div
            class="machineItem"
            @click="showBYEquipment({id:item.id,deviceCode:item.deviceCode})"
          >
            <div
              class="machineImg"
              @click.stop="goToEquipment({id:item.id,deviceCode:item.deviceCode})"
            >
              <el-image :src="item.devicePic" fit="fill"></el-image>
              <div>{{item.deviceName}}</div>
              <div class="company">{{item.deviceModel}}</div>
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
                    <span>收费标准：</span>
                    ￥{{ite.price}}{{ite.unit}}
                  </div>
                  <div>
                    <span>适用标准：</span>
                    {{ite.applicableStandard}}
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
            >{{tag}}</el-tag>
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
              <el-image :src="equipmentObj.devicePic"></el-image>
              <el-button size="mini" round class="cancelBtn">取消关联</el-button>
            </div>
            <div class="product">
              <div>
                <span>设备名称：</span>
                {{equipmentObj.deviceName}}
              </div>
              <div>
                <span>设备编号：</span>
                {{equipmentObj.deviceCode}}
              </div>
              <div class="Model">
                <span>设备厂商和型号：</span>
                <div>
                  <div>{{equipmentObj.deviceModel}}</div>
                  <div>温度：-60℃~180℃</div>
                </div>
              </div>
              <div>
                <span>技术参数：</span>
                {{equipmentObj.techParams}}
              </div>
              <div>
                <span>其他说明：</span>
                {{equipmentObj.remark}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <AddLink></AddLink> -->
  </div>
</template>
<script>
// import AddLink from "../dialog/AddLink";
export default {
  data() {
    return {
      providerdevices: "",
      dynamicTags: ["标签一", "标签二", "标签三"],
      options: [
        {
          val: "选项1",
          label: "黄金糕"
        },
        {
          val: "选项2",
          label: "双皮奶"
        },
        {
          val: "选项3",
          label: "蚵仔煎"
        },
        {
          val: "选项4",
          label: "龙须面"
        },
        {
          val: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: "",
      alldevices: [],
      equipmentObj: {}
    };
  },
  components: {
    // AddLink
  },
  mounted() {
    this.getalldevices();
  },
  methods: {
    getalldevices() {
      let _this = this;
      let url = "/lab2lab/v1/provider/getalldevices";
      let data = {
        access_token: this.$store.state.userInfo.access_token,
        id: "001"
      };
      this.Axios.get(url, data).then(res => {
        console.log(res);
        if (res.code == 200) {
          _this.alldevices = res.data;
          _this.showBYEquipment({
            id: _this.alldevices[0].id,
            deviceCode: _this.alldevices[0].deviceCode
          });
        }
      });
    },
    goToDemand() {
      this.$router.push({
        path: "/demand"
      });
    },
    //
    showBYEquipment(opt) {
      let _this = this;
      let url = "/lab2lab/v1/provider/getdevicedetail";
      let data = {
        access_token: this.$store.state.userInfo.access_token,
        id: opt.id,
        deviceCode: opt.deviceCode
      };
      this.Axios.get(url, data).then(res => {
        console.log(res);
        _this.equipmentObj = res.data;
      });
    },
    goToEquipment(opt) {
      this.$router.push({
        name: "equipment",
        params: { opt: opt }
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
</style>
