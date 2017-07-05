<template>
  <div>
    <el-upload action="https://jsonplaceholder.typicode.com/posts/" accept=".xlsx" :on-change="handleChange" :file-list="fileList">
      <el-button type="warning">导入备件</el-button>
      <div slot="tip" class="el-upload__tip">只能上传Excel文件，且不超过500kb</div>
    </el-upload>
    <div class="footer">
      <el-button type="primary" class="btn-finish" @click="finish">导入完成</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        fileList: [],
      };
    },
    methods: {
      handleChange(file, fileList) {
        this.fileList = fileList;
      },
      finish() {
        this.$emit('finish');
      }
    }
  }
</script>

<style scoped>
.footer {
  overflow: hidden;
  margin-top: 20px;
}
.btn-finish {
  float: right;
}
</style>