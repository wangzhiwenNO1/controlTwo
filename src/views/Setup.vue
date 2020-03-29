<template>
    <div>
        <div class="tabBoxs">
            <div :class="type==1?'active':''" @click="jump(1)">组织信息</div>
            <div :class="type==2?'active':''" @click="jump(2)">个人信息</div>
            <div :class="type==3?'active':''" @click="jump(3)">账号设置</div>
        </div>
        <div class="setBox">
            <router-view></router-view>
        </div>
    </div>

</template>

<script>
    import Organization from "../components/setup/Organization";
    import Information from "../components/setup/Information";
    import Power from "../components/setup/account/Power";

    export default {
        components: {
            Organization,
            Information,
            Power

        },
        data() {
            return {
                activeName: 'second',
                type:1
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },
            jump(type){
                this.type=type;
                let url="";
                switch (type) {
                    case 1:
                        url="/setup/market";
                        break;
                    case 2:
                        url="/setup/information";
                        break;
                    case 3:
                        url="/setup/account";
                        break;
                    default:
                        break;
                }

                this.$router.push({
                    path: url,
                })
            }
        }
    };
</script>

<style lang="less" scoped>
    .tabBoxs{
        display: flex;
        padding:0 1rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        border-bottom: 1px solid #eeeeee;

        &>div{
            margin:0.5rem 1rem 0 0;
            background: #eeeeee;

            padding:0.3rem 0.5rem ;
            border-top-left-radius: 0.3rem;
            border-top-right-radius:0.3rem ;
            color:#666666;
            font-size:0.77rem;
        }

        .active{
            background:#04AF00;
            color: #ffffff;
        }

    }
    .setBox{

    }
</style>