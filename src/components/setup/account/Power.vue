<template>
    <div>
        <el-table
                :data="tableData"
                border
                size="mini"
                style="width: 100%">
            <el-table-column label="操作权限">
                <template slot-scope="scope">
                    <div>{{scope.row.name}}</div>
                </template>
            </el-table-column>
            <el-table-column
                    label="超级管理员"
                    width="120">
                <template slot-scope="scope">
                    <div><el-checkbox></el-checkbox></div>
                </template>
            </el-table-column>
            <el-table-column label="管理员"  width="80">
                <template slot-scope="scope">
                    <div><el-checkbox></el-checkbox></div>
                </template>
            </el-table-column>
            <el-table-column label="用户"  width="80">
                <template slot-scope="scope" >
                    <div><el-checkbox></el-checkbox></div>
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
                    name: '添加和编辑机构的基本信息',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '添加新链接',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '接受或拒绝链接申请',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '添加和编辑设备和服务项目',
                    address: '上海市普陀区金沙江路 1516 弄'
                }, {
                    date: '2016-05-03',
                    name: '添加、编辑、删除人员信息和权限设置',
                    address: '上海市普陀区金沙江路 1516 弄'
                }, {
                    date: '2016-05-03',
                    name: '查看全部订单',
                    address: '上海市普陀区金沙江路 1516 弄'
                }, {
                    date: '2016-05-03',
                    name: '查看自己参与的订单',
                    address: '上海市普陀区金沙江路 1516 弄'
                }, {
                    date: '2016-05-03',
                    name: '创建报价单',
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