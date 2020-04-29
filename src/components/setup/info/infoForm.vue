<template>
    <el-form :model="formData" label-position="left" size="mini" :rules="rules" ref="ruleForm" label-width="100px" class="infoForm">
        <div class="avatarBox">
            <el-upload
                    class="avatar-uploader"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <div>
                <el-button size="mini" round>上传头像</el-button>
            </div>
        </div>

        <el-form-item label="姓名">
            <el-input v-model="formData.userName"></el-input>
        </el-form-item>

        <el-form-item label="邮箱地址">
            <el-input v-model="formData.email"></el-input>
        </el-form-item>
        <el-form-item label="联系电话">
            <el-input v-model="formData.tel"></el-input>
        </el-form-item>

        <el-form-item label="手机号">
            <el-input v-model="formData.phone"></el-input>
        </el-form-item>

        <el-form-item label="原密码">
            <el-input v-model="formData.oldpwd"></el-input>
        </el-form-item>
        <el-form-item label="新密码">
            <el-input v-model="formData.password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
            <el-input v-model="formData.pwd"></el-input>
        </el-form-item>
        <el-form-item label="机构名称">
            <el-input v-model="formData.belongLabName"></el-input>
        </el-form-item>
        <el-form-item label="职位">
            <el-input v-model="formData.position"></el-input>
        </el-form-item>
        <el-form-item label="补充信息">
            <el-input v-model="formData.comment"></el-input>
        </el-form-item>


        <el-form-item class="itemBtn">
            <el-button size="mini" round type="primary" @click="submitForm('ruleForm')" class="greenBtn">更新</el-button>
            <el-button size="mini" round @click="resetForm('ruleForm')" class="cancelBtn">取消</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
    export default {
        data() {
            return {
                formData:{
                    userName:'',
                    email:'',
                    tel:'',
                    phone:'',
                    password:'',
                    belongLabId:'',
                    belongLabName:'',
                    position:'',
                    roleCode:'',
                    pic:'',
                    comment:'',
                    public:'',
                    orderHandler:'',

                    oldpwd:"",
                    pwd:"",

                },
                imageUrl: '',



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
            //查询当前用户信息
            getuserinfo(){
                let that = this;

                this.Axios.post("/lab2lab/v1/provider/getuserinfo", {}).then(function (res) {
                    console.log("查询当前用户信息",res);
                    if(res.data){
                        that.formData=res.data;
                    }
                })
            },
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
            resetForm() {

                let data=this.formData;
                let that = this;

                data.pic= this.imageUrl;



                this.Axios.post("/lab2lab/v1/provider/setuserinfo", data).then(function (res) {
                    console.log("更新当前用户信息",res);
                    if(res.code==200){
                        this.$message({
                            message: '更新成功',
                            type: 'success'
                        });
                    }

                })
            },
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            }

        }
    }
</script>

<style lang="less">
    .infoForm{
        background: #FFFFFF;
        margin:0 1rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        padding:0.5rem;
        -webkit-border-radius:0.3rem;
        -moz-border-radius: 0.3rem;
        border-radius:0.3rem;

        .el-form-item__label{
            width:5rem !important;
        }
        .el-form-item__content{
            margin-left:5rem !important;
        }

        .el-form-item{
            margin-bottom: 0.5rem;
        }

        .el-input{
            width:40%;
        }

        .avatarBox{
            display: flex;
            align-items: center;
            margin-bottom:0.5rem;
            border-bottom: 1px solid #eeeeee;
            padding-bottom: 0.5rem;


            .avatar-uploader .el-upload {
                border: 1px dashed #d9d9d9;
                border-radius: 6px;
                cursor: pointer;
                position: relative;
                overflow: hidden;
            }
            .avatar-uploader .el-upload:hover {
                border-color: #409EFF;
            }
            .avatar-uploader-icon {
                font-size: 28px;
                color: #8c939d;
                width: 10rem;
                height: 10rem;
                line-height: 10rem;
                text-align: center;
            }
            .avatar {
                width: 10rem;
                height: 10rem;
                display: block;
            }

            .el-avatar{
                margin-right: 1.5rem;
            }
        }
    }

    .itemBtn{
        margin-top: 2rem;
    }

</style>
