<template>
  <div>
    <navigator :item-data="navData"></navigator>
    <contentPanel :status-data="status" v-on:reload="init">
      <template v-if="status==AppStatus.READY">
        <div class="form-box">
          <el-form ref="form" :model="form" :rules="rules" label-width="100px">
            <el-form-item label="备件类型：" prop="brand">
              <el-input v-model="form.brand"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" v-loading="submitStatus" @click="onSubmit('form')">保存备件</el-button>
            </el-form-item>
          </el-form>
        </div>
      </template>
    </contentPanel>
  </div>
</template>
<script>
import { Navigator, ContentPanel } from '@components/common';
import { AppStatus } from '@common/enum.js';
import {} from '@api';

export default {
  data: function () {
    return {
      AppStatus,
      status: AppStatus.READY,
      navData: [{ 'name': '门店管理', 'path': '/shop/business' }, { 'name': '配置管理', 'path': '/shop/maintain/list' }, { 'name': '新增套餐', 'path': '#' }],
      form: {
        brand: null,
      },
      rules: {
        brand: [{
          required: true,
          message: '请输入备件品牌'
        }],
      },
      pageData: {
        partsType: null,
      },
      submitStatus: false,
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      console.log('init');
    },
    onSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.submitStatus = true;
          console.log('onsubmit');
        }
      });
    }
  },
  components: {
    Navigator,
    ContentPanel,
  }
}
</script>