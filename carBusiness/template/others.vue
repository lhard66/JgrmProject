<c-dialog title="详情" :visible.sync="dialog.detail">
  <detail v-if="dialog.detail"></detail>
</c-dialog>

<c-dialog title="卡内项目" :width="450" :visible.sync="dialog.number">
  <num-operator v-if="dialog.number"></num-operator>
</c-dialog>

<el-select v-model="searchData.type" placeholder="请选择收款方式">
  <el-option label="区域一" value="shanghai"></el-option>
  <el-option label="区域二" value="beijing"></el-option>
</el-select>

<el-date-picker type="date" v-model="searchData.time" placeholder="选择记账日期" :picker-options="pickerOptions">
</el-date-picker>

<el-input class="general-input" v-model="searchData.keyword" placeholder="请输入手机号或车牌号">
</el-input>

<el-button type="primary" icon="search" :loading="searchLoading" @click="search">搜索</el-button>

<el-button class="add-bill" @click="addBill">记一笔</el-button>