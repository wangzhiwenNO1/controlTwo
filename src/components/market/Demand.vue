<template>
  <el-row class="demand">
    <el-col :span="14">
      <div class="formBox">
        <div class="title">需求申请表</div>
        <!-- label-position="left" -->
        <el-form
                :model="formInfo"
                :rules="rules"
                ref="formInfo"
                label-position="left"
                label-width="120px"
                class="demo-ruleForm"
        >
          <el-form-item label="需求名称" prop="name">
            <el-input v-model="formInfo.demandName" placeholder="输入需求的名称，便于识别"></el-input>
          </el-form-item>
          <el-form-item label="需求项目">
            <el-input v-model="formInfo.demandItem" placeholder="输入需求的名称，便于识别"></el-input>
          </el-form-item>
          <el-form-item label="依据规则">
            <el-input v-model="formInfo.basisStandard" placeholder="输入需求的名称，便于识别"></el-input>
          </el-form-item>
          <el-form-item label="样品描述">
            <el-input v-model="formInfo.sampleDesc" placeholder="输入需求的名称，便于识别"></el-input>
          </el-form-item>

          <el-form-item label="报价截止日期" prop="date1">
            <el-date-picker
                    type="date"
                    placeholder="选择日期"
                    v-model="formInfo.quotationFinishDate"
                    style="width: 100%;"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="需求完成日期" >
            <el-date-picker
                    type="date"
                    placeholder="选择日期"
                    v-model="formInfo.finishDate"
                    style="width: 100%;"
            ></el-date-picker>
          </el-form-item>

          <el-form-item label="其他要求">
            <el-input v-model="formInfo.otherRequirements" placeholder="输入需求的名称，便于识别"></el-input>
          </el-form-item>
          <el-form-item label="技术资料">
            <div>上传需求相关的技术文件，如检测标准、试验计划等（选填）</div>
            <div>
              <el-col :span="12">
                <el-upload
                        class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :before-remove="beforeRemove"
                        multiple
                        :limit="3"
                        :on-exceed="handleExceed"
                        :file-list="fileList"
                >
                  <el-button size="mini" type="text" icon="el-icon-circle-plus-outline">选择文件</el-button>
                  <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
                </el-upload>
              </el-col>

              <el-button size="mini" round @click="submitForm('ruleForm')" class="greenBor">上传</el-button>
            </div>
          </el-form-item>
        </el-form>
      </div>
    </el-col>
    <el-col :span="10">
      <div class="demandBox">
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
            <el-tag v-for="tag in tags" :key="tag.name" closable :type="tag.type">{{tag.name}}</el-tag>
            <!-- <i class="el-icon-close"></i> -->
          </li>
        </ul>
        <div class="btnRow">
          <el-button size="mini" round class="greenBtn">提交</el-button>
          <el-button size="mini" round class="cancelBtn">取消</el-button>
        </div>
      </div>
    </el-col>
  </el-row>
</template>
<script>
  export default {
    data() {
      return {
        formInfo:{
          email:"",
          demandName:"",
          demandItem:"",
          basisStandard:"",
          sampleDesc:"",
          quotationFinishDate:"",
          finishDate:"",
          otherRequirements:"",
          techFiles:"",

        },
        serviceProviders:[{id:"",labCode:"",labName:""}],//选择的服务方
        projects:[{id:"",projectName:""}],

        tags: [
          { name: "标签一", type: "" },
          { name: "标签二", type: "success" },
          { name: "标签三", type: "info" },
          { name: "标签四", type: "warning" },
          { name: "标签五", type: "danger" }
        ],
        fileList: [],
        ruleForm: {
          name: "",
          region: "",
          date1: "",
          date2: "",
          delivery: false,
          type: [],
          resource: "",
          desc: ""
        },
        rules: {
          name: [
            { required: true, message: "请输入活动名称", trigger: "blur" },
            { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
          ],
          region: [
            { required: true, message: "请选择活动区域", trigger: "change" }
          ],
          date1: [
            {
              type: "date",
              required: true,
              message: "请选择日期",
              trigger: "change"
            }
          ],
          date2: [
            {
              type: "date",
              required: true,
              message: "请选择时间",
              trigger: "change"
            }
          ],
          type: [
            {
              type: "array",
              required: true,
              message: "请至少选择一个活动性质",
              trigger: "change"
            }
          ],
          resource: [
            { required: true, message: "请选择活动资源", trigger: "change" }
          ],
          desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
        }
      };
    },
    methods: {
      submitForm(formName) {



        return;
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
      }
    }
  };
</script>
<style lang="less" scoped>
  .demand {
    .el-row {
      box-sizing: border-box;
      margin: 0;
    }

    .formBox {
      padding: 1rem;
      box-sizing: border-box;
      background: #ffffff;
      margin: 1rem;
      border-radius: 0.3rem;
      font-size: 0.8rem;

      .title {
        padding: 0.5rem;
        border-bottom: 1px solid #f2f4fa;
        margin-bottom: 0.5rem;
      }

      .el-form {
        font-size: 0.8rem;
      }
    }

    .demandBox {
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
          // display: flex;
          // justify-content: space-between;
          // flex-direction: column;

          .items {
            display: flex;
            align-items: center;

          }

          .el-tag{
            margin:0.3rem 0.3rem 0.3rem 0rem;
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
  }
</style>
