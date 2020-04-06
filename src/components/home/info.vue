<template>
    <div>
        <el-table :data="tableData">
            <el-table-column v-for="(item, index) in tableHeader"
                             :label="item"
                             :column-key="item"
                             :prop="item"
                             :key="index"
            >
            </el-table-column>
        </el-table>

        <!--        <el-table :data="tableData">-->
        <!--            <el-table-column prop="id" label="ID"></el-table-column>-->
        <!--            <el-table-column prop="itemName" label="名称"></el-table-column>-->
        <!--            <el-table-column prop="description" label="描述"></el-table-column>-->
        <!--        </el-table>-->

        <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[5, 10, 20, 40]"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        name: "info",
        data() {
            return {
                tableData: [],
                tableHeader: [],
                currentPage: 1,
                pageSize: 10,
                total: 100
            }
        },
        props: {// 接收父组件传递过来的参数
        },
        created() {
            this.pageSize = 10;
            this.handleUserList()
        },
        methods: {
            // 初始页currentPage、初始每页数据数pagesize和数据data
            handleSizeChange: function (size) {
                this.pageSize = size;
                console.log("每页大小改变了...")  //每页下拉显示数据
                console.log(this.pageSize)  //每页下拉显示数据
                this.handleUserList();
            },
            handleCurrentChange: function (currentPage) {
                this.currentPage = currentPage;
                // console.log(this.currentPage)  //点击第几页
                this.handleUserList();
            },
            handleUserList() {
                this.loading = true;
                console.log("每页大小：" + this.pageSize)
                var offset = (this.currentPage - 1) * this.pageSize;
                this.postRequest('/toDoItem/list', 'offset=' + offset + '&max=' + this.pageSize).then(resp => {
                    this.loading = false;
                    console.log(resp);
                    if (resp) {
                        console.log('数组长度：' + resp.list.length);
                        var e = resp.list[0];
                        var ee = eval(e);//JSON.parse(e);
                        console.log('第一个元素：' + e);
                        console.log('元素类型：' + typeof e);
                        console.log('描述：' + e.description);
                        console.log('描述：' + ee);
                        console.log('表头：' + Object.keys(ee));
                        this.tableHeader = Object.keys(ee);
                        this.tableData = resp.list;
                        this.total = resp.total;
                    }
                })
            }
        },
        //---------------------------------------------------------------------
        mounted: function () {  // 加载完成后调用
        }
    }
</script>

<style scoped>

</style>