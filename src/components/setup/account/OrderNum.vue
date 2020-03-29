<template>
    <div>
        <el-table
                :data="tableData"
                border
                align="center"
                size="mini"
                style="width: 100%">
            <el-table-column label="选择" width="80">
                <template slot-scope="scope">

                    <div><el-checkbox></el-checkbox></div>
                </template>
            </el-table-column>
            <el-table-column label="订单编号规则">
                <template slot-scope="scope">
                    <div>{{scope.row.name}}</div>
                </template>
            </el-table-column>

        </el-table>
        <div class="btnRows">
            <el-button round size="mini">更新</el-button>
            <el-button round size="mini">取消</el-button>
        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '订单生成日期 (YYYYMMDD) + 三位当日顺序号 (001，002，…)',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '订单生成年月 (YYYYMM)  + 三位当月顺序号 (001，002，…)',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '订单生成年份 (YYYY)  +  三位当年顺序号 (001，002，…)',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '自定义',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        },
        methods: {
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            }
        }
    }
</script>
<style lang="less">
    .btnRows{
        padding:1rem;
        background: #FFFFFF;

    }
</style>