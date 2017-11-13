<el-table :data="cardList.list" border>
<el-table-column prop="name" label="卡名称">
</el-table-column>
<el-table-column prop="type" label="所属卡类型">
</el-table-column>
<el-table-column prop="deadline" label="有效期(月)">
</el-table-column>
<el-table-column prop="number" label="持卡会员(人数)">
</el-table-column>
<el-table-column label="操作" min-width="120">
  <template slot-scope="scope">
    <el-button type="text" size="small" @click="cardDetail(scope.row)">详情</el-button>
    <!-- <el-button type="text" size="small" @click="cardDel(scope.row)">删除</el-button> -->
  </template>
</el-table-column>
</el-table>

<div class="pagination" v-if="paging.pageSize>10">
<el-pagination @current-change="onPageChange" layout="prev, pager, next" :page-size="paging.pageSize" :current-page="paging.current" :total="paging.total">
</el-pagination>
</div>