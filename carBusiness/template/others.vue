<c-dialog title="详情" :visible.sync="dialog.detail">
  <detail v-if="dialog.detail"></detail>
</c-dialog>

<c-dialog title="卡内项目" :width="450" :visible.sync="dialog.number">
  <num-operator v-if="dialog.number"></num-operator>
</c-dialog>