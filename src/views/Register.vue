<template>
    <div class="registerBox">
        <div class="logoBox">
            <img src="../assets/imgs/icon-LOGO2.png" alt="">
        </div>
        <div class="regBox">
            <div class="title">注册</div>
            <div>
                <div class="label">职位</div>
                <div>
                    <el-input placeholder="请输入您在所属机构中的职位名称"></el-input>
                </div>
            </div>
            <div>
                <div class="label">机构名称</div>
                <div>
                    <el-input placeholder="请输入所属机构的名称"></el-input>
                </div>
            </div>
            <div>
                <div class="label">机构地址</div>
                <div>
                    <el-row :gutter="20">
                        <el-col :span="12">
                            <div class="grid-content bg-purple">
                                <el-select v-model="pname" @change="choseProvince" placeholder="省级地区">
                                    <el-option v-for="(item,$index) in province" :key="$index" :label="item.name" :value="item.code">
                                    </el-option>
                                </el-select>
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple">
                                <el-select v-model="cname" @change="choseCity" placeholder="市级地区">
                                    <el-option v-for="(item,$index) in city" :key="$index" :label="item.name" :value="item.code">
                                    </el-option>
                                </el-select>
                            </div>
                        </el-col>
                        <el-col :span="24">
                            <div class="grid-content purple">
                                <el-input placeholder="请输入所属机构的详细地址" v-model="formData.adress"></el-input>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </div>
            <div class="btnBoxs">
                <el-button class="nextBtn" round @click="jump">下一步</el-button>
            </div>

        </div>
        <div class="goBack">返回首页 <i class="el-icon-arrow-right"></i></div>
    </div>
</template>

<script>
    // const ChineseDistricts = require('province-city-china/dist/data.json');
    import ChineseDistricts from "province-city-china/data"
    export default {
        data() {
            return {
                formData:{
                    position:"",//职位
                    labCode:"",//
                    labName:"",
                    provinceCode:"",
                    province:"",
                    cityCode:"",
                    city:"",
                    countryCode:"",
                    country:"",
                    adress:"",
                },
                ChineseDistricts:ChineseDistricts,
                province:[],
                shi1: [],
                qu1: [],
                city:[],
                block:[],
                pname:'',//省的名字
                pcode:"",
                cname:'',//市的名字
                ccode:"",
                bname:'' , //区的名字
                value: ''
            }
        },
        methods:{
            //注册接口
            register(){
                let that = this;


                this.formData.province=that.pname;
                this.formData.provinceCode=that.pcode;

                this.formData.city=that.cname;
                this.formData.cityCode=that.ccode;

                // this.Axios.post("/lab2lab/v1/requestor/register", this.formData).then(function (res) {
                //     console.log(res);
                //     if (res.code == 200) {
                //         that.$message({
                //             type: 'success',
                //             message: '注册成功'
                //         });
                //
                //     }
                // })
            },

            // 加载china地点数据，三级
            getCityData:function(){
                let that = this;
                that.ChineseDistricts.forEach(function(item,index){
                    //省级数据
                    that.province.push({id: item.code, value: item.name, children: item.cityList})
                })
            },
            // 选省
            choseProvince:function(e) {
                let that = this;
                that.province.forEach((item,index)=>{

                    if(e==item.code){
                        that.pname =item.name;
                        that.pcode=item.code;
                        console.log(item);
                        let cityList=that.ChineseDistricts.city;

                        let city=[];
                        cityList.forEach((ite,index)=>{
                            if(ite.province==item.province){
                                city.push(ite);
                            }
                        });
                        this.city=city;

                    }
                });

            },
            // 选市
            choseCity:function(e) {
                let that = this;
                that.block = [];
                for (var index3 in that.city) {
                    if (e === that.city[index3].id) {
                        that.qu1 = that.city[index3].children
                        that.cname = that.city[index3].value;

                        that.ccode=that.city[index3].code;

                        that.E = that.qu1[0].id
                        that.qu1.forEach(function(bitem,bindex){
                            that.block.push({id:bitem.code,value: bitem.name, children: []})
                        })
                    }
                }
            },
            // 选区
            choseBlock:function(e) {
                this.bname=e;
                console.log(this.bname)

            },
            jump(){
                this.$store.commit('register', this.formData);
                this.$router.push({
                    path: "/registerTwo",
                })
            },
        },

        created:function(){
            console.log(this.ChineseDistricts);
            this.province=this.ChineseDistricts.province;
            // this.getCityData()

        },


    }
</script>

<style lang="less" scoped>
    .registerBox {
        background: #F2F4FA;
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0;
        display: flex;
        flex-direction: column;
        align-items: center;

        .logoBox {
            height: 3.38rem;
            margin: 2rem;
        }

        .regBox {
            width: 31.25rem;
            height: 28.43rem;
            background: rgba(255, 255, 255, 1);
            border-radius: 0.3rem;
            padding:2rem 5rem;
            box-sizing: border-box;

            .label{
                line-height: 1.7rem;
            }

            .title{
                text-align: center;
                font-size:1.5rem;
                margin-bottom: 1rem;
            }


            .purple{
                margin:0.5rem 0;
            }

            .btnBoxs{
                display: flex;
            }


        }

        .el-button{
            width:100%;
            background:linear-gradient(90deg,rgba(4,175,0,1),rgba(52,225,34,1));
            color: #ffffff;
            margin-top:0.5rem;
        }

        .goBack{
            position: absolute;
            bottom:1rem;
            color:#999999;
        }
    }
</style>
