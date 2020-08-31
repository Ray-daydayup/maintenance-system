<template>
  <base-card style="min-height:100%;">
    <el-tab-pane label="项目记录" disabled>
      <d2-crud
        ref="applications"
        :index-row="planTableConfig.indexRow"
        :columns="planTableConfig.columns"
        :data="planTableData"
        :options="planTableConfig.options"
        :rowHandle="planTableConfig.rowHandle"
        @start-handle="refuseRow"
        @end-handle="commitRow"
      >
      </d2-crud>
    </el-tab-pane>
  </base-card>
</template>

<script>
import BaseCard from '@/components/BaseCard.vue'
import planTableConfig from './planTable'
export default {
  name: 'Record',
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
      dialogVisible: false
    }
  },
  mounted() {},
  methods: {
    async getList() {},
    refuseRow(e) {
      this.$confirm('是否开工?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: '提交成功!'
          })
        })
        .catch(() => {})
    },
    commitRow(e) {
      this.$confirm('是否完工?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: '提交成功!'
          })
        })
        .catch(() => {})
    }
  }
}
</script>

<style></style>
