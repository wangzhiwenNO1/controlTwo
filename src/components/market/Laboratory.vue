<template>
  <el-row>
    <el-col :span="3">
      <div class="radioBox">
        <ul>
          <li>
            <div class="title">实验室类型</div>
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="检测实验室"></el-checkbox>
              <el-checkbox label="国家重点实验室"></el-checkbox>
              <el-checkbox label="科研实验室"></el-checkbox>
              <el-checkbox label="企业实验室"></el-checkbox>
              <el-checkbox label="高校实验室"></el-checkbox>
              <el-checkbox label="校准实验室"></el-checkbox>
              <el-checkbox label="其他"></el-checkbox>
            </el-checkbox-group>
          </li>
          <li>
            <div class="title">实验室资质</div>
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="ISO/IEC17025认可"></el-checkbox>
              <el-checkbox label="CMA资质认定"></el-checkbox>
              <el-checkbox label="3C指定"></el-checkbox>
              <el-checkbox label="整车厂认证" disabled></el-checkbox>
              <el-checkbox label="CB认证"></el-checkbox>
              <el-checkbox label="其他"></el-checkbox>
            </el-checkbox-group>
          </li>
          <li>
            <div class="title">地区</div>
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="上海"></el-checkbox>
              <el-checkbox label="北京"></el-checkbox>
              <el-checkbox label="广东"></el-checkbox>
              <el-checkbox label="江苏"></el-checkbox>
            </el-checkbox-group>
          </li>
        </ul>
      </div>
    </el-col>
    <el-col :span="11" class="cardBox">
      <el-card class="box-card" v-if="true" shadow="hover">
        <div class="cardItem">
          <div class="imgBox">
            <el-avatar :size="70" src="#"></el-avatar>
            <el-button round size="mini">取消链接</el-button>
          </div>
          <div class="infoBox">
            <div>
              <div>
                <div class="name">上海少林检测技术服务有限公司</div>
                <div class="site">上海市黄浦区示例路888号</div>
              </div>
              <div>
                <el-button round>选择</el-button>
              </div>
            </div>
            <div class="numBox">
              <div>
                <i class="el-icon-document"></i>
                <div>总订单数量：100</div>
              </div>
              <div>
                <i class="el-icon-thumb"></i>
                <div>认可指数：100</div>
              </div>
              <div>
                <i class="el-icon-thumb"></i>
                <div>服务评价：100</div>
              </div>
            </div>
          </div>
        </div>
      </el-card>
      <el-card class="box-card" v-else shadow="hover">
        <div class="cardItems">
          <div class="site">很抱歉，未能找到您搜索的相关实验室，请输入实验室联系人邮箱，邀请实验室加入，十分感谢！</div>
          <div class="inputBox">
            <label>邮箱地址：</label>
            <el-input placeholder="请输入内容"></el-input>
          </div>
          <div class="buttonBox">
              <el-button round size="mini">发送邀请</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :span="10">
      <div class="providerBox">
        <div class="title">
          <div>选择服务方</div>
          <div>2/5</div>
        </div>
        <ul>
          <li>
            <div class="items">
              <el-avatar :size="30" src="#"></el-avatar>
              <div>上海少林检测技术服务有限公司</div>
            </div>

            <i class="el-icon-close"></i>
          </li>
        </ul>
        <div class="btnRow">
          <el-button size="mini" round @click="jump">提交</el-button>
          <el-button size="mini" round>取消</el-button>
        </div>
      </div>

      <div class="information">
        <div class="imgBox">
          <el-avatar :size="50"></el-avatar>
          <div>
            <div>上海必为检测技术服务有限公司</div>
            <div class="site">上海市徐汇区示例路888号</div>
          </div>
        </div>
        <div class="text">上海必为检测服务有限公司是独立的第三方检测机构，特色项目包括：EMC电磁兼 容试验、三综合振动试验、ELV有害物质分析等，服务</div>
        <div class="infoBtn">
          <el-button round size="small">查看详情</el-button>
        </div>
      </div>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      checkList: ["选中且禁用", "复选框 A"]
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    jump(){
      this.$router.push({
        path: "/demand",
      })
    }
  }
};
</script>
<style lang="less" >
.el-row {
  box-sizing: border-box;
  margin: 0;
}
.el-form-item {
  margin-bottom: 10px;
}
serviceBoxs {
  display: flex;
  flex-direction: column;
}
.el-checkbox__label{
  font-size:0.75rem;
}
.radioBox {
  background: #ffffff;
  height: 100%;
  padding: 1rem;
  margin-top: 0.2rem;
  border-radius: 0.3rem;
  box-sizing: border-box;
  ul {
    li {
      margin-bottom: 0.5rem;
    }
  }

  .title {
    font-size: 1rem;
    font-weight: 400;
    color: rgba(2, 95, 147, 1);
    padding: 0.3rem 0;
    border-bottom: 1px solid #08ae00;
    margin-bottom: 0.3rem;
  }
}

.providerBox {
  padding: 1rem;
  box-sizing: border-box;
  background: #ffffff;
  margin: 1rem;
  border-radius: 0.3rem;

  .title {
    padding: 0.3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #f2f4ff;
    margin-bottom: 0.3rem;
  }

  ul {
    padding: 0.5rem 0;

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .items {
        display: flex;
        align-items: center;
      }
    }
  }
  .el-avatar {
    margin-right: 0.4rem;
  }
  .btnRow {
    padding: 1rem 0;
    border-top: 1px solid #f2f4ff;
    display: flex;
    justify-content: center;

    .el-button {
      width: 8rem;
    }
  }
}
.cardBox {
  padding: 0.5rem;

  .cardItem {
    display: flex;
    .imgBox {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-right: 1rem;

      .el-avatar {
        margin-bottom: 0.5rem;
      }
    }
    .infoBox {
      flex: 1;
      padding: 0.5rem 0;
    }
    .infoBox > div {
      display: flex;
      justify-content: space-between;

      &:first-child {
        padding: 0 0.5rem 1rem;
      }
    }
    .numBox {
      padding: 1rem 0.5rem 0;
      border-top: 1px solid #f4f2ff;

      i {
        margin-right: 0.5rem;
      }
    }
    .numBox > div {
      display: flex;
      align-items: center;

      font-size: 0.75rem;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
      line-height: 1.5rem;
    }
  }
}
.site {
  font-size: 0.75rem;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  line-height: 1.5rem;
  margin-top: 0.3rem;
}
.information {
  padding: 1rem;
  margin: 1rem;
  background: #ffffff;
  box-sizing: border-box;

  .imgBox {
    display: flex;
    padding: 0.5rem 0;
    border-bottom: 1px solid #f4f2ff;

    .el-avatar {
      margin-right: 1rem;
    }
  }

  .text {
    font-size: 0.88rem;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    line-height: 1.5rem;
    padding: 1rem 0;
  }

  .infoBtn {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.cardItems{

.site{
    margin-bottom: 1rem;
    border-bottom: 1px solid #F4F2FF;
    padding-bottom: 1rem;
}
.inputBox{
    display: flex;
    align-items: center;

    label{
        flex-shrink: 0;
    }
}
.buttonBox{
    margin-top:2rem;
    padding-top:1rem;
    border-top:1px solid #f4f2ff;
    text-align: right;
}
}
</style>