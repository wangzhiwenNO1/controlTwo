<template>
  <div class="AbilityBox">
    <div class="screenBox">
      <el-input placeholder="请输入内容" class="search" prefix-icon="el-icon-search"></el-input>
      <el-select v-model="value" placeholder="请选择">
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
        <el-card class="box-card" shadow="hover">
          <div class="machineItem">
            <div class="machineImg">
              <el-image src="#" fit="fill"></el-image>
              <div>TE-001 湿湿度试验箱</div>
              <el-button round size="mini">取消关联</el-button>
            </div>
            <div class="machineInfo">
              <div class="title">适用检测项目</div>
              <div class="tesing" v-for="item in 2" :key="item">
                <div class="tesItem">
                  <div class="name">
                    <div>高温试验</div>
                    <div class="icon"></div>
                  </div>
                  <div>
                    <span>收费标准：</span>￥30每小时
                  </div>
                  <div>
                    <span>适用标准：</span>GB/T2423.1,IEC60068-2-1
                  </div>
                </div>
                <div>
                  <el-button round>取消选择</el-button>
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
        <div class="infoBox itemBox">
          <div class="title">选择需求项目</div>
          <div class="tagBox">
            <el-tag
              :key="tag"
              v-for="tag in dynamicTags"
              closable
              :disable-transitions="false"
              @close="handleClose(tag)"
            >{{tag}}</el-tag>
          </div>
          <div class="btnRows">
            <el-button round size="small">提交需求</el-button>
            <el-button round size="small">取消需求</el-button>
          </div>
        </div>
        <div class="itemBox">
          <div class="title">设备详情</div>
          <div class="productBox">
            <div class="productImg">
              <el-image src="#"></el-image>
              <el-button size="mini" round>取消关联</el-button>
            </div>
            <div class="product">
              <div>
                <span>设备名称：</span>湿湿度试验箱
              </div>
              <div>
                <span>设备编号：</span>TE-001
              </div>
              <div class="Model">
                <span>设备厂商和型号：</span>
                <div>
                  <div>德国伟思CT-1000</div>
                  <div>温度：-60℃~180℃</div>
                </div>
              </div>
              <div>
                <span>技术参数：</span>湿度：5%RH~95%RH
              </div>
              <div>
                <span>其他说明：</span>暂无
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
      value: ""
    };
  },
  methods: {
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    }
  }
};
</script>
<style lang="less" scoped>
.AbilityBox {
  width: 100%;
  box-sizing: border-box;

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
    margin: 1rem 1rem 1rem 0;
    border:1px solid #eeeeee;
  }

  .machineItem {
    display: flex;

    .machineInfo {
      flex: 1;
    }

    .machineImg {
      display: flex;
      flex-direction: column;
      justify-content: center;
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
        width:9rem;
        display:inline-block;
        text-align: right;
      }
      .Model{
          display: flex;
      }
  }
}
</style>