<template>
  <div>
    <navigator :item-data="navData"></navigator>
    <content-view :status="status" @reload="init">
      <template v-if="status==AppStatus.READY">
        <el-form ref="form" :model="form" :rules="rules" label-width="100px" label-suffix="：">
          <el-form-item label="备件编号" prop="partsNo">
            <el-input v-model="form.partsNo"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" :loading="submitLoading" @click="onSubmit('form')">保存备件</el-button>
          </el-form-item>
        </el-form>
      </template>
    </content-view>
  </div>
</template>
<script>
import { Navigator, ContentView } from '@/components';
import { AppStatus } from '@//enums';
// import {} from '@api';

export default {
  name: 'card-editor',
  components: {
    Navigator,
    ContentView,
  },
  data() {
    return {
      AppStatus,
      status: AppStatus.READY,
      navData: [{ 'name': '会员管理', 'path': '/member/list' }, { 'name': '会员卡管理', 'path': '/member/list' }, { 'name': '编辑会员卡', 'path': '#' }],
      rules: {
        partsNo: [{
          required: true,
          message: '请输入备件编号'
        }],
      },
      submitLoading: false,
      form: {
        partsNo: null,
      },
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      // let partId = this.$route.params.partId;
      this.status = AppStatus.READY;
      console.log('init');
    },
    onSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          //
        }
      });
    },
  },
}
</script>

<style lang="scss" scoped>

</style>
