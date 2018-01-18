<el-table :data="billList.list" border>
<el-table-column prop="time" label="记账时间">
</el-table-column>
<el-table-column label="操作">
  <template slot-scope="scope">
    <el-button type="text" size="small" @click="billDetail(scope.row)">详情</el-button>
  </template>
</el-table-column>
</el-table>

<div class="pagination" v-if="paging && paging.total>10">
  <el-pagination @current-change="onPageChange" layout="prev, pager, next" :page-size="paging.pageSize" :current-page="paging.current" :total="paging.total">
  </el-pagination>
</div>