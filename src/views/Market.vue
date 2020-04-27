<template>
  <div>
    <div>
      <div class="topBox">
        <div class="topInfo">
          <div>
            <el-avatar shape="square" :size="50" src="#"></el-avatar>
          </div>
          <div>
            <div>上海少林检测技术服务有限公司</div>
            <div class="subtitle">上海浦东新区未来路888号</div>
            <div class="subtitle">机构编号：R1234</div>
          </div>
        </div>
        <div class="editBtn">
          <el-button>编辑</el-button>
        </div>
        <el-row class="MarkettopRight">
          <el-col :span="8">
            <div>
              <i class="el-icon-message"></i>
              <div>总订单：100</div>
            </div>
          </el-col>
          <el-col :span="8">
            <div>
              <i class="el-icon-message"></i>
              <div>认可指数：8</div>
            </div>
          </el-col>
          <el-col :span="8">
            <div>
              <i class="el-icon-message"></i>
              <div>服务评价：4.8/5</div>
            </div>
          </el-col>
        </el-row>
      </div>
      <!--      <el-row class="marketTop">-->
      <!--        <el-col :span="2">-->
      <!--          <div class="leftBox">-->
      <!--            <el-avatar :size="50" src="#"></el-avatar>-->
      <!--            <div class="btn">取消链接</div>-->
      <!--          </div>-->
      <!--        </el-col>-->
      <!--        <el-col :span="14">-->
      <!--          <div class="middleBox">-->
      <!--            <div>上海少林检测技术服务有限公司</div>-->
      <!--            <el-breadcrumb separator="|">-->
      <!--              <el-breadcrumb-item>上海</el-breadcrumb-item>-->
      <!--              <el-breadcrumb-item>检测实验室</el-breadcrumb-item>-->
      <!--              <el-breadcrumb-item>ISO/IEC17025认可，CMA资质认定</el-breadcrumb-item>-->
      <!--            </el-breadcrumb>-->
      <!--          </div>-->
      <!--        </el-col>-->
      <!--        <el-col :span="8">-->
      <!--          <div class="rightBox">-->
      <!--            <div class="topIcon">-->
      <!--              <i class="el-icon-message"></i>-->
      <!--              <i class="el-icon-chat-dot-square"></i>-->
      <!--              <el-button type="primary" class="sendQuest" round>发起需求申请</el-button>-->
      <!--            </div>-->
      <!--            <el-row class="topRight">-->
      <!--              <el-col :span="8">-->
      <!--                <div>-->
      <!--                  <i class="el-icon-message"></i>-->
      <!--                  <div>总订单：100</div>-->
      <!--                </div>-->
      <!--              </el-col>-->
      <!--              <el-col :span="8">-->
      <!--                <div>-->
      <!--                  <i class="el-icon-message"></i>-->
      <!--                  <div>总订单：100</div>-->
      <!--                </div>-->
      <!--              </el-col>-->
      <!--              <el-col :span="8">-->
      <!--                <div>-->
      <!--                  <i class="el-icon-message"></i>-->
      <!--                  <div>总订单：100</div>-->
      <!--                </div>-->
      <!--              </el-col>-->
      <!--            </el-row>-->
      <!--          </div>-->
      <!--        </el-col>-->
      <!--      </el-row>-->
      <!--  -->
      <div class="MarketBox">
        <div class="leftBox">
          <div :class="type==1?'active':''" @click="changeType(1)">
            <i class="icon-ability"></i>
            <div>服务能力</div>
          </div>
          <div :class="type==2?'active':''" @click="changeType(2)">
            <i class="icon-profile"></i>
            <div>机构概况</div>
          </div>
          <div :class="type==3?'active':''" @click="changeType(3)">
            <i class="icon-team"></i>
            <div>服务团队</div>
          </div>
          <div :class="type==4?'active':''" @click="changeType(4)">
            <i class="icon-service"></i>
            <div>客户评价</div>
          </div>
          <!--                    <div :class="type==5?'active':''" @click="changeType(5)">-->
          <!--                        <i class="icon-cooperation"></i>-->
          <!--                        <div>合作详情</div>-->
          <!--                    </div>-->
        </div>
        <div class="rightBoxs">
          <Ability v-if="type==1"></Ability>
          <Profile v-else-if="type==2"></Profile>
          <Team v-else-if="type==3"></Team>
          <Service v-else-if="type==4"></Service>
          <!--                    <Cooperation v-else-if="type==4"></Cooperation>-->
          <!--                    <Service v-else-if="type==5"></Service>-->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Service from "../components/market/Service";
import Team from "../components/market/Team";
import Profile from "../components/market/Profile";
import Ability from "../components/market/Ability";
import Cooperation from "../components/market/Cooperation";

