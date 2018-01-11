<template>
  <content-view :status="status" @reload="init">
    <template v-if="status==AppStatus.READY">
      <div class="general-detail">

        <el-row :gutter="20">
          <el-col :span="12">
            <span>会员卡号：</span>
            <span>123</span>
          </el-col>
          <el-col :span="12">
            <span>会员等级：</span>
            <span>8</span>
          </el-col>
        </el-row>
        
      </div>
    </template>
  </content-view>
</template>

<script>
import { ContentView } from '@/components';
import { AppStatus } from '@/common/enums';

// import {  } from '@api';

export default {
  name: 'coupon-detail',
  props: {
    id: {
      type: Number,
      default: 11981,
    },
  },
  components: {
    ContentView,
  },
  data() {
    return {
      AppStatus,
      status: AppStatus.READY,
      page: null,
    }
  },
  computed: {
    //
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      //
    },
  }
}
</script>

<style scoped lang="scss">
.el-row {
  height: 30px;
  line-height: 30px;
}
</style>