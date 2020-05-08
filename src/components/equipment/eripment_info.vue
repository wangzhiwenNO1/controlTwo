<template>
  <div class="eripmentInfo">
    <div >
      <div class="eripmentInfoBox">
        <div class="title">基本信息</div>

        <el-row class="rows">
          <el-col :span="8">
            <div class="label">设备信息</div>
            <div class="">{{devicedetail.deviceCode}}</div>
          </el-col>

          <el-col :span="8">
            <div class="label">设备名称</div>
            <div class="">{{devicedetail.deviceName}}</div>
          </el-col>

          <el-col :span="8">
            <div class="label">设备厂商和型号</div>
            <div class="">{{devicedetail.deviceModel}}</div>
          </el-col>

          <el-col :span="8">
            <div class="label">设备图片</div>
            <div class="">
              <el-avatar :size="20" :src="devicedetail.devicePic"></el-avatar>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="label">设置类别</div>
            <div class="">
              <el-select v-model="devicedetail.deviceType" size="mini" placeholder="请选择">
                <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
              </el-select>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="label">设备是否联网</div>
            <div class="">{{devicedetail.isNetwork==0?'否':'是'}}</div>
          </el-col>

        </el-row>
        <el-row class="rowTwo">
          <el-col :span="4">
            <div class="label">技术参数</div>
          </el-col>
          <el-col :span="20">
            <div class="">{{devicedetail.techParams}}</div>
          </el-col>

        </el-row>
      </div>
      <div class="tableBox">
        <div class="title">适用检测项目</div>
        <el-table
                border
                size="small"
                :data="tableData"
                style="width: 100%">
          <el-table-column
                  label="设备名称"
                  width="80">
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
              <div class="payStatusOne" v-if="scope.row.fapiao"><i></i></div>
              <div class="payStatusTwo" v-else><i></i></div>
            </template>
          </el-table-column>
          <el-table-column label="单价">
            <template slot-scope="scope">
              <div v-if="scope.row.price"><i></i>￥40</div>
              <div v-else><i></i>￥40</div>
            </template>
          </el-table-column>
          <el-table-column label="计价单位">
            <template slot-scope="scope">

              <el-select v-model="scope.row.unit" size="mini" placeholder="请选择">
                <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
              </el-select>
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
        devicedetail:{},

        tableData: [],
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        type:""
      }
    },
    created() {
      this.getdevicedetailTwo();
    },
    methods:{
      //设备详情
      getdevicedetailTwo(){
        let that=this;
        that.Axios.get("/lab2lab/v1/provider/getdevicedetail", {
          id:12,
          deviceCode:"122",

        }).then(function (res) {
          console.log("设备详情",res);
          if (res.code == 200) {
            that.devicedetail=res.data;
            that.tableData=res.data.items;
          }
        })
      },
    },
  }
</script>

<style lang="less" >
  .eripmentInfo{
    .eripmentInfoBox{
      background: #FFFFFF;
      margin-bottom:1rem;
      padding:1rem;

      .title {
        padding: 0.5rem ;
        border-bottom: 1px solid #f2f4ff;
        margin-bottom: 1rem;
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
          border: 1px solid #EEEEEE;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .label {
          background: #E7E9EF;

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
          border: 1px solid #EEEEEE;
          width: 100%;

        }

        .label {
          text-align: center;
          background: #E7E9EF;

        }
      }
    }

    .tableBox {
      margin: 0.5rem 0;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      background: #FFFFFF;
      padding:1rem;

      .title {
        padding: 0.5rem ;
        border-bottom: 1px solid #f2f4ff;
        margin-bottom: 1rem;
      }
    }

    .el-table th {
      background: #eeeeee;
    }

    .taskStatusOne {
      width: 5rem;
      background: linear-gradient(90deg, rgba(44, 168, 255, 1), rgba(255, 255, 255, 1));
      border-radius: 1rem;
      text-align: center;
    }

    .taskStatusTwo {
      background: linear-gradient(90deg, rgba(131, 230, 34, 1), rgba(255, 255, 255, 1));
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
      color: #2C64FF;
      display: flex;
      align-items: center;

      i {
        width: 1rem;
        height: 1rem;
        background: #2C64FF;
        display: inline-block;
        margin-right: 0.3rem;
        border-radius: 50%;
      }
    }

    .paymentTwo {
      color: #2C64FF;
    }

    .paymentThr {
      color: #F12C0B;
    }

  }



</style>
