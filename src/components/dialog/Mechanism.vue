<template>
    <div>
        <el-dialog title="录入记录"  width="50%" center :visible.sync="dialogFormVisible">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="机构名称" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="机构地址" prop="region">
                    <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                    <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>

                <el-form-item label="机构类型(可多选)" prop="type">
                    <el-checkbox-group v-model="ruleForm.type">
                        <el-checkbox label="检测实验室" name="type"></el-checkbox>
                        <el-checkbox label="国家重点实验室" name="type"></el-checkbox>
                        <el-checkbox label="科研实验室" name="type"></el-checkbox>
                        <el-checkbox label="校准实验室" name="type"></el-checkbox>
                        <el-checkbox label="企业内部实验室" name="type"></el-checkbox>
                        <el-checkbox label="高校实验室" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>

                <el-form-item label="机构类型(可多选)" >
                    <el-checkbox-group v-model="ruleForm.type">
                        <el-checkbox label="ISO/IEC 17025认可" name="type"></el-checkbox>
                        <el-checkbox label="ISO/IEC 17025认可" name="type"></el-checkbox>
                        <el-checkbox label="地推活动" name="type"></el-checkbox>
                        <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                        <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>


                <el-form-item label="机构简介" >
                    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                </el-form-item>

                <el-form-item label="基本信息" prop="region">
                    <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                    <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                    <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                    <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="营业执照" >
                    <div>
                        <i></i>
                        <i></i>
                    </div>
                </el-form-item>

            </el-form>

            <div slot="footer" class="dialog-footer">
                <el-button round size="mini" type="primary" @click="centerDialogVisible = false">提 交</el-button>
                <el-button round size="mini" class="cancel" @click="centerDialogVisible = false">取 消</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                dialogFormVisible:true,
                ruleForm: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                rules: {
                    name: [
                        { required: true, message: '请输入活动名称', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    region: [
                        { required: true, message: '请选择活动区域', trigger: 'change' }
                    ],
                    date1: [
                        { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                    ],
                    date2: [
                        { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                    ],
                    type: [
                        { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
                    ],
                    resource: [
                        { required: true, message: '请选择活动资源', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: '请填写活动形式', trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped>

    .label,.title{
        margin:0.5rem 0;
        font-weight: 600;
    }

</style>