export default {
  name: "market",
  components: {
    Service,
    Team,
    Profile,
    Ability,
    Cooperation
  },
  data() {
    return {
      type: 1
    };
  },
  mounted() {},
  methods: {
    getpartnerdevices() {
      let url = "/lab2lab/v1/provider/getpartnerdevices";
      let data = {
        access_token: this.$store.state.userInfo.access_token,
        id: "001"
      };
      this.Axios.get(url, data).then(res => {
        console.log(res);
      });
    },
    changeType(type) {
      this.type = type;
    }
  }
};
</script>
<style lang="less" scoped>
.topBox {
  height: 5.5rem;
  display: flex;
  background: #999999;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;
  font-size: 1.5rem;
  font-weight: 400;
  color: rgba(255, 254, 254, 1);
  line-height: 1.5rem;
  position: relative;

  .topInfo {
    display: flex;
    align-items: center;
    flex: 2;
  }

  .subtitle {
    font-size: 0.75rem;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
  }

  .el-avatar {
    margin-right: 1.5rem;
  }

  .editBtn {
    position: absolute;
    right: 1rem;
    top: -1rem;
    display: flex;
    height: 100%;
    align-items: center;

    .el-button {
      width: 6.88rem;
      height: 1.88rem;
      background: linear-gradient(
        90deg,
        rgba(4, 175, 0, 1),
        rgba(52, 225, 34, 1)
      );
      border-radius: 1rem;
      line-height: 1.88rem;
      font-size: 0.75rem;
      padding: 0;
      color: #ffffff;
    }
  }
}

.middleBox {
  line-height: 2rem;
}

.elTabs {
  background: #ffffff;
  padding: 0.5rem 0;
}

.marketTop {
  padding: 1rem;
  box-sizing: border-box;
  background: #eeeeee;
  margin-bottom: 0.5rem;
}

.rightBox {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;

  .topIcon {
    display: flex;
    align-items: center;

    i {
      margin-right: 1rem;
      font-size: 1.2rem;

      &::before {
        font-size: 1.5rem;
      }
    }

    .el-button {
      width: 10rem;
      height: 2.25rem;
      background: linear-gradient(
        90deg,
        rgba(44, 100, 255, 1),
        rgba(52, 171, 255, 1)
      );
    }
  }

  .sendQuest {
    padding: 0.5rem;
  }

  i::before {
    font-size: 1.3rem;
    margin-right: 0.3rem;
  }
}

.MarkettopRight {
  margin-top: 1rem;
  align-self: flex-end;
  flex: 2;

  .el-col {
    & > div {
      display: flex;
      align-items: center;
      margin: 0 1rem;
    }
  }
  i {
    margin-right: 0.3rem;
  }
}

.MarketBox {
  display: flex;

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

      i {
        margin-right: 0.3rem;
        font-size: 1.2rem;
      }
    }

    i {
      display: inline-block;
      width: 1.2rem;
      height: 1.2rem;
    }

    .icon-ability {
      background: url("../assets/imgs/btn-fuwu1.png") no-repeat;
      background-size: contain;
    }

    .icon-profile {
      background: url("../assets/imgs/btn-jigou1.png") no-repeat;
      background-size: contain;
    }

    .icon-team {
      background: url("../assets/imgs/btn-tuandui1.png") no-repeat;
      background-size: contain;
    }

    .icon-service {
      background: url("../assets/imgs/btn-khpj1.png") no-repeat;
      background-size: contain;
    }

    .icon-cooperation {
      background: url("../assets/imgs/btn-hzxq1.png") no-repeat;
      background-size: contain;
    }

    .active {
      background: rgba(242, 244, 250, 1);
      color: #04af00;
      border-left: 2px solid #04af00;

      i::before {
        color: #04af00;
      }

      .icon-ability {
        background: url("../assets/imgs/btn-fuwu2.png") no-repeat;
        background-size: contain;
      }

      .icon-profile {
        background: url("../assets/imgs/btn-jigou2.png") no-repeat;
        background-size: contain;
      }

      .icon-team {
        background: url("../assets/imgs/btn-tuandui2.png") no-repeat;
        background-size: contain;
      }

      .icon-service {
        background: url("../assets/imgs/btn-khpj2.png") no-repeat;
        background-size: contain;
      }

      .icon-cooperation {
        background: url("../assets/imgs/btn-hzxq2.png") no-repeat;
        background-size: contain;
      }
    }

    .addBox {
      flex-direction: column;
      padding: 0 0.8rem;

      i::before {
        color: #04af00;
        font-size: 1.2rem;
      }

      & > div {
        margin-top: 0.3rem;
      }
    }
  }

  .rightBoxs {
    box-sizing: border-box;
    margin: 0 1rem;
    flex: 1;
    padding: 1rem 0;
  }
}
</style>