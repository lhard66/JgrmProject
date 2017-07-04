<template>
  <div class="table">
    <navigator :item-data="navData"></navigator>
    <div class="introduce">
      <table>
        <tr>
          <th>保养工位</th>
          <th>工位说明</th>
        </tr>
        <tr>
          <td>4个，接待能力 20 车/天（单工位 上午 2车/天 下午 3车/天）</td>
          <td>工位数量取决于车生活平台对门店的实地考察评估，如需增加请联系平台商务人员</td>
        </tr>
      </table>
    </div>     
    <div class="handle-box">
      <el-select v-model="searchForm.schemeCategoryId" clearable placeholder="请选择套餐类型">
        <el-option v-for="item in schemeCategory" :key="item.id" :label="item.name" :value="item.id">
        </el-option>
      </el-select>
      <el-select v-model="searchForm.schemeCategoryId" clearable placeholder="请选择审核状态">
        <el-option v-for="item in schemeCategory" :key="item.id" :label="item.name" :value="item.id">
        </el-option>
      </el-select>
      <el-button type="primary" icon="search">搜索</el-button>
    </div>
    <el-table :data="tableData" border style="width: 100%" v-if="tableData!=null">
      <el-table-column prop="id" label="订单号码">
      </el-table-column>
      <el-table-column label="操作" width="180">
        <template scope="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination @current-change="handleCurrentChange" layout="prev, pager, next" :total="20">
      </el-pagination>
    </div>
  </div>
</template>
<script>
import Navigator from '@components/common/Navigator';
export default {
  data() {
    return {
      navData: [{ 'name': '门店管理', 'path': '/shop/business' }, { 'name': '门店业务', 'path': '/shop/business' }, { 'name': '配置管理', 'path': '/shop/maintain/list' }],
      schemeCategory: [{ 'id': 1, 'name': '大保养' }, { 'id': 2, 'name': '中保养' }],
      tableData: [{ 'id': 200 }],
      searchForm: {
        schemeCategoryId: null,
      }
    }
  },
  methods: {
    handleEdit(index, row) {

    },
    handleCurrentChange() {

    },
  },
  components: {
    Navigator,
  }
}
</script>
<style scoped>
table {
  border-collapse: collapse;
}

td,
th {
  padding: 9px 15px;
  min-height: 20px;
  line-height: 20px;
  border: 1px solid #e2e2e2;
  font-size: 14px;
}

.handle-box {
  margin-top: 20px;
  margin-bottom: 10px;
}

.handle-input {
  width: 200px;
  display: inline-block;
}
</style>

