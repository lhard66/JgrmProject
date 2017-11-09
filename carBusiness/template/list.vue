
<template>
  <div>
    <navigator :item-data="navData"></navigator>
    <content-view :status="status" @reload="init">
      <template v-if="status==AppStatus.READY">
        <div>6666</div>
      </template>
    </content-view>
  </div>
</template>
<script>
import { Navigator, ContentView } from '@/components';
import { AppStatus } from '@/common/enums';

// import { getFinanceInfo } from '@api';

export default {
  components: {
    Navigator,
    ContentView,
  },
  data() {
    return {
      AppStatus,
      navData: [{ 'name': '会员管理', 'path': '/member/list' }, { 'name': '会员卡管理', 'path': '#' }],
      status: AppStatus.READY,
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
      console.log('init');
    },
  },
  filters: {
    //
  }
}
</script>

<style scoped lang="scss">

</style>
