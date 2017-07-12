<template>
  <div class="table">
    <navigator :item-data="navData"></navigator>
    <contentPanel :status-data="status" @reload="init" id="contentPanel">
      <template v-if="status==AppStatus.READY">
        <div class="handle-box">
          <el-input v-model="searchForm.keyword" placeholder="请输入订单、昵称或电话" class="handle-input"></el-input>
          <el-date-picker v-model="searchForm.date" type="daterange" align="right" placeholder="请选择日期范围" :picker-options="searchDateOption">
          </el-date-picker>
          <el-select v-model="searchForm.keyword" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
          <el-select v-model="searchForm.keyword" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
          <el-button type="primary" icon="search" @click="search">搜索</el-button>
          <el-button @click="search">导出</el-button>
          <el-tooltip :content="`接单开关`" placement="top">
            <el-switch v-model="switchStatus" on-color="#13ce66" off-color="#ff4949">
            </el-switch>
          </el-tooltip>
        </div>
        <el-table :data="pageData" border style="width: 100%">
          <el-table-column prop="id" label="预约时间">
          </el-table-column>
          <el-table-column prop="createTime" label="下单用户">
          </el-table-column>
          <el-table-column prop="name" label="订单号码">
          </el-table-column>
          <el-table-column prop="phone" label="保养车辆">
          </el-table-column>
          <el-table-column prop="orderTitle" label="金额">
          </el-table-column>
          <el-table-column prop="price" label="支付方式">
          </el-table-column>
          <el-table-column prop="orderStatus" label="状态">
          </el-table-column>
          <el-table-column label="操作">
            <template scope="scope">
              <el-button type="text" size="small" @click="handleDetail(scope.row)">详情</el-button>
              <el-button type="text" size="small" @click="handleDetail(scope.row)">详情</el-button>
              <!--<el-button type="text" size="small" @click="handleDetail(scope.row)">详情</el-button>
              <el-button type="text" size="small" @click="handleDetail(scope.row)">详情</el-button>
              <el-button type="text" size="small" @click="handleDetail(scope.row)">详情</el-button>
              <el-button type="text" size="small" @click="handleDetail(scope.row)">详情</el-button>
              <el-button type="text" size="small" @click="handleDetail(scope.row)">详情</el-button>
              <el-button type="text" size="small" @click="handleDetail(scope.row)">详情</el-button>-->
            </template>
          </el-table-column>
        </el-table>
        <div class="pagination">
          <el-pagination @current-change="handleCurrentChange" layout="prev, pager, next" :total="40">
          </el-pagination>
        </div>
      </template>
    </contentPanel>
  </div>
</template>
<script>
import { Navigator, ContentPanel } from '@components/common';
import { AppStatus } from '@common/enum';

export default {
  components: {
    Navigator,
    ContentPanel,
  },
  data() {
    return {
      AppStatus,
      navData: [{ 'name': '订单管理', 'path': '/order/wash' }, { 'name': '车辆保养', 'path': '#' }],
      status: AppStatus.READY,
      searchDateOption: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
      pageData: null,
      searchForm: {
        keyword: '',
        date: [],
      },
      switchStatus: true,
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      console.log('init');
    },
    search() {
      console.log('search');
    },
    handleCurrentChange(currentPage) {
      console.log('page change');
    },
  },
}
</script>
<style scoped>
.handle-box {
  margin-bottom: 10px;
}

.handle-input {
  width: 200px;
  display: inline-block;
}
</style>
