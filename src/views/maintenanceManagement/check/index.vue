<template>
  <base-card style="min-height:100%;">
    <el-tab-pane label="维修审核" disabled>
      <d2-crud
        ref="applications"
        :index-row="planTableConfig.indexRow"
        :columns="planTableConfig.columns"
        :data="planTableData"
        :options="planTableConfig.options"
        :rowHandle="planTableConfig.rowHandle"
        @refuse-handle="refuseRow"
        @commit-handle="commitRow"
      >
      </d2-crud>
    </el-tab-pane>
    <el-dialog :title="formTitle" :visible.sync="dialogVisible" width="30%">
      <el-input
        type="textarea"
        :rows="4"
        placeholder="请输入"
        v-model="reason"
      ></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </base-card>
</template>

<script>
import BaseCard from '@/components/BaseCard.vue'
import planTableConfig from './planTable'
export default {
  name: 'Check',
  components: {
    BaseCard
  },
  data() {
    return {
      planTableConfig,
      planTableData: [
        {
          id: 1,
          name: 'go dead',
          operator: 'wbd',
          application_id: 'csc',
          plan_complete_time: 'czc',
          is_submitted: 'vxvxc',
          check_status: 'xvvxv',
          process_status: 'xdfgdb',
          repair_time: 'xbxcvb',
          create_time: 'xcvcxv ',
          update_time: 'xcvcx',
          plan_resources: 'xvdxc'
        }
      ],
      dialogVisible: false,
      isCommitted: true,
      reason: ''
    }
  },
  computed: {
    hasSelected() {
      return this.selected.length === 0
    },
    formTitle() {
      return this.isCommitted ? '请填写审核意见' : '请填写驳回理由'
    }
  },
  mounted() {},
  methods: {
    async getList() {},
    refuseRow(e) {
      this.dialogVisible = true
      this.isCommitted = false
    },
    commitRow(e) {
      this.dialogVisible = true
      this.isCommitted = true
    }
  }
}
</script>

<style></style>
