<template>
  <div class="eripmentInfo">
    <div>
      <div class="eripmentInfoBox">
        <div class="title">基本信息</div>
        <el-row class="rows">
          <el-col :span="8">
            <div class="label">设备信息</div>
            <div class>{{equipmentObj.deviceCode}}</div>
          </el-col>
          <el-col :span="8">
            <div class="label">设备名称</div>
            <div class>{{equipmentObj.deviceName}}</div>
          </el-col>
          <el-col :span="8">
            <div class="label">设备厂商和型号</div>
            <div class>{{equipmentObj.deviceModel}}</div>
          </el-col>
          <el-col :span="8">
            <div class="label">设备图片</div>
            <div class>
              <el-avatar :src="equipmentObj.devicePic" :size="20"></el-avatar>
              <!-- <el-image :src="equipmentObj.devicePic"></el-image> -->
            </div>
          </el-col>
          <el-col :span="8">
            <div class="label">设置类别</div>
            <div class>
              {{equipmentObj.deviceType}}
              <!-- <el-select size="mini" v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>-->
            </div>
          </el-col>

          <el-col :span="8">
            <div class="label">设备是否联网</div>
            <div class v-if="equipmentObj.isNetwork==0">否</div>
            <div class v-if="equipmentObj.isNetwork==1">是</div>
          </el-col>
        </el-row>
        <el-row class="rowTwo">
          <el-col :span="4">
            <div class="label">技术参数</div>
          </el-col>
          <el-col :span="20">
            <div class>{{equipmentObj.techParams}}</div>
          </el-col>
        </el-row>
      </div>
      <div class="tableBox">
        <div class="title">
          <div>适用检测项目</div>
          <div class="titleBtn">
            <el-button type="text" size="mini" icon="el-icon-circle-plus-outline">添加项目</el-button>
            <i class="el-icon-arrow-up"></i>
          </div>
        </div>
        <el-table border size="small" :data="tableData" style="width: 100%">
          <el-table-column label="项目名称" width="80">
            <template slot-scope="scope">
              <div>{{ scope.row.projectName }}</div>
            </template>
          </el-table-column>
          <el-table-column label="适用标准">
            <template slot-scope="scope">
              <div>{{ scope.row.applicableStandard }}</div>
            </template>
          </el-table-column>
          <el-table-column label="认可项目">
            <template slot-scope="scope">
              <div v-if="scope.row.confirmProject==1">是</div>
              <div v-else>否</div>
            </template>
          </el-table-column>
          <el-table-column label="按需报价">
            <template slot-scope="scope">
              <div class="payStatusOne" v-if="scope.row.demandQuote==1">
                <i></i>
              </div>
              <div class="payStatusTwo" v-else>
                <i></i>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="可见范围">
            <template slot-scope="scope">
              <div v-if="scope.row.showRange==0">
                <i></i>在线市场
              </div>
              <div v-else>
                <i></i>全部连接方
              </div>
            </template>
          </el-table-column>
          <el-table-column label="计价单位">
            <template slot-scope="scope">
              <!-- <el-select size="mini" v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>-->
              <div>{{scope.row.unit}}</div>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <div class="operation">
                <div class="edit">编辑</div>
                <div class="del">删除</div>
              </div>
            </template>
          </el-table-column>
        </el-table>

        <el-table border size="small" :data="tableData" style="width: 100%">
          <el-table-column label="序号" width="80">
            <template slot-scope="scope">
              <div>{{ scope.row.id }}</div>
            </template>
          </el-table-column>
          <el-table-column label="指定链接方">
            <template slot-scope="scope">
              <div>{{ scope.row.name }}</div>
            </template>
          </el-table-column>
          <el-table-column label="合作单价" width="120">
            <template slot-scope="scope">
              <div>￥{{scope.row.price}}</div>
            </template>
          </el-table-column>

          <el-table-column label="计价单位" width="200">
            <template slot-scope="scope">
              <!-- <el-select size="mini" v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>-->
              <div>{{scope.row.unit}}</div>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <div class="calendar">
        <div class="title">设备日历设置</div>
        <el-row>
          <el-col :span="8">
            <div class="label">日历默认模板</div>
            <div>
              <el-select size="mini" v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="label">日历默认模板</div>
            <div>
              <el-select size="mini" v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="label">日历默认模板</div>
            <div>
              <el-select size="mini" v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "eripment_info",
  props: {
    equipmentObj: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      // tableData: [
      //   {
      //     num: "高温测试",
      //     name: "GB/T24223.IEC6006B 2-1",
      //     status: 0,
      //     price: 0,
      //     payStatus: 30,
      //     sta: 0
      //   }
      // ],
      tableData: [],
      value: "",
      options: []
    };
  },
  watch: {
    equipmentObj: {
      handler(newVal, oldVal) {
        this.tableData = newVal.items;
      },
      deep: true
    }
  },
  mounted() {
    this.tableData = this.equipmentObj.items;
    console.log(this.equipmentObj);
    console.log(this.tableData);
  },
  methods: {}
};
</script>

<style lang="less" >
.eripmentInfo {
  .title {
    padding: 0.5rem;
    border-bottom: 1px solid #f2f4ff;
    margin-bottom: 1rem;
  }
  .eripmentInfoBox {
    background: #ffffff;
    margin-bottom: 1rem;
    padding: 1rem;
  }

  .calendar {
    padding: 1rem;
    background: #ffffff;
    .el-col {
      display: flex;
      align-items: center;

      & > div {
        border: 1px solid #e7e9ef;
      }
    }
    .label {
      width: 50%;
      background: #e7e9ef;
      line-height: 1.94rem;
      text-align: center;
    }
  }

  .el-table {
    margin-bottom: 1rem;
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
    margin: 0.5rem 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background: #ffffff;
    padding: 1rem;

    .title {
      padding: 0.5rem;
      border-bottom: 1px solid #f2f4ff;
      margin-bottom: 1rem;
      display: flex;
      justify-content: space-between;
    }
    .titleBtn {
      display: flex;

      align-items: center;

      .el-button {
        color: #04af00;
      }
      i {
        color: #04af00;
      }
    }

    .operation {
      display: flex;

      & > div {
        margin: 0 0.3rem;
      }
      .edit {
        color: #04af00;
      }
      .del {
        color: #f12c0b;
      }
    }
  }

  .el-table th {
    background: #eeeeee;
  }

  .taskStatusOne {
    width: 5rem;
    background: linear-gradient(
      90deg,
      rgba(44, 168, 255, 1),
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
    color: #04af00;
    display: flex;
    align-items: center;

    i {
      width: 1rem;
      height: 1rem;
      background: #04af00;
      display: inline-block;
      margin-right: 0.3rem;
      border-radius: 50%;
    }
  }

  .paymentTwo {
    color: #04af00;
  }

  .paymentThr {
    color: #f12c0b;
  }
}
</style>